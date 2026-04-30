'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { useState } from 'react';
import ProjectCard from './project-card';
import Reveal from './reveal';
import SectionHeading from './section-heading';

type Category = 'All' | (typeof portfolioData.projects)[number]['category'];

export default function ProjectsSection() {
  const categories = [
    'All',
    ...Array.from(new Set(portfolioData.projects.map((project) => project.category))),
  ] as Category[];

  const [selectedCategory, setSelectedCategory] =
    useState<Category>('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? portfolioData.projects
      : portfolioData.projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="section-band px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Projects"
          title="Projects mapped from the CV into richer portfolio stories."
          description="Each card keeps the context, stack, links, and concrete contribution bullets from the LaTeX CV so recruiters can scan both breadth and impact."
        />

        <Reveal>
          <div className="mb-10 flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap rounded-lg border px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'border-primary bg-primary text-primary-foreground shadow-[0_12px_40px_rgba(20,184,166,0.18)]'
                    : 'border-border bg-card text-muted-foreground hover:border-primary hover:text-foreground'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Reveal key={project.title} delay={index * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
