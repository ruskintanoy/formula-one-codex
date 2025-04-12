import { getData } from "../../lib/fetchData";
import Card from "../../components/Card";
import Link from "next/link";

export default async function DriversPage() {
  // Fetch Current Season Drivers
  const data = await getData("/api/current/drivers");

  return (
    <section className="min-h-[80vh] container mx-auto p-4">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Current Drivers</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.drivers.map((driver) => (
          <Link href={`/drivers/${driver.driverId}`} key={driver.driverId}>
            <Card
              title={`${driver.name} ${driver.surname}`}
              description={`Nationality: ${driver.nationality}`}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
