import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-xl font-bold">Manas Parasar</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-blue-400">
          Home
        </Link>
        <Link to="/about" className="hover:text-blue-400">
          About
        </Link>
        <Link to="/projects" className="hover:text-blue-400">
          Projects
        </Link>
        <Link to="/resume" className="hover:text-blue-400">
          Resume
        </Link>
        <Link to="/contact" className="hover:text-blue-400">
          Contact
        </Link>
      </div>
    </nav>
  );
}
