import { useCallback } from "react";
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
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadBasic(engine);
    await loadPolygonShape(engine);
    await loadStarShape(engine);
  }, []);

  const config = particleConfigs[theme];

  return (
    <Particles
      id={`particles-${theme}`}
      init={particlesInit}
      // @ts-expect-error - Particle config compatibility
      options={config}
      className={`absolute inset-0 pointer-events-none ${className}`}
    />
  );
};