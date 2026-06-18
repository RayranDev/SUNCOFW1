import { forwardRef } from "react";

interface SectionHeaderProps {
  label: string;
  subtitle?: string;
  className?: string;
  centered?: boolean;
}

const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ label, subtitle, className = "", centered = true }, ref) => {
    return (
      <div
        ref={ref}
        className={`flex flex-col gap-3 ${centered ? "items-center text-center" : "items-start"} ${className}`}
      >
        <div className="flex items-center gap-3">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            className="text-warm-gold"
          >
            <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
            <line x1="12" y1="2" x2="12" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="2" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="19" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span className="caption-label text-medium-brown">{label}</span>
          {centered && (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="text-warm-gold"
            >
              <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.5" />
              <line x1="12" y1="2" x2="12" y2="5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="12" y1="19" x2="12" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="2" y1="12" x2="5" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="19" y1="12" x2="22" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          )}
        </div>
        {subtitle && (
          <p className="font-accent text-xl text-medium-brown">{subtitle}</p>
        )}
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";

export default SectionHeader;
