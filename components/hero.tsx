import { portfolioData } from '@/lib/portfolio-data';
import { ArrowRight, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import Reveal from './reveal';

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-4 pb-20 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pb-28">
      <div className="hero-grid absolute inset-0 -z-20" />
      <div className="ambient-sweep absolute inset-0 -z-10" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <div>
          <Reveal>
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-primary/25 bg-card/70 px-4 py-2 text-sm text-muted-foreground shadow-[0_0_40px_rgba(20,184,166,0.12)] backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_18px_var(--accent)]" />
              <span className="truncate">{portfolioData.availability}</span>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
              {portfolioData.location}
            </p>
            <h1 className="max-w-5xl text-balance text-4xl font-black leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
              {portfolioData.name}
            </h1>
            <p className="mt-5 max-w-3xl text-balance text-2xl font-semibold leading-tight text-primary sm:text-3xl">
              {portfolioData.title}
            </p>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">
              {portfolioData.summary}
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-[0_18px_60px_rgba(34,211,238,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90"
              >
                View Selected Projects
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-6 py-3 font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary"
              >
                <Mail size={18} />
                Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <a
                href={portfolioData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Github size={17} />
                GitHub
              </a>
              <a
                href={portfolioData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 transition-colors hover:text-primary"
              >
                <Linkedin size={17} />
                LinkedIn
              </a>
              <span className="inline-flex items-center gap-2">
                <MapPin size={17} />
                {portfolioData.location}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal direction="scale" delay={180}>
          <div className="relative">
            <div className="portfolio-visual rounded-2xl border border-border bg-card/70 p-5 shadow-[0_28px_90px_rgba(0,0,0,0.34)] backdrop-blur-xl">
              <div className="mb-5 flex items-start justify-between gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Portfolio Snapshot
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-foreground">Numbers and profile at a glance</h2>
                </div>
                <Sparkles className="shrink-0 text-accent" size={24} />
              </div>

              <div className="overflow-hidden rounded-2xl border border-border bg-background/70">
                <img
                  src={portfolioData.avatarUrl}
                  alt={portfolioData.name}
                  className="aspect-[4/5] w-full object-cover object-top"
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                {portfolioData.quickFacts.map((fact, index) => (
                  <div
                    key={fact.label}
                    className="metric-card rounded-xl border border-border bg-background/70 p-4"
                    style={{ animationDelay: `${index * 140}ms` }}
                  >
                    <p className="text-3xl font-black text-foreground">{fact.value}</p>
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{fact.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
