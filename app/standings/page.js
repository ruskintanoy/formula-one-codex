import { getData } from "../../lib/fetchData";
import StandingsTable from "../../components/StandingsTable";

export default async function StandingsPage() {
  const standings = await getData("/api/current/drivers-championship");

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
