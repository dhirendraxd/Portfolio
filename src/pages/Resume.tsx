import { ChevronLeft, Download, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Resume = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    
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

    // Ensure robots meta allows indexing (fix GSC "noindex" exclusion)
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.setAttribute('content', 'index, follow');

    // Load resume JSON-LD from static file to keep CSP strict
    const ld = document.createElement('script');
    ld.type = 'application/ld+json';
    ld.src = '/ld/resume.json';
    ld.setAttribute('data-resume-ld', 'true');
    document.head.appendChild(ld);

    // Cleanup function to reset title on unmount
    return () => {
  document.title = 'Dhirendra Singh Dhami - Portfolio & Digital Projects';
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', 
          'Hi, I\'m Dhirendra Singh Dhami. I create secure digital solutions and work on cybersecurity, web development, and sustainable tech projects. Passionate about ethical AI and digital innovation.'
        );
      }
      
      // Remove resume-specific structured data tag
      const resumeScript = document.querySelector('script[data-resume-ld]');
      if (resumeScript) resumeScript.remove();
      
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
            <p className="text-gray-400 text-sm md:text-base">Application Security • SEO • Civic Tech & Digital Rights</p>
            <div className="flex flex-col sm:flex-row gap-3 mt-4 md:mt-6">
              <button onClick={() => window.open('/Dhiren%20cv.pdf', '_blank', 'noopener,noreferrer')} className="inline-flex items-center justify-center px-4 py-2 md:py-2 text-xs md:text-sm font-medium bg-blue-500/90 hover:bg-blue-500 text-white rounded transition-colors">
                <FileText className="mr-2" size={16} />
                View CV
              </button>
              <a href="/Dhiren%20cv.pdf" download="Dhirendra_Singh_Dhami_Resume.pdf" className="inline-flex items-center justify-center px-4 py-2 md:py-2 text-xs md:text-sm font-medium bg-slate-800/50 hover:bg-slate-800 text-gray-300 hover:text-white rounded border border-slate-700/50 transition-colors">
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
                Multidisciplinary learner blending IT management, application security, SEO, web development, civic tech, photography, and public leadership. Experienced in hackathons, datathons, cloud tools, and digital rights work. Passionate about youth advocacy, climate action, and Internet governance.
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
                  <p className="text-xs text-gray-400 mb-2">Shram Khata | Remote</p>
                  <ul className="space-y-1 md:space-y-1.5 text-xs text-gray-400">
                    <li>• Application security and penetration testing for worker payment tracking platform</li>
                    <li>• Security reviews aligned to OWASP Top 10; actionable remediation and triage</li>
                    <li>• Enables secure SDLC with tooling (Burp Suite, OWASP ZAP) and threat models</li>
                  </ul>
                </div>

                <div className="bg-slate-900/30 p-3 md:p-4 rounded hover:bg-slate-900/50 transition-colors">
                  <div className="flex justify-between items-start mb-1 md:mb-2 flex-col md:flex-row gap-2">
                    <h3 className="font-semibold text-white text-xs md:text-sm">SEO Specialist</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap">May 2025 – Present</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">Ctrl Bits | Remote</p>
                  <ul className="space-y-1 md:space-y-1.5 text-xs text-gray-400">
                    <li>• Writes optimized blogs; leads content strategy and analytics</li>
                    <li>• Technical SEO audits, keyword research, and experimentation for client web apps</li>
                    <li>• Tracks performance via Search Console and analytics dashboards</li>
                  </ul>
                </div>

                <div className="bg-slate-900/30 p-3 md:p-4 rounded hover:bg-slate-900/50 transition-colors">
                  <div className="flex justify-between items-start mb-1 md:mb-2 flex-col md:flex-row gap-2">
                    <h3 className="font-semibold text-white text-xs md:text-sm">Sustainability Mentee</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap">Aug 2025 – Present</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-2">Sustainability Solutions | Kathmandu (On-site)</p>
                  <ul className="space-y-1 md:space-y-1.5 text-xs text-gray-400">
                    <li>• Structured mentorship on design thinking and sustainable business models</li>
                    <li>• Built climate-focused solutions with community impact framing</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Leadership & Community */}
            <section className="group">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 pb-3 border-b border-slate-700/50 group-hover:border-slate-600/50 transition-colors">Leadership & Community</h2>
              <div className="space-y-2 md:space-y-3">
                <div className="bg-slate-900/30 p-3 rounded hover:bg-slate-900/50 transition-colors">
                  <div className="flex justify-between items-start mb-1 flex-col md:flex-row gap-1">
                    <h3 className="font-semibold text-white text-xs md:text-xs">Ambassador (2026 Cohort)</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap">Dec 2025 – Present</span>
                  </div>
                  <p className="text-xs text-gray-400">NetMission.Asia</p>
                  <p className="text-xs text-gray-400 mt-1">Internet governance, digital rights, and community advocacy projects</p>
                </div>

                <div className="bg-slate-900/30 p-3 rounded hover:bg-slate-900/50 transition-colors">
                  <div className="flex justify-between items-start mb-1 flex-col md:flex-row gap-1">
                    <h3 className="font-semibold text-white text-xs md:text-xs">College Representative</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap">Mar 2025 – Present</span>
                  </div>
                  <p className="text-xs text-gray-400">AWS Cloud Club Nepal</p>
                  <p className="text-xs text-gray-400 mt-1">Organizes cloud sessions; promotes community-focused cloud learning</p>
                </div>

                <div className="bg-slate-900/30 p-3 rounded hover:bg-slate-900/50 transition-colors">
                  <div className="flex justify-between items-start mb-1 flex-col md:flex-row gap-1">
                    <h3 className="font-semibold text-white text-xs md:text-xs">Member</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap">Jun 2025 – Present</span>
                  </div>
                  <p className="text-xs text-gray-400">Rotaract Club of Kirtipur</p>
                  <p className="text-xs text-gray-400 mt-1">Supports civic, tech-forward, and sustainability initiatives</p>
                </div>

                

                <div className="bg-slate-900/30 p-3 rounded hover:bg-slate-900/50 transition-colors">
                  <div className="flex justify-between items-start mb-1 flex-col md:flex-row gap-1">
                    <h3 className="font-semibold text-white text-xs md:text-xs">Event Volunteer</h3>
                    <span className="text-xs text-gray-500 whitespace-nowrap">2023 – Present</span>
                  </div>
                  <p className="text-xs text-gray-400">EUFF, NIFF (hospitality), TEDxBaneshwor, KIST HackFest 2024</p>
                  <p className="text-xs text-gray-400 mt-1">Crowd management, workshop coordination, delegate support, logistics</p>
                </div>
              </div>
            </section>

            <section className="group">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 pb-3 border-b border-slate-700/50 group-hover:border-slate-600/50 transition-colors">Projects</h2>
              <ul className="space-y-2 md:space-y-2.5 text-xs md:text-sm text-gray-400">
                <li className="flex gap-2">
                  <span className="text-blue-400/50 mt-0.5 flex-shrink-0">→</span>
                  <span>
                    <strong className="text-gray-300">Mitra Smart</strong> – Government document validation and smart form‑filling (AI-powered checks and hints)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-blue-400/50 mt-0.5 flex-shrink-0">→</span>
                  <span><strong className="text-gray-300">Edu Connect Global</strong> – AI university recommendation platform (KIST HackFest 2025)</span>
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
                <li className="flex gap-2"><span className="text-blue-400/50 flex-shrink-0">•</span> <span>Mitra Smart – 100x Nepal Hackathon 2025 (AI validation + smart form-filling)</span></li>
                <li className="flex gap-2"><span className="text-blue-400/50 flex-shrink-0">•</span> <span>Edu Connect Global – KIST HackFest 2025, 3rd Place (AI university recommendation)</span></li>
                <li className="flex gap-2"><span className="text-blue-400/50 flex-shrink-0">•</span> <span>DevBus – CodeYatra 2025 (AI job assessment for SMEs)</span></li>
                <li className="flex gap-2"><span className="text-blue-400/50 flex-shrink-0">•</span> <span>PublicBodies Datathon 2025 – Data validation for civic tech</span></li>
                <li className="flex gap-2"><span className="text-blue-400/50 flex-shrink-0">•</span> <span>Volunteer Recruitment Platform – KEC Hack-a-LITE 2024</span></li>
                <li className="flex gap-2"><span className="text-blue-400/50 flex-shrink-0">•</span> <span>Local Produce Marketplace – KIST HackFest 2023</span></li>
              </ul>
            </section>

            <section className="group">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 pb-3 border-b border-slate-700/50 group-hover:border-slate-600/50 transition-colors">Technical Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-xs text-gray-400">
                <div>
                  <p className="text-gray-300 font-medium mb-1 md:mb-2">Web Development</p>
                  <p>HTML5, CSS3, JavaScript, TypeScript, React, Tailwind, Sass, Git, Vercel</p>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-1 md:mb-2">SEO & Analytics</p>
                  <p>On-page & technical SEO, Google Search Console, analytics dashboards, content audits</p>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-1 md:mb-2">Cloud & DevOps</p>
                  <p>AWS basics, deployment workflows, GitHub, CI/CD familiarity</p>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-1 md:mb-2">Cybersecurity</p>
                  <p>Application security, penetration testing, OWASP Top 10, Burp Suite, OWASP ZAP, threat models</p>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-1 md:mb-2">UI/UX & Content</p>
                  <p>Wireframing, content strategy, mobile optimization, Figma (basic)</p>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-1 md:mb-2">Media & Tools</p>
                  <p>Photography, visual storytelling, Canva, Notion, Google Workspace, Microsoft/Adobe Suite</p>
                </div>
              </div>
            </section>

            <section className="group">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 pb-3 border-b border-slate-700/50 group-hover:border-slate-600/50 transition-colors">Education & Certifications</h2>
              <div className="space-y-3 md:space-y-4 text-xs md:text-sm">
                <div className="bg-slate-900/30 p-3 md:p-4 rounded hover:bg-slate-900/50 transition-colors">
                  <p className="text-gray-300 font-medium">Bachelor of Information Technology Management</p>
                  <p className="text-xs text-gray-500 mt-1">KIST College & SS, Kathmandu | 2023 – Present</p>
                  <p className="text-xs text-gray-400 mt-1">Volunteer at KIST HackFest 2024; community-centered tech initiatives</p>
                </div>

                <div className="bg-slate-900/30 p-3 md:p-4 rounded hover:bg-slate-900/50 transition-colors">
                  <p className="text-gray-300 font-medium">Aspire Leaders Program</p>
                  <p className="text-xs text-gray-500 mt-1">Aug 2025 – Oct 2025</p>
                  <p className="text-xs text-gray-400 mt-1">Leadership development focused on reflection, empathy, and community impact</p>
                </div>

 

                <div className="bg-slate-900/30 p-3 md:p-4 rounded hover:bg-slate-900/50 transition-colors">
                  <p className="text-gray-300 font-medium">Sustainability Solutions Program (Mentee)</p>
                  <p className="text-xs text-gray-500 mt-1">Aug 2025 – Dec 2025</p>
                  <ul className="space-y-1 mt-2 text-xs text-gray-400">
                    <li>• Design thinking, ESG basics, and sustainable business models</li>
                    <li>• Structured mentorship for climate and community solutions</li>
                  </ul>
                </div>

                <div>
                  <p className="text-gray-300 font-medium mb-2">Certifications</p>
                  <ul className="space-y-1 md:space-y-1.5 text-xs text-gray-400">
                    <li>• Internet Governance – Internet Society</li>
                    <li>• AI vs. Cybercrime – Future War, Human Firewall</li>
                    <li>• Digital Rights: Understanding Your Online Freedoms</li>
                    <li>• Future of AI Governance – Blue Dot Impact</li>
                    <li>• Google Cybersecurity Professional Certificate</li>
                    <li>• AWS Knowledge: Cloud Essentials & Generative AI (Udacity/AWS)</li>
                    <li>• Google Digital Marketing & E-Commerce</li>
                    <li>• Google UX Design Certificate</li>
                    <li>• Training of Trainer on Climate Justice – Power Shift Nepal</li>
                    <li>• “असल नागरिक बनौं” Civic Leadership Training – Ganeshman Singh Foundation</li>
                    
                    <li>• UN CC:Learn Climate Change: From Learning to Action</li>
                    <li>• NFRs for SMEs – Mero Job</li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="group">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 pb-3 border-b border-slate-700/50 group-hover:border-slate-600/50 transition-colors">Training, Conferences & Events</h2>
              <ul className="space-y-1.5 md:space-y-2 text-xs text-gray-400">
                <li className="flex gap-2"><span className="text-blue-400/50 flex-shrink-0">•</span> <span>APIGA 2025</span></li>
                <li className="flex gap-2"><span className="text-blue-400/50 flex-shrink-0">•</span> <span>Asia Pacific Regional Internet Governance Forum (APrIGF)</span></li>
                <li className="flex gap-2"><span className="text-blue-400/50 flex-shrink-0">•</span> <span>Workshop on Community Contribution in Censorship Detection (OONI)</span></li>
                <li className="flex gap-2"><span className="text-blue-400/50 flex-shrink-0">•</span> <span>Training of Trainer on Climate Justice</span></li>
                <li className="flex gap-2"><span className="text-blue-400/50 flex-shrink-0">•</span> <span>“असल नागरिक बनौं” Civic Leadership Training</span></li>
                <li className="flex gap-2"><span className="text-blue-400/50 flex-shrink-0">•</span> <span>Digital Rights Training Asia Pacific</span></li>
                <li className="flex gap-2"><span className="text-blue-400/50 flex-shrink-0">•</span> <span>Public Bodies Datathon</span></li>
              </ul>
            </section>

            <section className="group">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 pb-3 border-b border-slate-700/50 group-hover:border-slate-600/50 transition-colors">Soft Skills & Languages</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 text-xs text-gray-400">
                <div>
                  <p className="text-gray-300 font-medium mb-1 md:mb-2">Soft Skills</p>
                  <p>Team leadership and collaboration; event and community coordination; strategic thinking; adaptability; public speaking and facilitation</p>
                </div>
                <div>
                  <p className="text-gray-300 font-medium mb-1 md:mb-2">Languages</p>
                  <p>English (Fluent), Hindi (Fluent), Nepali (Native)</p>
                </div>
              </div>
            </section>

            <section className="group">
              <h2 className="text-lg md:text-xl font-semibold text-white mb-3 md:mb-4 pb-3 border-b border-slate-700/50 group-hover:border-slate-600/50 transition-colors">Interests</h2>
              <p className="text-xs md:text-sm text-gray-400">Civic tech, climate communication, youth leadership, community innovation, public speaking, SEO for social impact, and visual storytelling.</p>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
