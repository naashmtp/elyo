/**
 * ELYÔ Conciergerie - Type Definitions
 */

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  expertise: string[];
  email?: string;
  linkedin?: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
  features?: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}
