import Card from "../../components/Card";

export default function RacesPage() {
  // Placeholder race data
  const races = [
    { id: 1, name: "British Grand Prix", location: "Silverstone, UK" },
    { id: 2, name: "Monaco Grand Prix", location: "Monaco" },
    { id: 3, name: "Belgian Grand Prix", location: "Spa, Belgium" },
    { id: 4, name: "Japanese Grand Prix", location: "Suzuka, Japan" },
  ];

  return (
    <section className="min-h-[80vh] container mx-auto p-4">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Races</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {races.map((race) => (
          <Card
            key={race.id}
            title={race.name}
            description={race.location}
          />
        ))}
      </div>
    </section>
  );
}
