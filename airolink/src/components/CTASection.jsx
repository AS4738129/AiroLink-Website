import { Link } from "react-router-dom";
import { ArrowRight, PhoneCall } from "lucide-react";

export default function CTASection({
  title = "Let's Build a Smarter, More Secure Future.",
  description = "Whether you need a reliable network, secure IT infrastructure, business software, cloud migration, cybersecurity solutions, connectivity or a professional website, AiroLink is ready to help.",
  primaryLabel = "Request a Quote",
  primaryTo = "/request-quote",
  secondaryLabel = "Contact Us",
  secondaryTo = "/contact",
}) {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-techblue-500/20 blur-3xl" />
      <div className="container-page relative section-pad text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65">
          {description}
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link to={primaryTo} className="btn-primary">
            {primaryLabel}
            <ArrowRight size={16} />
          </Link>
          <Link to={secondaryTo} className="btn-outline-light">
            <PhoneCall size={16} />
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
