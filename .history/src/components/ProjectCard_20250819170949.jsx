import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  desc,
  tags = [],
  img = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1400&auto=format&fit=crop",
  link = "#",
}) {
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group glass rounded-3xl overflow-hidden grid md:grid-cols-3"
    >
      <div className="md:col-span-1">
        <img
          src={img}
          alt={title}
          className="h-48 md:h-full w-full object-cover transition group-hover:scale-105"
        />
      </div>
      <div className="md:col-span-2 p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="subtle mb-4">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full bg-white/5 text-xs border border-white/10"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  );
}
