'use client';

import { motion } from 'framer-motion';
import {
  CheckCircle2,
  Car,
  Calendar,
  Building2,
  Award,
  Heart,
  Code
} from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FormuleSection from '@/components/FormuleSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const prestations = [
  {
    icon: Calendar,
    title: 'Organisation d\'événements',
    description: 'Mariages, anniversaires, dîners privés, séminaires... De l\'événement intimiste au projet d\'envergure, nous créons des moments inoubliables sur mesure.'
  },
  {
    icon: Building2,
    title: 'Gestion de travaux',
    description: 'Rénovation, décoration, coordination d\'artisans... Sourcing et consultation de professionnels, appels d\'offres, suivi administratif de chantier et situations travaux.'
  },
  {
    icon: Heart,
    title: 'Shopping & Personal Shopper',
    description: 'Cadeaux personnalisés, renouvellement de garde-robe, décoration d\'intérieur... Courses, recherche de produits uniques, ou accompagnement shopping selon vos goûts.'
  },
  {
    icon: Car,
    title: 'Voyages & Réservations',
    description: 'Restaurants, spectacles, séjours, circuits sur-mesure... Planification complète de vos voyages, réservations et accès à des expériences exclusives.'
  },
  {
    icon: Code,
    title: 'Prestations informatiques',
    description: 'Création de sites web, développement d\'applications, communication digitale, branding... En partenariat avec une entreprise tech, solutions digitales complètes pour tous vos projets numériques.'
  },
  {
    icon: Award,
    title: 'Services immobiliers',
    description: 'Surveillance de domicile, états des lieux, gestion de clés... Nous assurons la sécurité et le suivi de votre propriété en toute sérénité.'
  },
  {
    icon: CheckCircle2,
    title: 'Prestations sur mesure',
    description: 'Des services entièrement personnalisés selon vos besoins et vos envies spécifiques. Toute demande particulière est étudiée avec attention.'
  },
];


export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />

      {/* Hero Section with Promo */}
      <section id="accueil" className="relative">
        <Hero />
      </section>

      {/* Prestations Section Unifiée */}
      <section id="prestations" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
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
                Une gamme complète
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                  à votre service
                </span>
              </h2>
              <p className="text-gray-400 text-lg mx-auto" style={{ maxWidth: '42rem' }}>
                Des prestations de qualité pensées pour simplifier votre quotidien
                et enrichir vos expériences de vie.
              </p>
            </motion.div>
          </div>

          {/* Prestations Grid */}
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
                  className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300 group cursor-pointer flex flex-col shadow-lg hover:shadow-amber-500/20"
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

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-300 text-lg leading-relaxed mx-auto mb-8" style={{ maxWidth: '48rem' }}>
              Nous travaillons avec les meilleurs prestataires de services pour vous offrir les meilleures options en termes de qualité, de prix et d&apos;expérience.
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
