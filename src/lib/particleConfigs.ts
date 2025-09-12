// Subtle, professional particle configurations for portfolio sections  
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
      color: { value: ["#64748b", "#475569", "#334155"] },
      links: {
        color: "#64748b",
        distance: 100,
        enable: true,
        opacity: 0.1,
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
      number: { value: 15 },
      opacity: { value: 0.3 },
      shape: { 
        type: ["circle", "polygon"],
        options: {
          polygon: { sides: 6 } // Hexagon for tech/network nodes
        }
      },
      size: { value: { min: 1, max: 2 } }
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
      color: { value: ["#94a3b8", "#64748b", "#475569"] },
      links: {
        color: "#94a3b8",
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
      number: { value: 12 },
      opacity: { value: 0.4 },
      shape: { 
        type: ["circle", "star"],
        options: {
          star: { sides: 5 } // 5-pointed stars for community/advocacy
        }
      },
      size: { value: { min: 1, max: 3 } }
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
      color: { value: ["#6b7280", "#9ca3af", "#d1d5db"] },
      links: {
        color: "#9ca3af",
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
      number: { value: 10 },
      opacity: { value: 0.25 },
      shape: { 
        type: ["circle", "polygon"],
        options: {
          polygon: { sides: 3 } // Triangles for growth/sustainability
        }
      },
      size: { value: { min: 1, max: 2 } }
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
      color: { value: ["#e2e8f0", "#cbd5e1", "#94a3b8"] },
      links: {
        color: "#e2e8f0",
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
      number: { value: 8 },
      opacity: { value: 0.2 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 2 } }
    },
    detectRetina: true
  }
};