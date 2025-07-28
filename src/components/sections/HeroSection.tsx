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

interface SocialLinkProps {
  href: string;
  icon: any;
  label: string;
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          className="hover-glow p-3 bg-slate-800/50 rounded-lg transition-all duration-300 hover:bg-slate-700/50"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon size={24} />
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
    <section id="home" className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 via-transparent to-transparent pointer-events-none" />
      <div className="container mx-auto text-center relative z-10">
        <div className="space-y-6 mb-12">
          <h1 className="text-5xl md:text-7xl font-bold animate-fade-in">
            Hi, I am
            <br />
            <span className="text-blue-400 inline-block mt-2">Dhirendra</span>
          </h1>
          <h2 className="text-lg md:text-xl text-blue-300 font-medium animate-fade-in">
            Cybersecurity • Advocacy • Sustainability
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto animate-fade-in opacity-90">
            Empowering communities through secure tech, ethical AI, and sustainable innovation
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-4 mb-16">
          <SocialLink href="https://github.com/dhirendraxd" icon={Github} label="GitHub" />
          <SocialLink href="https://x.com/dhirendra_jsx" icon={Twitter} label="Twitter" />
          <SocialLink href="https://www.linkedin.com/in/dhirendrasinghdhami/" icon={Linkedin} label="LinkedIn" />
          <SocialLink href="mailto:dhirendraxd@gmail.com" icon={Mail} label="Email" />
          {/* <SocialLink href="https://dhiren.foo/" icon={Globe} label="Portfolio" /> */}
          <SocialLink href="/resume" icon={FileText} label="Resume" />
        </div>
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        <a
          href="#about"
          className="hover:text-blue-400 transition-colors duration-300 p-2"
          aria-label="Scroll to About section"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};
