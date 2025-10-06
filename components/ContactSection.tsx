'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import ContactForm from './ContactForm';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'services.elyo@gmail.com',
    href: 'mailto:services.elyo@gmail.com',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    content: '06 14 40 70 40',
    href: 'tel:+33614407040',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    content: '6 Rue des étuves, Montpellier',
    href: null,
  },
  {
    icon: Clock,
    title: 'Horaires',
    content: 'Disponible 24/7',
    href: null,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-black">
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
              Contactez-nous
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-4 mb-6">
              Parlons de votre
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                prochain projet
              </span>
            </h2>
            <p className="text-gray-400 text-lg mx-auto" style={{ maxWidth: '42rem' }}>
              Notre équipe est à votre écoute pour répondre à toutes vos questions
              et construire ensemble votre expérience sur mesure.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                const content = info.href ? (
                  <a
                    href={info.href}
                    className="text-gray-300 hover:text-amber-500 transition-colors"
                  >
                    {info.content}
                  </a>
                ) : (
                  <span className="text-gray-300">{info.content}</span>
                );

                return (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/20 rounded-lg flex items-center justify-center group-hover:from-amber-500/30 group-hover:to-amber-600/30 transition-all duration-300">
                      <Icon className="w-6 h-6 text-amber-500" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">{info.title}</h3>
                      <div className="text-sm">{content}</div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-gradient-to-br from-amber-500/10 to-amber-600/10 border border-amber-500/20 rounded-xl p-6"
            >
              <h3 className="text-white font-semibold mb-3">
                Service client de qualité
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                Notre équipe de conciergerie est disponible 24h/24 et 7j/7 pour
                répondre à toutes vos demandes avec réactivité et professionnalisme.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  Réponse garantie sous 4h
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  Accompagnement personnalisé
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
                  Devis gratuit et sans engagement
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
