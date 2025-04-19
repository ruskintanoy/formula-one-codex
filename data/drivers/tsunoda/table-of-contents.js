const tableOfContents = [
  {
    id: "background",
    label: "Background",
  },
  {
    id: "junior-career",
    label: "Junior Racing Career",
    children: [
      { id: "karting", label: "Karting (2009–2015)" },
      { id: "japanese-formula-4", label: "Japanese Formula 4" },
      { id: "fia-formula-3", label: "FIA Formula 3 Championship" },
      { id: "euroformula-open", label: "Euroformula Open" },
      { id: "toyota-racing-series", label: "Toyota Racing Series" },
      { id: "fia-formula-2", label: "FIA Formula 2 Championship (2020)" },
    ],
  },
  {
    id: "f1-career",
    label: "Formula One Career",
    children: [
      {
        id: "alphatauri-racing-bulls-2021-2025",
        label: "AlphaTauri / Racing Bulls (2021–2025)",
        children: [
          { id: "2021", label: "2021" },
          { id: "season-2022", label: "2022" },
          { id: "season-2023", label: "2023: Tsunoda's Progress with AlphaTauri" },
          { id: "season-2024", label: "2024: Tsunoda with RB Formula One Team" },
        ],
      },
      { id: "season-2025", label: "2025: Tsunoda Extended Contract and Red Bull Swap" },
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
