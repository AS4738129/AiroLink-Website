import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Wifi, Server, MapPin } from "lucide-react";
import logoFull from "../assets/images/logo-full.webp";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-900">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "46px 46px",
        }}
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute -left-32 top-10 h-96 w-96 rounded-full bg-techblue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-sky-400/10 blur-3xl" />

      <div className="container-page relative grid gap-14 py-20 lg:grid-cols-12 lg:items-center lg:py-28">
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-sky-300">
            <MapPin size={13} />
            Nationwide Availability across Ghana
          </div>

          <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-[3.25rem]">
            Smart Technology. Secure Systems. Reliable Connections.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            AiroLink IT and Security Services Consultancy delivers reliable IT
            infrastructure, cybersecurity, networking, cloud, identity,
            connectivity, business software and digital solutions that keep
            organizations secure, connected and productive.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link to="/request-quote" className="btn-primary">
              Request a Quote
              <ArrowRight size={16} />
            </Link>
            <Link to="/services" className="btn-outline-light">
              Explore Our Services
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-8 text-sm text-white/55">
            <span className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-sky-400" />
              Technical Solutions
            </span>
            <span className="flex items-center gap-2">
              <Wifi size={16} className="text-sky-400" />
              Security &amp; Connectivity
            </span>
            <span className="flex items-center gap-2">
              <Server size={16} className="text-sky-400" />
              Support
            </span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm rounded-3xl border border-white/10 bg-white/[0.03] p-6 shadow-panel backdrop-blur">
            <img
              src={logoFull}
              alt="AiroLink IT and Security Services Consultancy logo"
              className="w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
