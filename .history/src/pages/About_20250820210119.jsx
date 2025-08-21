import MyPortrait from "../assets/MyPortrait.png";

export default function About() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-1 glass rounded-3xl p-6">
        <img
          src="/src/assets/MyPortrait.png"
          alt="MyPortrait"
          className="rounded-2xl object-cover h-64 w-full"
        />
        <h2 className="text-2xl font-bold mt-4">Manas Parasar</h2>
        <p className="subtle">Leader • Developer • Problem‑solver</p>
        <a
          href="#" // Placeholder link
          download="Manas_Parasar_CV.pdf"
          className="mt-4 inline-block bg-brand-500 hover:bg-brand-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Download CV
        </a>
      </div>
      <div className="md:col-span-2 space-y-6">
        <div className="glass rounded-3xl p-6">
          <h3 className="font-semibold mb-2">About</h3>
          <p className="subtle">
            Student developer passionate about building impactful tools,
            expanding my knowledge in vast areas of study, and leading through
            service and innovation.
          </p>
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
      </div>
    </div>
  );
}
