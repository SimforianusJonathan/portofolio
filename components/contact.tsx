import { portfolioData } from '@/lib/portfolio-data';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Reveal from './reveal';
import SectionHeading from './section-heading';

const contactItems = [
  {
    label: 'Email',
    value: portfolioData.email,
    href: `mailto:${portfolioData.email}`,
    icon: Mail,
  },
  {
    label: 'Phone',
    value: portfolioData.phone,
    href: `tel:${portfolioData.phone.replaceAll(' ', '')}`,
    icon: Phone,
  },
  {
    label: 'GitHub',
    value: 'SimforianusJonathan',
    href: portfolioData.github,
    icon: Github,
  },
  {
    label: 'LinkedIn',
    value: 'simforianus-jonathan-flonas-harefa',
    href: portfolioData.linkedin,
    icon: Linkedin,
  },
];

export default function ContactSection() {
  return (
    <section id="contact" className="section-band px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let us connect around engineering, research, or internship opportunities."
        />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {contactItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.label} delay={index * 70}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group block h-full rounded-2xl border border-border bg-card p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-primary"
                >
                  <div className="mx-auto mb-5 grid h-12 w-12 place-items-center rounded-xl bg-background text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon size={22} />
                  </div>
                  <h3 className="font-bold text-foreground">{item.label}</h3>
                  <p className="mt-2 break-words text-sm leading-6 text-muted-foreground group-hover:text-foreground">
                    {item.value}
                  </p>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={220}>
          <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-border bg-card p-6 text-center">
            <MapPin className="shrink-0 text-primary" size={20} />
            <p className="text-sm font-semibold text-foreground">
              {portfolioData.name} - {portfolioData.location}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
