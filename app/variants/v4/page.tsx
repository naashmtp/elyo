'use client';

import { motion } from 'framer-motion';
import {
  Shield,
  Award,
  Heart,
  Zap,
  CheckCircle2,
  Package,
  Shirt,
  Eye,
  Car,
  Calendar,
  Headphones
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceSection from '@/components/ServiceSection';
import FormuleSection from '@/components/FormuleSection';
import TeamSection from '@/components/TeamSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const prestations = [
  { icon: Package, title: 'Livraison & courses', description: 'Livraison express de vos achats et courses quotidiennes' },
  { icon: Shirt, title: 'Pressing & repassage', description: 'Service pressing haut de gamme et retouches' },
  { icon: Eye, title: 'Surveillance domicile', description: 'Surveillance et gardiennage de votre domicile' },
  { icon: Car, title: 'Transport & chauffeur', description: 'Service de transport privé avec chauffeur' },
  { icon: Calendar, title: 'Réservations', description: 'Restaurants, spectacles, voyages et événements' },
  { icon: Headphones, title: 'Assistance 24/7', description: 'Support et assistance disponible à tout moment' },
  { icon: Shield, title: 'Démarches admin', description: 'Gestion administrative et paperasse' },
  { icon: Award, title: 'Événements privés', description: 'Organisation complète de vos événements' },
  { icon: Heart, title: 'Personal shopper', description: 'Accompagnement shopping personnalisé' },
  { icon: Zap, title: 'Services express', description: 'Interventions urgentes et prioritaires' },
  { icon: Package, title: 'Réception colis', description: 'Réception et gestion de vos livraisons' },
  { icon: CheckCircle2, title: 'Sur mesure', description: 'Services personnalisés selon vos besoins' },
];

const statistics = [
  { value: '100%', label: 'Satisfaction client' },
  { value: '24/7', label: 'Disponibilité' },
  { value: '<2h', label: 'Temps de réponse' },
  { value: '5+', label: 'Années d\'expérience' },
];

const values = [
  {
    icon: Heart,
    title: 'Proximité',
    description: 'Un service local et personnalisé qui comprend vos besoins uniques',
  },
  {
    icon: Zap,
    title: 'Efficacité',
    description: 'Des solutions rapides et professionnelles pour chaque demande',
  },
  {
    icon: Shield,
    title: 'Confiance',
    description: 'Discrétion absolue et fiabilité dans chaque prestation',
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      {/* Variant Number Badge */}
      <div className="fixed top-4 right-4 z-50 bg-amber-500 text-black font-bold text-lg px-4 py-2 rounded-full shadow-lg">
        V4
      </div>

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
        </div>
      </section>

      {/* Formules Section */}
      <FormuleSection />

      {/* Statistics Section */}
      <section className="py-24 bg-black border-y border-gray-900" aria-label="Statistiques de performance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1, type: "spring", stiffness: 100 }}
                whileHover={{ scale: 1.05 }}
                className="text-center group cursor-default"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent mb-2 group-hover:from-amber-300 group-hover:to-amber-500 transition-all duration-300">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-sm md:text-base group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-amber-500 font-medium tracking-wider uppercase text-sm">
                Nos Valeurs
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
                Ce qui nous définit
              </h2>
              <p className="text-gray-400 text-lg mx-auto" style={{ maxWidth: '42rem' }}>
                Des principes forts au service de votre satisfaction
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="relative group"
                  tabIndex={0}
                  role="article"
                  aria-label={`Valeur: ${value.title}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-amber-600/5 rounded-2xl blur-xl group-hover:from-amber-500/20 group-hover:to-amber-600/10 transition-all duration-500" />
                  <div className="relative bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 focus-within:border-amber-500/50 focus-within:ring-2 focus-within:ring-amber-500/20">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:from-amber-500/30 group-hover:to-amber-600/30 transition-all duration-300">
                      <Icon className="w-8 h-8 text-amber-500" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <TeamSection />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
