'use client';

import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface FooterProps {
  name: string;
  email: string;
  social: {
    github: string;
    linkedin: string;
  };
}

export function Footer({ name, email, social }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground/[0.02] border-t border-foreground/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">{name}</h3>
            <p className="text-foreground/70 text-sm">
              Privacy‑aware, human‑centered AI
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={`mailto:${email}`}
              className="p-2 rounded-lg border border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-200"
            >
              <Mail className="h-4 w-4" />
              <span className="sr-only">Email</span>
            </a>
            <a
              href={social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5 transition-all duration-200"
            >
              <Linkedin className="h-4 w-4" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <Button variant="ghost" size="sm" onClick={scrollToTop}>
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Back to top</span>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
