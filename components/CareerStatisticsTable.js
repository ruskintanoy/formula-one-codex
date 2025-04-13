const CareerStatisticsTable = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      {/* Note Section */}
      <p className="italic text-gray-400 mb-4">
        Statistics correct as of {data.updatedTo}
      </p>

      <table className="w-full text-sm border-separate border-spacing-y-1">
        <thead>
          <tr className="bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-white">
            <th className="px-4 py-2 text-left">Statistic</th>
            <th className="px-4 py-2">Value</th>
          </tr>
        </thead>

        <tbody>
          {data.stats.map((row, index) => (
            <tr
              key={index}
              className="bg-gray-900 border border-gray-700 rounded-lg transition-all duration-300 hover:bg-gray-800 hover:shadow-lg"
            >
              <td className="px-4 py-2 font-semibold text-gray-300 text-left">
                {row.label}
              </td>
              <td className="px-4 py-2 text-gray-300">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CareerStatisticsTable;
