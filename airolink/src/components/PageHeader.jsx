export default function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 py-16 sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
        aria-hidden="true"
      />
      <div className="container-page relative max-w-3xl">
        {eyebrow && <p className="eyebrow text-sky-300">{eyebrow}</p>}
        <h1 className="mt-3 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-base leading-relaxed text-white/65 sm:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
