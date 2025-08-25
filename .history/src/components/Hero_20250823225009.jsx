import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mt-6">
      <div className="relative overflow-hidden rounded-3xl glass p-10 md:p-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="headline"
        >
          Building a better tomorrow with code, leadership, and scholarship.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-4 text-lg subtle max-w-3xl"
        >
          I’m Manas Parasar, a passionate leader, developer, and scholar.
          Explore projects, leadership, and experience shaped by impact.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 flex gap-3"
        >
          <a className="btn-primary" href="#/about">
            About Me
          </a>
          <a className="btn-ghost" href="#/contact">
            Contact Me
          </a>
        </motion.div>
        {/* Decorative blobs */}
        <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
        <div className="pointer-events-none absolute -left-16 -top-16 h-52 w-52 rounded-full bg-fuchsia-500/30 blur-3xl" />
      </div>
    </section>
  );
}
