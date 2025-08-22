import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Leadership from "./pages/Experience";
import Contact from "./pages/Contact";
import Education from "./pages/Education";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-grid-sheer bg-grid-sheer bg-[length:40px_40px] overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-70" aria-hidden>
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-500 blur-[120px] opacity-30 animate-float" />
      </div>
      <Navbar />
      <main className="container py-10 flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
