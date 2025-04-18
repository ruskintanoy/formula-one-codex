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
        id: "formula-4-2014",
        label: "Formula 4 (2014)",
      },
      {
        id: "formula-three",
        label: "Formula Three",
        children: [
          { id: "formula-three-2015", label: "2015" },
          { id: "formula-three-2016", label: "2016" },
        ],
      },
    ],
  },
  {
    id: "formula-one-career",
    label: "Formula One Career",
    children: [
      {
        id: "williams-2017-2018",
        label: "Williams (2017–2018)",
        children: [
          { id: "season-2017", label: "2017" },
          { id: "season-2018", label: "2018" },
        ],
      },
      {
        id: "racing-point-2019-2020",
        label: "Racing Point (2019–2020)",
        children: [
          { id: "season-2019", label: "2019" },
          { id: "season-2020", label: "2020" },
        ],
      },
      {
        id: "aston-martin-2021-present",
        label: "Aston Martin (2021–present)",
        children: [
          { id: "season-2021", label: "2021" },
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
