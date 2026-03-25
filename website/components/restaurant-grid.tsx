"use client"

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Star, MapPin, Clock, Euro, Heart, ExternalLink, ChevronRight } from 'lucide-react'
import { useState } from 'react'

// Mock data based on PRODUCT_DEFINITION.md schema
const mockRestaurants = [
  {
    id: 'el-diablo',
    slug: 'el-diablo-restaurant',
    name: 'El Diablo Restaurant',
    tagline: 'Dining over a volcanic grill',
    description: 'Located in Timanfaya National Park, this unique restaurant cooks food using geothermal heat from the volcano.',
    cuisine: ['Canarian', 'Grill', 'Seafood'],
    priceRange: '€€€',
    ambiance: ['Romantic', 'Unique Experience', 'Scenic Views'],
    location: 'Timanfaya National Park',
    editorRating: 9.2,
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 'la-casa-roja',
    slug: 'la-casa-roja',
    name: 'La Casa Roja',
    tagline: 'Authentic Canarian cuisine',
    description: 'Family-run restaurant serving traditional Canarian dishes in a charming red house with ocean views.',
    cuisine: ['Canarian', 'Traditional', 'Seafood'],
    priceRange: '€€',
    ambiance: ['Family Friendly', 'Ocean View', 'Traditional'],
    location: 'Arrecife',
    editorRating: 8.7,
    coverImage: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 'bodega-el-grifo',
    slug: 'bodega-el-grifo',
    name: 'Bodega El Grifo',
    tagline: 'Lanzarote\'s oldest winery',
    description: 'Historic winery with restaurant serving volcanic wine pairings and local specialties.',
    cuisine: ['Canarian', 'Wine Bar', 'Tapas'],
    priceRange: '€€',
    ambiance: ['Historic', 'Wine Cellar', 'Rustic'],
    location: 'La Geria',
    editorRating: 8.9,
    coverImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 'mirador-del-rio',
    slug: 'mirador-del-rio',
    name: 'Mirador del Río',
    tagline: 'Cliff-top dining with panoramic views',
    description: 'Spectacular restaurant perched on cliffs with 360-degree views of the ocean and neighboring islands.',
    cuisine: ['Mediterranean', 'Seafood', 'Fine Dining'],
    priceRange: '€€€',
    ambiance: ['Scenic Views', 'Romantic', 'Luxury'],
    location: 'North Coast',
    editorRating: 9.4,
    coverImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
  {
    id: 'el-novo',
    slug: 'el-novo',
    name: 'El Novo',
    tagline: 'Modern Canarian fusion',
    description: 'Innovative restaurant blending traditional Canarian ingredients with contemporary techniques.',
    cuisine: ['Fusion', 'Modern', 'Creative'],
    priceRange: '€€€',
    ambiance: ['Modern', 'Sophisticated', 'Trendy'],
    location: 'Puerto del Carmen',
    editorRating: 8.5,
    coverImage: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80',
    featured: false,
  },
  {
    id: 'la-cueva',
    slug: 'la-cueva',
    name: 'La Cueva',
    tagline: 'Dining in a volcanic cave',
    description: 'Unique restaurant built inside a natural volcanic cave, offering an unforgettable dining experience.',
    cuisine: ['Canarian', 'Grill', 'Unique'],
    priceRange: '€€€',
    ambiance: ['Unique Experience', 'Romantic', 'Adventure'],
    location: 'Jameos del Agua',
    editorRating: 9.1,
    coverImage: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80',
    featured: true,
  },
]

const categories = [
  { id: 'all', label: 'All Restaurants', count: 247 },
  { id: 'featured', label: 'Editor\'s Picks', count: 42 },
  { id: 'canarian', label: 'Canarian Cuisine', count: 89 },
  { id: 'seafood', label: 'Seafood', count: 67 },
  { id: 'fine-dining', label: 'Fine Dining', count: 34 },
  { id: 'romantic', label: 'Romantic', count: 56 },
  { id: 'views', label: 'Ocean Views', count: 48 },
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
    ? mockRestaurants 
    : selectedCategory === 'featured'
    ? mockRestaurants.filter(r => r.featured)
    : mockRestaurants

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-4">
                Curated <span className="text-gradient">Restaurants</span>
              </h2>
              <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl">
                Hand-picked selection of Lanzarote's finest dining establishments, 
                carefully curated by our local experts.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <button className="px-6 py-3 rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-colors flex items-center gap-2">
                <span className="font-medium">View Map</span>
                <ExternalLink className="h-4 w-4" />
              </button>
              <button className="px-6 py-3 rounded-xl border border-secondary-300 dark:border-secondary-700 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors flex items-center gap-2">
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
                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-glow'
                    : 'bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 hover:bg-secondary-200 dark:hover:bg-secondary-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className="font-medium">{category.label}</span>
                  <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                    selectedCategory === category.id
                      ? 'bg-white/20'
                      : 'bg-white dark:bg-secondary-700'
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
                <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 hover:shadow-premium-lg transition-all duration-500 hover-lift">
                  {/* Featured Badge */}
                  {restaurant.featured && (
                    <div className="absolute top-4 left-4 z-10">
                      <div className="px-3 py-1 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 text-white text-xs font-semibold flex items-center gap-1">
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
                    className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-secondary-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-secondary-700 transition-colors"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        favorites.includes(restaurant.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-secondary-400'
                      }`}
                    />
                  </button>

                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-10"
                      style={{
                        backgroundImage: `url(${restaurant.coverImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="flex items-center gap-1 bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg">
                            <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                            <span className="text-white font-semibold text-sm">
                              {restaurant.editorRating}
                            </span>
                          </div>
                          <div className="bg-black/60 backdrop-blur-sm px-2 py-1 rounded-lg">
                            <span className="text-white font-semibold text-sm">
                              {restaurant.priceRange}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="font-display text-2xl font-bold text-secondary-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {restaurant.name}
                      </h3>
                      <p className="text-accent-600 dark:text-accent-400 font-medium mb-2">
                        {restaurant.tagline}
                      </p>
                      <p className="text-secondary-600 dark:text-secondary-400 text-sm line-clamp-2">
                        {restaurant.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {/* Location */}
                      <div className="flex items-center gap-2 text-secondary-600 dark:text-secondary-400">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{restaurant.location}</span>
                      </div>

                      {/* Cuisine Tags */}
                      <div className="flex flex-wrap gap-2">
                        {restaurant.cuisine.map((cuisine) => (
                          <span
                            key={cuisine}
                            className="px-2 py-1 rounded-lg bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 text-xs font-medium"
                          >
                            {cuisine}
                          </span>
                        ))}
                      </div>

                      {/* Ambiance Tags */}
                      <div className="flex flex-wrap gap-2">
                        {restaurant.ambiance.map((ambiance) => (
                          <span
                            key={ambiance}
                            className="px-2 py-1 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium"
                          >
                            {ambiance}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* View Details */}
                    <div className="mt-6 pt-6 border-t border-secondary-100 dark:border-secondary-800">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-secondary-500 dark:text-secondary-500">
                          View details
                        </span>
                        <ChevronRight className="h-4 w-4 text-secondary-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
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
          <button className="group px-8 py-4 rounded-2xl border-2 border-secondary-300 dark:border-secondary-700 text-secondary-700 dark:text-secondary-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 flex items-center gap-3 mx-auto">
            <span className="text-lg font-semibold">Load More Restaurants</span>
            <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  )
}