"use client";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "full" | "compact";
  className?: string;
}

export function Logo({ size = "md", variant = "full", className = "" }: LogoProps) {
  const sizes = {
    sm: { height: 40, textSize: "text-[9px]" },
    md: { height: 50, textSize: "text-[10px]" },
    lg: { height: 60, textSize: "text-xs" },
  };

  const s = sizes[size];

  if (variant === "compact") {
    return (
      <div className={`flex flex-col items-center ${className}`}>
        <img
          src="/logo.png"
          alt="Raksha Integrated Solutions"
          style={{ height: s.height, width: "auto" }}
          className="object-contain"
        />
        <span className={`${s.textSize} font-semibold text-white uppercase tracking-[0.15em] -mt-0.5`}>
          Integrated Solutions
        </span>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src="/logo.png"
        alt="Raksha"
        style={{ height: s.height, width: "auto" }}
        className="object-contain"
      />
      <div className="flex flex-col">
        <span className="text-xl font-bold text-brand-red italic" style={{ fontFamily: "Georgia, serif" }}>
          Raksha
        </span>
        <span className={`${s.textSize} font-semibold text-white uppercase tracking-[0.15em]`}>
          Integrated Solutions
        </span>
      </div>
    </div>
  );
}
