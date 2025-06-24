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
      { id: "formula-4", label: "Formula 4 (2018)" },
      { id: "f3-asian", label: "F3 Asian Championship" },
      { id: "euroformula-open", label: "Euroformula Open" },
      {
        id: "fia-f3",
        label: "FIA Formula 3 Championship",
        children: [
          { id: "f3-2020", label: "2020" },
          { id: "f3-2021", label: "2021" },
        ],
      },
      {
        id: "fia-f2",
        label: "FIA Formula 2 Championship",
        children: [
          { id: "f2-2021", label: "2021" },
          { id: "f2-2022", label: "2022" },
          { id: "f2-2023", label: "2023" },
        ],
      },
    ],
  },
  {
    id: "f1-career",
    label: "Formula One Career",
    children: [
      { id: "alpine-academy", label: "Alpine Academy" },
      { id: "reserve-2023", label: "2023: Alpine Reserve Driver" },
      {
        id: "alpine-2024",
        label: "Alpine (2024–present)",
        children: [
          { id: "rookie-2025", label: "2025: Rookie Season" },
        ],
      },
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
