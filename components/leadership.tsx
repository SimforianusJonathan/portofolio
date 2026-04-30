import { portfolioData } from '@/lib/portfolio-data';
import Reveal from './reveal';
import SectionHeading from './section-heading';

export default function LeadershipSection() {
  return (
    <section id="leadership" className="section-band px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Leadership & Activities"
          title="Community work and organization experience."
          description="These roles round out the technical profile with collaboration, research discussion, and organization-level delivery."
        />

        <div className="grid gap-5 lg:grid-cols-2">
          {portfolioData.activities.map((activity, index) => (
            <Reveal key={activity.organization} delay={index * 90}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{activity.organization}</h3>
                    <p className="mt-1 text-base font-semibold text-primary">{activity.role}</p>
                    <p className="mt-1 text-sm text-muted-foreground">{activity.location}</p>
                  </div>
                  <p className="rounded-full border border-border bg-background px-3 py-1 text-sm font-semibold text-muted-foreground">
                    {activity.period}
                  </p>
                </div>
                <ul className="mt-5 space-y-3">
                  {activity.bullets.map((item) => (
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
