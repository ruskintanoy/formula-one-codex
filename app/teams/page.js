import Card from "../../components/Card";

export default function TeamsPage() {
  // Placeholder team data
  const teams = [
    { id: 1, name: "Mercedes", base: "Brackley, UK" },
    { id: 2, name: "Red Bull Racing", base: "Milton Keynes, UK" },
    { id: 3, name: "Ferrari", base: "Maranello, Italy" },
    { id: 4, name: "Aston Martin", base: "Silverstone, UK" },
  ];

  return (
    <section className="min-h-[80vh] container mx-auto p-4">
      <h1 className="text-3xl font-bold text-red-600 mb-6">Teams</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {teams.map((team) => (
          <Card
            key={team.id}
            title={team.name}
            description={team.base}
          />
        ))}
      </div>
    </section>
  );
}
