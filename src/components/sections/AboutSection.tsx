import { useState, lazy, Suspense } from "react";
import { FileText, Award, Megaphone } from 'lucide-react';
import { Link } from 'react-router-dom';

// Lazy load particles for better performance
const ThemedParticles = lazy(() => import("@/components/ThemedParticles").then(module => ({
  default: module.ThemedParticles
})));

const skillCategories = {
  'Cyber Security': [
    'Cybersecurity Fundamentals',
    'Security Architecture',
    'OAuth/OIDC',
    'Network Security',
    'Digital Forensics'
  ],
  'Web Development': [
    'HTML5',
    'CSS3',
    'JavaScript',
    'React.js',
    'Tailwind CSS',
    'Supabase',
    'Python',
    'Vercel'
  ],
  'Cloud & DevOps': [
    'Git & GitHub',
    'CI/CD Pipelines',
    'Infrastructure as Code',
    'AWS Cloud (Practitioner level)',
    'Docker'
  ],
  'Digital Marketing': [
    'SEO',
    'Social Media Management',
    'Email Marketing',
    'Google Analytics'
  ],
  'Advocacy & Social Leadership': [
    'Civic Engagement',
    'Policy Awareness',
    'Community Mobilization',
    'Youth Advocacy',
    'Climate Action',
    'Ethical AI & Digital Rights'
  ]
};

const certifications = [
  
    {
    name: "Sustainability Mentorship Program 2025",
    issuer: "Sustainability Solutions Nepal",

    year: "Aug 2025 -  Present",
    certificateLink: "https://www.linkedin.com/feed/update/urn:li:activity:7367542595113181184/"
  },{
    name: "Internet Governance",
    issuer: "Internet Society ",

    year: "Aug 2025 ",
    certificateLink: "https://certificates.isoc.org/1c2fa81f-c045-43a0-b67f-f2967796fbf7#acc.3JfbBoUL"
  },

  {
    name: "Traning Of Trainers (ToT) - Climate Justice",
    issuer: "Power Shift Nepal",
    year: "July 2025",
    certificateLink: "https://www.linkedin.com/in/dhirendrasinghdhami/details/certifications/1753701613080/single-media-viewer/?profileId=ACoAAEVZbWQBEx6E3nH2U3a7L_HTQb__PZHy0rQ"
  },
  {
    name: "Introducing Generative AI with AWS",
    issuer: "Udacity",
    year: "2025",
    certificateLink: "https://www.udacity.com/certificate/e/15ec95fe-48d9-11f0-a9d2-875efbc54a76"
  },
  {
    name: "AWS Educate Machine Learning Foundations",
    issuer: "Amazon Web Services",
    year: "2025",
    certificateLink: "https://www.credly.com/badges/028b9181-dbc3-444b-a478-4c90639811f8/public_url"
  },
  {
    name: "असल नागरिक बनौं – Civic Leadership Training (Part 5)",
    issuer: "Ganeshman Singh Foundation",
    year: "2025",
    certificateLink: "https://www.linkedin.com/feed/update/urn:li:activity:7341260946419417088/"
  },
  
  {
    name: "Digital Security Training Asia Pacific",
    issuer: "Digital Rights Nepal (DRN)",
    year: "2024",
    certificateLink: "https://www.linkedin.com/in/dhirendrasinghdhami/details/certifications/1734524799902/single-media-viewer/?profileId=ACoAAEVZbWQBEx6E3nH2U3a7L_HTQb__PZHy0rQ"
  },
  {
    name: "AWS Cloud Essentials",
    issuer: "Amazon Web Services",
    year: "2025",
    certificateLink: "https://www.credly.com/badges/2a76a90c-8cb9-4c9b-8dbc-8bc60c980492/linked_in_profile"
  },
  {
    name: "Google UX Design Professional Certificate",
    issuer: "Google",
    year: "2024",
    certificateLink: "https://www.coursera.org/account/accomplishments/specialization/DYZCKXPPE7CW"
  },
  {
    name: "Google Digital Marketing & E-Commerce Professional Certificate",
    issuer: "Google",
    year: "2024",
    certificateLink: "https://www.coursera.org/account/accomplishments/specialization/ZXQWFHLPSQQ4"
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    year: "2024",
    certificateLink: "https://www.coursera.org/account/accomplishments/specialization/IVM70IZXSS6H"
  }
];

const CertificationList = () => {
  const [showAll, setShowAll] = useState(false);

  const toggleShow = () => {
    setShowAll(prev => !prev);
  };

  const displayedCerts = showAll ? certifications : certifications.slice(0, 5);

  return (
    <>
      <div className="space-y-4">
        {displayedCerts.map(cert => (
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

      {/* <div className="flex flex-col items-center mt-6 space-y-3">
        <button
          onClick={toggleShow}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-blue-1450/40 text-blue-300 hover:bg-blue-600 transition-colors"
          aria-label={showAll ? "Show Less Certifications" : "Show More Certifications"}
        >
          {showAll ? 'Show Less' : 'Show More'}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-5 w-5 transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={0}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {!showAll && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-blue-400/70 backdrop-blur-sm bg-slate-800/30 rounded-full p-1 animate-bounce cursor-pointer select-none"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        )}
      </div> */}
      <div className="flex items-center mt-6 space-x-2 justify-center">
        <button
          onClick={toggleShow}
          className="text-blue-500 font-medium focus:outline-none"
          aria-label={showAll ? "Show Less Certifications" : "Show More Certifications"}
        >
          {showAll ? 'Show Less' : 'Show More'}
        </button>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={toggleShow}
          className={`h-6 w-6 text-blue-500 cursor-pointer transition-transform duration-300 ${showAll ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>

    </>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding opacity-0 relative">
      <Suspense fallback={<div className="absolute inset-0" />}>
        <ThemedParticles theme="cybersecurity" />
      </Suspense>
      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* About Me */}
            <div>
              <h2 className="section-title">About Me</h2>
              <div className="card backdrop-blur-sm bg-slate-800/30 p-6">
                  <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
                <p className="text-gray-300 leading-relaxed">
                    I'm passionate about creating secure digital solutions and working on projects that make a positive impact. My interests span cybersecurity, web development, ethical AI, and sustainable technology. I enjoy building secure applications, exploring new technologies, and contributing to digital innovation. When I'm not coding, I advocate for digital rights and community development initiatives.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="mr-2 text-blue-400" size={24} />
                Skills & Technologies
              </h3>
              <div className="space-y-6">
                {Object.entries(skillCategories).map(([category, skills]) => (
                  <div
                    key={category}
                    className="card backdrop-blur-sm bg-slate-800/30 p-6"
                  >
                    <h4 className="text-lg font-semibold text-blue-400 mb-4">{category}</h4>
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 rounded-full text-sm font-medium text-blue-300 bg-slate-700/50 hover:bg-slate-600/50 transition-colors"
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
          <div className="space-y-8">
            {/* Resume */}
            <div className="flex flex-col items-start">
              <h2 className="section-title">Resume</h2>
              <Link
                to="/resume"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition-colors text-white mt-6"
              >
                <FileText className="mr-2" size={20} />
                View Full Resume
              </Link>
            </div>

            {/* Social Impact & Advocacy */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Megaphone className="mr-2 text-green-400" size={24} />
                Social Impact & Advocacy
              </h3>
              <div className="card backdrop-blur-sm bg-slate-800/30 p-6 space-y-2">
                <p className="text-gray-300">• Trained in Civic Leadership & Climate Justice </p>
                <p className="text-gray-300">• Mentee at Sustainability Mentorship Program 2025</p>
                <p className="text-gray-300">• Engaged in ethical AI and digital rights awareness</p>
                <p className="text-gray-300">• Active in volunteerism, youth advocacy, hackathons, and community events </p>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="mr-2 text-blue-400" size={24} />
                Certifications
              </h3>
              <CertificationList />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
