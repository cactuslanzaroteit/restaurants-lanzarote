# Product Definition: restaurantsinlanzarote.com

The premier curated guide to exceptional dining in Lanzarote.

## Vision
To create the island's most beautiful and trustworthy restaurant directory, used as both a consumer resource and a sales vehicle for high-end web redesign services.

## Strategic Pillars
1. **Boutique Curation**: Only featuring restaurants that meet a high standard of quality or potential.
2. **Design-First Experience**: Leveraging the `taste-skill` principles to "wow" users (and prospective clients) with a layout that feels like a luxury magazine.
3. **The Trojan Horse**: Every restaurant featured gets a "score." Low scores for "Web Presence" trigger the redesign sales pipeline.
4. **Owner-Centric Outreach**: We prioritize identifying the *person* behind the business (Owner Name) to ensure pitches are personal, not corporate.
5. **Growth/Maintenance Tracking**: We distinguish between "New" restaurants (potential guide completions) and "Old" ones (redesign leads).

## Core Features
- **Hero Grid**: A bento-style or high-resolution masonry grid of featured establishments.
- **The "Vibe" Filter**: Categorization by atmosphere (e.g., Volcanic Chic, Coastal Minimalist, Traditional Rustic).
- **Restaurant Details**: 
    - Full-width immersive headers.
    - "The Story" (Culinary vision).
    - "Design & Ambiance" (Interior highlights).
    - "Quick Specs" (Address, Booking, Price).
- **Redesign Preview Tool**: A hidden or gated feature for sales pitches where a client can see their "Redesigned" site side-by-side with their current one.

## Design Guidelines
- **Typography**: Inter for UI, Playfair Display or Outfit for headings (Elegant & Modern).
- **Palette**: Earthy volcanic tones (Deep Grays, Ochre, Sand) mixed with crisp whites and high-contrast blacks.
- **Animations**: Subtle scroll-reveals and smooth transitions using Framer Motion (or simple CSS transitions).

## Data Schema (`data/restaurants.json`)
```json
{
  "id": "slug-name",
  "name": "Restaurant Name",
  "owner_name": "Full Name",
  "category": "Seafood",
  "vibe": "Coastal Minimalist",
  "location": "Arrieta",
  "status": "old", 
  "rating_food": 9,
  "rating_web": 4, 
  "contact": {
    "website": "url",
    "phone": "string",
    "email": "string"
  },
  "images": {
    "hero": "/url",
    "gallery": ["/url"]
  },
  "content": {
    "story": "...",
    "ambiance": "..."
  }
}
```

## Success Metrics
- **Authored Pitch Rate**: Number of "Low Web Score" restaurants identified and pitched.
- **Conversion Rate**: Percentage of redesign pitches that lead to a personal meeting.
- **Site Speed**: Sub-1s page loads on mobile.

## Development Roadmap
### Phase 1: Lead Discovery (CURRENT)
- Run `web-redesign-sales` to scrape and populate `leads.json`.
- Identify Business Owners and verify contact emails.
- Categorize websites into 'New' (quality) and 'Old' (redesign target).

### Phase 2: Guide Completion
- Integrate 'New' restaurants into the live `website/`.
- Finalize the premium UX/UI and deploy to the main domain.

### Phase 3: Redesign Generation
- Use `taste-skill` to generate high-fidelity prototypes for 'Old' restaurants.
- Deploy previews to `previews.restaurantsinlanzarote.com`.

### Phase 4: The Pitch
- Send personalized outreach to owners using the directory as social proof.
