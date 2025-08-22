import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const nav = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/education", label: "Education" },
    { to: "/projects", label: "Projects" },
    { to: "/leadership", label: "Leadership" },
    { to: "/contact", label: "Contact" },
  ];

  const NavItems = ({ onClick }) => (
    <ul className="flex flex-col md:flex-row gap-4 md:gap-6 text-sm">
      {nav.map((n) => (
        <li key={n.to}>
          <NavLink
            to={n.to}
            onClick={onClick}
            className={({ isActive }) =>
              `transition hover:text-white ${
                isActive ? "text-white" : "text-slate-300"
              }`
            }
          >
            {n.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  return (
    <header className="sticky top-0 z-50">
      <div className="container mt-4">
        <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
          <Link to="/" className="font-black tracking-tight text-lg">
            <span className="text-brand-400">&lt;/&gt;</span> Manas Parasar
          </Link>
          <nav className="hidden md:block">
            <NavItems />
          </nav>
          <button
            className="md:hidden btn-ghost"
            onClick={() => setOpen(!open)}
            aria-label="Toggle Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="md:hidden mt-2 glass rounded-2xl px-5 py-4">
            <NavItems onClick={() => setOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
}
