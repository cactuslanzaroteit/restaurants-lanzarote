"use client"

import { motion } from 'framer-motion'
import { MapPin, ChevronRight, Users, Star } from 'lucide-react'
import Link from 'next/link'

const featuredLocations = [
  {
    id: 'costa-teguise',
    name: 'Costa Teguise',
    description: 'Family-friendly resort area with beachfront dining and international cuisine',
    restaurantCount: 28,
    topRating: 9.4,
    image: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80',
    color: 'from-blue-500/20 to-primary-500/20',
  },
  {
    id: 'puerto-del-carmen',
    name: 'Puerto del Carmen',
    description: 'Vibrant harbor area with seafood restaurants and nightlife',
    restaurantCount: 42,
    topRating: 9.2,
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
    color: 'from-green-500/20 to-accent-500/20',
  },
  {
    id: 'playa-blanca',
    name: 'Playa Blanca',
    description: 'Upscale marina with fine dining and sunset views',
    restaurantCount: 35,
    topRating: 9.6,
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80',
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    id: 'arrecife',
    name: 'Arrecife',
    description: 'Capital city with traditional Canarian restaurants and tapas bars',
    restaurantCount: 31,
    topRating: 8.9,
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
    color: 'from-orange-500/20 to-yellow-500/20',
  },
  {
    id: 'timanfaya',
    name: 'Timanfaya',
    description: 'Volcanic region with unique geothermal cooking experiences',
    restaurantCount: 8,
    topRating: 9.8,
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    color: 'from-red-500/20 to-orange-500/20',
  },
  {
    id: 'la-geria',
    name: 'La Geria',
    description: 'Wine region with vineyard restaurants and volcanic wine tastings',
    restaurantCount: 12,
    topRating: 9.1,
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
    color: 'from-indigo-500/20 to-purple-500/20',
  },
]

export function FeaturedLocations() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50 dark:from-secondary-900 dark:to-secondary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
            Explore by <span className="text-gradient">Location</span>
          </h2>
          <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
            Discover the best dining experiences across Lanzarote's most popular areas
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredLocations.map((location, index) => (
            <motion.div
              key={location.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link href={`/locations/${location.id}`}>
                <div className="group relative overflow-hidden rounded-3xl bg-white dark:bg-secondary-900 border border-secondary-200 dark:border-secondary-800 hover:shadow-premium-lg transition-all duration-500 hover-lift h-full">
                  {/* Background Image with Gradient */}
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url(${location.image})` }}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${location.color}`} />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Location Badge */}
                    <div className="absolute top-4 left-4 z-10">
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm">
                        <MapPin className="h-4 w-4 text-white" />
                        <span className="text-white font-semibold text-sm">
                          {location.name}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="font-display text-2xl font-bold text-secondary-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {location.name}
                      </h3>
                      <p className="text-secondary-600 dark:text-secondary-400 text-sm line-clamp-2">
                        {location.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800">
                          <Users className="h-4 w-4 text-secondary-600 dark:text-secondary-400" />
                        </div>
                        <div>
                          <div className="text-sm text-secondary-500 dark:text-secondary-500">
                            Restaurants
                          </div>
                          <div className="font-bold text-secondary-900 dark:text-white">
                            {location.restaurantCount}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="p-2 rounded-lg bg-secondary-100 dark:bg-secondary-800">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                        </div>
                        <div>
                          <div className="text-sm text-secondary-500 dark:text-secondary-500">
                            Top Rating
                          </div>
                          <div className="font-bold text-secondary-900 dark:text-white">
                            {location.topRating}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* View Button */}
                    <div className="flex items-center justify-between pt-4 border-t border-secondary-100 dark:border-secondary-800">
                      <span className="text-sm text-secondary-500 dark:text-secondary-500">
                        Explore restaurants
                      </span>
                      <ChevronRight className="h-4 w-4 text-secondary-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 text-center">
          <Link href="/locations">
            <button className="group px-8 py-4 rounded-2xl border-2 border-secondary-300 dark:border-secondary-700 text-secondary-700 dark:text-secondary-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 flex items-center gap-3 mx-auto">
              <span className="text-lg font-semibold">View All Locations</span>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}