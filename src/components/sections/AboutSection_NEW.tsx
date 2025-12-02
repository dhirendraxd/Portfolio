import { lazy, Suspense } from "react";
import { 
  Code2, 
  Shield, 
  Cloud, 
  TrendingUp, 
  Users, 
  Heart,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Lazy load particles for better performance
const ThemedParticles = lazy(() => import("@/components/ThemedParticles").then(module => ({
  default: module.ThemedParticles
})));

// Professional focus areas
const focusAreas = [
  {
    icon: TrendingUp,
    title: "SEO & Digital Marketing",
    description: "Leading SEO strategy at CtrlBits, optimizing content and technical performance for organic growth.",
    skills: ["SEO Strategy", "Google Analytics", "Content Optimization", "Technical Audits"]
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Building secure digital solutions with focus on authentication, security architecture, and digital forensics.",
    skills: ["Security Architecture", "OAuth/OIDC", "Network Security", "Digital Forensics"]
  },
  {
    icon: Code2,
    title: "Web Development",
    description: "Creating fast, accessible web applications with modern frameworks and best practices.",
    skills: ["React.js", "TypeScript", "Tailwind CSS", "Python"]
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS Cloud practitioner with experience in CI/CD, infrastructure automation, and deployment.",
    skills: ["AWS (EC2, S3)", "CI/CD Pipelines", "Docker", "Git & GitHub"]
  },
  {
    icon: Users,
    title: "Civic Leadership",
    description: "AWS Cloud Club CR, Rotaract member, and active in community mobilization and youth advocacy.",
    skills: ["Public Speaking", "Community Building", "Event Management", "Leadership"]
  },
  {
    icon: Heart,
    title: "Advocacy & Impact",
    description: "Climate justice, digital rights, and ethical AI advocate. Mentee in Sustainability Mentorship Program.",
    skills: ["Climate Action", "Digital Rights", "Ethical AI", "Policy Awareness"]
  }
];

// Recent work highlights
const highlights = [
  {
    type: "Work",
    title: "SEO Specialist at CtrlBits",
    period: "May 2025 – Present",
    description: "Leading SEO strategy and implementation to improve organic search performance.",
    link: null
  },
  {
    type: "Achievement",
    title: "3rd Place - KIST HackFest 2025",
    period: "August 2025",
    description: "AI-Powered University Recommendation Web App",
    link: "https://kannun-2025.vercel.app/"
  },
  {
    type: "Community",
    title: "AWS Cloud Club - College Representative",
    period: "March 2025 – Present",
    description: "Promoting cloud technology awareness and organizing workshops.",
    link: null
  },
  {
    type: "Learning",
    title: "Aspire Leadership Program",
    period: "August 2025 - October 2025",
    description: "Selected for intensive leadership development program.",
    link: null
  }
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding section-full relative bg-slate-900/50">
      <Suspense fallback={<div className="absolute inset-0" />}>
        <ThemedParticles theme="cybersecurity" />
      </Suspense>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3 md:mb-4">
            What I Do
          </h2>
          <p className="text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-2">
            SEO Specialist, Cybersecurity Enthusiast, and Community Advocate —  
            Building secure digital solutions while driving positive social impact.
          </p>
        </div>

        {/* Focus Areas Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
          {focusAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {area.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                      {area.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {area.skills.slice(0, 3).map((skill, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-1 bg-slate-700/50 text-gray-300 rounded hover:bg-slate-700 hover:text-blue-400 transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                      {area.skills.length > 3 && (
                        <span className="text-xs px-2 py-1 text-gray-500">
                          +{area.skills.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Highlights */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Recent Highlights
          </h3>
          
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-5 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-medium text-blue-400 uppercase tracking-wide group-hover:text-blue-300 transition-colors">
                    {item.type}
                  </span>
                  <span className="text-xs text-gray-500">{item.period}</span>
                </div>
                <h4 className="text-white font-semibold mb-2 group-hover:text-blue-300 transition-colors">{item.title}</h4>
                <p className="text-sm text-gray-400 mb-3">{item.description}</p>
                {item.link && (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors group/link"
                  >
                    View Project <ExternalLink className="w-3 h-3 ml-1 group-hover/link:translate-x-0.5 transition-transform" />
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-8 text-center hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
            <h3 className="text-2xl font-bold text-white mb-3">
              Interested in Working Together?
            </h3>
            <p className="text-gray-300 mb-6 max-w-lg mx-auto">
              I'm open to collaborations in SEO, cybersecurity, web development, and civic tech projects.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link
                to="/resume"
                className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/50 hover:-translate-y-1"
              >
                View Resume <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#contact"
                className="inline-flex items-center px-6 py-3 border border-slate-600 hover:border-blue-500 text-white font-medium rounded-lg transition-all duration-300 hover:bg-slate-800/50"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
