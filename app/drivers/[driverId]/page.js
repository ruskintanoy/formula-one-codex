import { getData } from "../../../lib/fetchData";

export default async function DriverProfilePage({ params }) {
  const { driverId } = params;

  const data = await getData(`/api/current/drivers/${driverId}`);
  const driver = data.driver;
  const team = data.team;
  const results = data.results;

  return (
    <section className="min-h-[80vh] container mx-auto p-8">
      <h1 className="text-4xl font-bold text-red-600 mb-8">
        {driver.name} {driver.surname}
      </h1>

      <div className="flex gap-8">
        {/* Left Sidebar */}
        <aside className="w-1/3 bg-gray-900 p-4 rounded shadow">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Driver Information
          </h2>

          <p className="text-lg mb-2">
            <span className="font-semibold text-gray-400">Nationality:</span>{" "}
            {driver.nationality}
          </p>

          <p className="text-lg mb-2">
            <span className="font-semibold text-gray-400">Birthday:</span>{" "}
            {driver.birthday}
          </p>

          <p className="text-lg mb-2">
            <span className="font-semibold text-gray-400">Car Number:</span>{" "}
            {driver.number}
          </p>

          <h2 className="text-2xl font-bold text-red-600 mt-6 mb-2">
            Team
          </h2>
          <p className="text-lg mb-6">{team.teamName}</p>

          <a
            href={driver.url}
            target="_blank"
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 inline-block"
          >
            View on Wikipedia
          </a>
        </aside>

        {/* Main Content */}
        <main className="w-2/3">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Race Results (Current Season)
          </h2>

          {results.length > 0 ? (
            <table className="w-full text-left border border-gray-600">
              <thead>
                <tr>
                  <th className="border border-gray-600 px-2 py-1">Race</th>
                  <th className="border border-gray-600 px-2 py-1">
                    Position
                  </th>
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
        </main>
      </div>
    </section>
  );
}
