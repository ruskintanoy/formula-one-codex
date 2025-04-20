import Link from "next/link";

export default function StandingsTable({ data }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-700 bg-gray-950 shadow-2xl">
      <table className="min-w-full text-sm text-left text-gray-300">
        <thead className="bg-gray-900 text-xs uppercase tracking-wider text-red-500 sticky top-0 z-10 shadow-md">
          <tr>
            <th className="px-4 py-3 text-center">Position</th>
            <th className="px-4 py-3 text-center">Driver</th>
            <th className="px-4 py-3 text-center">Team</th>
            <th className="px-4 py-3 text-center">Points</th>
            <th className="px-4 py-3 text-center">Wins</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => {
            const isPodium = index < 3;
            const positionTag = isPodium ? `#${index + 1}` : entry.position;

            const rowHighlight = isPodium
              ? "bg-gray-900/60 border-l-4"
              : "";

            const ringColors = ["ring-yellow-400", "ring-gray-300", "ring-orange-500"];
            const positionColor = [
              "text-yellow-400 border-yellow-500",
              "text-gray-300 border-gray-400",
              "text-orange-500 border-orange-600",
            ];

            return (
              <tr
                key={entry.driverId}
                className={`border-t border-gray-800 hover:bg-gray-900 transition duration-100 ${rowHighlight} ${
                  isPodium ? ringColors[index] : ""
                }`}
              >
                {/* Position */}
                <td className="px-4 py-3 text-center font-black">
                  <span
                    className={`inline-block px-2 py-1 text-sm border-2 rounded-md font-extrabold ${
                      isPodium ? positionColor[index] : "text-gray-200 border-gray-600"
                    }`}
                  >
                    {positionTag}
                  </span>
                </td>

                {/* Driver Info */}
                <td className="px-4 py-3 text-center">
                  <div className="flex justify-center items-center gap-3 whitespace-nowrap">
                  <img
                    src={`/drivers/${entry.driverId}/${entry.driverId}.jpg`}
                    alt={entry.driver.shortName}
                    className={`w-12 h-12 rounded-full object-cover border mb-2 ${
                      isPodium ? "border-white ring-2 " + ringColors[index] : "border-gray-600"
                    }`}
                  />
                  </div>
                  <div>
                    <Link
                      href={`/drivers/${entry.driverId}`}
                      className={`hover:underline font-semibold ${
                        isPodium ? "text-white" : "text-gray-200"
                      }`}
                    >
                      {entry.driver.name} {entry.driver.surname}
                    </Link>
                    <div className="text-sm text-gray-400">{entry.driver.shortName}</div>
                  </div>
                </td>

                {/* Team Badge */}
                <td className="px-4 py-3 text-center">
                  <Link
                    href={`/teams/${entry.team.teamId}`}
                    className="inline-block bg-black/60 backdrop-blur-sm border border-red-700 text-red-400 text-sm font-bold px-3 py-1 rounded-md uppercase tracking-wide shadow-inner hover:underline hover:text-white transition"
                  >
                    {entry.team.teamName}
                  </Link>
                </td>


                {/* Points */}
                <td className="px-4 py-3 text-center font-extrabold text-white">
                  {entry.points}
                </td>

                {/* Wins */}
                <td className="px-4 py-3 text-center font-bold text-gray-300">
                  {entry.wins ?? 0}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
