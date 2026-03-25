                  <div className="space-y-2">
                    {Object.entries(restaurant.hours)
                      .filter(([day]) => !['notes'].includes(day))
                      .map(([day, hours]) => (
                        <div key={day} className="flex justify-between text-sm">
                          <span className="text-gray-600 capitalize">
                            {day}
                          </span>
                          <span className="font-medium text-gray-900">
                            {hours}
                          </span>
                        </div>
                      ))}
                  </div>
                  {restaurant.hours.notes && (
                    <div className="mt-4 p-3 rounded-lg bg-gray-50">
                      <p className="text-sm text-gray-600">
                        {restaurant.hours.notes}
                      </p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-6 border-t border-gray-200 space-y-3">
                  <button className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-orange-500 text-white hover:opacity-90 transition-opacity font-semibold">
                    Make a Reservation
                  </button>
                  <button className="w-full py-3 rounded-xl border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 font-semibold flex items-center justify-center gap-2">
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            {/* Cuisine & Ambiance */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Cuisine & Ambiance
              </h3>
              
              <div className="space-y-6">
                {/* Cuisine */}
                <div>
                  <div className="font-medium text-gray-900 mb-3">
                    Cuisine Types
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.details.cuisine.map((cuisine) => (
                      <span
                        key={cuisine}
                        className="px-3 py-1.5 rounded-full bg-gray-100 text-gray-700 font-medium text-sm"
                      >
                        {cuisine}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ambiance */}
                <div>
                  <div className="font-medium text-gray-900 mb-3">
                    Ambiance
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.details.ambiance.map((ambiance) => (
                      <span
                        key={ambiance}
                        className="px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 font-medium text-sm"
                      >
                        {ambiance}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <div className="font-medium text-gray-900 mb-3">
                    Special Features
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.details.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1.5 rounded-full bg-orange-50 text-orange-700 font-medium text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dietary */}
                <div>
                  <div className="font-medium text-gray-900 mb-3">
                    Dietary Options
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.details.dietary.map((option) => (
                      <span
                        key={option}
                        className="px-3 py-1.5 rounded-full bg-green-50 text-green-700 font-medium text-sm"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="bg-white rounded-3xl p-8 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Restaurant Stats
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Editor Rating</span>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-gray-900">
                      {restaurant.curation.editorRating}/10
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Price Range</span>
                  <span className="font-bold text-gray-900">
                    {restaurant.details.priceRange}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Views This Month</span>
                  <span className="font-bold text-gray-900">
                    {restaurant.metadata.views.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Saved by Users</span>
                  <span className="font-bold text-gray-900">
                    {restaurant.metadata.saves}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Last Updated</span>
                  <span className="font-bold text-gray-900">
                    {restaurant.metadata.updatedAt.split('T')[0]}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}