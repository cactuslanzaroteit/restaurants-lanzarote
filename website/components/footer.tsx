import Link from 'next/link'
import { UtensilsCrossed, MapPin, Heart, Mail, Share2, Globe, Users } from 'lucide-react'

export function Footer() {
  const footerLinks = {
    Discover: [
      { label: 'All Restaurants', href: '/restaurants' },
      { label: 'By Location', href: '/locations' },
      { label: 'By Cuisine', href: '/cuisines' },
      { label: 'Editor\'s Picks', href: '/editors-picks' },
      { label: 'Seasonal Specials', href: '/seasonal' },
    ],
    Guides: [
      { label: 'Lanzarote Dining Guide', href: '/guides/dining' },
      { label: 'Volcanic Wines', href: '/guides/wines' },
      { label: 'Local Ingredients', href: '/guides/ingredients' },
      { label: 'Chef Interviews', href: '/guides/chefs' },
      { label: 'Travel Tips', href: '/guides/travel' },
    ],
    Business: [
      { label: 'List Your Restaurant', href: '/business/list' },
      { label: 'Premium Features', href: '/business/premium' },
      { label: 'Web Design Services', href: '/business/web-design' },
      { label: 'Advertising', href: '/business/advertising' },
      { label: 'Contact Sales', href: '/business/contact' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '/legal/privacy' },
      { label: 'Terms of Service', href: '/legal/terms' },
      { label: 'Cookie Policy', href: '/legal/cookies' },
      { label: 'Accessibility', href: '/legal/accessibility' },
      { label: 'Contact', href: '/legal/contact' },
    ],
  }

  return (
    <footer className="mt-auto border-t border-secondary-200 dark:border-secondary-800 bg-gradient-to-b from-white to-neutral-50 dark:from-secondary-900 dark:to-secondary-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-accent-500">
                <UtensilsCrossed className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold tracking-tight bg-gradient-premium bg-clip-text text-transparent">
                  Lanzarote
                </span>
                <span className="text-sm text-secondary-600 dark:text-secondary-400 font-medium">
                  Curated Dining Guide
                </span>
              </div>
            </div>
            <p className="text-secondary-600 dark:text-secondary-400 mb-6 max-w-md">
              Premium curated dining guide for Lanzarote, Canary Islands. 
              Discover the best restaurants with human-curated recommendations, 
              authentic reviews, and local insights.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors"
                aria-label="Social Media"
              >
                <Share2 className="h-5 w-5 text-secondary-700 dark:text-secondary-300" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors"
                aria-label="Website"
              >
                <Globe className="h-5 w-5 text-secondary-700 dark:text-secondary-300" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors"
                aria-label="Community"
              >
                <Users className="h-5 w-5 text-secondary-700 dark:text-secondary-300" />
              </a>
              <a
                href="mailto:hello@restaurantsinlanzarote.com"
                className="p-2 rounded-full bg-secondary-100 dark:bg-secondary-800 hover:bg-secondary-200 dark:hover:bg-secondary-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-secondary-700 dark:text-secondary-300" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-display text-lg font-semibold text-secondary-900 dark:text-white mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-secondary-600 dark:text-secondary-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-200 dark:border-secondary-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-500">
              <MapPin className="h-4 w-4" />
              <span>Lanzarote, Canary Islands</span>
            </div>
            <div className="flex items-center gap-6 text-sm text-secondary-500 dark:text-secondary-500">
              <span>© {new Date().getFullYear()} Restaurants in Lanzarote</span>
              <span className="hidden md:inline">•</span>
              <span>All rights reserved</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-500">
              <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              <span>Made with love for Lanzarote</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}