import Image from "next/image";
import Link from "next/link";

export default function TeamInfoCard({ team }) {
  return (
    <aside className="bg-gradient-to-br from-black via-gray-900 to-gray-800 border border-red-800 rounded-xl p-6 w-full max-w-sm shadow-2xl text-white ring-1 ring-red-600/40">

      {/* === Team Banner === */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-black uppercase tracking-widest text-red-500">
          {team.name}
        </h2>
        {team.flag && (
          <img
            src={team.flag}
            alt={`${team.name} flag`}
            className="w-6 h-4 rounded-sm border border-white/20"
          />
        )}
      </div>

      {/* === Logo === */}
      <div className="flex justify-center items-center mb-6 bg-white p-4 rounded-md border border-gray-300">
        <Image
          src={team.logo}
          alt={`${team.name} logo`}
          width={180}
          height={80}
          className="object-contain"
        />
      </div>

      {/* === General Info === */}
      <section className="space-y-2 text-sm font-light">
        <p><span className="text-gray-400 font-semibold">Base:</span> {team.base}</p>
        <p><span className="text-gray-400 font-semibold">Team Principal(s):</span> {team.principals}</p>
        <p><span className="text-gray-400 font-semibold">Technical Director(s):</span> {team.technicalDirectors}</p>
        <p><span className="text-gray-400 font-semibold">Founder(s):</span> {team.founders}</p>
        <p>
          <span className="text-gray-400 font-semibold">Website:</span>{" "}
          <a href={team.website} target="_blank" className="text-red-400 hover:underline">Visit</a>
        </p>
      </section>

      {/* === 2025 Formula One World Championship === */}
      <section className="pt-6 mt-6 border-t border-gray-700">
        <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-gray-300 border-b border-gray-600 pb-2 mb-4">
          2025 Formula One World Championship
        </h3>
        <div className="space-y-1 text-sm">
          <p><span className="text-gray-400 font-semibold">Race Drivers:</span> {team.raceDrivers?.map(d => (
            <Link key={d.id} href={`/drivers/${d.id}`} className="text-red-400 hover:underline">{d.name}</Link>
          )).reduce((prev, curr) => [prev, ", ", curr])}</p>
          <p><span className="text-gray-400 font-semibold">Test Drivers:</span> {team.testDrivers}</p>
          <p><span className="text-gray-400 font-semibold">Chassis:</span> {team.chassis}</p>
          <p><span className="text-gray-400 font-semibold">Engine:</span> {team.engine}</p>
          <p><span className="text-gray-400 font-semibold">Tyres:</span> {team.tyres}</p>
        </div>
      </section>

      {/* === F1 Career Stats === */}
      <section className="pt-6 mt-6 border-t border-gray-700">
        <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-gray-300 border-b border-gray-600 pb-2 mb-4">
          Formula One World Championship Career
        </h3>
        <div className="space-y-1 text-sm">
          {Object.entries(team.careerStats || {}).map(([key, value]) => (
            <p key={key}><span className="text-gray-400 font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</span> {value}</p>
          ))}
        </div>
      </section>
    </aside>
  );
}
