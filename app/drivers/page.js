import Card from "../../components/Card";

export default function DriversPage() {
  // Placeholder driver data
  const drivers = [
    { id: 1, name: "Lewis Hamilton", team: "Mercedes" },
    { id: 2, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 3, name: "Charles Leclerc", team: "Ferrari" },
    { id: 4, name: "Fernando Alonso", team: "Aston Martin" },
  ];

  return (
    <section className="min-h-[80vh] container mx-auto p-4">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Drivers</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {drivers.map((driver) => (
          <Card
            key={driver.id}
            title={driver.name}
            description={driver.team}
          />
        ))}
      </div>
    </section>
  );
}
