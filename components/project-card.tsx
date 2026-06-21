'use client';

import type { Project } from '@/lib/portfolio-data';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { ExternalLink } from 'lucide-react';

type ProjectCardProps = {
  project: Project;
};

const categoryStyles: Record<string, string> = {
  Product: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-200',
  'AI/RAG': 'border-indigo-400/25 bg-indigo-400/10 text-indigo-200',
  'Data/IR': 'border-sky-400/25 bg-sky-400/10 text-sky-200',
  'Deep Learning': 'border-fuchsia-400/25 bg-fuchsia-400/10 text-fuchsia-200',
  Web3: 'border-violet-400/25 bg-violet-400/10 text-violet-200',
  'Full-Stack': 'border-cyan-400/25 bg-cyan-400/10 text-cyan-200',
  Research: 'border-amber-400/25 bg-amber-400/10 text-amber-200',
  Backend: 'border-rose-400/25 bg-rose-400/10 text-rose-200',
  'Mobile/Web': 'border-teal-400/25 bg-teal-400/10 text-teal-200',
};

export default function ProjectCard({ project }: ProjectCardProps) {
  const previewImage = 'previewImage' in project ? project.previewImage : undefined;
  const previewImages =
    'previewImages' in project ? [...project.previewImages] : previewImage ? [previewImage] : [];
  const previewHref =
    project.links.find((link) => link.label === 'Live Demo')?.href ?? project.links[0]?.href;
  const hasPreview = previewImages.length > 0;

  if (!hasPreview) {
    return (
      <article className="group flex flex-col rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <span
            className={`rounded-full border px-3 py-1 text-xs font-semibold ${
              categoryStyles[project.category] ?? 'border-border bg-background text-muted-foreground'
            }`}
          >
            {project.category}
          </span>
          <span className="text-xs font-semibold text-muted-foreground">{project.period}</span>
        </div>

        <h3 className="text-xl font-black leading-tight text-foreground transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mt-2 text-sm font-semibold text-accent">{project.subtitle}</p>
        <p className="mt-1 text-xs uppercase tracking-[0.16em] text-muted-foreground">
          {project.context}
        </p>

        <p className="mt-4 text-sm leading-6 text-muted-foreground">{project.bullets[0]}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-background px-2.5 py-1 text-xs font-medium text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.links.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-3">
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
        )}
      </article>
    );
  }

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_28px_80px_rgba(20,184,166,0.12)]">
      {previewImages.length === 1 && previewHref && (
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

      {previewImages.length === 1 && !previewHref && (
        <div className="block border-b border-border bg-background">
          <div className="aspect-[16/9] overflow-hidden">
            <img
              src={previewImages[0]}
              alt={`${project.title} preview`}
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
        </div>
      )}

      {previewImages.length > 1 && (
        <div className="border-b border-border bg-background">
          <Carousel opts={{ loop: true }} className="w-full">
            <CarouselContent className="-ml-0">
              {previewImages.map((image, index) => (
                <CarouselItem key={image} className="pl-0">
                  <div className="aspect-[16/9] overflow-hidden">
                    {previewHref ? (
                      <a
                        href={previewHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block h-full w-full"
                        aria-label={`Open ${project.title} preview link`}
                      >
                        <img
                          src={image}
                          alt={`${project.title} preview ${index + 1}`}
                          className="h-full w-full object-cover object-top"
                          loading="lazy"
                        />
                      </a>
                    ) : (
                    <img
                      src={image}
                      alt={`${project.title} preview ${index + 1}`}
                      className="h-full w-full object-cover object-top"
                      loading="lazy"
                    />
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-3 border-border bg-background/85 text-foreground backdrop-blur hover:bg-background" />
            <CarouselNext className="right-3 border-border bg-background/85 text-foreground backdrop-blur hover:bg-background" />
          </Carousel>
        </div>
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
