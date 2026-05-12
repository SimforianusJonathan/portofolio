import { portfolioData } from '@/lib/portfolio-data';
import Reveal from './reveal';
import SectionHeading from './section-heading';

const skillIconItems = [
  { name: 'Python', icon: 'py', category: 'Data' },
  { name: 'JavaScript', icon: 'js', category: 'Language' },
  { name: 'TypeScript', icon: 'ts', category: 'Language' },
  { name: 'C', icon: 'c', category: 'Language' },
  { name: 'Go', icon: 'go', category: 'Language' },
  { name: 'Rust', icon: 'rust', category: 'Language' },
  { name: 'MATLAB', icon: 'matlab', category: 'Language' },
  { name: 'Octave', icon: 'octave', category: 'Language' },
  { name: 'Scikit-learn', icon: 'sklearn', category: 'ML' },
  { name: 'Java', icon: 'java', category: 'Backend' },
  { name: 'Spring Boot', icon: 'spring', category: 'Backend' },
  { name: 'Django', icon: 'django', category: 'Backend' },
  { name: 'Node.js', icon: 'nodejs', category: 'Backend' },
  { name: 'PostgreSQL', icon: 'postgres', category: 'Database' },
  { name: 'SQLite', icon: 'sqlite', category: 'Database' },
  { name: 'React', icon: 'react', category: 'Frontend' },
  { name: 'Next.js', icon: 'nextjs', category: 'Frontend' },
  { name: 'Vite', icon: 'vite', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: 'tailwind', category: 'Frontend' },
  { name: 'Flutter', icon: 'flutter', category: 'Mobile' },
  { name: 'Git', icon: 'git', category: 'Tools' },
  { name: 'Figma', icon: 'figma', category: 'Design' },
  { name: 'Overleaf', icon: 'latex', category: 'Writing' },
  { name: 'IntelliJ IDEA', icon: 'idea', category: 'IDE' },
  { name: 'Debian', icon: 'debian', category: 'Linux' },
  { name: 'Docker', icon: 'docker', category: 'DevOps' },
  { name: 'Kubernetes', icon: 'kubernetes', category: 'DevOps' },
  { name: 'Vercel', icon: 'vercel', category: 'Cloud' },
  { name: 'Supabase', icon: 'supabase', category: 'Cloud' },
  { name: 'AWS', icon: 'aws', category: 'Cloud' },
  { name: 'Prometheus', icon: 'prometheus', category: 'Monitoring' },
  { name: 'Solidity', icon: 'solidity', category: 'Web3' },
] as const;

export default function SkillsSection() {
  const skillCategories = Object.entries(portfolioData.skills);
  const carouselItems = [...skillIconItems, ...skillIconItems];

  return (
    <section id="skills" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Technical Skills"
          title="A practical toolkit for research prototypes and deployed applications."
          description="The stack is intentionally broad because the projects involve data work, backend systems, frontend products, deployments, and smart-contract integrations."
        />

        <Reveal delay={40}>
          <div className="mb-8 overflow-hidden rounded-2xl border border-border bg-card/80 p-4 shadow-[0_22px_80px_rgba(0,0,0,0.22)] sm:p-5">
            <div className="skill-icon-carousel">
              <div className="skill-icon-track">
                {carouselItems.map((skill, index) => (
                  <div
                    key={`${skill.name}-${index}`}
                    className="skill-icon-card group"
                    aria-hidden={index >= skillIconItems.length}
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${skill.icon}&theme=light`}
                      alt={`${skill.name} icon`}
                      className="h-12 w-12"
                      loading="lazy"
                    />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-bold text-foreground">{skill.name}</p>
                      <p className="text-xs text-muted-foreground group-hover:text-primary">
                        {skill.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid auto-rows-fr gap-4 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map(([category, skills], index) => (
            <Reveal key={category} delay={index * 70}>
              <div className="flex h-full min-h-[12.5rem] flex-col rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-1 hover:border-primary sm:p-5">
                <h3 className="mb-3 text-base font-bold text-foreground">{category}</h3>
                <div className="flex flex-1 content-start flex-wrap gap-1.5">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-border bg-background px-2.5 py-1 text-[11px] font-medium leading-5 text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
