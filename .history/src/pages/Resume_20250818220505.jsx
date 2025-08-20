export default function Resume() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-4">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <p className="mb-4">You can download my full resume as PDF:</p>
      <a
        href="/resume.pdf"
        target="_blank"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
      >
        Download Resume
      </a>

      <h3 className="text-2xl font-bold mt-6 mb-2">Experience & Leadership</h3>
      <ul className="list-disc list-inside">
        <li>NHS President & VP</li>
        <li>Student Government Treasurer</li>
        <li>Engineering Club Historian</li>
        <li>Debate & Red Cross Club member</li>
      </ul>
    </div>
  );
}
