import { Github, Linkedin } from "lucide-react";

interface Achievement {
  name: string;
  description: string;
  date: string;
  projectLink?: string;
  githubLink?: string;
  linkedinLink?: string;
}

const hackathons: Achievement[] = [
  {
    name: "CodeYatra Hackathon 2025",
    description: "Developed an innovative solution addressing real-world challenges in a competitive 36-hour hackathon.",
    projectLink: "https://devpost.com/software/devbus#updates",
    githubLink: "https://github.com/dhirendraxd/Codeyatra-Hackathon.git",
    linkedinLink: "https://www.linkedin.com/in/dhirendra-singh-dhami/",
    date: "Feb 9th–11th, 2025"
  },
  {
    name: "KEC HackFest 2024",
    description: "Built a volunteer recruitment platform using HTML5, CSS, JavaScript, and deployed it on Vercel.",
    projectLink: "https://github.com/KEC-Hack-a-LITE/NewBie.git",
    githubLink: "https://github.com/dhirendraxd",
    linkedinLink: "https://www.linkedin.com/in/dhirendrasinghdhami/",
    date: "Feb 16th–17th, 2024"
  },
  {
    name: "KIST HackFest 2023",
    description: "Developed a web app for local farmers to sell fresh produce with verification features and easy product addition.",
    projectLink: "https://new-b-hackathon.vercel.app/",
    githubLink: "https://github.com/dhirendraxd",
    linkedinLink: "https://www.linkedin.com/in/dhirendrasinghdhami/",
    date: "Dec 6th–8th, 2023"
  }
];

const achievements: Achievement[] = [
  {
    name: "AWS Cloud Club College Representative",
    description: "Selected as a CR for AWS Cloud Club Nepal to foster cloud learning and community growth.",
    date: "March 2025 - Present",
  },
  {
    name: "Volunteer - Nepal International Film Festival 2025",
    description: "Handled guest coordination and hospitality during the Nepal International Film Festival.",
    date: "March 2025",
  },
  {
    name: "Volunteer - TEDxBaneshwor 2nd Edition 2024",
    description: "Completed Google’s cybersecurity training covering networking, Linux, and incident response.",
    date: "Oct 2024",
  }
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding opacity-0">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Hackathons & Achievements</h2>
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Hackathon Projects */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-6">Hackathon Projects</h3>
            <div className="space-y-6">
              {hackathons.map((project) => (
                <div key={project.name} className="relative p-6 glass rounded-lg break-words">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-blue-300 mb-1">{project.name}</h4>
                      <span className="text-xs text-gray-400">{project.date}</span>
                      <p className="text-sm text-gray-300 mt-1">{project.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mt-4 flex-wrap">
                    {project.projectLink && (
                      <a
                        href={project.projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-white bg-blue-500 hover:bg-blue-600 px-2 py-1 rounded"
                      >
                        View Project
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub"
                      >
                        <Github className="w-5 h-5 text-white hover:text-blue-400" />
                      </a>
                    )}
                    {project.linkedinLink && (
                      <a
                        href={project.linkedinLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-5 h-5 text-white hover:text-blue-400" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Notable Achievements */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-6">Notable Achievements</h3>
            <div className="space-y-6">
              {achievements.map((cert) => (
                <div key={cert.name.trim()} className="p-6 glass rounded-lg break-words">
                  <div className="flex justify-between items-start">
                    <h4 className="font-bold text-blue-300">{cert.name.trim()}</h4>
                    <span className="text-xs text-gray-400">{cert.date}</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-1">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
