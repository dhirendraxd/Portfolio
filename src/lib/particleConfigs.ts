// Subtle, professional particle configurations for portfolio sections  
// Responsive particle density based on device capabilities
const getParticleDensityMultiplier = () => {
  if (typeof window === 'undefined') return 1.0;
  
  const isMobile = window.innerWidth < 768;
  const isLowEndDevice = navigator.hardwareConcurrency <= 2;
  const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (hasReducedMotion) return 0;
  if (isMobile || isLowEndDevice) return 0.3; // 70% reduction for mobile/low-end
  return 1.2; // 20% increase for desktop - bringing back visual appeal
};

const PARTICLE_DENSITY_MULTIPLIER = getParticleDensityMultiplier();
export const particleConfigs = {
  // Cybersecurity & Tech particles: Minimal network nodes, professional tech theme
  cybersecurity: {
    background: { opacity: 0 },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "connect" }
      },
      modes: {
        connect: { distance: 120, links: { opacity: 0.2 } }
      }
    },
    particles: {
      // Tech-theme tiny nodes with subtle cyan accents
      color: { value: ["#ffffff", "#a5f3fc", "#22d3ee", "#f8fafc", "#f1f5f9"] },
      links: {
        color: "#ffffff",
        distance: 100,
        enable: true,
        opacity: 0.15, // Increased from 0.1
        width: 0.5
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" },
        random: true,
        speed: 0.8,
        straight: false
      },
  number: { value: Math.round(25 * PARTICLE_DENSITY_MULTIPLIER) }, // Increased base count
      opacity: { value: 0.30 },
      shape: { 
        type: ["circle", "polygon"],
        options: {
          polygon: { sides: 6 }, // Hexagon for tech/network nodes
          circle: {} // Circular particles will be smaller
        }
      },
      size: { 
        value: { min: 1.5, max: 1.5 },
        // Make only circle particles smaller
        animation: {
          enable: false
        }
      }
    },
    detectRetina: true
  },

  // Advocacy particles: Minimal community nodes, subtle social connections
  advocacy: {
    background: { opacity: 0 },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" }
      },
      modes: {
        grab: { distance: 100, links: { opacity: 0.3 } }
      }
    },
    particles: {
      // Community-theme tiny nodes with warm accents
      color: { value: ["#ffffff", "#fde68a", "#fca5a5", "#f8fafc", "#f1f5f9"] },
      links: {
        color: "#ffffff",
        distance: 80,
        enable: true,
        opacity: 0.15,
        width: 1
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" },
        random: true,
        speed: 0.6,
        straight: false
      },
  number: { value: Math.round(15 * PARTICLE_DENSITY_MULTIPLIER) }, // Increased for advocacy
      opacity: { value: 0.28 },
      shape: { 
        type: ["circle", "star"],
        options: {
          star: { sides: 5 }, // 5-pointed stars for community/advocacy
          circle: {} // Circular particles will be smaller
        }
      },
      size: { 
        value: { min: 1.5, max: 1.5 },
        // Make only circle particles smaller
        animation: {
          enable: false
        }
      }
    },
    detectRetina: true
  },

  // Sustainability particles: Minimal eco-themed, subtle organic movement
  sustainability: {
    background: { opacity: 0 },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "bubble" }
      },
      modes: {
        bubble: { distance: 80, size: 4, duration: 1, opacity: 0.4 }
      }
    },
    particles: {
      // Eco-theme tiny nodes with gentle green accents
      color: { value: ["#ffffff", "#bbf7d0", "#4ade80", "#f8fafc", "#f1f5f9"] },
      links: {
        color: "#ffffff",
        distance: 60,
        enable: true,
        opacity: 0.08,
        width: 0.5
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" },
        random: true,
        speed: 0.4,
        straight: false
      },
  number: { value: Math.round(12 * PARTICLE_DENSITY_MULTIPLIER) }, // Increased for sustainability
      opacity: { value: 0.22 },
      shape: { 
        type: ["circle", "polygon"],
        options: {
          polygon: { sides: 3 }, // Triangles for growth/sustainability
          circle: {} // Circular particles will be smaller
        }
      },
      size: { 
        value: { min: 1.5, max: 1.5 },
        // Make only circle particles smaller
        animation: {
          enable: false
        }
      }
    },
    detectRetina: true
  },

  // Hero section particles: Ultra-minimal, professional backdrop
  hero: {
    background: { opacity: 0 },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "attract" }
      },
      modes: {
        attract: { distance: 120, duration: 0.3 }
      }
    },
    particles: {
      // Ultra-minimal neutral backdrop
      color: { value: ["#ffffff", "#f8fafc", "#f1f5f9"] },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.05,
        width: 0.5
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" },
        random: false,
        speed: 0.5,
        straight: false
      },
  number: { value: Math.round(18 * PARTICLE_DENSITY_MULTIPLIER) }, // Increased for hero section
      opacity: { value: 0.20 },
      shape: { type: "circle" },
      size: { value: { min: 1.5, max: 1.5 } }
    },
    detectRetina: true
  }
};