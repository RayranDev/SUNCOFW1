import { forwardRef } from "react";

interface PolaroidPhotoProps {
  src: string;
  alt: string;
  rotation?: number;
  className?: string;
  caption?: string;
}

const PolaroidPhoto = forwardRef<HTMLDivElement, PolaroidPhotoProps>(
  ({ src, alt, rotation = 0, className = "", caption }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-white p-3 shadow-polaroid transition-all duration-300 hover:shadow-polaroid-hover hover:scale-[1.03] hover:rotate-0 cursor-pointer ${className}`}
        style={{
          transform: `rotate(${rotation}deg)`,
          transformOrigin: "center center",
        }}
      >
        <div className="overflow-hidden">
          <img
            src={src}
            alt={alt}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        {caption && (
          <p className="font-accent text-center text-medium-brown mt-2 text-sm">
            {caption}
          </p>
        )}
      </div>
    );
  }
);

PolaroidPhoto.displayName = "PolaroidPhoto";

export default PolaroidPhoto;
