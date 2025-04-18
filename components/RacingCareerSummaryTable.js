const RacingCareerSummaryTable = ({ data, legend }) => {
  const getPositionClass = (position) => {
    if (typeof position !== "string") return "";

    switch (position.trim()) {
      case "1st":
        return "bg-yellow-500 text-black";
      case "2nd":
        return "bg-gray-400 text-black";
      case "3rd":
        return "bg-amber-700 text-black";
      case "1st*":
        return "bg-yellow-500 text-black";
      case "NC†":
        return "bg-red-300 text-black";
      case "2nd*":
        return "bg-gray-400 text-black";
      case "3rd*":
        return "bg-amber-700 text-black";
      case "DNF":
        return "bg-red-500 text-black";
      default:
        return "";
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm text-center border-separate border-spacing-y-1">
        <thead>
          <tr className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white">
            <th className="px-3 py-2">Season</th>
            <th className="px-3 py-2 text-left">Series</th>
            <th className="px-3 py-2 text-left">Team</th>
            <th className="px-3 py-2">Races</th>
            <th className="px-3 py-2">Wins</th>
            <th className="px-3 py-2">Poles</th>
            <th className="px-3 py-2">Fastest Laps</th>
            <th className="px-3 py-2">Podiums</th>
            <th className="px-3 py-2">Points</th>
            <th className="px-3 py-2">Position</th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg"
            >
              <td className="px-3 py-2">{row.season}</td>
              <td className="px-3 py-2 text-left">{row.series}</td>
              <td className="px-3 py-2 text-left">{row.team}</td>
              <td className="px-3 py-2">{row.races}</td>
              <td className="px-3 py-2">{row.wins}</td>
              <td className="px-3 py-2">{row.poles}</td>
              <td className="px-3 py-2">{row.fastestLaps}</td>
              <td className="px-3 py-2">{row.podiums}</td>
              <td className="px-3 py-2">{row.points}</td>
              <td className={`px-3 py-2 font-bold ${getPositionClass(row.position)}`}>
                {row.position}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {legend && (
        <div className="mt-4 text-gray-400 text-sm space-y-1">
          {legend.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default RacingCareerSummaryTable;
