import { FaJava } from "react-icons/fa";
import {
  SiJavascript,
  SiReact,
  SiPython,
  SiFirebase,
  SiTailwindcss,
  SiGit,
  SiHtml5,
  SiCss3,
  SiCplusplus,
} from "react-icons/si";
import React from "react";

const skills = [
  { name: "Java", icon: <FaJava />, color: "text-red-500" },
  { name: "React", icon: <SiReact />, color: "text-blue-500" },
  { name: "Python", icon: <SiPython />, color: "text-yellow-500" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-500" },
  { name: "Git", icon: <SiGit />, color: "text-orange-600" },
  { name: "HTML", icon: <SiHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <SiCss3 />, color: "text-blue-600" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-300" },
  { name: "C++", icon: <SiCplusplus />, color: "text-blue-700" },
];

export default function Education() {
  return (
    <div className="space-y-6">
      <div className="glass rounded-3xl p-6">
        <h3 className="font-semibold mb-2 text-2xl">College</h3>
        <div className="subtle">
          <p className="font-bold">Paradise Valley Community College</p>
          <p>Associate of Science in Computer Science</p>
          <p>May 2026</p>
          <p>Phoenix, AZ</p>
        </div>
      </div>
      <div className="glass rounded-3xl p-6">
        <h3 className="font-semibold mb-2 text-2xl">High School</h3>
        <div className="subtle">
          <p className="font-bold">
            Arizona Agribusiness & Equine Center, Paradise Valley
          </p>
          <p>High School Diploma</p>
          <p>May 2026</p>
          <p>Phoenix, AZ</p>
        </div>
      </div>
      <div className="glass rounded-3xl p-6">
        <h3 className="font-semibold mb-2 text-2xl">Academics & Scores</h3>
        <ul className="subtle list-disc list-inside space-y-1">
          <li>Digital SAT: 1530 (770 Math, 760 English)</li>
          <li>ACT: 35 (36 Math, 36 Science, 36 English, 33 Reading)</li>
          <li>GPA: 4.00 (Unweighted)</li>
        </ul>
      </div>
      <div className="glass rounded-3xl p-6">
        <h3 className="font-semibold mb-2 text-2xl">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <React.Fragment key={skill.name}>
              {index === 8 && <div className="hidden md:block col-span-1" />}
              <div className="flex items-center gap-4 bg-white/5 p-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-white/10 hover:scale-105">
                <div className={`text-4xl ${skill.color}`}>{skill.icon}</div>
                <div>
                  <h4 className="font-bold">{skill.name}</h4>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
