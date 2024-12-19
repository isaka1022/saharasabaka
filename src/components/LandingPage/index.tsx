import React from 'react';
import HeroSection from './HeroSection';
import MotivationSection from './MotivationSection';
import JourneySection from './JourneySection';
import ContactSection from './ContactSection';

const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-sand-light">
      <HeroSection />
      <MotivationSection />
      <JourneySection />
      <ContactSection />
    </div>
  );
};

export default LandingPage; 
