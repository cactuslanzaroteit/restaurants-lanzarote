"use client"

import { useState, useCallback } from 'react'
import { GoogleMap, Marker, InfoWindow, useLoadScript } from '@react-google-maps/api'
import { MapPin, Navigation, Star, ExternalLink } from 'lucide-react'
import { restaurants } from '@/lib/data'

const mapContainerStyle = {
  width: '100%',
  height: '500px',
}

const center = {
  lat: 28.96,
  lng: -13.55,
}

const mapOptions = {
  disableDefaultUI: true,
  zoomControl: true,
  styles: [
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [{ visibility: 'off' }]
    }
  ]
}

export function GoogleMapsComponent() {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
  })

  const [selectedRestaurant, setSelectedRestaurant] = useState<any>(null)
  const [map, setMap] = useState<google.maps.Map | null>(null)

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map)
  }, [])

  const onUnmount = useCallback(() => {
    setMap(null)
  }, [])

  const handleMarkerClick = (restaurant: any) => {
    setSelectedRestaurant(restaurant)
  }

  const handleCloseInfoWindow = () => {
    setSelectedRestaurant(null)
  }

  const getMarkerIcon = (type: string) => {
    const baseIcon = {
      path: 'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',
      fillColor: type === 'volcanic' ? '#FF6B35' : type === 'ocean' ? '#1E6F9F' : '#2D2D2D',
      fillOpacity: 1,
      strokeWeight: 2,
      strokeColor: '#FFFFFF',
      scale: 1.5,
    }
    return baseIcon
  }

  if (loadError) {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-center">
        <div className="text-white text-lg mb-4">Unable to load Google Maps</div>
        <div className="text-gray-400">Please check your API key configuration</div>
      </div>
    )
  }

  if (!isLoaded) {
    return (
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-center">
        <div className="text-white text-lg">Loading Google Maps...</div>
        <div className="mt-4">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative rounded-3xl overflow-hidden shadow-2xl">
      {/* Map Header */}
      <div className="absolute top-0 left-0 right-0 z-10 p-6 bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white">Restaurant Map</h3>
            <p className="text-gray-300">Explore dining locations across Lanzarote</p>
          </div>
          <div className="flex items-center gap-3">
            <button 
              onClick={() => map?.panTo(center)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
              title="Reset view"
            >
              <Navigation className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Google Map */}
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={mapOptions}
      >
        {/* Markers for each restaurant */}
        {restaurants.map((restaurant) => {
          const type = restaurant.details.features.some(f => f.includes('Volcanic')) ? 'volcanic' :
                      restaurant.details.ambiance.some(a => a.includes('Ocean')) ? 'ocean' : 'default'
          
          return (
            <Marker
              key={restaurant.id}
              position={restaurant.contact.coordinates}
              icon={getMarkerIcon(type)}
              onClick={() => handleMarkerClick(restaurant)}
            />
          )
        })}

        {/* Info Window for selected restaurant */}
        {selectedRestaurant && (
          <InfoWindow
            position={selectedRestaurant.contact.coordinates}
            onCloseClick={handleCloseInfoWindow}
          >
            <div className="p-2 max-w-xs">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${selectedRestaurant.media.coverImage})` }}
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{selectedRestaurant.name}</h4>
                  <p className="text-sm text-orange-600">{selectedRestaurant.tagline}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold">{selectedRestaurant.curation.editorRating}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-700">{selectedRestaurant.details.priceRange}</span>
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-sm text-gray-600">
                    <MapPin className="h-3 w-3" />
                    <span>{selectedRestaurant.contact.address.split(',')[0]}</span>
                  </div>
                  <button className="mt-2 px-3 py-1 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 flex items-center gap-1">
                    <ExternalLink className="h-3 w-3" />
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>

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
              <div className="w-3 h-3 rounded-full bg-[#FF6B35]"></div>
              <span className="text-white text-sm">Volcanic Restaurants</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#1E6F9F]"></div>
              <span className="text-white text-sm">Ocean View</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#2D2D2D]"></div>
              <span className="text-white text-sm">Other Restaurants</span>
            </div>
          </div>
        </div>
      </div>

      {/* Map Footer */}
      <div className="p-6 bg-gradient-to-t from-black/60 to-transparent">
        <div className="flex items-center justify-between">
          <div className="text-gray-300 text-sm">
            <p>Interactive map showing {restaurants.length} restaurant locations</p>
            <p className="text-gray-400">Click markers for restaurant details</p>
          </div>
          <div className="text-xs text-gray-400">
            Powered by Google Maps
          </div>
        </div>
      </div>
    </div>
  )
}