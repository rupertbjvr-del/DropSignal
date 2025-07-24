import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import SEOHead from '../components/SEOHead'
import { 
  TrendingUp, 
  Star, 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight,
  MapPin,
  Mail,
  ArrowRight,
  Zap,
  Target,
  Heart
} from 'lucide-react'

// Import product images
import techGadgets from '../assets/tech-gadgets.jpg'
import homeOffice from '../assets/home-office.jpg'
import fitnessGear from '../assets/fitness-gear.png'
import fashionAccessories from '../assets/fashion-accessories.png'
import travelProducts from '../assets/travel-products.png'

const HomePage = () => {
  const [email, setEmail] = useState('')

  // Sample product data
  const trendingProducts = [
    {
      id: 1,
      title: "Smart Wireless Charging Station",
      description: "3-in-1 charging dock for iPhone, AirPods, and Apple Watch",
      price: "$89.99",
      image: techGadgets,
      category: "Tech Gear",
      trending: true,
      affiliateUrl: "#"
    },
    {
      id: 2,
      title: "Ergonomic Home Office Chair",
      description: "Premium mesh back chair with lumbar support",
      price: "$299.99",
      image: homeOffice,
      category: "Home Office",
      trending: true,
      affiliateUrl: "#"
    },
    {
      id: 3,
      title: "Resistance Band Set",
      description: "Complete workout kit with 5 resistance levels",
      price: "$24.99",
      image: fitnessGear,
      category: "Fitness",
      trending: true,
      affiliateUrl: "#"
    },
    {
      id: 4,
      title: "Minimalist Watch Collection",
      description: "Sleek timepieces for every occasion",
      price: "$149.99",
      image: fashionAccessories,
      category: "Fashion",
      trending: true,
      affiliateUrl: "#"
    },
    {
      id: 5,
      title: "Travel Organizer Set",
      description: "Packing cubes and travel accessories bundle",
      price: "$39.99",
      image: travelProducts,
      category: "Travel",
      trending: true,
      affiliateUrl: "#"
    }
  ]

  const categories = [
    { name: "Tech Gear", icon: Smartphone, count: "120+ items", slug: "tech-gear" },
    { name: "Home Office", icon: Home, count: "85+ items", slug: "home-office" },
    { name: "Fitness", icon: Dumbbell, count: "95+ items", slug: "fitness" },
    { name: "Fashion", icon: Shirt, count: "150+ items", slug: "fashion" },
    { name: "Travel", icon: Plane, count: "70+ items", slug: "travel" },
    { name: "Under $50", icon: DollarSign, count: "200+ items", slug: "under-50" }
  ]

  const handleEmailSubmit = (e) => {
    e.preventDefault()
    // Handle email signup
    console.log('Email signup:', email)
    setEmail('')
    alert('Thanks for subscribing! You\'ll receive our weekly product drops.')
  }

  return (
    <>
      <SEOHead 
        title="DropSignal - Signal. Style. Substance."
        description="Discover trending physical and digital products curated for the modern lifestyle. From Amazon to ASOS, we signal the drops that matter."
        keywords="trending products, affiliate marketing, MapPin products, product curation, lifestyle products, Amazon finds, ASOS fashion, home office, tech gadgets, fitness gear"
        url="https://dropsignal.com"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": "DropSignal",
          "description": "Curated product discovery platform for trending lifestyle products",
          "url": "https://dropsignal.com",
          "potentialAction": {
            "@type": "SearchAction",
            "target": "https://dropsignal.com/shop?search={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        }}
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Signal. Style. Substance.
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover trending physical and digital products curated for the modern lifestyle. 
              From Amazon to ASOS, we signal the drops that matter.
            </p>
            <Link to="/shop">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 text-lg">
                Discover the Latest Drops
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Products Carousel */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Trending Now</h2>
              <p className="text-gray-600">Curated picks that are making waves</p>
            </div>
            <Badge variant="secondary" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Hot Drops
            </Badge>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {trendingProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {product.trending && (
                    <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600">
                      Trending
                    </Badge>
                  )}
                </div>
                <CardContent className="p-4">
                  <Badge variant="outline" className="mb-2 text-xs">
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-gray-900">{product.price}</span>
                    <Button size="sm" className="bg-gray-900 hover:bg-gray-800">
                      Shop Now
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our curated collections across different lifestyle categories
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Link key={index} to={`/category/${category.slug}`}>
                  <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-gray-900 transition-colors duration-300">
                        <IconComponent className="w-6 h-6 text-gray-600 group-hover:text-white" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-1">{category.name}</h3>
                      <p className="text-sm text-gray-500">{category.count}</p>
                    </CardContent>
                  </Card>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Email Signup Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Get Weekly Product Drops Straight to Your Inbox
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Be the first to discover trending products, exclusive deals, and curated collections 
            before they go viral on MapPin.
          </p>
          
          <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-white"
            />
            <Button type="submit" className="bg-white text-gray-900 hover:bg-gray-100">
              <Mail className="w-4 h-4 mr-2" />
              Subscribe
            </Button>
          </form>
          
          <p className="text-xs text-gray-400 mt-4">
            No spam, unsubscribe at any time. We respect your privacy.
          </p>
        </div>
      </section>

      {/* MapPin Feed Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Follow Us on MapPin</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              This is where traffic starts. See our latest pins and discover trending products 
              that are making waves across social media.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">@DropSignal</h3>
            <p className="text-gray-600 mb-6">
              MapPin board preview will be embedded here showing our latest curated pins
            </p>
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
              Follow on MapPin
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage

