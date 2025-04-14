const tableOfContents = [
  {
    id: "background",
    label: "1. Background",
  },
  {
    id: "junior-career",
    label: "2. Junior Racing Career",
    children: [
      { id: "karting", label: "2.1 Karting" },
      { id: "formula4", label: "2.2 Formula 4" },
      { id: "formula-renault-eurocup", label: "2.3 Formula Renault Eurocup" },
      { id: "fia-f3", label: "2.4 FIA Formula 3 Championship" },
      { id: "fia-f2", label: "2.5 FIA Formula 2 Championship" },
    ],
  },
  {
    id: "f1-career",
    label: "3. Formula One Career",
    children: [
      { id: "renault-alpine-test-driver", label: "3.1 Renault / Alpine test driver (2020–2022)" },
      { id: "contract-dispute-2022", label: "3.2 2022 Contract Dispute" },
      {
        id: "mclaren-2023-present",
        label: "3.3 McLaren (2023–present)",
        children: [
          { id: "season-2023", label: "3.3.1 2023: Rookie season" },
          { id: "season-2024", label: "3.3.2 2024: Maiden Wins" },
          { id: "season-2025", label: "3.3.3 2025" },
        ],
      },
    ],
  },
  {
    id: "stats-overview",
    label: "4. Formula One Statistical Overview",
    children: [
      { id: "career-summary", label: "4.1 Racing Career Summary" },
      { id: "career-statistics", label: "4.2 Career Statistics" },
    ],
  },
];

export default tableOfContents;
