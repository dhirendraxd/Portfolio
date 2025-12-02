import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  FileText,
  ChevronDown,
  Globe
} from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { lazy, Suspense } from "react";

// Lazy load particles to improve initial load time
const ThemedParticles = lazy(() => import("@/components/ThemedParticles").then(module => ({
  default: module.ThemedParticles
})));

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ size?: number | string }>;
  label: string;
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          className="p-3 bg-slate-800/50 rounded-lg transition-colors hover:bg-slate-700/50"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <div className="text-gray-400 hover:text-blue-400 transition-colors">
            <Icon size={22} />
          </div>
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>{label}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export const HeroSection = () => {
  return (
    <section id="home" className="hero-section section-padding relative overflow-hidden min-h-screen flex items-center">
      <div className="particle-container z-0">
        <Suspense fallback={<div className="absolute inset-0" />}>
          <ThemedParticles theme="hero" />
        </Suspense>
      </div>
      <div className="container mx-auto text-center relative z-10 px-4">
        <div className="space-y-6 mb-16 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold animate-fade-in leading-tight">
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent">Dhirendra Singh Dhami</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in leading-relaxed">
            Building secure digital solutions. Focused on cybersecurity, web development, and sustainable technology.
          </p>
        </div>
        <div className="flex justify-center gap-4 mb-16 animate-fade-in">
          <SocialLink href="https://github.com/dhirendraxd" icon={Github} label="GitHub" />
          <SocialLink href="https://www.linkedin.com/in/dhirendrasinghdhami/" icon={Linkedin} label="LinkedIn" />
          <SocialLink href="mailto:dhirendraxd@gmail.com" icon={Mail} label="Email" />
          <SocialLink href="/resume" icon={FileText} label="Resume" />
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-fade-in">
        <a
          href="#about"
          className="text-gray-500 hover:text-gray-300 transition-colors p-2"
          aria-label="Scroll to About section"
        >
          <ChevronDown size={24} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};
