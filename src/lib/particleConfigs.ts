// Particle configurations with increased visibility
const getParticleDensityMultiplier = () => {
  if (typeof window === 'undefined') return 1.0;
  
  const isMobile = window.innerWidth < 768;
  const isLowEndDevice = navigator.hardwareConcurrency <= 2;
  const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (hasReducedMotion) return 0;
  if (isMobile || isLowEndDevice) return 0.5;
  return 2.0;
};

const PARTICLE_DENSITY_MULTIPLIER = getParticleDensityMultiplier();

export const particleConfigs = {
  cybersecurity: {
    background: { opacity: 0 },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "connect" }
      },
      modes: {
        connect: { distance: 150, links: { opacity: 0.4 } }
      }
    },
    particles: {
      color: { value: ["#ffffff", "#a5f3fc", "#22d3ee"] },
      links: {
        color: "#ffffff",
        distance: 120,
        enable: true,
        opacity: 0.3,
        width: 1
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" },
        random: true,
        speed: 1.2,
        straight: false
      },
      number: { value: Math.round(50 * PARTICLE_DENSITY_MULTIPLIER) },
      opacity: { value: 0.5 },
      shape: { 
        type: ["circle", "polygon"],
        options: {
          polygon: { sides: 6 },
          circle: {}
        }
      },
      size: { 
        value: { min: 2, max: 3 }
      }
    },
    detectRetina: true
  },

  advocacy: {
    background: { opacity: 0 },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" }
      },
      modes: {
        grab: { distance: 120, links: { opacity: 0.4 } }
      }
    },
    particles: {
      color: { value: ["#ffffff", "#fde68a", "#fca5a5"] },
      links: {
        color: "#ffffff",
        distance: 100,
        enable: true,
        opacity: 0.3,
        width: 1
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" },
        random: true,
        speed: 1.0,
        straight: false
      },
      number: { value: Math.round(45 * PARTICLE_DENSITY_MULTIPLIER) },
      opacity: { value: 0.5 },
      shape: { 
        type: ["circle", "star"],
        options: {
          star: { sides: 5 },
          circle: {}
        }
      },
      size: { 
        value: { min: 2, max: 3 }
      }
    },
    detectRetina: true
  },

  sustainability: {
    background: { opacity: 0 },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "bubble" }
      },
      modes: {
        bubble: { distance: 100, size: 5, duration: 1, opacity: 0.5 }
      }
    },
    particles: {
      color: { value: ["#ffffff", "#bbf7d0", "#4ade80"] },
      links: {
        color: "#ffffff",
        distance: 80,
        enable: true,
        opacity: 0.25,
        width: 1
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" },
        random: true,
        speed: 0.8,
        straight: false
      },
      number: { value: Math.round(40 * PARTICLE_DENSITY_MULTIPLIER) },
      opacity: { value: 0.4 },
      shape: { 
        type: ["circle", "polygon"],
        options: {
          polygon: { sides: 3 },
          circle: {}
        }
      },
      size: { 
        value: { min: 2, max: 3 }
      }
    },
    detectRetina: true
  },

  hero: {
    background: { opacity: 0 },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "attract" }
      },
      modes: {
        attract: { distance: 150, duration: 0.3 }
      }
    },
    particles: {
      color: { value: ["#ffffff", "#f8fafc", "#60a5fa"] },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.25,
        width: 1
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" },
        random: false,
        speed: 1.0,
        straight: false
      },
      number: { value: Math.round(45 * PARTICLE_DENSITY_MULTIPLIER) },
      opacity: { value: 0.4 },
      shape: { type: "circle" },
      size: { value: { min: 2, max: 3 } }
    },
    detectRetina: true
  }
};
