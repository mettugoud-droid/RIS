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
    <div
      className={`relative inline-flex items-center justify-center rounded-2xl ${className}`}
      style={{
        background: "radial-gradient(ellipse at center, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.8) 50%, rgba(255,255,255,0) 80%)",
        padding: "8px 16px",
        boxShadow: "0 0 30px rgba(255,255,255,0.4), 0 0 60px rgba(255,255,255,0.15)",
      }}
    >
      <img
        src="/logo.png"
        alt="Raksha Integrated Solutions"
        style={{ height: s.height, width: "auto" }}
        className="object-contain relative z-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
      />
    </div>
  );
}
