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
      season: "2010",
      series: wikiLink("Formula BMW Europe", "https://en.wikipedia.org/wiki/2010_Formula_BMW_Europe_season"),
      team: wikiLink("EuroInternational", "https://en.wikipedia.org/wiki/EuroInternational"),
      races: 16,
      wins: 1,
      poles: 2,
      fastestLaps: 2,
      podiums: 5,
      points: 227,
      position: "4th",
    },
    {
      season: "2010",
      series: wikiLink("Formula BMW Pacific", "https://en.wikipedia.org/wiki/2010_Formula_BMW_Pacific_season"),
      team: wikiLink("EuroInternational", "https://en.wikipedia.org/wiki/EuroInternational"),
      races: 9,
      wins: 2,
      poles: 3,
      fastestLaps: 2,
      podiums: 5,
      points: "—",
      position: "NC†",
    },
    {
      season: "2010",
      series: wikiLink("Eurocup Formula Renault 2.0", "https://en.wikipedia.org/wiki/2010_Eurocup_Formula_Renault_2.0"),
      team: wikiLink("Epsilon Euskadi", "https://en.wikipedia.org/wiki/Epsilon_Euskadi"),
      races: 2,
      wins: 0,
      poles: 0,
      fastestLaps: 2,
      podiums: 1,
      points: "—",
      position: "NC†",
    },
    {
      season: "2010",
      series: wikiLink("Eurocup Formula Renault 2.0", "https://en.wikipedia.org/wiki/2010_Eurocup_Formula_Renault_2.0"),
      team: wikiLink("Tech 1 Racing", "https://en.wikipedia.org/wiki/Tech_1_Racing"),
      races: 2,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: "—",
      position: "NC†",
    },
    {
      season: "2010",
      series: wikiLink("European F3 Open", "https://en.wikipedia.org/wiki/2010_European_F3_Open_season"),
      team: wikiLink("De Villota Motorsport", "https://en.wikipedia.org/wiki/De_Villota_Motorsport"),
      races: 4,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 1,
      points: "—",
      position: "NC†",
    },
    {
      season: "2010",
      series: wikiLink("Formula Renault UK Winter Series", "https://en.wikipedia.org/wiki/2010_Formula_Renault_UK_season#Formula_Renault_UK_Winter_Series"),
      team: wikiLink("Koiranen Bros. Motorsport", "https://en.wikipedia.org/wiki/Koiranen_GP"),
      races: 2,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 18,
      position: "18th",
    },
    {
      season: "2011",
      series: wikiLink("Eurocup Formula Renault 2.0", "https://en.wikipedia.org/wiki/2011_Eurocup_Formula_Renault_2.0"),
      team: wikiLink("Koiranen Motorsport", "https://en.wikipedia.org/wiki/Koiranen_GP"),
      races: 14,
      wins: 2,
      poles: 4,
      fastestLaps: 5,
      podiums: 10,
      points: 200,
      position: "2nd",
    },
    {
      season: "2011",
      series: wikiLink("Formula Renault 2.0 NEC", "https://en.wikipedia.org/wiki/2011_Formula_Renault_2.0_Northern_European_Cup"),
      team: wikiLink("Koiranen Motorsport", "https://en.wikipedia.org/wiki/Koiranen_GP"),
      races: 20,
      wins: 10,
      poles: 8,
      fastestLaps: 12,
      podiums: 17,
      points: 489,
      position: "1st",
    },
    {
      season: "2011",
      series: wikiLink("Formula 3 Euro Series", "https://en.wikipedia.org/wiki/2011_Formula_3_Euro_Series"),
      team: wikiLink("Signature", "https://en.wikipedia.org/wiki/Signature_Team"),
      races: 3,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: "—",
      position: "NC†",
    },
    {
      season: "2011",
      series: wikiLink("Macau Grand Prix", "https://en.wikipedia.org/wiki/2011_Macau_Grand_Prix"),
      team: wikiLink("Signature", "https://en.wikipedia.org/wiki/Signature_Team"),
      races: 1,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: "—",
      position: "17th",
    },
    {
      season: "2012",
      series: wikiLink("British Formula 3 Championship", "https://en.wikipedia.org/wiki/2012_British_Formula_3_season"),
      team: wikiLink("Carlin", "https://en.wikipedia.org/wiki/Carlin_Motorsport"),
      races: 26,
      wins: 5,
      poles: 1,
      fastestLaps: 2,
      podiums: 9,
      points: 224,
      position: "6th",
    },
    {
      season: "2012",
      series: wikiLink("Formula 3 Euro Series", "https://en.wikipedia.org/wiki/2012_Formula_3_Euro_Series"),
      team: wikiLink("Carlin", "https://en.wikipedia.org/wiki/Carlin_Motorsport"),
      races: 24,
      wins: 0,
      poles: 2,
      fastestLaps: 0,
      podiums: 2,
      points: 112,
      position: "9th",
    },
    {
      season: "2012",
      series: wikiLink("FIA Formula 3 European Championship", "https://en.wikipedia.org/wiki/2012_FIA_Formula_3_European_Championship"),
      team: wikiLink("Carlin", "https://en.wikipedia.org/wiki/Carlin_Motorsport"),
      races: 20,
      wins: 1,
      poles: 2,
      fastestLaps: 1,
      podiums: 5,
      points: 161,
      position: "5th",
    },
    {
      season: "2012",
      series: wikiLink("Masters of Formula 3", "https://en.wikipedia.org/wiki/2012_Masters_of_Formula_3"),
      team: wikiLink("Carlin", "https://en.wikipedia.org/wiki/Carlin_Motorsport"),
      races: 1,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: "—",
      position: "4th",
    },
    {
      season: "2012",
      series: wikiLink("Macau Grand Prix", "https://en.wikipedia.org/wiki/2012_Macau_Grand_Prix"),
      team: wikiLink("Carlin", "https://en.wikipedia.org/wiki/Carlin_Motorsport"),
      races: 1,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: "—",
      position: "7th",
    },
    {
      season: "2013",
      series: wikiLink("GP3 Series", "https://en.wikipedia.org/wiki/2013_GP3_Series"),
      team: wikiLink("MW Arden", "https://en.wikipedia.org/wiki/Arden_International"),
      races: 16,
      wins: 0,
      poles: 1,
      fastestLaps: 2,
      podiums: 2,
      points: 66,
      position: "10th",
    },
    {
      season: "2013",
      series: wikiLink("Formula Renault 3.5 Series", "https://en.wikipedia.org/wiki/2013_Formula_Renault_3.5_Series"),
      team: wikiLink("Zeta Corse", "https://en.wikipedia.org/wiki/Zeta_Corse"),
      races: 9,
      wins: 0,
      poles: 0,
      fastestLaps: 1,
      podiums: 0,
      points: 22,
      position: "19th",
    },
    {
      season: "2013",
      series: wikiLink("Macau Grand Prix", "https://en.wikipedia.org/wiki/2013_Macau_Grand_Prix"),
      team: wikiLink("Carlin", "https://en.wikipedia.org/wiki/Carlin_Motorsport"),
      races: 1,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: "—",
      position: "7th",
    },
    {
      season: "2014",
      series: wikiLink("Formula Renault 3.5 Series", "https://en.wikipedia.org/wiki/2014_Formula_Renault_3.5_Series"),
      team: wikiLink("DAMS", "https://en.wikipedia.org/wiki/DAMS"),
      races: 17,
      wins: 7,
      poles: 7,
      fastestLaps: 6,
      podiums: 7,
      points: 227,
      position: "1st",
    },
    {
      season: "2015",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2015_Formula_One_World_Championship"),
      team: wikiLink("Scuderia Toro Rosso", "https://en.wikipedia.org/wiki/Scuderia_Toro_Rosso"),
      races: 19,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 18,
      position: "15th",
    },
    {
      season: "2016",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2016_Formula_One_World_Championship"),
      team: wikiLink("Scuderia Toro Rosso", "https://en.wikipedia.org/wiki/Scuderia_Toro_Rosso"),
      races: 21,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 46,
      position: "12th",
    },
    {
      season: "2017",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2017_Formula_One_World_Championship"),
      team: wikiLink("Scuderia Toro Rosso", "https://en.wikipedia.org/wiki/Scuderia_Toro_Rosso"),
      races: 16,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 54,
      position: "9th",
    },
    {
      season: "2017",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2017_Formula_One_World_Championship"),
      team: wikiLink("Renault Sport F1 Team", "https://en.wikipedia.org/wiki/Renault_Sport_F1_Team"),
      races: 4,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 0,
      position: "NC†",
    },
    {
      season: "2018",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2018_Formula_One_World_Championship"),
      team: wikiLink("Renault Sport F1 Team", "https://en.wikipedia.org/wiki/Renault_Sport_F1_Team"),
      races: 21,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 53,
      position: "10th",
    },
    {
      season: "2019",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2019_Formula_One_World_Championship"),
      team: wikiLink("McLaren F1 Team", "https://en.wikipedia.org/wiki/McLaren_F1_Team"),
      races: 21,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 1,
      points: 96,
      position: "6th",
    },
    {
      season: "2020",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2020_Formula_One_World_Championship"),
      team: wikiLink("McLaren F1 Team", "https://en.wikipedia.org/wiki/McLaren_F1_Team"),
      races: 17,
      wins: 0,
      poles: 0,
      fastestLaps: 1,
      podiums: 1,
      points: 105,
      position: "6th",
    },
    {
      season: "2021",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2021_Formula_One_World_Championship"),
      team: wikiLink("Scuderia Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari"),
      races: 22,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 4,
      points: 164.5,
      position: "5th",
    },
    {
      season: "2022",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2022_Formula_One_World_Championship"),
      team: wikiLink("Scuderia Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari"),
      races: 22,
      wins: 1,
      poles: 3,
      fastestLaps: 2,
      podiums: 9,
      points: 246,
      position: "5th",
    },
    {
      season: "2023",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2023_Formula_One_World_Championship"),
      team: wikiLink("Scuderia Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari"),
      races: 22,
      wins: 1,
      poles: 2,
      fastestLaps: 0,
      podiums: 3,
      points: 200,
      position: "7th",
    },
    {
      season: "2024",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship"),
      team: wikiLink("Scuderia Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari"),
      races: 24,
      wins: 2,
      poles: 1,
      fastestLaps: 1,
      podiums: 9,
      points: 290,
      position: "5th",
    },
    {
      season: "2025",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship"),
      team: wikiLink("Atlassian Williams Racing", "https://en.wikipedia.org/wiki/Williams_Racing"),
      races: 5,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 1,
      position: "16th*",
    },
  ],
  legend: [
    "† As Sainz was a guest driver, he was ineligible for points.",
    "* Season still in progress.",
  ],
};

export default racingCareerSummary;