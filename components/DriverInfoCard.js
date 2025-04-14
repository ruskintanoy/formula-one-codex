import Image from "next/image";

export default function DriverInfoCard({ driver, team, stats }) {
  return (
    <aside className="bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 p-6 w-full max-w-sm rounded-xl shadow-2xl text-white">
      {/* Driver Name Header */}
      <h2 className="text-center text-3xl font-extrabold text-red-500 mb-6 bg-gray-800 py-3 rounded-lg tracking-wide">
        {driver.name} {driver.surname}
      </h2>

      {/* Driver Image */}
      <div className="mb-6 rounded-lg overflow-hidden border border-gray-700 shadow-lg">
        <Image
          src={`/drivers/${driver.driverId}/${driver.driverId}.jpg`}
          alt={`${driver.name} ${driver.surname}`}
          width={300}
          height={300}
          className="object-cover w-full hover:scale-105 transition duration-300 ease-in-out"
        />
      </div>

      {/* Driver Info Section */}
      <section className="border-t border-gray-700 pt-4 mt-4">
        <h3 className="text-red-400 text-lg font-semibold mb-3 uppercase tracking-wide border-b border-gray-600 pb-2 text-center">Driver Information</h3>
        <div className="space-y-2 text-sm">
          <p><span className="font-semibold text-gray-400">Born:</span> {driver.birthday}</p>
          <p><span className="font-semibold text-gray-400">Nationality:</span> {driver.nationality}</p>
          <p><span className="font-semibold text-gray-400">Car Number:</span> {driver.number}</p>
          <p><span className="font-semibold text-gray-400">Team:</span> {team?.teamName}</p>
        </div>
      </section>

      {/* Career Statistics Section */}
      {stats && (
        <section className="border-t border-gray-700 pt-4 mt-4">
          <h3 className="text-red-400 text-lg font-semibold mb-3 uppercase tracking-wide border-b border-gray-600 pb-2 text-center">Career Statistics</h3>
          <div className="space-y-2 text-sm">
            {Object.entries(stats).map(([label, value]) => (
              <p key={label}><span className="font-semibold text-gray-400">{label}:</span> {value}</p>
            ))}
          </div>
        </section>
      )}
    </aside>
  );
}