export default function Footer() {
  return (
    <footer className="mt-16 pb-10">
      <div className="container glass rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm subtle">
          © {new Date().getFullYear()} Manas Parasar. All rights reserved.
        </p>
        <div className="text-sm subtle flex gap-4">
          <a
            href="https://github.com/"
            target="_blank"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            className="hover:text-white"
          >
            LinkedIn
          </a>
          <a href="mailto:manas@example.com" className="hover:text-white">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
