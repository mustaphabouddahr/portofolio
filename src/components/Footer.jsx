// src/components/Footer.jsx
import {
  ArrowUp,
  Instagram,
  Linkedin,
  Github,
  Coffee,
  DollarSign,
} from "lucide-react";

const socials = [
  {
    href: "https://github.com/mustaphabouddahr",
    icon: Github,
    label: "GitHub",
  },
  {
    href: "https://www.instagram.com/mustapha_bouddahr",
    icon: Instagram,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/mustapha-bouddahr-830787338/",
    icon: Linkedin,
    label: "LinkedIn",
  },
  {
    href: "https://ko-fi.com/mustaphabouddahr",
    icon: Coffee,
    label: "Ko‑fi",
  },
  {
    href: "https://www.paypal.me/mustaphabouddahr",
    icon: DollarSign,
    label: "PayPal",
  },
];

export const Footer = () => (
  <footer className="py-12 px-4 bg-card border-t border-border mt-12">
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-4 md:mb-0">
        {socials.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-muted/30 hover:bg-muted/50 transition"
            aria-label={label}
          >
            <Icon className="h-5 w-5 text-foreground" />
          </a>
        ))}
      </div>

      <div className="flex items-center space-x-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} MustaphaBouddahr.dev
        </p>
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </div>
  </footer>
);
