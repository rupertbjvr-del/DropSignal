import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  MapPin,
  ExternalLink,
  TrendingUp,
  Users,
  Eye,
  Heart,
  Share2,
  BarChart3,
  Target,
  Zap
} from 'lucide-react'

// Import product images for MapPin boards
import techGadgets from '../assets/tech-gadgets.jpg'
import homeOffice from '../assets/home-office.jpg'
import fitnessGear from '../assets/fitness-gear.png'
import fashionAccessories from '../assets/fashion-accessories.png'
import travelProducts from '../assets/travel-products.png'

const MapPinHub = () => {
  const [activeTab, setActiveTab] = useState('boards')

  // Sample MapPin data
  const pinterestStats = {
    followers: '125K',
    monthlyViews: '2.3M',
    totalPins: '1,847',
    engagement: '8.4%'
  }

  const pinterestBoards = [
    {
      id: 1,
      name: "Tech Gadgets 2025",
      description: "Latest tech drops that are trending on Amazon and social media",
      image: techGadgets,
      pinCount: 247,
      followers: 12500,
      category: "Technology",
      trending: true
    },
    {
      id: 2,
      name: "Home Office Essentials",
      description: "Productive workspace setup ideas and trending office gear",
      image: homeOffice,
      pinCount: 189,
      followers: 8900,
      category: "Home & Garden",
      trending: true
    },
    {
      id: 3,
      name: "Fitness & Wellness",
      description: "Home gym equipment and wellness products that actually work",
      image: fitnessGear,
      pinCount: 156,
      followers: 15200,
      category: "Health & Fitness",
      trending: false
    },
    {
      id: 4,
      name: "Fashion Accessories",
      description: "Minimalist accessories and trending fashion finds",
      image: fashionAccessories,
      pinCount: 203,
      followers: 18700,
      category: "Fashion",
      trending: true
    },
    {
      id: 5,
      name: "Travel Essentials",
      description: "Must-have travel gear for modern adventurers",
      image: travelProducts,
      pinCount: 134,
      followers: 9800,
      category: "Travel",
      trending: false
    }
  ]

  const trendingPins = [
    {
      id: 1,
      title: "Smart Wireless Charging Station",
      image: techGadgets,
      saves: 1247,
      clicks: 892,
      board: "Tech Gadgets 2025"
    },
    {
      id: 2,
      title: "Ergonomic Home Office Setup",
      image: homeOffice,
      saves: 2156,
      clicks: 1534,
      board: "Home Office Essentials"
    },
    {
      id: 3,
      title: "Minimalist Watch Collection",
      image: fashionAccessories,
      saves: 3421,
      clicks: 2187,
      board: "Fashion Accessories"
    },
    {
      id: 4,
      title: "Resistance Band Workout Kit",
      image: fitnessGear,
      saves: 987,
      clicks: 654,
      board: "Fitness & Wellness"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-red-50 to-pink-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">MapPin Hub</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              This is where traffic starts. Follow our MapPin boards to discover trending products 
              before they go viral. Our curated pins drive millions of views and conversions.
            </p>
            <div className="flex items-center justify-center gap-6">
              <Button 
                size="lg" 
                className="bg-red-500 hover:bg-red-600 text-white"
                onClick={() => window.open('https://pinterest.com/dropsignal', '_blank')}
              >
                <MapPin className="w-5 h-5 mr-2" />
                Follow on MapPin
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="w-5 h-5 mr-2" />
                View Profile
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="w-6 h-6 text-red-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{pinterestStats.followers}</div>
              <div className="text-sm text-gray-600">Followers</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Eye className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{pinterestStats.monthlyViews}</div>
              <div className="text-sm text-gray-600">Monthly Views</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{pinterestStats.totalPins}</div>
              <div className="text-sm text-gray-600">Total Pins</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <BarChart3 className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">{pinterestStats.engagement}</div>
              <div className="text-sm text-gray-600">Engagement Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('boards')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'boards'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              MapPin Boards
            </button>
            <button
              onClick={() => setActiveTab('trending')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'trending'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              Trending Pins
            </button>
            <button
              onClick={() => setActiveTab('strategy')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'strategy'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              MapPin Strategy
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* MapPin Boards Tab */}
        {activeTab === 'boards' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Our MapPin Boards</h2>
              <Badge className="bg-red-500 hover:bg-red-600">
                <TrendingUp className="w-3 h-3 mr-1" />
                Live Updates
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {pinterestBoards.map((board) => (
                <Card key={board.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={board.image} 
                      alt={board.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {board.trending && (
                      <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button className="bg-white text-gray-900 hover:bg-gray-100">
                        <MapPin className="w-4 h-4 mr-2" />
                        View Board
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">
                      {board.category}
                    </Badge>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {board.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {board.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center gap-4">
                        <span>{board.pinCount} pins</span>
                        <span>{board.followers.toLocaleString()} followers</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Trending Pins Tab */}
        {activeTab === 'trending' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Trending Pins This Week</h2>
              <Badge className="bg-green-500 hover:bg-green-600">
                <Zap className="w-3 h-3 mr-1" />
                High Performance
              </Badge>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingPins.map((pin) => (
                <Card key={pin.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={pin.image} 
                      alt={pin.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Button size="sm" className="bg-white text-gray-900 hover:bg-gray-100">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Pin
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                      {pin.title}
                    </h3>
                    <p className="text-xs text-gray-500 mb-3">{pin.board}</p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-1 text-red-600">
                        <Heart className="w-4 h-4" />
                        {pin.saves}
                      </div>
                      <div className="flex items-center gap-1 text-blue-600">
                        <Eye className="w-4 h-4" />
                        {pin.clicks}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                Pin Performance Insights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">3.2x</div>
                  <div className="text-sm text-gray-600">Higher engagement than average</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">89%</div>
                  <div className="text-sm text-gray-600">Click-through rate improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">156%</div>
                  <div className="text-sm text-gray-600">Conversion rate increase</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MapPin Strategy Tab */}
        {activeTab === 'strategy' && (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our MapPin Strategy</h2>
              <p className="text-gray-600 max-w-3xl">
                Learn how we leverage MapPin to drive traffic and conversions for affiliate marketing. 
                Our data-driven approach has generated millions of views and thousands of conversions.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Content Strategy</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• MapPin-optimized vertical images (2:3 ratio)</li>
                  <li>• SEO-focused pin descriptions with trending keywords</li>
                  <li>• Seasonal and trending product curation</li>
                  <li>• Rich Pins for enhanced product information</li>
                  <li>• Consistent brand aesthetic across all boards</li>
                </ul>
              </Card>

              <Card className="p-6">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Performance Metrics</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• 2.3M monthly impressions across all boards</li>
                  <li>• 8.4% average engagement rate (3x industry average)</li>
                  <li>• 125K+ engaged followers in our niche</li>
                  <li>• 89% click-through rate to affiliate products</li>
                  <li>• $50K+ monthly affiliate revenue from MapPin</li>
                </ul>
              </Card>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-8">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Want to Replicate Our Success?
                </h3>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Follow our MapPin boards to see our strategy in action. Study our pin designs, 
                  descriptions, and timing to understand what drives engagement in affiliate marketing.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-red-500 hover:bg-red-600 text-white"
                  onClick={() => window.open('https://pinterest.com/dropsignal', '_blank')}
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  Follow All Boards
                </Button>
                <Button variant="outline" size="lg">
                  <Share2 className="w-5 h-5 mr-2" />
                  Share Strategy
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default MapPinHub

