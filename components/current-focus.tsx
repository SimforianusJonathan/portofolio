'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { Sparkles } from 'lucide-react';

const CurrentFocusSection = () => {
  return (
    <section id="focus" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
            <Sparkles size={16} className="text-accent" />
            <span className="text-sm text-accent font-semibold">What I'm Exploring</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Current Focus Areas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My active areas of exploration and research interests driving my technical journey.
          </p>
        </div>

        {/* Focus Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioData.currentFocus.map((focus, index) => (
            <div
              key={focus}
              className="group relative overflow-hidden bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 animate-in fade-in slide-in-from-bottom-4 duration-700 opacity-0"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-primary to-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {focus}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {getDescriptionForFocus(focus)}
                </p>
              </div>

              {/* Border Glow on Hover */}
              <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/50 transition-colors duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function getDescriptionForFocus(focus: string): string {
  const descriptions: Record<string, string> = {
    "Artificial Intelligence": "Exploring AI systems and their practical applications in real-world problems.",
    "Deep Learning": "Building and training deep neural networks for complex pattern recognition and decision-making.",
    "Machine Learning": "Developing ML models and algorithms for data-driven insights and predictions.",
    "Blockchain / Web3": "Creating decentralized systems and smart contracts for transparent and secure applications.",
    "Applied Software Engineering for intelligent systems": "Engineering scalable, robust solutions that integrate AI with production software."
  };
  return descriptions[focus] || "Exploring this technology domain and its applications.";
}

export default CurrentFocusSection;
