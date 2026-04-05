import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Photography", href: "#photography" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      let current = "#hero";
      navItems.forEach(({ href }) => {
        const el = document.querySelector(href);
        if (el && el.getBoundingClientRect().top <= 80) {
          current = href;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={cn(
          "fixed top-0 w-full z-40 transition-all duration-300",
          isScrolled
            ? "py-2 bg-background/80 backdrop-blur-lg shadow-sm border-b border-border"
            : "py-4",
        )}
      >
        <div className="container flex items-center justify-between">
          <a
            href="#hero"
            className="text-xl font-bold text-gradient select-none"
          >
            Mustapha Bouddahr
          </a>

          {/* Desktop */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "relative text-sm font-medium transition-colors duration-300",
                  activeSection === item.href
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary",
                )}
              >
                {item.name}
                {activeSection === item.href && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
                )}
              </a>
            ))}
          </div>

          {/* Theme + Mobile Toggle */}
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen((v) => !v)}
              className="md:hidden p-2 text-foreground"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE PANEL */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-50 flex flex-col items-center justify-center md:hidden transition-opacity duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 p-2 text-foreground z-60"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>

        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className={cn(
              "relative mb-6 text-2xl font-medium transition-colors duration-300",
              activeSection === item.href
                ? "text-primary"
                : "text-foreground/90 hover:text-primary",
            )}
          >
            {item.name}
            {activeSection === item.href && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary" />
            )}
          </a>
        ))}
      </div>
    </>
  );
};
