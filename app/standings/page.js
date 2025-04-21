import { getData } from "../../lib/fetchData";
import StandingsTable from "../../components/StandingsTable";

export default async function StandingsPage() {
  const standings = await getData("/api/current/drivers-championship");

  if (!standings) {
    return (
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-extrabold text-red-600 mb-2">
          Unable to Load Standings
        </h1>
        <p className="text-gray-300 text-lg max-w-md">
          We’re having trouble fetching the current standings from the F1 API.
          This issue is on their end — please check back again soon.
        </p>
        <div className="inline-flex items-center px-3 py-1 text-sm bg-yellow-800 text-yellow-300 rounded-full mt-4">
          API Status: <span className="ml-2 font-semibold">Unavailable</span>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-[80vh] container mx-auto p-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-red-600 mb-2">
          Current Driver Standings
        </h1>
        <p className="text-gray-300 text-lg">
          Updated points and rankings for the {new Date().getFullYear()} Formula One World Championship.
        </p>
      </div>

      <StandingsTable data={standings.drivers_championship} />
    </section>
  );
}
