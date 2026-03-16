'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating or have a question? I'd love to hear from you. Reach out through any of the channels below.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Email */}
          <a
            href={`mailto:${portfolioData.email}`}
            className="group bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 text-center"
          >
            <div className="flex justify-center mb-4">
              <Mail className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground text-sm break-all hover:text-primary transition-colors">
              {portfolioData.email}
            </p>
          </a>

          {/* GitHub */}
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 text-center"
          >
            <div className="flex justify-center mb-4">
              <Github className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">GitHub</h3>
            <p className="text-muted-foreground text-sm hover:text-primary transition-colors">
              View my repositories
            </p>
          </a>

          {/* LinkedIn */}
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 text-center"
          >
            <div className="flex justify-center mb-4">
              <Linkedin className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
            <p className="text-muted-foreground text-sm hover:text-primary transition-colors">
              Connect with me
            </p>
          </a>
        </div>

        {/* Location */}
        <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 rounded-lg p-8 flex items-center justify-center gap-3">
          <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
          <div>
            <p className="text-foreground font-semibold">{portfolioData.name}</p>
            <p className="text-muted-foreground">{portfolioData.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
