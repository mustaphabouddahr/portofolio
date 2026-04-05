import React, { useState, useEffect, useRef } from "react";
import { Instagram, ExternalLink, Heart, Eye, Camera } from "lucide-react";

import picture0 from "@/assets/photography/picture0.webp";
import picture1 from "@/assets/photography/picture1.webp";
import picture2 from "@/assets/photography/picture2.webp";
import picture3 from "@/assets/photography/picture3.webp";
import picture4 from "@/assets/photography/picture4.webp";
import picture5 from "@/assets/photography/picture5.webp";
import picture6 from "@/assets/photography/picture6.webp";
import picture7 from "@/assets/photography/picture7.webp";
import picture8 from "@/assets/photography/picture8.webp";
import picture9 from "@/assets/photography/picture9.webp";
import picture10 from "@/assets/photography/picture10.webp";
import picture11 from "@/assets/photography/picture11.webp";

const photos = [
  {
    id: 0,
    src: picture0,
    alt: "",
    category: "cats",
  },
  {
    id: 1,
    src: picture1,
    alt: "",
    category: "cats",
  },
  {
    id: 2,
    src: picture2,
    alt: "",
    category: "nature",
  },
  {
    id: 3,
    src: picture3,
    alt: "",
    category: "cats",
  },
  {
    id: 4,
    src: picture4,
    alt: "",
    category: "cats",
  },
  {
    id: 5,
    src: picture5,
    alt: "",
    category: "nature",
  },
  {
    id: 6,
    src: picture6,
    alt: "",
    category: "cats",
  },
  {
    id: 7,
    src: picture7,
    alt: "",
    category: "sky",
  },
  {
    id: 8,
    src: picture8,
    alt: "",
    category: "cats",
  },
  {
    id: 9,
    src: picture9,
    alt: "",
    category: "cats",
  },
  {
    id: 10,
    src: picture10,
    alt: "",
    category: "cats",
  },
  {
    id: 11,
    src: picture11,
    alt: "",
    category: "cats",
  },
];

const categories = [
  { key: "all", label: "All Photos", count: photos.length },
  {
    key: "cats",
    label: "Cats",
    count: photos.filter((p) => p.category === "cats").length,
  },
  {
    key: "portrait",
    label: "Portrait",
    count: photos.filter((p) => p.category === "portrait").length,
  },
  {
    key: "street",
    label: "Street",
    count: photos.filter((p) => p.category === "street").length,
  },
  {
    key: "architecture",
    label: "Architecture",
    count: photos.filter((p) => p.category === "architecture").length,
  },
  {
    key: "nature",
    label: "Nature",
    count: photos.filter((p) => p.category === "nature").length,
  },
  {
    key: "sky",
    label: "Sky",
    count: photos.filter((p) => p.category === "sky").length,
  },
];

export const PhotographySection = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [hoveredPhoto, setHoveredPhoto] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef(null);

  const filteredPhotos =
    activeCategory === "all"
      ? photos
      : photos.filter((photo) => photo.category === activeCategory);

  useEffect(() => {
    // Disable auto-scroll on mobile
    if (window.matchMedia("(max-width: 767px)").matches) return;
    if (!scrollRef.current || isHovered || filteredPhotos.length <= 3) return;

    let frameId;
    let pos = scrollRef.current.scrollLeft;

    const loop = () => {
      if (!isHovered && scrollRef.current) {
        pos += 0.5;
        const max = scrollRef.current.scrollWidth / 2;
        if (pos >= max) {
          pos = 0;
          scrollRef.current.scrollLeft = 0;
        } else {
          scrollRef.current.scrollLeft = pos;
        }
        frameId = requestAnimationFrame(loop);
      }
    };

    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [isHovered, activeCategory, filteredPhotos.length]);

  return (
    <section
      id="photography"
      className="py-24 px-4 bg-gradient-to-br from-background to-secondary/10"
    >
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Camera className="w-8 h-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold">
              My <span className="text-primary">Photography</span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Beyond coding, I'm passionate about capturing moments through the
            lens. Here's a glimpse into my creative side - exploring Morocco's
            beauty and urban landscapes.
          </p>

          {/* Instagram Stats */}
          <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Instagram className="w-4 h-4" />
              <span>@mustapha_bouddahr</span>
            </div>
            <div className="flex items-center gap-2">
              <Eye className="w-4 h-4" />
              <span>{photos.length} Photos</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories
            .filter((cat) => cat.count > 0)
            .map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.key
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-card hover:bg-card/80 text-muted-foreground hover:text-foreground hover:scale-105"
                }`}
              >
                {category.label}
                <span className="ml-2 text-xs opacity-70 bg-background/20 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
        </div>

        {/* Horizontal Scrolling Photo Container */}
        <div
          className="mb-12 overflow-hidden py-4"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div ref={scrollRef} className="flex gap-6 scroll-container py-2">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer flex-shrink-0"
                style={{ width: "300px", height: "300px" }}
                onMouseEnter={() => setHoveredPhoto(photo.id)}
                onMouseLeave={() => setHoveredPhoto(null)}
                onClick={() => setSelectedPhoto(photo)}
              >
                <div className="w-full h-full overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                    hoveredPhoto === photo.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-semibold text-lg mb-2">
                      {photo.alt}
                    </h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-white/80">
                        <Heart className="w-4 h-4" />
                      </div>
                      <div className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-xs">
                        {photo.category}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 border-2 border-primary rounded-2xl transition-opacity duration-300 ${
                    hoveredPhoto === photo.id ? "opacity-100" : "opacity-0"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Instagram CTA */}
        <div className="text-center">
          <a
            href="https://www.instagram.com/mustapha_bouddahr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-lg font-medium"
          >
            <Instagram size={24} />
            <span>Follow me on Instagram</span>
            <ExternalLink size={20} />
          </a>
          <p className="text-sm text-muted-foreground mt-4">
            Get inspired by more photos and behind-the-scenes content
          </p>
        </div>

        {/* Lightbox Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="max-w-4xl max-h-full">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-semibold mb-2">
                  {selectedPhoto.alt}
                </h3>
                <div className="flex items-center justify-center gap-4 text-white/80">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                  </div>
                  <div className="px-3 py-1 bg-white/10 rounded-full">
                    {selectedPhoto.category}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
