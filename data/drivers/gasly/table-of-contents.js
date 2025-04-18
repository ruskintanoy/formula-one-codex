const tableOfContents = [
  {
    id: "background",
    label: "Background",
  },
  {
    id: "junior-career",
    label: "Junior Racing Career",
    children: [
      {
        id: "karting",
        label: "Karting",
      },
      {
        id: "formula-renault",
        label: "Formula Renault",
      },
      {
        id: "gp2-series",
        label: "GP2 Series",
      },
    ],
  },
  {
    id: "f1-career",
    label: "Formula One Career",
    children: [
      {
        id: "red-bull-junior-team-2014",
        label: "Red Bull Junior Team & Testing",
      },
      {
        id: "toro-rosso-2017-2018",
        label: "Toro Rosso (2017–2018)",
        children: [
          { id: "2017", label: "2017" },
          { id: "2018", label: "2018" },
        ],
      },
      {
        id: "red-bull-2019",
        label: "Red Bull (2019)",
        children: [
          { id: "red-bull-2019-detail", label: "2019" },
        ],
      },
      {
        id: "toro-rosso-return-2019",
        label: "Return to Toro Rosso / AlphaTauri (2019–2022)",
        children: [
          { id: "2019", label: "2019" },
          { id: "2020", label: "2020: Maiden win" },
          { id: "2021", label: "2021" },
          { id: "2022", label: "2022" },
        ],
      },
      {
        id: "Alpine (2023–present)",
        label: "Alpine (2023–present)",
        children: [
          { id: "2023", label: "2023" },
          { id: "2024", label: "2024" },
          { id: "2025", label: "2025" },
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
