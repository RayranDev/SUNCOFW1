import { forwardRef } from "react";
import { Instagram, Facebook } from "lucide-react";

interface SocialIconProps {
  platform: "instagram" | "facebook" | "tiktok";
  href?: string;
  className?: string;
}

const TikTokIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15.2a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.28 8.28 0 0 0 4.83 1.54v-3.5a4.85 4.85 0 0 1-1.07-.1z" />
  </svg>
);

const SocialIcon = forwardRef<HTMLAnchorElement, SocialIconProps>(
  ({ platform, href = "#", className = "" }, ref) => {
    const iconMap = {
      instagram: <Instagram size={18} />,
      facebook: <Facebook size={18} />,
      tiktok: <TikTokIcon />,
    };

    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-10 h-10 rounded-full border-2 border-dark-brown flex items-center justify-center text-dark-brown transition-all duration-300 hover:bg-dark-brown hover:text-white hover:scale-110 ${className}`}
      >
        {iconMap[platform]}
      </a>
    );
  }
);

SocialIcon.displayName = "SocialIcon";

export default SocialIcon;
