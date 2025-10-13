import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import nhsLeaderboardScreenshot from "../assets/NHS Leaderboard Screenshot.png";
import soccerSquadShowdownScreenshot from "../assets/Soccer Squad Showdown Screenshot.png";

export default function Projects() {
  const items = [
    {
      title: "NHS Leaderboard App",
      desc: "Full-stack React + Firebase app with role-based dashboards, Google OAuth, and Firestore.",
      tags: [
        "React",
        "Firebase",
        "Firestore",
        "CSS",
        "Tailwind",
        "Auth",
        "UX",
        "Git",
        "Node.js",
        "JavaScript",
      ],
      link: "https://github.com/Manas-Parasar/NHS-Service-Hours-Leaderboard",
      img: nhsLeaderboardScreenshot,
    },
    {
      title: "Soccer Squad Showdown",
      desc: "Full-stack soccer management game with Java simulation engine, Node.js API, MongoDB, and Bootstrap frontend. Features team building, tactical systems, AI opponents, and live match simulation.",
      tags: [
        "Java",
        "JavaScript",
        "HTML",
        "CSS",
        "Maven",
        "SparkJava",
        "Jackson",
        "Gson",
        "Unirest",
        "SLF4J",
        "Node.js",
        "Express",
        "Mongoose",
        "MongoDB",
        "Axios",
        "Dotenv",
        "CORS",
        "Nodemon",
        "Bootstrap",
        "REST API",
        "Game Development",
        "AI Simulation",
        "Multiplayer",
        "Tournament System",
        "Tactical Formations",
        "Live Commentary",
        "Player Statistics",
        "Render Deployment",
      ],
      link: "https://github.com/Manas-Parasar/Soccer-Squad-Showdown",
      img: soccerSquadShowdownScreenshot,
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
            link={p.link}
            img={p.img}
          />
        ))}
      </div>
    </Section>
  );
}
