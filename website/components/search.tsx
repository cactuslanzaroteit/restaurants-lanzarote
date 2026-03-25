"use client"

import { useState, useEffect, useRef } from 'react'
import { Search, MapPin, X, ChevronRight, Star, Euro } from 'lucide-react'
import { searchRestaurants, Restaurant } from '@/lib/data'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export function SearchComponent() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Restaurant[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (query.trim() === '') {
      setResults([])
      return
    }

    const searchResults = searchRestaurants(query)
    setResults(searchResults)
  }, [query])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      setIsOpen(true)
    }
  }

  const clearSearch = () => {
    setQuery('')
    setResults([])
    setIsOpen(false)
  }

  const popularSearches = [
    'Volcanic Grill',
    'Ocean View',
    'Romantic',
    'Family Friendly',
    'Canarian',
    'Seafood',
    'Wine Tasting',
    'Fine Dining',
  ]

  return (
    <div className="relative w-full max-w-2xl mx-auto" ref={searchRef}>
      <form onSubmit={handleSearch} className="relative">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsOpen(true)}
            placeholder="Search restaurants, cuisines, or locations..."
            className="w-full pl-12 pr-12 py-4 text-lg rounded-2xl border border-gray-200 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          {query && (
            <button
              type="button"
              onClick={clearSearch}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
            >
              <X className="h-5 w-5 text-gray-400" />
            </button>
          )}
        </div>
        
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:opacity-90 transition-opacity font-semibold"
        >
          Search
        </button>
      </form>

      {/* Search Results Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full mt-2 w-full bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 max-h-96 overflow-y-auto"
          >
            {results.length > 0 ? (
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">
                    Found {results.length} restaurant{results.length !== 1 ? 's' : ''}
                  </h3>
                  <button
                    onClick={clearSearch}
                    className="text-sm text-gray-500 hover:text-gray-700"
                  >
                    Clear
                  </button>
                </div>
                
                <div className="space-y-3">
                  {results.map((restaurant) => (
                    <Link
                      key={restaurant.id}
                      href={`/restaurants/${restaurant.slug}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="p-3 rounded-xl hover:bg-gray-50 border border-transparent hover:border-gray-200 transition-all duration-200 group">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                            <div 
                              className="w-full h-full bg-cover bg-center"
                              style={{ backgroundImage: `url(${restaurant.media.coverImage})` }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between">
                              <h4 className="font-semibold text-gray-900 group-hover:text-blue-600 truncate">
                                {restaurant.name}
                              </h4>
                              <div className="flex items-center gap-2">
                                <div className="flex items-center gap-1">
                                  <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                                  <span className="text-sm font-semibold">{restaurant.curation.editorRating}</span>
                                </div>
                                <span className="text-sm font-semibold text-gray-700">{restaurant.details.priceRange}</span>
                              </div>
                            </div>
                            <p className="text-sm text-orange-600 font-medium truncate">
                              {restaurant.tagline}
                            </p>
                            <p className="text-sm text-gray-600 line-clamp-1">
                              {restaurant.description}
                            </p>
                            <div className="flex items-center gap-2 mt-2">
                              <MapPin className="h-3 w-3 text-gray-400" />
                              <span className="text-xs text-gray-500 truncate">
                                {restaurant.contact.address.split(',')[0]}
                              </span>
                            </div>
                            <div className="flex flex-wrap gap-1 mt-2">
                              {restaurant.details.cuisine.slice(0, 2).map((cuisine) => (
                                <span
                                  key={cuisine}
                                  className="px-2 py-0.5 rounded-full bg-gray-100 text-gray-700 text-xs font-medium"
                                >
                                  {cuisine}
                                </span>
                              ))}
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            ) : query ? (
              <div className="p-8 text-center">
                <div className="text-gray-400 mb-4">
                  <Search className="h-12 w-12 mx-auto" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">No results found</h3>
                <p className="text-gray-600 mb-6">Try different keywords or check out popular searches</p>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {popularSearches.map((search) => (
                    <button
                      key={search}
                      onClick={() => setQuery(search)}
                      className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 text-sm font-medium"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Popular Searches</h3>
                <div className="flex flex-wrap gap-2">
                  {popularSearches.map((search) => (
                    <button
                      key={search}
                      onClick={() => {
                        setQuery(search)
                        setIsOpen(true)
                      }}
                      className="px-4 py-2 rounded-full bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium"
                    >
                      {search}
                    </button>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Quick Filters</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <button className="p-3 rounded-xl border border-gray-200 hover:border-blue-500 hover:bg-blue-50 text-left">
                      <div className="font-medium text-gray-900">Editor's Picks</div>
                      <div className="text-sm text-gray-600">Top rated restaurants</div>
                    </button>
                    <button className="p-3 rounded-xl border border-gray-200 hover:border-orange-500 hover:bg-orange-50 text-left">
                      <div className="font-medium text-gray-900">Ocean View</div>
                      <div className="text-sm text-gray-600">Restaurants with sea views</div>
                    </button>
                    <button className="p-3 rounded-xl border border-gray-200 hover:border-green-500 hover:bg-green-50 text-left">
                      <div className="font-medium text-gray-900">Family Friendly</div>
                      <div className="text-sm text-gray-600">Great for families</div>
                    </button>
                    <button className="p-3 rounded-xl border border-gray-200 hover:border-purple-500 hover:bg-purple-50 text-left">
                      <div className="font-medium text-gray-900">Romantic</div>
                      <div className="text-sm text-gray-600">Perfect for dates</div>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}