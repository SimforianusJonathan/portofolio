'use client';

import { useMemo, useState } from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import ProjectCard from './project-card';
import Reveal from './reveal';
import SectionHeading from './section-heading';

const projectFilters = [
  { label: 'All', value: 'all' },
  { label: 'Software (Web & App)', value: 'software' },
  { label: 'Web3', value: 'web3' },
  { label: 'AI / ML', value: 'ai-ml' },
] as const;

type ProjectFilter = (typeof projectFilters)[number]['value'];

const projectFilterMap: Record<Exclude<ProjectFilter, 'all'>, string[]> = {
  software: ['CARLOK', 'SiRuang', 'Bandung Couture', 'EventSphere', 'ReWear+', 'NusaWallet'],
  web3: ['Creatifi', 'FLEC', 'AgentVeil'],
  'ai-ml': [
    'IDX Massive Multi-Asset Forecasting',
    'NusaWallet',
    'RAG Project',
    'Vacuum Cleaning Robot MDP',
    'Python Search Engine',
  ],
};

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('all');

  const filteredProjects = useMemo(() => {
    const projects =
      activeFilter === 'all'
        ? portfolioData.projects
        : portfolioData.projects.filter((project) =>
            projectFilterMap[activeFilter].includes(project.title),
          );

    return [...projects].sort((first, second) => {
      const firstHasPreview = 'previewImage' in first;
      const secondHasPreview = 'previewImage' in second;

      if (firstHasPreview === secondHasPreview) return 0;
      return firstHasPreview ? -1 : 1;
    });
  }, [activeFilter]);
  const projectsWithPreview = filteredProjects.filter((project) => 'previewImage' in project);
  const projectsWithoutPreview = filteredProjects.filter((project) => !('previewImage' in project));

  return (
    <section id="projects" className="section-band px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Projects"
          title="Selected work across AI, data, full-stack systems, and Web3."
          description="These projects show how I translate technical concepts into working systems, from search engines and forecasting pipelines to deployed web products, blockchain applications, and AI-assisted support tools."
        />

        <Reveal>
          <div className="mb-8 flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {projectFilters.map((filter) => {
                const isActive = activeFilter === filter.value;

                return (
                  <button
                    key={filter.value}
                    type="button"
                    onClick={() => setActiveFilter(filter.value)}
                    className={`rounded-md border px-4 py-2 text-sm font-semibold transition-colors ${
                      isActive
                        ? 'border-primary bg-primary text-primary-foreground'
                        : 'border-border bg-background text-muted-foreground hover:border-primary hover:text-foreground'
                    }`}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
            <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-muted-foreground">
              {filteredProjects.length} projects
            </span>
          </div>
        </Reveal>

        <div className="space-y-5">
          {projectsWithPreview.length > 0 && (
            <div className="grid auto-rows-fr gap-5 lg:grid-cols-2">
              {projectsWithPreview.map((project, index) => (
                <Reveal key={`${activeFilter}-${project.title}`} delay={index * 60}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          )}

          {projectsWithoutPreview.length > 0 && (
            <div className="grid gap-4 lg:grid-cols-2">
              {projectsWithoutPreview.map((project, index) => (
                <Reveal
                  key={`${activeFilter}-${project.title}`}
                  delay={(projectsWithPreview.length + index) * 60}
                >
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
