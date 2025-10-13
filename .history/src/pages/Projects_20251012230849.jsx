import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import nhsLeaderboardScreenshot from "../assets/NHS Leaderboard Screenshot.png";
import soccerSquadShowdownScreenshot from "../assets/Soccer Squad Showdown Screenshot.png";

export default function Projects() {
  const items = [
    {
      title: "NHS Leaderboard App",
      desc: "Full-stack React + Firebase web application for NHS service hours management with role-based access control, Google OAuth authentication, and Firestore database. Features user dashboards, service hours tracking, leaderboard system, historical records, and responsive design deployed on Firebase hosting.",
      tags: [
        "React",
        "Firestore",
        "CSS",
        "Tailwind",
        "UX",
        "Git",
        "Node.js",
        "JavaScript",
        "JSX",
        "HTML",
        "React Router DOM",
        "Recharts",
        "Vite",
        "PostCSS",
        "Google OAuth",
        "Firebase Hosting",
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
        "Node.js",
        "Express",
        "MongoDB",
        "Axios",
        "Dotenv",
        "CORS",
        "Nodemon",
        "Bootstrap",
        "REST API",
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
