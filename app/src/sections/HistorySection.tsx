import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";
import PolaroidPhoto from "../components/PolaroidPhoto";
import SectionHeader from "../components/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const HistorySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const photo1Ref = useRef<HTMLDivElement>(null);
  const photo2Ref = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const maxRef = useRef<HTMLDivElement>(null);
  const hamberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Photo 1 reveal
      gsap.from(photo1Ref.current, {
        opacity: 0,
        scale: 0.9,
        rotation: -8,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: photo1Ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Photo 2 reveal
      gsap.from(photo2Ref.current, {
        opacity: 0,
        scale: 0.9,
        rotation: 6,
        duration: 0.8,
        delay: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: photo2Ref.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Text content fade up
      gsap.from(textRef.current?.querySelectorAll(".reveal-item") || [], {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // Dog portraits
      gsap.from([maxRef.current, hamberRef.current], {
        opacity: 0,
        scale: 0.8,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: maxRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="nosotros"
      className="py-20 bg-cream"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Photo Collage */}
          <div className="relative h-[450px] lg:h-[500px]">
            <div className="absolute top-0 left-0 w-[70%]">
              <div ref={photo1Ref}>
                <PolaroidPhoto
                  src="/images/asset_2.png"
                  alt="Fachada de Sunshine Coffee"
                  rotation={-2}
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-[65%]">
              <div ref={photo2Ref}>
                <PolaroidPhoto
                  src="/images/asset_1.jpg"
                  alt="Max y Hamber en el café"
                  rotation={3}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div ref={textRef} className="flex flex-col">
            <div className="reveal-item">
              <SectionHeader label="NUESTRA HISTORIA" centered={false} />
            </div>

            <p className="reveal-item mt-6 text-dark-brown leading-relaxed">
              Sunshine Coffee nació de nuestro amor por el café, por la naturaleza y por
              nuestros mejores amigos: Max y Hamber. Ellos nos recuerdan cada día disfrutar
              las cosas simples, tomar el sol sin prisa y encontrar alegría en los pequeños
              momentos.
            </p>

            <p className="reveal-item mt-6 font-accent text-xl text-medium-brown">
              Esto es Sunshine. Esto es hogar.
              <Heart size={16} className="inline ml-2 text-warm-gold" />
            </p>

            {/* Dog Portraits */}
            <div className="flex gap-8 mt-10">
              {/* Max */}
              <div ref={maxRef} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-[3px] border-warm-gold">
                  <img
                    src="/images/asset_3.png"
                    alt="Max"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-1 mt-3">
                  <span className="caption-label text-dark-brown">MAX</span>
                  <Heart size={14} className="text-warm-gold" />
                </div>
                <p className="text-xs text-medium-brown mt-1">
                  Tranquilidad
                  <br />
                  Paciencia
                  <br />
                  Lealtad
                </p>
              </div>

              {/* Hamber */}
              <div ref={hamberRef} className="flex flex-col items-center text-center">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-[3px] border-warm-gold">
                  <img
                    src="/images/asset_4.png"
                    alt="Hamber"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center gap-1 mt-3">
                  <span className="caption-label text-dark-brown">HAMBER</span>
                  <Heart size={14} className="text-warm-gold" />
                </div>
                <p className="text-xs text-medium-brown mt-1">
                  Alegría
                  <br />
                  Ternura
                  <br />
                  Energía cálida
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistorySection;
