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
      { id: "lower-formulae", label: "Lower Formulae" },
      { id: "trs", label: "Toyota Racing Series" },
      { id: "euroformula-open", label: "Euroformula Open Championship" },
      { id: "asian-f3", label: "International Formula 3" },
      {
        id: "fia-f3",
        label: "FIA Formula 3 Championship",
        children: [
          { id: "f3-2019", label: "2019" },
          { id: "macau-grand-prix", label: "Macau Grand Prix" },
          { id: "f3-2020", label: "2020" },
        ],
      },
      { id: "road-to-indy", label: "Road to Indy" },
      {
        id: "f2",
        label: "FIA Formula 2 Championship",
        children: [
          { id: "f2-2021", label: "2021" },
          { id: "2022", label: "2022" },
        ],
      },
    ],
  },
  {
    id: "f1-career",
    label: "Formula One Career",
    children: [
      { id: "junior-career", label: "Junior Career & Red Bull Program" },
      {
        id: "alphatauri-racingbulls",
        label: "AlphaTauri / Racing Bulls (2023–2024)",
        children: [
          { id: "debut-2023", label: "2023: Debut in a reserve role" },
          { id: "late-season-2024", label: "2024: Late-season stint" },
        ],
      },
      { id: "red-bull-2025", label: "Red Bull (January–March 2025)" },
      { id: "racing-bulls-2025", label: "Return to Racing Bulls (March 2025–present)" },
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
