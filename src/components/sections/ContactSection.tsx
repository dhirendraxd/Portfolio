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

interface SocialLinkProps {
  href: string;
  icon: React.ComponentType<any>;
  label: string;
}

const SocialLink = ({ href, icon: Icon, label }: SocialLinkProps) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger asChild>
        <a
          href={href}
          className="hover-glow aspect-square w-full h-full bg-slate-800/50 rounded-lg transition-all duration-300 hover:bg-slate-700/50 flex flex-col items-center justify-center"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon size={28} />
          <span className="mt-1 text-xs text-gray-300 text-center">{label}</span>
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{email?: string; message?: string}>({});
  const { toast } = useToast();

  // Form validation
  const validateForm = () => {
    const newErrors: {email?: string; message?: string} = {};
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Message validation
    if (!message.trim()) {
      newErrors.message = 'Message is required';
    } else if (message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    } else if (message.trim().length > 1000) {
      newErrors.message = 'Message must be less than 1000 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Initialize EmailJS when component mounts
  useEffect(() => {
    initEmailJS();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Clear previous errors
    setErrors({});
    
    // Validate form
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);

    try {
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: 'Portfolio Visitor',
        from_email: email.trim(),
        message: message.trim(),
        to_name: 'Dhirendra Singh Dhami',
        reply_to: email.trim(),
      };

      const result = await sendEmail(templateParams);

      if (result.success) {
        toast({
          title: "Message sent successfully! ✅",
          description: "Thank you for reaching out. I'll get back to you within 24 hours.",
        });

        // Reset form
        setEmail('');
        setMessage('');
        setErrors({});
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
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
    <section id="contact" className="section-padding opacity-0">
      <div className="container mx-auto">
        <h2 className="section-title text-center mb-16">Get in Touch</h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Social Links */}
            <div className="card backdrop-blur-sm bg-slate-800/30 p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Connect With Me</h3>
              <p className="text-center mb-8 text-gray-300">
                Feel free to reach out through any of these platforms.
              </p>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-4 auto-rows-[1fr]">
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
            <div className="card backdrop-blur-sm bg-slate-800/30 p-8">
              <h3 className="text-2xl font-bold mb-8 text-center">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      // Clear error when user starts typing
                      if (errors.email) {
                        setErrors(prev => ({ ...prev, email: undefined }));
                      }
                    }}
                    required
                    className={`w-full p-3 rounded-lg bg-slate-700/50 border text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-blue-400 transition-colors ${
                      errors.email 
                        ? 'border-red-500 focus:ring-red-400' 
                        : 'border-slate-600 focus:ring-blue-400'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message <span className="text-red-400">*</span>
                    <span className="text-gray-500 text-xs ml-2">
                      ({message.length}/1000 characters)
                    </span>
                  </label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                      // Clear error when user starts typing
                      if (errors.message) {
                        setErrors(prev => ({ ...prev, message: undefined }));
                      }
                    }}
                    required
                    rows={5}
                    maxLength={1000}
                    className={`w-full p-3 rounded-lg bg-slate-700/50 border text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:border-blue-400 resize-vertical transition-colors ${
                      errors.message 
                        ? 'border-red-500 focus:ring-red-400' 
                        : 'border-slate-600 focus:ring-blue-400'
                    }`}
                    placeholder="What would you like to discuss? Feel free to share your ideas, questions, or collaboration opportunities..."
                  />
                  {errors.message && (
                    <p className="text-red-400 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !email.trim() || !message.trim()}
                  className="w-full py-3 px-6 rounded-lg bg-blue-500 hover:bg-blue-600 disabled:bg-gray-600 text-white font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-blue-500/25"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending Message...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>

              <p className="text-xs text-gray-400 mt-4 text-center">
                Your message will be sent directly to my email. I'll respond as soon as possible!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
