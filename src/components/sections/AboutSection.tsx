import { FileText, Award } from 'lucide-react';
import { Link } from 'react-router-dom';


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
  ]
};


const certifications = [
  {
    name: "AWS Knowledge: Cloud Essentials",
    issuer: "Amazon Web Services",
    year: "2025",
    certificateLink: "https://aws.amazon.com/certification/cloud-essentials/" // example link; replace if you have exact URL
  },
  {
    name: "Google UI/UX Design Professional Certificate",
    issuer: "Google",
    year: "2024",
    certificateLink: "https://www.coursera.org/account/accomplishments/professional-certificates/ui-ux-design" // example
  },
  {
    name: "Google Digital Marketing & E-Commerce Professional Certificate",
    issuer: "Google",
    year: "2024",
    certificateLink: "https://www.coursera.org/account/accomplishments/professional-certificates/digital-marketing-e-commerce" // example
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    year: "2024",
    certificateLink: "https://www.coursera.org/account/accomplishments/professional-certificates/cybersecurity" // example
  },
  {
    name: "Introducing Generative AI with AWS",
    issuer: "Udacity",
    year: "2025",
    credentialId: "15ec95fe-48d9-11f0-a9d2-875efbc54a76",
    certificateLink: "https://www.udacity.com/certificate/15ec95fe-48d9-11f0-a9d2-875efbc54a76"
  },
  {
    name: "असल नागरिक बनौं – Civic Leadership Training (Part 5)",
    issuer: "Ganeshman Singh Foundation",
    year: "2025",
    certificateLink: "https://ganeshmansinghfoundation.org/certificates/dhirendra"
  }
];

// const certifications = [
  
//   {
//     name: "Introducing Generative AI with AWS",
//     issuer: "Udacity",
//     year: "2025",

//   },
//   {
//     name: "असल नागरिक बनौं – Civic Leadership Training (Part 5)",
//     issuer: "Ganeshman Singh Foundation",
//     year: "2025",
//     description: "Completed 10-day civic leadership training focused on ethics, democracy, development, and effective communication."
//   },
//   {
//     name: "AWS Knowledge: Cloud Essentials",
//     issuer: "Amazon Web Services",
//     year: "2025",
//     expiration: "2028"
//   },
//   {
//     name: "Google UI/UX Design Professional Certificate",
//     issuer: "Google",
//     year: "2024"
//   },
//   {
//     name: "Google Digital Marketing & E-Commerce Professional Certificate",
//     issuer: "Google",
//     year: "2024"
//   },
//   {
//     name: "Google Cybersecurity Professional Certificate",
//     issuer: "Google",
//     year: "2024",
//     description: "Comprehensive training covering threat analysis, network security, and incident response."
//   }
  
// ];


export const AboutSection = () => {
  return (
    <section id="about" className="section-padding opacity-0">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h2 className="section-title">About Me</h2>
              <div className="card backdrop-blur-sm bg-slate-800/30">
                <h3 className="text-2xl font-bold mb-4">Background</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm Dhirendra Singh Dhami, a cybersecurity enthusiast focused on securing digital environments and driving innovative solutions. I’m also passionate about community leadership and contributing to events that foster learning and collaboration.
                </p>
              </div>
            </div>

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

          <div className="space-y-8">
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

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Award className="mr-2 text-blue-400" size={24} />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.name}
                    className="card backdrop-blur-sm bg-slate-800/30 p-6 hover:border-blue-500/50 transition-all"
                  >
                    <h4 className="font-bold text-blue-300">{cert.name}</h4>
                    <p className="text-sm text-gray-400 mt-1">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};