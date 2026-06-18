interface LogoProps {
  inverted?: boolean;
  className?: string;
}

const Logo = ({ inverted = false, className = "" }: LogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/images/logo.jpg"
        alt="Sunshine Coffee Logo"
        className={`w-12 h-12 rounded-lg object-cover ${
          inverted ? "brightness-110" : ""
        }`}
      />
      <div className={`text-left ${inverted ? "text-white" : "text-dark-brown"}`}>
        <p className="text-[11px] font-bold tracking-[0.12em] leading-tight">SUNSHINE</p>
        <p className="text-[11px] font-bold tracking-[0.12em] leading-tight">COFFEE</p>
      </div>
    </div>
  );
};

export default Logo;
