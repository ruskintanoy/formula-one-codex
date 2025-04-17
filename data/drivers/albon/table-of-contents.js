const tableOfContents = [
  {
    id: "background",
    label: "Background",
  },
  {
    id: "junior-career",
    label: "Junior Racing Career",
    children: [
      { id: "karting", label: "Karting (2005–2011)" },
      {
        id: "formula-renault-2012",
        label: "Formula Renault (2012)",
        children: [
          { id: "epic-racing", label: "EPIC Racing" },
          { id: "ktr-2013-2014", label: "KTR (2013–2014)" },
        ],
      },
      { id: "fia-european-f3-2015", label: "FIA European Formula 3 (2015)" },
      { id: "gp3-series-2016", label: "GP3 Series (2016)" },
      {
        id: "formula-2-championship",
        label: "Formula 2 Championship (2017)",
        children: [
          { id: "art-2017", label: "ART Grand Prix (2017)" },
          { id: "dams-2018", label: "DAMS (2018)" },
        ],
      },
      { id: "Formula E (2018–2019)", label: "Formula E (2018–2019)" },
    ],
  },
  {
    id: "f1-career",
    label: "Formula One Career",
    children: [
      {
        id: "toro-rosso-2019",
        label: "Toro Rosso (2019)",
        children: [{ id: "season-2019", label: "2019" }],
      },
      {
        id: "red-bull-2019",
        label: "Red Bull (2019–2021)",
        children: [
          { id: "red-bull-season-2019", label: "2019" },
          { id: "albon-2020", label: "2020" },
        ],
      },
      {
        id: "williams-2022-present",
        label: "Williams (2022–Present)",
        children: [
          { id: "season-2022", label: "2022" },
          { id: "season-2023", label: "2023" },
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
