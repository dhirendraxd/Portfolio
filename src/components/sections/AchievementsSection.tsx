import { Github, Linkedin, Award, ChevronDown, ChevronUp } from "lucide-react";
import { lazy, Suspense } from "react";
const ThemedParticles = lazy(() => import("@/components/ThemedParticles").then(module => ({
  default: module.ThemedParticles
})));
import { useState } from "react";

interface Achievement {
  name: string;
  description: string;
  date: string;
  projectLink?: string;
  githubLink?: string;
  linkedinLink?: string;
  certificateLink?: string;
  skills?: string[];
}

const hackathons: Achievement[] = [
  {
    name: "100x Hackathon 2025 – Mitra Smart",
    description:
      "AI-powered government document validation and smart form-filling application.",
    projectLink: "https://100x-hackathon.vercel.app/",
    githubLink: "https://github.com/dhirendraxd/100x-Hackathon",
    linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7390619068665442304/",
    date: "2025",
    skills: ["React", "TypeScript", "Firebase", "Hugging Face MCP",],
    certificateLink: "https://www.linkedin.com/feed/update/urn:li:activity:7390619068665442304/",
  },
   {
    name: " KIST HackFest 2025",
    description:
      "Secured  3rd position , developed AI-Powered University Recommendation Web App",
    projectLink: "https://kannun-2025.vercel.app/",
    githubLink: "https://github.com/dhirendraxd/Kannun-2025.git",
    linkedinLink: "https://www.linkedin.com/feed/update/urn:li:activity:7361770720659443713/",
    date: "August 12-14th, 2025",
    skills: ["React", "TypeScript", "Google Studio API"],
    certificateLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7361770720659443713/",
  },
  {
    name: "CodeYatra Hackathon 2025",
    description:
      "Developed an innovative solution addressing real-world challenges in a competitive 36-hour hackathon.",
    projectLink: "https://devpost.com/software/devbus#updates",
    githubLink: "https://github.com/dhirendraxd/Codeyatra-Hackathon.git",
    linkedinLink: "https://www.linkedin.com/in/dhirendrasinghdhami/",
    date: "Feb 9th–11th, 2025",
    skills: ["React", "Supabase", "OpenAI API"],
    certificateLink:
      "https://www.linkedin.com/in/dhirendrasinghdhami/details/certifications/1751704105257/single-media-viewer/?profileId=ACoAAEVZbWQBEx6E3nH2U3a7L_HTQb__PZHy0rQ",
  },
  {
    name: "PublicBodies Datathon 2025",
    description:
      "Collaborated in exploring and validating public data to promote transparency and accountability.",
    date: "Jan 2025",
    githubLink: "https://github.com/dhirendraxd",
    linkedinLink: "https://www.linkedin.com/in/dhirendrasinghdhami/",
    projectLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7283845541002665984/",
      certificateLink:
      "https://www.linkedin.com/in/dhirendrasinghdhami/details/certifications/1736609503888/single-media-viewer/?profileId=ACoAAEVZbWQBEx6E3nH2U3a7L_HTQb__PZHy0rQ"
  },
  {
    name: "KEC Hack-a-LITE 2024",
    description:
      "Built a volunteer recruitment platform using HTML5, CSS, JavaScript, and deployed it on Vercel.",
    projectLink: "https://github.com/KEC-Hack-a-LITE/NewBie.git",
    githubLink: "https://github.com/dhirendraxd",
    linkedinLink: "https://www.linkedin.com/in/dhirendrasinghdhami/",
    date: "Feb 16th–17th, 2024",
    skills: ["HTML5", "CSS", "JavaScript", "Vercel"],
    certificateLink:
      "https://www.linkedin.com/in/dhirendrasinghdhami/details/certifications/1728623078271/single-media-viewer/?profileId=ACoAAEVZbWQBEx6E3nH2U3a7L_HTQb__PZHy0rQ"
  },
  {
    name: "KIST HackFest 2023",
    description:
      "Developed a web app for local farmers to sell fresh produce with verification features and easy product addition.",
    projectLink: "https://new-b-hackathon.vercel.app/",
    githubLink: "https://github.com/dhirendraxd",
    linkedinLink: "https://www.linkedin.com/in/dhirendrasinghdhami/",
    date: "Dec 6th–8th, 2023",
    skills: ["HTML", "CSS", "XAMPP"],
    certificateLink:
      "https://www.linkedin.com/in/dhirendrasinghdhami/details/certifications/1728622265048/single-media-viewer/?profileId=ACoAAEVZbWQBEx6E3nH2U3a7L_HTQb__PZHy0rQ"
  },
];

const achievements: Achievement[] = [
  {
    name: "Member - Rotaract Club of Kirtipur",
    description:
      "Active member contributing to community service projects and leadership initiatives.",
    date: "July 2025 - Present",
  },
  {
    name: "College Representative - AWS Cloud Club ",
    description:
      "Selected as a CR for AWS Cloud Club Nepal to foster cloud learning and community growth.",
    date: "March 2025 - Present",
  },
  {
    name: "Mentee - Sustainability Mentorship 2025",
    description:
      "Completed mentorship program focused on sustainable technology solutions and environmental impact by Sustainability Solutions Nepal.",
    date: "Aug 2025 - Dec 2025",
  },
  {
    name: "Ambassador (2026 Cohort) - NetMission.Asia",
    description:
      "Engaged in digital rights, governance, and youth advocacy training.",
    date: "Dec 2025 - Present",
  }
];

export const AchievementsSection = () => {
  const [showAllHackathons, setShowAllHackathons] = useState(false);
  const [showAllAchievements, setShowAllAchievements] = useState(false);

  const displayedHackathons = showAllHackathons ? hackathons : hackathons.slice(0, 2);
  const filteredAchievements = achievements.filter(
    (cert) =>
      cert.certificateLink ||
      cert.name.toLowerCase().includes("volunteer") ||
      cert.name.toLowerCase().includes("mentee") ||
      cert.name.toLowerCase().includes("representative") ||
      cert.name.toLowerCase().includes("training") ||
      cert.name.toLowerCase().includes("member")
  );
  const displayedAchievements = showAllAchievements ? filteredAchievements : filteredAchievements.slice(0, 3);

  return (
    <section id="achievements" className="section-padding relative">
      <div className="particle-container z-0">
        <Suspense fallback={null}>
          <ThemedParticles theme="advocacy" />
        </Suspense>
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-8 text-white">Projects & Achievements</h2>
        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Hackathon Projects - Timeline */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Hackathons</h3>
            <div className="flex flex-col">
              {displayedHackathons.map((project, index) => {
                // Cycle through muted colors
                const colors = [
                  { dot: 'bg-slate-600/30 border-slate-500', icon: 'text-slate-400', badge: 'bg-slate-600/20 text-slate-300', connector: 'bg-slate-500/40' },
                  { dot: 'bg-slate-700/30 border-slate-600', icon: 'text-slate-400', badge: 'bg-slate-700/20 text-slate-300', connector: 'bg-slate-600/40' },
                  { dot: 'bg-gray-600/30 border-gray-500', icon: 'text-gray-400', badge: 'bg-gray-600/20 text-gray-300', connector: 'bg-gray-500/40' },
                ];
                const colorIndex = index % 3;
                const color = colors[colorIndex];
                const isLast = index === displayedHackathons.length - 1;
                
                return (
                  <div key={project.name.trim()} className="flex gap-4">
                    {/* Timeline Separator */}
                    <div className="flex flex-col items-center">
                      {/* Timeline Dot */}
                      <div className={`w-8 h-8 rounded-full ${color.dot} border-2 flex items-center justify-center shadow-lg shrink-0`}>
                        <Award className={`w-4 h-4 ${color.icon}`} />
                      </div>
                      {/* Timeline Connector - only if not last item */}
                      {!isLast && (
                        <div className={`w-0.5 h-full min-h-[100px] ${color.connector} my-1`}></div>
                      )}
                    </div>
                    
                    {/* Timeline Content */}
                    <div className="flex-1 pb-6">
                      <div className="bg-slate-800/40 rounded-lg p-5 hover:bg-slate-800/50 transition-all duration-300 border border-slate-700/30 hover:border-slate-600/50 hover:shadow-lg">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-blue-300">
                            {project.name}
                          </h4>
                          <span className="text-xs text-gray-500 whitespace-nowrap ml-2 bg-slate-700/30 px-2 py-1 rounded">{project.date}</span>
                        </div>
                        
                        <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                          {project.description}
                        </p>
                        
                        {project.skills && project.skills.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {project.skills.map((skill) => (
                              <span key={skill} className={`text-xs px-2.5 py-1 rounded-full ${color.badge} font-medium`}>
                                {skill}
                              </span>
                            ))}
                          </div>
                        )}
                        
                        <div className="flex items-center gap-4 flex-wrap pt-2 border-t border-slate-700/30">
                          {project.projectLink && (
                            <a
                              href={project.projectLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium"
                            >
                              View Project →
                            </a>
                          )}
                          <div className="flex items-center gap-3">
                            {project.githubLink && (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="GitHub"
                                aria-label={`View GitHub repository of ${project.name}`}
                              >
                                <Github className="w-4 h-4 text-gray-400 hover:text-blue-400 transition-colors" />
                              </a>
                            )}
                            {project.linkedinLink && (
                              <a
                                href={project.linkedinLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                title="LinkedIn"
                                aria-label={`View LinkedIn profile related to ${project.name}`}
                              >
                                <Linkedin className="w-4 h-4 text-gray-400 hover:text-blue-400 transition-colors" />
                              </a>
                            )}
                            {project.certificateLink && (
                              <a
                                href={project.certificateLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center text-xs text-gray-400 hover:text-blue-400 transition-colors"
                                aria-label={`View certificate for ${project.name}`}
                              >
                                <Award className="w-3 h-3 mr-1" />
                                Certificate
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {hackathons.length > 2 && (
              <button
                onClick={() => setShowAllHackathons(!showAllHackathons)}
                className="mt-6 w-full flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors py-2 rounded-lg bg-slate-800/20 hover:bg-slate-800/30"
              >
                {showAllHackathons ? (
                  <>
                    <span className="text-sm">Show Less</span>
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span className="text-sm">See More ({hackathons.length - 2} more)</span>
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>

          {/* Highlights & Roles */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">Highlights</h3>
            <div className="space-y-3">
              {displayedAchievements.map((cert) => (
                  <div
                    key={cert.name.trim()}
                    className="p-6 bg-slate-800/40 rounded-lg break-words hover:bg-slate-800/50 transition-all duration-300 border border-slate-700/30 hover:border-slate-600/50 hover:shadow-lg min-h-[140px] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-blue-300">{cert.name.trim()}</h4>
                        <span className="text-xs text-gray-500 whitespace-nowrap ml-2 bg-slate-700/30 px-2 py-1 rounded">{cert.date}</span>
                      </div>
                      <p className="text-sm text-gray-300 leading-relaxed">{cert.description}</p>
                    </div>
                    {cert.certificateLink && (
                      <a
                        href={cert.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium pt-2 border-t border-slate-700/30"
                        aria-label={`View certificate for ${cert.name}`}
                      >
                        <Award className="w-3 h-3 mr-1" />
                        View Certificate →
                      </a>
                    )}
                  </div>
                ))}
            </div>
            {filteredAchievements.length > 3 && (
              <button
                onClick={() => setShowAllAchievements(!showAllAchievements)}
                className="mt-6 w-full flex items-center justify-center gap-2 text-blue-400 hover:text-blue-300 transition-colors py-2 glass rounded-lg"
              >
                {showAllAchievements ? (
                  <>
                    <span>Show Less</span>
                    <ChevronUp className="w-4 h-4" />
                  </>
                ) : (
                  <>
                    <span>See More ({filteredAchievements.length - 3} more)</span>
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};