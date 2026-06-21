"use client";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "full" | "compact";
  className?: string;
}

export function Logo({ size = "md", variant = "full", className = "" }: LogoProps) {
  const sizes = {
    sm: { height: 32 },
    md: { height: 40 },
    lg: { height: 56 },
  };

  const s = sizes[size];

  if (variant === "compact") {
    return (
      <div className={className}>
        <img
          src="/logo.png"
          alt="Raksha Integrated Solutions"
          style={{ height: s.height, width: "auto" }}
          className="object-contain"
        />
      </div>
    );
  }

  return (
    <div className={className}>
      <img
        src="/logo-wide.png"
        alt="Raksha Integrated Solutions"
        style={{ height: s.height, width: "auto" }}
        className="object-contain"
      />
    </div>
  );
}
