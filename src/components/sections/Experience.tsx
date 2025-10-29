'use client';

import { motion } from 'framer-motion';
import { formatPeriod } from '@/lib/utils';
import { MapPin, Calendar } from 'lucide-react';

interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location: string;
  period: {
    start: string;
    end: string | 'presente';
  };
  description: string;
  achievements: string[];
  technologies: string[];
}

interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: {
    start: string;
    end: string;
  };
  grade?: string;
  scholarship?: string;
  thesis?: string;
  specialization?: string;
  achievements?: string[];
}

interface ExperienceProps {
  experience: ExperienceItem[];
  education: EducationItem[];
}

export function Experience({ experience, education }: ExperienceProps) {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            My professional and educational journey that brought me where I am today
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold mb-8">Professional Experience</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-foreground/20" />
            
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-2 w-3 h-3 bg-foreground rounded-full border-2 border-background" />
                  
                  <div className="bg-background/50 backdrop-blur-sm border border-foreground/10 rounded-xl p-6 hover:border-foreground/20 transition-colors duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-semibold">{exp.title}</h4>
                        <p className="text-foreground/80 font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col sm:items-end text-sm text-foreground/60 mt-2 sm:mt-0">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatPeriod(exp.period.start, exp.period.end)}
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-foreground/70 mb-4">{exp.description}</p>
                    
                    {exp.achievements.length > 0 && (
                      <div className="mb-4">
                        <h5 className="font-semibold text-sm mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.slice(0, 2).map((achievement, i) => (
                            <li key={i} className="text-sm text-foreground/70 flex items-start">
                              <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full mt-2 mr-2 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-foreground/5 text-foreground/70 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h3 className="text-2xl font-semibold mb-8">Education</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-foreground/20" />
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative pl-12"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2.5 top-2 w-3 h-3 bg-foreground/60 rounded-full border-2 border-background" />
                  
                  <div className="bg-background/50 backdrop-blur-sm border border-foreground/10 rounded-xl p-6 hover:border-foreground/20 transition-colors duration-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <div>
                        <h4 className="text-xl font-semibold">{edu.degree}</h4>
                        <p className="text-foreground/80 font-medium">{edu.institution}</p>
                        {edu.specialization && (
                          <p className="text-sm text-foreground/70 italic">Specialization: {edu.specialization}</p>
                        )}
                        <div className="flex flex-col gap-1 mt-2">
                          {edu.grade && (
                            <p className="text-sm text-foreground/60">
                              <span className="font-medium">Grade:</span> {edu.grade}
                            </p>
                          )}
                          {edu.scholarship && (
                            <p className="text-sm text-green-600 dark:text-green-400">
                              <span className="font-medium">Scholarship:</span> {edu.scholarship}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col sm:items-end text-sm text-foreground/60 mt-2 sm:mt-0">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {formatPeriod(edu.period.start, edu.period.end)}
                        </div>
                        <div className="flex items-center mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {edu.location}
                        </div>
                      </div>
                    </div>
                    
                    {edu.thesis && (
                      <p className="text-sm text-foreground/70 mb-3">
                        <span className="font-medium">Thesis:</span> {edu.thesis}
                      </p>
                    )}
                    
                    {edu.achievements && edu.achievements.length > 0 && (
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-foreground/70 flex items-start">
                            <span className="w-1.5 h-1.5 bg-foreground/40 rounded-full mt-2 mr-2 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
