import ProjectCard from "../components/ProjectCard";
import Section from "../components/Section";
import nhsLeaderboardScreenshot from "../assets/NHS Leaderboard Screenshot.png";
import soccerSquadShowdownScreenshot from "../assets/Soccer Squad Showdown Screenshot.png";
import knowledgeNetworkScreenshot from "../assets/The Knowledge Network Screenshot.png";

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
      desc: "Full-stack soccer management game inspired by FIFA, featuring a Java-based simulation engine for match logic, Node.js REST API for data handling, and MongoDB for player statistics storage. Supports team building with predefined and live player data, tactical formations, AI opponents, local multiplayer, tournament modes, live commentary, post-match analysis, and deployment on Render with automated monitoring.",
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
    {
      title: "The Knowledge Network Website",
      desc: "The Knowledge Network is a comprehensive web platform designed to create an educational ecosystem that connects students, tutors, and communities. Built with React and Firebase, it enables collaboration for academic excellence and personal growth. Key features include school management and exploration, event organization and participation, donation tracking and support, sponsorship management, tutoring services, volunteer signups, resource sharing, and user profiles. The platform includes an extensive admin dashboard for managing schools, events, users, donations, sponsors, slots, clubs, website content, and year-based operations. It incorporates modern web technologies for a responsive, animated interface with real-time data synchronization via Firebase, user authentication, and role-based access control. Notable aspects include its focus on community building, innovation in education, and support for student success through various interactive modules.",
      tags: ["React", "JavaScript", "HTML", "Firestore", "Vite", "Tailwind CSS", "Framer Motion", "React Router DOM", "Render", "Google OAuth", "Git", "Firebase Hosting", "ESLint"],
      link: "https://github.com/Manas-Parasar/The-Knowledge-Network",
      img: knowledgeNetworkScreenshot,
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
