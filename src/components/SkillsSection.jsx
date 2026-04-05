import { useState, useEffect } from "react";

const skills = [
  {
    name: "React",
    category: "frontend",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Laravel",
    category: "backend",
    icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Laravel-Light.svg",
  },
  {
    name: "Angular",
    category: "frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg",
  },
  {
    name: "Spring Boot",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },

  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "PHP",
    category: "backend",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg",
  },
  {
    name: "Java",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "Node.js",
    category: "backend",
    icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NodeJS-Dark.svg",
  },
  {
    name: "Python",
    category: "backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "MySQL",
    category: "database",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
  },
  {
    name: "PostgreSQL",
    category: "database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    category: "database",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "SQLite",
    category: "database",
    icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
  },
  {
    name: "Docker",
    category: "devops",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  },
  {
    name: "AWS",
    category: "devops",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "GitHub Actions",
    category: "devops",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
  },
  {
    name: "Git",
    category: "devops",
    icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
  },
  {
    name: "GitHub",
    category: "devops",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  },
  {
    name: "VS Code",
    category: "tools",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
  },
  {
    name: "Figma",
    category: "tools",
    icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
  },
  {
    name: "Postman",
    category: "tools",
    icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
  },
  {
    name: "TablePlus",
    category: "tools",
    icon: "https://avatars.githubusercontent.com/u/29408238?s=200&v=4",
  },
  {
    name: "Photoshop",
    category: "tools",
    icon: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Photoshop.svg",
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "HTML5",
    category: "frontend",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
  },
];

const categories = [
  { key: "all", label: "All Skills" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "database", label: "Database" },
  { key: "devops", label: "DevOps" },
  { key: "tools", label: "Tools" },
];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [isVisible, setIsVisible] = useState(false);
  const [showAll, setShowAll] = useState(false);

  // Responsive skill limits
  const getSkillLimit = () => {
    if (typeof window === "undefined") return 10;

    const width = window.innerWidth;
    if (width < 640) return 4; // mobile
    if (width < 1024) return 8; // tablet
    return 10; // desktop
  };

  const [skillLimit, setSkillLimit] = useState(getSkillLimit);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 },
    );

    const section = document.getElementById("skills");
    if (section) observer.observe(section);

    // Handle resize for responsive skill limits
    const handleResize = () => {
      setSkillLimit(getSkillLimit());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const filteredSkills =
    activeCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeCategory);

  // Apply limit only if not showing all
  const displayedSkills = showAll
    ? filteredSkills
    : filteredSkills.slice(0, skillLimit);

  const hasMoreSkills = filteredSkills.length > skillLimit;

  const getCategoryCount = (categoryKey) => {
    if (categoryKey === "all") return skills.length;
    return skills.filter((skill) => skill.category === categoryKey).length;
  };

  return (
    <section
      id="skills"
      className="py-24 px-4 bg-background relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Technologies and tools I use to build modern applications
          </p>
        </div>

        {/* Category Navigation */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "glass text-foreground hover:bg-card/80"
              }`}
            >
              {category.label}
              <span className="ml-2 text-xs opacity-75">
                ({getCategoryCount(category.key)})
              </span>
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div
          className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {displayedSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group modern-card text-center p-6 hover:-translate-y-1 transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Icon */}
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                  style={{
                    filter: "brightness(0.9) contrast(1.1)",
                  }}
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.nextSibling.style.display = "flex";
                  }}
                />
                {/* Fallback */}
                <div
                  className="w-10 h-10 rounded-lg bg-primary/20 items-center justify-center text-primary font-bold text-lg hidden"
                  style={{ display: "none" }}
                >
                  {skill.name.charAt(0)}
                </div>
              </div>

              {/* Name */}
              <p className="font-normal text-sm sm:text-xs lg:text-sm text-foreground mb-2">
                {skill.name}
              </p>

              {/* Progress indicator */}
              <div className="w-full h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Show More/Less Button */}
        {hasMoreSkills && (
          <div
            className={`text-center mt-12 transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="glass px-8 py-3 rounded-xl text-sm font-medium text-foreground hover:bg-card/80 transition-all duration-300 hover:scale-105"
            >
              {showAll ? "Show Less" : `Show All (${filteredSkills.length})`}
            </button>
          </div>
        )}

        {/* Stats */}
        <div
          className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {categories.slice(1).map((category) => (
            <div
              key={category.key}
              className="modern-card text-center p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl font-bold text-gradient mb-2">
                {getCategoryCount(category.key)}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {category.label}
              </div>
            </div>
          ))}
        </div>

        {/* Footer message */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="glass px-8 py-4 rounded-2xl inline-block">
            <span className="text-muted-foreground">
              Always learning and exploring new technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
