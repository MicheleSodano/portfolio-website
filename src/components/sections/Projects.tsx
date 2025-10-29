'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { ExternalLink, TrendingUp } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  solution: string;
  results: string[];
  technologies: string[];
  links: {
    github?: string;
    demo?: string;
  };
  image: string;
  featured: boolean;
}

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  const featuredProjects = projects.filter(p => p.featured);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                A selection of projects that best represent my skills and the value I can offer
              </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full group hover:scale-[1.02] transition-transform duration-300">
                <CardHeader>
                  <div className="aspect-video bg-gradient-to-br from-secondary to-primary/10 rounded-lg mb-4 flex items-center justify-center">
                    <div className="text-muted text-sm">
                      {project.title} Preview
                    </div>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div>
                        <h4 className="font-semibold text-sm mb-2 flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2" />
                          Key Results
                        </h4>
                    <ul className="space-y-1">
                      {project.results.slice(0, 2).map((result, i) => (
                        <li key={i} className="text-sm text-muted flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 mr-2 flex-shrink-0" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-sm mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-foreground/5 text-foreground/70 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-secondary text-muted rounded text-xs">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  {project.links.demo && (
                    <div className="flex gap-2 pt-2">
                      <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                        <Button size="sm">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </Button>
                      </a>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
              <a href="/projects">
                <Button variant="outline" size="lg">
                  View All Projects
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
        </motion.div>
      </div>
    </section>
  );
}
