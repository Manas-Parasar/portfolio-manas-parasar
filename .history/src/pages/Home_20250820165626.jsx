import Hero from "../components/Hero";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <>
      <Hero />

      <Section
        title="Featured Projects"
        subtitle="A few highlights—see the full list on the Projects page."
        cta={
          <a href="/projects" className="btn-primary">
            See all
          </a>
        }
      >
        <div className="grid md:grid-cols-2 gap-6">
          <ProjectCard
            title="NHS Service Hours Leaderboard"
            desc="Role-based React + Firebase app to manage hours, events, and year-end reporting."
            tags={["React", "Firebase", "Auth", "Firestore"]}
            link="https://github.com/Manas-Parasar/NHS-Service-Hours-Leaderboard"
          />
        </div>
      </Section>

      <Section
        title="Leadership & Impact"
        subtitle="Building communities, organizing events, and driving initiatives."
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "NHS President",
              desc: "Led service initiatives, organized events, and introduced data-driven tracking.",
              img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1400&auto=format&fit=crop",
            },
            {
              title: "Student Government Treasurer",
              desc: "Managed budgets, fundraisers, and transparent reporting.",
              img: "https://images.unsplash.com/photo-1529101091764-c3526daf38fe?q=80&w=1400&auto=format&fit=crop",
            },
            {
              title: "Engineering Club President",
              desc: "Prototyped devices, mentored members, and ran build nights.",
              img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1400&auto=format&fit=crop",
            },
          ].map((c) => (
            <a
              key={c.title}
              href="/leadership"
              className="group glass rounded-3xl overflow-hidden"
            >
              <img
                src={c.img}
                alt=""
                className="h-44 w-full object-cover group-hover:scale-105 transition"
              />
              <div className="p-5">
                <h3 className="font-semibold">{c.title}</h3>
                <p className="subtle text-sm mt-1">{c.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
