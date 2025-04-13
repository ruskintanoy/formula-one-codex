import SearchBar from "../components/SearchBar";

export default function HomePage() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-4 py-12">

      {/* Watermark Icon */}
      <div className="absolute opacity-5 inset-0 flex justify-center items-center pointer-events-none">
        <img
          src="/res/f1-codex-icon.png"
          alt="F1 Codex Watermark"
          className="w-64 h-64 object-contain"
        />
      </div>

      {/* Main Content */}
      <h1 className="text-5xl font-extrabold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400 drop-shadow-lg">
        Welcome to Formula One Codex
      </h1>

      <p className="text-lg text-gray-300 max-w-xl mb-8 leading-relaxed">
        Your ultimate Formula 1 encyclopedia. Explore detailed information about Drivers, Teams, Circuits, Races, and Championship Standings — all powered by the OpenF1 API.
      </p>

      {/* Search Bar */}
      <SearchBar />

      {/* Quick Navigation Buttons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-12 w-full max-w-2xl">
        {["drivers", "teams", "circuits", "races", "standings"].map((item) => (
          <a
            key={item}
            href={`/${item}`}
            className="bg-gray-800/60 backdrop-blur-md border border-gray-700 text-white px-4 py-3 rounded-lg hover:bg-red-600 hover:border-red-600 transition-all duration-300 shadow-md text-sm uppercase tracking-wide font-semibold hover:scale-105"
          >
            {item}
          </a>
        ))}
      </div>
    </section>
  );
}
