export function TimelineItem({ org, role, period, points = [] }) {
  return (
    <div className="glass rounded-2xl p-5">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="font-semibold">{role}</h3>
          <p className="subtle">{org}</p>
        </div>
        <span className="text-xs mt-2 md:mt-0 px-3 py-1 rounded-full bg-white/5 border border-white/10">
          {period}
        </span>
      </div>
      {points?.length > 0 && (
        <ul className="list-disc list-inside mt-3 text-sm subtle space-y-1">
          {points.map((p, i) => (
            <li key={i}>{p}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
