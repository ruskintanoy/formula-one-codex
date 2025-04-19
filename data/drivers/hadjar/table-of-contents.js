const tableOfContents = [
  {
    id: "background",
    label: "Background",
  },
  {
    id: "junior-career",
    label: "Junior Racing Career",
    children: [
      {
        id: "karting",
        label: "Karting",
      },
      {
        id: "lower-formulae",
        label: "Lower Formulae",
        children: [
          { id: "2019", label: "2019" },
          { id: "2020", label: "2020" },
        ],
      },
      {
        id: "formula-regional",
        label: "Formula Regional",
        children: [
          { id: "2021", label: "2021" },
          { id: "2022", label: "2022" },
        ],
      },
      { id: "fia-formula-3", label: "FIA Formula 3" },
      {
        id: "fia-formula-2",
        label: "FIA Formula 2",
        children: [
          { id: "2023-rookie-season", label: "2023: Rookie season" },
        ],
      },
      { id: "2024-title-battle", label: "2024: Title battle vs. Bortoleto and le Petit Prost" },
      { id: "macau-grand-prix", label: "Macau Grand Prix" },
    ],
  },
  {
    id: "f1-career",
    label: "Formula One Career",
    children: [
      { id: "Racing Bulls (2025)", label: "Racing Bulls (2025)" },
    ],
  },
  {
    id: "stats-overview",
    label: "Formula One Statistical Overview",
    children: [
      { id: "racing-career-summary", label: "Racing Career Summary" },
      { id: "career-statistics", label: "Career Statistics" },
    ],
  },
];

export default tableOfContents;
