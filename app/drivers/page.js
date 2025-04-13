import { getData } from "../../lib/fetchData";
import DriverCard from "../../components/DriverCard";

export default async function DriversPage() {
  const driverData = await getData("/api/current/drivers");
  const teamData = await getData("/api/current/teams");

  const teamMap = {};
  teamData.teams.forEach((team) => {
    teamMap[team.teamId] = team.teamName;
  });

  return (
    <section className="min-h-[80vh] container mx-auto p-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-red-600 mb-2">
          Current F1 Drivers
        </h1>
        <p className="text-gray-300 text-lg">
          Meet the drivers competing in the {new Date().getFullYear()} Formula One World Championship.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {driverData.drivers.map((driver) => (
          <DriverCard
            key={driver.driverId}
            driver={driver}
            teamName={teamMap[driver.teamId]}
          />
        ))}
      </div>
    </section>
  );
}
