'use client';

import { useState, FormEvent, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  serviceType?: string;
  message?: string;
}

const serviceTypes = [
  'Organisation d\'événements',
  'Services à domicile',
  'Shopping & Personal Shopper',
  'Voyages & Réservations',
  'Démarches administratives',
  'Assistance personnelle',
  'Services d\'urgence',
  'Prestations sur mesure',
  'Autre',
];

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    serviceType: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>(
    'idle'
  );

  const statusMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (submitStatus !== 'idle' && statusMessageRef.current) {
      statusMessageRef.current.focus();
    }
  }, [submitStatus]);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Le téléphone est requis';
    } else if (!/^[\d\s+()-]+$/.test(formData.phone)) {
      newErrors.phone = 'Numéro de téléphone invalide';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Veuillez sélectionner un type de service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Le message doit contenir au moins 10 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      console.log('Form submitted:', formData);

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        message: '',
      });
      setErrors({});

      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-6"
      noValidate
      aria-label="Formulaire de contact"
    >
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Nom complet <span aria-label="requis">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={`w-full bg-gray-900/50 border ${
            errors.name ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-800 focus:border-amber-500 focus:ring-amber-500/20'
          } rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 hover:border-gray-700`}
          placeholder="Jean Dupont"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-red-400 text-sm mt-1 flex items-center gap-1" role="alert">
            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email <span aria-label="requis">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className={`w-full bg-gray-900/50 border ${
            errors.email ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-800 focus:border-amber-500 focus:ring-amber-500/20'
          } rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 hover:border-gray-700`}
          placeholder="jean.dupont@example.com"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-red-400 text-sm mt-1 flex items-center gap-1" role="alert">
            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
          Téléphone <span aria-label="requis">*</span>
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          className={`w-full bg-gray-900/50 border ${
            errors.phone ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-800 focus:border-amber-500 focus:ring-amber-500/20'
          } rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 hover:border-gray-700`}
          placeholder="+33 6 12 34 56 78"
          aria-required="true"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-red-400 text-sm mt-1 flex items-center gap-1" role="alert">
            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
            {errors.phone}
          </p>
        )}
      </div>

      {/* Service Type */}
      <div>
        <label
          htmlFor="serviceType"
          className="block text-sm font-medium text-gray-300 mb-2"
        >
          Type de service <span aria-label="requis">*</span>
        </label>
        <select
          id="serviceType"
          name="serviceType"
          value={formData.serviceType}
          onChange={(e) => handleChange('serviceType', e.target.value)}
          className={`w-full bg-gray-900/50 border ${
            errors.serviceType ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-800 focus:border-amber-500 focus:ring-amber-500/20'
          } rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 transition-all duration-200`}
          aria-required="true"
          aria-invalid={!!errors.serviceType}
          aria-describedby={errors.serviceType ? "serviceType-error" : undefined}
        >
          <option value="" className="bg-gray-900">
            Sélectionnez un service
          </option>
          {serviceTypes.map((type) => (
            <option key={type} value={type} className="bg-gray-900">
              {type}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p id="serviceType-error" className="text-red-400 text-sm mt-1 flex items-center gap-1" role="alert">
            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
            {errors.serviceType}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label htmlFor="message" className="block text-sm font-medium text-gray-300">
            Message <span aria-label="requis">*</span>
          </label>
          <span
            className={`text-xs ${
              formData.message.length >= 10 ? 'text-green-400' : 'text-gray-500'
            }`}
            aria-live="polite"
            aria-label={`${formData.message.length} caractères sur 500`}
          >
            {formData.message.length} / 500
          </span>
        </div>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          maxLength={500}
          rows={5}
          className={`w-full bg-gray-900/50 border ${
            errors.message ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-800 focus:border-amber-500 focus:ring-amber-500/20'
          } rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 transition-all duration-200 resize-none`}
          placeholder="Décrivez-nous votre besoin..."
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-red-400 text-sm mt-1 flex items-center gap-1" role="alert">
            <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <motion.button
        type="submit"
        disabled={isSubmitting}
        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
        className={`w-full py-4 rounded-lg font-medium tracking-wide transition-all duration-200 flex items-center justify-center gap-2 ${
          isSubmitting
            ? 'bg-gray-700 cursor-not-allowed'
            : 'bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 shadow-lg shadow-amber-500/30'
        } text-white focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-gray-900`}
        aria-busy={isSubmitting}
        aria-label="Envoyer le message"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer le message
            <Send className="w-5 h-5" aria-hidden="true" />
          </>
        )}
      </motion.button>

      {/* Success/Error Messages */}
      {submitStatus === 'success' && (
        <motion.div
          ref={statusMessageRef}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-center gap-3"
          role="status"
          aria-live="polite"
          tabIndex={-1}
        >
          <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" aria-hidden="true" />
          <p className="text-green-400 text-sm">
            Merci ! Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
          </p>
        </motion.div>
      )}

      {submitStatus === 'error' && (
        <motion.div
          ref={statusMessageRef}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center gap-3"
          role="alert"
          aria-live="assertive"
          tabIndex={-1}
        >
          <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0" aria-hidden="true" />
          <p className="text-red-400 text-sm">
            Une erreur s&apos;est produite. Veuillez réessayer ou nous contacter directement.
          </p>
        </motion.div>
      )}
    </motion.form>
  );
}
