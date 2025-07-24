import React from 'react'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  FileText,
  Scale,
  AlertTriangle,
  Shield,
  ExternalLink,
  Mail,
  CheckCircle
} from 'lucide-react'

const TermsOfUse = () => {
  const keyTerms = [
    {
      icon: CheckCircle,
      title: "Acceptance of Terms",
      description: "By using DropSignal, you agree to be bound by these Terms of Use and our Privacy Policy."
    },
    {
      icon: Shield,
      title: "Permitted Use",
      description: "You may use our website for personal, non-commercial purposes in accordance with these terms."
    },
    {
      icon: ExternalLink,
      title: "Affiliate Links",
      description: "Our website contains affiliate links. We may earn commissions from purchases made through these links."
    },
    {
      icon: AlertTriangle,
      title: "Content Accuracy",
      description: "While we strive for accuracy, product information and prices may change. Always verify details with retailers."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Scale className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Terms of Use
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            These terms govern your use of DropSignal and outline the rights and 
            responsibilities of both users and our platform.
          </p>
          <Badge className="bg-purple-500 hover:bg-purple-600">
            <FileText className="w-3 h-3 mr-1" />
            Legal Agreement
          </Badge>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Terms */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Key Terms at a Glance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {keyTerms.map((term, index) => {
              const IconComponent = term.icon
              return (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{term.title}</h3>
                        <p className="text-gray-600 text-sm">{term.description}</p>
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
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-amber-800 mb-2">Effective Date: January 15, 2025</h3>
                <p className="text-amber-700 text-sm">
                  These Terms of Use constitute a legally binding agreement between you and DropSignal. 
                  Please read them carefully before using our website.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">1. Acceptance of Terms</h2>
          <p className="text-gray-600 mb-6">
            By accessing or using the DropSignal website ("Service"), you agree to be bound by these 
            Terms of Use ("Terms"). If you disagree with any part of these terms, then you may not 
            access the Service. These Terms apply to all visitors, users, and others who access or 
            use the Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">2. Description of Service</h2>
          <p className="text-gray-600 mb-6">
            DropSignal is a product curation and affiliate marketing website that provides:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Curated product recommendations across various categories</li>
            <li>MapPin-optimized content and product discovery</li>
            <li>Blog content about trending products and lifestyle topics</li>
            <li>Affiliate links to third-party retailers and brands</li>
            <li>Newsletter and email marketing services</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">3. User Accounts and Registration</h2>
          <p className="text-gray-600 mb-6">
            Currently, DropSignal does not require user registration for basic website access. 
            However, you may provide your email address to subscribe to our newsletter. When 
            providing any personal information, you agree to:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Provide accurate, current, and complete information</li>
            <li>Maintain and promptly update your information</li>
            <li>Be responsible for all activities under your email subscription</li>
            <li>Not use another person's email address without permission</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">4. Acceptable Use</h2>
          <p className="text-gray-600 mb-6">
            You may use our Service for lawful purposes only. You agree not to use the Service:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>In any way that violates applicable federal, state, local, or international law</li>
            <li>To transmit or procure the sending of any advertising or promotional material without our consent</li>
            <li>To impersonate or attempt to impersonate DropSignal, our employees, or other users</li>
            <li>To engage in any other conduct that restricts or inhibits anyone's use of the Service</li>
            <li>To attempt to gain unauthorized access to our systems or networks</li>
            <li>To use automated systems to access the Service without permission</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">5. Affiliate Links and Commissions</h2>
          <p className="text-gray-600 mb-6">
            DropSignal participates in various affiliate marketing programs. This means:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>We may earn commissions from purchases made through our affiliate links</li>
            <li>Affiliate links are clearly disclosed in accordance with FTC guidelines</li>
            <li>Using affiliate links does not increase the price you pay for products</li>
            <li>We are not responsible for the fulfillment, shipping, or customer service of affiliate products</li>
            <li>All transactions are between you and the third-party retailer</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">6. Content and Intellectual Property</h2>
          <p className="text-gray-600 mb-6">
            The Service and its original content, features, and functionality are and will remain 
            the exclusive property of DropSignal and its licensors. The Service is protected by 
            copyright, trademark, and other laws. Our trademarks and trade dress may not be used 
            in connection with any product or service without our prior written consent.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">User-Generated Content</h3>
          <p className="text-gray-600 mb-6">
            If you submit comments, feedback, or other content to our Service, you grant us a 
            non-exclusive, royalty-free, perpetual, and worldwide license to use, modify, and 
            display such content in connection with our Service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">7. Product Information and Pricing</h2>
          <p className="text-gray-600 mb-6">
            We strive to provide accurate product information and pricing, but:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Product information is provided by third-party retailers and may change without notice</li>
            <li>Prices displayed may not reflect current retailer pricing</li>
            <li>We are not responsible for pricing errors or product availability</li>
            <li>Always verify product details and pricing with the retailer before purchasing</li>
            <li>We do not guarantee the accuracy of product reviews or ratings</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">8. Disclaimers and Limitation of Liability</h2>
          <p className="text-gray-600 mb-6">
            The information on this Service is provided on an "as is" basis. To the fullest extent 
            permitted by law, DropSignal excludes all representations, warranties, conditions, and 
            other terms which might otherwise be implied by statute, common law, or the law of equity.
          </p>
          
          <p className="text-gray-600 mb-6">
            DropSignal shall not be liable for any direct, indirect, incidental, special, 
            consequential, or punitive damages arising out of your use of the Service, including 
            but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">9. Third-Party Links and Services</h2>
          <p className="text-gray-600 mb-6">
            Our Service may contain links to third-party websites or services that are not owned 
            or controlled by DropSignal. We have no control over and assume no responsibility for 
            the content, privacy policies, or practices of any third-party websites or services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">10. Privacy Policy</h2>
          <p className="text-gray-600 mb-6">
            Your privacy is important to us. Please review our Privacy Policy, which also governs 
            your use of the Service, to understand our practices regarding the collection and use 
            of your personal information.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">11. Termination</h2>
          <p className="text-gray-600 mb-6">
            We may terminate or suspend your access immediately, without prior notice or liability, 
            for any reason whatsoever, including without limitation if you breach the Terms. Upon 
            termination, your right to use the Service will cease immediately.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">12. Changes to Terms</h2>
          <p className="text-gray-600 mb-6">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any 
            time. If a revision is material, we will try to provide at least 30 days notice prior 
            to any new terms taking effect.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">13. Governing Law</h2>
          <p className="text-gray-600 mb-6">
            These Terms shall be interpreted and governed by the laws of the State of California, 
            United States, without regard to its conflict of law provisions. Our failure to enforce 
            any right or provision of these Terms will not be considered a waiver of those rights.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">14. Severability</h2>
          <p className="text-gray-600 mb-6">
            If any provision of these Terms is held to be invalid or unenforceable by a court, 
            the remaining provisions of these Terms will remain in effect.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">15. Entire Agreement</h2>
          <p className="text-gray-600 mb-6">
            These Terms constitute the sole and entire agreement between you and DropSignal regarding 
            the Service and supersede all prior and contemporaneous understandings, agreements, 
            representations, and warranties.
          </p>
        </div>

        {/* Contact Information */}
        <Card className="p-6 mt-8">
          <CardContent className="p-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Questions About These Terms?</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about these Terms of Use, please contact us at:
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-400" />
                <a 
                  href="mailto:legal@dropsignal.com" 
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  legal@dropsignal.com
                </a>
              </div>
              <div className="text-sm text-gray-500">
                <p>DropSignal</p>
                <p>Legal Department</p>
                <p>San Francisco, CA</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default TermsOfUse

