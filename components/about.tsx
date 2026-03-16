'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { Zap, Brain, Code2, Target } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Brain,
      title: 'AI & Deep Learning',
      description: 'Specialized in LLMs, computer vision, and neural networks'
    },
    {
      icon: Target,
      title: 'Blockchain & Web3',
      description: 'Building smart contracts and DeFi applications'
    },
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'Creating end-to-end applications with modern tech stack'
    },
    {
      icon: Zap,
      title: 'Problem Solving',
      description: 'Turning complex ideas into scalable solutions'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700 opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">About Me</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent rounded-full" />
        </div>

        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Bio Section */}
          <div className="lg:col-span-2 animate-in fade-in slide-in-from-left duration-700 opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {portfolioData.about}
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              I'm currently studying Computer Science at UC Berkeley, maintaining a 3.85 GPA and making the Dean's List every semester. My academic journey has been shaped by a passion for understanding how technology can solve real-world problems at scale.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Currently Focused On:</h3>
              <ul className="space-y-2">
                {portfolioData.currentFocus.map((focus, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{focus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Stats Card */}
          <div className="animate-in fade-in slide-in-from-right duration-700 opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/20 rounded-xl p-8 sticky top-24">
              <h3 className="text-sm font-semibold text-primary uppercase tracking-wider mb-6">Quick Facts</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">3.85</div>
                  <p className="text-sm text-muted-foreground">GPA / Dean's List</p>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">6+</div>
                  <p className="text-sm text-muted-foreground">Projects Completed</p>
                </div>
                
                <div>
                  <div className="text-3xl font-bold text-foreground mb-1">3</div>
                  <p className="text-sm text-muted-foreground">Internships & Experience</p>
                </div>

                <div className="pt-6 border-t border-border">
                  <div className="text-sm font-semibold text-foreground mb-4">Tech Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {['Python', 'TypeScript', 'React', 'Solidity'].map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div
                key={highlight.title}
                className="group p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 animate-in fade-in slide-in-from-bottom-4 duration-700 opacity-0"
                style={{ animationDelay: `${300 + index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
