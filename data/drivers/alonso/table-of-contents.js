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
      { id: "international-karting", label: "1995–1997: Rise through international karting" },
      { id: "car-racing", label: "Early Car Racing (1999–2000)" },
    ],
  },
  {
    id: "f1-career",
    label: "Formula One Career",
    children: [
      { id: "minardi-renault", label: "Minardi and Renault (2001–2006)" },
      { id: "mclaren-renault", label: "McLaren and second stint with Renault (2007–2009)" },
      { id: "ferrari", label: "Ferrari (2010–2014)" },
      { id: "mclaren-return", label: "Return to McLaren (2015–2019)" },
      { id: "alpine", label: "Alpine (2021–2022)" },
      { id: "aston-martin", label: "Aston Martin (2023–Present)" },
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
