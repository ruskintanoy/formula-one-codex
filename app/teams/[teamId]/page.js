import { getData } from "../../../lib/fetchData";
import TeamInfoCard from "../../../components/TeamInfoCard";
import TeamStandingsTable from "../../../components/TeamStandingsTable";
import TableOfContents from "../../../components/TableofContents";

export default async function TeamProfilePage({ params }) {
  const { teamId } = params;

  const { team } = await getData(`/api/current/teams/${teamId}`);

  const [
    summary,
    tableOfContents,
    history,
    standingsData
  ] = await Promise.all([
    import(`../../../data/teams/${teamId}/summary.js`).then(m => m.default),
    import(`../../../data/teams/${teamId}/table-of-contents.js`).then(m => m.default),
    import(`../../../data/teams/${teamId}/history.js`).then(m => m.default),
    import(`../../../data/teams/${teamId}/standings.js`).then(m => m.default)
  ]);

  return (
    <section className="min-h-[80vh] container mx-auto px-6 py-10 text-white">
      {/* === Team Header === */}
      <h1 className="text-5xl md:text-6xl font-black text-center text-red-600 uppercase tracking-widest mb-12 drop-shadow-sm">
        {team.teamName}
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

          {/* History Section */}
          <section id="history" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 uppercase border-b border-gray-700 pb-2">
              Team History
            </h2>
            <div className="text-base md:text-lg text-gray-300 leading-relaxed space-y-4">
              {history}
            </div>
          </section>

          {/* 2025 Team Standings */}
          <section id="team-standing" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 uppercase border-b border-gray-700 pb-2">
              2025 Season Standing
            </h2>
            <TeamStandingsTable data={standingsData} />
          </section>
        </main>

        {/* === Sidebar === */}
        <aside className="lg:w-1/3 w-full">
          <TeamInfoCard team={team} />
        </aside>
      </div>
    </section>
  );
}
