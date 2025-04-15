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
      { id: "fia-f3", label: "FIA European Formula 3" },
      { id: "gp3-series", label: "GP3 Series" },
      { id: "formula2", label: "FIA Formula 2 Championship" },
    ],
  },
  {
    id: "f1-career",
    label: "Formula One Career",
    children: [
      { id: "mercedes-junior-team", label: "Early Mercedes Association and F1 Tests" },
      {
        id: "williams-2019-2021",
        label: "Williams (2019–2021)",
        children: [
          { id: "rookie-season", label: "2019–2020: Rookie season and first points" },
          { id: "season-2021", label: "2021: Maiden podium" },
        ],
      },
      {
        id: "mercedes-2022-present",
        label: "Mercedes (2022–present)",
        children: [
          { id: "season-2022-2023", label: "2022–2023: Maiden win and pole position" },
          { id: "season-2024", label: "2024" },
          { id: "season-2025", label: "2025" },
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
