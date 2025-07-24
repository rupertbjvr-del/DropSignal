import React from 'react'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Button } from '@/components/ui/button.jsx'
import { ExternalLink, Star } from 'lucide-react'

const ProductCard = ({ product, className = "" }) => {
  const handleShopNow = () => {
    // In a real implementation, this would track the click and redirect to the affiliate URL
    console.log(`Redirecting to affiliate URL: ${product.affiliateUrl}`)
    // window.open(product.affiliateUrl, '_blank')
  }

  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 ${className}`}>
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
        {product.discount && (
          <Badge className="absolute top-3 right-3 bg-green-500 hover:bg-green-600">
            -{product.discount}%
          </Badge>
        )}
        {product.rating && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{product.rating}</span>
          </div>
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
          <div className="flex items-center gap-2">
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through">
                {product.originalPrice}
              </span>
            )}
            <span className="font-bold text-gray-900">{product.price}</span>
          </div>
          <Button 
            size="sm" 
            className="bg-gray-900 hover:bg-gray-800"
            onClick={handleShopNow}
          >
            Shop Now
            <ExternalLink className="w-3 h-3 ml-1" />
          </Button>
        </div>
        {product.whyPicked && (
          <div className="mt-3 p-2 bg-gray-50 rounded-lg">
            <p className="text-xs text-gray-600">
              <span className="font-medium">Why we picked it:</span> {product.whyPicked}
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default ProductCard

