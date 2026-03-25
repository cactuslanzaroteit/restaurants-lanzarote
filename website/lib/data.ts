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