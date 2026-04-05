import { useState, useEffect } from "react";
import { ArrowDown, GitBranch, Users } from "lucide-react";
import profilePic from "@/assets/profile.webp";

export const HeroSection = () => {
  const [repoCount, setRepoCount] = useState(0);
  const [followerCount, setFollowerCount] = useState(0);

  useEffect(() => {
    fetch("https://api.github.com/users/mustaphabouddahr")
      .then((res) => res.json())
      .then((user) => {
        setRepoCount(user.public_repos || 0);
        setFollowerCount(user.followers || 0);
      })
      .catch((err) => console.error("GitHub fetch failed:", err));
  }, []);

  return (
    <section
      id="hero"
      className="
        relative
        min-h-screen
        flex flex-col justify-center
        pt-14 sm:pt-20 lg:pt-15 px-4
        pb-20        /* ← add extra bottom padding */
      "
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
            <span className="block text-muted-foreground">Hi, I’m</span>
            <span className="block text-primary">Mustapha Bouddahr</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
            Full-Stack Developer <br /> I build things that solve real problems
            and ship to production.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4">
            <div className="flex items-center space-x-2 bg-card/50 px-4 py-2 rounded-full">
              <GitBranch className="h-5 w-5 text-primary" />
              <span className="font-medium text-foreground">
                {repoCount} Projects
              </span>
            </div>
            {followerCount > 0 && (
              <div className="flex items-center space-x-2 bg-card/50 px-4 py-2 rounded-full">
                <Users className="h-5 w-5 text-accent" />
                <span className="font-medium text-foreground">
                  {followerCount} Followers
                </span>
              </div>
            )}
          </div>
          <div className="mt-6 flex flex-col sm:flex-row gap-2 justify-center md:justify-start">
            <a
              href="/resume.pdf"
              download={"mustapha_bouddahr_resume.pdf"}
              className="cosmic-button inline-block"
            >
              Resume - Fr
            </a>
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl text-sm font-medium glass text-foreground hover:bg-card/80 "
            >
              My Projects
            </a>
          </div>
        </div>

        {/* Image wrapper now has a higher z-index */}
        <div className="flex justify-center md:justify-end relative z-10">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg">
            <img
              src={profilePic}
              alt="Mustapha Bouddahr"
              className="object-cover w-full h-full scale-x-[-1] "
            />
          </div>
        </div>
      </div>

      {/* Scroll indicator at bottom; sits underneath image due to lower z-index */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-0">
        <span className="text-sm text-muted-foreground mb-1">Scroll</span>
        <ArrowDown className="h-6 w-6 text-primary" />
      </div>
    </section>
  );
};
