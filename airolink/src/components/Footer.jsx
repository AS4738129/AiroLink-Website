import { Link } from "react-router-dom";
import { Phone, MapPin, CheckCircle2 } from "lucide-react";
import Logo from "./Logo";
import { navLinks, siteInfo } from "../data/site";
import { serviceCategories } from "../data/services";

export default function Footer() {
  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-page grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="light" />
          <p className="mt-5 text-sm font-medium text-white/85">
            {siteInfo.tagline}
          </p>
          <p className="mt-1 text-sm text-white/55">{siteInfo.secondaryTagline}</p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-sky-300">
            <CheckCircle2 size={14} />
            Nationwide Availability
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {[...navLinks, { label: "Request a Quote", to: "/request-quote" }].map(
              (link) => (
                <li key={link.to}>
                  <Link to={link.to} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Services
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {serviceCategories.map((cat) => (
              <li key={cat.slug}>
                <Link
                  to={`/services/${cat.slug}`}
                  className="hover:text-white transition-colors"
                >
                  {cat.shortName}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex min-w-0 items-start gap-2.5">
              <MapPin size={16} className="mt-0.5 shrink-0 text-sky-400" />
              <span className="min-w-0 break-words">
                {siteInfo.location}
                <br />
                <span className="text-white/45">{siteInfo.availability}</span>
              </span>
            </li>
            {siteInfo.phones.map((phone) => (
              <li key={phone} className="flex min-w-0 items-center gap-2.5">
                <Phone size={16} className="shrink-0 text-sky-400" />
                <a href={`tel:${phone}`} className="min-w-0 break-words hover:text-white transition-colors">
                  {phone}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center gap-3 py-6 text-xs text-white/45 sm:flex-row sm:justify-between">
          <p>
            © {siteInfo.year} {siteInfo.fullName}. All rights reserved.
          </p>
          <p>Built for a single technology partner. Multiple solutions.</p>
        </div>
      </div>
    </footer>
  );
}
