import { portfolioData } from '@/lib/portfolio-data';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <footer className="border-t border-border bg-background px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <Link href="/" className="inline-flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/30 bg-primary/10 font-bold text-primary">
              {portfolioData.initials}
            </span>
            <span className="font-bold text-foreground">{portfolioData.name}</span>
          </Link>
          <p className="mt-2 text-sm text-muted-foreground">{portfolioData.title}</p>
        </div>

        <div className="flex flex-wrap gap-3">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          © {currentYear} {portfolioData.name}.
        </p>
      </div>
    </footer>
  );
}
