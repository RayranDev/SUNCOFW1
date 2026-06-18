import { useState, useEffect } from "react";
import { Menu, X, Coffee } from "lucide-react";
import Logo from "./Logo";

const WHATSAPP_URL = "https://wa.me/573003714694?text=Hola%20Sunshine%20Coffee%2C%20quiero%20hacer%20un%20pedido%20%F0%9F%98%8A";

const navLinks = [
  { label: "INICIO", href: "#inicio" },
  { label: "NOSOTROS", href: "#nosotros" },
  { label: "PRODUCTOS", href: "#productos" },
  { label: "MOMENTOS", href: "#momentos" },
  { label: "CONTACTO", href: "#contacto" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 h-[72px] flex items-center transition-all duration-500 ${
          scrolled
            ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-light-gold/30"
            : "bg-transparent"
        }`}
      >
        <div className="section-container w-full flex items-center justify-between">
          {/* Logo */}
          <a href="#inicio" onClick={(e) => handleNavClick(e, "#inicio")}>
            <Logo />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium text-medium-brown tracking-[0.08em] hover:text-dark-brown transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-warm-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA Button - WhatsApp */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-dark-brown text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-deep-brown transition-colors duration-300"
          >
            PEDIR AHORA
            <Coffee size={16} />
          </a>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-dark-brown p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-transform duration-500 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-display text-dark-brown hover:text-warm-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-dark-brown text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-deep-brown transition-colors duration-300 mt-4"
          >
            PEDIR AHORA
            <Coffee size={20} />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
