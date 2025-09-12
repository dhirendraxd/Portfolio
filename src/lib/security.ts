/**
 * Security utilities for input validation and sanitization
 */

// Input validation patterns
export const VALIDATION_PATTERNS = {
  email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  name: /^[a-zA-Z\s'-]{2,50}$/,
  subject: /^[a-zA-Z0-9\s.,!?'-]{5,100}$/,
  message: /^[\w\s.,!?'"\-\n\r]{10,1000}$/,
  phone: /^[+]?[1-9][\d]{0,15}$/
};

// Rate limiting for contact form
class RateLimiter {
  private attempts: Map<string, { count: number; lastAttempt: number }> = new Map();
  private readonly maxAttempts = 3;
  private readonly windowMs = 60000; // 1 minute

  isAllowed(identifier: string): boolean {
    const now = Date.now();
    const userAttempts = this.attempts.get(identifier);

    if (!userAttempts) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now });
      return true;
    }

    // Reset if window has passed
    if (now - userAttempts.lastAttempt > this.windowMs) {
      this.attempts.set(identifier, { count: 1, lastAttempt: now });
      return true;
    }

    // Check if under limit
    if (userAttempts.count < this.maxAttempts) {
      userAttempts.count++;
      userAttempts.lastAttempt = now;
      return true;
    }

    return false;
  }

  getRemainingTime(identifier: string): number {
    const userAttempts = this.attempts.get(identifier);
    if (!userAttempts) return 0;
    
    const remaining = this.windowMs - (Date.now() - userAttempts.lastAttempt);
    return Math.max(0, remaining);
  }
}

export const rateLimiter = new RateLimiter();

/**
 * Sanitize user input to prevent XSS and injection attacks
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return '';
  
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/data:/gi, '') // Remove data: protocol
    .trim()
    .slice(0, 1000); // Limit length
}

/**
 * Validate email format with additional security checks
 */
export function validateEmail(email: string): { isValid: boolean; error?: string } {
  if (!email) {
    return { isValid: false, error: 'Email is required' };
  }

  if (email.length > 254) {
    return { isValid: false, error: 'Email is too long' };
  }

  if (!VALIDATION_PATTERNS.email.test(email)) {
    return { isValid: false, error: 'Invalid email format' };
  }

  // Check for suspicious patterns
  if (email.includes('..') || email.includes('@@')) {
    return { isValid: false, error: 'Invalid email format' };
  }

  return { isValid: true };
}

/**
 * Validate name with security checks
 */
export function validateName(name: string): { isValid: boolean; error?: string } {
  if (!name) {
    return { isValid: false, error: 'Name is required' };
  }

  if (!VALIDATION_PATTERNS.name.test(name)) {
    return { isValid: false, error: 'Name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes' };
  }

  return { isValid: true };
}

/**
 * Validate subject line
 */
export function validateSubject(subject: string): { isValid: boolean; error?: string } {
  if (!subject) {
    return { isValid: false, error: 'Subject is required' };
  }

  if (!VALIDATION_PATTERNS.subject.test(subject)) {
    return { isValid: false, error: 'Subject must be 5-100 characters' };
  }

  return { isValid: true };
}

/**
 * Validate message content
 */
export function validateMessage(message: string): { isValid: boolean; error?: string } {
  if (!message) {
    return { isValid: false, error: 'Message is required' };
  }

  if (!VALIDATION_PATTERNS.message.test(message)) {
    return { isValid: false, error: 'Message must be 10-1000 characters' };
  }

  return { isValid: true };
}

/**
 * Get user identifier for rate limiting (IP-based simulation)
 */
export function getUserIdentifier(): string {
  // In a real application, you'd use the actual IP address
  // For client-side rate limiting, we use a combination of factors
  const fingerprint = [
    navigator.userAgent,
    navigator.language,
    screen.width,
    screen.height,
    Intl.DateTimeFormat().resolvedOptions().timeZone
  ].join('|');
  
  // Simple hash function
  let hash = 0;
  for (let i = 0; i < fingerprint.length; i++) {
    const char = fingerprint.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  return hash.toString();
}

/**
 * Log security events (in production, send to monitoring service)
 */
export function logSecurityEvent(event: string, details: Record<string, unknown>): void {
  console.warn(`[SECURITY] ${event}:`, details);
  
  // In production, send to security monitoring service
  // Example: sendToMonitoringService({ event, details, timestamp: new Date().toISOString() });
}

/**
 * Detect potential bot/automated behavior
 */
export function detectSuspiciousActivity(formData: Record<string, unknown>): boolean {
  // Check for honeypot field
  if (formData.honeypot && typeof formData.honeypot === 'string' && formData.honeypot.trim() !== '') {
    logSecurityEvent('Honeypot triggered', { honeypot: formData.honeypot });
    return true;
  }

  // Check for extremely fast form submission
  const submissionTime = Date.now();
  const formStartTime = sessionStorage.getItem('form_start_time');
  if (formStartTime) {
    const timeDiff = submissionTime - parseInt(formStartTime);
    if (timeDiff < 3000) { // Less than 3 seconds
      logSecurityEvent('Suspiciously fast form submission', { timeDiff });
      return true;
    }
  }

  return false;
}

/**
 * Initialize form security measures
 */
export function initializeFormSecurity(): void {
  // Record form start time
  sessionStorage.setItem('form_start_time', Date.now().toString());
  
  // Add integrity checks
  const integrity = {
    userAgent: navigator.userAgent,
    timestamp: Date.now(),
    referrer: document.referrer
  };
  
  sessionStorage.setItem('form_integrity', JSON.stringify(integrity));
}