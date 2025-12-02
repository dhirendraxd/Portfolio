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
          className="group relative p-3 bg-slate-800/40 border border-slate-700/50 rounded-lg transition-all duration-300 hover:bg-slate-700/60 hover:border-slate-600/50 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <div className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">
            <Icon size={24} />
          </div>
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-medium">{label}</p>
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
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-slate-900/20 pointer-events-none z-[-1]" />
      <div className="container mx-auto text-center relative z-10 px-4">
        <div className="space-y-8 mb-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in leading-tight">
            Hi, I am
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent inline-block mt-2">Dhirendra Singh Dhami</span>
          </h1>
            <h2 className="text-base md:text-lg lg:text-xl text-blue-300 font-medium animate-fade-in tracking-wide">
              Digital Creator • Tech Enthusiast • Innovation Advocate
            </h2>
            <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in leading-relaxed">
              I create secure digital solutions and work on cybersecurity, web development, and sustainable tech projects. Passionate about ethical AI and digital innovation.
            </p>
        </div>
        <div className="flex justify-center flex-wrap gap-3 mb-16 animate-fade-in">
          <SocialLink href="https://github.com/dhirendraxd" icon={Github} label="GitHub" />
          <SocialLink href="https://x.com/dhirendra_jsx" icon={Twitter} label="Twitter" />
          <SocialLink href="https://www.linkedin.com/in/dhirendrasinghdhami/" icon={Linkedin} label="LinkedIn" />
          <SocialLink href="mailto:dhirendraxd@gmail.com" icon={Mail} label="Email" />
          {/* <SocialLink href="https://dhiren.foo/" icon={Globe} label="Portfolio" /> */}
          <SocialLink href="/resume" icon={FileText} label="Resume" />
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-fade-in">
        <a
          href="#about"
          className="group hover:text-blue-400 transition-all duration-300 p-2 flex flex-col items-center gap-1"
          aria-label="Scroll to About section"
        >
          <span className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">Scroll</span>
          <ChevronDown size={24} className="animate-bounce group-hover:text-blue-400 transition-colors" />
        </a>
      </div>
    </section>
  );
};
