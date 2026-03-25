"use client"

import { useState } from 'react'
import { Menu, X, Home, MapPin, Star, Heart, User, Search } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Search, label: 'Search', href: '/search' },
    { icon: MapPin, label: 'Map', href: '/map' },
    { icon: Star, label: 'Favorites', href: '/favorites' },
    { icon: Heart, label: 'Editor\'s Picks', href: '/editors-picks' },
    { icon: User, label: 'Profile', href: '/profile' },
  ]

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-2xl"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="md:hidden fixed inset-x-0 bottom-0 z-40"
          >
            <div className="bg-white rounded-t-3xl shadow-2xl border-t border-gray-200">
              <div className="p-6">
                <div className="grid grid-cols-3 gap-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex flex-col items-center p-3 rounded-xl hover:bg-gray-50 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-gradient-to-br from-blue-50 to-orange-50">
                        <item.icon className="h-5 w-5 text-gray-700" />
                      </div>
                      <span className="mt-2 text-xs font-medium text-gray-700">
                        {item.label}
                      </span>
                    </Link>
                  ))}
                </div>

                {/* Quick Actions */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="grid grid-cols-2 gap-3">
                    <button className="px-4 py-3 rounded-xl bg-blue-600 text-white font-semibold">
                      Make Reservation
                    </button>
                    <button className="px-4 py-3 rounded-xl border-2 border-gray-300 text-gray-700 font-semibold">
                      View Map
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation Bar (Always visible on mobile) */}
      <div className="md:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t border-gray-200">
        <div className="flex justify-around items-center h-16">
          <Link href="/" className="flex flex-col items-center">
            <Home className="h-5 w-5 text-gray-600" />
            <span className="text-xs mt-1 text-gray-600">Home</span>
          </Link>
          <Link href="/search" className="flex flex-col items-center">
            <Search className="h-5 w-5 text-gray-600" />
            <span className="text-xs mt-1 text-gray-600">Search</span>
          </Link>
          <div className="relative -top-4">
            <div className="p-3 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 text-white shadow-lg">
              <Menu className="h-6 w-6" />
            </div>
          </div>
          <Link href="/favorites" className="flex flex-col items-center">
            <Heart className="h-5 w-5 text-gray-600" />
            <span className="text-xs mt-1 text-gray-600">Favorites</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center">
            <User className="h-5 w-5 text-gray-600" />
            <span className="text-xs mt-1 text-gray-600">Profile</span>
          </Link>
        </div>
      </div>
    </>
  )
}