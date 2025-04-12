import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="bg-red-600 p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
      <Link href="/">
        <h1 className="font-bold text-xl cursor-pointer">
          Formula One Codex
        </h1>
      </Link>

      <ul className="flex gap-4">
        <li>
          <Link href="/drivers">Drivers</Link>
        </li>
        <li>
          <Link href="/teams">Teams</Link>
        </li>
        <li>
          <Link href="/circuits">Circuits</Link>
        </li>
        <li>
          <Link href="/races">Races</Link>
        </li>
        <li>
          <Link href="/standings">Standings</Link>
        </li>
      </ul>

      <SearchBar className="my-0" />
    </nav>
  );
}
