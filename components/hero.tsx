'use client';

import { portfolioData } from '@/lib/portfolio-data';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-sm text-muted-foreground">Available for opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
          Building the future with{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
            AI & Blockchain
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
          {portfolioData.about}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/50 transition-all duration-300"
          >
            View My Work
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <a
            href={`mailto:${portfolioData.email}`}
            className="inline-flex items-center justify-center px-8 py-4 bg-card border border-border text-foreground rounded-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
          <a
            href={portfolioData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium hover:underline underline-offset-4"
          >
            GitHub
          </a>
          <a
            href={portfolioData.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium hover:underline underline-offset-4"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
