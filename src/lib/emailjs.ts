import emailjs from '@emailjs/browser';

// EmailJS configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id_here',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id_here',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key_here',
};

// Debug function to check configuration (only in development)
export const debugEmailJSConfig = () => {
  if (import.meta.env.DEV) {
    console.log('EmailJS Configuration:', {
      SERVICE_ID: EMAILJS_CONFIG.SERVICE_ID,
      TEMPLATE_ID: EMAILJS_CONFIG.TEMPLATE_ID,
      PUBLIC_KEY: EMAILJS_CONFIG.PUBLIC_KEY?.substring(0, 5) + '...' // Only show first 5 chars for security
    });
  }
};

// Initialize EmailJS
export const initEmailJS = () => {
  if (!EMAILJS_CONFIG.PUBLIC_KEY || EMAILJS_CONFIG.PUBLIC_KEY === 'your_public_key_here') {
    console.error('EmailJS PUBLIC_KEY is not configured. Please set VITE_EMAILJS_PUBLIC_KEY in your .env file.');
    return;
  }
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  debugEmailJSConfig(); // Show config in console for debugging (dev only)
};

// Send email using EmailJS
export const sendEmail = async (templateParams: {
  from_email: string;
  message: string;
  from_name?: string;
}) => {
  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    );
    
    return { success: true, response };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { success: false, error };
  }
};