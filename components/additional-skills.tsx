import { portfolioData } from '@/lib/portfolio-data';
import Reveal from './reveal';
import SectionHeading from './section-heading';

export default function AdditionalSkillsSection() {
  const skillGroups = Object.entries(portfolioData.additionalSkills);

  return (
    <section id="additional-skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Additional Skills"
          title="Supporting tools, languages, and practical working knowledge."
          description="A compact view of the extra technologies and non-project skills that round out the technical profile."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map(([category, skills], index) => (
            <Reveal key={category} delay={index * 70}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                <h3 className="text-lg font-bold text-foreground">{category}</h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
