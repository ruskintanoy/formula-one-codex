import { getData } from "../../lib/fetchData";
import TeamCard from "../../components/TeamCard";
import { teamAssets } from "../../lib/teamAssets";

export default async function TeamsPage() {
  const { teams } = await getData("/api/current/teams");
  const currentYear = new Intl.DateTimeFormat("en", { year: "numeric" }).format(new Date());

  return (
    <section className="min-h-[80vh] container mx-auto p-4">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold text-red-600 mb-2">
          Current F1 Teams
        </h1>
        <p className="text-gray-300 text-lg">
          Discover the teams competing in the {currentYear} Formula One World Championship.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {teams.map((team) => {
          const assetKey = team.teamId.toLowerCase();
          const { logo, flag } = teamAssets[assetKey] || {};

          return (
            <TeamCard
              key={team.teamId}
              team={team}
              logo={logo}
              flag={flag}
            />
          );
        })}
      </div>
    </section>
  );
}
