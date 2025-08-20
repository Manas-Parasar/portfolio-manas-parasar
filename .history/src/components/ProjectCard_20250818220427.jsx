export default function ProjectCard({ title, description, tech, link }) {
  return (
    <div className="border rounded-lg shadow-lg p-4 hover:scale-105 transition transform">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="mb-2">{description}</p>
      <p className="text-sm mb-2">
        <strong>Tech:</strong> {tech}
      </p>
      {link && (
        <a
          href={link}
          target="_blank"
          className="text-blue-500 hover:underline"
        >
          View Project
        </a>
      )}
    </div>
  );
}
