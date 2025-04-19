import { getData } from "../../../lib/fetchData";
import DriverInfoCard from "../../../components/DriverInfoCard";
import RacingCareerSummaryTable from "../../../components/RacingCareerSummaryTable";
import CareerStatisticsTable from "../../../components/CareerStatisticsTable";
import TableOfContents from "../../../components/DriverTableofContents";


export default async function DriverProfilePage({ params }) {
  const { driverId } = await params;

  const data = await getData(`/api/current/drivers/${driverId}`);
  const driver = data.driver;
  const team = data.team;

  const summary = (await import(`../../../data/drivers/${driverId}/summary.js`)).default;
  const tableOfContents = (await import(`../../../data/drivers/${driverId}/table-of-contents.js`)).default;
  const background = (await import(`../../../data/drivers/${driverId}/background.js`)).default;
  const stats = (await import(`../../../data/drivers/${driverId}/stats.js`)).default;
  const juniorCareer = (await import(`../../../data/drivers/${driverId}/junior-career.js`)).default;
  const f1Career = (await import(`../../../data/drivers/${driverId}/f1-career.js`)).default;
  const racingCareerSummary = (await import(`../../../data/drivers/${driverId}/racing-career-summary.js`)).default;
  const careerStatistics = (await import(`../../../data/drivers/${driverId}/career-statistics.js`)).default;

  return (
    <section className="min-h-[80vh] container mx-auto px-6 py-10 text-white">
    <h1 className="text-5xl font-black text-center text-red-600 uppercase tracking-widest mb-10 shadow-md">
      {driver.name} {driver.surname}
    </h1>

    <div className="flex flex-col lg:flex-row gap-10">
      <main className="lg:w-2/3 space-y-12">
        {/* Summary */}
        <section>
          <p className="text-gray-300 text-base leading-relaxed">{summary}</p>
        </section>

        {/* Contents */}
        <section className="bg-black/40 border border-red-800 rounded-lg shadow-md p-6">
          <h2 className="text-center text-xl font-bold text-red-500 uppercase tracking-wider border-b border-gray-700 pb-2 mb-4">
            Contents
          </h2>
          <TableOfContents toc={tableOfContents} />
        </section>

        {/* Each Section (Background, Career, Stats, etc.) */}
        {[
          { id: "background", label: "Background", content: background },
          { id: "junior-career", label: "Junior Racing Career", content: juniorCareer },
          { id: "f1-career", label: "Formula One Career", content: f1Career }
        ].map(({ id, label, content }) => (
          <section id={id} key={id} className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl font-bold text-center text-red-600 uppercase border-b border-gray-700 pb-2">
              {label}
            </h2>
            <div className="text-gray-300 space-y-4 text-base leading-relaxed">{content}</div>
          </section>
        ))}

        {/* Stats Overview */}
        <section id="stats-overview" className="space-y-10 scroll-mt-24">
          <h2 className="text-2xl font-bold text-center text-red-600 uppercase border-b border-gray-700 pb-2">
            Formula One Statistical Overview
          </h2>

          {/* Racing Career Summary */}
          <div id="career-summary" className="space-y-2 scroll-mt-24">
            <h3 className="text-xl font-bold text-red-500 uppercase tracking-wide border-b border-gray-700 pb-1">
              Racing Career Summary
            </h3>
            <RacingCareerSummaryTable
              data={racingCareerSummary.data}
              legend={racingCareerSummary.legend}
            />
          </div>

          {/* Career Statistics */}
          <div id="career-statistics" className="space-y-2 scroll-mt-24">
            <h3 className="text-xl font-bold text-red-500 uppercase tracking-wide border-b border-gray-700 pb-1">
              Career Statistics
            </h3>
            <CareerStatisticsTable data={careerStatistics} />
          </div>
        </section>
      </main>

      {/* Sidebar */}
      <aside className="lg:w-1/3 w-full">
        <DriverInfoCard driver={driver} team={team} stats={stats} />
      </aside>
    </div>
  </section>

  );
}
