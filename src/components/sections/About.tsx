'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/Card';
import Image from 'next/image';

interface AboutProps {
  bio: string;
  name: string;
  location: string;
  avatar?: string;
}

export function About({ bio, name, location, avatar }: AboutProps) {
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
            {/* Profile Image */}
            <Card>
              <CardContent className="p-6">
                <div className="aspect-square rounded-xl overflow-hidden mb-4 bg-gradient-to-br from-secondary to-primary/10">
                  {avatar ? (
                    <Image
                      src={avatar}
                      alt={`${name} - Profile Photo`}
                      width={300}
                      height={300}
                      className="w-full h-full object-cover"
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-6xl font-bold text-primary/60">
                        {name.split(' ').map(n => n[0]).join('')}
                      </div>
                    </div>
                  )}
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
                      Coffee enthusiast (essential for debugging!) — not surprising with a brother running a specialty coffee roastery.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary/60 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted">
                      Passionate about backpacking and fascinated by the encounters between people, culture, and nature along the way.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary/60 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted">
                      Tinker with smart home automations in my free time — experimenting with Home Assistant, Raspberry Pi, and tiny IoT sensors.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary/60 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted">
                      Supporter of sustainable innovation, contributing to volunteer and non-profit projects focused on environmental and social impact.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary/60 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted">
                      Lived and worked across Europe, Asia, and the U.S., developing a global mindset and curiosity for cultural diversity.
                    </span>
                  </div>
                  <div className="flex items-start">
                    <span className="w-2 h-2 bg-primary/60 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <span className="text-muted">
                      Enjoy connecting ideas from different disciplines and believe in balance between analytical precision and creative intuition
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
