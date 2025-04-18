const tableOfContents = [
  {
    id: "background",
    label: "Background",
  },
  {
    id: "junior-racing-career",
    label: "Junior Racing Career",
    children: [
      { id: "karting", label: "Karting" },
      { id: "formula-bmw", label: "Formula BMW" },
      { id: "a1-grand-prix", label: "A1 Grand Prix" },
      { id: "formula-three", label: "Formula Three" },
      { id: "gp2-series", label: "GP2 Series (2008–2009)" },
    ],
  },
  {
    id: "f1-career",
    label: "Formula One Career",
    children: [
      { id: "williams-2010", label: "Williams (2010)" },
      { id: "force-india-2011-2012", label: "Force India (2011–2012)", children: [
          { id: "force-india-2011", label: "2011" },
          { id: "force-india-2012", label: "2012" },
        ] 
      },
      { id: "sauber-2013", label: "Sauber (2013)" },
      { id: "return-to-force-india", label: "Return to Force India (2014–2016)", children: [
          { id: "2014", label: "2014" },
          { id: "2015", label: "2015" },
          { id: "2016", label: "2016" },
        ] 
      },
      { id: "Renault (2017–2019)", label: "Renault (2017–2019)", children: [
          { id: "2017", label: "2017" },
          { id: "2018", label: "2018" },
          { id: "2019", label: "2019" },
        ] 
      },
      { id: "racing-point-2020", label: "Racing Point reserve driver (2020)" },
      { id: "haas-2023", label: "Haas (2023–2024)", children: [
          { id: "2023", label: "2023" },
          { id: "2024", label: "2024" },
        ] 
      },
      { id: "return-to-sauber", label: "Return to Sauber (2025–present)" },
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
