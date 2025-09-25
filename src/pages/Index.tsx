
import { useEffect } from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { AchievementsSection } from '../components/sections/AchievementsSection';
import { ContactSection } from '../components/sections/ContactSection';
import { DeviceInfo } from '../components/DeviceInfo';

// Lazy load performance monitor in development
if (process.env.NODE_ENV === 'development') {
  import('../lib/performance');
}

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <AchievementsSection />
      <ContactSection />
      <DeviceInfo />
    </div>
  );
};
export default Index;
