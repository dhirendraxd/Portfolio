import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useToast } from "@/components/ui/use-toast";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { initEmailJS, sendEmail } from "@/lib/emailjs";
import { ThemedParticles } from "@/components/ThemedParticles";
import {
  validateEmail,
  validateMessage,
  sanitizeInput,
  rateLimiter,
  getUserIdentifier,
  detectSuspiciousActivity,
  initializeFormSecurity,
  logSecurityEvent
} from "@/lib/security";

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<{ size?: string | number }>;
  label: string;
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          className="group relative aspect-square w-full h-full bg-slate-800/30 rounded-lg transition-all duration-300 hover:bg-slate-700/50 hover:shadow-lg hover:shadow-blue-500/5 flex flex-col items-center justify-center hover:-translate-y-1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <div className="text-gray-400 group-hover:text-blue-400 transition-colors duration-300">
            <Icon size={28} />
          </div>
          <span className="mt-1 text-xs text-gray-500 text-center group-hover:text-gray-300 transition-colors duration-300">{label}</span>
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p className="font-medium">{label}</p>
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>
);

export const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [honeypot, setHoneypot] = useState(''); // Anti-bot honeypot
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rateLimitExceeded, setRateLimitExceeded] = useState(false);
  const [errors, setErrors] = useState<{email?: string; message?: string; name?: string}>({});
  const { toast } = useToast();

  // Secure form validation
  const validateForm = () => {
    const newErrors: {email?: string; message?: string; name?: string} = {};
    
    // Sanitize inputs
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);
    const sanitizedName = sanitizeInput(name);
    
    // Validate email
    const emailValidation = validateEmail(sanitizedEmail);
    if (!emailValidation.isValid) {
      newErrors.email = emailValidation.error;
    }
    
    // Validate message
    const messageValidation = validateMessage(sanitizedMessage);
    if (!messageValidation.isValid) {
      newErrors.message = messageValidation.error;
    }
    
    // Name is optional but if provided, validate it
    if (sanitizedName && sanitizedName.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Initialize EmailJS and security when component mounts
  useEffect(() => {
    initEmailJS();
    initializeFormSecurity();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({});
    setRateLimitExceeded(false);
    
    // Check rate limiting
    const userIdentifier = getUserIdentifier();
    if (!rateLimiter.isAllowed(userIdentifier)) {
      const remainingTime = Math.ceil(rateLimiter.getRemainingTime(userIdentifier) / 1000);
      setRateLimitExceeded(true);
      logSecurityEvent('Rate limit exceeded', { identifier: userIdentifier });
      toast({
        title: "Too many attempts ⚠️",
        description: `Please wait ${remainingTime} seconds before trying again.`,
        variant: "destructive",
      });
      return;
    }
    
    // Sanitize inputs
    const sanitizedEmail = sanitizeInput(email);
    const sanitizedMessage = sanitizeInput(message);
    const sanitizedName = sanitizeInput(name);
    
    // Check for suspicious activity
    const formData = {
      email: sanitizedEmail,
      message: sanitizedMessage,
      name: sanitizedName,
      honeypot: honeypot
    };
    
    if (detectSuspiciousActivity(formData)) {
      logSecurityEvent('Suspicious form submission detected', formData);
      toast({
        title: "Submission blocked ⚠️",
        description: "Your submission appears automated. Please try again.",
        variant: "destructive",
      });
      return;
    }
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Prepare template parameters for EmailJS with sanitized data
      const templateParams = {
        from_name: sanitizedName || 'Portfolio Visitor',
        from_email: sanitizedEmail,
        message: sanitizedMessage,
        to_name: 'Dhirendra Singh Dhami',
        reply_to: sanitizedEmail,
        // Add timestamp for security logging
        submitted_at: new Date().toISOString(),
      };

      const result = await sendEmail(templateParams);

      if (result.success) {
        logSecurityEvent('Successful form submission', { 
          email: sanitizedEmail,
          messageLength: sanitizedMessage.length 
        });
        
        toast({
          title: "Message sent successfully! ✅",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        });

        // Reset form
        setEmail('');
        setMessage('');
        setName('');
        setHoneypot('');
        setErrors({});
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      logSecurityEvent('Email sending failed', { 
        error: error instanceof Error ? error.message : 'Unknown error' 
      });
      
      toast({
        title: "Failed to send message ❌",
        description: "Please try again or contact me directly at dhirendraxd@gmail.com",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding opacity-0 relative py-14">
      <ThemedParticles theme="sustainability" />
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Get in Touch</h2>
          <p className="text-gray-400 text-sm">
            Have a question or want to collaborate? Reach out through any channel below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Social Links */}
            <div className="bg-slate-900/40 backdrop-blur-sm rounded-lg p-7 hover:bg-slate-900/60 transition-all duration-300">
              <h3 className="text-base font-semibold mb-5 text-white">Connect</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { href: "https://github.com/dhirendraxd", icon: Github, label: "GitHub" },
                  { href: "https://x.com/dhirendra_jsx", icon: Twitter, label: "Twitter" },
                  { href: "https://www.linkedin.com/in/dhirendrasinghdhami/", icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:dhirendraxd@gmail.com", icon: Mail, label: "Email" },
                ].map(({ href, icon, label }, index) => (
                  <SocialLink key={index} href={href} icon={icon} label={label} />
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-900/40 backdrop-blur-sm rounded-lg p-7 hover:bg-slate-900/60 transition-all duration-300">
              <h3 className="text-base font-semibold mb-5 text-white">Message</h3>
              
              {rateLimitExceeded && (
                <div className="mb-3 p-2 bg-red-900/20 border border-red-500/50 rounded-lg text-red-300 text-xs animate-pulse">
                  ⚠️ Too many attempts. Please wait.
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-3">
                {/* Honeypot field - hidden from users but visible to bots */}
                <div className="hidden">
                  <label htmlFor="honeypot">Leave this field empty</label>
                  <input
                    type="text"
                    id="honeypot"
                    name="honeypot"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1">
                    Name <span className="text-gray-500">(optional)</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errors.name) {
                        setErrors(prev => ({ ...prev, name: undefined }));
                      }
                    }}
                    maxLength={50}
                    className={`w-full p-2 rounded bg-slate-800/50 border text-xs text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 transition-all hover:bg-slate-800/70 ${
                      errors.name 
                        ? 'border-red-500/50 focus:ring-red-400/50 focus:border-red-400/50' 
                        : 'border-slate-700/50 focus:ring-blue-400/50 focus:border-blue-400/50'
                    }`}
                    placeholder="Name"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-0.5">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">
                    Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) {
                        setErrors(prev => ({ ...prev, email: undefined }));
                      }
                    }}
                    required
                    maxLength={254}
                    className={`w-full p-2 rounded bg-slate-800/50 border text-xs text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 transition-all hover:bg-slate-800/70 ${
                      errors.email 
                        ? 'border-red-500/50 focus:ring-red-400/50 focus:border-red-400/50' 
                        : 'border-slate-700/50 focus:ring-blue-400/50 focus:border-blue-400/50'
                    }`}
                    placeholder="you@example.com"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-0.5">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      if (errors.message) {
                        setErrors(prev => ({ ...prev, message: undefined }));
                      }
                    }}
                    required
                    rows={3}
                    maxLength={1000}
                    className={`w-full p-2 rounded bg-slate-800/50 border text-xs text-white placeholder:text-gray-500 focus:outline-none focus:ring-1 resize-none transition-all hover:bg-slate-800/70 ${
                      errors.message 
                        ? 'border-red-500/50 focus:ring-red-400/50 focus:border-red-400/50' 
                        : 'border-slate-700/50 focus:ring-blue-400/50 focus:border-blue-400/50'
                    }`}
                    placeholder="Your message..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-0.5">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || rateLimitExceeded || !email.trim() || !message.trim()}
                  className="w-full py-2 px-4 rounded bg-blue-500/90 hover:bg-blue-500 disabled:bg-slate-700 text-xs text-white font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/20"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-1.5">
                      <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span className="text-xs">Sending...</span>
                    </div>
                  ) : rateLimitExceeded ? (
                    'Please wait'
                  ) : (
                    'Send'
                  )}
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-2">
                Response within 24h
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
