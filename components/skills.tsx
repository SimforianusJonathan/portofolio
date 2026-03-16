'use client';

import { portfolioData } from '@/lib/portfolio-data';

const SkillsSection = () => {
  const skillCategories = Object.entries(portfolioData.skills);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My toolkit for building modern applications, from machine learning pipelines to blockchain systems.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map(([category, skills]) => (
            <div
              key={category}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary transition-all duration-300"
            >
              <h3 className="text-xl font-bold text-foreground mb-6">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-background border border-border rounded-lg text-sm text-muted-foreground hover:border-primary hover:text-primary transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Current Focus */}
        <div className="mt-12 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 rounded-lg p-8">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Currently Focused On
          </h3>
          <ul className="space-y-3">
            {portfolioData.currentFocus.map((focus) => (
              <li key={focus} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                <span className="text-muted-foreground">{focus}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
