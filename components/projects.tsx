import { portfolioData } from '@/lib/portfolio-data';
import ProjectCard from './project-card';
import Reveal from './reveal';
import SectionHeading from './section-heading';

export default function ProjectsSection() {
  const activeWebsiteProjects = portfolioData.projects.filter((project) => 'previewImage' in project);
  const otherProjects = portfolioData.projects.filter((project) => !('previewImage' in project));

  return (
    <section id="projects" className="section-band px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Selected Projects"
          title="Projects mapped from the CV into richer portfolio stories."
          description="Each card keeps the context, stack, links, and concrete contribution bullets from the LaTeX CV so recruiters can scan both breadth and impact."
        />

        <div className="space-y-10">
          <div>
            <Reveal>
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Active Website Previews</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Deployed projects with prepared screenshots and live links.
                  </p>
                </div>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {activeWebsiteProjects.length} active
                </span>
              </div>
            </Reveal>

            <div className="grid auto-rows-fr gap-5 lg:grid-cols-2">
              {activeWebsiteProjects.map((project, index) => (
                <Reveal key={project.title} delay={index * 60}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal>
              <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <h3 className="text-xl font-bold text-foreground">Other Projects</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Research, product, backend, and coursework projects without website screenshots.
                  </p>
                </div>
                <span className="rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-muted-foreground">
                  {otherProjects.length} projects
                </span>
              </div>
            </Reveal>

            <div className="grid auto-rows-fr gap-5 lg:grid-cols-2">
              {otherProjects.map((project, index) => (
                <Reveal key={project.title} delay={index * 60}>
                  <ProjectCard project={project} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
