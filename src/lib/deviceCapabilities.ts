// Device and performance detection utilities
export const getDeviceCapabilities = () => {
  if (typeof window === 'undefined') {
    return {
      isMobile: false,
      isTablet: false,
      isDesktop: true,
      isLowEnd: false,
      hasReducedMotion: false
    };
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const pixelRatio = window.devicePixelRatio || 1;
  const cores = navigator.hardwareConcurrency || 4;
  const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Device type detection
  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const isDesktop = width >= 1024;

  // Performance estimation based on hardware
  const isLowEnd = cores <= 2 || pixelRatio < 2;
  const isHighEnd = cores >= 8 && pixelRatio >= 2 && width >= 1920;

  return {
    isMobile,
    isTablet, 
    isDesktop,
    isLowEnd,
    isHighEnd,
    hasReducedMotion,
    cores,
    pixelRatio,
    width,
    height
  };
};

export const getOptimalParticleConfig = (baseCount: number, capabilities: ReturnType<typeof getDeviceCapabilities>) => {
  if (capabilities.hasReducedMotion) return 0;
  
  if (capabilities.isMobile) {
    return Math.max(2, Math.floor(baseCount * 0.2)); // 80% reduction for mobile
  }
  
  if (capabilities.isTablet || capabilities.isLowEnd) {
    return Math.max(3, Math.floor(baseCount * 0.4)); // 60% reduction for tablets/low-end
  }
  
  if (capabilities.isHighEnd) {
    return Math.floor(baseCount * 1.5); // 50% increase for high-end desktops
  }
  
  // Standard desktop
  return Math.floor(baseCount * 1.0);
};