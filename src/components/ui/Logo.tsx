"use client";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "full" | "compact";
  className?: string;
}

export function Logo({ size = "md", variant = "full", className = "" }: LogoProps) {
  const sizes = {
    sm: { height: 32, raksha: "text-lg", sub: "text-[8px]" },
    md: { height: 40, raksha: "text-xl", sub: "text-[10px]" },
    lg: { height: 56, raksha: "text-3xl", sub: "text-xs" },
  };

  const s = sizes[size];

  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {/* Circle mark */}
        <div
          className="relative flex items-center justify-center rounded-full border-2 border-electric-500"
          style={{ width: s.height, height: s.height }}
        >
          <span
            className="font-bold text-brand-red italic"
            style={{ fontSize: s.height * 0.45 }}
          >
            R
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {/* Circle badge mark */}
      <div
        className="relative flex items-center justify-center rounded-full border-2 border-electric-500"
        style={{ width: s.height, height: s.height }}
      >
        <span
          className="font-bold text-brand-red italic leading-none"
          style={{ fontSize: s.height * 0.42, fontFamily: "Georgia, serif" }}
        >
          R
        </span>
      </div>

      {/* Text */}
      <div className="flex flex-col">
        <span
          className={`${s.raksha} font-bold text-brand-red italic leading-none`}
          style={{ fontFamily: "Georgia, serif" }}
        >
          Raksha
        </span>
        <span className={`${s.sub} font-semibold text-electric-400 uppercase tracking-[0.12em] leading-none mt-0.5`}>
          Integrated Solutions
        </span>
      </div>
    </div>
  );
}
