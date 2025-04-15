const tableOfContents = [
  {
    id: "background",
    label: "Background",
  },
  {
    id: "junior-career",
    label: "Junior Racing Career",
    children: [
      { id: "karting", label: "Karting", children: [
        { id: "karting-2005-2009", label: "2005–2009: Dominance in national championships" },
        { id: "karting-2010-2012", label: "2010–2012: Entering the international karting scene" },
        { id: "karting-2013", label: "2013: Record-breaking season" },
      ]},
      { id: "lower-formulae", label: "Lower Formulae" },
      { id: "2014-career", label: "2014: Florida Winter Series and Formula Three" },
    ],
  },
  {
    id: "f1-career",
    label: "Formula One Career",
    children: [
      { id: "f1-debut", label: "3.1 Formula One Debut - Toro Rosso" },
      { id: "toro-rosso-2015-2016", label: "3.2 Toro Rosso (2015–2016)" },
      {
        id: "red-bull-2016-present",
        label: "3.3 Red Bull (2016–present)",
        children: [
          { id: "2016-maiden-win", label: "3.3.1 2016: Youngest Grand Prix winner" },
          { id: "2017-2018-rise", label: "3.3.2 2017–2018: Reliability issues and rise to prominence" },
          { id: "2019-2020-teammates", label: "3.3.3 2019–2020: Dominance over teammates" },
          { id: "2021-title-battle", label: "3.3.4 2021: World Champion amid title battle vs. Hamilton" },
          { id: "2022-second-title", label: "3.3.5 2022: Dominant second title" },
          { id: "2023-third-title", label: "3.3.6 2023: Record-breaking third title" },
          { id: "2024-fourth-title", label: "3.3.7 2024: Fourth title amid struggles at Red Bull" },
          { id: "2025-challenger", label: "3.3.8 2025: Challenger to McLaren" },
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
