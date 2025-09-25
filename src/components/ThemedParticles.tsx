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

  // Intersection observer for lazy loading with larger threshold
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add small delay to prevent render blocking
          setTimeout(() => setIsVisible(true), 100);
          observer.disconnect();
        }
      },
      { threshold: 0.05, rootMargin: '100px' } // Larger margin for earlier loading
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

  // Memoize and optimize config based on device and performance preferences
  const optimizedConfig = useMemo(() => {
    const baseConfig = particleConfigs[theme];
    
    if (isReduced) {
      // Static gradient for reduced motion users
      return {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          number: { value: 0 },
          move: { ...baseConfig.particles.move, enable: false },
          opacity: { ...baseConfig.particles.opacity, animation: { enable: false } }
        }
      };
    }

    // Device-specific optimizations
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const devicePixelRatio = typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1;
    const isLowEnd = devicePixelRatio < 2 || navigator.hardwareConcurrency <= 2;
    
    if (isMobile) {
      // Mobile optimization: fewer, slower particles
      return {
        ...baseConfig,
        fpsLimit: 30, // Reduced FPS for mobile
        particles: {
          ...baseConfig.particles,
          number: { value: Math.max(2, Math.floor(baseConfig.particles.number.value * 0.3)) },
          move: {
            ...baseConfig.particles.move,
            speed: Math.max(0.3, baseConfig.particles.move.speed * 0.5)
          },
          opacity: { value: 0.15 }, // More subtle on mobile
          links: baseConfig.particles.links ? {
            ...baseConfig.particles.links,
            opacity: 0.1,
            distance: Math.floor(baseConfig.particles.links.distance * 0.7)
          } : undefined
        },
        detectRetina: false
      };
    }
    
    if (isLowEnd) {
      // Low-end desktop optimization
      return {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          number: { value: Math.floor(baseConfig.particles.number.value * 0.6) },
          move: {
            ...baseConfig.particles.move,
            speed: Math.max(0.5, baseConfig.particles.move.speed * 0.8)
          }
        },
        detectRetina: false
      };
    }

    // High-end desktop: full experience with enhanced visuals
    return {
      ...baseConfig,
      particles: {
        ...baseConfig.particles,
        number: { value: Math.floor(baseConfig.particles.number.value * 1.2) }, // 20% more particles
        opacity: { value: baseConfig.particles.opacity.value * 1.1 }, // Slightly more visible
      }
    };
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