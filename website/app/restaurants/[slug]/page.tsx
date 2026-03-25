import { notFound } from 'next/navigation'
import { getRestaurantBySlug, restaurants } from '@/lib/data'
import { RestaurantDetailClient } from '@/components/restaurant-detail-client'

// Generate static paths for all restaurants
export async function generateStaticParams() {
  return restaurants.map((restaurant) => ({
    slug: restaurant.slug,
  }))
}

export default function RestaurantPage({ params }: { params: { slug: string } }) {
  const restaurant = getRestaurantBySlug(params.slug)
  
  if (!restaurant) {
    notFound()
  }

  return <RestaurantDetailClient restaurant={restaurant} />
}