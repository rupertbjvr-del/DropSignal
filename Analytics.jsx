import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const Analytics = () => {
  const location = useLocation()

  useEffect(() => {
    // Google Analytics 4 (GA4) tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search
      })
    }

    // MapPin Analytics
    if (typeof window !== 'undefined' && window.pintrk) {
      window.pintrk('track', 'pagevisit', {
        page_url: window.location.href,
        page_title: document.title
      })
    }

    // Custom event tracking for affiliate links
    const trackAffiliateClick = (event) => {
      const link = event.target.closest('a')
      if (link && link.href && (
        link.href.includes('amazon.com') ||
        link.href.includes('asos.com') ||
        link.href.includes('target.com') ||
        link.href.includes('affiliate')
      )) {
        // Google Analytics event
        if (window.gtag) {
          window.gtag('event', 'affiliate_click', {
            event_category: 'affiliate',
            event_label: link.href,
            value: 1
          })
        }

        // MapPin conversion tracking
        if (window.pintrk) {
          window.pintrk('track', 'lead', {
            lead_type: 'affiliate_click',
            value: 1,
            currency: 'USD'
          })
        }
      }
    }

    // Add event listeners for affiliate link tracking
    document.addEventListener('click', trackAffiliateClick)

    // Cleanup
    return () => {
      document.removeEventListener('click', trackAffiliateClick)
    }
  }, [location])

  return null // This component doesn't render anything
}

// Google Analytics initialization script
export const GoogleAnalyticsScript = () => (
  <>
    <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID', {
            page_title: document.title,
            page_location: window.location.href,
            send_page_view: false
          });
        `,
      }}
    />
  </>
)

// MapPin Analytics initialization script
export const MapPinAnalyticsScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        !function(e){if(!window.pintrk){window.pintrk = function () {
        window.pintrk.queue.push(Array.prototype.slice.call(arguments))};var
          n=window.pintrk;n.queue=[],n.version="3.0";var
          t=document.createElement("script");t.async=!0,t.src=e;var
          r=document.getElementsByTagName("script")[0];
          r.parentNode.insertBefore(t,r)}}("https://s.pinimg.com/ct/core.js");
        pintrk('load', 'PINTEREST_TAG_ID', {em: '<user_email_hashed>'});
        pintrk('page');
      `,
    }}
  />
)

// Facebook Pixel initialization script (optional)
export const FacebookPixelScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', 'FACEBOOK_PIXEL_ID');
        fbq('track', 'PageView');
      `,
    }}
  />
)

// Hotjar initialization script (optional)
export const HotjarScript = () => (
  <script
    dangerouslySetInnerHTML={{
      __html: `
        (function(h,o,t,j,a,r){
          h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
          h._hjSettings={hjid:HOTJAR_ID,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `,
    }}
  />
)

export default Analytics

