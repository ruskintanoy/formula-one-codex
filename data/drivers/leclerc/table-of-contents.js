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
        label: "Karting (2005–2013)",
        children: [
          { id: "early-success", label: "2005–2009: Early success in national championships" },
          { id: "international-series", label: "2010–2011: Progression to international series" },
          { id: "senior-art", label: "2012–2013: Senior titles with ART" },
        ],
      },
      {
        id: "formula-renault-2.0",
        label: "Formula Renault 2.0 (2014)",
        children: [
          { id: "formula-renault-2.0-alps", label: "Formula Renault 2.0 Alps" },
          { id: "formula-renault-eurocup", label: "Formula Renault Eurocup" },
        ],
      },
      {
        id: "formula-three-2015",
        label: "Formula Three (2015)",
        children: [
          { id: "fia-f3", label: "FIA European Formula 3" },
          { id: "macau-grand-prix", label: "Macau Grand Prix" },
        ],
      },
      { id: "gp3-series", label: "GP3 Series (2016)" },
      { id: "fia-f2", label: "FIA Formula 2 (2017)" },
    ],
  },
  {
    id: "f1-career",
    label: "Formula One Career",
    children: [
      { id: "ferrari-driver-academy-2016", label: "2016: Ferrari Driver Academy" },
      { id: "sauber-2018", label: "Sauber (2018)" },
      {
        id: "ferrari-2019-present",
        label: "Ferrari (2019–present)",
        children: [
          { id: "season-2019", label: "2019: Maiden victories and il Predestinato" },
          { id: "leclerc-2020-2021", label: "2020–2021: Winless seasons for Ferrari" },
          { id: "season-2022", label: "2022: Curtailed title battle vs. Verstappen" },
          { id: "monaco-victory-2023", label: "2023–2024: First Monaco Grand Prix victory" },
          { id: "season-2025", label: "2025: Partnership with Hamilton" },
        ],
      },
    ],
  },
];

export default tableOfContents;
