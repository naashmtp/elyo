'use client';

import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

interface FormuleCardProps {
  title: string;
  description: string;
  price: string;
  period?: string;
  features: string[];
  note?: string;
  featured?: boolean;
  delay?: number;
  ctaText?: string;
}

export default function FormuleCard({
  title,
  description,
  price,
  period = '/mois',
  features,
  note,
  featured = false,
  delay = 0,
  ctaText = 'Choisir cette formule',
}: FormuleCardProps) {
  const handleChooseFormule = () => {
    // Store selected formula
    const formuleMapping: { [key: string]: string } = {
      'Essentiel': 'Formule Essentielle',
      'Confort': 'Formule Premium',
      'Illimité': 'Formule Premium'
    };
    const serviceType = formuleMapping[title] || `Formule ${title}`;
    sessionStorage.setItem('selectedFormule', serviceType);

    // Scroll to contact section
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={`relative ${featured ? 'md:-mt-8 md:mb-8' : ''}`}
    >
      {/* Featured Badge */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="absolute -top-4 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="bg-gradient-to-r from-amber-600 to-amber-500 text-white px-6 py-2 rounded-full text-sm font-medium shadow-lg flex items-center gap-2">
            <Star className="w-4 h-4 fill-current" />
            Recommandé
          </div>
        </motion.div>
      )}

      <motion.div
        whileHover={{ y: featured ? -12 : -8, scale: 1.02 }}
        className={`relative bg-gray-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 h-full flex flex-col ${
          featured
            ? 'border-amber-500 shadow-2xl shadow-amber-500/30 bg-gradient-to-br from-gray-900/80 to-gray-900/50'
            : 'border-gray-800 hover:border-amber-500/50 shadow-lg hover:shadow-xl hover:shadow-amber-500/20'
        }`}
        role="article"
        aria-label={`Formule ${title}${featured ? ' (recommandé)' : ''}: ${price}${period}`}
      >
        {/* Gradient overlay for featured card */}
        {featured && (
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-amber-600/5 rounded-2xl" />
        )}

        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="text-center mb-8">
            <h3
              className={`text-2xl font-bold mb-2 ${
                featured ? 'text-amber-400' : 'text-white'
              }`}
            >
              {title}
            </h3>
            <p className="text-gray-400 text-sm">{description}</p>
          </div>

          {/* Price */}
          <div className="text-center mb-8">
            <div className="flex items-baseline justify-center gap-1">
              <span className="text-5xl font-bold text-white">{price}</span>
              <span className="text-gray-400 text-lg">{period}</span>
            </div>
          </div>

          {/* Features */}
          <div className="flex-1 mb-8">
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: delay + 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <div
                    className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      featured
                        ? 'bg-amber-500/20'
                        : 'bg-gray-800'
                    }`}
                  >
                    <Check
                      className={`w-3.5 h-3.5 ${
                        featured ? 'text-amber-400' : 'text-amber-500'
                      }`}
                    />
                  </div>
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Important Note */}
          {note && (
            <div className="mb-6 p-4 bg-gray-800/50 border border-gray-700/50 rounded-lg">
              <p className="text-xs font-semibold text-amber-400 mb-2">Important :</p>
              <p className="text-xs text-gray-400 leading-relaxed">{note}</p>
            </div>
          )}

          {/* CTA Button */}
          <motion.button
            onClick={handleChooseFormule}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full py-4 rounded-lg font-medium tracking-wide transition-all duration-200 ${
              featured
                ? 'bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white shadow-lg shadow-amber-500/30'
                : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700 hover:border-amber-500/50'
            }`}
          >
            {ctaText}
          </motion.button>
        </div>

        {/* Decorative corner elements */}
        {featured && (
          <>
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-amber-500/10 to-transparent rounded-tl-2xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-amber-500/10 to-transparent rounded-br-2xl" />
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
