// Restaurant data based on PRODUCT_DEFINITION.md schema

export interface Restaurant {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  story?: string;
  
  contact: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    phone: string;
    website: string;
    email: string;
  };
  
  details: {
    cuisine: string[];
    priceRange: string;
    ambiance: string[];
    features: string[];
    dietary: string[];
    capacity: number;
    parking: boolean;
    wifi: boolean;
    terrace: boolean;
    heating: boolean;
    ac: boolean;
  };
  
  hours: {
    [key: string]: string;
    notes?: string;
  };
  
  media: {
    coverImage: string;
    gallery: string[];
    menuPdf?: string;
    videoTour?: string;
  };
  
  curation: {
    editorRating: number;
    editorNotes: string;
    perfectFor: string[];
    awards: string[];
    featured: boolean;
    featuredUntil?: string;
  };
  
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    ogImage: string;
  };
  
  metadata: {
    createdAt: string;
    updatedAt: string;
    published: boolean;
    views: number;
    saves: number;
  };
}

export const restaurants: Restaurant[] = [
  {
    id: 'el-diablo',
    slug: 'el-diablo-restaurant',
    name: 'El Diablo Restaurant',
    tagline: 'Dining over a volcanic grill',
    description: 'Located in Timanfaya National Park, this unique restaurant cooks food using geothermal heat from the volcano.',
    story: 'Founded in 1970, El Diablo was built directly over a volcanic vent. Designed by local architect César Manrique, it harnesses natural geothermal heat reaching 400°C to cook traditional Canarian dishes.',
    
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
    
    seo: {
      metaTitle: 'El Diablo Restaurant - Volcanic Grill Dining in Lanzarote',
      metaDescription: 'Experience unique volcanic grill cooking at El Diablo Restaurant in Timanfaya National Park. Canarian cuisine with geothermal heat.',
      keywords: ['volcanic grill', 'Timanfaya', 'Lanzarote dining', 'unique restaurant'],
      ogImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    },
    
    metadata: {
      createdAt: '2026-03-25T07:00:00Z',
      updatedAt: '2026-03-25T07:00:00Z',
      published: true,
      views: 1245,
      saves: 89,
    },
  },
  
  {
    id: 'la-casa-roja',
    slug: 'la-casa-roja',
    name: 'La Casa Roja',
    tagline: 'Authentic Canarian cuisine in a historic red house',
    description: 'Family-run restaurant serving traditional Canarian dishes in a charming red house with ocean views.',
    
    contact: {
      address: 'Calle León y Castillo, 78, 35500 Arrecife, Las Palmas',
      coordinates: { lat: 28.962, lng: -13.551 },
      phone: '+34 928 81 23 45',
      website: 'https://www.lacasaroja-lanzarote.com',
      email: 'reservas@lacasaroja-lanzarote.com',
    },
    
    details: {
      cuisine: ['Canarian', 'Traditional', 'Seafood', 'Tapas'],
      priceRange: '€€ (Moderate)',
      ambiance: ['Family Friendly', 'Ocean View', 'Traditional', 'Romantic'],
      features: ['Historic Building', 'Ocean Terrace', 'Family-Run', 'Local Ingredients'],
      dietary: ['Vegetarian Options', 'Vegan Options', 'Gluten-Free Options'],
      capacity: 80,
      parking: true,
      wifi: true,
      terrace: true,
      heating: true,
      ac: true,
    },
    
    hours: {
      monday: '12:00-23:00',
      tuesday: '12:00-23:00',
      wednesday: '12:00-23:00',
      thursday: '12:00-23:00',
      friday: '12:00-00:00',
      satuary: '12:00-00:00',
      sunday: '12:00-23:00',
      notes: 'Open daily, kitchen closes 1 hour before closing time',
    },
    
    media: {
      coverImage: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
      ],
    },
    
    curation: {
      editorRating: 8.7,
      editorNotes: 'Authentic family-run restaurant with stunning ocean views. The papas arrugadas with mojo sauces are exceptional.',
      perfectFor: ['Family Dinner', 'Romantic Sunset', 'Traditional Experience', 'Local Cuisine'],
      awards: ['Local Favorite 2024'],
      featured: true,
      featuredUntil: '2026-05-31',
    },
    
    seo: {
      metaTitle: 'La Casa Roja - Authentic Canarian Dining in Arrecife',
      metaDescription: 'Family-run restaurant serving traditional Canarian cuisine with ocean views in historic red house.',
      keywords: ['Canarian cuisine', 'family restaurant', 'Arrecife dining', 'ocean view'],
      ogImage: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
    },
    
    metadata: {
      createdAt: '2026-03-25T08:00:00Z',
      updatedAt: '2026-03-25T08:00:00Z',
      published: true,
      views: 892,
      saves: 67,
    },
  },
  
  {
    id: 'bodega-el-grifo',
    slug: 'bodega-el-grifo',
    name: 'Bodega El Grifo',
    tagline: 'Lanzarote\'s oldest winery with restaurant',
    description: 'Historic winery with restaurant serving volcanic wine pairings and local specialties.',
    
    contact: {
      address: 'Carretera La Geria, km 19, 35570 San Bartolomé, Las Palmas',
      coordinates: { lat: 28.978, lng: -13.635 },
      phone: '+34 928 52 40 36',
      website: 'https://www.elgrifo.com',
      email: 'visitas@elgrifo.com',
    },
    
    details: {
      cuisine: ['Canarian', 'Wine Bar', 'Tapas', 'Local Produce'],
      priceRange: '€€ (Moderate)',
      ambiance: ['Historic', 'Wine Cellar', 'Rustic', 'Educational'],
      features: ['Wine Tasting', 'Historic Winery', 'Volcanic Wines', 'Wine Pairings'],
      dietary: ['Vegetarian Options', 'Gluten-Free Options'],
      capacity: 60,
      parking: true,
      wifi: true,
      terrace: true,
      heating: true,
      ac: true,
    },
    
    hours: {
      monday: '10:00-18:00',
      tuesday: '10:00-18:00',
      wednesday: '10:00-18:00',
      thursday: '10:00-18:00',
      friday: '10:00-18:00',
      saturday: '10:00-18:00',
      sunday: '10:00-18:00',
      notes: 'Wine tastings available, restaurant service 12:00-16:00',
    },
    
    media: {
      coverImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
      ],
    },
    
    curation: {
      editorRating: 8.9,
      editorNotes: 'Essential visit for wine lovers. The volcanic Malvasía wines paired with local cheeses are unforgettable.',
      perfectFor: ['Wine Lovers', 'Cultural Experience', 'Educational', 'Light Lunch'],
      awards: ['Best Winery Restaurant 2023'],
      featured: true,
      featuredUntil: '2026-07-31',
    },
    
    seo: {
      metaTitle: 'Bodega El Grifo - Wine Tasting & Dining in Lanzarote',
      metaDescription: 'Visit Lanzarote\'s oldest winery for volcanic wine tastings and traditional Canarian cuisine.',
      keywords: ['wine tasting', 'volcanic wine', 'Lanzarote winery', 'wine and dine'],
      ogImage: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    },
    
    metadata: {
      createdAt: '2026-03-25T09:00:00Z',
      updatedAt: '2026-03-25T09:00:00Z',
      published: true,
      views: 756,
      saves: 45,
    },
  },
  
  {
    id: 'mirador-del-rio',
    slug: 'mirador-del-rio',
    name: 'Mirador del Río',
    tagline: 'Cliff-top dining with panoramic views',
    description: 'Spectacular restaurant perched on cliffs with 360-degree views of the ocean and neighboring islands.',
    story: 'Built into the cliffs at 479 meters above sea level, Mirador del Río offers breathtaking views of the Chinijo Archipelago. Designed by César Manrique, it blends seamlessly with the volcanic landscape.',
    
    contact: {
      address: 'Carretera del Risco, 35541 Haría, Las Palmas',
      coordinates: { lat: 29.201, lng: -13.496 },
      phone: '+34 928 52 65 36',
      website: 'https://www.miradordelrio.com',
      email: 'info@miradordelrio.com',
    },
    
    details: {
      cuisine: ['Mediterranean', 'Seafood', 'Fine Dining', 'Canarian'],
      priceRange: '€€€ (High)',
      ambiance: ['Scenic Views', 'Romantic', 'Luxury', 'Architectural'],
      features: ['Cliff-top Location', 'Panoramic Views', 'César Manrique Design', 'Sunset Views'],
      dietary: ['Vegetarian Options', 'Gluten-Free Options'],
      capacity: 90,
      parking: true,
      wifi: true,
      terrace: true,
      heating: true,
      ac: true,
    },
    
    hours: {
      monday: '10:00-17:45',
      tuesday: '10:00-17:45',
      wednesday: '10:00-17:45',
      thursday: '10:00-17:45',
      friday: '10:00-17:45',
      saturday: '10:00-17:45',
      sunday: '10:00-17:45',
      notes: 'Last entry 45 minutes before closing, restaurant service 12:00-16:00',
    },
    
    media: {
      coverImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=800&q=80',
      ],
    },
    
    curation: {
      editorRating: 9.4,
      editorNotes: 'The views alone are worth the visit. Combine with the architectural genius of César Manrique for an unforgettable experience.',
      perfectFor: ['Special Occasion', 'Photography', 'Architecture Lovers', 'Sunset Dining'],
      awards: ['Best View in Lanzarote', 'Architectural Award'],
      featured: true,
      featuredUntil: '2026-08-31',
    },
    
    seo: {
      metaTitle: 'Mirador del Río - Cliff-top Dining with Panoramic Views',
      metaDescription: 'Experience breathtaking cliff-top dining at Mirador del Río with 360-degree views of the Chinijo Archipelago.',
      keywords: ['cliff-top restaurant', 'panoramic views', 'César Manrique', 'Lanzarote views'],
      ogImage: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80',
    },
    
    metadata: {
      createdAt: '2026-03-25T10:00:00Z',
      updatedAt: '2026-03-25T10:00:00Z',
      published: true,
      views: 1103,
      saves: 78,
    },
  },
  
  {
    id: 'el-novo',
    slug: 'el-novo',
    name: 'El Novo',
    tagline: 'Modern Canarian fusion cuisine',
    description: 'Innovative restaurant blending traditional Canarian ingredients with contemporary techniques and presentation.',
    
    contact: {
      address: 'Avenida de las Playas, 78, 35510 Puerto del Carmen, Las Palmas',
      coordinates: { lat: 28.923, lng: -13.667 },
      phone: '+34 928 51 23 45',
      website: 'https://www.elnovo-lanzarote.com',
      email: 'reservations@elnovo-lanzarote.com',
    },
    
    details: {
      cuisine: ['Fusion', 'Modern', 'Creative', 'Canarian'],
      priceRange: '€€€ (High)',
      ambiance: ['Modern', 'Sophisticated', 'Trendy', 'Fine Dining'],
      features: ['Creative Cuisine', 'Wine Pairings', 'Chef\'s Table', 'Seasonal Menu'],
      dietary: ['Vegetarian Options', 'Vegan Menu', 'Gluten-Free Options'],
      capacity: 60,
      parking: true,
      wifi: true,
      terrace: true,
      heating: true,
      ac: true,
    },
    
    hours: {
      monday: '19:00-23:00',
      tuesday: '19:00-23:00',
      wednesday: '19:00-23:00',
      thursday: '19:00-23:00',
      friday: '19:00-00:00',
      saturday: '19:00-00:00',
      sunday: 'Closed',
      notes: 'Reservations required, tasting menu available',
    },
    
    media: {
      coverImage: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
      ],
    },
    
    curation: {
      editorRating: 8.5,
      editorNotes: 'For those seeking innovative cuisine that respects local ingredients while pushing boundaries.',
      perfectFor: ['Foodies', 'Special Occasion', 'Modern Dining', 'Wine Enthusiasts'],
      awards: ['Innovative Cuisine Award 2023'],
      featured: false,
    },
    
    seo: {
      metaTitle: 'El Novo - Modern Canarian Fusion in Puerto del Carmen',
      metaDescription: 'Experience innovative Canarian fusion cuisine at El Novo, where tradition meets contemporary techniques.',
      keywords: ['fusion cuisine', 'modern dining', 'creative cooking', 'Puerto del Carmen'],
      ogImage: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?auto=format&fit=crop&w=1200&q=80',
    },
    
    metadata: {
      createdAt: '2026-03-25T11:00:00Z',
      updatedAt: '2026-03-25T11:00:00Z',
      published: true,
      views: 645,
      saves: 32,
    },
  },
  
  {
    id: 'la-cueva',
    slug: 'la-cueva',
    name: 'La Cueva',
    tagline: 'Dining in a volcanic cave',
    description: 'Unique restaurant built inside a natural volcanic cave, offering an unforgettable dining experience.',
    
    contact: {
      address: 'Jameos del Agua, Carretera de Órzola, 35542 Haría, Las Palmas',
      coordinates: { lat: 29.157, lng: -13.432 },
      phone: '+34 928 84 80 20',
      website: 'https://www.cactlanzarote.com',
      email: 'jameos@cactlanzarote.com',
    },
    
    details: {
      cuisine: ['Canarian', 'Seafood', 'Unique Experience'],
      priceRange: '€€€ (High)',
      ambiance: ['Unique Experience', 'Romantic', 'Adventure', 'Natural'],
      features: ['Volcanic Cave', 'Natural Acoustics', 'Jameos del Agua Location', 'Cultural Experience'],
      dietary: ['Vegetarian Options'],
      capacity: 50,
      parking: true,
      wifi: false,
      terrace: false,
      heating: true,
      ac: false,
    },
    
    hours: {
      monday: '19:00-23:00',
      tuesday: '19:00-23:00',
      wednesday: '19:00-23:00',
      thursday: '19:00-23:00',
      friday: '19:00-23:00',
      saturday: '19:00-23:00',
      sunday: '19:00-23:00',
      notes: 'Part of Jameos del Agua tourist attraction, entry fee applies',
    },
    
    media: {
      coverImage: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80',
      ],
    },
    
    curation: {
      editorRating: 9.1,
      editorNotes: 'A truly unique dining experience inside a volcanic cave. The natural acoustics and atmosphere are magical.',
      perfectFor: ['Unique Experience', 'Romantic Dinner', 'Adventure', 'Cultural Visit'],
      awards: ['Most Unique Restaurant 2024'],
      featured: true,
      featuredUntil: '2026-09-30',
    },
    
    seo: {
      metaTitle: 'La Cueva - Volcanic Cave Dining in Jameos del Agua',
      metaDescription: 'Dine inside a natural volcanic cave at La Cueva restaurant in the stunning Jameos del Agua attraction.',
      keywords: ['volcanic cave', 'Jameos del Agua', 'unique dining', 'cave restaurant'],
      ogImage: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80',
    },
    
    metadata: {
      createdAt: '2026-03-25T12:00:00Z',
      updatedAt: '2026-03-25T12:00:00Z',
      published: true,
      views: 892,
      saves: 56,
    },
  },
  
  {
    id: 'bahia-restaurant',
    slug: 'bahia-restaurant',
    name: 'Bahía Restaurant',
    tagline: 'Beachfront dining in Playa Blanca',
    description: 'Elegant beachfront restaurant serving fresh seafood with direct access to Playa Blanca beach.',
    
    contact: {
      address: 'Paseo Marítimo, 35580 Playa Blanca, Las Palmas',
      coordinates: { lat: 28.864, lng: -13.827 },
      phone: '+34 928 51 78 90',
      website: 'https://www.bahiarestaurant.com',
      email: 'info@bahiarestaurant.com',
    },
    
    details: {
      cuisine: ['Seafood', 'Mediterranean', 'Grill', 'Canarian'],
      priceRange: '€€ (Moderate)',
      ambiance: ['Beachfront', 'Relaxed', 'Family Friendly', 'Sunset Views'],
      features: ['Beach Access', 'Sunset Terrace', 'Fresh Seafood', 'Live Music Weekends'],
      dietary: ['Vegetarian Options', 'Gluten-Free Options'],
      capacity: 120,
      parking: true,
      wifi: true,
      terrace: true,
      heating: true,
      ac: true,
    },
    
    hours: {
      monday: '12:00-23:00',
      tuesday: '12:00-23:00',
      wednesday: '12:00-23:00',
      thursday: '12:00-23:00',
      friday: '12:00-00:00',
      saturday: '12:00-00:00',
      sunday: '12:00-23:00',
      notes: 'Best sunset views from 18:00-20:00, live music Fridays and Saturdays',
    },
    
    media: {
      coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
      gallery: [
        'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=800&q=80',
      ],
    },
    
    curation: {
      editorRating: 8.3,
      editorNotes: 'Perfect for a relaxed beachfront meal with excellent seafood and sunset views.',
      perfectFor: ['Beach Dining', 'Family Lunch', 'Sunset Views', 'Casual Dinner'],
      awards: ['Best Beach Restaurant 2023'],
      featured: false,
    },
    
    seo: {
      metaTitle: 'Bahía Restaurant - Beachfront Dining in Playa Blanca',
      metaDescription: 'Enjoy fresh seafood and sunset views at Bahía Restaurant, located directly on Playa Blanca beach.',
      keywords: ['beachfront restaurant', 'Playa Blanca', 'seafood', 'sunset dining'],
      ogImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    },
    
    metadata: {
      createdAt: '2026-03-25T13:00:00Z',
      updatedAt: '2026-03-25T13:00:00Z',
      published: true,
      views: 734,
      saves: 41,
    },
  },
];

// Helper functions
export function getRestaurantBySlug(slug: string): Restaurant | undefined {
  return restaurants.find(restaurant => restaurant.slug === slug);
}

export function getFeaturedRestaurants(): Restaurant[] {
  return restaurants.filter(restaurant => restaurant.curation.featured);
}

export function getRestaurantsByCuisine(cuisine: string): Restaurant[] {
  return restaurants.filter(restaurant => 
    restaurant.details.cuisine.some(c => c.toLowerCase().includes(cuisine.toLowerCase()))
  );
}

export function searchRestaurants(query: string): Restaurant[] {
  const lowerQuery = query.toLowerCase();
  return restaurants.filter(restaurant => 
    restaurant.name.toLowerCase().includes(lowerQuery) ||
    restaurant.description.toLowerCase().includes(lowerQuery) ||
    restaurant.tagline.toLowerCase().includes(lowerQuery) ||
    restaurant.details.cuisine.some(c => c.toLowerCase().includes(lowerQuery))
  );
}