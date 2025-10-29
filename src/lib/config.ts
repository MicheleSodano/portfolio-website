// Configuration for external services
export const config = {
  // Formspree configuration
  formspree: {
    // Replace with your actual Formspree form ID after registration
    // Get this from https://formspree.io after creating a form
    formId: process.env.NEXT_PUBLIC_FORMSPREE_ID || 'YOUR_FORM_ID',
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
