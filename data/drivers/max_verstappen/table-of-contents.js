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
      { id: "formula4", label: "Formula 4" },
      { id: "formula-renault-eurocup", label: "2.3 Formula Renault Eurocup" },
      { id: "fia-f3", label: "FIA Formula 3 Championship" },
      { id: "fia-f2", label: "FIA Formula 2 Championship" },
    ],
  },
  {
    id: "f1-career",
    label: "Formula One Career",
    children: [
      { id: "renault-alpine-test-driver", label: "Renault / Alpine test driver (2020–2022)" },
      { id: "contract-dispute-2022", label: "2022 Contract Dispute" },
      {
        id: "mclaren-2023-present",
        label: "McLaren (2023–present)",
        children: [
          { id: "season-2023", label: "2023: Rookie season" },
          { id: "season-2024", label: "2024: Maiden Wins" },
          { id: "season-2025", label: "2025: Title Challenge" },
        ],
      },
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
