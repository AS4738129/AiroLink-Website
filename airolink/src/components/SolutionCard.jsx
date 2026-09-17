import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function SolutionCard({ solution }) {
  const Icon = solution.icon;
  return (
    <Link
      to={`/services/${solution.categorySlug}`}
      className="group card-surface flex flex-col p-6 transition-colors hover:border-techblue-500/40"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-100 text-techblue-500">
          <Icon size={21} strokeWidth={1.8} />
        </div>
        <ArrowUpRight
          size={18}
          className="text-ink-300 transition-colors group-hover:text-techblue-500"
        />
      </div>
      <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
        {solution.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">
        {solution.description}
      </p>
    </Link>
  );
}
