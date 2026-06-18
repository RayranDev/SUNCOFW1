import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import SectionHeader from "../components/SectionHeader";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    id: 1,
    title: "COLD BREW",
    description: "Suave, refrescante y lleno de sabor. El favorito para disfrutar cada día.",
    image: "/images/asset_5.png",
    featured: true,
  },
  {
    id: 2,
    title: "BEBIDAS CALIENTES",
    description: "Clásicos que abrazan el alma y reconfortan el corazón.",
    image: "/images/asset_6.png",
    featured: false,
  },
  {
    id: 3,
    title: "BEBIDAS FRÍAS",
    description: "Refrescantes, naturales y perfectas para cualquier momento bajo el sol.",
    image: "/images/asset_7.png",
    featured: false,
  },
  {
    id: 4,
    title: "CAFÉ DE NUESTRA TIERRA",
    description: "Café de especialidad, en grano o molido variedad Castilla.",
    image: "/images/cafe-dinastia.jpg",
    featured: false,
    externalLink: "#", // URL to be specified later
  },
];

const ProductsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

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

      // Cards stagger reveal
      gsap.from(cardsRef.current, {
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="productos" className="py-20 bg-warm-cream">
      <div className="section-container">
        {/* Header */}
        <div className="section-header-wrapper flex items-center justify-center gap-4 mb-14">
          <div className="h-px w-12 border-t-2 border-dashed border-light-gold" />
          <SectionHeader label="NUESTROS PRODUCTOS" />
          <div className="h-px w-12 border-t-2 border-dashed border-light-gold" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {products.map((product, index) => {
            const CardWrapper = product.externalLink ? "a" : "div";
            const cardProps = product.externalLink
              ? {
                  href: product.externalLink,
                  target: "_blank" as const,
                  rel: "noopener noreferrer",
                }
              : {};

            return (
              <CardWrapper
                key={product.id}
                {...cardProps}
                ref={(el: HTMLDivElement | HTMLAnchorElement | null) => {
                  if (el) cardsRef.current[index] = el as HTMLDivElement;
                }}
                className={`relative flex flex-col items-center text-center group ${
                  product.externalLink ? "cursor-pointer" : ""
                }`}
              >
                {/* Featured Badge */}
                {product.featured && (
                  <div className="absolute -top-3 left-4 z-10 bg-warm-gold text-dark-brown text-xs font-medium px-3 py-1 rounded-sm -rotate-3 shadow-sm">
                    FAVORITO
                  </div>
                )}

                {/* External Link Badge */}
                {product.externalLink && (
                  <div className="absolute -top-3 right-4 z-10 bg-sage-green text-white text-xs font-medium px-3 py-1 rounded-sm rotate-3 shadow-sm flex items-center gap-1">
                    <ExternalLink size={12} />
                    VER MÁS
                  </div>
                )}

                {/* Product Image */}
                <div className="relative w-full max-w-[260px] aspect-square mb-6 transition-transform duration-300 group-hover:scale-[1.02] overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Product Info */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-px w-6 bg-light-gold" />
                    <h3 className="caption-label text-dark-brown">{product.title}</h3>
                    <div className="h-px w-6 bg-light-gold" />
                  </div>
                  <p className="text-sm text-medium-brown leading-relaxed max-w-[240px]">
                    {product.description}
                  </p>
                </div>
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
