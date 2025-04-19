const tableOfContents = [
  {
    id: "background",
    label: "Background",
  },
  {
    id: "junior-racing-career",
    label: "Junior Racing Career",
    children: [
      {
        id: "karting",
        label: "Karting (2013–2020)",
      },
      {
        id: "formula-4",
        label: "Formula 4 (2020–2021)",
        children: [
          { id: "junior-formulae-debut", label: "2020: Junior formulae debut" },
          { id: "maiden-championships-2021", label: "2021: Maiden championships" },
        ],
      },
      {
        id: "formula-three",
        label: "Formula Three (2021–2022)",
        children: [
          { id: "2021", label: "2021" },
          { id: "2022", label: "2022" },
          {
            id: "formula-regional",
            label: "Formula Regional",
          },
          {
            id: "fia-formula-3",
            label: "FIA Formula 3 (2022)",
          },
        ],
      },
      {
        id: "fia-formula-2-2023-2024",
        label: "FIA Formula 2 (2023–2024)",
        children: [
          { id: "2023", label: "2023" },
          { id: "formula-2-2024", label: "2024: Formula 2 Season" },
        ],
      },
    ],
  },
  {
    id: "f1-career",
    label: "Formula One Career",
    children: [
      { id: "ferrari-haas-reserve-driver-2024", label: "Ferrari/Haas reserve driver (2024)" },
      { id: "haas-2025-present", label: "Haas (2025–present)" },
    ],
  },
  {
    id: "stats-overview",
    label: "Formula One Statistical Overview",
    children: [
      { id: "career-summary", label: "Racing Career Summary" },
      { id: "career-statistics", label: "Career Statistics" },
    ],
  },
];

export default tableOfContents;
