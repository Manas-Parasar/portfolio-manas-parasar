import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "NHS Leaderboard App",
      description:
        "A full-stack React + Firebase app to track NHS hours with role-based access.",
      tech: "React, Firebase, Tailwind",
      link: "https://github.com/yourusername/nhs-leaderboard-app",
    },
    {
      title: "Homework Helper Bot",
      description: "An AI chatbot to help students with homework questions.",
      tech: "Java, AI, APIs",
      link: "#",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-10 p-4 grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((proj, index) => (
        <ProjectCard key={index} {...proj} />
      ))}
    </div>
  );
}
