# Restaurants in Lanzarote - Premium Dining Guide

A premium, curated dining guide website for Lanzarote, Canary Islands. Built with Next.js 15, Tailwind CSS, and modern UI components.

## Features

- **Premium Design**: Modern, elegant UI with subtle animations and bento-grid layouts
- **Dark/Light Mode**: Full theme switching support
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Components**: 
  - Hero section with search and stats
  - Restaurant grid with filtering
  - Restaurant detail pages with tabs
  - Location explorer
  - Newsletter subscription
- **Performance**: Optimized for fast loading with Next.js Image component
- **Accessibility**: WCAG compliant with semantic HTML

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Custom components with Radix UI primitives
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Playfair Display, Inter, JetBrains Mono
- **Theme**: next-themes for dark/light mode

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
website/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout with theme provider
│   ├── page.tsx           # Homepage
│   └── restaurants/[slug] # Dynamic restaurant pages
├── components/            # Reusable React components
│   ├── hero.tsx          # Hero section
│   ├── restaurant-grid.tsx # Restaurant listing grid
│   ├── restaurant-detail.tsx # Restaurant detail page
│   ├── featured-locations.tsx # Location explorer
│   ├── newsletter.tsx    # Newsletter subscription
│   ├── navigation.tsx    # Header navigation
│   ├── footer.tsx        # Footer
│   └── theme-provider.tsx # Theme context
├── public/               # Static assets
└── styles/              # Global styles
```

## Design System

### Colors
Based on Lanzarote's natural beauty:
- **Primary**: Ocean Blue (#1E6F9F)
- **Secondary**: Volcanic Black (#2D2D2D)
- **Accent**: Sunset Orange (#FF6B35)
- **Neutral**: Sand Beige (#F5E9D4)

### Typography
- **Headings**: Playfair Display (elegant, premium)
- **Body**: Inter (clean, readable)
- **Code**: JetBrains Mono (technical elements)

### Animations
- Fade in/out transitions
- Slide up/down effects
- Hover lift effects
- Shimmer loading states

## Data Structure

The application uses mock data following the schema defined in `PRODUCT_DEFINITION.md`. In a production environment, this would connect to a backend API or database.

## Deployment

This application is ready for deployment on platforms like:
- Vercel (recommended)
- Coolify (as specified in PRODUCT_DEFINITION.md)
- Any Node.js hosting platform

## Next Steps

1. **Connect to real data**: Replace mock data with API/database
2. **Add search functionality**: Implement Algolia or similar search
3. **Map integration**: Add Google Maps with restaurant locations
4. **User authentication**: Add user accounts and favorites
5. **Booking system**: Integrate with reservation platforms
6. **Admin dashboard**: Content management system for restaurants
7. **Mobile app**: Convert to Progressive Web App (PWA)

## License

Proprietary - Part of the Restaurants in Lanzarote project.