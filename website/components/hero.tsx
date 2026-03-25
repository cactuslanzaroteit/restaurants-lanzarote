"use client"

import { motion } from 'framer-motion'
import { Search, MapPin, Star, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export function Hero() {
  const [searchQuery, setSearchQuery] = useState('')

  const featuredTags = [
    { label: 'Volcanic Grill', count: 12 },
    { label: 'Ocean View', count: 28 },
    { label: 'Romantic', count: 34 },
    { label: 'Family Friendly', count: 42 },
    { label: 'Michelin', count: 8 },
    { label: 'Wine Cellar', count: 15 },
  ]

  const stats = [
    { value: '247', label: 'Curated Restaurants' },
    { value: '4.8', label: 'Average Editor Rating' },
    { value: '18', label: 'Locations Covered' },
    { value: '42', label: 'Canarian Specialties' },
  ]

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-6">
              <span className="block text-secondary-900 dark:text-white">
                Discover Lanzarote's
              </span>
              <span className="block text-gradient mt-2">
                Finest Dining Experiences
              </span>
            </h1>
            <p className="text-xl text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto">
              Premium curated restaurant guide featuring hand-picked establishments, 
              authentic reviews, and local insights for the perfect dining experience.
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <div className="relative max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search restaurants, cuisines, or locations..."
                  className="w-full pl-12 pr-40 py-4 text-lg rounded-2xl border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 shadow-premium focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-2">
                  <button className="px-4 py-2 rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition-colors flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span className="font-medium">Near Me</span>
                  </button>
                  <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:opacity-90 transition-opacity flex items-center gap-2">
                    <span className="font-medium">Search</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Featured Tags */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <div className="flex flex-wrap justify-center gap-3">
              {featuredTags.map((tag) => (
                <button
                  key={tag.label}
                  className="group px-4 py-2 rounded-full bg-white dark:bg-secondary-800 border border-secondary-200 dark:border-secondary-700 hover:border-primary-500 dark:hover:border-primary-500 hover:shadow-glow transition-all duration-300"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-secondary-700 dark:text-secondary-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 font-medium">
                      {tag.label}
                    </span>
                    <span className="text-xs px-1.5 py-0.5 rounded-full bg-secondary-100 dark:bg-secondary-700 text-secondary-600 dark:text-secondary-400">
                      {tag.count}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="glass-premium rounded-2xl p-6 text-center hover-lift"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-secondary-600 dark:text-secondary-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12"
          >
            <button className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:shadow-glow-accent transition-all duration-300 flex items-center gap-3 mx-auto">
              <Star className="h-5 w-5" />
              <span className="text-lg font-semibold">Explore Editor's Picks</span>
              <ChevronRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}