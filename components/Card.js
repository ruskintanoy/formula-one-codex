

export default function Card({ title, description }) {
    return (
      <div className="bg-gray-900 text-white p-4 rounded shadow hover:scale-105 transition-transform duration-300">
        <h2 className="text-xl font-bold mb-2 text-red-600">{title}</h2>
        <p className="text-sm text-gray-400">{description}</p>
      </div>
    );
  }
  