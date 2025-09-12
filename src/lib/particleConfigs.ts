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
      shape: { type: ["circle", "edge"] },
      size: { value: { min: 1, max: 2 } }
    },
    detectRetina: true
  },

  // Advocacy particles: Community connections, social impact theme  
  advocacy: {
    background: { opacity: 0 },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "grab" }
      },
      modes: {
        grab: { distance: 180, links: { opacity: 0.6 } }
      }
    },
    particles: {
      color: { value: ["#22d3ee", "#06b6d4", "#0891b2", "#155e75"] },
      links: {
        color: "#22d3ee",
        distance: 120,
        enable: true,
        opacity: 0.4,
        width: 2
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" },
        random: true,
        speed: 1.8,
        straight: false
      },
      number: { value: 30 },
      opacity: { value: 0.7 },
      shape: { type: "circle" },
      size: { value: { min: 3, max: 7 } }
    },
    detectRetina: true
  },

  // Sustainability particles: Nature-inspired, organic movement
  sustainability: {
    background: { opacity: 0 },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: { enable: true, mode: "bubble" }
      },
      modes: {
        bubble: { distance: 150, size: 12, duration: 2, opacity: 0.8 }
      }
    },
    particles: {
      color: { value: ["#10b981", "#059669", "#047857", "#065f46", "#22c55e"] },
      links: {
        color: "#10b981",
        distance: 100,
        enable: true,
        opacity: 0.25,
        width: 1
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "destroy" },
        random: true,
        speed: 0.8,
        straight: false
      },
      number: { value: 25 },
      opacity: { value: 0.5 },
      shape: { type: "circle" },
      size: { value: { min: 2, max: 4 } }
    },
    detectRetina: true
  },

  // Hero section particles: Professional, subtle background
  hero: {
    background: { opacity: 0 },
    fpsLimit: 120,
    interactivity: {
      events: {
        onHover: { enable: true, mode: "attract" }
      },
      modes: {
        attract: { distance: 200, duration: 0.4 }
      }
    },
    particles: {
      color: { value: ["#3b82f6", "#60a5fa", "#22d3ee", "#10b981"] },
      links: {
        color: "#3b82f6",
        distance: 200,
        enable: true,
        opacity: 0.15,
        width: 1
      },
      move: {
        direction: "none",
        enable: true,
        outModes: { default: "out" },
        random: false,
        speed: 1,
        straight: false
      },
      number: { value: 25 },
      opacity: { value: 0.4 },
      shape: { type: "circle" },
      size: { value: { min: 1, max: 3 } }
    },
    detectRetina: true
  }
};