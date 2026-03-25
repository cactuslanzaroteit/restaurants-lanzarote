"use client"

import { MapPin, Navigation, Maximize2 } from 'lucide-react'
import { useState } from 'react'

export function MapPlaceholder() {
  const [isExpanded, setIsExpanded] = useState(false)

  const restaurantLocations = [
    { name: 'El Diablo Restaurant', lat: 28.956, lng: -13.829, type: 'volcanic' },
    { name: 'La Casa Roja', lat: 28.962, lng: -13.551, type: 'ocean' },
    { name: 'Bodega El Grifo', lat: 28.978, lng: -13.635, type: 'wine' },
  ]

  return (
    <div className={`${isExpanded ? 'fixed inset-0 z-50' : 'relative'} bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden`}>
      {/* Map Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-6 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">Restaurant Map</h3>
            <p className="text-gray-300">Explore dining locations across Lanzarote</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white">
              <Navigation className="h-5 w-5" />
            </button>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
            >
              <Maximize2 className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative h-96 md:h-[500px]">
        {/* Simulated Map Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-green-900/20">
          {/* Simulated Lanzarote Island */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-48 bg-gradient-to-br from-amber-800 to-amber-900 rounded-full opacity-80">
            {/* Volcanic areas */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-red-900 to-black rounded-full"></div>
            <div className="absolute top-1/3 right-1/3 w-6 h-6 bg-gradient-to-br from-red-800 to-black rounded-full"></div>
            
            {/* Wine regions */}
            <div className="absolute bottom-1/4 left-1/3 w-12 h-8 bg-gradient-to-br from-green-900 to-emerald-800 rounded-full opacity-70"></div>
          </div>

          {/* Restaurant Markers */}
          {restaurantLocations.map((location, index) => (
            <div
              key={location.name}
              className={`absolute transform -translate-x-1/2 -translate-y-1/2 ${
                location.type === 'volcanic' ? 'text-red-400' :
                location.type === 'ocean' ? 'text-blue-400' :
                'text-green-400'
              }`}
              style={{
                left: `${50 + (location.lng + 13.7) * 20}%`,
                top: `${50 - (location.lat - 28.96) * 40}%`,
              }}
            >
              <div className="relative">
                <MapPin className="h-8 w-8 fill-current" />
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-black/80 text-white px-2 py-1 rounded-lg text-xs font-medium opacity-0 hover:opacity-100 transition-opacity">
                  {location.name}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Map Controls */}
        <div className="absolute bottom-6 left-6 z-10">
          <div className="flex flex-col gap-2">
            <button className="px-4 py-2 rounded-xl bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors text-sm font-medium">
              Show All Restaurants
            </button>
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:opacity-90 transition-opacity text-sm font-medium">
              Get Directions
            </button>
          </div>
        </div>

        {/* Legend */}
        <div className="absolute bottom-6 right-6 z-10">
          <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4">
            <h4 className="text-white font-semibold mb-3">Legend</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <span className="text-white text-sm">Volcanic Restaurants</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-400"></div>
                <span className="text-white text-sm">Ocean View</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <span className="text-white text-sm">Wine Regions</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Footer */}
      <div className="p-6 bg-gradient-to-t from-black/60 to-transparent">
        <div className="flex items-center justify-between">
          <div className="text-gray-300 text-sm">
            <p>Interactive map showing restaurant locations across Lanzarote</p>
            <p className="text-gray-400">Google Maps integration coming soon</p>
          </div>
          <button className="px-4 py-2 rounded-xl bg-white/10 text-white hover:bg-white/20 transition-colors text-sm font-medium">
            View Full Screen
          </button>
        </div>
      </div>

      {/* Close button for expanded mode */}
      {isExpanded && (
        <button
          onClick={() => setIsExpanded(false)}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 text-white hover:bg-black/80"
        >
          ✕
        </button>
      )}
    </div>
  )
}