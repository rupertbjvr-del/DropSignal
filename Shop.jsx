import React, { useState, useMemo } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { 
  Search, 
  Filter, 
  SlidersHorizontal,
  Grid3X3,
  List
} from 'lucide-react'
import ProductCard from '../components/ProductCard'

// Import product images
import techGadgets from '../assets/tech-gadgets.jpg'
import homeOffice from '../assets/home-office.jpg'
import fitnessGear from '../assets/fitness-gear.png'
import fashionAccessories from '../assets/fashion-accessories.png'
import travelProducts from '../assets/travel-products.png'

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [sortBy, setSortBy] = useState('trending')
  const [viewMode, setViewMode] = useState('grid')

  // Extended product data
  const allProducts = [
    {
      id: 1,
      title: "Smart Wireless Charging Station",
      description: "3-in-1 charging dock for iPhone, AirPods, and Apple Watch with fast charging technology",
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
      id: 2,
      title: "Ergonomic Home Office Chair",
      description: "Premium mesh back chair with lumbar support and adjustable height",
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
      id: 3,
      title: "Resistance Band Set",
      description: "Complete workout kit with 5 resistance levels and door anchor",
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
      id: 4,
      title: "Minimalist Watch Collection",
      description: "Sleek timepieces for every occasion with interchangeable straps",
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
      id: 5,
      title: "Travel Organizer Set",
      description: "Packing cubes and travel accessories bundle for organized trips",
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
  ]

  const categories = ['All', 'Tech Gear', 'Home Office', 'Fitness', 'Fashion', 'Travel']

  const filteredProducts = useMemo(() => {
    let filtered = allProducts

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(product => product.category === selectedCategory)
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
  }, [searchTerm, selectedCategory, sortBy])

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Featured Products</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our curated collection of trending products across all categories. 
              Each item is handpicked for quality, style, and value.
            </p>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className={selectedCategory === category ? "bg-gray-900 hover:bg-gray-800" : ""}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Sort and View Options */}
            <div className="flex items-center gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                <option value="trending">Trending</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              <div className="flex border border-gray-200 rounded-lg">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  className={viewMode === 'grid' ? 'bg-gray-100' : ''}
                >
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setViewMode('list')}
                  className={viewMode === 'list' ? 'bg-gray-100' : ''}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Results Info */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} products
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
            {searchTerm && ` for "${searchTerm}"`}
          </p>
          {filteredProducts.some(p => p.trending) && (
            <Badge className="bg-red-500 hover:bg-red-600">
              <span className="animate-pulse">🔥</span>
              Trending Items Available
            </Badge>
          )}
        </div>

        {/* Products */}
        {filteredProducts.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-6"
          }>
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                className={viewMode === 'list' ? 'flex flex-row' : ''}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filter criteria
            </p>
            <Button
              variant="outline"
              onClick={() => {
                setSearchTerm('')
                setSelectedCategory('All')
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>

      {/* Load More */}
      {filteredProducts.length > 0 && (
        <div className="text-center py-8">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      )}
    </div>
  )
}

export default Shop

