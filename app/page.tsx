'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Car,
  Calendar,
  Building2,
  Award,
  Heart
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceSection from '@/components/ServiceSection';
import FormuleSection from '@/components/FormuleSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const prestations = [
  { icon: Building2, title: 'Services immobiliers', description: 'États des lieux, surveillance et gardiennage de votre domicile' },
  { icon: Car, title: 'Transport & chauffeur', description: 'Service de transport privé avec chauffeur' },
  { icon: Calendar, title: 'Réservations', description: 'Restaurants, spectacles, voyages et événements' },
  { icon: Award, title: 'Événements privés', description: 'Organisation complète de vos événements' },
  { icon: Heart, title: 'Personal shopper', description: 'Accompagnement shopping personnalisé' },
  { icon: CheckCircle2, title: 'Sur mesure', description: 'Services personnalisés selon vos besoins' },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section with Promo */}
      <section id="accueil" className="relative">
        <Hero />
      </section>

      {/* Services Section */}
      <ServiceSection />

      {/* Prestations Section */}
      <section id="prestations" className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-amber-500 font-medium tracking-wider uppercase text-sm">
                Nos Prestations
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
                Tout ce dont vous avez besoin
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  à portée de main
                </span>
              </h2>
              <p className="text-gray-400 text-lg mx-auto" style={{ maxWidth: '42rem' }}>
                Une large gamme de prestations pour répondre à tous vos besoins du quotidien
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {prestations.map((prestation, index) => {
              const Icon = prestation.icon;
              return (
                <motion.div
                  key={prestation.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300 group cursor-pointer min-h-[160px] flex flex-col shadow-lg hover:shadow-amber-500/20"
                  role="article"
                  tabIndex={0}
                  aria-label={`${prestation.title}: ${prestation.description}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.currentTarget.click();
                    }
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-amber-500/30 group-hover:to-amber-600/30 transition-all duration-300">
                    <Icon className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-white font-semibold mb-2 text-base">{prestation.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{prestation.description}</p>
                </motion.div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6">
              Vous ne trouvez pas ce que vous cherchez ?
            </p>
            <Link href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white px-8 py-3 rounded-lg font-medium tracking-wide transition-all duration-200 shadow-lg shadow-amber-500/30"
              >
                Demander un service personnalisé
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Formules Section */}
      <FormuleSection />

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
