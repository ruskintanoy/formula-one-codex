import { getData } from "../../lib/fetchData";
import TeamCard from "../../components/TeamCard";
import { teamAssets } from "../../lib/teamAssets";

export default async function TeamsPage() {
  const teamRes = await getData("/api/current/teams");

  if (!teamRes) {
    return (
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl font-extrabold text-red-600 mb-2">
          Unable to Load Teams
        </h1>
        <p className="text-gray-300 text-lg max-w-md">
          We’re having trouble fetching the latest team data from the F1 API.
          This issue is on their end, not yours — feel free to check back later.
        </p>
        <div className="inline-flex items-center px-3 py-1 text-sm bg-yellow-800 text-yellow-300 rounded-full mt-4">
          API Status: <span className="ml-2 font-semibold">Unavailable</span>
        </div>
      </section>
    );
  }

  const { teams } = teamRes;
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
