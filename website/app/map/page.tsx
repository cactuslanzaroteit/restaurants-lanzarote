import { GoogleMapsComponent } from '@/components/google-maps'
import { SearchComponent } from '@/components/search'
import { MapPin, Filter, Navigation } from 'lucide-react'

export default function MapPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-12 md:py-16 bg-gradient-to-br from-blue-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">
              <span className="block text-gray-900">Explore Lanzarote's</span>
              <span className="block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mt-2">
                Restaurant Map
              </span>
            </h1>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto mb-8">
              Discover restaurants across the island with our interactive map. 
              Find dining spots by location, cuisine, or ambiance.
            </p>
            
            {/* Search Bar */}
            <div className="mb-8">
              <SearchComponent />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Filters */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl p-6 border border-gray-200 sticky top-24">
                <div className="flex items-center gap-3 mb-6">
                  <Filter className="h-5 w-5 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Filters</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Cuisine Filter */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Cuisine Type</h3>
                    <div className="space-y-2">
                      {['Canarian', 'Seafood', 'Mediterranean', 'Fusion', 'Traditional'].map((cuisine) => (
                        <label key={cuisine} className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                          <span className="text-gray-700">{cuisine}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Price Range</h3>
                    <div className="space-y-2">
                      {['€ (Budget)', '€€ (Moderate)', '€€€ (High)'].map((price) => (
                        <label key={price} className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                          <span className="text-gray-700">{price}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Ambiance Filter */}
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Ambiance</h3>
                    <div className="space-y-2">
                      {['Romantic', 'Family Friendly', 'Ocean View', 'Unique Experience', 'Luxury'].map((ambiance) => (
                        <label key={ambiance} className="flex items-center gap-3 cursor-pointer">
                          <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                          <span className="text-gray-700">{ambiance}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Apply Filters Button */}
                  <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 text-white font-semibold hover:opacity-90 transition-opacity">
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Map */}
            <div className="lg:col-span-2">
              <GoogleMapsComponent />
              
              {/* Map Instructions */}
              <div className="mt-8 bg-white rounded-3xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-4">
                  <Navigation className="h-5 w-5 text-blue-600" />
                  <h3 className="text-xl font-bold text-gray-900">How to Use the Map</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#FF6B35] flex-shrink-0 mt-0.5"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Volcanic Restaurants</h4>
                        <p className="text-sm text-gray-600">Unique dining experiences in volcanic locations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#1E6F9F] flex-shrink-0 mt-0.5"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Ocean View</h4>
                        <p className="text-sm text-gray-600">Restaurants with sea views</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="h-6 w-6 text-gray-400 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Click Markers</h4>
                        <p className="text-sm text-gray-600">Click on any marker to see restaurant details</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#2D2D2D] flex-shrink-0 mt-0.5"></div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Other Restaurants</h4>
                        <p className="text-sm text-gray-600">All other dining locations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}