"use client";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  variant?: "full" | "compact";
  className?: string;
}

export function Logo({ size = "md", variant = "full", className = "" }: LogoProps) {
  const sizes = {
    sm: { height: 36 },
    md: { height: 44 },
    lg: { height: 60 },
  };

  const s = sizes[size];

  if (variant === "compact") {
    return (
      <div className={`inline-block bg-white rounded-lg px-2 py-1 ${className}`}>
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
    <div className={`inline-block bg-white rounded-lg px-3 py-1.5 ${className}`}>
      <img
        src="/logo-wide.png"
        alt="Raksha Integrated Solutions"
        style={{ height: s.height, width: "auto" }}
        className="object-contain"
      />
    </div>
  );
}
