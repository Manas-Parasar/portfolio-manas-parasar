export default function Footer() {
  return (
    <footer className="mt-16 pb-10">
      <div className="container glass rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 hover:shadow-glow transition">
        <p className="text-sm subtle">
          © {new Date().getFullYear()} Manas Parasar. All rights reserved.
        </p>
        <div className="text-sm subtle flex gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-brand-400"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/manas-parasar-60188037b/?trk=PROFILE_DROP_DOWN"
            target="_blank"
            className="hover:text-brand-400"
          >
            LinkedIn
          </a>
          <a href="mailto:manas@example.com" className="hover:text-brand-400">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
