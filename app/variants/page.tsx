'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const variants = [
  {
    id: 'v1',
    name: 'Bodoni Moda',
    description: 'UPPERCASE - Espacement large - Style dramatique',
    style: 'uppercase, letter-spacing: 0.08em'
  },
  {
    id: 'v2',
    name: 'Lora',
    description: 'Capitalize - Espacement subtil - Style raffiné',
    style: 'capitalize, letter-spacing: 0.03em'
  },
  {
    id: 'v3',
    name: 'Crimson Text',
    description: 'UPPERCASE - Espacement moyen - Style éditorial',
    style: 'uppercase, letter-spacing: 0.06em'
  },
  {
    id: 'v4',
    name: 'EB Garamond',
    description: 'Capitalize - Espacement minimal - Style classique',
    style: 'capitalize, letter-spacing: 0.01em'
  },
];

export default function VariantsPage() {
  return (
    <div className="min-h-screen bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-serif font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            Variantes Typographiques
          </h1>
          <p className="text-gray-400 text-lg">
            Choisissez la police qui correspond le mieux à l&apos;identité ELYÔ
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {variants.map((variant, index) => (
            <motion.div
              key={variant.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link href={`/variants/${variant.id}`}>
                <div className="bg-gradient-to-br from-gray-900 to-gray-900/50 border border-gray-800 rounded-2xl p-8 hover:border-amber-500/50 transition-all duration-300 cursor-pointer group h-full">
                  <div className="mb-4">
                    <span className="text-amber-500 font-medium text-sm uppercase tracking-wider">
                      Variante {index + 1}
                    </span>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-3 group-hover:text-amber-400 transition-colors">
                    {variant.name}
                  </h2>
                  <p className="text-gray-300 mb-4">
                    {variant.description}
                  </p>
                  <p className="text-sm text-gray-500 font-mono">
                    {variant.style}
                  </p>
                  <div className="mt-6 text-amber-500 group-hover:text-amber-400 transition-colors flex items-center gap-2">
                    Voir la démo
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-amber-500 transition-colors"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Retour à l&apos;accueil
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
