export default function TeamStandingsTable({ data }) {
    return (
      <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 border border-red-700 rounded-xl shadow-xl p-6 text-white space-y-6">
        
        {/* Table Heading */}
        <h3 className="text-xl md:text-2xl font-extrabold text-center text-red-500 uppercase tracking-wide">
          Current Standing: {data.currentStanding} Place
        </h3>
  
        {/* Standings Table */}
        <div className="overflow-x-auto rounded-lg border border-gray-700 bg-gray-950 shadow-inner">
          <table className="min-w-full text-sm text-left text-gray-300">
            <thead className="bg-gray-900 text-xs uppercase text-gray-400 sticky top-0 z-10">
              <tr>
                <th className="px-4 py-3">Grand Prix</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3 text-right">Points</th>
              </tr>
            </thead>
            <tbody>
              {data.results.map((race, index) => (
                <tr
                  key={index}
                  className="border-t border-gray-700 hover:bg-gray-800 transition duration-150"
                >
                  <td className="px-4 py-3 font-semibold">{race.grandPrix}</td>
                  <td className="px-4 py-3 text-gray-400">{race.date}</td>
                  <td className="px-4 py-3 text-right font-bold text-white">
                    {race.points === null ? "TBD" : race.points}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
  