import Link from "next/link";
import { flagsMap } from "../lib/driverAssets"; // 👈 make sure this import is added!

export default function TeamInfoCard({ team }) {
  return (
    <aside className="bg-gradient-to-br from-black via-gray-900 to-gray-800 border border-red-800 rounded-xl p-6 w-full max-w-sm shadow-2xl text-white ring-1 ring-red-600/40">

      {/* === Team Name and Flag === */}
      <div className="flex items-center justify-center gap-3 mb-6">
        {team.flag && (
          <img
            src={team.flag}
            alt={`${team.teamName} flag`}
            className="w-6 h-4 rounded-sm border border-white/20"
          />
        )}
        <span className="text-xl font-black uppercase tracking-widest text-red-500">
          {team.teamName || "Unknown Team"}
        </span>
      </div>

      {/* === Logo === */}
      <div className="flex justify-center items-center mb-6 bg-white p-4 rounded-md border border-gray-300">
        <img
          src={team.logo}
          alt={`${team.teamName} logo`}
          className="h-20 object-contain max-w-full"
        />
      </div>

      {/* === General Info === */}
      <section className="pt-4 mt-4 border-t border-gray-700">
        <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-gray-300 border-b border-gray-600 pb-2 mb-4">
          Team Information
        </h3>
        <div className="space-y-2 text-[13px] font-light">
          <p><span className="text-gray-400 font-semibold">Base:</span> {team.base}</p>
          <p><span className="text-gray-400 font-semibold">Team Principal(s):</span> {team.principal}</p>
          <p><span className="text-gray-400 font-semibold">Technical Director(s):</span> {team.technicalDirector}</p>
          <p><span className="text-gray-400 font-semibold">Founder(s):</span> {team.founder}</p>
          {team.website && (
            <p>
              <span className="text-gray-400 font-semibold">Website:</span>{" "}
              <a
                href={team.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-red-400 hover:underline"
              >
                {new URL(team.website).hostname.replace("www.", "")}
              </a>
            </p>
          )}
        </div>
      </section>

      {/* === 2025 F1 Championship === */}
      <section className="pt-4 mt-4 border-t border-gray-700">
        <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-gray-300 border-b border-gray-600 pb-2 mb-4">
          2025 F1 Season
        </h3>
        <div className="space-y-2 text-[13px] font-light">

          {/* ✅ Race Drivers */}
          <div className="flex items-start">
            {/* Label */}
            <span className="text-gray-400 font-semibold min-w-[90px]">Race Drivers:</span>

            {/* List */}
            <ul className="space-y-1">
              {team.raceDrivers?.map(driver => (
                <li key={driver.id} className="flex items-center gap-2">
                  <span className="text-white text-[13px] font-semibold">{driver.number}.</span>
                  {driver.nationality && flagsMap[driver.nationality] && (
                    <img
                      src={flagsMap[driver.nationality]}
                      alt={`${driver.nationality} flag`}
                      className="w-5 h-3 rounded-sm ring-1 ring-white/20"
                    />
                  )}
                  <Link href={`/drivers/${driver.id}`} className="text-red-400 hover:underline">
                    {driver.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* ✅ Test Drivers */}
          <p>
            <span className="text-gray-400 font-semibold">Test Driver(s):</span>{" "}
            {team.testDrivers?.map((driver, index) => (
              <span key={index} className="mr-2">
                {driver}
                {index < team.testDrivers.length - 1 && ","}
              </span>
            ))}
          </p>

          <p><span className="text-gray-400 font-semibold">Chassis:</span> {team.chassis}</p>
          <p><span className="text-gray-400 font-semibold">Engine:</span> {team.engine}</p>
          <p><span className="text-gray-400 font-semibold">Tyres:</span> {team.tyres}</p>
        </div>
      </section>

      {/* === F1 Career Stats === */}
      <section className="pt-4 mt-4 border-t border-gray-700">
        <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-gray-300 border-b border-gray-600 pb-2 mb-4">
          F1 World Championship Career
        </h3>
        <div className="space-y-2 text-[13px] font-light">
          {Object.entries(team.careerStats || {}).map(([key, value]) => (
            <p key={key}>
              <span className="text-gray-400 font-semibold capitalize">{key.replace(/([A-Z])/g, " $1")}:</span>{" "}
              <span className="text-white font-medium">{value}</span>
            </p>
          ))}
        </div>
      </section>
    </aside>
  );
}
