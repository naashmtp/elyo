'use client';

import { motion } from 'framer-motion';

interface Value {
  emoji: string;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    emoji: '🎯',
    title: 'Proximité',
    description: 'Un service local, à votre écoute',
  },
  {
    emoji: '⚡',
    title: 'Efficacité',
    description: 'Réactivité et professionnalisme',
  },
  {
    emoji: '🤝',
    title: 'Confiance',
    description: 'Discrétion et fiabilité',
  },
];

export default function ValuesSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-anthracite-900 via-anthracite-800 to-navy-900">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.05, 0.08, 0.05],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-500 rounded-full blur-3xl"
        />
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
              Nos Valeurs
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Ce qui nous{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              définit
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto font-inter">
            Des valeurs fortes au service de votre satisfaction
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Card Container */}
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                className="relative bg-gradient-to-br from-anthracite-800/70 via-anthracite-800/50 to-navy-900/50 backdrop-blur-sm border border-anthracite-700 hover:border-gold-500 rounded-2xl p-8 lg:p-10 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-gold-500/20 overflow-hidden min-h-[280px] flex flex-col"
              >
                {/* Animated gradient overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                  className="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-transparent to-gold-600/0 group-hover:from-gold-500/10 group-hover:to-gold-600/10 transition-all duration-500"
                />

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-gold-500/10 to-transparent rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-gold-600/10 to-transparent rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 text-center flex flex-col items-center flex-1">
                  {/* Emoji Icon */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.15 + 0.3,
                      type: 'spring',
                      stiffness: 200,
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    className="text-6xl lg:text-7xl mb-6 group-hover:drop-shadow-[0_0_20px_rgba(201,169,97,0.3)] transition-all duration-500"
                  >
                    {value.emoji}
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.4 }}
                    className="text-2xl lg:text-3xl font-playfair font-bold text-white mb-4 group-hover:text-gold-400 transition-colors duration-300"
                  >
                    {value.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                    className="text-gray-400 font-inter text-base lg:text-lg leading-relaxed group-hover:text-gray-300 transition-colors duration-300 mb-6"
                  >
                    {value.description}
                  </motion.p>

                  {/* Accent line - pushed to bottom with mt-auto */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '50px' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.6 }}
                    className="h-1 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full group-hover:w-32 transition-all duration-500 mt-auto"
                  />
                </div>

                {/* Floating particles effect on hover */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none">
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-gold-400 rounded-full opacity-0 group-hover:opacity-60"
                      animate={{
                        y: [0, -100],
                        x: [0, (i - 1) * 50],
                        opacity: [0, 0.6, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: 'easeOut',
                      }}
                      style={{
                        left: `${30 + i * 20}%`,
                        bottom: '20%',
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA or decorative element */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-block"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full blur-xl opacity-30" />
              <div className="relative w-20 h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 rounded-full" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
