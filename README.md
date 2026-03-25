# Restaurants in Lanzarote - Premium Dining Guide

A premium, curated dining guide website for Lanzarote, Canary Islands. Built with Next.js 15, Tailwind CSS, and modern UI components.

## Live Demo
- **Production URL**: https://restaurantsinlanzarote.com (to be deployed)
- **Development**: http://localhost:3000

## Features

- **Premium Design**: Modern, elegant UI with subtle animations
- **Dark/Light Mode**: Full theme switching support
- **Responsive**: Mobile-first design that works on all devices
- **Interactive Components**:
  - Hero section with search and stats
  - Restaurant grid with filtering
  - Restaurant detail pages with tabs
  - Location explorer
  - Newsletter subscription
- **Performance**: Optimized for fast loading
- **Accessibility**: WCAG compliant with semantic HTML

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS with custom design system
- **UI Components**: Custom components
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter, Playfair Display
- **Deployment**: Coolify with Nixpacks

## Project Structure

```
Restaurants/
├── website/                 # Next.js application
│   ├── app/                # App router pages
│   ├── components/         # React components
│   ├── public/             # Static assets
│   ├── package.json        # Dependencies
│   └── tailwind.config.ts  # Tailwind configuration
├── data/                   # Restaurant databases
├── docs/                   # Documentation
├── scripts/                # Automation scripts
├── assets/                 # Images, logos, media
├── PRODUCT_DEFINITION.md   # Complete product specification
├── PROJECT.md             # Project plan
└── README.md              # This file
```

## Getting Started

### Development

```bash
cd website
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
npm start
```

## Deployment with Coolify & Nixpacks

This project is configured for deployment on Coolify using Nixpacks.

### Nixpacks Configuration
The project includes a `.nixpacks` directory with configuration for:
- Node.js 18+
- Next.js build optimization
- Production dependencies
- Environment variables

### Coolify Deployment
1. Connect your GitHub repository to Coolify
2. Select the `website` directory as the build context
3. Use Nixpacks as the build method
4. Set environment variables as needed

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

## Data Structure

Follows the schema defined in `PRODUCT_DEFINITION.md`:
- Restaurants with detailed profiles
- Menus, reviews, reservations
- Location-based organization
- Editorial curation system

## Development Roadmap

### Phase 1: MVP (Complete)
- [x] Next.js setup with Tailwind
- [x] Core components (Hero, Grid, Detail)
- [x] Basic restaurant data structure
- [x] Responsive design

### Phase 2: Growth
- [ ] Connect to real database
- [ ] Add Google Maps integration
- [ ] Implement search functionality
- [ ] User accounts and favorites

### Phase 3: Monetization
- [ ] Premium listings
- [ ] Web design services portal
- [ ] Booking integration
- [ ] Analytics dashboard

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

Proprietary - Part of the Restaurants in Lanzarote project.

## Contact

- **Project Owner**: Fred331code
- **Repository**: https://github.com/Fred331code/restaurants-in-lanzarote
- **Website**: https://restaurantsinlanzarote.com (coming soon)