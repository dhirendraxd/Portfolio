import { FileText, Award, Globe, Megaphone } from 'lucide-react';
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
    certificateLink: "#"
  },

  // {
  //   name: "Traning Of Trainers (ToT) - Climate Justice",
  //   description: "Completed ToT on climate justice.",
  //   date: "July 2025"

   
  {
    name: "Traning Of Trainers (ToT) - Climate Justice",
    issuer: "Power Shift Nepal",
    year: "July 2025 ",
    certificateLink: "#"
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
    name: "Sustainability Mentorship Program 2025",
    issuer: "Sustainability Solutions Nepal",
    year: "Aug 2025 -  Present",
    certificateLink: "https://www.linkedin.com/feed/update/urn:li:activity:xxxxxxxx"
  },
  {
    name: "Digital Security Training Asia Pacific",
    issuer: "Digital Rights Nepal (DRN)",
    year: "2024",
    certificateLink: "https://www.linkedin.com/feed/update/urn:li:activity:xxxxxxxx"
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

export const AboutSection = () => {
  return (
    <section id="about" className="section-padding opacity-0">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {/* About Me */}
            <div>
              <h2 className="section-title">About Me</h2>
              <div className="card backdrop-blur-sm bg-slate-800/30 p-6">
                <h3 className="text-2xl font-bold mb-4">Background</h3>
                <p className="text-gray-300 leading-relaxed">
                  I'm Dhirendra Singh Dhami — a cybersecurity enthusiast passionate about secure tech, civic leadership, and youth advocacy. I actively contribute to initiatives in sustainability, digital rights, and community development.
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
