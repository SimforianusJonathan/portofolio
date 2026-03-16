'use client';

import { portfolioData } from '@/lib/portfolio-data';

const EducationSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            My academic background and relevant coursework.
          </p>
        </div>

        {/* Education Cards */}
        <div className="space-y-6">
          {portfolioData.education.map((edu) => (
            <div
              key={edu.school}
              className="bg-background border border-border rounded-lg p-8 hover:border-primary transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-primary font-semibold mt-1">
                    {edu.school}
                  </p>
                  {edu.location && (
                    <p className="text-sm text-muted-foreground mt-1">
                      {edu.location}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground font-semibold">
                    {edu.expected}
                  </p>
                  {edu.gpa && (
                    <p className="text-primary font-bold text-lg">
                      GPA: {edu.gpa}
                    </p>
                  )}
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-2">
                {edu.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground">{highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
