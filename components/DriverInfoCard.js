import Image from "next/image";

export default function DriverInfoCard({ driver, team, stats }) {
  return (
    <aside className="bg-gradient-to-br from-black via-gray-900 to-gray-800 border border-red-800 rounded-xl p-6 w-full max-w-sm shadow-2xl text-white ring-1 ring-red-600/40">

      {/* === Driver Name Banner === */}
      <h2 className="text-center text-2xl font-black uppercase tracking-widest bg-red-700 text-white py-3 mb-6 rounded shadow-inner ring-1 ring-red-900">
        {driver.name} {driver.surname}
      </h2>

      {/* === Driver Image === */}
      <div className="mb-6 rounded-lg overflow-hidden border border-gray-700 shadow-lg bg-black">
        <Image
          src={`/drivers/${driver.driverId}/${driver.driverId}.jpg`}
          alt={`${driver.name} ${driver.surname}`}
          width={300}
          height={300}
          className="object-cover w-full hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>

      {/* === Driver Info Section === */}
      <section className="pt-4 mt-4 border-t border-gray-700">
        <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-gray-300 border-b border-gray-600 pb-2 mb-4">
          Driver Information
        </h3>
        <div className="space-y-2 text-[13px] font-light">
          <p><span className="text-gray-400 font-semibold">Born:</span> {driver.birthday}</p>
          <p><span className="text-gray-400 font-semibold">Nationality:</span> {driver.nationality}</p>
          <p><span className="text-gray-400 font-semibold">Car Number:</span> #{driver.number || "N/A"}</p>
          {team?.teamName && (
            <p><span className="text-gray-400 font-semibold">Team:</span> <span className="text-red-400 font-semibold">{team.teamName}</span></p>
          )}
        </div>
      </section>

      {/* === Career Statistics Section === */}
      {stats && (
        <section className="pt-4 mt-4 border-t border-gray-700">
          <h3 className="text-center text-sm font-semibold uppercase tracking-wide text-gray-300 border-b border-gray-600 pb-2 mb-4">
            Career Stats
          </h3>
          <div className="space-y-2 text-[13px] font-light">
            {Object.entries(stats).map(([label, value]) => (
              <p key={label}>
                <span className="text-gray-400 font-semibold">{label}:</span>{" "}
                <span className="text-white font-medium">{value}</span>
              </p>
            ))}
          </div>
        </section>
      )}
    </aside>
  );
}
