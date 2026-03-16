'use client';

import { useState } from 'react';
import { portfolioData } from '@/lib/portfolio-data';
import ProjectCard from './project-card';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'AI' | 'Blockchain'>('All');

  const filteredProjects = selectedCategory === 'All'
    ? portfolioData.projects
    : portfolioData.projects.filter(p => p.category === selectedCategory);

  const categories = ['All', 'AI', 'Blockchain'] as const;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of my recent work spanning AI/ML and blockchain technologies. Each project showcases practical applications of cutting-edge technologies.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-card border border-border text-foreground hover:border-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="animate-in fade-in slide-in-from-bottom-4 duration-700 opacity-0"
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: 'forwards'
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                category={project.category}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
