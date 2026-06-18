import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const content = contentRef.current;

    if (!section || !bg || !content) return;

    // Parallax on background
    gsap.to(bg, {
      y: 150,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Content fade up on scroll
    gsap.to(content, {
      y: -80,
      opacity: 0,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "50% top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  const handleConoceMas = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#nosotros");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative w-full min-h-[100dvh] overflow-hidden"
    >
      {/* Background Image Layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%]"
        style={{ willChange: "transform" }}
      >
        <img
          src="/images/asset_1.jpg"
          alt="Max y Hamber en Sunshine Coffee al atardecer"
          className="w-full h-full object-cover object-[70%_center] sm:object-center"
        />
        {/* Gradient overlay for text legibility — stronger on mobile to ensure readability over the dogs */}
        <div className="absolute inset-0 bg-gradient-to-b from-cream/70 via-cream/30 to-transparent sm:bg-gradient-to-r sm:from-cream/40 sm:via-transparent sm:to-transparent" />
      </div>

      {/* Content Layer */}
      <div
        ref={contentRef}
        className="relative z-10 min-h-[100dvh] flex flex-col justify-end pb-24 sm:justify-center sm:pb-0 section-container"
        style={{ willChange: "transform, opacity" }}
      >
        {/* Decorative sun above title */}
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          className="text-warm-gold mb-4 animate-float"
        >
          <circle cx="24" cy="24" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
          <line x1="24" y1="4" x2="24" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="24" y1="38" x2="24" y2="44" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="4" y1="24" x2="10" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="38" y1="24" x2="44" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="9.9" y1="9.9" x2="14.1" y2="14.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="33.9" y1="33.9" x2="38.1" y2="38.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="9.9" y1="38.1" x2="14.1" y2="33.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="33.9" y1="14.1" x2="38.1" y2="9.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>

        {/* Title */}
        <h1 className="font-display text-dark-brown max-w-lg drop-shadow-sm">
          <span className="block text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] tracking-tight">
            El aroma de los buenos
          </span>
          <span className="block text-4xl sm:text-5xl lg:text-[56px] leading-[1.1] tracking-tight italic">
            momentos
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-6 text-lg text-dark-brown/85 max-w-md leading-relaxed drop-shadow-sm">
          Café de especialidad, momentos de calma y la compañía sincera de Max y Hamber.
        </p>

        {/* CTA Button */}
        <a
          href="#nosotros"
          onClick={handleConoceMas}
          className="mt-8 inline-flex items-center gap-2 w-fit px-6 py-3 border-2 border-dark-brown text-dark-brown rounded-full font-medium hover:bg-warm-gold hover:border-warm-gold transition-all duration-300"
        >
          CONOCE MÁS
          <Heart size={18} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
