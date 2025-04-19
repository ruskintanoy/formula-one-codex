import Link from "next/link";

export default function TeamCard({ team, logo, flag }) {
  return (
    <Link href={`/teams/${team.teamId}`}>
      <div className="group relative bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.03] transition duration-300 cursor-pointer">

        {/* Team Logo */}
        <div className="relative w-full aspect-[3/2] bg-white flex items-center justify-center">
          <img
            src={logo}
            alt={`${team.teamName} logo`}
            className="h-20 object-contain group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Info Section */}
        <div className="p-4 space-y-2">
          {/* Team Name & Flag */}
          <div className="flex items-center justify-between">
            <h2 className="text-lg md:text-xl font-extrabold text-white">
              {team.teamName}
            </h2>
            <img
              src={flag}
              alt={`${team.teamNationality} flag`}
              className="w-6 h-4 rounded-sm shadow-sm"
            />
          </div>

          {/* Championships */}
          <div className="text-gray-400 text-sm">
            Constructors:{" "}
            <span className="text-white font-semibold">
              {team.constructorsChampionships ?? 0}
            </span>{" "}
            | Drivers:{" "}
            <span className="text-white font-semibold">
              {team.driversChampionships ?? 0}
            </span>
          </div>
        </div>

        {/* Footer Banner */}
        <div className="bg-red-600 text-white text-center text-xs font-semibold p-2 tracking-wide">
          Formula One Team
        </div>
      </div>
    </Link>
  );
}
