import { portfolioData } from '@/lib/portfolio-data';
import Reveal from './reveal';
import SectionHeading from './section-heading';

export default function AchievementsSection() {
  return (
    <section id="achievements" className="section-band px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Achievements"
          title="Recognitions that reflect consistent academic and product execution."
          description="These achievements highlight scholarship selection, national competition results, and validated product ideas across sustainability, fintech, Web3, and AI-driven innovation."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {portfolioData.achievements.map((achievement, index) => (
            <Reveal key={achievement.title} delay={index * 80}>
              <article className="h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                <div className="flex flex-col gap-5 sm:flex-row">
                  <div className="grid h-40 w-40 shrink-0 place-items-center overflow-hidden rounded-xl border border-border bg-background p-4">
                    <img
                      src={achievement.imageUrl}
                      alt={`${achievement.title} logo`}
                      className="max-h-full max-w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div>
                    <p className="mb-3 inline-flex rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                      {achievement.context}
                    </p>
                    <h3 className="text-2xl font-bold leading-tight text-foreground">
                      {achievement.title}
                    </h3>
                    <p className="mt-4 text-sm leading-6 text-muted-foreground">
                      {achievement.description}
                    </p>
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
