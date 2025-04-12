import { getData } from "../../lib/fetchData";
import Card from "../../components/Card";
import Link from "next/link";

export default async function SearchPage({ searchParams }) {
  const query = searchParams.q;

  if (!query) {
    return (
      <section className="min-h-[80vh] container mx-auto p-4">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Search Drivers</h1>
        <p>Please enter a search term.</p>
      </section>
    );
  }

  const data = await getData(`/api/drivers/search?q=${query}`);

  return (
    <section className="min-h-[80vh] container mx-auto p-4">
      <h1 className="text-3xl font-bold text-red-600 mb-4">
        Search Results for "{query}"
      </h1>

      {data.drivers.length > 0 ? (
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
      ) : (
        <p>No drivers found.</p>
      )}
    </section>
  );
}
