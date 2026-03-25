"use client"

import { useState, useEffect } from 'react'
import { useSession } from 'next-auth/react'

// In-memory storage for demo purposes
// In production, this would connect to your backend API
let demoFavorites: string[] = []

export function useFavorites() {
  const { data: session } = useSession()
  const [favorites, setFavorites] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (session?.user?.id) {
      // Load favorites from localStorage for demo
      const storedFavorites = localStorage.getItem(`favorites_${session.user.id}`)
      if (storedFavorites) {
        demoFavorites = JSON.parse(storedFavorites)
      }
      setFavorites(demoFavorites)
    }
    setIsLoading(false)
  }, [session])

  const toggleFavorite = async (restaurantId: string) => {
    if (!session?.user?.id) {
      // Redirect to login or show login modal
      return false
    }

    const newFavorites = favorites.includes(restaurantId)
      ? favorites.filter(id => id !== restaurantId)
      : [...favorites, restaurantId]

    setFavorites(newFavorites)
    
    // Save to localStorage for demo
    localStorage.setItem(`favorites_${session.user.id}`, JSON.stringify(newFavorites))
    
    // In production, make API call to save to database
    // await fetch('/api/favorites', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ restaurantId, action: favorites.includes(restaurantId) ? 'remove' : 'add' })
    // })

    return true
  }

  const isFavorite = (restaurantId: string) => {
    return favorites.includes(restaurantId)
  }

  const getFavoriteCount = () => {
    return favorites.length
  }

  return {
    favorites,
    isLoading,
    toggleFavorite,
    isFavorite,
    getFavoriteCount,
  }
}