# PRODUCT_DEFINITION.md - restaurantsinlanzarote.com

## Project Overview
**restaurantsinlanzarote.com** is a premium, curated dining guide for Lanzarote, Canary Islands. The platform will serve as both a high-quality resource for tourists and locals, and as a sales tool to pitch web redesign services to local restaurants.

## Research: Successful Curated Restaurant Directory Models

### 1. **The Infatuation** (theinfatuation.com)
**Why they succeed:**
- **Editorial curation over algorithms** - Human-written reviews with personality
- **Strong voice and brand identity** - Conversational, relatable tone
- **Mobile-first approach** - Excellent app experience
- **"Perfect for" categories** - Contextual recommendations (date night, groups, etc.)
- **SEO strategy** - Long-tail keywords, neighborhood guides, "best of" lists
- **GEO strategy** - Hyper-local content with neighborhood granularity

### 2. **Eater Maps** (eater.com/maps)
**Why they succeed:**
- **Visual-first presentation** - Clean maps with curated pins
- **Thematic curation** - "38 Essential Restaurants" style lists
- **Authority positioning** - Journalistic credibility
- **SEO dominance** - Owns "best restaurants in [city]" search terms
- **Local expertise** - Hires local writers and editors

### 3. **Michelin Guide** (guide.michelin.com)
**Why they succeed:**
- **Ultimate authority positioning** - Gold standard in dining
- **Exclusivity** - Limited selection creates demand
- **Detailed criteria** - Clear rating system (stars, Bib Gourmand)
- **International consistency** - Same standards worldwide
- **Restaurant benefits** - Prestige and increased bookings

### 4. **Timeout** (timeout.com)
**Why they succeed:**
- **Local expertise** - City-specific editors
- **Event integration** - Ties restaurants to local happenings
- **Multi-format content** - Articles, lists, videos
- **Strong SEO** - City + "best restaurants" keyword dominance
- **User-friendly filtering** - By neighborhood, cuisine, price

## Why Users & Restaurants Prefer Curated Directories

### User Benefits:
1. **Trust** - Human curation reduces decision fatigue
2. **Quality assurance** - Vetted selections mean better experiences
3. **Contextual recommendations** - "Perfect for date night" vs. generic ratings
4. **Storytelling** - Restaurants have narratives, not just data points
5. **Discovery** - Finds hidden gems algorithms miss

### Restaurant Benefits:
1. **Targeted exposure** - Reach ideal customers
2. **Brand alignment** - Association with quality/curation
3. **Higher-value customers** - Curated guides attract serious diners
4. **Marketing partnership** - Featured restaurants get promotional support
5. **Prestige** - Inclusion signals quality

## Core Features for restaurantsinlanzarote.com

### Phase 1: MVP (Launch)
1. **Curated Restaurant Listings**
   - Hand-picked selection (50-100 premium restaurants)
   - Detailed profiles with photos, menus, stories
   - Filter by: location, cuisine, price, ambiance, special features

2. **Interactive Map**
   - Google Maps integration
   - Cluster markers for dense areas
   - Click-to-navigate functionality

3. **Search & Discovery**
   - Natural language search
   - "Perfect for" filters (romantic, family, business, etc.)
   - Seasonal/holiday specials

4. **Mobile-First Design**
   - Progressive Web App (PWA) capabilities
   - Offline access to saved favorites
   - Native-feeling interactions

### Phase 2: Growth
5. **Restaurant Dashboard**
   - Analytics on views, clicks
   - Update menu/hours functionality
   - Photo gallery management

6. **Booking Integration**
   - Direct booking or reservation links
   - Table availability (future)
   - Waitlist management

7. **User Accounts**
   - Save favorites
   - Create dining itineraries
   - Leave private notes/reviews

8. **Content Hub**
   - Articles about Lanzarote dining scene
   - Chef interviews
   - Seasonal ingredient guides

### Phase 3: Monetization
9. **Premium Listings**
   - Enhanced profiles
   - Featured placement
   - Photo/video galleries

10. **Web Design Services Portal**
    - Case studies of redesigned restaurant sites
    - Contact forms for consultation requests
    - Portfolio showcase

## Aesthetic Guidelines

### Visual Identity
- **Color Palette:**
  - Primary: Ocean Blue (#1E6F9F) - represents Lanzarote's waters
  - Secondary: Volcanic Black (#2D2D2D) - represents the island's geology
  - Accent: Sunset Orange (#FF6B35) - represents Canarian sunsets
  - Neutral: Sand Beige (#F5E9D4) - represents beaches

- **Typography:**
  - Headings: "Playfair Display" (elegant, premium feel)
  - Body: "Inter" or "Open Sans" (clean, readable)
  - Monospace: "JetBrains Mono" (for technical elements)

- **Imagery Style:**
  - High-quality professional photography
  - Consistent color grading (warm, vibrant)
  - Focus on food details and restaurant ambiance
  - Authentic local scenes (not stock photos)

### UI/UX Principles
1. **Minimalist elegance** - Clean layouts with ample whitespace
2. **Visual hierarchy** - Clear information architecture
3. **Fast performance** - Sub-2-second page loads
4. **Intuitive navigation** - Three-click rule to any content
5. **Accessibility** - WCAG 2.1 AA compliance

## Technical Stack

### Frontend
- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS + shadcn/ui components
- **State Management:** React Context + Zustand
- **Maps:** Google Maps JavaScript API
- **Icons:** Lucide React
- **Forms:** React Hook Form + Zod validation

### Backend & Data
- **Database:** Local JSON files (MVP) → PostgreSQL (scale)
- **API:** Next.js API Routes
- **Search:** Fuse.js (client-side) → Algolia (scale)
- **Image Optimization:** Next.js Image component
- **Caching:** React Query + SWR

### Infrastructure
- **Hosting:** Coolify (VPS)
- **CDN:** Cloudflare
- **Analytics:** Plausible (privacy-focused)
- **Monitoring:** Sentry

## Database Schema (JSON Structure)

```json
{
  "restaurants": [
    {
      "id": "uuid",
      "slug": "el-diablo-restaurant",
      "name": "El Diablo Restaurant",
      "tagline": "Dining over a volcanic grill",
      "description": "Located in Timanfaya National Park, this unique restaurant cooks food using geothermal heat from the volcano.",
      "story": "Founded in 1970, El Diablo was built directly over a volcanic vent...",
      
      "contact": {
        "address": "Carretera de Yaiza a Tinajo, km 11,5, 35560 Tinajo, Las Palmas",
        "coordinates": {
          "lat": 28.956,
          "lng": -13.829
        },
        "phone": "+34 928 84 00 57",
        "website": "https://www.restauranteeldiablo.com",
        "email": "info@restauranteeldiablo.com"
      },
      
      "details": {
        "cuisine": ["Canarian", "Grill", "Seafood"],
        "priceRange": "€€€ (High)",
        "ambiance": ["Romantic", "Unique Experience", "Scenic Views"],
        "features": ["Volcanic Grill", "National Park Location", "Tourist Favorite"],
        "dietary": ["Vegetarian Options", "Gluten-Free Options"],
        "capacity": 120,
        "parking": true,
        "wifi": false,
        "terrace": true,
        "heating": true,
        "ac": false
      },
      
      "hours": {
        "monday": "13:00-16:00",
        "tuesday": "13:00-16:00",
        "wednesday": "13:00-16:00",
        "thursday": "13:00-16:00",
        "friday": "13:00-16:00",
        "saturday": "13:00-16:00",
        "sunday": "13:00-16:00",
        "notes": "Reservations recommended, last seating at 15:30"
      },
      
      "media": {
        "coverImage": "/restaurants/el-diablo/cover.jpg",
        "gallery": [
          "/restaurants/el-diablo/1.jpg",
          "/restaurants/el-diablo/2.jpg",
          "/restaurants/el-diablo/3.jpg"
        ],
        "menuPdf": "/restaurants/el-diablo/menu.pdf",
        "videoTour": "https://youtube.com/..."
      },
      
      "curation": {
        "editorRating": 9.2,
        "editorNotes": "A must-visit for the unique volcanic cooking experience",
        "perfectFor": ["Unique Experience", "Tourist Attraction", "Special Occasion"],
        "awards": ["Michelin Plate 2023", "Travelers' Choice 2024"],
        "featured": true,
        "featuredUntil": "2026-06-30"
      },
      
      "seo": {
        "metaTitle": "El Diablo Restaurant - Volcanic Grill Dining in Lanzarote",
        "metaDescription": "Experience unique volcanic grill cooking at El Diablo Restaurant in Timanfaya National Park. Canarian cuisine with geothermal heat.",
        "keywords": ["volcanic grill", "Timanfaya", "Lanzarote dining", "unique restaurant"],
        "ogImage": "/restaurants/el-diablo/og.jpg"
      },
      
      "metadata": {
        "createdAt": "2026-03-25T07:00:00Z",
        "updatedAt": "2026-03-25T07:00:00Z",
        "published": true,
        "views": 1245,
        "saves": 89
      }
    }
  ],
  
  "categories": [
    {
      "id": "cuisine-canarian",
      "name": "Canarian",
      "slug": "canarian-cuisine",
      "description": "Traditional dishes from the Canary Islands",
      "icon": "🌴",
      "restaurantCount": 42
    }
  ],
  
  "locations": [
    {
      "id": "costa-teguise",
      "name": "Costa Teguise",
      "slug": "costa-teguise",
      "description": "Family-friendly resort area with beachfront dining",
      "coordinates": {
        "center": { "lat": 28.998, "lng": -13.490 },
        "bounds": { "north": 29.010, "south": 28.986, "east": -13.480, "west": -13.500 }
      },
      "restaurantCount": 28
    }
  ],
  
  "articles": [
    {
      "id": "guide-to-lanzarote-wine",
      "title": "A Guide to Lanzarote's Volcanic Wines",
      "slug": "lanzarote-volcanic-wines-guide",
      "excerpt": "Discover how Lanzarote's unique volcanic soil creates distinctive wines you can't find anywhere else.",
      "content": "...",
      "author": "Maria Rodriguez",
      "publishedAt": "2026-03-20T10:00:00Z",
      "tags": ["wine", "volcanic", "local produce"],
      "featuredImage": "/articles/wine-guide/cover.jpg",
      "relatedRestaurants": ["bodega-el-grifo", "la-geria-restaurant"]
    }
  ]
}
```

## SEO & GEO Strategy

### SEO Strategy
1. **Keyword Research:**
   - Primary: "restaurants in Lanzarote", "best restaurants Lanzarote"
   - Secondary: "Lanzarote fine dining", "Canarian cuisine"
   - Long-tail: "romantic restaurant Costa Teguise", "family-friendly Puerto del Carmen"

2. **Content Strategy:**
   - Neighborhood guides (10+ locations)
   - Cuisine deep-dives (Canarian, seafood, tapas)
   - Seasonal content (summer terraces, winter cozy spots)
   - "Best for" lists (date night, groups, business)

3. **Technical SEO:**
   - Fast Core Web Vitals
   - Semantic HTML structure
   - JSON-LD structured data
   - XML sitemap with priority tagging

### GEO Strategy
1. **Hyper-local Content:**
   - Restaurant pages with precise coordinates
   - Neighborhood-specific landing pages
   - "Near me" functionality with geolocation

2. **Local Business Listings:**
   - Google Business Profile integration
   - Consistent NAP (Name, Address, Phone) across web
   - Local reviews aggregation

3. **Map Optimization:**
   - Google Maps embedding with rich pins
   - Directions integration
   - "Open in Google Maps" buttons

## Development Roadmap

### Week 1-2: Foundation
- Set up Next.js project with Tailwind
- Create basic layout and navigation
- Implement JSON data structure
- Build restaurant listing page

### Week 3-4: Core Features
- Implement interactive map
- Create restaurant detail pages
- Build search and filter functionality
- Add mobile responsiveness

### Week 5-6: Polish & Launch
- SEO optimization
- Performance testing
- Content population (50 restaurants)
- Beta testing with local users

### Month 2-3: Growth Features
- User accounts and favorites
- Restaurant dashboard
- Content management system
- Analytics integration

## Success Metrics

### User Engagement
- **Target:** 10,000 monthly visitors by Month 6
- **Bounce rate:** <40%
- **Average session duration:** >3 minutes
- **Pages per session:** >4

### Business Development
- **Restaurant signups:** 20 premium listings by Month 3
- **Web design leads:** 5 qualified leads/month
- **Partnerships:** 3 local tourism partnerships

### Technical Performance
- **Page load:** <2 seconds
- **Core Web Vitals:** All "Good"
- **Uptime:** 99.9%
- **Mobile score:** >90 (Lighthouse)

---

## Next Steps

1. **Domain setup** - Secure restaurantsinlanzarote.com
2. **Design system** - Create Figma components
3. **Content collection** - Start restaurant research and photography
4. **Development** - Begin with Next.js setup
5. **Local outreach** - Contact first 20 target restaurants

This product definition provides a comprehensive roadmap for building a premium, curated dining guide that will serve as both a valuable resource for visitors and an effective sales tool for web design services.