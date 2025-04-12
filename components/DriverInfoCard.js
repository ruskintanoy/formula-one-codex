import Image from "next/image";

export default function DriverInfoCard({ driver, team, stats }) {
  return (
    <aside className="bg-gray-900 border border-gray-700 p-4 w-full max-w-sm rounded-lg shadow-lg text-white">
      {/* Driver Name */}
      <h2 className="text-center text-2xl font-bold text-red-500 mb-4">
        {driver.name} {driver.surname}
      </h2>

      {/* Driver Image */}
      <div className="mb-4 rounded overflow-hidden border border-gray-700">
        <Image
          src={`/drivers/${driver.driverId}.jpg`}
          alt={driver.name}
          width={300}
          height={300}
          className="object-cover w-full"
        />
      </div>

      {/* Section: Basic Info */}
      <div className="border-t border-gray-700 pt-4 mt-4">
        <h3 className="text-red-400 text-lg font-semibold mb-2">Driver Information</h3>
        <p className="mb-1">
          <span className="font-semibold text-gray-400">Nationality:</span>{" "}
          {driver.nationality}
        </p>
        <p className="mb-1">
          <span className="font-semibold text-gray-400">Birthday:</span>{" "}
          {driver.birthday}
        </p>
        <p className="mb-1">
          <span className="font-semibold text-gray-400">Car Number:</span>{" "}
          {driver.number}
        </p>
        <p className="mb-1">
          <span className="font-semibold text-gray-400">Team:</span>{" "}
          {team?.teamName}
        </p>
      </div>

      {/* Section: Career Stats (optional) */}
      {stats && (
        <div className="border-t border-gray-700 pt-4 mt-4">
          <h3 className="text-red-400 text-lg font-semibold mb-2">
            Career Statistics
          </h3>
          <ul className="space-y-1 text-sm">
            {Object.entries(stats).map(([label, value]) => (
              <li key={label}>
                <span className="font-semibold text-gray-400">{label}:</span>{" "}
                {value}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Wiki Button */}
      <a
        href={driver.url}
        target="_blank"
        className="mt-6 inline-block w-full bg-red-600 text-center py-2 rounded hover:bg-red-700 font-semibold"
      >
        View on Wikipedia
      </a>
    </aside>
  );
}
