'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
} from 'lucide-react';

const navigation = {
  company: [
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Formules', href: '#formules' },
    { name: 'Équipe', href: '#equipe' },
  ],
  services: [
    { name: 'Événements', href: '#services' },
    { name: 'Services à domicile', href: '#services' },
    { name: 'Shopping', href: '#services' },
    { name: 'Voyages', href: '#services' },
  ],
  legal: [
    { name: 'Mentions légales', href: '#legal' },
    { name: 'Confidentialité', href: '#privacy' },
    { name: 'CGV', href: '#terms' },
    { name: 'Cookies', href: '#cookies' },
  ],
  social: [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-900" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl font-serif font-bold mb-4">
                <span className="text-white">ELYÔ</span>
                <span className="text-amber-500"> CONCIERGERIE</span>
              </h2>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Votre conciergerie privée dédiée à simplifier votre quotidien et
                sublimer vos moments précieux avec des services de qualité.
              </p>

              {/* Contact Info */}
              <address className="space-y-3 not-italic">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <a
                    href="mailto:elyoconciergerie@outlook.fr"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                    aria-label="Envoyer un email à elyoconciergerie@outlook.fr"
                  >
                    elyoconciergerie@outlook.fr
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                  <a
                    href="tel:+33614407040"
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                    aria-label="Appeler le 06 14 40 70 40"
                  >
                    06 14 40 70 40
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400" aria-hidden="true" />
                  <span className="text-gray-400">6 Rue des étuves, Montpellier</span>
                </div>
              </address>
            </motion.div>
          </div>

          {/* Navigation Links */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            aria-label="Navigation entreprise"
          >
            <h3 className="text-white font-semibold mb-4">Entreprise</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors text-sm focus:outline-none focus:text-amber-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            aria-label="Navigation services"
          >
            <h3 className="text-white font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors text-sm focus:outline-none focus:text-amber-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>

          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            aria-label="Navigation légale"
          >
            <h3 className="text-white font-semibold mb-4">Légal</h3>
            <ul className="space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors text-sm focus:outline-none focus:text-amber-500"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-900" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gray-500 text-sm text-center md:text-left"
          >
            © {new Date().getFullYear()} ELYÔ Conciergerie. Tous droits réservés.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-4"
            role="navigation"
            aria-label="Réseaux sociaux"
          >
            {navigation.social.map((item) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 hover:border-amber-500 flex items-center justify-center text-gray-400 hover:text-amber-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black"
                  aria-label={`Suivez-nous sur ${item.name}`}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" aria-hidden="true" />
    </footer>
  );
}
