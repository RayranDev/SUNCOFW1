import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";
import PolaroidPhoto from "../components/PolaroidPhoto";
import SectionHeader from "../components/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const moments = [
  { src: "/images/asset_1.jpg", alt: "Momento con café en la terraza", rotation: -2 },
  { src: "/images/asset_6.png", alt: "Café y libro junto a la ventana", rotation: 1 },
  { src: "/images/asset_2.png", alt: "Max y Hamber felices juntos", rotation: -1 },
  { src: "/images/asset_1.jpg", alt: "Interior acogedor de Sunshine Coffee", rotation: 2 },
  { src: "/images/asset_5.png", alt: "Taza de Sunshine Coffee con vista a las montañas", rotation: -3 },
];

const MomentsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const photosRef = useRef<HTMLDivElement[]>([]);
  const quoteRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

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

      // Polaroid photos reveal
      gsap.from(photosRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 40,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: photosRef.current[0],
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Quote reveal
      gsap.from(quoteRef.current, {
        opacity: 0,
        x: 30,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

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

        {/* Gallery Row */}
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-4">
          {/* Polaroid Photos */}
          <div className="flex-1 flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-3">
            {moments.map((moment, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) photosRef.current[index] = el;
                }}
                className="w-[140px] sm:w-[160px] lg:w-[18%] flex-shrink-0"
              >
                <PolaroidPhoto
                  src={moment.src}
                  alt={moment.alt}
                  rotation={moment.rotation}
                />
              </div>
            ))}
          </div>

          {/* Quote Card */}
          <div
            ref={quoteRef}
            className="bg-warm-beige rounded-lg px-6 py-8 max-w-[220px] flex flex-col items-center text-center flex-shrink-0"
          >
            <p className="text-dark-brown font-body text-sm leading-relaxed">
              Los mejores momentos no se planean, se viven.
            </p>
            <Heart size={20} className="text-warm-gold mt-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MomentsSection;
