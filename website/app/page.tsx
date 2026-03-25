export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-orange-50" />
        <div className="container relative mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="block text-gray-900">Discover Lanzarote's</span>
            <span className="block bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent mt-2">
              Finest Dining
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Premium curated restaurant guide featuring hand-picked establishments, 
            authentic reviews, and local insights.
          </p>
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search restaurants, cuisines, or locations..."
                className="w-full pl-12 pr-40 py-4 text-lg rounded-2xl border border-gray-200 bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-orange-500 text-white">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Restaurants */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            Curated <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Restaurants</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Restaurant Card 1 */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-blue-500 to-orange-400 relative">
                <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  Editor's Pick
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">El Diablo Restaurant</h3>
                <p className="text-orange-600 font-medium mb-3">Dining over a volcanic grill</p>
                <p className="text-gray-600 mb-4">Located in Timanfaya National Park, cooking with geothermal heat.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">★</span>
                    <span className="font-bold">9.2</span>
                  </div>
                  <span className="font-bold text-gray-900">€€€</span>
                </div>
              </div>
            </div>

            {/* Restaurant Card 2 */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-green-500 to-teal-400 relative">
                <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  Ocean View
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">La Casa Roja</h3>
                <p className="text-orange-600 font-medium mb-3">Authentic Canarian cuisine</p>
                <p className="text-gray-600 mb-4">Family-run restaurant with ocean views and traditional dishes.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">★</span>
                    <span className="font-bold">8.7</span>
                  </div>
                  <span className="font-bold text-gray-900">€€</span>
                </div>
              </div>
            </div>

            {/* Restaurant Card 3 */}
            <div className="bg-white rounded-3xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
              <div className="h-48 bg-gradient-to-br from-purple-500 to-pink-400 relative">
                <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm">
                  Wine Cellar
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Bodega El Grifo</h3>
                <p className="text-orange-600 font-medium mb-3">Lanzarote's oldest winery</p>
                <p className="text-gray-600 mb-4">Historic winery with volcanic wine pairings and local specialties.</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-500">★</span>
                    <span className="font-bold">8.9</span>
                  </div>
                  <span className="font-bold text-gray-900">€€</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="px-8 py-4 rounded-2xl border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 text-lg font-semibold">
              View All Restaurants
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-3xl bg-white border border-gray-200">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Curated Selection</h3>
              <p className="text-gray-600">Hand-picked restaurants by local experts</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-white border border-gray-200">
              <div className="text-4xl mb-4">🗺️</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Maps</h3>
              <p className="text-gray-600">Find restaurants with detailed location info</p>
            </div>
            <div className="text-center p-8 rounded-3xl bg-white border border-gray-200">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Premium Reviews</h3>
              <p className="text-gray-600">Authentic insights from dining experts</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}