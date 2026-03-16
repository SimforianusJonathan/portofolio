'use client';

import { portfolioData } from '@/lib/portfolio-data';

const CourseworkSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Relevant Coursework
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Advanced courses focused on AI, cryptography, and system design.
          </p>
        </div>

        {/* Coursework Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {portfolioData.coursework.map((semester) => (
            <div
              key={semester.semester}
              className="bg-background border border-border rounded-lg p-8 hover:border-primary transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-primary mb-6">
                {semester.semester}
              </h3>
              <div className="space-y-3">
                {semester.courses.map((course) => (
                  <div key={course} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {course}
                    </p>
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

export default CourseworkSection;
