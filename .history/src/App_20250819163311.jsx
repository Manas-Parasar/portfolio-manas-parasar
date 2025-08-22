function App() {
  return (
    <div className="bg-gray-100 text-gray-900 min-h-screen">
      {/* Header */}
      <header className="p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
        <h1 className="text-3xl font-bold">Manas Parasar</h1>
        <nav className="mt-2">
          <a href="/" className="mr-4 hover:underline">
            Home
          </a>
          <a href="/about" className="mr-4 hover:underline">
            About
          </a>
          <a href="/projects" className="mr-4 hover:underline">
            Projects
          </a>
          <a href="/leadership" className="mr-4 hover:underline">
            Leadership
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="p-10 text-center">
        <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg text-gray-700">
          Explore my projects, leadership experiences, and achievements.
        </p>
      </main>
    </div>
  );
}

export default App;
