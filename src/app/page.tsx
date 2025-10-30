import { Navigation } from '@/components/Navigation';
import { ScrollToTop } from '@/components/ScrollToTop';
import { Hero } from '@/components/sections/Hero';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { About } from '@/components/sections/About';
import { Contact } from '@/components/sections/Contact';
import { Footer } from '@/components/sections/Footer';
import portfolioData from '@/data/portfolio.json';

export default function Home() {
  const { personal, social, skills, categories, projects, experience, education } = portfolioData;

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero
        name={personal.name}
        role={personal.role}
        tagline={personal.tagline}
        social={{
          github: social.github,
          linkedin: social.linkedin,
          email: personal.email,
        }}
      />
      
      <Skills
        categories={categories}
        skills={skills}
      />
      
      <Projects projects={projects} />
      
      <About
        bio={personal.bio}
        name={personal.name}
        location={personal.location}
        avatar={personal.avatar}
      />
      
      <Experience
        experience={experience}
        education={education}
      />
      
      <Contact
        email={personal.email}
        phone={personal.phone}
        location={personal.location}
        social={social}
      />
      
      <Footer
        name={personal.name}
        email={personal.email}
        social={social}
      />
      
      <ScrollToTop />
    </main>
  );
}