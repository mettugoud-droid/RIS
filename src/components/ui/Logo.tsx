"use client";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: { height: 56 },
    md: { height: 72 },
    lg: { height: 80 },
  };

  const s = sizes[size];

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <img
        src="/logo.png"
        alt="Raksha Integrated Solutions"
        style={{ height: s.height, width: "auto" }}
        className="object-contain"
      />
    </div>
  );
}
