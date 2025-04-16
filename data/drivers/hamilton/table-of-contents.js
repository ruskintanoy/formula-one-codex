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
      { id: "formula-renault-f3", label: "Formula Renault and Formula Three" },
      { id: "GP2", label: "GP2" },
    ],
  },
  {
    id: "f1-career",
    label: "Formula One Career",
    children: [
      {
        id: "mclaren-2007-2012",
        label: "McLaren (2007–2012)",
        children: [
          { id: "season-2007-2008", label: "2007–2008: Record-breaking debut seasons" },
          { id: "hamilton-2009-2012", label: "2009–2012: Unsuccessful title bids and departure from McLaren" },
        ],
      },
      {
        id: "mercedes-2013-2016",
        label: "Mercedes (2013–2024)",
        children: [
          { id: "rosberg-era", label: "2013–2016: Teammates with Rosberg" },
          { id: "season-2017", label: "2017–2020: Four titles in a row" },
          { id: "hamilton-2021", label: "2021: Title battle vs. Verstappen" },
          { id: "mercedes-struggles-departure", label: "2022–2024: Mercedes' struggles and departure" },
        ],
      },
      {
        id: "ferrari-2025-onwards",
        label: "Ferrari (2025 onwards)",
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
