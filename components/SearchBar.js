"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react"; // Icon Library (lucide-react)

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;
    router.push(`/search?q=${searchTerm}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="relative w-full max-w-xs"
    >
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4 pointer-events-none" />

      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full pl-9 pr-3 py-2 rounded-md bg-black/40 border border-gray-600 placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-gray-300 transition"
      />
    </form>
  );
}
