import { Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";

export default function ServiceCard({ category }) {
  const Icon = category.icon;
  return (
    <div className="card-surface flex h-full flex-col p-7 transition-shadow hover:shadow-panel">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-techblue-500/10 text-techblue-500">
        <Icon size={24} strokeWidth={1.8} />
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold text-navy-900">
        {category.name}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-ink-500">
        {category.description}
      </p>
      <ul className="mt-5 space-y-2">
        {category.featured.slice(0, 3).map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-ink-700">
            <Check size={15} className="mt-0.5 shrink-0 text-techblue-500" />
            {item}
          </li>
        ))}
      </ul>
      <Link
        to={`/services/${category.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-techblue-500 hover:text-techblue-400"
      >
        Explore Services
        <ArrowRight size={15} />
      </Link>
    </div>
  );
}
