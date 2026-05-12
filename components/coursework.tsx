import { portfolioData } from '@/lib/portfolio-data';
import Reveal from './reveal';
import SectionHeading from './section-heading';

export default function CourseworkSection() {
  return (
    <section id="coursework" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Coursework"
          title="Academic areas that support the project work."
          description="The courses below connect the portfolio's software delivery with research, data, AI, and retrieval foundations."
        />

        <Reveal>
          <div className="flex flex-wrap gap-3">
            {portfolioData.coursework.map((course, index) => (
              <span
                key={course}
                className="course-chip rounded-lg border border-border bg-card px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                style={{ animationDelay: `${index * 110}ms` }}
              >
                {course}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
