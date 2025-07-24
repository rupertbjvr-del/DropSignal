import React, { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Search, 
  TrendingUp,
  Smartphone,
  Home,
  Dumbbell,
  Shirt,
  Plane,
  DollarSign
} from 'lucide-react'
import ProductCard from '../components/ProductCard'

// Import product images
import techGadgets from '../assets/tech-gadgets.jpg'
import homeOffice from '../assets/home-office.jpg'
import fitnessGear from '../assets/fitness-gear.png'
import fashionAccessories from '../assets/fashion-accessories.png'
import travelProducts from '../assets/travel-products.png'

const Category = () => {
  const { categoryName } = useParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState('trending')

  // Category configurations
  const categoryConfig = {
    'tech-gear': {
      name: 'Tech Gear',
      icon: Smartphone,
      description: 'Cutting-edge gadgets and smart devices for the modern lifestyle',
      seoTitle: 'Best Tech Gadgets in 2025',
      color: 'blue'
    },
    'home-office': {
      name: 'Home Office',
      icon: Home,
      description: 'Essential furniture and accessories for productive remote work',
      seoTitle: 'Best Home Office Gear in 2025',
      color: 'green'
    },
    'fitness': {
      name: 'Fitness',
      icon: Dumbbell,
      description: 'Equipment and accessories to keep you active and healthy',
      seoTitle: 'Best Fitness Gear in 2025',
      color: 'red'
    },
    'fashion': {
      name: 'Fashion',
      icon: Shirt,
      description: 'Trendy accessories and clothing for every style',
      seoTitle: 'Best Fashion Accessories in 2025',
      color: 'purple'
    },
    'travel': {
      name: 'Travel',
      icon: Plane,
      description: 'Essential gear for adventurers and frequent travelers',
      seoTitle: 'Best Travel Products in 2025',
      color: 'indigo'
    },
    'under-50': {
      name: 'Under $50',
      icon: DollarSign,
      description: 'Amazing finds that won\'t break the bank',
      seoTitle: 'Viral Under $50 Products',
      color: 'emerald'
    }
  }

  const currentCategory = categoryConfig[categoryName] || categoryConfig['tech-gear']

  // Sample products for each category
  const allProducts = {
    'tech-gear': [
      {
        id: 1,
        title: "Smart Wireless Charging Station",
        description: "3-in-1 charging dock for iPhone, AirPods, and Apple Watch",
        price: "$89.99",
        originalPrice: "$129.99",
        image: techGadgets,
        category: "Tech Gear",
        trending: true,
        rating: 4.8,
        discount: 31,
        affiliateUrl: "#",
        whyPicked: "Perfect for decluttering your nightstand while keeping all devices charged"
      },
      {
        id: 6,
        title: "Bluetooth Noise-Canceling Headphones",
        description: "Premium audio experience with active noise cancellation",
        price: "$199.99",
        originalPrice: "$299.99",
        image: techGadgets,
        category: "Tech Gear",
        trending: false,
        rating: 4.4,
        discount: 33,
        affiliateUrl: "#",
        whyPicked: "Studio-quality sound for music lovers and remote workers"
      },
      {
        id: 11,
        title: "LED Desk Lamp with Wireless Charging",
        description: "Modern desk lamp with built-in phone charging pad",
        price: "$79.99",
        originalPrice: "$119.99",
        image: techGadgets,
        category: "Tech Gear",
        trending: false,
        rating: 4.5,
        discount: 33,
        affiliateUrl: "#",
        whyPicked: "Two essentials in one sleek design - perfect for minimalists"
      }
    ],
    'home-office': [
      {
        id: 2,
        title: "Ergonomic Home Office Chair",
        description: "Premium mesh back chair with lumbar support",
        price: "$299.99",
        originalPrice: "$399.99",
        image: homeOffice,
        category: "Home Office",
        trending: true,
        rating: 4.6,
        discount: 25,
        affiliateUrl: "#",
        whyPicked: "Essential for anyone working from home - your back will thank you"
      },
      {
        id: 7,
        title: "Standing Desk Converter",
        description: "Transform any desk into a standing workstation",
        price: "$179.99",
        originalPrice: "$249.99",
        image: homeOffice,
        category: "Home Office",
        trending: false,
        rating: 4.3,
        discount: 28,
        affiliateUrl: "#",
        whyPicked: "Boost productivity and health without buying a new desk"
      },
      {
        id: 12,
        title: "Memory Foam Seat Cushion",
        description: "Ergonomic cushion for office chairs and car seats",
        price: "$34.99",
        originalPrice: "$54.99",
        image: homeOffice,
        category: "Home Office",
        trending: false,
        rating: 4.4,
        discount: 36,
        affiliateUrl: "#",
        whyPicked: "Instant comfort upgrade for any chair - your tailbone will thank you"
      }
    ],
    'fitness': [
      {
        id: 3,
        title: "Resistance Band Set",
        description: "Complete workout kit with 5 resistance levels",
        price: "$24.99",
        originalPrice: "$39.99",
        image: fitnessGear,
        category: "Fitness",
        trending: true,
        rating: 4.7,
        discount: 38,
        affiliateUrl: "#",
        whyPicked: "Gym-quality workout in a compact package - perfect for small spaces"
      },
      {
        id: 8,
        title: "Yoga Mat with Alignment Lines",
        description: "Non-slip yoga mat with pose alignment guides",
        price: "$49.99",
        originalPrice: "$79.99",
        image: fitnessGear,
        category: "Fitness",
        trending: false,
        rating: 4.6,
        discount: 38,
        affiliateUrl: "#",
        whyPicked: "Perfect for beginners and pros alike - the alignment lines are a game-changer"
      }
    ],
    'fashion': [
      {
        id: 4,
        title: "Minimalist Watch Collection",
        description: "Sleek timepieces for every occasion",
        price: "$149.99",
        originalPrice: "$199.99",
        image: fashionAccessories,
        category: "Fashion",
        trending: true,
        rating: 4.5,
        discount: 25,
        affiliateUrl: "#",
        whyPicked: "Timeless design that works with any outfit - a true investment piece"
      },
      {
        id: 9,
        title: "Crossbody Phone Bag",
        description: "Stylish hands-free phone carrier with card slots",
        price: "$29.99",
        originalPrice: "$49.99",
        image: fashionAccessories,
        category: "Fashion",
        trending: false,
        rating: 4.2,
        discount: 40,
        affiliateUrl: "#",
        whyPicked: "Trending on social media - perfect for festivals and daily errands"
      }
    ],
    'travel': [
      {
        id: 5,
        title: "Travel Organizer Set",
        description: "Packing cubes and travel accessories bundle",
        price: "$39.99",
        originalPrice: "$59.99",
        image: travelProducts,
        category: "Travel",
        trending: true,
        rating: 4.9,
        discount: 33,
        affiliateUrl: "#",
        whyPicked: "Game-changer for frequent travelers - makes packing and unpacking a breeze"
      },
      {
        id: 10,
        title: "Portable Luggage Scale",
        description: "Digital scale to avoid overweight baggage fees",
        price: "$19.99",
        originalPrice: "$34.99",
        image: travelProducts,
        category: "Travel",
        trending: false,
        rating: 4.1,
        discount: 43,
        affiliateUrl: "#",
        whyPicked: "Pays for itself in one trip - no more surprise baggage fees"
      }
    ],
    'under-50': [
      {
        id: 3,
        title: "Resistance Band Set",
        description: "Complete workout kit with 5 resistance levels",
        price: "$24.99",
        originalPrice: "$39.99",
        image: fitnessGear,
        category: "Fitness",
        trending: true,
        rating: 4.7,
        discount: 38,
        affiliateUrl: "#",
        whyPicked: "Gym-quality workout in a compact package - perfect for small spaces"
      },
      {
        id: 9,
        title: "Crossbody Phone Bag",
        description: "Stylish hands-free phone carrier with card slots",
        price: "$29.99",
        originalPrice: "$49.99",
        image: fashionAccessories,
        category: "Fashion",
        trending: false,
        rating: 4.2,
        discount: 40,
        affiliateUrl: "#",
        whyPicked: "Trending on social media - perfect for festivals and daily errands"
      },
      {
        id: 5,
        title: "Travel Organizer Set",
        description: "Packing cubes and travel accessories bundle",
        price: "$39.99",
        originalPrice: "$59.99",
        image: travelProducts,
        category: "Travel",
        trending: true,
        rating: 4.9,
        discount: 33,
        affiliateUrl: "#",
        whyPicked: "Game-changer for frequent travelers - makes packing and unpacking a breeze"
      },
      {
        id: 12,
        title: "Memory Foam Seat Cushion",
        description: "Ergonomic cushion for office chairs and car seats",
        price: "$34.99",
        originalPrice: "$54.99",
        image: homeOffice,
        category: "Home Office",
        trending: false,
        rating: 4.4,
        discount: 36,
        affiliateUrl: "#",
        whyPicked: "Instant comfort upgrade for any chair - your tailbone will thank you"
      },
      {
        id: 10,
        title: "Portable Luggage Scale",
        description: "Digital scale to avoid overweight baggage fees",
        price: "$19.99",
        originalPrice: "$34.99",
        image: travelProducts,
        category: "Travel",
        trending: false,
        rating: 4.1,
        discount: 43,
        affiliateUrl: "#",
        whyPicked: "Pays for itself in one trip - no more surprise baggage fees"
      }
    ]
  }

  const categoryProducts = allProducts[categoryName] || allProducts['tech-gear']

  const filteredProducts = useMemo(() => {
    let filtered = categoryProducts

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Sort products
    switch (sortBy) {
      case 'trending':
        filtered = filtered.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0))
        break
      case 'price-low':
        filtered = filtered.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')))
        break
      case 'price-high':
        filtered = filtered.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')))
        break
      case 'rating':
        filtered = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0))
        break
      default:
        break
    }

    return filtered
  }, [searchTerm, sortBy, categoryProducts])

  const IconComponent = currentCategory.icon

  return (
    <div className="min-h-screen bg-white">
      {/* Category Header */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className={`w-16 h-16 bg-${currentCategory.color}-100 rounded-2xl flex items-center justify-center mx-auto mb-6`}>
              <IconComponent className={`w-8 h-8 text-${currentCategory.color}-600`} />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {currentCategory.seoTitle}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {currentCategory.description}
            </p>
            <div className="flex items-center justify-center gap-4">
              <Badge className="bg-gray-900 hover:bg-gray-800">
                {filteredProducts.length} Products
              </Badge>
              {filteredProducts.some(p => p.trending) && (
                <Badge className="bg-red-500 hover:bg-red-600">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trending
                </Badge>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder={`Search ${currentCategory.name.toLowerCase()}...`}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
            >
              <option value="trending">Trending First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search criteria
            </p>
            <Button
              variant="outline"
              onClick={() => setSearchTerm('')}
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>

      {/* Related Categories */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {Object.entries(categoryConfig)
              .filter(([key]) => key !== categoryName)
              .slice(0, 5)
              .map(([key, config]) => {
                const RelatedIcon = config.icon
                return (
                  <a
                    key={key}
                    href={`/category/${key}`}
                    className="group bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300"
                  >
                    <div className={`w-10 h-10 bg-${config.color}-100 rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-${config.color}-200 transition-colors`}>
                      <RelatedIcon className={`w-5 h-5 text-${config.color}-600`} />
                    </div>
                    <h3 className="font-medium text-gray-900 text-sm">{config.name}</h3>
                  </a>
                )
              })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Category

