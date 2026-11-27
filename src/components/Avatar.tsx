export function Avatar({ initials, color = "blue", size = "md", className = "" }: { initials: string; color?: string; size?: "sm" | "md" | "lg"; className?: string }) {
  return (
    <span className={`avatar avatar-${color} avatar-${size} ${className}`} aria-label={initials}>
      {initials}
    </span>
  );
}
