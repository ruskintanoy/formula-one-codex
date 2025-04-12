import { getData } from "../../../lib/fetchData";

export default async function DriverProfilePage({ params }) {
  const { driverId } = params;

  // Fetch driver data from API
  const data = await getData(`/api/current/drivers/${driverId}`);
  const driver = data.driver;
  const team = data.team;
  const results = data.results;

  return (
    <section className="min-h-[80vh] container mx-auto p-4">
      <h1 className="text-4xl font-bold text-red-600 mb-4">
        {driver.name} {driver.surname}
      </h1>

      <p className="mb-2">Nationality: {driver.nationality}</p>
      <p className="mb-2">Birthday: {driver.birthday}</p>
      <p className="mb-2">Car Number: {driver.number}</p>

      <h2 className="text-2xl font-semibold mt-6 mb-2 text-red-600">
        Team: {team.teamName}
      </h2>
      <p className="mb-6">Nationality: {team.teamNationality}</p>

      <a
        href={driver.url}
        target="_blank"
        className="inline-block bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 mb-8"
      >
        View on Wikipedia
      </a>

      <h2 className="text-2xl font-semibold mb-4 text-red-600">
        Race Results (Current Season)
      </h2>

      {results.length > 0 ? (
        <table className="w-full text-left border border-gray-600">
          <thead>
            <tr>
              <th className="border border-gray-600 px-2 py-1">Race</th>
              <th className="border border-gray-600 px-2 py-1">Position</th>
              <th className="border border-gray-600 px-2 py-1">Points</th>
            </tr>
          </thead>
          <tbody>
            {results.map((raceData, index) => (
              <tr key={index}>
                <td className="border border-gray-600 px-2 py-1">
                  {raceData.race.name}
                </td>
                <td className="border border-gray-600 px-2 py-1">
                  {raceData.result.finishingPosition}
                </td>
                <td className="border border-gray-600 px-2 py-1">
                  {raceData.result.pointsObtained}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No race results available.</p>
      )}
    </section>
  );
}
