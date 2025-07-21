import { ChevronLeft, Download, FileText, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Resume = () => {
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
              <button onClick={() => window.open('/dhirencv.pdf', '_blank', 'noopener,noreferrer')} className="inline-flex items-center px-4 py-2 rounded-lg glass hover:text-blue-400">
                <FileText className="mr-2" size={20} />
                View Full CV
              </button>
              <a href="/resume.pdf" download="Dhirendra_Singh_Dhami_Resume.pdf" className="inline-flex items-center px-4 py-2 rounded-lg glass hover:text-blue-400">
                <Download className="mr-2" size={20} />
                Download Resume
              </a>
            </div>
          </div>

          <div className="space-y-8">

            {/* Summary */}
            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Summary</h2>
              <p className="text-gray-300 leading-relaxed">
                Enthusiastic tech explorer with a focus on Cybersecurity, Cloud, and DevOps. Passionate about building community-driven and user-centric digital solutions. Experienced in hackathons, public speaking, and visual storytelling. Currently leading community roles and actively contributing to real-world technical events.
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

                {/* <div>
                  <h3 className="text-xl font-semibold">College Representative</h3>
                  <p className="text-gray-400">AWS Cloud Club - Nepal • Mar 2025 – Present</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Representing AWS Cloud Club at college and promoting cloud technology awareness.</li>
                    <li>Organizing cloud-focused workshops and events for student engagement.</li>
                  </ul>
                </div>
              </div> */}

              {/* Volunteer Experience */}
              <h2 className="text-2xl font-bold mt-12 mb-4 text-blue-300">Volunteer Experience</h2>
              <div className="space-y-4 text-gray-300">

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
                  <h3 className="text-xl font-semibold">Volunteer – Hospitality & Guest Handling</h3>
                  <p className="text-gray-400">Nepal International Film Festival (NIFF) • Mar 2024</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Assisted in coordinating guests, managing sessions, and ensuring smooth event flow.</li>
                  </ul>
                </div>

              

                <div>
                  <h3 className="text-xl font-semibold">TEDxBaneshwor Volunteer</h3>
                  <p className="text-gray-400">TEDx Event • Dec 2023</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Assisted in logistics and guest experience for the independently organized TEDx event.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Volunteer – Technical & Logistics</h3>
                  <p className="text-gray-400">KIST HackFest 2024 • Jun 2024</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Helped set up tech infrastructure, managed registrations, and supported teams during hackathon.</li>
                  </ul>
                </div>

              </div>
            </section>

            {/* Projects */}
            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Projects</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-4">
                <li>
                  <strong>DevBus</strong> – AI-powered tool for job readiness. Built with React, Supabase, OpenAI API.
                  <a href="https://github.com/dhirendraxd/Codeyatra-Hackathon.git" target="_blank" rel="noopener noreferrer" className="ml-2 text-blue-400 inline-flex items-center hover:underline">
                    GitHub <ExternalLink size={16} className="ml-1" />
                  </a>
                </li>
                <li>
                  <strong>Impactify</strong> – A web app to recruit volunteers and manage stipends for events. Used in hackathon.
                </li>
                <li>
                  <strong>FreshMart</strong> – Marketplace for local farmers to sell fresh produce. Solo dev project.
                </li>
              </ul>
            </section>

            {/* Hackathons */}
            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Hackathons</h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>CodeYatra 2025 – AI Job Tool (DevBus)</li>
                <li>KEC Hack-a-LITE 2024 – Volunteer Management App</li>
                <li>KIST HackFest 2023 – Solo Project on Farmer Marketplace</li>
                <li>PublicBodies Datathon 2025 – Data validation for civic tech</li>
              </ul>
            </section>

            {/* Skills */}
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

            {/* Education & Certifications */}
            <section className="card">
              <h2 className="text-2xl font-bold mb-4 text-blue-300">Education & Certifications</h2>
              <div className="space-y-4 text-gray-300">
                <div>
                  <h3 className="text-xl font-bold mb-2">Bachelor's in Information Management</h3>
                  <p>KIST College & SS | 2023 –  2027</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Certifications</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>
                      Introducing Generative AI with AWS 

                    </li>
                    <li>
                      Civic Leadership Training (Part 5) 
                    </li>
                    <li>Google Cybersecurity Professional Certificate</li>
                    <li>Google Digital Marketing & E-Commerce</li>
                    <li>Google UI/UX Design Certificate</li>
                    <li>AWS Cloud Essentials  
                    </li>
                    <li>NFRS for SMEs – MeroJob</li>
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
