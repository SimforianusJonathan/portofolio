'use client';

import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  category: 'AI' | 'Blockchain' | 'Web Development';
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  category,
  link
}) => {
  const getCategoryColor = (cat: string) => {
    switch (cat) {
      case 'AI':
        return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'Blockchain':
        return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default:
        return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
    }
  };

  return (
    <div className="group h-full flex flex-col bg-card border border-border rounded-lg p-6 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20">
      {/* Category Badge */}
      <div className={`inline-flex w-fit px-3 py-1 rounded-full text-xs font-semibold border mb-4 ${getCategoryColor(category)}`}>
        {category}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-muted-foreground text-sm mb-6 flex-grow leading-relaxed">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 bg-background border border-border text-xs text-muted-foreground rounded-full hover:border-primary hover:text-primary transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary hover:text-accent font-semibold text-sm group/link transition-colors"
      >
        View Project
        <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

export default ProjectCard;
