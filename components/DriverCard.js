import Link from "next/link";

export default function DriverCard({ driver, teamName, standing, flag }) {
  return (
    <Link href={`/drivers/${driver.driverId}`}>
      <div className="group relative bg-gradient-to-b from-gray-900 to-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-[1.03] transition duration-300 cursor-pointer">

        {/* === Top-right Placement Badge === */}
        {standing?.position && (
          <div className="absolute top-2 right-2 bg-black/70 border border-yellow-500 text-yellow-400 text-xs font-bold px-2 py-1 rounded shadow-lg z-10">
            #{standing.position}
          </div>
        )}

        {/* Driver Image */}
        <div className="relative w-full aspect-[3/4] overflow-hidden">
          <img
            src={`/drivers/${driver.driverId}/${driver.driverId}.jpg`}
            alt={`${driver.name} ${driver.surname}`}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Info Section */}
        <div className="p-4 space-y-2">
          {/* Name, Flag, and Number */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {flag && (
                <img
                  src={flag}
                  alt={`${driver.nationality} flag`}
                  className="w-5 h-3 rounded-sm shadow-sm"
                />
              )}
              <h2 className="text-lg md:text-xl font-extrabold text-white">
                {driver.name} {driver.surname}
              </h2>
            </div>
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded shadow-md">
              #{driver.number || "N/A"}
            </span>
          </div>

          {/* Points */}
          <div className="text-gray-400 text-sm">
            Points:{" "}
            <span className="text-white font-semibold">
              {standing?.points ?? 0}
            </span>
          </div>
        </div>

        {/* Bottom Banner */}
        <div className="bg-red-600 text-white text-center text-xs font-semibold p-2 tracking-wide">
          {teamName || "Formula One Driver"}
        </div>
      </div>
    </Link>
  );
}
