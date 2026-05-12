import type { Project } from '@/lib/portfolio-data';
import { ExternalLink } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
};

const categoryStyles: Record<string, string> = {
  Product: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-200',
  'Data/IR': 'border-sky-400/25 bg-sky-400/10 text-sky-200',
  Web3: 'border-violet-400/25 bg-violet-400/10 text-violet-200',
  'Full-Stack': 'border-cyan-400/25 bg-cyan-400/10 text-cyan-200',
  Research: 'border-amber-400/25 bg-amber-400/10 text-amber-200',
  Backend: 'border-rose-400/25 bg-rose-400/10 text-rose-200',
  'Mobile/Web': 'border-teal-400/25 bg-teal-400/10 text-teal-200',
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const previewImage = 'previewImage' in project ? project.previewImage : undefined;
  const previewHref =
    project.links.find((link) => link.label === 'Live Demo')?.href ?? project.links[0]?.href;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_28px_80px_rgba(20,184,166,0.12)]">
      {previewImage && (
        <a
          href={previewHref}
          target="_blank"
          rel="noopener noreferrer"
          className="block border-b border-border bg-background"
          aria-label={`Open ${project.title} live preview`}
        >
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={previewImage}
              alt={`${project.title} website preview`}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </a>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${
              categoryStyles[project.category] ?? 'border-border bg-background text-muted-foreground'
            }`}
          >
            {project.category}
          </span>
          <span className="text-xs font-semibold text-muted-foreground">{project.period}</span>
        </div>

        <div className="mb-4">
          <h3 className="text-2xl font-black leading-tight text-foreground transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <p className="mt-2 text-sm font-semibold text-accent">{project.subtitle}</p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
            {project.context}
          </p>
        </div>

        <ul className="mb-6 space-y-3">
          {project.bullets.map((item) => (
            <li key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto">
          <div className="mb-5 flex flex-wrap gap-2">
            {project.stack.map((tag) => (
              <span
                key={tag}
                className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.links.map((link) => (
              <a
                key={`${project.title}-${link.label}`}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 text-xs font-semibold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {link.label}
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
