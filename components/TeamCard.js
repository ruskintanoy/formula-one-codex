import Link from "next/link";

export default function TeamCard({ team, logo, flag }) {
  return (
    <Link href={`/teams/${team.teamId}`}>
      <div className="group relative border border-red-800 bg-gradient-to-br from-black via-gray-900 to-black rounded-xl overflow-hidden hover:scale-[1.02] hover:border-red-600 transition duration-300 cursor-pointer shadow-lg">

        {/* Team Logo Section w/ Adaptive Light Background */}
        <div className="relative w-full aspect-[3/2] bg-gradient-to-t from-gray-200 to-gray-300 flex items-center justify-center border-b border-red-800">
          <img
            src={logo}
            alt={`${team.teamName} logo`}
            className="h-20 object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-md"
          />
        </div>

        {/* Team Info */}
        <div className="p-4 space-y-2 text-white">
          <div className="flex items-center justify-between">
            <h2 className="text-base md:text-lg font-bold uppercase tracking-wide">
              {team.teamName}
            </h2>
            <img
              src={flag}
              alt={`${team.teamNationality} flag`}
              className="w-6 h-4 rounded-sm shadow-sm border border-gray-600"
            />
          </div>

          {/* Championship Badges */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-gray-200">
            <span className="bg-gray-800 border border-gray-600 px-2 py-1 rounded uppercase font-semibold tracking-wide">
              Constructors:{" "}
              <span className="text-white font-bold">
                {team.constructorsChampionships ?? 0}
              </span>
            </span>
            <span className="bg-gray-800 border border-gray-600 px-2 py-1 rounded uppercase font-semibold tracking-wide">
              Drivers:{" "}
              <span className="text-white font-bold">
                {team.driversChampionships ?? 0}
              </span>
            </span>
          </div>
        </div>

        {/* Footer Banner */}
        <div className="bg-red-700 text-center text-white text-xs font-bold tracking-wider py-2 uppercase">
          Formula One Team
        </div>
      </div>
    </Link>
  );
}
