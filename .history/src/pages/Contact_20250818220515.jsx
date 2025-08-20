export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-4 text-center">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="mb-4">
        Email:{" "}
        <a
          href="mailto:Manasphx@gmail.com"
          className="text-blue-500 hover:underline"
        >
          Manasphx@gmail.com
        </a>
      </p>
      <p>
        LinkedIn / GitHub:{" "}
        <a href="#" className="text-blue-500 hover:underline">
          Your Links Here
        </a>
      </p>
    </div>
  );
}
