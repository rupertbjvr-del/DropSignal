import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { 
  Search, 
  Menu, 
  X,
  Instagram,
  Twitter,
  Facebook
} from 'lucide-react'

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-gray-900">
                DropSignal
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link 
                  to="/" 
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/') 
                      ? 'text-gray-900 border-b-2 border-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Home
                </Link>
                <Link 
                  to="/shop" 
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/shop') 
                      ? 'text-gray-900 border-b-2 border-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Shop
                </Link>
                <div className="relative group">
                  <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                    Categories
                  </button>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      <Link to="/category/tech-gear" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Tech Gear</Link>
                      <Link to="/category/home-office" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Home Office</Link>
                      <Link to="/category/fitness" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Fitness</Link>
                      <Link to="/category/fashion" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Fashion</Link>
                      <Link to="/category/travel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Travel</Link>
                      <Link to="/category/under-50" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Under $50</Link>
                    </div>
                  </div>
                </div>
                <Link 
                  to="/blog" 
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/blog') 
                      ? 'text-gray-900 border-b-2 border-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Blog
                </Link>
                <Link 
                  to="/pinterest" 
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/pinterest') 
                      ? 'text-gray-900 border-b-2 border-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  MapPin
                </Link>
                <Link 
                  to="/about" 
                  className={`px-3 py-2 text-sm font-medium transition-colors ${
                    isActive('/about') 
                      ? 'text-gray-900 border-b-2 border-gray-900' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  About
                </Link>
              </div>
            </div>

            {/* Search and Mobile menu button */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:block">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input 
                    type="text" 
                    placeholder="Search products..." 
                    className="pl-10 w-64"
                  />
                </div>
              </div>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-100">
              <Link to="/" className="text-gray-900 block px-3 py-2 text-base font-medium">Home</Link>
              <Link to="/shop" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">Shop</Link>
              <div className="px-3 py-2">
                <p className="text-sm font-medium text-gray-500 mb-2">Categories</p>
                <div className="pl-4 space-y-1">
                  <Link to="/category/tech-gear" className="text-gray-600 hover:text-gray-900 block py-1 text-sm">Tech Gear</Link>
                  <Link to="/category/home-office" className="text-gray-600 hover:text-gray-900 block py-1 text-sm">Home Office</Link>
                  <Link to="/category/fitness" className="text-gray-600 hover:text-gray-900 block py-1 text-sm">Fitness</Link>
                  <Link to="/category/fashion" className="text-gray-600 hover:text-gray-900 block py-1 text-sm">Fashion</Link>
                  <Link to="/category/travel" className="text-gray-600 hover:text-gray-900 block py-1 text-sm">Travel</Link>
                  <Link to="/category/under-50" className="text-gray-600 hover:text-gray-900 block py-1 text-sm">Under $50</Link>
                </div>
              </div>
              <Link to="/blog" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">Blog</Link>
              <Link to="/pinterest" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">MapPin</Link>
              <Link to="/about" className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-base font-medium">About</Link>
              <div className="px-3 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input 
                    type="text" 
                    placeholder="Search products..." 
                    className="pl-10 w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold mb-4">DropSignal</h3>
              <p className="text-gray-300 mb-6 max-w-md">
                We don't sell. We signal. Curated, signal-focused, trend-based discovery 
                for the modern lifestyle.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/shop" className="hover:text-white">Shop</Link></li>
                <li><Link to="/category/tech-gear" className="hover:text-white">Categories</Link></li>
                <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
                <li><Link to="/pinterest" className="hover:text-white">MapPin Hub</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-white">About</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
                <li><Link to="/affiliate-disclosure" className="hover:text-white">Affiliate Disclosure</Link></li>
                <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms of Use</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 DropSignal. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

