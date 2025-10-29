'use client';

import { motion } from 'framer-motion';
import { Code, Search, Palette, Users } from 'lucide-react';

interface Category {
  title: string;
  description: string;
  icon: string;
}

interface SkillsProps {
  categories: Category[];
  skills: {
    primary: string[];
    secondary: string[];
  };
}

const iconMap = {
  code: Code,
  search: Search,
  palette: Palette,
  users: Users,
};

export function Skills({ categories, skills }: SkillsProps) {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">What I Do</h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                I combine technical and creative skills to build innovative digital solutions
              </p>
            </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {categories.map((category, index) => {
            const IconComponent = iconMap[category.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-primary/10 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted text-sm leading-relaxed">
                  {category.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Skills Lists */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
                <h3 className="text-2xl font-semibold mb-6">Core Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.primary.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary text-white rounded-full text-sm font-medium shadow-sm hover:shadow-md hover:shadow-primary/25 transition-all duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
                <h3 className="text-2xl font-semibold mb-6">Additional Skills</h3>
            <div className="flex flex-wrap gap-3">
              {skills.secondary.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 border border-border rounded-full text-sm font-medium hover:bg-secondary hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
