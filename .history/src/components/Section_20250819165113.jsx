export default function Section({ title, subtitle, children, cta }) {
  return (
    <section className="mt-12">
      <div className="flex items-end justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            {title}
          </h2>
          {subtitle && <p className="subtle mt-1">{subtitle}</p>}
        </div>
        {cta}
      </div>
      <div className="grid gap-6">{children}</div>
    </section>
  );
}
