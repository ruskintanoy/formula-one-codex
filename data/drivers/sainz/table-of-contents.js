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
      { id: "formula-bmw", label: "Formula BMW (2010)" },
      { id: "formula-three", label: "Formula Three (2012)" },
      { id: "gp3-series", label: "GP3 Series (2013)" },
      { id: "formula-renault-3-5", label: "Formula Renault 3.5 (2013–2014)" },
    ],
  },
  {
    id: "f1-career",
    label: "Formula One Career",
    children: [
      {
        id: "tororosso-2015",
        label: "Toro Rosso (2015–2017)",
        children: [
          { id: "season-2015", label: "2015" },
          { id: "season-2016", label: "2016" },
          { id: "season-2017", label: "2017" },
        ],
      },
      {
        id: "renault",
        label: "Renault (2017–2018)",
        children: [
          { id: "renault-2017", label: "2017" },
          { id: "renault-2018", label: "2018" },
        ],
      },
      {
        id: "mclaren-2019-2020",
        label: "McLaren (2019–2020)",
        children: [
          { id: "mclaren-2019", label: "2019: Maiden podium" },
          { id: "mclaren-2020", label: "2020" },
        ],
      },
      {
        id: "ferrari-2021-2024",
        label: "Ferrari (2021–2024)",
        children: [
          { id: "ferrari-2021", label: "2021" },
          { id: "ferrari-2022", label: "2022: Maiden win and pole position" },
          { id: "ferrari-2023", label: "2023" },
          { id: "ferrari-2024", label: "2024" },
        ],
      },
      { id: "williams-2025-present", label: "Williams (2025–present)" },
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
