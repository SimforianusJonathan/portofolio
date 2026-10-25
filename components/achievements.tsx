import { portfolioData } from '@/lib/portfolio-data';
import Reveal from './reveal';
import SectionHeading from './section-heading';
import { ExternalLink, Trophy } from 'lucide-react';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-band px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognition across applied AI, product innovation, and student development."
          description="National hackathon results, scholarship selection, and acceptance into the Apple Developer Academy Cohort 2027 reflect my work across genomics, manufacturing, mobility, sustainability, and Web3."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {portfolioData.achievements.map((achievement, index) => (
            <Reveal key={achievement.title} delay={index * 80}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                <div className="flex flex-col gap-5 sm:flex-row md:flex-col xl:flex-row">
                  {'imageUrl' in achievement ? (
                    <div className="grid h-36 w-full shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-background p-3 sm:w-36 md:w-full xl:w-36">
                      <img
                        src={achievement.imageUrl}
                        alt={`${achievement.title} artwork`}
                        className="max-h-full max-w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-border bg-background text-primary">
                      <Trophy size={24} aria-hidden="true" />
                    </div>
                  )}
                  <div className="min-w-0 flex-1 break-words">
                    <p className="mb-3 inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                      {achievement.context}
                    </p>
                    <h3 className="text-2xl font-bold leading-tight text-foreground">
                      {achievement.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                      {achievement.description}
                    </p>
                    {'links' in achievement && (
                      <div className="mt-4 flex flex-wrap gap-3">
                        {achievement.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                          >
                            {link.label}
                            <ExternalLink size={14} aria-hidden="true" />
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
