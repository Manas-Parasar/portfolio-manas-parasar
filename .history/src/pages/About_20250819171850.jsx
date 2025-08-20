export default function About() {
  return (
    <div className="grid md:grid-cols-5 gap-8">
      <div className="md:col-span-2 glass rounded-3xl p-6">
        <img
          src="/src/assets/headshot.jpg"
          alt="Portrait"
          className="rounded-2xl object-cover h-64 w-full"
        />
        <h2 className="text-2xl font-bold mt-4">Manas Parasar</h2>
        <p className="subtle">Developer • Student Leader • Problem‑solver</p>
      </div>
      <div className="md:col-span-3 space-y-6">
        <div className="glass rounded-3xl p-6">
          <h3 className="font-semibold mb-2">About</h3>
          <p className="subtle">
            Student developer passionate about building impactful tools,
            research in political science, and leadership through service and
            innovation.
          </p>
        </div>
        <div className="glass rounded-3xl p-6">
          <h3 className="font-semibold mb-2">Academics & Scores</h3>
          <ul className="subtle list-disc list-inside space-y-1">
            <li>Digital SAT: 1530 (770 Math, 760 English)</li>
            <li>ACT: 35 (36 Math/Science/English, 33 Reading)</li>
            <li>GPA: 4.00 UW</li>
            <li>Graduating with Associate's in Computer Science</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h3 className="font-semibold mb-2">Leadership & Service</h3>
          <ul className="subtle list-disc list-inside space-y-1">
            <li>NHS: Vice President & President</li>
            <li>Student Government: Treasurer</li>
            <li>Engineering Club: Historian & President</li>
            <li>Debate Club Member</li>
            <li>Model UN Member</li>
            <li>Basketball Club Founder</li>
            <li>Red Cross Member</li>
            <li>Volunteer: Teacher's Assisstant</li>
            <li>Library: Shelver, Trainer, Computer Tutor</li>
          </ul>
        </div>
        <div className="glass rounded-3xl p-6">
          <h3 className="font-semibold mb-2">Skills</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Java",
              "React",
              "Python",
              "Firebase",
              "Tailwind",
              "Leadership",
              "Research",
              "Public Speaking",
            ].map((s) => (
              <span
                key={s}
                className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
