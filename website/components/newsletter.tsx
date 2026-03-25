"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check, Sparkles } from 'lucide-react'

export function Newsletter() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setIsSubscribed(true)
    setIsLoading(false)
    setEmail('')
  }

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-premium opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="glass-premium rounded-3xl p-8 md:p-12">
            <div className="text-center mb-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 mb-6"
              >
                <Mail className="h-8 w-8 text-white" />
              </motion.div>
              
              <h2 className="font-display text-4xl md:text-5xl font-bold text-secondary-900 dark:text-white mb-6">
                Stay <span className="text-gradient">Inspired</span>
              </h2>
              
              <p className="text-lg text-secondary-600 dark:text-secondary-400 max-w-2xl mx-auto mb-2">
                Get weekly updates on new restaurant discoveries, seasonal specials, 
                and exclusive dining experiences in Lanzarote.
              </p>
              
              <div className="flex items-center justify-center gap-2 text-sm text-secondary-500 dark:text-secondary-500">
                <Sparkles className="h-4 w-4" />
                <span>No spam, just curated culinary inspiration</span>
              </div>
            </div>

            {isSubscribed ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center py-12"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 mb-6">
                  <Check className="h-10 w-10 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="font-display text-3xl font-bold text-secondary-900 dark:text-white mb-4">
                  You're Subscribed!
                </h3>
                <p className="text-secondary-600 dark:text-secondary-400 max-w-md mx-auto mb-8">
                  Thank you for joining our community. Look out for our first newsletter 
                  with exclusive Lanzarote dining insights.
                </p>
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="px-6 py-3 rounded-xl border-2 border-secondary-300 dark:border-secondary-700 text-secondary-700 dark:text-secondary-300 hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
                >
                  Subscribe Another Email
                </button>
              </motion.div>
            ) : (
              <motion.form
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                onSubmit={handleSubmit}
                className="max-w-2xl mx-auto"
              >
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-secondary-400" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address"
                        className="w-full pl-12 pr-4 py-4 text-lg rounded-xl border border-secondary-200 dark:border-secondary-700 bg-white dark:bg-secondary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isLoading || !email}
                    className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 font-semibold text-lg whitespace-nowrap"
                  >
                    {isLoading ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Subscribing...
                      </span>
                    ) : (
                      'Subscribe Now'
                    )}
                  </button>
                </div>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-secondary-500 dark:text-secondary-500">
                    By subscribing, you agree to our{' '}
                    <a href="/privacy" className="text-primary-600 dark:text-primary-400 hover:underline">
                      Privacy Policy
                    </a>
                    . You can unsubscribe at any time.
                  </p>
                </div>
              </motion.form>
            )}

            {/* Stats */}
            <div className="mt-12 pt-12 border-t border-secondary-200 dark:border-secondary-800">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">5,000+</div>
                  <div className="text-secondary-600 dark:text-secondary-400">
                    Subscribers
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">98%</div>
                  <div className="text-secondary-600 dark:text-secondary-400">
                    Open Rate
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gradient mb-2">Weekly</div>
                  <div className="text-secondary-600 dark:text-secondary-400">
                    Curated Updates
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}