import { Link } from "react-router-dom";
import logoMark from "../assets/images/logo-mark.webp";

// The source logo artwork sits on a light radial background, so we present
// it inside a rounded white chip. This keeps it crisp on both light and
// dark (navy) sections instead of fighting a background removal that would
// clip the artwork's own soft glow.
export default function Logo({ variant = "dark", className = "" }) {
  const textColor = variant === "light" ? "text-white" : "text-navy-900";
  const subColor = variant === "light" ? "text-sky-200" : "text-techblue-500";

  return (
    <Link to="/" className={`flex items-center gap-3 group ${className}`}>
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white shadow-card ring-1 ring-navy-900/5 overflow-hidden">
        <img
          src={logoMark}
          alt="AiroLink logo"
          className="h-10 w-10 object-cover scale-125"
        />
      </span>
      <span className="leading-tight">
        <span className={`block font-display text-lg font-bold tracking-tight ${textColor}`}>
          Airo<span className={subColor}>Link</span>
        </span>
        <span className={`block text-[10px] font-medium uppercase tracking-wider ${variant === "light" ? "text-white/60" : "text-ink-500"}`}>
          IT &amp; Security Consultancy
        </span>
      </span>
    </Link>
  );
}
