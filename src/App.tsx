import React, { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import UsageSection from "./components/UsageSection";
import KnowledgeBaseSection from "./components/KnowledgeBaseSection";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import HeroVideo from "./components/HeroVideo";

export default function App() {
  const [activeModal, setActiveModal] = useState<{ title: string; content: string } | null>(null);
  const [showNavbar, setShowNavbar] = useState(false);

  const heroRef = useRef<HTMLElement | null>(null);

  const openWhatsApp = (sachets: number) => {
    const message = encodeURIComponent(`I want ${sachets} sachets`);
    window.open(`https://wa.me/918828293037?text=${message}`, "_blank");
  };

  const handleModalOpen = (title: string, content: string) => {
    setActiveModal({ title, content });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowNavbar(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (heroRef.current) observer.observe(heroRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-red/30">

      <HeroVideo ref={heroRef} />

      {showNavbar && <Navbar className="bg-black" />}

      <HeroSection onDiseaseClick={handleModalOpen} />
      <ProductSection openWhatsApp={openWhatsApp} />
      <UsageSection />
      <KnowledgeBaseSection onFaqClick={handleModalOpen} />
      <AboutSection />
      <ContactSection />
      <Footer />

      <Modal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        title={activeModal?.title || ""}
        content={activeModal?.content || ""}
      />

    </div>
  );
}