import Link from "next/link";

export default function DriverCard({ driver, teamName }) {
  return (
    <Link href={`/drivers/${driver.driverId}`}>
      <div className="bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:scale-105 transition duration-300 cursor-pointer">
        <img
          src={`/drivers/${driver.driverId}/${driver.driverId}.jpg`}
          alt={`${driver.name} ${driver.surname}`}
          className="w-full h-56 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-bold text-white">
            {driver.name} {driver.surname}
          </h2>
          <p className="text-gray-400 text-sm">
            Nationality: {driver.nationality}
          </p>
        </div>
        <div className="bg-red-600 text-white text-center text-xs font-semibold p-2">
          {teamName || "Formula One Driver"}
        </div>
      </div>
    </Link>
  );
}
