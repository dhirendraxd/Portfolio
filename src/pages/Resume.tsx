import { ChevronLeft, Download, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Resume = () => {
  useEffect(() => {
    // Update document title for SEO
    document.title = 'Resume - Dhirendra Singh Dhami | Application Security & Web Development';
    
    // Add meta description for this page
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 
        'Professional resume of Dhirendra Singh Dhami. Experience in application security, penetration testing, cybersecurity, web development, SEO, and digital innovation.'
      );
    }

    // Add/update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
  ogTitle.setAttribute('content', 'Resume - Dhirendra Singh Dhami | Application Security & Web Development');

    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
  ogDesc.setAttribute('content', 'Professional resume of Dhirendra Singh Dhami. Experience in application security, penetration testing, cybersecurity, web development, and SEO.');

    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (!ogUrl) {
      ogUrl = document.createElement('meta');
      ogUrl.setAttribute('property', 'og:url');
      document.head.appendChild(ogUrl);
    }
    ogUrl.setAttribute('content', 'https://dhirendrasinghdhami.com.np/resume');

    // Add/update Twitter tags
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (!twitterTitle) {
      twitterTitle = document.createElement('meta');
      twitterTitle.setAttribute('name', 'twitter:title');
      document.head.appendChild(twitterTitle);
    }
  twitterTitle.setAttribute('content', 'Resume - Dhirendra Singh Dhami | Application Security & Web Development');

    let twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (!twitterDesc) {
      twitterDesc = document.createElement('meta');
      twitterDesc.setAttribute('name', 'twitter:description');
      document.head.appendChild(twitterDesc);
    }
  twitterDesc.setAttribute('content', 'Professional resume of Dhirendra Singh Dhami. Experience in application security, penetration testing, cybersecurity, web development, and SEO.');

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
  "jobTitle": "Application Security Specialist", 
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <Link to="/" className="inline-flex items-center text-gray-400 hover:text-gray-200 transition-colors mb-8 md:mb-12 text-xs md:text-sm">
          <ChevronLeft className="mr-1.5" size={16} />
          Back
        </Link>

        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="mb-8 md:mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-3">Resume</h1>
            <p className="text-gray-400 text-sm md:text-base">SEO Specialist, Cybersecurity Enthusiast & Community Advocate</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-6">
              <button onClick={() => window.open('/Dhiren Cv.pdf', '_blank', 'noopener,noreferrer')} className="inline-flex items-center justify-center px-4 py-2 md:py-2 text-xs md:text-sm font-medium bg-blue-500/90 hover:bg-blue-500 text-white rounded transition-colors">
                <FileText className="mr-2" size={16} />
                View CV
              </button>
              <a href="/Dhiren Cv.pdf" download="Dhirendra_Singh_Dhami_Resume.pdf" className="inline-flex items-center justify-center px-4 py-2 md:py-2 text-xs md:text-sm font-medium bg-slate-800/50 hover:bg-slate-800 text-gray-300 hover:text-white rounded border border-slate-700/50 transition-colors">
                <Download className="mr-2" size={16} />
                Download
              </a>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-8">

            <section className="group">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 pb-3 border-b border-slate-700/50 group-hover:border-slate-600/50 transition-colors">Summary</h2>
              <p className="text-gray-400 leading-relaxed text-xs md:text-sm">
                Passionate about technology and community impact, with expertise in Cybersecurity,SEO and Web Development. Skilled in building user-centric digital solutions, public speaking, and visual storytelling. Actively engaged in hackathons, civic leadership, and social innovation.
              </p>
            </section>

            {/* Experience */}
            <section className="group">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 pb-3 border-b border-slate-700/50 group-hover:border-slate-600/50 transition-colors">Experience</h2>
              <div className="space-y-4 md:space-y-5">
                  <div className="bg-slate-900/30 p-3 md:p-4 rounded hover:bg-slate-900/50 transition-colors">
                    <div className="flex justify-between items-start mb-1 md:mb-2 flex-col md:flex-row gap-2">
                      <h3 className="font-semibold text-white text-xs md:text-sm">Application Security Specialist</h3>
                      <span className="text-xs text-gray-500 whitespace-nowrap">Nov 2025 – Present</span>
                    </div>
                    <p className="text-xs text-gray-400 mb-2">Shram Khata </p>
                    <ul className="space-y-1 md:space-y-1.5 text-xs text-gray-400">
                      <li>• Application security reviews and vulnerability assessments (OWASP Top 10)</li>
                      <li>• Penetration testing and triage with actionable remediation guidance</li>
                      <li>• Contributed to Secure SDLC practices and tooling (Burp Suite, OWASP ZAP)</li>
                    </ul>
                  </div>
                <div className="bg-slate-900/30 p-3 md:p-4 rounded hover:bg-slate-900/50 transition-colors">
                  <div className="flex justify-between items-start mb-1 md:mb-2 flex-col md:flex-row gap-2">
                    <h3 className="font-semibold text-white text-xs md:text-sm">SEO Specialist</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap">May 2025 – Present</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">Ctrl Bits</p>
                  <ul className="space-y-1 md:space-y-1.5 text-xs text-gray-400">
                    <li>• Leading SEO strategy and implementation for organic growth</li>
                    <li>• Conducting keyword research, content optimization, and technical SEO audits</li>
                    <li>• Collaborating with marketing and development teams</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Volunteer Experience */}
            <section className="group">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 pb-3 border-b border-slate-700/50 group-hover:border-slate-600/50 transition-colors">Volunteer Experience</h2>
              <div className="space-y-2 md:space-y-3">
                <div className="bg-slate-900/30 p-3 rounded hover:bg-slate-900/50 transition-colors">
                  <div className="flex justify-between items-start mb-1 flex-col md:flex-row gap-1">
                    <h3 className="font-semibold text-white text-xs md:text-xs">College Representative</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap">Mar 2025 – Present</span>
                  </div>
                  <p className="text-xs text-gray-400">AWS Cloud Club - Nepal</p>
                </div>
                <div className="bg-slate-900/30 p-3 rounded hover:bg-slate-900/50 transition-colors">
                  <div className="flex justify-between items-start mb-1 flex-col md:flex-row gap-1">
                    <h3 className="font-semibold text-white text-xs md:text-xs">General Member</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap">Jul 2025 – Present</span>
                  </div>
                  <p className="text-xs text-gray-400">Rotaract Club of Kirtipur</p>
                </div>
                <div className="bg-slate-900/30 p-3 rounded hover:bg-slate-900/50 transition-colors">
                  <div className="flex justify-between items-start mb-1 flex-col md:flex-row gap-1">
                    <h3 className="font-semibold text-white text-xs md:text-xs">Event Volunteer</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap">2023 – Present</span>
                  </div>
                  <p className="text-xs text-gray-400">EUFF, TEDx, NIFF, KIST HackFest</p>
                </div>
              </div>
            </section>

            <section className="group">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 pb-3 border-b border-slate-700/50 group-hover:border-slate-600/50 transition-colors">Projects</h2>
              <ul className="space-y-2 md:space-y-2.5 text-xs md:text-sm text-gray-400">
                <li className="flex gap-2">
                  <span className="text-blue-400/50 mt-0.5 flex-shrink-0">→</span>
                  <span>
                    <strong className="text-gray-300">Mitra Smart</strong> – Government document validation and smart form‑filling 
                    {" "}
                    
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400/50 mt-0.5 flex-shrink-0">→</span>
                  <span><strong className="text-gray-300">University Finder</strong> – AI web app recommending universities with React and APIs</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400/50 mt-0.5 flex-shrink-0">→</span>
                  <span><strong className="text-gray-300">DevBus</strong> – AI-powered job readiness tool with React, Supabase, OpenAI</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400/50 mt-0.5 flex-shrink-0">→</span>
                  <span><strong className="text-gray-300">Impactify</strong> – Volunteer recruitment and event stipend management platform</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400/50 mt-0.5 flex-shrink-0">→</span>
                  <span><strong className="text-gray-300">FreshMart</strong> – Marketplace for local farmers to sell fresh produce</span>
                </li>
              </ul>
            </section>

            <section className="group">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 pb-3 border-b border-slate-700/50 group-hover:border-slate-600/50 transition-colors">Hackathons</h2>
              <ul className="space-y-1.5 md:space-y-2 text-xs text-gray-400">
                <li className="flex gap-2"><span className="text-blue-400/50 flex-shrink-0">•</span> <span>100x Hackathon 2025 – Mitra Smart (Government document validation & smart form‑filling app) </span></li>
                <li className="flex gap-2"><span className="text-blue-400/50 flex-shrink-0">•</span> <span>KIST HackFest 2025 – 3rd Place, AI University Recommendation App</span></li>
                <li className="flex gap-2"><span className="text-blue-400/50 flex-shrink-0">•</span> <span>CodeYatra 2025 – AI Job Readiness Tool </span></li>
                 <li className="flex gap-2"><span className="text-blue-400/50 flex-shrink-0">•</span> <span>PublicBodies Datathon 2025 – Data validation for civic tech</span></li>
                <li className="flex gap-2"><span className="text-blue-400/50 flex-shrink-0">•</span> <span>KEC Hack-a-LITE 2024 – Volunteer Management Platform</span></li>
                <li className="flex gap-2"><span className="text-blue-400/50 flex-shrink-0">•</span> <span>KIST HackFest 2023 – Farmer Marketplace</span></li>
               
              </ul>
            </section>

            <section className="group">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 pb-3 border-b border-slate-700/50 group-hover:border-slate-600/50 transition-colors">Technical Skills</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-xs text-gray-400">
                <div>
                  <p className="text-gray-300 font-medium mb-1 md:mb-2">Languages</p>
                  <p>Python, JavaScript, Java, HTML5, CSS3</p>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-1 md:mb-2">Frontend</p>
                  <p>React.js, Tailwind CSS, TypeScript</p>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-1 md:mb-2">Backend & Cloud</p>
                  <p>AWS, Firebase, Vercel</p>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-1 md:mb-2">Security & Tools</p>
                    <p>Application Security, Penetration Testing, Burp Suite, OWASP ZAP, Kali Linux, Wireshark</p>
                </div>
              </div>
            </section>

            <section className="group">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 pb-3 border-b border-slate-700/50 group-hover:border-slate-600/50 transition-colors">Education & Certifications</h2>
              <div className="space-y-3 md:space-y-4 text-xs md:text-sm">
                <div className="bg-slate-900/30 p-3 md:p-4 rounded hover:bg-slate-900/50 transition-colors">
                  <p className="text-gray-300 font-medium">Bachelor's in Information Technology Management</p>
                  <p className="text-xs text-gray-500 mt-1">KIST College, 2023 – 2027</p>
                </div>
                <div className="bg-slate-900/30 p-3 md:p-4 rounded hover:bg-slate-900/50 transition-colors">
                  <p className="text-gray-300 font-medium">Aspire Leadership Program</p>
                  <p className="text-xs text-gray-500 mt-1">Aspire Institute, August 2025 – October 2025</p>
                </div>
                
                <div>
                  <p className="text-gray-300 font-medium mb-2">Key Certifications</p>
                  <ul className="space-y-1 md:space-y-1.5 text-xs text-gray-400">
                    <li>• Internet Governance – Internet Society</li>
                    <li>• Google Cybersecurity Professional Certificate</li>
                    <li>• AWS Cloud Essentials & Generative AI</li>
                    <li>• Google Digital Marketing & E-Commerce</li>
                    <li>• Google UI/UX Design Certificate</li>
                    <li>• Civic Leadership Training – Ganeshman Singh Foundation</li>
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
