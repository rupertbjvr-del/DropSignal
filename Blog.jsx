import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Input } from '@/components/ui/input.jsx'
import { 
  Search,
  Filter,
  Calendar,
  User,
  ArrowRight,
  TrendingUp,
  ExternalLink
} from 'lucide-react'

// Import product images for blog posts
import techGadgets from '../assets/tech-gadgets.jpg'
import homeOffice from '../assets/home-office.jpg'
import fitnessGear from '../assets/fitness-gear.png'
import fashionAccessories from '../assets/fashion-accessories.png'
import travelProducts from '../assets/travel-products.png'

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "10 Viral Home Gadgets You Need in 2025",
      excerpt: "From smart charging stations to automated coffee makers, these trending home gadgets are taking MapPin by storm and transforming modern living spaces.",
      image: techGadgets,
      category: "Tech & Gadgets",
      author: "DropSignal Team",
      publishDate: "2025-01-15",
      readTime: "5 min read",
      featured: true,
      pinterestOptimized: true,
      slug: "viral-home-gadgets-2025"
    },
    {
      id: 2,
      title: "Top Amazon Fitness Picks This Month",
      excerpt: "Discover the fitness equipment and accessories that are trending on Amazon and MapPin. Perfect for your home gym setup or New Year fitness goals.",
      image: fitnessGear,
      category: "Fitness",
      author: "DropSignal Team",
      publishDate: "2025-01-12",
      readTime: "7 min read",
      featured: true,
      pinterestOptimized: true,
      slug: "amazon-fitness-picks-january"
    },
    {
      id: 3,
      title: "MapPin Trending: Tech Drops That Convert",
      excerpt: "Analysis of the most pinned tech products this quarter and why they're driving massive affiliate conversions. Data-driven insights for marketers.",
      image: techGadgets,
      category: "MapPin Marketing",
      author: "DropSignal Team",
      publishDate: "2025-01-10",
      readTime: "8 min read",
      featured: false,
      pinterestOptimized: true,
      slug: "pinterest-tech-drops-convert"
    },
    {
      id: 4,
      title: "Home Office Setup: Trending Products Under $100",
      excerpt: "Create a productive workspace without breaking the bank. These affordable home office essentials are MapPin favorites and Amazon bestsellers.",
      image: homeOffice,
      category: "Home Office",
      author: "DropSignal Team",
      publishDate: "2025-01-08",
      readTime: "6 min read",
      featured: false,
      pinterestOptimized: true,
      slug: "home-office-under-100"
    },
    {
      id: 5,
      title: "Fashion Accessories That Are MapPin Gold",
      excerpt: "The minimalist accessories taking over MapPin feeds. From statement watches to crossbody bags, these pieces are driving serious engagement.",
      image: fashionAccessories,
      category: "Fashion",
      author: "DropSignal Team",
      publishDate: "2025-01-05",
      readTime: "4 min read",
      featured: false,
      pinterestOptimized: true,
      slug: "fashion-accessories-pinterest-gold"
    },
    {
      id: 6,
      title: "Travel Gear That's Trending on Social Media",
      excerpt: "Pack like a pro with these viral travel accessories. From packing cubes to portable chargers, these items are must-haves for modern travelers.",
      image: travelProducts,
      category: "Travel",
      author: "DropSignal Team",
      publishDate: "2025-01-03",
      readTime: "5 min read",
      featured: false,
      pinterestOptimized: true,
      slug: "viral-travel-gear-social-media"
    }
  ]

  const categories = ['All', 'Tech & Gadgets', 'Fitness', 'MapPin Marketing', 'Home Office', 'Fashion', 'Travel']

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchTerm === '' || 
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    
    return matchesSearch && matchesCategory
  })

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = filteredPosts.filter(post => !post.featured)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">DropSignal Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              MapPin-optimized content, trending product insights, and affiliate marketing strategies. 
              Stay ahead of the curve with our data-driven product curation.
            </p>
            <div className="flex items-center justify-center gap-4">
              <Badge className="bg-red-500 hover:bg-red-600">
                <MapPin className="w-3 h-3 mr-1" />
                MapPin Optimized
              </Badge>
              <Badge variant="outline">
                <TrendingUp className="w-3 h-3 mr-1" />
                Trending Insights
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                type="text"
                placeholder="Search blog posts..."
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
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Featured Posts */}
        {selectedCategory === 'All' && searchTerm === '' && (
          <section className="mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Featured Posts</h2>
              <Badge variant="secondary">Editor's Picks</Badge>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-blue-500 hover:bg-blue-600">Featured</Badge>
                      {post.pinterestOptimized && (
                        <Badge className="bg-red-500 hover:bg-red-600">
                          <MapPin className="w-3 h-3 mr-1" />
                          MapPin
                        </Badge>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {post.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {formatDate(post.publishDate)}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <Button className="w-full bg-gray-900 hover:bg-gray-800">
                        Read Full Post
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              {selectedCategory === 'All' ? 'Latest Posts' : `${selectedCategory} Posts`}
            </h2>
            <p className="text-gray-600">
              {filteredPosts.length} post{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post) => (
                <Card key={post.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {post.pinterestOptimized && (
                      <Badge className="absolute top-3 right-3 bg-red-500 hover:bg-red-600">
                        <MapPin className="w-3 h-3 mr-1" />
                        MapPin
                      </Badge>
                    )}
                  </div>
                  <CardContent className="p-6">
                    <Badge variant="outline" className="mb-3">
                      {post.category}
                    </Badge>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(post.publishDate)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {post.readTime}
                      </div>
                    </div>
                    <Link to={`/blog/${post.slug}`}>
                      <Button variant="outline" className="w-full group-hover:bg-gray-900 group-hover:text-white transition-colors">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No posts found</h3>
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
        </section>

        {/* Newsletter Signup */}
        <section className="mt-16 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Never Miss a Trending Drop
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Get our latest blog posts, product insights, and MapPin trends delivered 
            straight to your inbox. Join thousands of affiliate marketers and product curators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-1"
            />
            <Button className="bg-gray-900 hover:bg-gray-800">
              Subscribe to Blog
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Blog

