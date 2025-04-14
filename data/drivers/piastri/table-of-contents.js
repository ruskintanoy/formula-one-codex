const tableOfContents = [
    {
      id: "background",
      label: "1. Background",
    },
    {
      id: "junior-career",
      label: "2. Junior Racing Career",
      children: [
        { id: "karting", label: "2.1. Karting" },
        { id: "ginetta", label: "2.2. Ginetta Junior Championship" },
        {
          id: "lower-formulae",
          label: "2.3. Lower Formulae",
          children: [
            { id: "formula4", label: "2.3.1. Formula 4" },
            { id: "formula3-renault", label: "2.3.2. Formula Three and Formula Renault" },
            { id: "formula2", label: "2.3.3. Formula 2" },
          ],
        },
      ],
    },
    {
      id: "f1-career",
      label: "3. Formula One Career",
      children: [
        { id: "mclaren-driver-programme", label: "3.1 McLaren Driver Development Programme" },
        {
          id: "mclaren-2019-present",
          label: "3.2 McLaren (2019–present)",
          children: [
            { id: "rookie-season", label: "3.2.1 2019: Rookie season" },
            { id: "maiden-podium", label: "3.2.2 2020: Maiden Podium" },
            { id: "maiden-pole", label: "3.2.3 2021: Maiden Pole Position" },
            { id: "season-2022", label: "3.2.4 2022 Season" },
            { id: "season-2023", label: "3.2.5 2023 Season" },
            { id: "maiden-win", label: "3.2.6 2024: Maiden Win and Title Challenge" },
            { id: "season-2025", label: "3.2.7 2025 Season: Title Challenge" },
          ],
        },
      ],
    },
    {
      id: "stats-overview",
      label: "4. Formula One Statistical Overview",
      children: [
        { id: "career-summary", label: "4.1. Racing Career Summary" },
        { id: "career-statistics", label: "4.2. Career Statistics" },
      ],
    },
  ];
  
  export default tableOfContents;
  