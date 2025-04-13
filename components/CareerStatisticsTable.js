const CareerStatisticsTable = ({ data }) => {
    return (
      <div className="overflow-x-auto">
        <p className="italic text-gray-400 mb-2">
          Statistics correct as of {data.updatedTo}
        </p>
        <table className="w-full text-sm border-collapse border border-gray-700">
          <tbody>
            {data.stats.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"}
              >
                <td className="border border-gray-700 px-3 py-2 font-bold text-left text-gray-300">
                  {row.label}
                </td>
                <td className="border border-gray-700 px-3 py-2 text-gray-300">
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
  