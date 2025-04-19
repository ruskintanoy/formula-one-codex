import Link from "next/link";

export default function StandingsTable({ data }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-gray-700 bg-gray-900 shadow-lg">
      <table className="min-w-full table-auto text-sm text-left text-gray-300">
        <thead className="bg-gray-800 text-xs uppercase tracking-wider text-gray-400 sticky top-0 z-10">
          <tr>
            <th className="px-4 py-3">Pos</th>
            <th className="px-4 py-3">Driver</th>
            <th className="px-4 py-3">Team</th>
            <th className="px-4 py-3 text-right">Points</th>
            <th className="px-4 py-3 text-right">Wins</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) => (
            <tr
              key={entry.driverId}
              className="border-t border-gray-700 hover:bg-gray-800 transition"
            >
              <td className="px-4 py-3 font-bold text-white">{entry.position}</td>

              <td className="px-4 py-3 whitespace-nowrap">
                <Link href={`/drivers/${entry.driverId}`} className="hover:underline font-semibold text-white">
                  {entry.driver.name} {entry.driver.surname}
                </Link>
                <div className="text-xs text-gray-400">{entry.driver.shortName}</div>
              </td>

              <td className="px-4 py-3 whitespace-nowrap">{entry.team.teamName}</td>

              <td className="px-4 py-3 text-right font-medium text-white">{entry.points}</td>
              <td className="px-4 py-3 text-right">{entry.wins}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
