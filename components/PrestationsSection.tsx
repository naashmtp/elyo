'use client';

import { motion } from 'framer-motion';
import {
  Calendar,
  Users,
  HardHat,
  Lightbulb,
  ShoppingCart,
  ShoppingBag,
  Car,
  Eye,
} from 'lucide-react';

interface Prestation {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
}

const prestations: Prestation[] = [
  { icon: Calendar, title: 'Réservation' },
  { icon: Users, title: 'Accompagnement' },
  { icon: HardHat, title: 'Suivi de travaux' },
  { icon: Lightbulb, title: 'Conseil personnalisé' },
  { icon: ShoppingCart, title: 'Achat de produits ou matériels' },
  { icon: ShoppingBag, title: 'Courses' },
  { icon: Car, title: 'Transport' },
  { icon: Eye, title: 'Surveillance' },
];

export default function PrestationsSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-anthracite-900 via-anthracite-800 to-anthracite-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-gold-400 font-raleway uppercase tracking-[0.2em] text-sm font-medium">
              Nos Prestations
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Un service complet pour{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              tous vos besoins
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-inter">
            De la simple livraison aux missions les plus complexes, nous sommes là pour vous faciliter le quotidien
          </p>
        </motion.div>

        {/* Prestations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {prestations.map((prestation, index) => {
            const Icon = prestation.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-anthracite-800/50 backdrop-blur-sm border border-anthracite-700 hover:border-gold-500 rounded-xl p-6 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-gold-500/10"
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gold-500/0 to-gold-600/0 group-hover:from-gold-500/5 group-hover:to-gold-600/5 rounded-xl transition-all duration-300" />

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gold-500/20 to-gold-600/20 rounded-lg mb-4 group-hover:from-gold-500/30 group-hover:to-gold-600/30 transition-all duration-300"
                  >
                    <Icon className="w-7 h-7 text-gold-400" />
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-base font-raleway font-medium text-white group-hover:text-gold-400 transition-colors duration-300">
                    {prestation.title}
                  </h3>

                  {/* Bottom accent line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '30px' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.05 + 0.3 }}
                    className="h-0.5 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full mt-4 group-hover:w-16 transition-all duration-300"
                  />
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-3 right-3 w-16 h-16 bg-gradient-to-br from-gold-500/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
