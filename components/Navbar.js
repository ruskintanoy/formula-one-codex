export default function Navbar() {
    return (
      <nav className="bg-red-600 p-4 flex justify-between">
        <h1 className="font-bold text-xl">Formula One Codex</h1>
        <ul className="flex gap-4">
          <li><a href="/drivers">Drivers</a></li>
          <li><a href="/teams">Teams</a></li>
          <li><a href="/circuits">Circuits</a></li>
          <li><a href="/races">Races</a></li>
          <li><a href="/standings">Standings</a></li>
        </ul>
      </nav>
    )
  }
  