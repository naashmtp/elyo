'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  Mail,
  Award,
  Users,
  Star,
  Target,
  Heart,
  Shield,
  Clock,
  TrendingUp,
  CheckCircle,
  Briefcase,
  Sparkles,
  ArrowRight,
  MapPin,
  Phone,
  Globe,
  Calendar
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const skills = [
  {
    icon: Target,
    title: 'Efficacité Opérationnelle',
    description: 'Gestion rigoureuse de chaque demande avec une attention méticuleuse aux détails et aux délais.'
  },
  {
    icon: Heart,
    title: 'Service Personnalisé',
    description: 'Approche sur mesure adaptée aux préférences uniques de chaque client pour une expérience exceptionnelle.'
  },
  {
    icon: Shield,
    title: 'Discrétion Absolue',
    description: 'Confidentialité garantie et respect de votre vie privée dans toutes nos interactions.'
  },
  {
    icon: Globe,
    title: 'Réseau de Partenaires',
    description: 'Accès privilégié aux meilleures adresses et partenaires de confiance dans tous les secteurs.'
  },
  {
    icon: Clock,
    title: 'Disponibilité 24/7',
    description: 'Équipe à votre service jour et nuit pour répondre à toutes vos demandes en temps réel.'
  },
  {
    icon: TrendingUp,
    title: 'Innovation Continue',
    description: 'Amélioration constante de nos services pour dépasser vos attentes et anticiper vos besoins.'
  }
];

const timeline = [
  {
    year: '2020',
    title: 'Fondation d\'ELYÔ',
    description: 'Lancement de la conciergerie avec une vision claire : simplifier le quotidien de nos clients avec un service personnalisé d\'exception.'
  },
  {
    year: '2021',
    title: 'Expansion des Services',
    description: 'Développement de notre offre avec des services lifestyle personnalisés et création de partenariats privilégiés.'
  },
  {
    year: '2023',
    title: 'Reconnaissance Qualité',
    description: 'Obtention de certifications qualité et reconnaissance dans le secteur de la conciergerie privée.'
  },
  {
    year: '2025',
    title: 'Vision Future',
    description: 'Expansion nationale et développement de services digitaux innovants pour une expérience client augmentée.'
  }
];

const testimonials = [
  {
    name: 'Sophie Martin',
    role: 'Directrice Marketing',
    content: 'Un service exceptionnel qui a véritablement simplifié ma vie. L\'équipe est réactive, professionnelle et toujours à l\'écoute. Je recommande vivement ELYÔ.',
    rating: 5
  },
  {
    name: 'Laurent Dubois',
    role: 'Entrepreneur',
    content: 'La qualité du service et l\'attention aux détails sont remarquables. ELYÔ anticipe mes besoins et dépasse constamment mes attentes. Un partenaire de confiance.',
    rating: 5
  },
  {
    name: 'Marie Leclerc',
    role: 'Architecte',
    content: 'Professionnalisme absolu et discrétion exemplaire. L\'équipe ELYÔ transforme chaque demande en expérience mémorable. Je ne peux plus m\'en passer.',
    rating: 5
  }
];

export default function EquipePage() {
  return (
    <div className="min-h-screen bg-anthracite">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-anthracite/80 backdrop-blur-md border-b border-charcoal">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-gold-light to-gold-dark rounded-lg flex items-center justify-center">
                <span className="text-anthracite font-playfair font-bold text-xl">E</span>
              </div>
              <span className="font-playfair text-2xl text-pearl font-semibold tracking-tight">
                ELYÔ
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/equipe" className="text-gold transition-colors font-inter">
                Notre Équipe
              </Link>
              <Link href="/services" className="text-pearl/80 hover:text-gold transition-colors font-inter">
                Services
              </Link>
              <Link href="/contact" className="px-6 py-2 bg-gold text-anthracite rounded-full font-raleway font-medium hover:bg-gold-light transition-all">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-6 pt-28">
        <Link
          href="/"
          className="inline-flex items-center space-x-2 text-pearl/60 hover:text-gold transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-inter">Retour à l&apos;accueil</span>
        </Link>
      </div>

      {/* Hero Banner */}
      <section className="relative py-20 px-6 overflow-hidden">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerChildren}
          className="max-w-7xl mx-auto text-center space-y-6"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-navy/50 rounded-full border border-gold/20"
          >
            <Users className="w-4 h-4 text-gold" />
            <span className="text-sm text-gold-light font-raleway tracking-wider uppercase">
              Notre Équipe
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-playfair text-5xl md:text-6xl lg:text-7xl font-bold text-pearl leading-tight"
          >
            Des Experts
            <br />
            <span className="bg-gradient-to-r from-gold-light via-gold to-gold-dark bg-clip-text text-transparent">
              Dévoués à Votre Satisfaction
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="max-w-3xl mx-auto text-lg md:text-xl text-pearl/70 font-inter leading-relaxed"
          >
            Chaque membre de l&apos;équipe ELYÔ incarne nos valeurs de qualité, de discrétion et de service personnalisé.
            Ensemble, nous créons des expériences exceptionnelles qui dépassent vos attentes.
          </motion.p>
        </motion.div>

        {/* Decorative gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-3xl -z-10" />
      </section>

      {/* Team Philosophy Section */}
      <section className="py-16 px-6 border-t border-charcoal">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-6"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-2xl mb-4">
            <Sparkles className="w-8 h-8 text-gold" />
          </div>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-pearl">
            Notre Philosophie
          </h2>
          <p className="text-lg text-pearl/70 font-inter leading-relaxed">
            Chez ELYÔ, nous croyons que la qualité n&apos;est pas une destination, mais un voyage quotidien.
            Notre équipe s&apos;engage à transformer chaque interaction en une expérience mémorable,
            en alliant professionnalisme, discrétion et une attention personnalisée qui fait toute la différence.
          </p>
        </motion.div>
      </section>

      {/* Founder Profile */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="luxury-card p-8 md:p-12"
          >
            <div className="grid md:grid-cols-[350px_1fr] gap-8 md:gap-12">
              {/* Profile Image & Info */}
              <div className="space-y-6">
                <div className="w-full aspect-square bg-gradient-to-br from-gold/20 to-navy rounded-2xl flex items-center justify-center overflow-hidden border-2 border-gold/20 group-hover:border-gold/30 transition-all duration-300">
                  <div className="text-8xl font-playfair font-bold text-gold group-hover:scale-110 transition-transform duration-300">J</div>
                </div>

                <div className="space-y-3 text-center md:text-left">
                  <h3 className="font-playfair text-3xl font-semibold text-pearl">
                    Jaouad
                  </h3>
                  <p className="text-gold font-raleway tracking-wide uppercase text-sm">
                    Fondateur & Directeur
                  </p>

                  {/* Contact */}
                  <div className="pt-4 space-y-3">
                    <a
                      href="mailto:elyoconciergerie@outlook.fr"
                      className="flex items-center justify-center md:justify-start space-x-3 text-pearl/70 hover:text-gold transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gold/10 group-hover:bg-gold/20 rounded-lg flex items-center justify-center transition-colors">
                        <Mail className="w-5 h-5 text-gold" />
                      </div>
                      <span className="font-inter text-sm">elyoconciergerie@outlook.fr</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Profile Details */}
              <div className="space-y-8">
                <div className="space-y-4">
                  <h4 className="font-raleway text-sm text-gold-light uppercase tracking-wider flex items-center space-x-2">
                    <Award className="w-4 h-4" />
                    <span>Parcours Académique</span>
                  </h4>
                  <p className="text-pearl/80 font-inter leading-relaxed">
                    Diplômé en <strong className="text-pearl">Droit et Sciences Politiques</strong> de l&apos;Université de Montpellier,
                    Jaouad a développé une expertise solide en gestion et relations internationales,
                    fondement de sa vision stratégique pour ELYÔ.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-raleway text-sm text-gold-light uppercase tracking-wider flex items-center space-x-2">
                    <Briefcase className="w-4 h-4" />
                    <span>Expérience Professionnelle</span>
                  </h4>
                  <p className="text-pearl/80 font-inter leading-relaxed">
                    Fort d&apos;une expérience significative dans la <strong className="text-pearl">gestion de programmes immobiliers</strong> au
                    sein du groupe Maxal, Jaouad maîtrise l&apos;art de coordonner des projets complexes
                    et de gérer des relations client de qualité avec professionnalisme.
                  </p>
                </div>

                <div className="space-y-4">
                  <h4 className="font-raleway text-sm text-gold-light uppercase tracking-wider flex items-center space-x-2">
                    <Target className="w-4 h-4" />
                    <span>Vision</span>
                  </h4>
                  <p className="text-pearl/80 font-inter leading-relaxed">
                    La mission de Jaouad est claire : <strong className="text-pearl">simplifier le quotidien de ses clients</strong> en
                    offrant un service de conciergerie personnalisé qui allie efficacité, discrétion et qualité.
                    Son approche centrée sur l&apos;humain et son réseau étendu font d&apos;ELYÔ un partenaire de confiance
                    pour tous ceux qui recherchent la qualité dans chaque détail.
                  </p>
                </div>

                {/* Quote */}
                <div className="relative p-6 bg-anthracite/50 rounded-xl border-l-4 border-gold">
                  <p className="text-pearl/90 font-inter italic leading-relaxed">
                    &quot;Notre succès se mesure à la satisfaction de nos clients. Chaque jour, nous nous engageons
                    à dépasser leurs attentes et à leur offrir une expérience de service incomparable.&quot;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Skills Grid */}
      <section className="py-20 px-6 border-t border-charcoal">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="max-w-7xl mx-auto space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-pearl">
              Notre <span className="text-gold">Expertise</span>
            </h2>
            <p className="max-w-2xl mx-auto text-pearl/70 font-inter text-lg">
              Des compétences multiples à votre service
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="luxury-card p-8 space-y-4 group"
              >
                <div className="w-14 h-14 bg-gold/10 group-hover:bg-gold/20 rounded-2xl flex items-center justify-center transition-colors">
                  <skill.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-pearl">
                  {skill.title}
                </h3>
                <p className="text-pearl/60 font-inter leading-relaxed">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 border-t border-charcoal">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="max-w-5xl mx-auto space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-pearl">
              Notre <span className="text-gold">Parcours</span>
            </h2>
            <p className="max-w-2xl mx-auto text-pearl/70 font-inter text-lg">
              Une histoire de qualité et d&apos;innovation continue
            </p>
          </motion.div>

          <div className="space-y-8">
            {timeline.map((milestone, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="relative pl-20 pb-8 border-l-2 border-gold/20 last:border-l-0"
              >
                {/* Year Badge */}
                <div className="absolute -left-[52px] top-0 w-24 h-24 bg-gradient-to-br from-gold-light to-gold-dark rounded-2xl flex items-center justify-center">
                  <span className="font-playfair text-2xl font-bold text-anthracite">
                    {milestone.year}
                  </span>
                </div>

                {/* Timeline Dot */}
                <div className="absolute -left-[7px] top-8 w-3 h-3 bg-gold rounded-full border-4 border-anthracite" />

                {/* Content */}
                <div className="luxury-card p-6 space-y-3">
                  <h3 className="font-playfair text-2xl font-semibold text-pearl flex items-center space-x-2">
                    <Calendar className="w-5 h-5 text-gold" />
                    <span>{milestone.title}</span>
                  </h3>
                  <p className="text-pearl/70 font-inter leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 border-t border-charcoal">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerChildren}
          className="max-w-7xl mx-auto space-y-12"
        >
          <motion.div variants={fadeInUp} className="text-center space-y-4">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-pearl">
              Ils Nous Font <span className="text-gold">Confiance</span>
            </h2>
            <p className="max-w-2xl mx-auto text-pearl/70 font-inter text-lg">
              Découvrez les témoignages de nos clients satisfaits
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="luxury-card p-8 space-y-6"
              >
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-pearl/80 font-inter leading-relaxed italic">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-charcoal space-y-1">
                  <p className="font-playfair text-lg font-semibold text-pearl">
                    {testimonial.name}
                  </p>
                  <p className="text-gold text-sm font-raleway uppercase tracking-wide">
                    {testimonial.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Join Team Section */}
      <section className="py-20 px-6 border-t border-charcoal">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="luxury-card p-8 md:p-12 text-center space-y-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gold/10 rounded-2xl">
              <Users className="w-8 h-8 text-gold" />
            </div>

            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-pearl">
              Rejoignez Notre Équipe
            </h2>

            <p className="text-lg text-pearl/70 font-inter leading-relaxed">
              Vous partagez notre passion pour la qualité et le service client ?
              ELYÔ recrute des talents motivés pour rejoindre une équipe dynamique et innovante.
            </p>

            <div className="grid md:grid-cols-3 gap-6 pt-6">
              <div className="space-y-3">
                <CheckCircle className="w-8 h-8 text-gold mx-auto" />
                <h4 className="font-playfair text-lg font-semibold text-pearl">
                  Environnement Stimulant
                </h4>
                <p className="text-sm text-pearl/60 font-inter">
                  Évoluez dans un cadre professionnel de qualité
                </p>
              </div>

              <div className="space-y-3">
                <CheckCircle className="w-8 h-8 text-gold mx-auto" />
                <h4 className="font-playfair text-lg font-semibold text-pearl">
                  Formation Continue
                </h4>
                <p className="text-sm text-pearl/60 font-inter">
                  Développez vos compétences avec nos programmes
                </p>
              </div>

              <div className="space-y-3">
                <CheckCircle className="w-8 h-8 text-gold mx-auto" />
                <h4 className="font-playfair text-lg font-semibold text-pearl">
                  Opportunités de Carrière
                </h4>
                <p className="text-sm text-pearl/60 font-inter">
                  Construisez votre avenir avec une entreprise en croissance
                </p>
              </div>
            </div>

            <a
              href="mailto:elyoconciergerie@outlook.fr?subject=Candidature%20spontanée"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gold text-anthracite rounded-full font-raleway font-semibold tracking-wide hover:bg-gold-light transition-all hover:shadow-[0_0_30px_rgba(201,169,97,0.4)]"
            >
              <span>Postuler Maintenant</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 border-t border-charcoal">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center space-y-8"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-pearl">
            Prêt à Vivre une Expérience
            <br />
            <span className="text-gold">Exceptionnelle ?</span>
          </h2>
          <p className="text-xl text-pearl/70 font-inter">
            Contactez notre équipe dès aujourd&apos;hui pour découvrir comment ELYÔ peut transformer votre quotidien.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gold text-anthracite rounded-full font-raleway font-semibold tracking-wide hover:bg-gold-light transition-all hover:shadow-[0_0_30px_rgba(201,169,97,0.4)]"
            >
              <span>Prendre Contact</span>
              <Mail className="w-5 h-5" />
            </Link>
            <a
              href="tel:+33123456789"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-transparent border border-gold/30 text-gold rounded-full font-raleway font-semibold tracking-wide hover:border-gold hover:bg-gold/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              <span>Appeler Maintenant</span>
            </a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-charcoal py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-gold-light to-gold-dark rounded-lg flex items-center justify-center">
                  <span className="text-anthracite font-playfair font-bold text-sm">E</span>
                </div>
                <span className="font-playfair text-xl text-pearl font-semibold">ELYÔ Conciergerie</span>
              </div>
              <p className="text-pearl/50 text-sm font-inter">
                Votre conciergerie privée dédiée à simplifier votre quotidien avec des services de qualité.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="font-raleway text-gold uppercase tracking-wide text-sm font-semibold">
                Navigation
              </h4>
              <div className="space-y-2">
                <Link href="/" className="block text-pearl/60 hover:text-gold transition-colors text-sm font-inter">
                  Accueil
                </Link>
                <Link href="/equipe" className="block text-pearl/60 hover:text-gold transition-colors text-sm font-inter">
                  Notre Équipe
                </Link>
                <Link href="/services" className="block text-pearl/60 hover:text-gold transition-colors text-sm font-inter">
                  Services
                </Link>
                <Link href="/contact" className="block text-pearl/60 hover:text-gold transition-colors text-sm font-inter">
                  Contact
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="font-raleway text-gold uppercase tracking-wide text-sm font-semibold">
                Contact
              </h4>
              <div className="space-y-3">
                <a
                  href="mailto:elyoconciergerie@outlook.fr"
                  className="flex items-center space-x-2 text-pearl/60 hover:text-gold transition-colors text-sm"
                >
                  <Mail className="w-4 h-4" />
                  <span className="font-inter">elyoconciergerie@outlook.fr</span>
                </a>
                <a
                  href="tel:+33123456789"
                  className="flex items-center space-x-2 text-pearl/60 hover:text-gold transition-colors text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span className="font-inter">+33 1 23 45 67 89</span>
                </a>
                <div className="flex items-start space-x-2 text-pearl/60 text-sm">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span className="font-inter">75008 Paris, France</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-charcoal pt-8">
            <p className="text-pearl/50 text-sm font-inter text-center">
              © {new Date().getFullYear()} ELYÔ Conciergerie. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
