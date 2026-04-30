import { portfolioData } from '@/lib/portfolio-data';
import Reveal from './reveal';
import SectionHeading from './section-heading';

export default function AdditionalSkillsSection() {
  const groups = Object.entries(portfolioData.additionalSkills);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Additional Skills"
          title="Extra tools, languages, and proficiency details."
          description="A compact view of the supporting skills from the CV, including programming languages, design tools, productivity tools, and English proficiency."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {groups.map(([group, items], index) => (
            <Reveal key={group} delay={index * 80}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                <h3 className="mb-5 text-lg font-bold text-foreground">{group}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
