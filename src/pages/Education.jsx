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
          <p className="font-bold">Arizona Agribusiness & Equine Center, Paradise Valley</p>
          <p>High School Diploma</p>
          <p>May 2026</p>
          <p>Phoenix, AZ</p>
        </div>
      </div>
      <div className="glass rounded-3xl p-6">
        <h3 className="font-semibold mb-2 text-2xl">Academics & Scores</h3>
        <ul className="subtle list-disc list-inside space-y-1">
          <li>Digital SAT: 1530 (770 Math, 760 English)</li>
          <li>ACT: 35 (36 Math/Science/English, 33 Reading)</li>
          <li>GPA: 4.00 (Unweighted)</li>
        </ul>
      </div>
    </div>
  );
}
