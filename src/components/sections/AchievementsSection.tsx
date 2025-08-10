import { Github, Linkedin, Award, ExternalLink } from "lucide-react";

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
    name: "CodeYatra Hackathon 2025",
    description:
      "Developed an innovative solution addressing real-world challenges in a competitive 36-hour hackathon.",
    projectLink: "https://devpost.com/software/devbus#updates",
    githubLink: "https://github.com/dhirendraxd/Codeyatra-Hackathon.git",
    linkedinLink: "https://www.linkedin.com/in/dhirendra-singh-dhami/",
    date: "Feb 9th–11th, 2025",
    skills: ["React", "Supabase", "OpenAI API"],
    certificateLink:
      "https://www.udacity.com/certificate/15ec95fe-48d9-11f0-a9d2-875efbc54a76",
  },
  {
    name: "PublicBodies Datathon 2025",
    description:
      "Collaborated in exploring and validating public data to promote transparency and accountability.",
    date: "Jan 2025",
    projectLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7283845541002665984/",
    skills: ["Data Analysis", "Public Data", "Transparency"]
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
  },
  {
    name: "KIST HackFest 2023",
    description:
      "Developed a web app for local farmers to sell fresh produce with verification features and easy product addition.",
    projectLink: "https://new-b-hackathon.vercel.app/",
    githubLink: "https://github.com/dhirendraxd",
    linkedinLink: "https://www.linkedin.com/in/dhirendrasinghdhami/",
    date: "Dec 6th–8th, 2023",
    skills: ["HTML", "CSS", "XAMPP", "Web Development"],
  },
];

const achievements: Achievement[] = [
  {
    name: "General Member - Rotaract Club of Kirtipur",
    description:
      "Contributed to community service projects and participated in club activities.",
    date: "July 2025 - Present"
  },
  {
    name: "AWS Cloud Club College Representative",
    description:
      "Selected as a CR for AWS Cloud Club Nepal to foster cloud learning and community growth.",
    date: "March 2025 - Present",
  },
  {
    name: "Training Of Trainers (ToT) - Climate Justice",
    description: "Completed comprehensive training on climate justice advocacy and education.",
    date: "July 2025",
  },
  {
    name: "Civic Leadership Training (Part 5)",
    description:
      "Completed a 10-day intensive training focused on ethics, democracy, development, and communication.",
    date: "June 2025",
    certificateLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7341260946419417088/",
  },
  
  {
    name: "Volunteer - Nepal International Film Festival 2025",
    description:
      "Handled guest coordination and hospitality during the Nepal International Film Festival.",
    date: "March 2025",
  },
  {
    name: "Volunteer - TEDxBaneshwor 2nd Edition 2024",
    description:
      "Assisted in logistics and guest experience for the independently organized TEDx event.",
    date: "October 2024",
  },
];

const AchievementsSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <section id="achievements" className="max-w-7xl mx-auto">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Hackathons & Achievements
          </h2>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Hackathon Projects */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 w-2 h-8 rounded mr-3"></span>
                Hackathon Projects
              </h3>
              <div className="space-y-6">
                {hackathons.map((project, index) => (
                  <div
                    key={`hackathon-${index}`}
                    className="relative p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="font-bold text-blue-300 text-lg">
                        {project.name}
                      </h4>
                      <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded">
                        {project.date}
                      </span>
                    </div>

                    <p className="text-sm text-gray-300 mb-3 leading-relaxed">
                      {project.description}
                    </p>

                    {project.skills && project.skills.length > 0 && (
                      <div className="mb-4">
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, skillIndex) => (
                            <span
                              key={skillIndex}
                              className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full border border-blue-500/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-3 flex-wrap">
                      {project.projectLink && (
                        <a
                          href={project.projectLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs text-white bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-md transition-colors"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          View Project
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="GitHub"
                          aria-label={`View GitHub repository of ${project.name}`}
                          className="p-2 rounded-md hover:bg-white/10 transition-colors"
                        >
                          <Github className="w-4 h-4 text-gray-300 hover:text-white" />
                        </a>
                      )}
                      {project.linkedinLink && (
                        <a
                          href={project.linkedinLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="LinkedIn"
                          aria-label={`View LinkedIn profile related to ${project.name}`}
                          className="p-2 rounded-md hover:bg-white/10 transition-colors"
                        >
                          <Linkedin className="w-4 h-4 text-gray-300 hover:text-blue-400" />
                        </a>
                      )}
                      {project.certificateLink && (
                        <a
                          href={project.certificateLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-xs text-blue-400 hover:text-blue-300 transition-colors"
                          aria-label={`View certificate for ${project.name}`}
                        >
                          <Award className="w-3 h-3 mr-1" />
                          Certificate
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights & Roles */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h3 className="text-2xl font-bold mb-6 text-white flex items-center">
                <span className="bg-gradient-to-r from-green-400 to-blue-400 w-2 h-8 rounded mr-3"></span>
                Highlights & Roles
              </h3>
              <div className="space-y-6">
                {achievements.map((cert, index) => (
                  <div
                    key={`achievement-${index}`}
                    className="p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-bold text-green-300 text-base leading-tight">
                        {cert.name}
                      </h4>
                      <span className="text-xs text-gray-400 bg-gray-800/50 px-2 py-1 rounded ml-2 flex-shrink-0">
                        {cert.date}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed">
                      {cert.description}
                    </p>
                    {cert.certificateLink && (
                      <a
                        href={cert.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-3 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                        aria-label={`View certificate for ${cert.name}`}
                      >
                        <Award className="w-3 h-3 mr-1" />
                        View Certificate
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AchievementsSection;