import { useCallback, useMemo, useRef, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadBasic } from "tsparticles-basic";
import { loadPolygonShape } from "tsparticles-shape-polygon";
import { loadStarShape } from "tsparticles-shape-star";
import type { Engine } from "tsparticles-engine";
import { particleConfigs } from "@/lib/particleConfigs";

interface ThemedParticlesProps {
  theme: 'cybersecurity' | 'advocacy' | 'sustainability' | 'hero';
  className?: string;
}

export const ThemedParticles = ({ theme, className = "" }: ThemedParticlesProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isReduced, setIsReduced] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReduced(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setIsReduced(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Intersection observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    // Defer loading until visible
    if (!isVisible) return;
    
    await loadBasic(engine);
    await loadPolygonShape(engine);
    await loadStarShape(engine);
  }, [isVisible]);

  // Memoize and optimize config based on performance preferences
  const optimizedConfig = useMemo(() => {
    const baseConfig = particleConfigs[theme];
    
    if (isReduced) {
      // Minimal particles for reduced motion
      return {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          number: { value: Math.max(3, Math.floor(baseConfig.particles.number.value * 0.2)) },
          move: { ...baseConfig.particles.move, enable: false },
          opacity: { ...baseConfig.particles.opacity, animation: { enable: false } }
        }
      };
    }

    // Performance optimization for low-end devices
    const devicePixelRatio = window.devicePixelRatio || 1;
    const isLowEnd = devicePixelRatio < 2 || navigator.hardwareConcurrency <= 2;
    
    if (isLowEnd) {
      return {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          number: { value: Math.floor(baseConfig.particles.number.value * 0.6) },
          move: {
            ...baseConfig.particles.move,
            speed: Math.max(0.5, baseConfig.particles.move.speed * 0.7)
          }
        },
        detectRetina: false
      };
    }

    return baseConfig;
  }, [theme, isReduced]);

  if (!isVisible) {
    return <div ref={containerRef} className={`absolute inset-0 ${className}`} />;
  }

  if (isReduced) {
    return (
      <div 
        ref={containerRef} 
        className={`absolute inset-0 pointer-events-none ${className}`}
        style={{
          background: `radial-gradient(circle at 30% 40%, rgba(59, 130, 246, 0.05), transparent 50%)`
        }}
      />
    );
  }

  return (
    <div ref={containerRef} className={`absolute inset-0 pointer-events-none ${className}`}>
      <Particles
        id={`particles-${theme}`}
        init={particlesInit}
        // @ts-expect-error - Particle config compatibility
        options={optimizedConfig}
      />
    </div>
  );
};