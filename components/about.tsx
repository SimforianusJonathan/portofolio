import { portfolioData } from '@/lib/portfolio-data';
import { Brain, Code2, Database, Network, ShieldCheck } from 'lucide-react';
import Reveal from './reveal';
import SectionHeading from './section-heading';

const strengths = [
  {
    icon: Database,
    title: 'Data-first engineering',
    description: 'Comfortable moving from data processing and evaluation to usable software workflows.',
  },
  {
    icon: Brain,
    title: 'Learning systems',
    description: 'Hands-on work in machine learning, deep learning, reinforcement learning, and IR.',
  },
  {
    icon: Code2,
    title: 'Full-stack delivery',
    description: 'Experience across Django, Spring Boot, Next.js, Flutter, PostgreSQL, Docker, and Kubernetes.',
  },
  {
    icon: ShieldCheck,
    title: 'Trustless systems',
    description: 'Built Web3 prototypes involving escrow, milestone validation, wallet flows, and verifiers.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="section-band px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="A CS student building across data, intelligent systems, and production software."
          description="My work spans research-oriented academic projects, competition prototypes, and team software systems. I care about understanding the problem deeply, then building something concrete enough to test."
        />

        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal direction="left">
            <div className="h-full rounded-2xl border border-border bg-card p-6 sm:p-8">
              <div className="mb-6 flex items-center gap-4">
                <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary/10 text-primary">
                  <Network size={28} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Profile</p>
                  <h3 className="text-xl font-bold text-foreground">Universitas Indonesia</h3>
                </div>
              </div>
              <p className="text-base leading-8 text-muted-foreground">{portfolioData.summary}</p>
            </div>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item, index) => {
              const Icon = item.icon;
              return (
                <Reveal key={item.title} delay={index * 90}>
                  <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_24px_70px_rgba(20,184,166,0.12)]">
                    <div className="mb-5 grid h-11 w-11 place-items-center rounded-lg bg-background text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
