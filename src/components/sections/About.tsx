'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';

interface AboutProps {
  bio: string;
  name: string;
  location: string;
}

export function About({ bio, name, location }: AboutProps) {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
              <p className="text-lg text-muted">
                The person behind the code
              </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Bio Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card>
              <CardContent className="p-8">
                <div 
                  className="text-lg leading-relaxed text-foreground/90 prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{
                    __html: bio
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\n\n/g, '</p><p class="mt-4">')
                      .replace(/^/, '<p>')
                      .replace(/$/, '</p>')
                      .replace(/- \*\*(.*?)\*\*/g, '<li><strong>$1</strong></li>')
                      .replace(/<p>- /g, '<ul class="mt-2 space-y-1"><li>')
                      .replace(/- (.*?)<\/p>/g, '$1</li></ul>')
                  }}
                />
                
                    <div className="mt-8 pt-6 border-t border-border">
                      <div className="flex items-center text-sm text-muted">
                        <span className="font-medium">Based in:</span>
                        <span className="ml-2">{location}</span>
                      </div>
                    </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Profile Image Placeholder & Quick Facts */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Profile Image Placeholder */}
            <Card>
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-secondary to-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <div className="text-6xl font-bold text-primary/60">
                    {name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-lg">{name}</h3>
                  <p className="text-sm text-muted">{location}</p>
                </div>
              </CardContent>
            </Card>

            {/* Quick Facts */}
            <Card>
              <CardContent className="p-6">
                    <h4 className="font-semibold mb-4">Quick Facts</h4>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary/60 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted">
                      Regularly contribute to volunteer and non-profit projects for sustainable development
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary/60 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted">
                      Passionate about backpacking travels and encounters between humanity and culture
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary/60 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted">
                      Coffee enthusiast ☕ (essential for debugging!): my brother is a coffee roaster!
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary/60 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted">
                      In my free time I experiment with Home Assistant and small IoT projects for smart homes
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
