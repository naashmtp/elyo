'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function TeamSection() {
  return (
    <section id="equipe" className="py-24 bg-black">
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
              Notre Équipe
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
              Notre engagement à votre service
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                pour vos besoins
              </span>
            </h2>
            <p className="text-gray-400 text-lg mx-auto" style={{ maxWidth: '42rem' }}>
              Une équipe dévouée et professionnelle pour vous accompagner au quotidien
            </p>
          </motion.div>
        </div>

        {/* Team Member - Jaouad */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto"
          style={{ maxWidth: '64rem' }}
        >
          <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 shadow-xl" style={{ width: '100%' }}>
            <div className="p-8 md:p-12" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', width: '100%' }}>
              {/* Photo */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center justify-center"
              >
                <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-amber-500/30">
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent z-10" />
                  <Image
                    src="/jaouad.jpg"
                    alt="Jaouad - Fondateur & Directeur ELYÔ Conciergerie"
                    width={288}
                    height={288}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'center calc(0% - 20px)' }}
                    priority
                  />
                </div>
              </motion.div>

              {/* Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col justify-center"
              >
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-2">
                  Jaouad
                </h3>
                <p className="text-amber-500 text-lg font-medium mb-6">
                  Fondateur & Directeur
                </p>

                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p style={{ maxWidth: '100%' }}>
                    Fort d&apos;une expérience de plus de 5 ans dans le service de conciergerie,
                    Jaouad a fondé ELYÔ avec une vision claire : offrir un service de qualité
                    personnalisé à Montpellier.
                  </p>
                  <p style={{ maxWidth: '100%' }}>
                    Passionné par l&apos;art du service et l&apos;attention aux détails, il s&apos;engage
                    à dépasser les attentes de chaque client avec professionnalisme et discrétion.
                  </p>
                </div>

                {/* Contact rapide */}
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-amber-500 hover:text-amber-400 transition-colors duration-200 font-medium"
                  >
                    Contactez Jaouad
                    <svg
                      className="w-5 h-5 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
