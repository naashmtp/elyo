'use client';

import { motion } from 'framer-motion';
import FormuleCard from './FormuleCard';

const formules = [
  {
    title: 'Essentiel',
    description: 'Pour vos besoins ponctuels',
    price: 'dès 49€',
    period: '/mois',
    features: [
      'Accès à 3 services par mois',
      'Réponse sous 24h',
      'Assistance par email',
      '1 service de réservation offert par mois',
      'Au choix dans un panel sélectionné',
    ],
    featured: false,
  },
  {
    title: 'Confort',
    description: 'Le choix de nos clients',
    price: 'dès 79€',
    period: '/mois',
    features: [
      'Accès à 5 services par mois',
      'Réponse sous 4h',
      'Assistant dédié 7j/7',
      '1 service de réservation offert par mois',
      'Au choix dans toute la gamme',
      'Priorité sur les réservations',
      'Accès aux événements',
    ],
    featured: true,
  },
  {
    title: 'Illimité',
    description: 'Service absolu sans limite',
    price: 'Sur mesure',
    period: '',
    features: [
      'Conciergerie illimitée',
      'Réponse immédiate 24/7',
      'Équipe dédiée',
      'Prestations illimitées',
      'Accès prioritaire tous événements',
      'Services sur mesure personnalisés',
      'Réseau mondial de partenaires de confiance',
      'Devis personnalisé selon vos besoins',
    ],
    featured: false,
    ctaText: 'Contactez-nous',
  },
];

export default function FormuleSection() {
  return (
    <section id="formules" className="py-24 bg-gradient-to-b from-black to-gray-900">
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
              Nos Formules
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
              Choisissez votre
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                niveau de service
              </span>
            </h2>
            <p className="text-gray-400 text-lg mx-auto" style={{ maxWidth: '42rem' }}>
              Des formules adaptées à tous vos besoins, du service ponctuel à
              l&apos;accompagnement complet sans limite.
            </p>
          </motion.div>
        </div>

        {/* Formules Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {formules.map((formule, index) => (
            <FormuleCard
              key={formule.title}
              title={formule.title}
              description={formule.description}
              price={formule.price}
              period={formule.period}
              features={formule.features}
              featured={formule.featured}
              delay={index * 0.1}
              ctaText={formule.ctaText}
            />
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-gray-500 text-sm">
            Tous nos tarifs sont hors taxes. Engagement sans durée minimale.
            <br />
            Résiliation possible à tout moment avec préavis de 30 jours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
