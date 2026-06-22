"use client";

interface LogoProps {
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Logo({ size = "md", className = "" }: LogoProps) {
  const sizes = {
    sm: { height: 50 },
    md: { height: 65 },
    lg: { height: 80 },
  };

  const s = sizes[size];

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
