import emailjs from '@emailjs/browser';

// EmailJS configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
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
export const initEmailJS = (): boolean => {
  if (!EMAILJS_CONFIG.PUBLIC_KEY) {
    console.error('EmailJS PUBLIC_KEY is not configured. Please set VITE_EMAILJS_PUBLIC_KEY in your environment variables.');
    return false;
  }
  emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  debugEmailJSConfig(); // Show config in console for debugging (dev only)
  return true;
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