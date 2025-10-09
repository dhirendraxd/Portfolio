import { ChevronLeft, Download, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Resume = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = 'Resume - Dhirendra Singh Dhami | Cybersecurity & Web Development';
    
    // Add meta description for this page
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Professional resume of Dhirendra Singh Dhami. Experience in cybersecurity, web development, SEO, and digital innovation. Download CV and view complete work history.'
      );
    }

    // Add canonical URL
    const canonicalLink = document.querySelector('link[rel="canonical"]') || document.createElement('link');
    canonicalLink.setAttribute('rel', 'canonical');
    canonicalLink.setAttribute('href', 'https://dhirendrasinghdhami.com.np/resume');
    if (!document.querySelector('link[rel="canonical"]')) {
      document.head.appendChild(canonicalLink);
    }

    // Add structured data for resume page
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Dhirendra Singh Dhami",
      "jobTitle": "SEO Specialist & Cybersecurity Enthusiast", 
      "url": "https://dhirendrasinghdhami.com.np/resume",
      "sameAs": [
        "https://github.com/dhirendraxd",
        "https://x.com/dhirendra_jsx", 
        "https://www.linkedin.com/in/dhirendrasinghdhami/"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Bachelor of Information Management",
          "educationalLevel": "Bachelor's Degree"
        }
      ],
      "workExample": [
        {
          "@type": "CreativeWork",
          "name": "Personal Portfolio Website",
          "description": "Secure, performant portfolio built with React, TypeScript, and modern SEO practices",
          "url": "https://dhirendrasinghdhami.com.np"
        }
      ]
    };

    // Remove existing resume structured data if any
    const existingScript = document.querySelector('script[data-resume-ld]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-resume-ld', 'true');
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    // Cleanup function to reset title on unmount
    return () => {
      document.title = 'Dhirendra Singh Dhami - Portfolio & Digital Projects';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 
          'Hi, I\'m Dhirendra Singh Dhami. I create secure digital solutions and work on cybersecurity, web development, and sustainable tech projects. Passionate about ethical AI and digital innovation.'
        );
      }
      
      // Remove resume-specific structured data
      const resumeScript = document.querySelector('script[data-resume-ld]');
      if (resumeScript) {
        resumeScript.remove();
      }
      
      // Reset canonical URL
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', 'https://dhirendrasinghdhami.com.np/');
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-20">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-gray-300 hover:text-blue-400 transition-colors mb-8">
          <ChevronLeft className="mr-2" size={20} />
          Back to Portfolio
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-4xl font-bold text-white">Resume</h1>
            <div className="flex gap-4">
              <button onClick={() => window.open('/Dhiren Cv.pdf', '_blank', 'noopener,noreferrer')} className="inline-flex items-center px-4 py-2 rounded-lg glass hover:text-blue-400">
                <FileText className="mr-2" size={20} />
                View Full CV
              </button>
              <a href="/Dhiren Cv.pdf" download="Dhirendra_Singh_Dhami_Resume.pdf" className="inline-flex items-center px-4 py-2 rounded-lg glass hover:text-blue-400">
                {/* <Download className="mr-2" size={20} /> */}
                {/* Download Resume */}
              </a>
            </div>
          </div>

          <div className="space-y-8">

     
            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Summary</h2>
              <p className="text-gray-300 leading-relaxed">
                Passionate about technology and community impact, with expertise in Cybersecurity, Cloud, and DevOps. Skilled in building user-centric digital solutions, public speaking, and visual storytelling. Actively engaged in hackathons, civic leadership, and social innovation, with experience leading both tech initiatives and non-technical community events.
              </p>

            </section>

            {/* Experience */}
            <section className="card">
              {/* Work Experience */}
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Work Experience</h2>
              <div className="space-y-4 text-gray-300">

                <div>
                  <h3 className="text-xl font-semibold">SEO Specialist</h3>
                  <p className="text-gray-400">CtrlBits • May 2025 – Present</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Leading SEO strategy and implementation to improve organic search performance and visibility.</li>
                    <li>Conducting keyword research, content optimization, and technical SEO audits.</li>
                    <li>Collaborating with marketing and development teams to enhance website traffic and conversion.</li>
                  </ul>
                </div>

              <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">Volunteer Experience</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                    <h3 className="text-xl font-semibold">General Member</h3>
                    <p className="text-gray-400">Rotaract Club of Kirtipur • July 2025 – Present</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Participating in club activities and initiatives.</li>
                      <li>Contributing to community service projects and events.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">College Representative</h3>
                    <p className="text-gray-400">AWS Cloud Club - Nepal • Mar 2025 – Present</p>
                    <ul className="list-disc list-inside mt-2 space-y-1">
                      <li>Representing AWS Cloud Club at college and promoting cloud technology awareness.</li>
                      <li>Organizing cloud-focused workshops and events for student engagement.</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Volunteer </h3>
                  <p className="text-gray-400">Nepal International Film Festival (NIFF) • Mar 2024</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Assisted in coordinating guests, managing sessions, and ensuring smooth event flow.</li>
                  </ul>
                </div>

              

                <div>
                  <h3 className="text-xl font-semibold"> Volunteer</h3>
                  <p className="text-gray-400">TEDxBaneshwor 2nd Edition • Dec 2023</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Assisted in logistics and guest experience for the independently organized TEDx event.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Volunteer </h3>
                  <p className="text-gray-400">KIST HackFest 2024 • Jun 2024</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Helped set up tech infrastructure, managed registrations, and supported teams during hackathon.</li>
                  </ul>
                </div>

              </div>
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Projects</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-4">
                <li>
                  <strong>University Finder</strong> – AI web app recommending universities, built with React and  API.
                </li>
                <li>
                
                  <strong>DevBus</strong> – AI-powered tool for job readiness. Built with React, Supabase, OpenAI API.
                  
                </li>
                <li>
                  <strong>Impactify</strong> – A web app to recruit volunteers and manage stipends for events. Used in hackathon.
                </li>
                <li>
                  <strong>FreshMart</strong> – Marketplace for local farmers to sell fresh produce. Solo dev project.
                </li>
              </ul>
            </section>

            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Hackathons</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>KIST HackFest 2025 – AI-Powered University Recommendation Web App</li>
                <li>CodeYatra 2025 – AI Job Tool (DevBus)</li>
                <li>KEC Hack-a-LITE 2024 – Volunteer Management App</li>
                <li>KIST HackFest 2023 – Solo Project on Farmer Marketplace</li>
                <li>PublicBodies Datathon 2025 – Data validation for civic tech</li>
              </ul>
            </section>


            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Technical Skills</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Languages: Python, JavaScript, Java, HTML5, CSS3</li>
                <li>Frontend: React.js, Tailwind CSS, TypeScript (learning)</li>
                <li>Backend/Cloud: AWS (EC2, S3), Supabase, Vercel</li>
                <li>Cybersecurity Tools: Kali Linux, Wireshark, Metasploit</li>
                <li>Design Tools: Figma, Adobe Photoshop, Lightroom</li>
                <li>Others: GitHub, Canva, Google Analytics, Notion</li>
              </ul>
            </section>

          
            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Education & Certifications</h2>
              <div className="space-y-4 text-gray-300">
                {/*  lets put aspire leaderhip in here as well */}
                
                
                <div>
                  <h3 className="text-xl font-bold mb-2">Aspire Leadership Program </h3>
                  <p>Aspire Institute | Augutst 2025 - Present </p>
                                   <h3> 
                    
                  </h3>
                  <h3 className="text-xl font-bold mb-2">Bachelor's in Information Technology Management</h3>
                  <p>KIST College & SS | 2023 –  2027</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Certifications</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li> Internet Governance – Understanding the global policy framework</li>
                    <li>Introducing Generative AI with AWS – Exploring AI's role in tech innovation</li>
                    <li>Civic Leadership Training (Part 5) – Strengthening leadership for social impact</li>
                    <li>Google Cybersecurity Professional Certificate – Solid foundation in digital security</li>
                    <li>Google Digital Marketing & E-Commerce – Bridging marketing and technology</li>
                    <li>Google UI/UX Design Certificate – User-centered digital design expertise</li>
                    <li>AWS Cloud Essentials – Cloud fundamentals for scalable solutions</li>
                    <li>NFRS for SMEs – Financial standards knowledge for business tech integration</li>
                  </ul>

                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
