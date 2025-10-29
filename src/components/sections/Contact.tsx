'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Shield } from 'lucide-react';
import { config } from '@/lib/config';
import { security } from '@/lib/security';

interface ContactProps {
  email: string;
  phone?: string;
  location: string;
  social: {
    github: string;
    linkedin: string;
  };
}

export function Contact({ email, phone, location, social }: ContactProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error' | 'validation'>('idle');
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setValidationErrors([]);

    // Rate limiting check
    if (!security.checkRateLimit()) {
      setSubmitStatus('error');
      setValidationErrors(['Please wait 30 seconds before sending another message']);
      setIsSubmitting(false);
      return;
    }

    // Validate and sanitize form data
    const validation = security.validateFormData(formData);
    
    if (!validation.isValid) {
      setSubmitStatus('validation');
      setValidationErrors(validation.errors);
      setIsSubmitting(false);
      return;
    }

    // Use sanitized data for submission
    const sanitizedData = validation.sanitizedData;

    // If Formspree is not configured, use mailto fallback
    if (config.formspree.formId === 'YOUR_FORM_ID') {
      const mailtoUrl = config.contact.fallbackMailto(
        sanitizedData.name,
        sanitizedData.email,
        sanitizedData.message
      );
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      return;
    }

    try {
      // Use Formspree endpoint from config
      const response = await fetch(config.formspree.endpoint(config.formspree.formId), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: sanitizedData.name,
          email: sanitizedData.email,
          message: sanitizedData.message,
          _replyto: sanitizedData.email, // This tells Formspree to use this as reply-to
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    // Clear validation errors when user starts typing
    if (validationErrors.length > 0) {
      setValidationErrors([]);
      setSubmitStatus('idle');
    }
    
    // Basic real-time sanitization (allow typing but prevent obvious attacks)
    let sanitizedValue = value;
    
    // Remove script tags and javascript: protocols in real-time
    sanitizedValue = sanitizedValue
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/javascript:/gi, '');
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Let's Get In Touch</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or just want to chat? 
            I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <Card>
              <CardHeader>
                  <CardTitle className="flex items-center">
                    <Mail className="h-5 w-5 mr-2" />
                    Contact Information
                  </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-3 text-foreground/60" />
                  <a 
                    href={`mailto:${email}`}
                    className="text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {email}
                  </a>
                </div>
                {phone && (
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-3 text-foreground/60" />
                    <a 
                      href={`tel:${phone}`}
                      className="text-foreground/80 hover:text-foreground transition-colors"
                    >
                      {phone}
                    </a>
                  </div>
                )}
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-3 text-foreground/60" />
                  <span className="text-foreground/80">{location}</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                  <CardTitle>Follow Me</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 border border-foreground/20 rounded-lg hover:bg-foreground/5 transition-colors"
                  >
                    <Linkedin className="h-4 w-4 mr-2" />
                    LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>

            <div className="text-sm text-foreground/60 bg-foreground/5 p-4 rounded-lg">
              <p className="font-medium mb-2">Privacy & GDPR</p>
              <p>
                Your data will be used exclusively to respond to your request 
                and will not be shared with third parties. You can request deletion 
                at any time.
              </p>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                  <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-foreground/20 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/40 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-foreground/20 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/40 transition-colors"
                      placeholder="your-email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-foreground/20 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 focus:border-foreground/40 transition-colors resize-none"
                      placeholder="Tell me about your project or what you'd like to discuss..."
                    />
                  </div>
                  
                  {/* Status Messages */}
                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg text-green-800 dark:text-green-200">
                      ✅ Message sent successfully! I'll get back to you soon.
                    </div>
                  )}
                  
                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg text-red-800 dark:text-red-200">
                      ❌ Failed to send message. Please try again or email me directly.
                    </div>
                  )}
                  
                  {submitStatus === 'validation' && validationErrors.length > 0 && (
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg text-yellow-800 dark:text-yellow-200">
                      <div className="flex items-center mb-2">
                        <Shield className="h-4 w-4 mr-2" />
                        <span className="font-medium">Security Validation Failed</span>
                      </div>
                      <ul className="text-sm space-y-1">
                        {validationErrors.map((error, index) => (
                          <li key={index}>• {error}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
