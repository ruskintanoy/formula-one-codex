const wikiLink = (text, url) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-500 hover:underline"
  >
    {text}
  </a>
);

const racingCareerSummary = {
  data: [
    {
      season: "2014",
      series: wikiLink("BRDC Formula 4 Championship", "https://en.wikipedia.org/wiki/2014_BRDC_Formula_4_Championship"),
      team: "Lanan Racing",
      races: 24,
      wins: 5,
      poles: 3,
      fastestLaps: 4,
      podiums: 11,
      points: 483,
      position: "1st",
    },
    {
      season: "2014",
      series: wikiLink("Formula Renault 2.0 Alps", "https://en.wikipedia.org/wiki/2014_Formula_Renault_2.0_Alps_Series"),
      team: wikiLink("Koiranen GP", "https://en.wikipedia.org/wiki/Koiranen_GP"),
      races: 12,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 1,
      points: 123,
      position: "4th",
    },
    {
      season: "2014",
      series: wikiLink("Eurocup Formula Renault 2.0", "https://en.wikipedia.org/wiki/2014_Eurocup_Formula_Renault_2.0"),
      team: wikiLink("Koiranen GP / Tech 1 Racing", "https://en.wikipedia.org/wiki/Tech_1_Racing"),
      races: 4,
      wins: 1,
      poles: 1,
      fastestLaps: 1,
      podiums: 1,
      points: "-",
      position: "NC†",
    },
    {
      season: "2015",
      series: wikiLink("FIA Formula 3 European Championship", "https://en.wikipedia.org/wiki/2015_FIA_Formula_3_European_Championship"),
      team: wikiLink("Carlin", "https://en.wikipedia.org/wiki/Carlin_Motorsport"),
      races: 33,
      wins: 1,
      poles: 0,
      fastestLaps: 0,
      podiums: 3,
      points: 203,
      position: "6th",
    },
    {
      season: "2015",
      series: wikiLink("Masters of Formula 3", "https://en.wikipedia.org/wiki/2015_Masters_of_Formula_3"),
      team: wikiLink("Carlin", "https://en.wikipedia.org/wiki/Carlin_Motorsport"),
      races: 1,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 1,
      points: "-",
      position: "2nd",
    },
    {
      season: "2016",
      series: wikiLink("FIA Formula 3 European Championship", "https://en.wikipedia.org/wiki/2016_FIA_Formula_3_European_Championship"),
      team: wikiLink("HitechGP", "https://en.wikipedia.org/wiki/Hitech_Grand_Prix"),
      races: 30,
      wins: 2,
      poles: 3,
      fastestLaps: 3,
      podiums: 10,
      points: 264,
      position: "3rd",
    },
    {
      season: "2016",
      series: wikiLink("Macau Grand Prix", "https://en.wikipedia.org/wiki/2016_Macau_Grand_Prix"),
      team: wikiLink("HitechGP", "https://en.wikipedia.org/wiki/Hitech_Grand_Prix"),
      races: 1,
      wins: 0,
      poles: 1,
      fastestLaps: 0,
      podiums: 0,
      points: "-",
      position: "7th",
    },
    {
      season: "2017",
      series: wikiLink("GP3 Series", "https://en.wikipedia.org/wiki/2017_GP3_Series"),
      team: wikiLink("ART Grand Prix", "https://en.wikipedia.org/wiki/ART_Grand_Prix"),
      races: 15,
      wins: 4,
      poles: 4,
      fastestLaps: 5,
      podiums: 7,
      points: 220,
      position: "1st",
    },
    {
      season: "2018",
      series: wikiLink("FIA Formula 2 Championship", "https://en.wikipedia.org/wiki/2018_Formula_2_Championship"),
      team: wikiLink("ART Grand Prix", "https://en.wikipedia.org/wiki/ART_Grand_Prix"),
      races: 24,
      wins: 7,
      poles: 5,
      fastestLaps: 6,
      podiums: 11,
      points: 287,
      position: "1st",
    },
    {
      season: "2019",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2019_Formula_One_World_Championship"),
      team: wikiLink("ROKiT Williams Racing", "https://en.wikipedia.org/wiki/Williams_Racing"),
      races: 21,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 0,
      position: "20th",
    },
    {
      season: "2020",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2020_Formula_One_World_Championship"),
      team: wikiLink("Williams Racing / Mercedes", "https://en.wikipedia.org/wiki/Williams_Racing"),
      races: 17,
      wins: 0,
      poles: 0,
      fastestLaps: 1,
      podiums: 0,
      points: 3,
      position: "18th",
    },
    {
      season: "2021",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2021_Formula_One_World_Championship"),
      team: wikiLink("Williams Racing", "https://en.wikipedia.org/wiki/Williams_Racing"),
      races: 22,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 1,
      points: 16,
      position: "15th",
    },
    {
      season: "2022",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2022_Formula_One_World_Championship"),
      team: wikiLink("Mercedes-AMG Petronas F1 Team", "https://en.wikipedia.org/wiki/Mercedes-AMG_Petronas_F1_Team"),
      races: 22,
      wins: 1,
      poles: 1,
      fastestLaps: 4,
      podiums: 8,
      points: 275,
      position: "4th",
    },
    {
      season: "2023",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2023_Formula_One_World_Championship"),
      team: wikiLink("Mercedes-AMG Petronas F1 Team", "https://en.wikipedia.org/wiki/Mercedes-AMG_Petronas_F1_Team"),
      races: 22,
      wins: 0,
      poles: 0,
      fastestLaps: 1,
      podiums: 2,
      points: 175,
      position: "8th",
    },
    {
      season: "2024",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship"),
      team: wikiLink("Mercedes-AMG Petronas F1 Team", "https://en.wikipedia.org/wiki/Mercedes-AMG_Petronas_F1_Team"),
      races: 24,
      wins: 2,
      poles: 4,
      fastestLaps: 2,
      podiums: 4,
      points: 245,
      position: "6th",
    },
    {
      season: "2025",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship"),
      team: wikiLink("Mercedes-AMG Petronas F1 Team", "https://en.wikipedia.org/wiki/Mercedes-AMG_Petronas_F1_Team"),
      races: 4,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 3,
      points: "63*",
      position: "4th*",
    },
  ],
  legend: [
    "† As Russell was a guest driver, he was ineligible for points.",
    "* Season still in progress.",
  ],
};

export default racingCareerSummary;
