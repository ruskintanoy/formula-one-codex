import { getData } from "../../../lib/fetchData";
import TeamInfoCard from "../../../components/TeamInfoCard";
import TableOfContents from "../../../components/TableofContents";
import TeamStandingTable from "../../../components/TeamStandingsTable";
import { teamAssets } from "../../../lib/teamAssets"; // ⬅️ import team assets

export default async function TeamProfilePage({ params }) {
  const { teamId } = params;

  // Fetch team info from API
  const { team } = await getData(`/api/current/teams/${teamId}`);

  // ⬇️ Get logo and flag from teamAssets
  const assetKey = teamId.toLowerCase();
  const { logo, flag } = teamAssets[assetKey] || {};

  // ⬇️ Merge assets into team object
  const enrichedTeam = { ...team, logo, flag };

  // Load content files from /data/teams/[teamId]/
  const [
    summary,
    tableOfContents,
    history,
    standings
  ] = await Promise.all([
    import(`../../../data/teams/${teamId}/summary.js`),
    import(`../../../data/teams/${teamId}/table-of-contents.js`),
    import(`../../../data/teams/${teamId}/history.js`),
    import(`../../../data/teams/${teamId}/standings.js`)
  ]).then((modules) => modules.map((mod) => mod.default));

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

          {/* Table of Contents */}
          <section className="bg-black/40 border border-red-800 rounded-lg shadow-md p-6">
            <h2 className="text-xl md:text-2xl font-bold text-red-500 uppercase tracking-wider border-b border-gray-700 pb-3 mb-5 text-center">
              Contents
            </h2>
            <TableOfContents toc={tableOfContents} />
          </section>

          {/* History */}
          <section id="history" className="space-y-4 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 uppercase border-b border-gray-700 pb-2">
              History
            </h2>
            <div className="text-base md:text-lg text-gray-300 leading-relaxed space-y-4">
              {history}
            </div>
          </section>

          {/* 2025 Team Standings */}
          <section id="team-standings" className="space-y-6 scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-red-600 uppercase border-b border-gray-700 pb-2">
              2025 Constructors’ Standings
            </h2>
            <TeamStandingTable standings={standings} />
          </section>
        </main>

        {/* === Sidebar === */}
        <aside className="lg:w-1/3 w-full">
          <TeamInfoCard team={enrichedTeam} /> {/* ⬅️ Use the merged team object */}
        </aside>
      </div>
    </section>
  );
}
