import { Link } from "react-router-dom";
import { Check, ArrowRight, Send } from "lucide-react";

export default function ServiceCategory({ category, reversed = false }) {
  const Icon = category.icon;
  return (
    <div
      id={category.slug}
      className="grid gap-10 border-b border-navy-900/5 py-14 lg:grid-cols-12 lg:gap-14 lg:py-16"
    >
      <div className={`lg:col-span-4 ${reversed ? "lg:order-2" : ""}`}>
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-navy-900 text-white">
          <Icon size={26} strokeWidth={1.7} />
        </div>
        <h3 className="mt-5 font-display text-2xl font-semibold text-navy-900">
          {category.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-500">
          {category.intro}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to={`/services/${category.slug}`}
            className="btn-secondary"
          >
            Explore Service
            <ArrowRight size={15} />
          </Link>
          <Link
            to={`/request-quote?service=${category.slug}`}
            className="btn-primary"
          >
            Request This Service
            <Send size={15} />
          </Link>
        </div>
      </div>

      <div className={`lg:col-span-8 ${reversed ? "lg:order-1" : ""}`}>
        <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
          {category.services.map((service) => (
            <div
              key={service}
              className="flex items-start gap-2.5 rounded-lg px-2 py-1.5 text-sm text-ink-700"
            >
              <Check size={16} className="mt-0.5 shrink-0 text-techblue-500" />
              {service}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
