import { Dot } from "lucide-react";

export default function IndustryCard({ industry }) {
  const Icon = industry.icon;
  return (
    <div className="card-surface flex h-full flex-col p-6">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-900 text-white">
        <Icon size={21} strokeWidth={1.8} />
      </div>
      <h3 className="mt-4 font-display text-base font-semibold text-navy-900">
        {industry.name}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-500">
        {industry.description}
      </p>
      <ul className="mt-4 space-y-1 border-t border-navy-900/5 pt-4">
        {industry.solutions.map((s) => (
          <li key={s} className="flex items-center text-xs text-ink-500">
            <Dot size={16} className="text-techblue-500" />
            {s}
          </li>
        ))}
      </ul>
    </div>
  );
}
