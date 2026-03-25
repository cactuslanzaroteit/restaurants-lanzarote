"use client"

import { signIn, signOut, useSession } from "next-auth/react"
import { User, LogOut, LogIn, Star, Heart, Settings } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export function UserMenu() {
  const { data: session } = useSession()
  const [isOpen, setIsOpen] = useState(false)

  if (!session) {
    return (
      <button
        onClick={() => signIn()}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 text-white hover:opacity-90 transition-opacity"
      >
        <LogIn className="h-4 w-4" />
        <span className="font-medium">Sign In</span>
      </button>
    )
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 flex items-center justify-center">
          <User className="h-4 w-4 text-white" />
        </div>
        <span className="font-medium text-gray-700 hidden md:inline">
          {session.user?.name?.split(' ')[0] || 'User'}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50">
          <div className="p-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-600 to-orange-500 flex items-center justify-center">
                <User className="h-5 w-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-gray-900">{session.user?.name}</div>
                <div className="text-sm text-gray-600">{session.user?.email}</div>
                {session.user?.role === 'admin' && (
                  <div className="inline-block mt-1 px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 text-xs font-medium">
                    Admin
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="p-2">
            <Link
              href="/profile/favorites"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <Heart className="h-4 w-4" />
              <span>My Favorites</span>
            </Link>
            <Link
              href="/profile/reviews"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <Star className="h-4 w-4" />
              <span>My Reviews</span>
            </Link>
            <Link
              href="/profile/settings"
              className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-gray-50 text-gray-700"
              onClick={() => setIsOpen(false)}
            >
              <Settings className="h-4 w-4" />
              <span>Settings</span>
            </Link>
          </div>

          <div className="p-2 border-t border-gray-200">
            <button
              onClick={() => signOut()}
              className="w-full flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-red-50 text-red-600"
            >
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>
      )}

      {/* Close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}