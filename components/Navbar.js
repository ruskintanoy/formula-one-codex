import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <nav className="bg-red-600/90 backdrop-blur-md p-4 flex flex-wrap justify-between items-center shadow-md shadow-red-900 gap-4">
      {/* Logo & Title */}
      <div className="flex items-center gap-3">
        <div className="bg-black rounded-full w-13 h-13 flex items-center justify-center shadow-[0_0_10px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform">
          <img
            src="/res/f1-codex-icon.png"
            alt="F1 Codex Icon"
            className="w-10 h-10 drop-shadow-lg"
          />
        </div>
        <h1 className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 tracking-wide">
          Formula One Codex
        </h1>
      </div>

      {/* Navigation Links */}
      <ul className="flex gap-6 text-white text-md font-medium">
        {["drivers", "teams", "circuits", "races", "standings"].map((item) => (
          <li key={item}>
            <a href={`/${item}`} className="relative group">
              <span className="hover:text-black transition capitalize">
                {item}
              </span>
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
            </a>
          </li>
        ))}
      </ul>

      {/* Search Bar */}
      <div className="hidden md:block">
        <SearchBar />
      </div>
    </nav>
  );
}
