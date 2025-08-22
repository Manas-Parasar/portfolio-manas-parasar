import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

export default function Projects() {
  const items = [
    {
      title: "NHS Leaderboard App",
      desc: "Full-stack React + Firebase app with role-based dashboards, Google OAuth, and Firestore.",
      tags: ["React", "Firebase", "Auth", "UX"],
    },
  ];

  return (
    <Section
      title="Projects"
      subtitle="A mix of shipped apps and ongoing work."
    >
      <div className="grid gap-6">
        {items.map((p) => (
          <ProjectCard
            key={p.title}
            title={p.title}
            desc={p.desc}
            tags={p.tags}
          />
        ))}
      </div>
    </Section>
  );
}
