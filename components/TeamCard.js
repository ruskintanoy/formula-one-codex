import Link from "next/link";

export default function TeamCard({ team, logo, flag }) {
  return (
    <Link href={`/teams/${team.teamId}`}>
      <div className="group relative border border-red-800 bg-gradient-to-br from-black via-gray-900 to-black rounded-xl overflow-hidden hover:scale-[1.02] hover:border-red-600 transition duration-300 cursor-pointer shadow-xl ring-1 ring-red-600/20">

        {/* === Team Logo on light pad === */}
        <div className="relative w-full aspect-[3/2] bg-gradient-to-b from-gray-100 to-gray-300 flex items-center justify-center border-b border-red-800">
          <img
            src={logo}
            alt={`${team.teamName} logo`}
            className="h-20 object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-lg"
          />
        </div>

        {/* === Team Info === */}
        <div className="p-4 space-y-2 text-white">
          {/* Team Name + Flag */}
          <div className="flex items-center justify-between">
            <h2 className="text-base md:text-lg font-bold uppercase tracking-wide text-white">
              {team.teamName}
            </h2>
            {flag && (
              <img
                src={flag}
                alt={`${team.teamNationality} flag`}
                className="w-6 h-4 rounded-sm shadow-sm border border-gray-600"
              />
            )}
          </div>

          {/* Championship Stats */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-200 font-semibold tracking-wide">
            <span className="bg-black/50 border border-gray-700 px-2 py-1 rounded-md">
              🏆 Constructors:{" "}
              <span className="text-red-400 font-bold">
                {team.constructorsChampionships ?? 0}
              </span>
            </span>
            <span className="bg-black/50 border border-gray-700 px-2 py-1 rounded-md">
              🏎️ Drivers:{" "}
              <span className="text-red-400 font-bold">
                {team.driversChampionships ?? 0}
              </span>
            </span>
          </div>
        </div>

        {/* === Footer Banner === */}
        <div className="bg-gradient-to-r from-red-800 to-red-600 text-white text-center text-[11px] font-bold p-2 tracking-widest uppercase">
          Formula One Team
        </div>
      </div>
    </Link>
  );
}
