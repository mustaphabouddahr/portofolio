import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    generateStars();
    generateMeteors();

    const handleResize = () => {
      generateStars();
      generateMeteors();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 8000,
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      const starType = Math.random();
      const shouldAnimate = Math.random() > 0.4;

      newStars.push({
        id: i,
        size: Math.random() * 2.5 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.9 + 0.3,
        animationDuration: Math.random() * 4 + 3,
        delay: shouldAnimate ? Math.random() * 2 : 0,
        type:
          starType > 0.85 ? "accent" : starType > 0.7 ? "secondary" : "primary",
        animate: shouldAnimate,
        brightness: Math.random() * 0.7 + 0.5,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 3;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 1.8 + 1.2,
        x: Math.random() * 100,
        y: Math.random() * 25,
        delay: i === 0 ? 0 : Math.random() * 12 + 3,
        animationDuration: Math.random() * 2.5 + 5,
      });
    }

    setMeteors(newMeteors);
  };

  const getStarStyles = (star) => {
    const baseSize = star.size;
    let styles = {
      left: star.x + "%",
      top: star.y + "%",
      width: baseSize + "px",
      height: baseSize + "px",
      opacity: star.opacity * star.brightness,
      animationDuration: star.animationDuration + "s",
      animationDelay: star.delay + "s",
    };

    if (isDarkMode) {
      switch (star.type) {
        case "accent":
          styles.backgroundColor = "#10b981";
          styles.boxShadow = `0 0 ${baseSize * 10}px ${
            baseSize * 2
          }px rgba(16, 185, 129, 0.6)`;
          break;
        case "secondary":
          styles.backgroundColor = "#3b82f6";
          styles.boxShadow = `0 0 ${baseSize * 8}px ${
            baseSize * 1.8
          }px rgba(59, 130, 246, 0.5)`;
          break;
        default:
          styles.backgroundColor = "#ffffff";
          styles.boxShadow = `0 0 ${baseSize * 6}px ${
            baseSize * 1.5
          }px rgba(255, 255, 255, 0.4)`;
      }
    } else {
      switch (star.type) {
        case "accent":
          styles.backgroundColor = "#059669";
          styles.boxShadow = `0 0 ${
            baseSize * 5
          }px ${baseSize}px rgba(5, 150, 105, 0.5)`;
          break;
        case "secondary":
          styles.backgroundColor = "#2563eb";
          styles.boxShadow = `0 0 ${baseSize * 4}px ${
            baseSize * 0.8
          }px rgba(37, 99, 235, 0.5)`;
          break;
        default:
          styles.backgroundColor = "#1f2937";
          styles.boxShadow = `0 0 ${baseSize * 3}px ${
            baseSize * 0.6
          }px rgba(31, 41, 55, 0.4)`;
      }
    }

    return styles;
  };

  const getMeteorStyles = (meteor) => {
    const baseStyles = {
      width: meteor.size * 60 + "px",
      height: meteor.size * 3 + "px",
      left: meteor.x + "%",
      top: meteor.y + "%",
      animationDelay: meteor.delay + "s",
      animationDuration: meteor.animationDuration + "s",
      opacity: 0,
    };

    if (isDarkMode) {
      baseStyles.background =
        "linear-gradient(to right, rgba(16, 185, 129, 0.9) 0%, rgba(59, 130, 246, 0.7) 30%, rgba(255, 255, 255, 0.8) 60%, transparent 100%)";
      baseStyles.boxShadow = "0 0 40px 10px rgba(16, 185, 129, 0.4)";
    } else {
      baseStyles.background =
        "linear-gradient(to right, rgba(5, 150, 105, 0.8) 0%, rgba(37, 99, 235, 0.6) 30%, rgba(31, 41, 55, 0.7) 60%, transparent 100%)";
      baseStyles.boxShadow = "0 0 30px 8px rgba(5, 150, 105, 0.5)";
    }

    return baseStyles;
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Background gradient with animation */}
      <div
        className="absolute inset-0 animate-bg-shift"
        style={{
          background: isDarkMode
            ? `
              radial-gradient(ellipse at 25% 20%, rgba(16, 185, 129, 0.08) 0%, transparent 60%),
              radial-gradient(ellipse at 75% 80%, rgba(59, 130, 246, 0.06) 0%, transparent 60%),
              radial-gradient(ellipse at 50% 50%, rgba(139, 92, 246, 0.04) 0%, transparent 70%)
            `
            : `
              radial-gradient(ellipse at 25% 20%, rgba(5, 150, 105, 0.12) 0%, transparent 60%),
              radial-gradient(ellipse at 75% 80%, rgba(37, 99, 235, 0.08) 0%, transparent 60%),
              radial-gradient(ellipse at 50% 50%, rgba(124, 58, 237, 0.06) 0%, transparent 70%)
            `,
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: isDarkMode
            ? `
              linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
            `
            : `
              linear-gradient(rgba(31, 41, 55, 0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(31, 41, 55, 0.05) 1px, transparent 1px)
            `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Stars */}
      {stars.map((star) => (
        <div
          key={star.id}
          className={`absolute rounded-full ${
            star.animate ? "animate-[twinkle_6s_ease-in-out_infinite]" : ""
          }`}
          style={getStarStyles(star)}
        />
      ))}

      {/* Meteors */}
      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="absolute rounded-full animate-meteor"
          style={getMeteorStyles(meteor)}
        />
      ))}

      {/* Floating symbols */}
      <div className="absolute inset-0">
        {["⚡", "◆", "▲", "●", "✦", "◯", ">", "<", "[", "]", "{", "}"].map(
          (symbol, i) => (
            <div
              key={`symbol-${i}`}
              className="absolute text-lg font-bold animate-float select-none animate-color-pulse"
              style={{
                left: i * 18 + 8 + "%",
                top: i * 12 + 15 + "%",
                color: isDarkMode
                  ? i % 3 === 0
                    ? "#10b981"
                    : i % 3 === 1
                      ? "#3b82f6"
                      : "rgba(255, 255, 255, 0.2)"
                  : i % 3 === 0
                    ? "#059669"
                    : i % 3 === 1
                      ? "#2563eb"
                      : "rgba(31, 41, 55, 0.3)",
                animationDelay: i * 0.8 + "s",
                animationDuration: 5 + i * 0.5 + "s",
                opacity: 0.3,
              }}
            >
              {symbol}
            </div>
          ),
        )}
      </div>
    </div>
  );
};
