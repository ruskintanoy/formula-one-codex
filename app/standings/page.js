import Card from "../../components/Card";

export default function StandingsPage() {
  // Placeholder standings data
  const standings = [
    { id: 1, name: "Max Verstappen", points: "400 pts" },
    { id: 2, name: "Lewis Hamilton", points: "350 pts" },
    { id: 3, name: "Charles Leclerc", points: "300 pts" },
    { id: 4, name: "Fernando Alonso", points: "275 pts" },
  ];

  return (
    <section className="min-h-[80vh] container mx-auto p-4">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Standings</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {standings.map((driver) => (
          <Card
            key={driver.id}
            title={driver.name}
            description={driver.points}
          />
        ))}
      </div>
    </section>
  );
}
