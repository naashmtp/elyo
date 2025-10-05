'use client';

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-amber-500/50 rounded-xl p-8 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-amber-500/20 cursor-pointer"
      role="article"
      aria-label={`Service: ${title}`}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-amber-600/0 group-hover:from-amber-500/5 group-hover:to-amber-600/5 rounded-xl transition-all duration-300" />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg mb-6 group-hover:from-amber-500/30 group-hover:to-amber-600/30 transition-all duration-300"
        >
          <Icon className="w-8 h-8 text-amber-500" />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>

        {/* Bottom accent line */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: '40px' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: delay + 0.3 }}
          className="h-1 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full mt-6 group-hover:w-20 transition-all duration-300"
        />
      </div>

      {/* Decorative corner element */}
      <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-amber-500/5 to-transparent rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}
