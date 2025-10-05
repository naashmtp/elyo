'use client';

import { motion } from 'framer-motion';
import { ChevronRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black"
      aria-label="Section d'accueil"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-amber-500/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-amber-600/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        {/* Promo Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500/20 to-amber-600/20 border border-amber-500/30 rounded-full px-6 py-2 mb-8 backdrop-blur-sm"
          role="banner"
          aria-label="Promotion en cours"
        >
          <Sparkles className="w-4 h-4 text-amber-400" aria-hidden="true" />
          <span className="text-amber-400 font-medium text-sm tracking-wide">
            -30% jusqu&apos;au 30/09/25 - Code: ELYO30
          </span>
        </motion.div>

        {/* Logo Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex justify-center mb-8"
        >
          <Image
            src="/logo.png"
            alt="ELYÔ"
            width={120}
            height={120}
            className="w-24 h-24 md:w-32 md:h-32 object-contain opacity-90"
            priority
          />
        </motion.div>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight"
        >
          Un service personnalisé à{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
            Montpellier
          </span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-12 mx-auto leading-relaxed"
          style={{ maxWidth: '48rem' }}
        >
          Gagnez du temps, on s&apos;occupe de tout
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#services"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="group bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-white px-8 py-4 rounded-lg font-medium tracking-wide transition-all duration-200 shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 flex items-center gap-2 min-h-[48px] min-w-[200px] justify-center focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Découvrir nos services"
          >
            Découvrir nos services
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" aria-hidden="true" />
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-transparent border-2 border-amber-500 hover:bg-amber-500/10 hover:border-amber-400 text-amber-400 hover:text-amber-300 px-8 py-4 rounded-lg font-medium tracking-wide transition-all duration-200 min-h-[48px] min-w-[200px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black"
            aria-label="Nous contacter"
          >
            Nous contacter
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          aria-label="Faire défiler vers le bas"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-amber-500/50 rounded-full flex items-start justify-center p-2"
            aria-hidden="true"
          >
            <motion.div
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-amber-500 rounded-full"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
