import { FaJava, FaRegCopyright } from "react-icons/fa";
import { DiVisualstudio } from "react-icons/di";
import {
  SiJavascript,
  SiReact,
  SiPython,
  SiFirebase,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiNodedotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiBootstrap,
  SiVite,
  SiEslint,
} from "react-icons/si";
import React from "react";

const skills = [
  { name: "Java", icon: <FaJava />, color: "text-red-500" },
  { name: "React", icon: <SiReact />, color: "text-blue-500" },
  { name: "Python", icon: <SiPython />, color: "text-yellow-500" },
  { name: "Firebase", icon: <SiFirebase />, color: "text-yellow-400" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "text-teal-500" },
  { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-500" },
  { name: "GitHub", icon: <SiGithub />, color: "text-gray-400" },
  { name: "Git", icon: <SiGit />, color: "text-orange-600" },
  { name: "HTML", icon: <SiHtml5 />, color: "text-orange-500" },
  { name: "CSS", icon: <SiCss3 />, color: "text-blue-600" },
  { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-300" },
  { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
  { name: "C", icon: <FaRegCopyright />, color: "text-blue-600" },
  { name: "C++", icon: <SiCplusplus />, color: "text-blue-700" },
  { name: "Express.js", icon: <SiExpress />, color: "text-gray-400" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "text-green-500" },
  { name: "MongoDB", icon: <SiMongodb />, color: "text-green-600" },
  { name: "Vite", icon: <SiVite />, color: "text-yellow-400" },
  { name: "ESLint", icon: <SiEslint />, color: "text-purple-400" },
  { name: "Visual Studio", icon: <DiVisualstudio />, color: "text-blue-500" },
];

export default function Education() {
  return (
    <div className="space-y-6">
      <div className="glass rounded-3xl p-6 hover:shadow-glow transition">
        <h3 className="font-semibold mb-2 text-2xl text-brand-400">College</h3>
        <div className="subtle">
          <p className="font-bold">Paradise Valley Community College</p>
          <p>Associate of Science in Computer Science</p>
          <p>Expected Graduation: May 2026</p>
          <br />
          <p>Associate of Arts in Mathematics</p>
          <p>Expected Graduation: May 2026</p>
        </div>
      </div>
      <div className="glass rounded-3xl p-6 hover:shadow-glow transition">
        <h3 className="font-semibold mb-2 text-2xl text-brand-400">
          High School
        </h3>
        <div className="subtle">
          <p className="font-bold">
            Arizona Agribusiness & Equine Center - Paradise Valley
          </p>
          <p>High School Diploma</p>
          <p>May 2026</p>
          <p>Phoenix, AZ</p>
        </div>
      </div>
      <div className="glass rounded-3xl p-6 hover:shadow-glow transition">
        <h3 className="font-semibold mb-2 text-2xl text-brand-400">
          Academics & Scores
        </h3>
        <ul className="subtle list-disc list-inside space-y-1">
          <li>SAT: 1530 (770 Math, 760 English)</li>
          <li>ACT: 35 (36 Math, 36 Science, 36 English, 33 Reading)</li>
          <li>GPA: 4.00 (Unweighted)</li>
        </ul>
      </div>
      <div className="glass rounded-3xl p-6 hover:shadow-glow transition">
        <h3 className="font-semibold mb-2 text-2xl text-brand-400">
          Certifications & Awards
        </h3>
        <ul className="subtle list-disc list-inside space-y-1">
          <li>Python Essential Training Certification (LinkedIn Learning)</li>
          <li>Introduction to Web APIs Certification (LinkedIn Learning)</li>
          <li>President’s Honor Roll (Paradise Valley Community College)</li>
          <li>
            4.0 Honor Roll (3x, Arizona Agribusiness & Equine Center - Paradise
            Valley)
          </li>
          <li>
            Excellence in Science (2024 - 2025, Arizona Agribusiness & Equine
            Center - Paradise Valley)
          </li>
        </ul>
      </div>
      <div className="glass rounded-3xl p-6 hover:shadow-glow transition">
        <h3 className="font-semibold mb-2 text-2xl text-brand-400">
          Related Coursework
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 subtle">
          <div>
            <ul className="list-disc list-inside space-y-1">
              <li>Geometry 1-2</li>
              <li>Algebra 3-4</li>
              <li>Pre-Calculus 1-2</li>
              <li>College Algebra/Functions (MAT151)</li>
              <li>Calculus with Analytical Geometry I (MAT220)</li>
              <li>Calculus with Analytical Geometry II (MAT230)</li>
              <li>Biology 1-2</li>
            </ul>
          </div>
          <div>
            <ul className="list-disc list-inside space-y-1">
              <li>Chemistry 1-2</li>
              <li>Introduction to Computer Science (Java) (CSC110AB)</li>
              <li>
                Object Oriented Programming and Data Structures (Java)
                (CSC205AC)
              </li>
              <li>Digital Design Fundamentals (CSC120)</li>
              <li>
                Introduction to Different Programming Languages (CSC240AA)
              </li>
              <li>Introduction to Logic (PHI103)</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="glass rounded-3xl p-6 hover:shadow-glow transition">
        <h3 className="font-semibold mb-2 text-2xl text-brand-400">Skills</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="flex items-center gap-4 bg-white/5 p-4 rounded-lg transition-all duration-300 ease-in-out hover:bg-white/10 hover:scale-105 hover:shadow-glow"
            >
              <div className={`text-4xl ${skill.color}`}>{skill.icon}</div>
              <div>
                <h4 className="font-bold">{skill.name}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
