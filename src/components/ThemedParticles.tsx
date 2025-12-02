import { useCallback, useMemo, useRef, useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";
import { loadPolygonShape } from "@tsparticles/shape-polygon";
import { loadStarShape } from "@tsparticles/shape-star";
import type { Engine } from "@tsparticles/engine";
import { particleConfigs } from "@/lib/particleConfigs";
import { getDeviceCapabilities, getOptimalParticleConfig } from "@/lib/deviceCapabilities";

interface ThemedParticlesProps {
  theme: 'cybersecurity' | 'advocacy' | 'sustainability' | 'hero';
  className?: string;
}

export const ThemedParticles = ({ theme, className = "" }: ThemedParticlesProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isReduced, setIsReduced] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReduced(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setIsReduced(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Monitor screen size changes for responsive particles
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile(); // Initial check
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection observer for lazy loading with larger threshold
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add small delay to prevent render blocking
          setTimeout(() => setIsVisible(true), 50);
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: '200px' } // Load earlier with no threshold requirement
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
    const capabilities = getDeviceCapabilities();
    
    if (capabilities.hasReducedMotion) {
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

    // Get optimal particle count based on device
    const optimalCount = getOptimalParticleConfig(baseConfig.particles.number.value, capabilities);
    
    if (capabilities.isMobile) {
      // Mobile optimization: fewer, slower particles, more subtle
      return {
        ...baseConfig,
        fpsLimit: 30,
        particles: {
          ...baseConfig.particles,
          number: { value: optimalCount },
          move: {
            ...baseConfig.particles.move,
            speed: Math.max(0.3, baseConfig.particles.move.speed * 0.5)
          },
          opacity: { value: 0.15 },
          links: baseConfig.particles.links ? {
            ...baseConfig.particles.links,
            opacity: 0.08,
            distance: Math.floor(baseConfig.particles.links.distance * 0.7)
          } : undefined
        },
        detectRetina: false
      };
    }
    
    if (capabilities.isTablet || capabilities.isLowEnd) {
      // Tablet/low-end optimization
      return {
        ...baseConfig,
        fpsLimit: 45,
        particles: {
          ...baseConfig.particles,
          number: { value: optimalCount },
          move: {
            ...baseConfig.particles.move,
            speed: Math.max(0.5, baseConfig.particles.move.speed * 0.7)
          },
          opacity: { value: baseConfig.particles.opacity.value * 0.8 },
        },
        detectRetina: false
      };
    }

    if (capabilities.isHighEnd) {
      // High-end desktop: enhanced experience
      return {
        ...baseConfig,
        particles: {
          ...baseConfig.particles,
          number: { value: optimalCount },
          opacity: { value: baseConfig.particles.opacity.value * 1.2 },
          links: baseConfig.particles.links ? {
            ...baseConfig.particles.links,
            opacity: baseConfig.particles.links.opacity * 1.3
          } : undefined
        }
      };
    }

    // Standard desktop: use configured values with optimal count
    return {
      ...baseConfig,
      particles: {
        ...baseConfig.particles,
        number: { value: optimalCount }
      }
    };
  }, [theme]);

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