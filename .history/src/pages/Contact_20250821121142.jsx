export default function Contact() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      <div className="glass rounded-3xl p-6">
        <h2 className="text-2xl font-bold">Let’s collaborate</h2>
        <p className="subtle mt-2">
          Open to academic opportunities, internships, collaboration, and
          building impactful tools.
        </p>
        <form className="mt-6 grid gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            className="glass rounded-xl px-4 py-3"
            placeholder="Your name"
          />
          <input
            className="glass rounded-xl px-4 py-3"
            placeholder="Your email"
            type="email"
          />
          <textarea
            className="glass rounded-xl px-4 py-3 min-h-[140px]"
            placeholder="Your message"
          />
          <button className="btn-primary w-fit">Send</button>
        </form>
      </div>
      <div className="grid gap-4">
        <a
          className="glass rounded-3xl p-6 hover:shadow-glow transition"
          href="mailto:manas@example.com"
        >
          manasphx@gmail.com
        </a>
        <a
          className="glass rounded-3xl p-6 hover:shadow-glow transition"
          href="https://github.com/"
          target="_blank"
        >
          GitHub - Manas Parasar
        </a>
        <a
          className="glass rounded-3xl p-6 hover:shadow-glow transition"
          href="https://www.linkedin.com/in/manas-parasar-60188037b/?trk=PROFILE_DROP_DOWN"
          target="_blank"
        >
          LinkedIn - Manas Parasar
        </a>
      </div>
    </div>
  );
}
