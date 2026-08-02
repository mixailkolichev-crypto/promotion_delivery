import { useState } from 'react';
import { CustomCursor } from './components/ui/custom-cursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { MetricsBar } from './components/MetricsBar';
import { Dashboard3D } from './components/Dashboard3D';
import { Services } from './components/Services';
import { AnalyticsSection } from './components/AnalyticsSection';
import { WhyUs } from './components/WhyUs';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { FinalCta } from './components/FinalCta';
import { Footer } from './components/Footer';
import { ConsultationModal } from './components/ConsultationModal';
import { VideoModal } from './components/VideoModal';

export default function App() {
  const [consultationOpen, setConsultationOpen] = useState(false);
  const [videoModalData, setVideoModalData] = useState<{
    isOpen: boolean;
    url: string;
    title: string;
  }>({
    isOpen: false,
    url: '',
    title: '',
  });

  const handleOpenConsultation = () => {
    setConsultationOpen(true);
  };

  const handleCloseConsultation = () => {
    setConsultationOpen(false);
  };

  const handleOpenVideo = (url: string, title: string) => {
    setVideoModalData({
      isOpen: true,
      url,
      title,
    });
  };

  const handleCloseVideo = () => {
    setVideoModalData((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-zinc-900 font-sans selection:bg-[#FFCC00] selection:text-black">
      {/* Custom Framer Motion Cursor Follower */}
      <CustomCursor />

      {/* Header / Nav */}
      <Header onOpenConsultation={handleOpenConsultation} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onOpenConsultation={handleOpenConsultation}
          onOpenVideo={handleOpenVideo}
        />

        {/* Key Metrics Bar (Dark Contrast Card) */}
        <MetricsBar />

        {/* 3D Animated Showcase (ContainerScroll withphoto_2026-08-02_21-55-08.jpg dashboard replica) */}
        <Dashboard3D />

        {/* Services (Что мы делаем) */}
        <Services onOpenConsultation={handleOpenConsultation} onOpenVideo={handleOpenVideo} />

        {/* Analytics & Graph Showcase (with Magnific infographic video embed/trigger) */}
        <AnalyticsSection
          onOpenVideo={handleOpenVideo}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Why Promotion Delivery */}
        <WhyUs />

        {/* Reviews & Cases */}
        <Testimonials />

        {/* FAQ Accordion */}
        <FaqSection />

        {/* Final CTA Form */}
        <FinalCta onOpenConsultation={handleOpenConsultation} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Consultation / Messenger Modal */}
      <ConsultationModal
        isOpen={consultationOpen}
        onClose={handleCloseConsultation}
      />

      {/* Video Media Asset Modal */}
      <VideoModal
        isOpen={videoModalData.isOpen}
        onClose={handleCloseVideo}
        title={videoModalData.title}
        videoUrl={videoModalData.url}
      />
    </div>
  );
}
