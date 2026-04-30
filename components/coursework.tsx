import { portfolioData } from '@/lib/portfolio-data';
import Reveal from './reveal';
import SectionHeading from './section-heading';

export default function CourseworkSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Coursework"
          title="Courses that support the portfolio direction."
          description="These courses explain why the project mix leans toward retrieval, data, machine learning, reinforcement learning, and software systems."
        />

        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-6">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioData.coursework.map((course, index) => (
                <div
                  key={course}
                  className="course-chip rounded-xl border border-border bg-background p-4 text-sm font-semibold text-foreground"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
