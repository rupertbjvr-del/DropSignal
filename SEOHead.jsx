import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEOHead = ({ 
  title = "DropSignal - Signal. Style. Substance.",
  description = "Discover trending physical and digital products curated for the modern lifestyle. From Amazon to ASOS, we signal the drops that matter.",
  keywords = "trending products, affiliate marketing, MapPin products, product curation, lifestyle products, Amazon finds, ASOS fashion, home office, tech gadgets, fitness gear",
  image = "/og-image.jpg",
  url = "https://dropsignal.com",
  type = "website",
  author = "DropSignal Team",
  publishedTime,
  modifiedTime,
  category,
  tags = [],
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "DropSignal",
    "description": "Curated product discovery platform for trending lifestyle products",
    "url": "https://dropsignal.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://dropsignal.com/shop?search={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "DropSignal",
      "url": "https://dropsignal.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dropsignal.com/logo.png"
      },
      "sameAs": [
        "https://pinterest.com/dropsignal",
        "https://instagram.com/dropsignal",
        "https://twitter.com/dropsignal"
      ]
    }
  }

  const finalStructuredData = structuredData || defaultStructuredData

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="DropSignal" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dropsignal" />
      <meta name="twitter:creator" content="@dropsignal" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* MapPin Meta Tags */}
      <meta name="pinterest-rich-pin" content="true" />
      <meta property="article:author" content={author} />
      
      {/* Article-specific meta tags */}
      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {category && <meta property="article:section" content={category} />}
      {tags.length > 0 && tags.map((tag, index) => (
        <meta key={index} property="article:tag" content={tag} />
      ))}
      
      {/* Additional SEO Meta Tags */}
      <meta name="theme-color" content="#1f2937" />
      <meta name="msapplication-TileColor" content="#1f2937" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(finalStructuredData)}
      </script>
      
      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      
      {/* DNS Prefetch for affiliate partners */}
      <link rel="dns-prefetch" href="//amazon.com" />
      <link rel="dns-prefetch" href="//asos.com" />
      <link rel="dns-prefetch" href="//target.com" />
      <link rel="dns-prefetch" href="//pinterest.com" />
    </Helmet>
  )
}

export default SEOHead

