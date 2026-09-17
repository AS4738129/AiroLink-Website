export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
}) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && (
        <p className={`eyebrow ${light ? "text-sky-300" : ""}`}>{eyebrow}</p>
      )}
      <h2
        className={`mt-3 text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy-900"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            light ? "text-white/65" : "text-ink-500"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
