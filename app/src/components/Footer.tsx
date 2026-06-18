import { Phone, MapPin, Clock, Instagram, Heart } from "lucide-react";
import Logo from "./Logo";
import SocialIcon from "./SocialIcon";

const WHATSAPP_URL = "https://wa.me/573003714694?text=Hola%20Sunshine%20Coffee%2C%20quiero%20hacer%20un%20pedido%20%F0%9F%98%8A";

const Footer = () => {
  return (
    <footer id="contacto" className="bg-deep-brown text-white">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-1 flex flex-col items-center md:items-start">
            <Logo inverted />
            <p className="font-accent text-golden text-lg mt-4 text-center md:text-left">
              El aroma de los buenos momentos.
            </p>
          </div>

          {/* Pedidos Column */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="caption-label text-white/80 mb-4">PEDIDOS</h4>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-warm-gold transition-colors"
              >
                <Phone size={16} />
                +57 300 371 4694
              </a>
              <a
                href="https://instagram.com/sunshinecoffee11"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/70 hover:text-warm-gold transition-colors"
              >
                <Instagram size={16} />
                @sunshinecoffee11
              </a>
            </div>
          </div>

          {/* Ubicación Column */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="caption-label text-white/80 mb-4">UBICACIÓN</h4>
            <div className="flex items-start gap-2 text-sm text-white/70 text-center md:text-left">
              <MapPin size={16} className="mt-0.5 flex-shrink-0" />
              <span>
                CL 56 H SUR 98A - 33
              </span>
            </div>
          </div>

          {/* Horarios Column */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="caption-label text-white/80 mb-4">HORARIOS</h4>
            <div className="flex items-start gap-2 text-sm text-white/70 text-center md:text-left">
              <Clock size={16} className="mt-0.5 flex-shrink-0" />
              <span>
                Lunes a Domingo
                <br />
                7:00 a.m. – 7:00 p.m.
              </span>
            </div>
          </div>

          {/* Chalkboard */}
          <div className="flex flex-col items-center">
            <img
              src="/images/asset_10.png"
              alt="Siempre hay un rincón al sol esperando por ti"
              className="w-48 h-auto rounded-lg"
              loading="lazy"
            />
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mt-10">
          <SocialIcon platform="instagram" href="https://instagram.com/sunshinecoffee11" />
          <SocialIcon platform="facebook" href="https://facebook.com/" />
          <SocialIcon platform="tiktok" href="https://www.tiktok.com/@sunshine.coffe5" />
        </div>

        {/* Divider */}
        <div className="border-t border-light-gold/20 mt-8 pt-6">
          <p className="text-center text-xs text-white/50 tracking-wide">
            © 2026 SUNSHINE COFFEE. TODOS LOS DERECHOS RESERVADOS.{" "}
            <Heart size={12} className="inline text-warm-gold ml-1" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
