import { NavLink } from "react-router-dom";
import { X, ArrowRight, Phone } from "lucide-react";
import { navLinks, siteInfo } from "../data/site";

export default function MobileMenu({ open, onClose }) {
  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition ${
        open ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!open}
    >
      <div
        className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />
      <div
        className={`absolute right-0 top-0 h-full w-[86%] max-w-sm bg-navy-950 shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
          <span className="font-display text-lg font-bold text-white">Menu</span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="rounded-full p-2 text-white/80 hover:bg-white/10 hover:text-white"
          >
            <X size={22} />
          </button>
        </div>
        <nav className="flex flex-col gap-1 px-3 py-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-lg px-4 py-3.5 text-base font-medium transition-colors ${
                  isActive
                    ? "bg-techblue-500 text-white"
                    : "text-white/75 hover:bg-white/5 hover:text-white"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="mt-2 space-y-3 border-t border-white/10 px-5 py-6">
          <a
            href={`tel:${siteInfo.phones[0]}`}
            className="flex items-center gap-2 text-sm text-white/70"
          >
            <Phone size={16} />
            {siteInfo.phones[0]}
          </a>
          <NavLink
            to="/request-quote"
            onClick={onClose}
            className="btn-primary w-full"
          >
            Request a Quote
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
    </div>
  );
}
