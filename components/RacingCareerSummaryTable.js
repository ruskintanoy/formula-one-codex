const RacingCareerSummaryTable = ({ data }) => {
  const getPositionClass = (position) => {
    if (typeof position !== "string") return "";
    if (position.startsWith("1")) return "bg-yellow-500 text-black";   // Gold
    if (position.startsWith("2")) return "bg-gray-400 text-black";     // Silver
    if (position.startsWith("3")) return "bg-amber-700 text-black";    // Bronze
    return "";
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-center border-collapse border border-gray-700">
        <thead>
          <tr className="bg-gray-800 text-gray-300">
            <th className="border border-gray-700 px-2 py-1">Season</th>
            <th className="border border-gray-700 px-2 py-1 text-left">Series</th>
            <th className="border border-gray-700 px-2 py-1 text-left">Team</th>
            <th className="border border-gray-700 px-2 py-1">Races</th>
            <th className="border border-gray-700 px-2 py-1">Wins</th>
            <th className="border border-gray-700 px-2 py-1">Poles</th>
            <th className="border border-gray-700 px-2 py-1">Fastest Laps</th>
            <th className="border border-gray-700 px-2 py-1">Podiums</th>
            <th className="border border-gray-700 px-2 py-1">Points</th>
            <th className="border border-gray-700 px-2 py-1">Position</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-900 hover:bg-gray-800" : "bg-gray-800 hover:bg-gray-700"}
            >
              <td className="border border-gray-700 px-2 py-1">{row.season}</td>
              <td className="border border-gray-700 px-2 py-1 text-left">{row.series}</td>
              <td className="border border-gray-700 px-2 py-1 text-left">{row.team}</td>
              <td className="border border-gray-700 px-2 py-1">{row.races}</td>
              <td className="border border-gray-700 px-2 py-1">{row.wins}</td>
              <td className="border border-gray-700 px-2 py-1">{row.poles}</td>
              <td className="border border-gray-700 px-2 py-1">{row.fastestLaps}</td>
              <td className="border border-gray-700 px-2 py-1">{row.podiums}</td>
              <td className="border border-gray-700 px-2 py-1">{row.points}</td>
              <td className={`border border-gray-700 px-2 py-1 font-bold ${getPositionClass(row.position)}`}>
                {row.position}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RacingCareerSummaryTable;
