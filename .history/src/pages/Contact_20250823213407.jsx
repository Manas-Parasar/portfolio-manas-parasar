import { Mail, Github, Linkedin } from "lucide-react"; // Import icons

export default function Contact() {
  return (
    <div className="flex flex-col gap-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Let's Connect!</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          I'm always open to new opportunities, collaborations, and interesting
          conversations. Feel free to reach out through any of the channels
          below.
        </p>
      </div>
      <div className="grid gap-4 justify-items-center">
        <a
          className="glass rounded-3xl py-8 px-6 hover:shadow-glow transition flex items-center space-x-4 w-1/2"
          href="mailto:manasphx@gmail.com"
        >
          <Mail size={36} color="#DB4437" />
          <span>manasphx@gmail.com</span>
        </a>

        <a
          className="glass rounded-3xl py-8 px-6 hover:shadow-glow transition flex items-center space-x-4 w-1/2"
          href="https://github.com/Manas-Parasar"
          target="_blank"
        >
          <Github size={36} color="#333" />
          <span>GitHub - Manas Parasar</span>
        </a>
        <a
          className="glass rounded-3xl py-8 px-6 hover:shadow-glow transition flex items-center space-x-4 w-1/2"
          href="https://www.linkedin.com/in/manas-parasar-60188037b/"
          target="_blank"
        >
          <Linkedin size={36} color="#0A66C2" />
          <span>LinkedIn - Manas Parasar</span>
        </a>
      </div>
    </div>
  );
}
