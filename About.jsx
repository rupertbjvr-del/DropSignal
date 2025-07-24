import React from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Target,
  Users,
  TrendingUp,
  MapPin,
  BarChart3,
  Heart,
  ExternalLink,
  Mail
} from 'lucide-react'

const About = () => {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "Founder & Product Curator",
      bio: "Former MapPin marketing manager with 8+ years in affiliate marketing. Passionate about discovering products before they trend.",
      expertise: ["MapPin Strategy", "Product Curation", "Trend Analysis"]
    },
    {
      name: "Marcus Rodriguez",
      role: "Content & SEO Specialist",
      bio: "Digital marketing expert specializing in MapPin SEO and content optimization. Drives millions of monthly impressions.",
      expertise: ["SEO Optimization", "Content Strategy", "Analytics"]
    },
    {
      name: "Emma Thompson",
      role: "Design & UX Lead",
      bio: "UI/UX designer focused on MapPin-optimized layouts and conversion-driven design. Creates pin-worthy product presentations.",
      expertise: ["Visual Design", "User Experience", "MapPin Optimization"]
    }
  ]

  const stats = [
    { label: "Monthly MapPin Views", value: "2.3M+", icon: MapPin },
    { label: "Products Curated", value: "1,800+", icon: Target },
    { label: "Affiliate Partners", value: "50+", icon: Users },
    { label: "Conversion Rate", value: "8.4%", icon: TrendingUp }
  ]

  const values = [
    {
      title: "Authenticity First",
      description: "We only recommend products we genuinely believe in. Every item is tested or thoroughly researched before making our curated lists.",
      icon: Heart
    },
    {
      title: "MapPin-Native",
      description: "Our content is designed specifically for MapPin users. We understand the platform's unique culture and optimization requirements.",
      icon: MapPin
    },
    {
      title: "Data-Driven Curation",
      description: "We use advanced analytics and trend data to identify products before they go viral, giving our audience early access to the best finds.",
      icon: BarChart3
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            About DropSignal
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We don't sell. We signal. DropSignal is a curated product discovery platform 
            that helps modern consumers find trending products before they go viral on MapPin.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Badge className="bg-red-500 hover:bg-red-600">
              <MapPin className="w-3 h-3 mr-1" />
              MapPin Optimized
            </Badge>
            <Badge variant="outline">
              <TrendingUp className="w-3 h-3 mr-1" />
              Trend Focused
            </Badge>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <IconComponent className="w-6 h-6 text-gray-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Born from a passion for discovering amazing products and sharing them with the world
            </p>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p>
              DropSignal started in 2023 when our founder, Sarah Chen, noticed a gap in the affiliate 
              marketing space. While working as a MapPin marketing manager, she realized that most 
              product recommendation sites were either too generic or focused solely on high-commission items.
            </p>
            
            <p>
              We wanted to create something different – a platform that genuinely curates products based 
              on quality, trending potential, and real user value. Our team combines deep MapPin expertise 
              with data-driven product analysis to surface items before they become mainstream.
            </p>
            
            <p>
              Today, DropSignal serves over 125,000 MapPin followers and generates millions of monthly 
              views. But more importantly, we've helped thousands of people discover products that genuinely 
              improve their lives – from productivity tools that transform home offices to fitness gear 
              that makes working out enjoyable.
            </p>
            
            <p>
              Our mission remains simple: signal the best products before everyone else discovers them, 
              and do it with complete transparency and authenticity.
            </p>
          </div>
        </div>
      </div>

      {/* Our Values */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at DropSignal
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <Card key={index} className="text-center p-6">
                  <CardContent className="p-0">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="w-6 h-6 text-gray-600" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The experts behind DropSignal's curated product recommendations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-sm text-gray-500 mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 text-sm">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Discover Your Next Favorite Product?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of smart shoppers who trust DropSignal to surface the best products 
            before they trend. Follow us on MapPin and never miss a drop.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-red-500 hover:bg-red-600 text-white"
              onClick={() => window.open('https://pinterest.com/dropsignal', '_blank')}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Follow on MapPin
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

