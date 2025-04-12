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
            <p className="text-gray-300">
              {driver.name} {driver.surname} is a professional Formula One driver known for their performance and skill on the track.
            </p>
          </section>

          {/* Table of Contents Section */}
          <section className="border border-gray-700 p-6 rounded-lg bg-gray-900 shadow-lg">
            <h2 className="text-xl font-extrabold text-red-600 mb-4 border-b border-gray-700 pb-2 text-center uppercase tracking-wide">Contents</h2>
            <nav className="text-gray-300 text-base space-y-2">
              <div><a href="#background" className="hover:text-red-400 transition">1. Background</a></div>
              <div><a href="#junior-career" className="hover:text-red-400 transition">2. Junior Racing Career</a></div>
              <div><a href="#f1-career" className="hover:text-red-400 transition">3. Formula One Career</a></div>
              <div>
                <a href="#stats-overview" className="hover:text-red-400 transition">4. Formula One Statistical Overview</a>
                <div className="ml-5 space-y-1">
                  <div><a href="#record" className="hover:text-red-400 transition">4.1. Formula One Record</a></div>
                  <div><a href="#race-wins" className="hover:text-red-400 transition">4.2. Race Wins</a></div>
                  <div><a href="#career-results" className="hover:text-red-400 transition">4.3. Career Results</a></div>
                </div>
              </div>
            </nav>
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
