import Hero from "../components/Hero";
import Section from "../components/Section";
import ProjectCard from "../components/ProjectCard";
import nhsLeaderboardScreenshot from "../assets/NHS Leaderboard Screenshot.png";
import soccerSquadShowdownScreenshot from "../assets/Soccer Squad Showdown Screenshot.png";
import { FaAward, FaLaptopCode, FaTools } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <Hero />

      <Section
        title="Featured Projects"
        subtitle="A few highlights, see the full list on the Projects page."
        cta={
          <a href="#/projects" className="btn-primary">
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
            img={nhsLeaderboardScreenshot}
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
            },
            {
              title: "Library Computer Tutor",
              desc: "Provided technical support and assisted patrons with computer literacy.",
            },
            {
              title: "Engineering Club President",
              desc: "Prototyped devices, mentored members, and ran build nights.",
            },
          ].map((c) => (
            <div key={c.title} className="glass rounded-3xl p-5 block">
              {c.title === "NHS President" && (
                <FaAward className="text-4xl mb-2 text-yellow-500" />
              )}
              {c.title === "Library Computer Tutor" && (
                <FaLaptopCode className="text-4xl mb-2 text-blue-500" />
              )}
              {c.title === "Engineering Club President" && (
                <FaTools className="text-4xl mb-2 text-gray-500" />
              )}
              <h3 className="font-semibold">{c.title}</h3>
              <p className="subtle text-sm mt-1">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <a href="#/experience" className="btn-primary">
            View More
          </a>
        </div>
      </Section>
    </>
  );
}
