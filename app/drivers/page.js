import { getData } from "../../lib/fetchData";
import DriverCard from "../../components/DriverCard";
import { flagsMap } from "../../lib/driverAssets";

export default async function DriversPage() {
  // Fetch all 3 at once
  const [driverRes, teamRes, standingsRes] = await Promise.all([
    getData("/api/current/drivers"),
    getData("/api/current/teams"),
    getData("/api/current/drivers-championship"),
  ]);

  // If any of them failed, show fallback message
  if (!driverRes || !teamRes || !standingsRes) {
    return (
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-extrabold text-red-600 mb-2">
          Unable to Load Drivers
        </h1>
        <p className="text-gray-300 text-lg max-w-md">
          We’re having trouble fetching the latest driver data from the F1 API.
          This issue is on their end, not yours — feel free to check back later.
        </p>
        <div className="inline-flex items-center px-3 py-1 text-sm bg-yellow-800 text-yellow-300 rounded-full mt-4">
          API Status: <span className="ml-2 font-semibold">Unavailable</span>
        </div>
      </section>
    );
  }

  // Map teamId to teamName
  const teamMap = Object.fromEntries(
    teamRes.teams.map((team) => [team.teamId, team.teamName])
  );

  // Map driverId to standings info
  const standingsMap = Object.fromEntries(
    standingsRes.drivers_championship.map((entry) => [
      entry.driverId,
      {
        position: entry.position,
        points: entry.points,
        wins: entry.wins,
      },
    ])
  );

  return (
    <section className="min-h-[80vh] container mx-auto p-4">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-red-600 mb-2">
          Current F1 Drivers
        </h1>
        <p className="text-gray-300 text-lg">
          Meet the drivers competing in the {new Date().getFullYear()} Formula One World Championship.
        </p>
      </div>

      {/* Driver Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {driverRes.drivers.map((driver) => (
          <DriverCard
            key={driver.driverId}
            driver={driver}
            teamName={teamMap[driver.teamId]}
            standing={standingsMap[driver.driverId]}
            flag={flagsMap[driver.nationality]}
          />
        ))}
      </div>
    </section>
  );
}
