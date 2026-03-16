'use client';

import { portfolioData } from '@/lib/portfolio-data';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Work Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Professional experience in AI research, blockchain development, and software engineering.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <div
              key={exp.company}
              className="relative"
            >
              {/* Timeline line */}
              {index !== portfolioData.experience.length - 1 && (
                <div className="hidden md:block absolute left-0 top-20 w-0.5 h-16 bg-gradient-to-b from-primary to-transparent" />
              )}

              {/* Timeline dot */}
              <div className="hidden md:block absolute left-0 top-8 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1.5" />

              {/* Content */}
              <div className="md:ml-8">
                <div className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="text-lg text-primary font-semibold mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <p className="text-muted-foreground font-semibold whitespace-nowrap">
                      {exp.period}
                    </p>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-2">
                    {exp.achievements.map((achievement) => (
                      <div key={achievement} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <p className="text-muted-foreground text-sm">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
