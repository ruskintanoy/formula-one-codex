import { getData } from "../../../lib/fetchData";
import DriverInfoCard from "../../../components/DriverInfoCard";
import driverStats from "../../../data/drivers-stats";

export default async function DriverProfilePage({ params }) {
  const { driverId } = await params;

  const data = await getData(`/api/current/drivers/${driverId}`);
  const driver = data.driver;
  const team = data.team;
  const results = data.results;

  const exampleStats = driverStats[driverId] || null;

  return (
    <section className="min-h-[80vh] container mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-red-600 mb-8">
        {driver.name} {driver.surname}
      </h1>

      {/* Layout: Main Content Left - Card Right */}
      <div className="flex gap-8">
        {/* Main Content */}
        <main className="w-2/3 space-y-8">
          {/* Summary Section */}
          <section>
            <h2 className="text-2xl font-bold text-red-600 mb-2">Summary</h2>
            <p className="text-gray-300">
              {/* This is placeholder text for the driver's summary. Replace this with actual content later. */}
              {driver.name} {driver.surname} is a professional Formula One driver known for their performance and skill on the track.
            </p>
          </section>

          {/* Table of Contents Section */}
          <section className="border border-gray-700 p-4 rounded bg-gray-900">
            <h2 className="text-xl font-bold text-red-600 mb-2">Table of Contents</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li><a href="#background" className="hover:underline text-red-400">Background</a></li>
              <li><a href="#junior-career" className="hover:underline text-red-400">Junior Racing Career</a></li>
              <li><a href="#f1-career" className="hover:underline text-red-400">Formula One Career</a></li>
              <li><a href="#stats-overview" className="hover:underline text-red-400">Formula One Statistical Overview</a>
                <ul className="list-disc list-inside ml-4 space-y-1">
                  <li><a href="#record" className="hover:underline text-red-400">Formula One Record</a></li>
                  <li><a href="#race-wins" className="hover:underline text-red-400">Race Wins</a></li>
                  <li><a href="#career-results" className="hover:underline text-red-400">Career Results</a></li>
                </ul>
              </li>
            </ul>
          </section>
        </main>

        {/* Right Sidebar */}
        <div className="w-1/3">
          <DriverInfoCard driver={driver} team={team} stats={exampleStats} />
        </div>
      </div>
    </section>
  );
}