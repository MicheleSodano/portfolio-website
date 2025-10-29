import DOMPurify from 'dompurify';
import validator from 'validator';

// Client-side sanitization utilities
export const security = {
  /**
   * Sanitize HTML content to prevent XSS attacks
   */
  sanitizeHtml: (input: string): string => {
    if (typeof window === 'undefined') {
      // Server-side: basic escaping
      return input
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#x27;')
        .replace(/\//g, '&#x2F;');
    }
    
    // Client-side: use DOMPurify
    return DOMPurify.sanitize(input, {
      ALLOWED_TAGS: [], // No HTML tags allowed
      ALLOWED_ATTR: [],
    });
  },

  /**
   * Sanitize and validate text input
   */
  sanitizeText: (input: string, maxLength: number = 1000): string => {
    if (!input || typeof input !== 'string') return '';
    
    // Remove potential script injections
    let sanitized = input
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/javascript:/gi, '')
      .replace(/on\w+\s*=/gi, '')
      .replace(/data:text\/html/gi, '');
    
    // Sanitize HTML
    sanitized = security.sanitizeHtml(sanitized);
    
    // Trim and limit length
    sanitized = sanitized.trim().substring(0, maxLength);
    
    return sanitized;
  },

  /**
   * Validate email format
   */
  validateEmail: (email: string): boolean => {
    if (!email || typeof email !== 'string') return false;
    return validator.isEmail(email) && email.length <= 254;
  },

  /**
   * Validate name field
   */
  validateName: (name: string): boolean => {
    if (!name || typeof name !== 'string') return false;
    
    // Only letters, spaces, hyphens, apostrophes
    const nameRegex = /^[a-zA-ZÀ-ÿ\s\-']{2,50}$/;
    return nameRegex.test(name.trim());
  },

  /**
   * Validate message content
   */
  validateMessage: (message: string): boolean => {
    if (!message || typeof message !== 'string') return false;
    
    const trimmed = message.trim();
    
    // Check length
    if (trimmed.length < 10 || trimmed.length > 2000) return false;
    
    // Check for suspicious patterns
    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /on\w+\s*=/i,
      /data:text\/html/i,
      /vbscript:/i,
      /expression\(/i,
    ];
    
    return !suspiciousPatterns.some(pattern => pattern.test(trimmed));
  },

  /**
   * Rate limiting check (simple client-side)
   */
  checkRateLimit: (): boolean => {
    const key = 'contact_form_last_submit';
    const cooldown = 30000; // 30 seconds
    
    const lastSubmit = localStorage.getItem(key);
    const now = Date.now();
    
    if (lastSubmit && (now - parseInt(lastSubmit)) < cooldown) {
      return false; // Rate limited
    }
    
    localStorage.setItem(key, now.toString());
    return true;
  },

  /**
   * Comprehensive form validation
   */
  validateFormData: (data: { name: string; email: string; message: string }) => {
    const errors: string[] = [];
    
    // Validate name
    if (!security.validateName(data.name)) {
      errors.push('Name must be 2-50 characters and contain only letters, spaces, hyphens, and apostrophes');
    }
    
    // Validate email
    if (!security.validateEmail(data.email)) {
      errors.push('Please enter a valid email address');
    }
    
    // Validate message
    if (!security.validateMessage(data.message)) {
      errors.push('Message must be 10-2000 characters and contain no suspicious content');
    }
    
    return {
      isValid: errors.length === 0,
      errors,
      sanitizedData: {
        name: security.sanitizeText(data.name, 50),
        email: data.email.trim().toLowerCase(),
        message: security.sanitizeText(data.message, 2000),
      },
    };
  },
};
