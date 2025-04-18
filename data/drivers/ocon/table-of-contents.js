const tableOfContents = [
  {
    id: "background",
    label: "Background",
  },
  {
    id: "junior-career",
    label: "Junior Racing Career",
    children: [
      { id: "karting", label: "Karting (2006–2011)" },
      { id: "Formula Renault (2012–2013)", label: "Formula Renault (2012–2013)" },
      { id: "formula-three-2013-15", label: "Formula Three, GP3 and DTM (2013–2015)" },
    ],
  },
  {
    id: "f1-career",
    label: "Formula One Career",
    children: [
      { id: "manor-2016", label: "Manor (2016)" },
      {
        id: "force-india-2017-2018",
        label: "Force India (2017–2018)",
        children: [
          { id: "season-2017", label: "2017 season" },
          { id: "ocon-2018", label: "2028 season" }, 
        ],
      },
      { id: "mercedes-reserve-driver-2019", label: "Mercedes reserve driver (2019)" },
      {
        id: "renault-alpine",
        label: "Renault / Alpine (2020–2024)",
        children: [
          { id: "renault-2020", label: "2020: Maiden podium" },
          { id: "season-2021", label: "2021: Maiden victory" },
          { id: "season-2022", label: "2022 season" },
          { id: "season-2023", label: "2023 season" },
          { id: "ocon-2024", label: "2024: Early departure" },
        ],
      },
      { id: "haas-2025", label: "Haas (2025–present)" },
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
