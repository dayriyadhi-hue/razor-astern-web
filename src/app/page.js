import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ConsultationCTA from '@/components/ConsultationCTA';
import Solutions from '@/components/Solutions';
import Process from '@/components/Process';
import Values from '@/components/Values';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ConsultationCTA />
        <Solutions />
        <Process />
        <Values />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
