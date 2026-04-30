import { portfolioData } from '@/lib/portfolio-data';
import Reveal from './reveal';
import SectionHeading from './section-heading';

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Professional Experience"
          title="Teaching, research, and academic roles at Fasilkom UI."
          description="The experience section focuses on roles from the CV that show research direction, academic responsibility, and communication with students."
        />

        <div className="relative space-y-5">
          <div className="absolute left-4 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-primary via-border to-transparent md:block" />
          {portfolioData.experience.map((exp, index) => (
            <Reveal key={`${exp.role}-${exp.period}`} delay={index * 90}>
              <article className="relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary md:ml-12">
                <span className="absolute -left-[3.15rem] top-8 hidden h-4 w-4 rounded-full border-4 border-background bg-primary md:block" />
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{exp.role}</h3>
                    <p className="mt-1 text-base font-semibold text-primary">{exp.organization}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{exp.location}</p>
                  </div>
                  <p className="rounded-full border border-border bg-background px-3 py-1 text-sm font-semibold text-muted-foreground">
                    {exp.period}
                  </p>
                </div>
                <ul className="mt-5 space-y-3">
                  {exp.bullets.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
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
