import SearchBar from "../components/SearchBar";

export default function HomePage() {
  return (
    <section className="flex flex-col items-center justify-center text-center min-h-[80vh]">
      <h1 className="text-4xl font-bold mb-4 text-red-600">
        Welcome to Formula One Codex
      </h1>
      <p className="text-lg max-w-xl mb-8">
        Your ultimate Formula 1 encyclopedia. Explore detailed information about Drivers, Teams, Circuits, Races, and Championship Standings — all powered by the OpenF1 API.
      </p>

      <SearchBar />

      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="/drivers"
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          Drivers
        </a>
        <a
          href="/teams"
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          Teams
        </a>
        <a
          href="/circuits"
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          Circuits
        </a>
        <a
          href="/races"
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          Races
        </a>
        <a
          href="/standings"
          className="bg-red-600 px-4 py-2 rounded hover:bg-red-700"
        >
          Standings
        </a>
      </div>
    </section>
  );
}
