const tableOfContents = [
  {
    id: "background",
    label: "Background",
  },
  {
    id: "junior-career",
    label: "Junior Racing Career",
    children: [
      { id: "karting", label: "Karting" },
      { id: "formula-4", label: "Formula 4" },
      { id: "frec", label: "Formula Regional European Championship" },
      { id: "fia-f3", label: "FIA Formula 3 Championship" },
      { id: "fia-f2", label: "FIA Formula 2 Championship" },
    ],
  },
  {
    id: "f1-career",
    label: "Formula One Career",
    children: [
      { id: "junior-career", label: "Junior Career & Management" },
      { id: "sauber-prospects", label: "2025 Sauber/Audi Prospects" },
      { id: "sauber-2025", label: "Sauber (2025–present)" },
    ],
  },
];

export default tableOfContents;
