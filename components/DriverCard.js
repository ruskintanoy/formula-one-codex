import Link from "next/link";

export default function DriverCard({ driver, teamName, standing, flag }) {
  return (
    <Link href={`/drivers/${driver.driverId}`}>
      <div className="group relative bg-gradient-to-br from-black via-gray-900 to-gray-800 border border-red-700 rounded-xl overflow-hidden shadow-lg hover:shadow-red-700/40 hover:scale-[1.03] transition duration-300 cursor-pointer ring-1 ring-red-600/30">

        {/* === Podium Badge Top Left === */}
        {standing?.position && (
          <div className="absolute top-0 left-0 bg-black border-l-4 border-red-600 text-white text-[10px] font-extrabold px-2 py-1 tracking-widest rounded-br-md z-10 shadow-md">
            P{standing.position}
          </div>
        )}

        {/* === Driver Image === */}
        <div className="relative w-full aspect-[3/4] overflow-hidden bg-black">
          <img
            src={`/drivers/${driver.driverId}/${driver.driverId}.jpg`}
            alt={`${driver.name} ${driver.surname}`}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* === Info Block === */}
        <div className="p-4 space-y-2">
          {/* === Name, Flag, and Number === */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {flag && (
                <img
                  src={flag}
                  alt={`${driver.nationality} flag`}
                  className="w-5 h-3 rounded-sm ring-1 ring-white/20"
                />
              )}
              <h2 className="text-lg font-extrabold text-white tracking-tight uppercase">
                {driver.name} <span className="text-gray-300">{driver.surname}</span>
              </h2>
            </div>
            <span className="text-xs font-black text-white bg-gray-950 px-2 py-1 rounded-md border border-red-600 shadow-sm">
              #{driver.number || "N/A"}
            </span>
          </div>

          {/* === Stats Row === */}
          <div className="flex justify-between items-center text-[13px] text-gray-400 font-light tracking-wide">
            <span>Points: <span className="text-white font-medium">{standing?.points ?? 0}</span></span>
            <span>Wins: <span className="text-white font-medium">{standing?.wins ?? 0}</span></span>
          </div>
        </div>

        {/* === Team Footer Panel === */}
        <div className="bg-gradient-to-r from-red-800 to-red-600 text-white text-center text-[11px] font-bold p-2 tracking-widest uppercase">
          {teamName || "Formula One Driver"}
        </div>
      </div>
    </Link>
  );
}
