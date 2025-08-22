import MyPortrait from "../assets/MyPortrait.png";
import MyResume from "../assets/Manas Parasar Resume.pdf";
import { motion } from "framer-motion";
import {
  Award,
  Users,
  BookOpen,
  Layers,
  Globe,
  Activity,
  Heart,
  Handshake,
  Library,
} from "lucide-react";

export default function About() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Portrait Card with Motion */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="md:col-span-1 glass rounded-3xl p-6 flex flex-col items-center text-center hover:shadow-glow transition"
      >
        <img
          src={MyPortrait}
          alt="Portrait"
          className="rounded-2xl object-cover h-64 w-full shadow-lg hover:scale-105 transition-transform bg-gradient-to-br from-brand-100 to-brand-200 p-1"
        />
        <h2 className="text-2xl font-bold mt-4">Manas Parasar</h2>
        <p className="subtle">Leader • Developer • Problem-solver</p>
        <a
          href={MyResume}
          download="Manas_Parasar_Resume.pdf"
          className="mt-4 inline-block bg-brand-500 hover:bg-brand-600 text-white font-bold py-2 px-4 rounded-lg transition-colors"
        >
          Download Resume
        </a>
      </motion.div>

      {/* Right Column */}
      <div className="md:col-span-2 space-y-6">
        {/* About Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="glass rounded-3xl p-6 hover:shadow-glow transition"
        >
          <h3 className="font-semibold mb-2">About</h3>
          <p className="subtle">
            Student developer passionate about building impactful tools,
            expanding my knowledge across disciplines, and leading through
            service and innovation. I thrive on challenges and enjoy
            collaborating to solve problems.
          </p>
        </motion.div>

        {/* Leadership Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="glass rounded-3xl p-6 hover:shadow-glow transition"
        >
          <h3 className="font-semibold mb-2">Leadership & Service</h3>
          <ul className="subtle space-y-2">
            <li className="flex items-center gap-2">
              <Award size={16} /> NHS: Vice President & President
            </li>
            <li className="flex items-center gap-2">
              <Users size={16} /> Student Government: Treasurer
            </li>
            <li className="flex items-center gap-2">
              <BookOpen size={16} /> Engineering Club: Historian & President
            </li>
            <li className="flex items-center gap-2">
              <Layers size={16} /> Debate Club Member
            </li>
            <li className="flex items-center gap-2">
              <Globe size={16} /> Model UN Member
            </li>
            <li className="flex items-center gap-2">
              <Activity size={16} /> Basketball Club Founder
            </li>
            <li className="flex items-center gap-2">
              <Heart size={16} /> Red Cross Member
            </li>
            <li className="flex items-center gap-2">
              <Handshake size={16} /> Volunteer: Teacher's Assistant
            </li>
            <li className="flex items-center gap-2">
              <Library size={16} /> Library: Shelver, Trainer, Computer Tutor
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
