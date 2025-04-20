import { getData } from "../../lib/fetchData";
import DriverCard from "../../components/DriverCard";
import { flagsMap } from "../../lib/driverAssets";

export default async function DriversPage() {
  // Fetch data
  const [driverRes, teamRes, standingsRes] = await Promise.all([
    getData("/api/current/drivers"),
    getData("/api/current/teams"),
    getData("/api/current/drivers-championship"),
  ]);

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
