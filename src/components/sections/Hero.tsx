'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowDown, Download, Linkedin, Mail } from 'lucide-react';

interface HeroProps {
  name: string;
  role: string;
  tagline: string;
  social: {
    github: string;
    linkedin: string;
    email?: string;
  };
}

export function Hero({ name, role, tagline, social }: HeroProps) {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/30 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {name}
            </span>
            <span className="block text-muted text-2xl sm:text-3xl lg:text-4xl font-medium mt-2">
              {role}
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl sm:text-2xl text-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
              <Button size="lg" onClick={scrollToProjects} className="group">
                View Projects
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
              </Button>
              <Button variant="outline" size="lg" onClick={scrollToContact}>
                Contact Me
                <Mail className="ml-2 h-4 w-4" />
              </Button>
              <a href="/cv" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="lg">
                  View CV
                  <Download className="ml-2 h-4 w-4" />
                </Button>
              </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center gap-6"
        >
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <Linkedin className="h-6 w-6" />
            <span className="sr-only">LinkedIn</span>
          </a>
          {social.email && (
            <a
              href={`mailto:${social.email}`}
              className="p-3 rounded-full border border-border hover:border-primary/50 hover:bg-secondary transition-all duration-300 shadow-sm hover:shadow-md"
            >
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </a>
          )}
        </motion.div>
      </div>
    </section>
  );
}
