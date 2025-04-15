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
        { id: "ginetta", label: "Ginetta Junior Championship" },
        {
          id: "lower-formulae",
          label: "Lower Formulae",
          children: [
            { id: "formula4", label: "Formula 4" },
            { id: "formula3-renault", label: "Formula Three and Formula Renault" },
            { id: "formula2", label: "Formula 2" },
          ],
        },
      ],
    },
    {
      id: "f1-career",
      label: "Formula One Career",
      children: [
        { id: "mclaren-driver-programme", label: "McLaren Driver Development Programme" },
        {
          id: "mclaren-2019-present",
          label: "3.2 McLaren (2019–present)",
          children: [
            { id: "rookie-season", label: "2019: Rookie season" },
            { id: "maiden-podium", label: "2020: Maiden Podium" },
            { id: "maiden-pole", label: "2021: Maiden Pole Position" },
            { id: "season-2022", label: "2022 Season" },
            { id: "season-2023", label: "2023 Season" },
            { id: "maiden-win", label: "2024: Maiden Win and Title Challenge" },
            { id: "season-2025", label: "2025 Season: Title Challenge" },
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
  