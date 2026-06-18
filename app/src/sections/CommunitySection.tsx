import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart, Camera } from "lucide-react";
import SocialIcon from "../components/SocialIcon";

gsap.registerPlugin(ScrollTrigger);

const instagramPhotos = [
  "/images/asset_5.png",
  "/images/asset_3.png",
  "/images/asset_6.png",
  "/images/asset_2.png",
  "/images/asset_7.png",
];

const CommunitySection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Left content reveal
      gsap.from(leftRef.current?.querySelectorAll(".reveal-item") || [], {
        opacity: 0,
        x: -40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Right content reveal
      gsap.from(rightRef.current?.querySelectorAll(".reveal-item") || [], {
        opacity: 0,
        x: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-warm-cream">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Community Info */}
          <div ref={leftRef} className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="reveal-item flex items-center gap-2 mb-4">
              <h2 className="caption-label text-dark-brown">NUESTRA COMUNIDAD</h2>
              <Heart size={16} className="text-warm-gold" />
            </div>

            <p className="reveal-item text-dark-brown leading-relaxed max-w-md">
              Comparte tus momentos con{" "}
              <span className="font-medium text-medium-brown">#MomentosSunshine</span> y sé
              parte de nuestra familia.
            </p>

            <div className="reveal-item mt-6 text-sage-green">
              <Camera size={40} strokeWidth={1.5} />
            </div>
          </div>

          {/* Right - Social + Photos */}
          <div ref={rightRef} className="flex flex-col items-center lg:items-end">
            <h3 className="reveal-item caption-label text-dark-brown mb-4">SÍGUENOS</h3>

            {/* Social Icons */}
            <div className="reveal-item flex gap-3 mb-4">
              <SocialIcon platform="instagram" href="https://instagram.com/sunshinecoffee11" />
              <SocialIcon platform="facebook" href="https://facebook.com/sunshine.coffee" />
              <SocialIcon platform="tiktok" href="https://tiktok.com/@sunshine.coffee" />
            </div>

            <p className="reveal-item text-sm text-medium-brown mb-6">
              @sunshinecoffee11
            </p>

            {/* Instagram Photo Strip */}
            <div className="reveal-item flex gap-2 overflow-x-auto pb-2 max-w-full">
              {instagramPhotos.map((photo, index) => (
                <div
                  key={index}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-lg overflow-hidden flex-shrink-0 border-2 border-light-gold/50 hover:border-warm-gold transition-colors duration-300"
                >
                  <img
                    src={photo}
                    alt={`Instagram photo ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
