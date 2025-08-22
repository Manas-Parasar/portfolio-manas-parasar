import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Leadership from "./pages/Leadership";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-grid-sheer bg-grid-sheer bg-[length:40px_40px]">
      <div className="absolute inset-0 -z-10 opacity-70" aria-hidden>
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-brand-500 blur-[120px] opacity-30 animate-float" />
        <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-fuchsia-500 blur-[120px] opacity-30 animate-float" />
      </div>
      <Navbar />
      <main className="container py-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
