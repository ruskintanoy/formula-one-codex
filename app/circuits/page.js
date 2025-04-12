import Card from "../../components/Card";

export default function CircuitsPage() {
  // Placeholder circuit data
  const circuits = [
    { id: 1, name: "Silverstone Circuit", location: "United Kingdom" },
    { id: 2, name: "Circuit de Monaco", location: "Monaco" },
    { id: 3, name: "Circuit de Spa-Francorchamps", location: "Belgium" },
    { id: 4, name: "Suzuka Circuit", location: "Japan" },
  ];

  return (
    <section className="min-h-[80vh] container mx-auto p-4">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Circuits</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {circuits.map((circuit) => (
          <Card
            key={circuit.id}
            title={circuit.name}
            description={circuit.location}
          />
        ))}
      </div>
    </section>
  );
}
