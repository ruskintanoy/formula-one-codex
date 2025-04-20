export default function TeamStandingTable({ standings }) {
  if (!standings?.currentStanding || !standings?.races) {
    return <p className="text-gray-400 italic">Standings data not available.</p>;
  }

  const { position, points } = standings.currentStanding;

  return (
    <div className="space-y-4">
      {/* === Caption === */}
      <p className="text-sm text-gray-300 italic text-center">
        This team is currently <span className="text-red-400 font-bold">#{position}</span> in the 2025 Constructors&apos; Championship with <span className="text-red-400 font-bold">{points} points</span>.
      </p>

      {/* === Standings Table === */}
      <div className="overflow-x-auto border border-red-800 rounded-lg">
        <table className="min-w-full text-sm text-left text-gray-300 bg-black">
          <thead className="text-xs uppercase bg-red-800 text-white">
            <tr>
              <th className="px-4 py-2">Grand Prix</th>
              <th className="px-4 py-2">Date</th>
              <th className="px-4 py-2">Points</th>
            </tr>
          </thead>
          <tbody>
            {standings.races.map((race, index) => (
              <tr key={index} className="border-t border-gray-700 hover:bg-red-800/10">
                <td className="px-4 py-2">{race.grandPrix}</td>
                <td className="px-4 py-2">{race.date}</td>
                <td className="px-4 py-2">
                  {race.points === "TND" ? (
                    <span className="italic text-gray-400">TND</span>
                  ) : (
                    race.points
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
