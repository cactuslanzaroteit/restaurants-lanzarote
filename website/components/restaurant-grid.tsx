"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Star, MapPin, Clock, Euro, Heart, ExternalLink, ChevronRight } from 'lucide-react'
import { useState } from 'react'
import { restaurants, getFeaturedRestaurants, Restaurant } from '@/lib/data'

const categories = [
  { id: 'all', label: 'All Restaurants', count: restaurants.length },
  { id: 'featured', label: 'Editor\'s Picks', count: getFeaturedRestaurants().length },
  { id: 'canarian', label: 'Canarian Cuisine', count: restaurants.filter(r => r.details.cuisine.includes('Canarian')).length },
  { id: 'seafood', label: 'Seafood', count: restaurants.filter(r => r.details.cuisine.includes('Seafood')).length },
  { id: 'romantic', label: 'Romantic', count: restaurants.filter(r => r.details.ambiance.includes('Romantic')).length },
  { id: 'family', label: 'Family Friendly', count: restaurants.filter(r => r.details.ambiance.includes('Family')).length },
  { id: 'views', label: 'Ocean Views', count: restaurants.filter(r => r.details.ambiance.includes('Ocean View')).length },
]

export function RestaurantGrid() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [favorites, setFavorites] = useState<string[]>([])

  const toggleFavorite = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    )
  }

  const filteredRestaurants = selectedCategory === 'all' 
    ? restaurants 
    : selectedCategory === 'featured'
    ? getFeaturedRestaurants()
    : restaurants.filter(r => 
        r.details.cuisine.some(c => c.toLowerCase().includes(selectedCategory.toLowerCase())) ||
        r.details.ambiance.some(a => a.toLowerCase().includes(selectedCategory.toLowerCase()))
      )

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Curated <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Restaurants</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl">
                Hand-picked selection of Lanzarote's finest dining establishments, 
                carefully curated by our local experts.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-colors flex items-center gap-2">
                <span className="font-medium">View Map</span>
                <ExternalLink className="h-4 w-4" />
              </button>
              <button className="px-6 py-3 rounded-xl border border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-colors flex items-center gap-2">
                <span className="font-medium">Filters</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex overflow-x-auto pb-4 gap-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium">{category.label}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    selectedCategory === category.id
                      ? 'bg-white/20'
                      : 'bg-white'
                  }`}>
                    {category.count}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Restaurant Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRestaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/restaurants/${restaurant.slug}`}>
                <div className="group relative overflow-hidden rounded-3xl bg-white border border-gray-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                  {/* Featured Badge */}
                  {restaurant.curation.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 text-white text-xs font-semibold flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        <span>Editor's Pick</span>
                      </div>
                    </div>
                  )}

                  {/* Favorite Button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      toggleFavorite(restaurant.id)
                    }}
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        favorites.includes(restaurant.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${restaurant.media.coverImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10" />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-white font-semibold text-sm">
                              {restaurant.curation.editorRating}
                            </span>
                          </div>
                          <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg">
                            <span className="text-white font-semibold text-sm">
                              {restaurant.details.priceRange}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {restaurant.name}
                      </h3>
                      <p className="text-orange-600 font-medium mb-2">
                        {restaurant.tagline}
                      </p>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {restaurant.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {/* Location */}
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{restaurant.contact.address.split(',')[0]}</span>
                      </div>

                      {/* Cuisine Tags */}
                      <div className="flex flex-wrap gap-2">
                        {restaurant.details.cuisine.slice(0, 3).map((cuisine) => (
                          <span
                            key={cuisine}
                            className="px-2 py-1 rounded-lg bg-gray-100 text-gray-700 text-xs font-medium"
                          >
                            {cuisine}
                          </span>
                        ))}
                      </div>

                      {/* Ambiance Tags */}
                      <div className="flex flex-wrap gap-2">
                        {restaurant.details.ambiance.slice(0, 2).map((ambiance) => (
                          <span
                            key={ambiance}
                            className="px-2 py-1 rounded-lg bg-blue-50 text-blue-700 text-xs font-medium"
                          >
                            {ambiance}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Details */}
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-500">
                          View details
                        </span>
                        <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="group px-8 py-4 rounded-2xl border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 flex items-center gap-3 mx-auto">
            <span className="text-lg font-semibold">Load More Restaurants</span>
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}