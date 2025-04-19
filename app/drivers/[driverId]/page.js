import { getData } from "../../../lib/fetchData";
import DriverInfoCard from "../../../components/DriverInfoCard";
import RacingCareerSummaryTable from "../../../components/RacingCareerSummaryTable";
import CareerStatisticsTable from "../../../components/CareerStatisticsTable";
import TableOfContents from "../../../components/DriverTableofContents";

export default async function DriverProfilePage({ params }) {
  const { driverId } = await params;

  const data = await getData(`/api/current/drivers/${driverId}`);
  const { driver, team } = data;

  const [
    summary,
    tableOfContents,
    background,
    stats,
    juniorCareer,
    f1Career,
    racingCareerSummary,
    careerStatistics,
  ] = await Promise.all([
    import(`../../../data/drivers/${driverId}/summary.js`),
    import(`../../../data/drivers/${driverId}/table-of-contents.js`),
    import(`../../../data/drivers/${driverId}/background.js`),
    import(`../../../data/drivers/${driverId}/stats.js`),
    import(`../../../data/drivers/${driverId}/junior-career.js`),
    import(`../../../data/drivers/${driverId}/f1-career.js`),
    import(`../../../data/drivers/${driverId}/racing-career-summary.js`),
    import(`../../../data/drivers/${driverId}/career-statistics.js`),
  ]).then(mods => mods.map(m => m.default));

  const infoSections = [
    { id: "background", label: "Background", content: background },
    { id: "junior-career", label: "Junior Racing Career", content: juniorCareer },
    { id: "f1-career", label: "Formula One Career", content: f1Career },
  ];

  return (
    <section className="min-h-[80vh] container mx-auto px-6 py-10 text-white">
      {/* === Header === */}
      <h1 className="text-5xl md:text-6xl font-black text-center text-red-600 uppercase tracking-widest mb-12 drop-shadow-sm">
        {driver.name} {driver.surname}
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* === Main Content === */}
        <main className="lg:w-2/3 space-y-14">
          {/* Summary */}
          <section>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">{summary}</p>
          </section>

          {/* TOC */}
          <section className="bg-black/40 border border-red-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl md:text-2xl font-bold text-red-500 uppercase tracking-wider border-b border-gray-700 pb-3 mb-5 text-center">
              Contents
            </h2>
            <TableOfContents toc={tableOfContents} />
          </section>

          {/* Dynamic Sections */}
          {infoSections.map(({ id, label, content }) => (
            <section key={id} id={id} className="space-y-4 scroll-mt-24">
              <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 uppercase border-b border-gray-700 pb-2">
                {label}
              </h2>
              <div className="text-base md:text-lg text-gray-300 leading-relaxed space-y-4">
                {content}
              </div>
            </section>
          ))}

          {/* === Statistical Overview === */}
          <section id="stats-overview" className="space-y-10 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 uppercase border-b border-gray-700 pb-2">
              Formula One Statistical Overview
            </h2>

            {/* Racing Summary Table */}
            <div id="career-summary" className="space-y-4 scroll-mt-24">
              <h3 className="text-xl font-bold text-red-500 uppercase tracking-wide border-b border-gray-700 pb-1">
                Racing Career Summary
              </h3>
              <RacingCareerSummaryTable
                data={racingCareerSummary.data}
                legend={racingCareerSummary.legend}
              />
            </div>

            {/* Career Stats Table */}
            <div id="career-statistics" className="space-y-4 scroll-mt-24">
              <h3 className="text-xl font-bold text-red-500 uppercase tracking-wide border-b border-gray-700 pb-1">
                Career Statistics
              </h3>
              <CareerStatisticsTable data={careerStatistics} />
            </div>
          </section>
        </main>

        {/* === Sidebar === */}
        <aside className="lg:w-1/3 w-full">
          <DriverInfoCard driver={driver} team={team} stats={stats} />
        </aside>
      </div>
    </section>
  );
}
