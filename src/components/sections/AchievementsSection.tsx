import { Github, Linkedin, Award } from "lucide-react";
import { ThemedParticles } from "@/components/ThemedParticles";

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
    date: "August  2025",
    skills: ["React", "Supabase", "OpenAI API"],
    certificateLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7361770720659443713/",
  },
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

// const achievements: Achievement[] = [

//   {
//     name: "AWS Cloud Club College Representative",
//     description:
//       "Selected as a CR for AWS Cloud Club Nepal to foster cloud learning and community growth.",
//     date: "March 2025 - Present",
//   },
//   {
//     name: "Training Of Trainers (ToT) - Climate Justice", // typo fixed here
//     description: "Completed ToT on climate justice .",
//     date: "July 2025",
//   },
//   {
//     name: "Civic Leadership Training (Part 5)",
//     description:
//       "Completed a 10-day intensive training focused on ethics, democracy, development, and communication.",
//     date: "Jun 2025",
//     certificateLink:
//       "https://www.linkedin.com/feed/update/urn:li:activity:7341260946419417088/",
//   },
//   {
//     name: "AWS Cloud Essentials",
//     description:
//       "Completed AWS foundational cloud certification to deepen cloud expertise.",
//     date: "July 2025 - presnet "
//   },
//   {
//     name: "Volunteer - Nepal International Film Festival 2025",
//     description:
//       "Handled guest coordination and hospitality during the Nepal International Film Festival.",
//     date: "March 2025",
//   },
//   {
//     name: "Volunteer - TEDxBaneshwor 2nd Edition 2024",
//     description:
//       " Assisted in logistics and guest experience for the independently organized TEDx event.",
//     date: "Oct 2024",
//   },
// ];
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
    name: "Training Of Trainers (ToT) - Climate Justice",
    description: "Completed ToT on climate justice.",
    date: "July 2025",
  },
  {
    name: "Civic Leadership Training (Part 5)",
    description:
      "Completed a 10-day intensive training focused on ethics, democracy, development, and communication.",
    date: "Jun 2025",
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
    date: "Oct 2024",
  }
];

export const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding relative">
      <ThemedParticles theme="advocacy" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title">Hackathons & Achievements</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Hackathon Projects */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-6">Hackathon Projects</h3>
            <div className="space-y-6">
              {hackathons.map((project) => (
                <div
                  key={project.name.trim()}
                  className="relative p-6 glass rounded-lg break-words"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-bold text-blue-300 mb-1">
                        {project.name}
                      </h4>
                      <span className="text-xs text-gray-400">{project.date}</span>
                      <p className="text-sm text-gray-300 mt-1">
                        {project.description}
                      </p>
                      {project.skills && project.skills.length > 0 && (
                        <p className="mt-2 text-xs text-blue-400 font-mono">
                          Skills: {project.skills.join(", ")}
                        </p>
                      )}
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
                        aria-label={`View GitHub repository of ${project.name}`}
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
                        aria-label={`View LinkedIn profile related to ${project.name}`}
                      >
                        <Linkedin className="w-5 h-5 text-white hover:text-blue-400" />
                      </a>
                    )}
                    {project.certificateLink && (
                      <a
                        href={project.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs text-blue-400 hover:underline"
                        aria-label={`View certificate for ${project.name}`}
                      >
                        <Award className="w-4 h-4 mr-1" />
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights & Roles */}
          <div className="card">
            <h3 className="text-2xl font-bold mb-6">Highlights & Roles</h3>
            <div className="space-y-6">
              {achievements
                .filter(
                  (cert) =>
                    cert.certificateLink ||
                    cert.name.toLowerCase().includes("volunteer") ||
                    cert.name.toLowerCase().includes("representative") ||
                    cert.name.toLowerCase().includes("training") ||
                    cert.name.toLowerCase().includes("member")
                )

                .map((cert) => (
                  <div
                    key={cert.name.trim()}
                    className="p-6 glass rounded-lg break-words"
                  >
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-blue-300">{cert.name.trim()}</h4>
                      <span className="text-xs text-gray-400">{cert.date}</span>
                    </div>
                    <p className="text-sm text-gray-300 mt-1">{cert.description}</p>
                    {cert.certificateLink && (
                      <a
                        href={cert.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-2 text-xs text-blue-400 hover:underline"
                        aria-label={`View certificate for ${cert.name}`}
                      >
                        <Award className="w-4 h-4 mr-1" />
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
  );
};