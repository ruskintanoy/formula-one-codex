import { getData } from "../../../lib/fetchData";
import DriverInfoCard from "../../../components/DriverInfoCard";
import driverStats from "../../../data/drivers-stats";

export default async function DriverProfilePage({ params }) {
  const { driverId } = await params;

  // Fetch driver data from API
  const data = await getData(`/api/current/drivers/${driverId}`);
  const driver = data.driver;
  const team = data.team;
  const results = data.results;

  // Get stats for the specific driver
  const exampleStats = driverStats[driverId] || null;

  return (
    <section className="min-h-[80vh] container mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-red-600 mb-8">
        {driver.name} {driver.surname}
      </h1>

      {/* Layout: Sidebar & Main Content */}
      <div className="flex gap-8">
        {/* Left Sidebar */}
        <div className="w-1/3">
          <DriverInfoCard driver={driver} team={team} stats={exampleStats} />
        </div>

        {/* Main Content */}
        <main className="w-2/3">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Race Results (Current Season)
          </h2>

          {results.length > 0 ? (
            <table className="w-full text-left border border-gray-600">
              <thead className="bg-gray-800">
                <tr>
                  <th className="border border-gray-600 px-2 py-1">Race</th>
                  <th className="border border-gray-600 px-2 py-1">Position</th>
                  <th className="border border-gray-600 px-2 py-1">Points</th>
                </tr>
              </thead>
              <tbody>
                {results.map((raceData, index) => (
                  <tr
                    key={index}
                    className="even:bg-gray-900 odd:bg-gray-800 hover:bg-gray-700 transition"
                  >
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
