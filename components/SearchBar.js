"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!searchTerm.trim()) return;

    router.push(`/search?q=${searchTerm}`);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 justify-center my-8">
      <input
        type="text"
        placeholder="Search Formula 1 Drivers..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 rounded bg-gray-800 text-white border border-gray-600 w-64"
      />
      <button
        type="submit"
        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
      >
        Search
      </button>
    </form>
  );
}
