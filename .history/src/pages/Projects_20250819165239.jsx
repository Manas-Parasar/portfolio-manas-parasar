import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";

export default function Projects() {
  const items = [
    {
      title: "NHS Leaderboard App",
      desc: "Full-stack React + Firebase app with role-based dashboards, Google OAuth, and Firestore.",
      tags: ["React", "Firebase", "Auth", "UX"],
    },
    {
      title: "PeerConnect",
      desc: "Homework helper bot; context-aware answers and study workflows.",
      tags: ["Java", "AI", "Bot"],
    },
    {
      title: "AI Chatbot",
      desc: "Personal chatbot experiments with embeddings and retrieval.",
      tags: ["Python", "RAG", "LLM"],
    },
  ];

  return (
    <Section
      title="Projects"
      subtitle="A mix of shipped apps, experiments, and research tooling."
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
