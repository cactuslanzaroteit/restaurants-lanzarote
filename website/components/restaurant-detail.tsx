"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Star, MapPin, Clock, Euro, Heart, ExternalLink, ChevronRight, 
  Phone, Globe, Mail, Users, Wifi, Car, Utensils, Wine, Coffee,
  ChevronLeft, Share2, Bookmark, Navigation
} from 'lucide-react'
import Image from 'next/image'

// Mock restaurant data based on PRODUCT_DEFINITION.md schema
const mockRestaurant = {
  id: 'el-diablo',
  slug: 'el-diablo-restaurant',
  name: 'El Diablo Restaurant',
  tagline: 'Dining over a volcanic grill',
  description: 'Located in Timanfaya National Park, this unique restaurant cooks food using geothermal heat from the volcano. Founded in 1970, El Diablo was built directly over a volcanic vent, offering a once-in-a-lifetime dining experience.',
  story: 'El Diablo Restaurant is more than just a dining establishment—it\'s a testament to human ingenuity and the raw power of nature. Built in 1970 by local architect César Manrique, the restaurant sits directly above a volcanic vent that reaches temperatures of 400°C. The heat is harnessed to cook traditional Canarian dishes, creating flavors that cannot be replicated anywhere else in the world.',
  
  contact: {
    address: 'Carretera de Yaiza a Tinajo, km 11,5, 35560 Tinajo, Las Palmas',
    coordinates: { lat: 28.956, lng: -13.829 },
    phone: '+34 928 84 00 57',
    website: 'https://www.restauranteeldiablo.com',
    email: 'info@restauranteeldiablo.com',
  },
  
  details: {
    cuisine: ['Canarian', 'Grill', 'Seafood', 'Volcanic Cooking'],
    priceRange: '€€€ (High)',
    ambiance: ['Romantic', 'Unique Experience', 'Scenic Views', 'Tourist Attraction'],
    features: ['Volcanic Grill', 'National Park Location', 'Geothermal Cooking', 'Historic'],
    dietary: ['Vegetarian Options', 'Gluten-Free Options'],
    capacity: 120,
    parking: true,
    wifi: false,
    terrace: true,
    heating: true,
    ac: false,
  },
  
  hours: {
    monday: '13:00-16:00',
    tuesday: '13:00-16:00',
    wednesday: '13:00-16:00',
    thursday: '13:00-16:00',
    friday: '13:00-16:00',
    saturday: '13:00-16:00',
    sunday: '13:00-16:00',
    notes: 'Reservations recommended, last seating at 15:30',
  },
  
  media: {
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
    ],
  },
  
  curation: {
    editorRating: 9.2,
    editorNotes: 'A must-visit for the unique volcanic cooking experience. The flavors are enhanced by the natural geothermal heat, creating dishes you won\'t find anywhere else.',
    perfectFor: ['Unique Experience', 'Special Occasion', 'Tourist Attraction', 'Food Adventure'],
    awards: ['Michelin Plate 2023', 'Travelers\' Choice 2024', 'Canary Islands Tourism Award'],
    featured: true,
    featuredUntil: '2026-06-30',
  },
  
  metadata: {
    views: 1245,
    saves: 89,
    lastUpdated: '2026-03-25',
  },
}

const menuItems = [
  { name: 'Volcanic Grilled Fish', description: 'Fresh local fish cooked over volcanic heat', price: '€28', category: 'Main' },
  { name: 'Papas Arrugadas', description: 'Traditional Canarian wrinkled potatoes with mojo sauce', price: '€12', category: 'Starter' },
  { name: 'Goat Stew', description: 'Slow-cooked local goat with vegetables', price: '€24', category: 'Main' },
  { name: 'Grilled Octopus', description: 'Tender octopus with paprika and olive oil', price: '€26', category: 'Main' },
  { name: 'Queso de Cabra', description: 'Local goat cheese with honey and nuts', price: '€14', category: 'Starter' },
  { name: 'Volcanic Chocolate Lava Cake', description: 'Chocolate cake with molten center', price: '€10', category: 'Dessert' },
]

export function RestaurantDetail() {
  const [activeTab, setActiveTab] = useState('overview')
  const [isFavorite, setIsFavorite] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'menu', label: 'Menu' },
    { id: 'photos', label: 'Photos' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'location', label: 'Location' },
  ]

  const features = [
    { icon: Users, label: 'Capacity', value: `${mockRestaurant.details.capacity} people` },
    { icon: Car, label: 'Parking', value: mockRestaurant.details.parking ? 'Available' : 'Not available' },
    { icon: Wifi, label: 'WiFi', value: mockRestaurant.details.wifi ? 'Available' : 'Not available' },
    { icon: Utensils, label: 'Terrace', value: mockRestaurant.details.terrace ? 'Available' : 'Not available' },
    { icon: Wine, label: 'Wine List', value: 'Extensive' },
    { icon: Coffee, label: 'Coffee', value: 'Specialty' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white dark:from-secondary-900 dark:to-secondary-950">
      {/* Hero Section */}
      <div className="relative h-[60vh] min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${mockRestaurant.media.coverImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Back Button */}
        <div className="absolute top-8 left-8 z-20">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 backdrop-blur-sm text-white hover:bg-black/80 transition-colors">
            <ChevronLeft className="h-4 w-4" />
            <span className="font-medium">Back to Restaurants</span>
          </button>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-8 right-8 z-20 flex items-center gap-3">
          <button 
            onClick={() => setIsFavorite(!isFavorite)}
            className="p-3 rounded-full bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-colors"
          >
            <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-white'}`} />
          </button>
          <button className="p-3 rounded-full bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-colors">
            <Share2 className="h-5 w-5 text-white" />
          </button>
          <button className="p-3 rounded-full bg-black/60 backdrop-blur-sm hover:bg-black/80 transition-colors">
            <Bookmark className="h-5 w-5 text-white" />
          </button>
        </div>

        {/* Restaurant Info */}
        <div className="absolute bottom-0 left-0 right-0 z-10 p-8">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Rating Badge */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 bg-black/60 backdrop-blur-sm px-4 py-2 rounded-xl">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="text-white font-bold text-xl">
                    {mockRestaurant.curation.editorRating}
                  </span>
                  <span className="text-white/80 text-sm">Editor Rating</span>
                </div>
                <div className="bg-black/60 backdrop-blur-sm px-4 py-2 rounded-xl">
                  <span className="text-white font-semibold">
                    {mockRestaurant.details.priceRange}
                  </span>
                </div>
                {mockRestaurant.curation.awards.map((award, index) => (
                  <div key={index} className="bg-gradient-to-r from-accent-500/80 to-primary-500/80 backdrop-blur-sm px-4 py-2 rounded-xl">
                    <span className="text-white font-semibold text-sm">{award}</span>
                  </div>
                ))}
              </div>

              {/* Title */}
              <h1 className="font-display text-5xl md:text-7xl font-bold text-white mb-4">
                {mockRestaurant.name}
              </h1>
              <p className="text-2xl text-white/90 mb-6 max-w-3xl">
                {mockRestaurant.tagline}
              </p>

              {/* Quick Info */}
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-white/90">
                  <MapPin className="h-5 w-5" />
                  <span>{mockRestaurant.contact.address}</span>
                </div>
                <div className="flex items-center gap-2 text-white/90">
                  <Clock className="h-5 w-5" />
                  <span>Open today until 16:00</span>
                </div>
                <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:opacity-90 transition-opacity">
                  <Navigation className="h-4 w-4" />
                  <span className="font-semibold">Get Directions</span>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            {/* Tabs */}
            <div className="sticky top-20 z-10 mb-8 bg-white dark:bg-secondary-900 rounded-2xl p-1 shadow-premium">
              <div className="flex overflow-x-auto scrollbar-hide">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 px-6 py-3 rounded-xl text-center font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                        : 'text-secondary-600 dark:text-secondary-400 hover:text-secondary-900 dark:hover:text-white'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="space-y-12">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {/* Description */}
                  <div className="glass-premium rounded-3xl p-8">
                    <h2 className="font-display text-3xl font-bold text-secondary-900 dark:text-white mb-6">
                      About {mockRestaurant.name}
                    </h2>
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                      <p className="text-secondary-600 dark:text-secondary-400 mb-6">
                        {mockRestaurant.description}
                      </p>
                      <p className="text-secondary-600 dark:text-secondary-400">
                        {mockRestaurant.story}
                      </p>
                    </div>
                  </div>

                  {/* Editor's Notes */}
                  <div className="glass-premium rounded-3xl p-8 border-l-4 border-accent-500">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-accent-500/10">
                        <Star className="h-6 w-6 text-accent-500" />
                      </div>
                      <div>
                        <h3 className="font-display text-2xl font-bold text-secondary-900 dark:text-white mb-3">
                          Editor's Notes
                        </h3>
                        <p className="text-secondary-600 dark:text-secondary-400">
                          {mockRestaurant.curation.editorNotes}
                        </p>
                        <div className="mt-6">
                          <h4 className="font-semibold text-secondary-900 dark:text-white mb-2">
                            Perfect for:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {mockRestaurant.curation.perfectFor.map((item) => (
                              <span
                                key={item}
                                className="px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="glass-premium rounded-3xl p-8">
                    <h3 className="font-display text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                      Features & Amenities
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-4 p-4 rounded-xl bg-secondary-50 dark:bg-secondary-800"
                        >
                          <div className="p-2 rounded-lg bg-white dark:bg-secondary-700">
                            <feature.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                          </div>
                          <div>
                            <div className="text-sm text-secondary-500 dark:text-secondary-500">
                              {feature.label}
                            </div>
                            <div className="font-semibold text-secondary-900 dark:text-white">
                              {feature.value}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Menu Tab */}
              {activeTab === 'menu' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <div className="glass-premium rounded-3xl p-8">
                    <h2 className="font-display text-3xl font-bold text-secondary-900 dark:text-white mb-8">
                      Menu Highlights
                    </h2>
                    <div className="space-y-6">
                      {menuItems.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-between p-4 rounded-xl hover:bg-secondary-50 dark:hover:bg-secondary-800 transition-colors group"
                        >
                          <div>
                            <h4 className="font-display text-xl font-semibold text-secondary-900 dark:text-white mb-1">
                              {item.name}
                            </h4>
                            <p className="text-secondary-600 dark:text-secondary-400 text-sm">
                              {item.description}
                            </p>
                            <span className="inline-block mt-2 px-2 py-1 rounded-lg bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs font-medium">
                              {item.category}
                            </span>
                          </div>
                          <div className="text-2xl font-bold text-secondary-900 dark:text-white">
                            {item.price}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-8 border-t border-secondary-200 dark:border-secondary-800">
                      <button className="w-full py-4 rounded-xl border-2 border-secondary-300 dark:border-secondary-700 text-secondary-700 dark:text-secondary-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 flex items-center justify-center gap-2">
                        <span className="font-semibold">View Full Menu (PDF)</span>
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Photos Tab */}
              {activeTab === 'photos' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <div className="glass-premium rounded-3xl p-8">
                    <h2 className="font-display text-3xl font-bold text-secondary-900 dark:text-white mb-8">
                      Photo Gallery
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {mockRestaurant.media.gallery.map((image, index) => (
                        <div
                          key={index}
                          onClick={() => setSelectedImage(index)}
                          className="relative aspect-video overflow-hidden rounded-2xl cursor-pointer group"
                        >
                          <div 
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                            style={{ backgroundImage: `url(${image})` }}
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Contact Card */}
            <div className="glass-premium rounded-3xl p-8">
              <h3 className="font-display text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                Contact & Hours
              </h3>
              
              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary-600 dark:text-primary-400 mt-0.5" />
                  <div>
                    <div className="font-medium text-secondary-900 dark:text-white mb-1">
                      Address
                    </div>
                    <div className="text-secondary-600 dark:text-secondary-400 text-sm">
                      {mockRestaurant.contact.address}
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <div>
                    <div className="font-medium text-secondary-900 dark:text-white mb-1">
                      Phone
                    </div>
                    <a 
                      href={`tel:${mockRestaurant.contact.phone}`}
                      className="text-secondary-600 dark:text-secondary-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {mockRestaurant.contact.phone}
                    </a>
                  </div>
                </div>

                {/* Website */}
                <div className="flex items-center gap-3">
                  <Globe className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <div>
                    <div className="font-medium text-secondary-900 dark:text-white mb-1">
                      Website
                    </div>
                    <a 
                      href={mockRestaurant.contact.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-secondary-600 dark:text-secondary-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-1"
                    >
                      Visit website
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <div>
                    <div className="font-medium text-secondary-900 dark:text-white mb-1">
                      Email
                    </div>
                    <a 
                      href={`mailto:${mockRestaurant.contact.email}`}
                      className="text-secondary-600 dark:text-secondary-400 text-sm hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                    >
                      {mockRestaurant.contact.email}
                    </a>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="pt-6 border-t border-secondary-200 dark:border-secondary-800">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    <div className="font-medium text-secondary-900 dark:text-white">
                      Opening Hours
                    </div>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(mockRestaurant.hours)
                      .filter(([day]) => day !== 'notes')
                      .map(([day, hours]) => (
                        <div key={day} className="flex justify-between text-sm">
                          <span className="text-secondary-600 dark:text-secondary-400 capitalize">
                            {day}
                          </span>
                          <span className="font-medium text-secondary-900 dark:text-white">
                            {hours}
                          </span>
                        </div>
                      ))}
                  </div>
                  {mockRestaurant.hours.notes && (
                    <div className="mt-4 p-3 rounded-lg bg-secondary-50 dark:bg-secondary-800">
                      <p className="text-sm text-secondary-600 dark:text-secondary-400">
                        {mockRestaurant.hours.notes}
                      </p>
                    </div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="pt-6 border-t border-secondary-200 dark:border-secondary-800 space-y-3">
                  <button className="w-full py-3 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:opacity-90 transition-opacity font-semibold">
                    Make a Reservation
                  </button>
                  <button className="w-full py-3 rounded-xl border-2 border-secondary-300 dark:border-secondary-700 text-secondary-700 dark:text-secondary-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300 font-semibold flex items-center justify-center gap-2">
                    <Navigation className="h-4 w-4" />
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            {/* Cuisine & Ambiance */}
            <div className="glass-premium rounded-3xl p-8">
              <h3 className="font-display text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                Cuisine & Ambiance
              </h3>
              
              <div className="space-y-6">
                {/* Cuisine */}
                <div>
                  <div className="font-medium text-secondary-900 dark:text-white mb-3">
                    Cuisine Types
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mockRestaurant.details.cuisine.map((cuisine) => (
                      <span
                        key={cuisine}
                        className="px-3 py-1.5 rounded-full bg-secondary-100 dark:bg-secondary-800 text-secondary-700 dark:text-secondary-300 font-medium text-sm"
                      >
                        {cuisine}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Ambiance */}
                <div>
                  <div className="font-medium text-secondary-900 dark:text-white mb-3">
                    Ambiance
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mockRestaurant.details.ambiance.map((ambiance) => (
                      <span
                        key={ambiance}
                        className="px-3 py-1.5 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 font-medium text-sm"
                      >
                        {ambiance}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <div className="font-medium text-secondary-900 dark:text-white mb-3">
                    Special Features
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mockRestaurant.details.features.map((feature) => (
                      <span
                        key={feature}
                        className="px-3 py-1.5 rounded-full bg-accent-50 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 font-medium text-sm"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Dietary */}
                <div>
                  <div className="font-medium text-secondary-900 dark:text-white mb-3">
                    Dietary Options
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {mockRestaurant.details.dietary.map((option) => (
                      <span
                        key={option}
                        className="px-3 py-1.5 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 font-medium text-sm"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="glass-premium rounded-3xl p-8">
              <h3 className="font-display text-2xl font-bold text-secondary-900 dark:text-white mb-6">
                Restaurant Stats
              </h3>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600 dark:text-secondary-400">Editor Rating</span>
                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-secondary-900 dark:text-white">
                      {mockRestaurant.curation.editorRating}/10
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600 dark:text-secondary-400">Price Range</span>
                  <span className="font-bold text-secondary-900 dark:text-white">
                    {mockRestaurant.details.priceRange}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600 dark:text-secondary-400">Views This Month</span>
                  <span className="font-bold text-secondary-900 dark:text-white">
                    {mockRestaurant.metadata.views.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600 dark:text-secondary-400">Saved by Users</span>
                  <span className="font-bold text-secondary-900 dark:text-white">
                    {mockRestaurant.metadata.saves}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary-600 dark:text-secondary-400">Last Updated</span>
                  <span className="font-bold text-secondary-900 dark:text-white">
                    {mockRestaurant.metadata.lastUpdated}
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