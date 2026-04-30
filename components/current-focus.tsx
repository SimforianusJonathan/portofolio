import { portfolioData } from '@/lib/portfolio-data';
import { Sparkles } from 'lucide-react';
import Reveal from './reveal';
import SectionHeading from './section-heading';

export default function CurrentFocusSection() {
  return (
    <section id="focus" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Current Focus"
          title="The technical areas I am actively sharpening."
          description="These areas connect the strongest parts of my CV: data-heavy systems, applied AI, search, full-stack delivery, and Web3 product experiments."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {portfolioData.focus.map((focus, index) => (
            <Reveal key={focus.title} delay={index * 80}>
              <article className="focus-card group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
                <div className="relative z-10">
                  <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-lg bg-background text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Sparkles size={20} />
                  </div>
                  <h3 className="text-lg font-bold leading-tight text-foreground">{focus.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted-foreground">{focus.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
