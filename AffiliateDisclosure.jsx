import React from 'react'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Shield,
  DollarSign,
  ExternalLink,
  Heart,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const AffiliateDisclosure = () => {
  const disclosurePoints = [
    {
      icon: DollarSign,
      title: "Affiliate Commissions",
      description: "We earn a commission when you purchase products through our affiliate links. This doesn't cost you anything extra – the price remains the same."
    },
    {
      icon: Heart,
      title: "Honest Recommendations",
      description: "We only recommend products we genuinely believe in. Our editorial integrity is never compromised by potential earnings."
    },
    {
      icon: Shield,
      title: "Transparent Partnerships",
      description: "All sponsored content and brand partnerships are clearly marked. We maintain full transparency about our relationships with brands."
    },
    {
      icon: CheckCircle,
      title: "Quality First",
      description: "Products are selected based on quality, value, and trending potential – not commission rates. Your trust is more valuable than any commission."
    }
  ]

  const affiliatePartners = [
    "Amazon Associates",
    "ASOS Affiliate Program",
    "Target Affiliate Program",
    "Walmart Affiliate Program",
    "Best Buy Affiliate Program",
    "Wayfair Affiliate Program",
    "Nike Affiliate Program",
    "Adidas Affiliate Program",
    "Sephora Affiliate Program",
    "Various Direct Brand Partnerships"
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Affiliate Disclosure
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Transparency is at the core of everything we do at DropSignal. 
            Here's how we make money and why it doesn't affect our recommendations.
          </p>
          <Badge className="bg-blue-500 hover:bg-blue-600">
            <CheckCircle className="w-3 h-3 mr-1" />
            FTC Compliant
          </Badge>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Points */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            How Our Affiliate Program Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {disclosurePoints.map((point, index) => {
              const IconComponent = point.icon
              return (
                <Card key={index} className="p-6">
                  <CardContent className="p-0">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{point.title}</h3>
                        <p className="text-gray-600 text-sm">{point.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Detailed Disclosure */}
        <div className="prose prose-lg max-w-none mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Full Disclosure Statement</h2>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-yellow-800 mb-2">Important Notice</h3>
                <p className="text-yellow-700 text-sm">
                  This website contains affiliate links. When you click on these links and make a purchase, 
                  we may receive a commission at no additional cost to you.
                </p>
              </div>
            </div>
          </div>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">What Are Affiliate Links?</h3>
          <p className="text-gray-600 mb-6">
            Affiliate links are special URLs that contain a unique identifier linking back to DropSignal. 
            When you click on these links and make a purchase, the retailer pays us a small commission. 
            This is a standard practice in the industry and helps us keep our content free for you.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Editorial Promise</h3>
          <p className="text-gray-600 mb-6">
            We want to be completely transparent: we make money through affiliate commissions. However, 
            this does not influence our product recommendations in any way. We have a strict editorial 
            policy that separates our content creation from our monetization strategy.
          </p>

          <p className="text-gray-600 mb-6">
            Every product we feature is chosen based on:
          </p>
          <ul className="list-disc list-inside text-gray-600 mb-6 space-y-2">
            <li>Quality and value for money</li>
            <li>Trending potential on MapPin and social media</li>
            <li>Positive user reviews and ratings</li>
            <li>Our team's personal testing and research</li>
            <li>Alignment with our audience's interests and needs</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">Price Transparency</h3>
          <p className="text-gray-600 mb-6">
            Using our affiliate links does not increase the price you pay for any product. The price 
            you see is the same price you would pay if you went directly to the retailer's website. 
            The commission we receive comes from the retailer's marketing budget, not from your pocket.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">Sponsored Content</h3>
          <p className="text-gray-600 mb-6">
            Occasionally, we may publish sponsored content or accept products for review. When this 
            happens, we clearly mark the content as "Sponsored," "Paid Partnership," or "Gifted Product." 
            Even with sponsored content, our opinions remain honest and unbiased.
          </p>

          <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Trust Matters</h3>
          <p className="text-gray-600 mb-6">
            We've built DropSignal on trust and authenticity. Our reputation and relationship with 
            our audience are far more valuable than any single commission. If we ever recommend a 
            product that doesn't meet your expectations, please let us know – your feedback helps 
            us improve our curation process.
          </p>
        </div>

        {/* Affiliate Partners */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Affiliate Partners</h2>
          <p className="text-gray-600 mb-6">
            We partner with reputable retailers and brands that align with our values and quality standards:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {affiliatePartners.map((partner, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-3 text-center">
                <span className="text-sm font-medium text-gray-700">{partner}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information */}
        <Card className="p-6">
          <CardContent className="p-0">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Questions About Our Affiliate Program?</h3>
            <p className="text-gray-600 mb-4">
              If you have any questions about our affiliate relationships, disclosure practices, 
              or how we select products, we're here to help.
            </p>
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:hello@dropsignal.com" 
                className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Contact Us
              </a>
            </div>
          </CardContent>
        </Card>

        {/* Legal Notice */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            This disclosure is in accordance with the Federal Trade Commission's 16 CFR, Part 255: 
            "Guides Concerning the Use of Endorsements and Testimonials in Advertising."
          </p>
          <p className="mt-2">
            Last updated: January 2025
          </p>
        </div>
      </div>
    </div>
  )
}

export default AffiliateDisclosure

