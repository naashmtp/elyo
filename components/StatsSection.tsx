'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Stat {
  value: string;
  suffix?: string;
  label: string;
  animateValue?: boolean;
}

const stats: Stat[] = [
  { value: '100', suffix: '%', label: 'Satisfaction client', animateValue: true },
  { value: '24/7', label: 'Disponibilité' },
  { value: '<2', suffix: 'h', label: 'Temps de réponse moyen' },
  { value: '5', suffix: '+', label: "Ans d'expérience", animateValue: true },
];

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = '', duration = 2 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (hasAnimated) return;

    const startTime = Date.now();
    const endTime = startTime + duration * 1000;

    const updateCounter = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / (endTime - startTime), 1);
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentCount = Math.floor(easeOutQuad * end);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setHasAnimated(true);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(updateCounter);
    }, 200);

    return () => clearTimeout(timer);
  }, [end, duration, hasAnimated]);

  return (
    <span className="text-5xl md:text-6xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-anthracite-800 via-navy-900 to-anthracite-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-600 rounded-full blur-3xl"
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
              Nos Chiffres
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white mb-6">
            Une expertise{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">
              reconnue
            </span>
          </h2>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card Container */}
              <motion.div
                whileHover={{ y: -8 }}
                className="relative bg-gradient-to-br from-anthracite-800/80 via-anthracite-800/60 to-navy-900/60 backdrop-blur-sm border border-anthracite-700 hover:border-gold-500/50 rounded-2xl p-8 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-gold-500/20 overflow-hidden"
              >
                {/* Animated gradient background */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 + 0.2 }}
                  className="absolute inset-0 bg-gradient-to-br from-gold-500/0 via-gold-500/5 to-gold-600/0 group-hover:from-gold-500/10 group-hover:via-gold-500/5 group-hover:to-gold-600/10 transition-all duration-500"
                />

                <div className="relative z-10 text-center">
                  {/* Animated value */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                    className="mb-4"
                  >
                    {stat.animateValue && !isNaN(parseInt(stat.value)) ? (
                      <Counter end={parseInt(stat.value)} suffix={stat.suffix} />
                    ) : (
                      <span className="text-5xl md:text-6xl font-bold font-playfair text-transparent bg-clip-text bg-gradient-to-br from-gold-400 via-gold-500 to-gold-600">
                        {stat.value}
                        {stat.suffix}
                      </span>
                    )}
                  </motion.div>

                  {/* Label */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
                    className="text-gray-300 font-raleway font-medium text-sm md:text-base group-hover:text-white transition-colors duration-300"
                  >
                    {stat.label}
                  </motion.p>

                  {/* Accent line */}
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '60px' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 + 0.6 }}
                    className="h-1 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full mx-auto mt-6 group-hover:w-full transition-all duration-500"
                  />
                </div>

                {/* Decorative corner elements */}
                <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-gold-500/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute -bottom-12 -left-12 w-24 h-24 bg-gradient-to-tr from-gold-600/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-block">
            <motion.div
              animate={{
                boxShadow: [
                  '0 0 20px rgba(201, 169, 97, 0.1)',
                  '0 0 40px rgba(201, 169, 97, 0.2)',
                  '0 0 20px rgba(201, 169, 97, 0.1)',
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
              className="w-16 h-1 bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
