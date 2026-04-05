import { Link } from "react-router-dom";
import { ExternalLink, Code, CheckCircle } from "lucide-react";

import certificateGenerator from "@/assets/projects/certificateGenerator.png";
import fuji from "@/assets/projects/fuji.png";
import registry from "@/assets/projects/registry.png";
import nbat from "@/assets/projects/nbat.jpg";
import court from "@/assets/projects/court.jpg";
import mollmaneta from "@/assets/projects/mollmaneta.png";

const projects = [
  {
    title: "NBAT",
    desc: "P2P rental platform built in a team of 3. OAuth2, Stripe payments, AI chatbot, deployed on AWS.",
    img: nbat,
    demo: false,
    repo: "https://github.com/orgs/Nbat-Project-Final/repositories",
    tech: ["Spring Boot", "Angular", "PostgreSQL", "Docker", "AWS"],
    impact: "Delivered end-to-end in 3 months",
  },
  {
    title: "Registry",
    desc: "Document Management System with authentication, file attachments, CSV export with PHPUnit tests. CI/CD pipline.",
    img: registry,
    demo: false,
    repo: "https://github.com/mustaphabouddahr/registry",
    tech: ["Laravel", "MySQL", "Docker", "GitHub Actions", "AWS EC2"],
    impact: "Fully automated CI/CD pipeline with tests",
  },
  {
    title: "Mollmaneta",
    desc: "Gaming Store - Bilingual FR/AR e-commerce store. RTL/LTR support and WhatsApp order integration.",
    img: mollmaneta,
    demo: "https://mollmaneta.com",
    repo: false,
    tech: ["React", "TypeScript", "TailwindCSS", "i18next"],
    impact: "Live and generating real orders",
  },
  {
    title: "Court of Appeal",
    desc: "Two internal apps built during my internship. Leave management with Arabic PDF generation and document archiving.",
    img: court,
    demo: false,
    repo: false,
    tech: ["Internship", "Laravel", "MySQL", "PHP"],
    impact: "Used daily by real employees",
  },
  {
    title: "Fuji – Note Taking",
    desc: "Fuji include custom notes colors, tags, search, theming, authentication, and real-time updates.",
    img: fuji,
    demo: "https://fuji.laravel.cloud/",
    repo: "https://github.com/mustaphabouddahr/Fuji",
    tech: ["Laravel", "Livewire", "Mongodb", "Alpine.js"],
    impact: "Search and filter through notes easily",
  },
  {
    title: "Certificate Generator",
    desc: "Web app that generates professional PDF certificates instantly. Built for educational institutions and businesses.",
    img: certificateGenerator,
    demo: "https://certificate-generator.laravel.cloud/",
    repo: "https://github.com/mustaphabouddahr/Certificate-Generater",
    tech: ["Laravel", "PHP", "PDF Generation", "Bootstrap"],
    impact: "Automates certificate creation",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-12 sm:py-24 px-0 sm:px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Real projects that solve real problems. Each one built to deliver
          results for businesses like yours.
        </p>

        <div className="overflow-hidden py-4">
          <div className="flex gap-8 scroll-container py-2">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="w-[330px] flex flex-col sm:w-[350px] bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex-shrink-0"
              >
                <div className="w-full h-48 overflow-hidden rounded-t-lg">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-1 flex-col justify-between">
                  <div className="h-full flex-1">
                    <h3 className="font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-3 text-sm leading-relaxed">
                      {project.desc}
                    </p>
                    {project.impact && (
                      <div className="flex items-center gap-2 mb-3">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-sm font-medium text-green-600">
                          {project.impact}
                        </span>
                      </div>
                    )}
                    <div className="flex flex-wrap gap-2 mb-4 max-h-16 overflow-y-auto">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-full whitespace-nowrap"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Link
                      to={
                        project.demo ? project.demo : `/demo/${project.title}`
                      }
                      className="flex items-center space-x-1 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition text-sm flex-1 justify-center"
                    >
                      <ExternalLink size={16} />
                      <span>View Demo</span>
                    </Link>

                    <Link
                      to={
                        project.repo ? project.repo : `/code/${project.title}`
                      }
                      rel="noopener noreferrer"
                      className="flex items-center cursor-pointer space-x-1 px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition text-sm"
                    >
                      <Code size={16} />
                      <span>Code</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-4 sm:mt-12">
          <a
            href="https://github.com/mustaphabouddahr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300"
          >
            <Code className="h-5 w-5 mr-2" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
