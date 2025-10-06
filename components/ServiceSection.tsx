'use client';

import { motion } from 'framer-motion';
import {
  Calendar,
  Wrench,
  ShoppingBag,
  Plane,
  Gift,
} from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    icon: Calendar,
    title: 'Organisation d\'événements',
    description:
      'De l\'anniversaire intimiste au mariage somptueux, nous créons des moments inoubliables sur mesure.',
  },
  {
    icon: Wrench,
    title: 'Gestion de travaux',
    description:
      'Sourcing et consultation d\'artisans, appels d\'offres, suivi administratif de chantier et situations travaux.',
  },
  {
    icon: ShoppingBag,
    title: 'Shopping & Personal Shopper',
    description:
      'Courses, recherche de cadeaux uniques, ou accompagnement shopping personnalisé selon vos goûts.',
  },
  {
    icon: Plane,
    title: 'Voyages & Réservations',
    description:
      'Planification complète de vos voyages, réservations de restaurants et expériences exclusives.',
  },
  {
    icon: Gift,
    title: 'Prestations sur mesure',
    description:
      'Des services entièrement personnalisés selon vos besoins et vos envies spécifiques.',
  },
];

export default function ServiceSection() {
  return (
    <section id="services" className="py-24 bg-black">
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
              Nos Services
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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 text-lg leading-relaxed mx-auto" style={{ maxWidth: '48rem' }}>
            Nous travaillons avec les meilleurs prestataires de services pour vous offrir les meilleures options en termes de qualité, de prix et d&apos;expérience. Nous sommes là pour vous aider à trouver les meilleures solutions en fonction de vos préférences et de vos besoins.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
