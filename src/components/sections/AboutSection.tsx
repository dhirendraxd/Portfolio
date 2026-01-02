import { lazy, Suspense } from "react";
import { Award } from "lucide-react";
import { Link } from "react-router-dom";

// Lazy load particles for better performance
const ThemedParticles = lazy(() =>
  import("@/components/ThemedParticles").then((module) => ({
    default: module.ThemedParticles,
  }))
);

const skillCategories = {
  "Cyber Security": [
    "Application Security",
    "Penetration Testing",
    "OWASP Top 10",
    "Secure SDLC",
    "Threat Modeling",
    "Vulnerability Assessment",
  ],
  "Web Development": [
    "HTML5",
    "CSS3",
    "JavaScript",
    "TypeScript",
    "React.js",
    "Tailwind CSS",
    "Sass",
    "Supabase",
    "Git & GitHub",
    "Vercel",
  ],
  "Digital Marketing": [
    "On-page & Technical SEO",
    "Google Search Console",
    "Analytics Dashboards",
    "Content Audits",
    "Photography",
    "Visual Storytelling",
    "Content Strategy",
  ],
  "Cloud & DevOps": [
    "AWS (Basics)",
    "CI/CD Workflows",
    "Deployment Pipelines",
  ],
  "Advocacy & Social Leadership": [
    "Civic Engagement",
    "Policy Awareness",
    "Community Mobilization",
    "Youth Advocacy",
    "Climate Action",
    "Ethical AI & Digital Rights",
    "Public Speaking",
  ],
};

const certifications = [
  {
    name: "Internet Governance",
    issuer: "Internet Society ",
    year: "Aug 2025 ",
    certificateLink:
      "https://certificates.isoc.org/1c2fa81f-c045-43a0-b67f-f2967796fbf7#acc.3JfbBoUL",
  },
  {
    name: "Traning Of Trainers (ToT) - Climate Justice",
    issuer: "Power Shift Nepal",
    year: "July 2025",
    certificateLink:
      "https://www.linkedin.com/in/dhirendrasinghdhami/details/certifications/1753701613080/single-media-viewer/?profileId=ACoAAEVZbWQBEx6E3nH2U3a7L_HTQb__PZHy0rQ",
  },
  {
    name: "असल नागरिक बनौं – Civic Leadership Training (Part 5)",
    issuer: "Ganeshman Singh Foundation",
    year: "2025",
    certificateLink:
      "https://www.linkedin.com/feed/update/urn:li:activity:7341260946419417088/",
  },
  {
    name: "Introducing Generative AI with AWS",
    issuer: "Udacity",
    year: "2025",
    certificateLink:
      "https://www.udacity.com/certificate/e/15ec95fe-48d9-11f0-a9d2-875efbc54a76",
  },
];

const CertificationList = () => {
  return (
    <div className="space-y-4">
      {certifications.map((cert) => (
        <div
          key={cert.name}
          className="card backdrop-blur-sm bg-slate-800/30 p-6 hover:border-blue-500/50 transition-all flex items-center justify-between"
        >
          <div>
            <h4 className="font-bold text-blue-300">{cert.name}</h4>
            <p className="text-sm text-gray-400 mt-1">
              {cert.issuer} • {cert.year}
            </p>
          </div>
          {cert.certificateLink && (
            <a
              href={cert.certificateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-400 hover:text-blue-600 transition-colors"
              title="View Certificate"
            >
              <Award className="mr-1" size={18} />
              Certificate
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding opacity-0 relative">
      <div className="particle-container z-0">
        <Suspense fallback={<div className="absolute inset-0" />}>
          <ThemedParticles theme="cybersecurity" />
        </Suspense>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              {/* Skills */}
              <div>
                <div className="space-y-4">
                  {Object.entries(skillCategories).map(([category, skills]) => (
                    <div
                      key={category}
                      className="bg-slate-800/30 p-5 rounded-lg hover:bg-slate-800/40 transition-colors"
                    >
                      <h4 className="text-sm font-semibold text-blue-400 mb-3">
                        {category}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1.5 rounded text-xs text-gray-400 bg-slate-700/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Social Impact */}
              <div className="bg-slate-800/30 p-5 rounded-lg">
                <h4 className="text-sm font-semibold text-green-400 mb-3">
                  Social Impact
                </h4>
                <div className="space-y-2 text-sm text-gray-400">
                  <p>• Civic Leadership & Climate Justice Training</p>
                  <p>• Sustainability Solution Program Mentee</p>
                  <p>• Digital Rights & Ethical AI Advocate</p>
                  <p>• Community Volunteer & Youth Leader</p>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <CertificationList />
              </div>

              {/* Resume CTA */}
              <Link
                to="/resume"
                className="block text-center px-6 py-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 transition-colors text-white"
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
