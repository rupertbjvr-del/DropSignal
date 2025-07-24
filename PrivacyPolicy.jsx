import React from 'react'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Shield,
  Lock,
  Eye,
  Cookie,
  Mail,
  UserCheck,
  AlertTriangle,
  ExternalLink
} from 'lucide-react'

const PrivacyPolicy = () => {
  const privacyPrinciples = [
    {
      icon: Lock,
      title: "Data Security",
      description: "We use industry-standard security measures to protect your personal information from unauthorized access, disclosure, or misuse."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We clearly explain what data we collect, why we collect it, and how we use it. No hidden practices or unclear terms."
    },
    {
      icon: UserCheck,
      title: "Your Control",
      description: "You have control over your data. You can access, update, or delete your information at any time by contacting us."
    },
    {
      icon: Shield,
      title: "Minimal Collection",
      description: "We only collect data that's necessary to provide our services and improve your experience on DropSignal."
    }
  ]

  const dataTypes = [
    {
      category: "Information You Provide",
      items: [
        "Email address (when subscribing to our newsletter)",
        "Name and contact details (when contacting us)",
        "Comments and feedback (when you interact with our content)",
        "Survey responses (when you participate in our research)"
      ]
    },
    {
      category: "Information We Collect Automatically",
      items: [
        "IP address and general location",
        "Browser type and version",
        "Device information (mobile, desktop, tablet)",
        "Pages visited and time spent on our site",
        "Referring website or source",
        "Search terms used to find our site"
      ]
    },
    {
      category: "Third-Party Data",
      items: [
        "MapPin analytics (when you interact with our pins)",
        "Google Analytics data (website usage patterns)",
        "Social media interactions (likes, shares, follows)",
        "Affiliate partner data (purchase confirmations)"
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Privacy Policy
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. This policy explains how we collect, 
            use, and protect your information when you use DropSignal.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Badge className="bg-green-500 hover:bg-green-600">
              <Shield className="w-3 h-3 mr-1" />
              GDPR Compliant
            </Badge>
            <Badge variant="outline">
              <Lock className="w-3 h-3 mr-1" />
              Secure
            </Badge>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Privacy Principles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Our Privacy Principles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {privacyPrinciples.map((principle, index) => {
              const IconComponent = principle.icon
              return (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{principle.title}</h3>
                        <p className="text-gray-600 text-sm">{principle.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="prose prose-lg max-w-none">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-blue-800 mb-2">Last Updated: January 2025</h3>
                <p className="text-blue-700 text-sm">
                  This Privacy Policy was last updated on January 15, 2025. We may update this policy 
                  from time to time, and we'll notify you of any significant changes.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
          
          {dataTypes.map((dataType, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">{dataType.category}</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {dataType.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}

          <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
          <p className="text-gray-600 mb-6">
            We use the information we collect for the following purposes:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li><strong>Content Delivery:</strong> To provide you with curated product recommendations and blog content</li>
            <li><strong>Newsletter:</strong> To send you weekly product drops and trending insights (only if you subscribe)</li>
            <li><strong>Website Improvement:</strong> To analyze how our site is used and improve user experience</li>
            <li><strong>Customer Support:</strong> To respond to your questions, comments, and support requests</li>
            <li><strong>Legal Compliance:</strong> To comply with applicable laws and regulations</li>
            <li><strong>Security:</strong> To protect our website and users from fraud, abuse, and security threats</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Cookies and Tracking</h2>
          <div className="bg-gray-50 rounded-lg p-6 mb-6">
            <div className="flex items-start space-x-3">
              <Cookie className="w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cookie Usage</h3>
                <p className="text-gray-600 text-sm">
                  We use cookies and similar technologies to enhance your browsing experience, 
                  analyze site traffic, and understand where our visitors are coming from.
                </p>
              </div>
            </div>
          </div>
          
          <p className="text-gray-600 mb-6">
            Types of cookies we use:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
            <li><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our site</li>
            <li><strong>Marketing Cookies:</strong> Used to track visitors across websites for advertising purposes</li>
            <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Services</h2>
          <p className="text-gray-600 mb-6">
            We work with several third-party services to provide and improve our website:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li><strong>Google Analytics:</strong> Website traffic analysis and user behavior insights</li>
            <li><strong>MapPin Analytics:</strong> Pin performance and audience insights</li>
            <li><strong>Email Service Provider:</strong> Newsletter delivery and email marketing</li>
            <li><strong>Affiliate Partners:</strong> Amazon, ASOS, and other retailers for commission tracking</li>
            <li><strong>Social Media Platforms:</strong> MapPin, Instagram, Twitter for content sharing</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Sharing and Disclosure</h2>
          <p className="text-gray-600 mb-6">
            We do not sell, trade, or rent your personal information to third parties. We may share 
            your information only in the following circumstances:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li><strong>Service Providers:</strong> With trusted third-party services that help us operate our website</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
            <li><strong>Business Transfer:</strong> In the event of a merger, acquisition, or sale of assets</li>
            <li><strong>Consent:</strong> When you explicitly consent to sharing your information</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Rights and Choices</h2>
          <p className="text-gray-600 mb-6">
            You have several rights regarding your personal information:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li><strong>Access:</strong> Request a copy of the personal information we have about you</li>
            <li><strong>Correction:</strong> Ask us to correct any inaccurate or incomplete information</li>
            <li><strong>Deletion:</strong> Request that we delete your personal information</li>
            <li><strong>Portability:</strong> Request a copy of your data in a machine-readable format</li>
            <li><strong>Objection:</strong> Object to our processing of your personal information</li>
            <li><strong>Unsubscribe:</strong> Opt out of our newsletter at any time</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate technical and organizational security measures to protect your 
            personal information against unauthorized access, alteration, disclosure, or destruction. 
            However, no method of transmission over the internet is 100% secure, and we cannot 
            guarantee absolute security.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Children's Privacy</h2>
          <p className="text-gray-600 mb-6">
            DropSignal is not intended for children under 13 years of age. We do not knowingly 
            collect personal information from children under 13. If you are a parent or guardian 
            and believe your child has provided us with personal information, please contact us.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">International Users</h2>
          <p className="text-gray-600 mb-6">
            DropSignal is operated from the United States. If you are accessing our website from 
            outside the United States, please be aware that your information may be transferred to, 
            stored, and processed in the United States where our servers are located.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to This Policy</h2>
          <p className="text-gray-600 mb-6">
            We may update this Privacy Policy from time to time to reflect changes in our practices 
            or for other operational, legal, or regulatory reasons. We will notify you of any 
            material changes by posting the new Privacy Policy on this page and updating the 
            "Last Updated" date.
          </p>
        </div>

        {/* Contact Information */}
        <Card className="p-6 mt-8">
          <CardContent className="p-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Questions About This Privacy Policy?</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about this Privacy Policy or our data practices, 
              please don't hesitate to contact us.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:privacy@dropsignal.com" 
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                <Mail className="w-4 h-4 mr-2" />
                privacy@dropsignal.com
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default PrivacyPolicy

