import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ServiceSection from '@/components/ServiceSection';
import FormuleSection from '@/components/FormuleSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function DemoPage() {
  return (
    <main className="min-h-screen bg-black">
      <Navbar />
      <Hero />
      <ServiceSection />
      <FormuleSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
