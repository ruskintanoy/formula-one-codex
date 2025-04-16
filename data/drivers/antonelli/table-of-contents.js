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
        label: "Karting (2014–2021)",
        children: [
          { id: "career-beginnings", label: "2014–2017: Career beginnings and international debut" },
          { id: "mercedes-junior", label: "2018–2019: International success as a Mercedes Junior" },
          { id: "senior-karting", label: "2020–2021: Dominance in senior classes" },
        ],
      },
      {
        id: "formula-4",
        label: "Formula 4 (2021–2022)",
        children: [
          { id: "f4-2021", label: "2021: Junior formulae debut" },
          {
            id: "2022",
            label: "2022: Maiden championships and gold medal",
            children: [
              { id: "f4-uae", label: "F4 UAE" },
              { id: "italian-f4", label: "Italian F4" },
              { id: "adac-f4", label: "ADAC F4" },
              { id: "fia-motorsport-games", label: "FIA Motorsport Games" },
            ],
          },
        ],
      },
      {
        id: "formula-3",
        label: "Formula Three (2023)",
        children: [
          { id: "freca-middle-east", label: "Formula Regional Middle East" },
          { id: "formula-regional-european", label: "Formula Regional European" },
        ],
      },
      {
        id: "fia-f2",
        label: "FIA Formula 2 (2024)",
      },
    ],
  },
  {
    id: "f1-career",
    label: "Formula One Career",
    children: [
      {
        id: "mercedes-2025",
        label: "Mercedes (2025)",
      },
    ],
  },
];

export default tableOfContents;
