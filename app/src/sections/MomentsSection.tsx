import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const moments = [
  { src: "/images/asset_1.jpg", alt: "Max y Hamber al atardecer" },
  { src: "/images/moment_dogs.jpg", alt: "Max y Hamber posando juntos" },
  { src: "/images/asset_6.png", alt: "Bebidas calientes de Sunshine Coffee" },
  { src: "/images/asset_2.png", alt: "Max y Hamber felices juntos" },
  { src: "/images/moment_park.jpg", alt: "Jugando con Max y Hamber en el parque" },
  { src: "/images/asset_5.png", alt: "Cold Brew de Sunshine Coffee" },
  { src: "/images/asset_8.jpg", alt: "Momento especial en la cafetería" },
];

const MomentsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      // Header reveal
      gsap.from(section.querySelector(".section-header-wrapper"), {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Quote reveal
      if (quoteRef.current) {
        gsap.from(quoteRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        });
      }

      // Infinite carousel animation
      const items = track.querySelectorAll<HTMLElement>(".carousel-item");
      if (items.length === 0) return;

      // Calculate total width of one set of items
      const firstItem = items[0];
      const itemStyle = getComputedStyle(firstItem);
      const itemWidth =
        firstItem.offsetWidth +
        parseFloat(itemStyle.marginLeft) +
        parseFloat(itemStyle.marginRight);
      const totalWidth = itemWidth * moments.length;

      // Set initial position
      gsap.set(track, { x: 0 });

      // Infinite scroll animation
      const tl = gsap.to(track, {
        x: -totalWidth,
        duration: moments.length * 5,
        ease: "none",
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x: number) => {
            return x % totalWidth;
          }),
        },
      });

      // Pause on hover
      track.addEventListener("mouseenter", () => tl.timeScale(0.3));
      track.addEventListener("mouseleave", () => tl.timeScale(1));
    }, section);

    return () => ctx.revert();
  }, []);

  // Duplicate the array for seamless infinite scroll
  const carouselItems = [...moments, ...moments];

  return (
    <section ref={sectionRef} id="momentos" className="py-20 bg-cream overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <div className="section-header-wrapper flex flex-col items-center mb-10">
          <SectionHeader
            label="MOMENTOS SUNSHINE"
            subtitle="Pausa. Café. Compañía. Naturaleza."
          />
        </div>
      </div>

      {/* Carousel — full width, no container constraints */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-cream to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-cream to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-5 py-4 cursor-grab active:cursor-grabbing"
          style={{ width: "max-content" }}
        >
          {carouselItems.map((moment, index) => (
            <div
              key={index}
              className="carousel-item flex-shrink-0 w-[220px] sm:w-[280px] lg:w-[320px]"
            >
              <div className="relative rounded-xl overflow-hidden shadow-polaroid hover:shadow-polaroid-hover transition-shadow duration-300 group">
                <img
                  src={moment.src}
                  alt={moment.alt}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle overlay on hover */}
                <div className="absolute inset-0 bg-dark-brown/0 group-hover:bg-dark-brown/10 transition-colors duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="section-container mt-10">
        <div
          ref={quoteRef}
          className="flex items-center justify-center gap-3"
        >
          <div className="h-px w-8 bg-light-gold" />
          <p className="text-dark-brown font-accent text-lg text-center">
            Los mejores momentos no se planean, se viven.
          </p>
          <Heart size={16} className="text-warm-gold flex-shrink-0" />
          <div className="h-px w-8 bg-light-gold" />
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;
