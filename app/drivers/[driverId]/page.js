import { getData } from "../../../lib/fetchData";
import DriverInfoCard from "../../../components/DriverInfoCard";

export default async function DriverProfilePage({ params }) {
  const { driverId } = await params;

  const data = await getData(`/api/current/drivers/${driverId}`);
  const driver = data.driver;
  const team = data.team;
  const results = data.results;

  const summary = (await import(`../../../data/drivers/${driverId}/summary.js`)).default;
  const background = (await import(`../../../data/drivers/${driverId}/background.js`)).default;
  const stats = (await import(`../../../data/drivers/${driverId}/stats.js`)).default;
  const juniorCareer = (await import(`../../../data/drivers/${driverId}/junior-career.js`)).default;

  return (
    <section className="min-h-[80vh] container mx-auto p-8">
      <h1 className="text-4xl font-extrabold text-red-600 mb-8">
        {driver.name} {driver.surname}
      </h1>

      <div className="flex gap-8">
        <main className="w-2/3 space-y-8">

          {/* Summary */}
          <section>
            <p className="text-gray-300">{summary}</p>
          </section>

          {/* Contents */}
          <section className="border border-gray-700 p-6 rounded-lg bg-gray-900 shadow-lg">
            <h2 className="text-xl font-extrabold text-red-600 mb-4 border-b border-gray-700 pb-2 text-center uppercase tracking-wide">
              Contents
            </h2>
            <nav className="text-gray-300 text-base space-y-2">
              <div><a href="#background" className="hover:text-red-400 transition">1. Background</a></div>
              <div><a href="#junior-career" className="hover:text-red-400 transition">2. Junior Racing Career</a></div>
              <div><a href="#f1-career" className="hover:text-red-400 transition">3. Formula One Career</a></div>
              <div>
                <a href="#stats-overview" className="hover:text-red-400 transition">4. Formula One Statistical Overview</a>
                <div className="ml-5 space-y-1">
                  <div><a href="#career-summary" className="hover:text-red-400 transition">4.1. Racing Career Summary</a></div>
                  <div><a href="#career-statistics" className="hover:text-red-400 transition">4.2. Career Statistics</a></div>
                </div>
              </div>
            </nav>
          </section>

          {/* Background */}
          <section id="background" className="space-y-4">
            <h2 className="text-2xl font-bold text-red-600 border-b border-gray-700 pb-2 text-center">
              Background
            </h2>
            <p className="text-gray-300">{background}</p>
          </section>

          {/* Junior Racing Career */}
          <section id="junior-career" className="space-y-4">
            <h2 className="text-2xl font-bold text-red-600 border-b border-gray-700 pb-2 text-center">
              Junior Racing Career
            </h2>
            <p className="text-gray-300">{juniorCareer}</p>
          </section>

          {/* Formula One Statistical Overview */}
          <section id="stats-overview" className="space-y-6">
            <h2 className="text-2xl font-bold text-red-600 border-b border-gray-700 pb-2 text-center">
              Formula One Statistical Overview
            </h2>

            {/* Racing Career Summary */}
            <section id="career-summary" className="space-y-2">
              <h3 className="text-xl font-extrabold text-red-500 border-b border-gray-700 pb-1">
                Racing Career Summary
              </h3>
              <p className="text-gray-300">
                {/* Data coming soon */}
              </p>
            </section>

            {/* Career Statistics */}
            <section id="career-statistics" className="space-y-2">
              <h3 className="text-xl font-extrabold text-red-500 border-b border-gray-700 pb-1">
                Career Statistics
              </h3>
              <p className="text-gray-300">
                {/* Data coming soon */}
              </p>
            </section>
          </section>
        </main>

        {/* Sidebar */}
        <div className="w-1/3">
          <DriverInfoCard driver={driver} team={team} stats={stats} />
        </div>
      </div>
    </section>
  );
}
