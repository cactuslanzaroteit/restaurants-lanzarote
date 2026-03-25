import { Hero } from '@/components/hero'
import { RestaurantGrid } from '@/components/restaurant-grid'
import { FeaturedLocations } from '@/components/featured-locations'
import { Newsletter } from '@/components/newsletter'
import { SearchComponent } from '@/components/search'

export default function Home() {
  return (
    <>
      {/* Enhanced Hero with Search */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-orange-50" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        
        <div className="container relative mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="block text-gray-900">Discover Lanzarote's</span>
              <span className="block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mt-2">
                Finest Dining Experiences
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
              Premium curated restaurant guide featuring hand-picked establishments, 
              authentic reviews, and local insights for the perfect dining experience.
            </p>
            
            {/* Enhanced Search */}
            <div className="mb-12">
              <SearchComponent />
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">247</div>
                <div className="text-sm text-gray-600">Curated Restaurants</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">4.8</div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">18</div>
                <div className="text-sm text-gray-600">Locations</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200">
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">42</div>
                <div className="text-sm text-gray-600">Canarian Specialties</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RestaurantGrid />
      <FeaturedLocations />
      <Newsletter />
    </>
  )
}