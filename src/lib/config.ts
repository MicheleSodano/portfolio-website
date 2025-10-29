// Configuration for external services
export const config = {
  // Formspree configuration
  formspree: {
    // Formspree form ID from https://formspree.io/f/xkgpbnej
    formId: process.env.NEXT_PUBLIC_FORMSPREE_ID || 'xkgpbnej',
    endpoint: (formId: string) => `https://formspree.io/f/${formId}`,
  },
  
  // Contact information
  contact: {
    email: 'mikysodano@gmail.com',
    fallbackMailto: (name: string, email: string, message: string) => {
      const subject = encodeURIComponent(`Portfolio Contact: ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      return `mailto:mikysodano@gmail.com?subject=${subject}&body=${body}`;
    },
  },
};
