import { portfolioData } from '@/lib/portfolio-data';
import Reveal from './reveal';
import SectionHeading from './section-heading';

export default function EducationSection() {
  return (
    <section id="education" className="section-band px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Education"
          title="Academic foundation in computer science."
          description="The education section keeps the CV's academic details visible while the coursework section expands the technical areas."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {portfolioData.education.map((edu, index) => (
            <Reveal key={edu.school} delay={index * 90}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex gap-4">
                    <div className="grid h-16 w-16 shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-background p-2">
                      <img
                        src={edu.logoUrl}
                        alt={`${edu.school} logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{edu.school}</h3>
                      <p className="mt-1 text-base font-semibold text-primary">{edu.degree}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                  </div>
                  <div className="sm:text-right">
                    <p className="text-sm font-semibold text-muted-foreground">{edu.period}</p>
                    {'gpa' in edu && edu.gpa && (
                      <p className="mt-1 text-lg font-black text-accent">cGPA {edu.gpa}</p>
                    )}
                  </div>
                </div>
                <ul className="mt-5 space-y-3">
                  {edu.highlights.map((highlight) => (
                    <li key={highlight} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
