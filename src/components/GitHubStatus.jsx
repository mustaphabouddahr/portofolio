import { useEffect, useState } from "react";

export const GitHubStatus = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="about"
      className=" px-4 bg-background container mx-auto max-w-5xl text-center md:text-left"
    >
      <div className="space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          GitHub <span className="text-primary">Status</span>
        </h2>
        <div className="flex flex-col gap-4 sm:gap-8 items-center">
          <img src="https://ghchart.rshah.org/mustaphabouddahr" alt="" />
          <a href="https://git.io/streak-stats">
            <img
              src={`https://streak-stats.demolab.com?user=mustaphabouddahr&theme=whatsapp-${isDark ? "dark" : "light"}2&hide_border=true&date_format=j%20M%5B%20Y%5D`}
              alt="GitHub Streak"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
