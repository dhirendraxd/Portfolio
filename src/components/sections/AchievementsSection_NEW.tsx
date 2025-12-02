import { Award, Code2, Users, TrendingUp, ExternalLink } from "lucide-react";
import { lazy, Suspense } from "react";
const ThemedParticles = lazy(() => import("@/components/ThemedParticles").then(module => ({
  default: module.ThemedParticles
})));
import { useState } from "react";

interface Item {
  category: string;
  title: string;
  organization: string;
  date: string;
  description?: string;
  link?: string;
  tags?: string[];
}

const professionalJourney: Item[] = [
  // Work & Professional
  {
    category: "Work",
    title: "SEO Specialist",
    organization: "CtrlBits",
    date: "May 2025 – Present",
    description: "Leading SEO strategy and implementation to improve organic search performance",
    tags: ["SEO", "Analytics", "Content Strategy"]
  },

  // Hackathons & Technical Achievements
  {
    category: "Hackathon",
    title: "3rd Place - AI University Recommendation App",
    organization: "KIST HackFest 2025",
    date: "August 2025",
    link: "https://kannun-2025.vercel.app/",
    tags: ["React", "TypeScript", "AI"]
  },
  {
    category: "Hackathon",
    title: "DevBus - AI Job Readiness Tool",
    organization: "CodeYatra 2025",
    date: "February 2025",
    link: "https://devpost.com/software/devbus#updates",
    tags: ["React", "OpenAI API", "Web Development"]
  },
  {
    category: "Hackathon",
    title: "Volunteer Management Platform",
    organization: "KEC Hack-a-LITE 2024",
    date: "February 2024",
    tags: ["JavaScript", "HTML/CSS", "Vercel"]
  },

  // Leadership & Community
  {
    category: "Leadership",
    title: "College Representative",
    organization: "AWS Cloud Club Nepal",
    date: "March 2025 – Present",
    description: "Promoting cloud technology awareness and organizing workshops"
  },
  {
    category: "Leadership",
    title: "General Member",
    organization: "Rotaract Club of Kirtipur",
    date: "July 2025 – Present",
    description: "Contributing to community service projects and leadership initiatives"
  },
  {
    category: "Leadership",
    title: "Mentee",
    organization: "Sustainability Mentorship Program",
    date: "August 2025 – Present",
    description: "Focused on climate action and sustainable development"
  },

  // Learning & Certifications  
  {
    category: "Learning",
    title: "Aspire Leadership Program",
    organization: "Aspire Institute",
    date: "August – October 2025",
    description: "Intensive leadership development program"
  },
  {
    category: "Learning",
    title: "Internet Governance",
    organization: "Internet Society",
    date: "August 2025",
    link: "https://certificates.isoc.org/1c2fa81f-c045-43a0-b67f-f2967796fbf7#acc.3JfbBoUL",
    tags: ["Policy", "Digital Rights"]
  },
  {
    category: "Learning",
    title: "Civic Leadership Training (Part 5)",
    organization: "Ganeshman Singh Foundation",
    date: "June 2025",
    description: "Ethics, democracy, development, and communication"
  },
  {
    category: "Learning",
    title: "Training of Trainers - Climate Justice",
    organization: "Power Shift Nepal",
    date: "July 2025",
    tags: ["Climate Action", "Advocacy"]
  }
];

const categoryConfig = {
  Work: { color: "bg-green-500/10 text-green-400 border-green-500/20", icon: TrendingUp },
  Hackathon: { color: "bg-blue-500/10 text-blue-400 border-blue-500/20", icon: Code2 },
  Leadership: { color: "bg-purple-500/10 text-purple-400 border-purple-500/20", icon: Users },
  Learning: { color: "bg-orange-500/10 text-orange-400 border-orange-500/20", icon: Award },
};

export const AchievementsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", "Work", "Hackathon", "Leadership", "Learning"];
  
  const filteredItems = selectedCategory === "All" 
    ? professionalJourney
    : professionalJourney.filter(item => item.category === selectedCategory);

  const displayedItems = showAll ? filteredItems : filteredItems.slice(0, 6);

  return (
    <section id="achievements" className="section-padding section-full relative">
      <Suspense fallback={null}>
        <ThemedParticles theme="advocacy" />
      </Suspense>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Professional Journey
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            From hackathons to SEO strategy, community leadership to continuous learning —  
            here's what keeps me growing.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-slate-800/40 text-gray-300 hover:bg-slate-700/50 border border-slate-700/50 hover:shadow-lg hover:shadow-blue-500/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Timeline Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-5">
            {displayedItems.map((item, index) => {
              const config = categoryConfig[item.category as keyof typeof categoryConfig];
              const Icon = config.icon;
              
              return (
                <div
                  key={index}
                  className="group relative bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Category Badge */}
                  <div className="flex items-center justify-between mb-3">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border ${config.color} text-xs font-medium group-hover:shadow-lg group-hover:shadow-current/50 transition-all`}>
                      <Icon className="w-3.5 h-3.5" />
                      {item.category}
                    </div>
                    <span className="text-xs text-gray-500">{item.date}</span>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-blue-300/80 mb-3 group-hover:text-blue-300 transition-colors">{item.organization}</p>
                  
                  {item.description && (
                    <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {/* Tags */}
                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2 py-0.5 bg-slate-700/40 text-gray-400 rounded hover:bg-blue-500/20 hover:text-blue-400 transition-all duration-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Link */}
                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors group/link"
                    >
                      View Details <ExternalLink className="w-3 h-3 ml-1 group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  )}
                </div>
              );
            })}
          </div>

          {/* Show More/Less Button */}
          {filteredItems.length > 6 && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowAll(!showAll)}
                className="px-6 py-2.5 bg-slate-800/40 hover:bg-slate-700/50 border border-slate-700/50 hover:border-blue-500/50 text-white rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              >
                {showAll ? 'Show Less' : `Show All (${filteredItems.length - 6} more)`}
              </button>
            </div>
          )}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { value: "4+", label: "Hackathons", color: "text-blue-400" },
            { value: "10+", label: "Certifications", color: "text-purple-400" },
            { value: "3+", label: "Leadership Roles", color: "text-green-400" },
            { value: "5+", label: "Community Events", color: "text-orange-400" },
          ].map((stat, i) => (
            <div key={i} className="text-center group cursor-default">
              <div className={`text-3xl font-bold ${stat.color} mb-1 group-hover:scale-110 transition-transform duration-300`}>{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
