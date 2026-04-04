import { Link } from "react-router-dom";
import { ExternalLink, Code, CheckCircle } from "lucide-react";

import certificateGenerator from "@/assets/projects/certificateGenerator.png";
import mustproductmarket from "@/assets/projects/mustproductmarket.png";
import adviceApp from "@/assets/projects/adviceApp.png";
import currencyConverter from "@/assets/projects/currencyConverter.png";
import dreamscapejourney from "@/assets/projects/dreamscapejourney.png";
import airmust from "@/assets/projects/airmust.png";
import devjobs from "@/assets/projects/devjobs.png";
import fuji from "@/assets/projects/fuji.png";

const projects = [
  {
    title: "Fuji – Modern Note Taking App",
    desc: "Fuji include custom notes colors, tags, search, theming, authentication, and real-time updates.",
    img: fuji,
    demo: "https://fuji.laravel.cloud/",
    repo: "https://github.com/Must01/Fuji",
    tech: ["Laravel", "Livewire", "Mongodb", "Alpine.js"],
    impact: "Search and filter through notes easily",
  },
  {
    title: "Certificate Generator",
    desc: "Web app that generates professional PDF certificates instantly. Built for educational institutions and businesses.",
    img: certificateGenerator,
    demo: "https://certificate-generator.laravel.cloud/",
    repo: "https://github.com/Must01/Certificate-Generater.git",
    tech: ["Laravel", "PHP", "PDF Generation", "Bootstrap"],
    impact: "Automates certificate creation",
  },
  {
    title: "Dream Scape Journey",
    desc: "Dream Scape Journey is a Front-End React-based web app that allows users to explore and book dream vacations.",
    img: dreamscapejourney,
    demo: "https://dreamscapejourney.netlify.app/",
    repo: "https://github.com/Must01/dsj-frontend",
    tech: ["React", "JavaScript", "API Integration", "Responsive"],
    impact: "Enhances travel planning",
  },
  {
    title: "DevJobs",
    desc: "DevJobs is a Laravel 12-based web application for posting, filtering, and discovering job opportunities. Employers can showcase their companies, and job seekers can browse by tags ",
    img: devjobs,
    demo: "",
    repo: "https://github.com/Must01/DevJobs",
    tech: ["React", "JavaScript", "API Integration", "Responsive"],
    impact: "Connects talent with opportunities",
  },
  {
    title: "AirMust Booking App",
    desc: "AirMust: A Booking Application AirMust is a full-stack booking application built using the MERN stack",
    img: airmust,
    demo: "",
    repo: "https://github.com/Must01/AirMust-Booking-app",
    tech: ["MERN", "MongoDB", "Express", "React", "Node.js"],
    impact: "Rooms booking made easy",
  },
  {
    title: "MBAdvice App",
    desc: "The MBAdvice App is a React-based web app that delivers random advice using the Advice API.",
    img: adviceApp,
    demo: "https://mbadvice.netlify.app/",
    repo: "https://github.com/Must01/Advice-React-App",
    tech: ["React", "JavaScript", "API Integration", "Responsive"],
    impact: "Provides daily inspiration",
  },
  {
    title: "Currency Converter",
    desc: "A simple web app for converting currencies in real-time.",
    img: currencyConverter,
    demo: "https://mbcurrencyconverter.netlify.app/",
    repo: "https://github.com/Must01/currency_converter",
    tech: ["React", "JavaScript", "API Integration", "Responsive"],
    impact: "Facilitates currency exchange",
  },
  {
    title: "Must Product Market",
    desc: "Must Product Market is a web app built with the MERN stack for managing products.",
    img: mustproductmarket,
    demo: null,
    repo: "https://github.com/Must01/Must-Product-Market",
    tech: ["MERN", "MongoDB", "Express", "React", "Node.js"],
    impact: "Streamlines product management",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          My <span className="text-primary">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Real projects that solve real problems. Each one built to deliver
          results for businesses like yours.
        </p>

        <div className="mb-12 overflow-hidden py-4">
          <div className="flex gap-8 scroll-container py-2">
            {projects.map((project, idx) => {
              // If demo is truthy use external link, otherwise point to our placeholder route
              const hasDemo = Boolean(project.demo);
              const demoHref = hasDemo
                ? project.demo
                : `/demo/${encodeURIComponent(project.title)}`;

              return (
                <div
                  key={idx}
                  className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex-shrink-0"
                  style={{ width: "350px" }}
                >
                  <div className="w-full h-48 overflow-hidden rounded-t-lg">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div
                    className="p-6 flex flex-col justify-between"
                    style={{ minHeight: "280px" }}
                  >
                    <div className="flex-grow">
                      <h3 className="font-semibold text-xl mb-2">
                        {project.title}
                      </h3>
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
                      {hasDemo ? (
                        <a
                          href={demoHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition text-sm flex-1 justify-center"
                        >
                          <ExternalLink size={16} />
                          <span>Live Demo</span>
                        </a>
                      ) : (
                        <Link
                          to={demoHref}
                          className="flex items-center space-x-1 px-4 py-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition text-sm flex-1 justify-center"
                        >
                          <ExternalLink size={16} />
                          <span>View Demo</span>
                        </Link>
                      )}

                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-1 px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 transition text-sm"
                      >
                        <Code size={16} />
                        <span>Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Must01"
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
