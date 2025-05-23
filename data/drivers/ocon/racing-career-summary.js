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
      season: "2012",
      series: wikiLink("Eurocup Formula Renault 2.0", "https://en.wikipedia.org/wiki/2012_Eurocup_Formula_Renault_2.0"),
      team: wikiLink("Koiranen Motorsport", "https://en.wikipedia.org/wiki/Koiranen_GP"),
      races: 14,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 1,
      points: 31,
      position: "14th",
    },
    {
      season: "2012",
      series: wikiLink("Formula Renault 2.0 Alps", "https://en.wikipedia.org/wiki/2012_Formula_Renault_2.0_Alps_Series"),
      team: wikiLink("Koiranen Motorsport", "https://en.wikipedia.org/wiki/Koiranen_GP"),
      races: 9,
      wins: 0,
      poles: 0,
      fastestLaps: 1,
      podiums: 2,
      points: 69,
      position: "7th",
    },
    {
      season: "2013",
      series: wikiLink("Eurocup Formula Renault 2.0", "https://en.wikipedia.org/wiki/2013_Eurocup_Formula_Renault_2.0"),
      team: wikiLink("ART Junior Team", "https://en.wikipedia.org/wiki/R-ace_GP"),
      races: 14,
      wins: 2,
      poles: 1,
      fastestLaps: 1,
      podiums: 5,
      points: 159,
      position: "3rd",
    },
    {
      season: "2013",
      series: wikiLink("Formula Renault 2.0 NEC", "https://en.wikipedia.org/wiki/2013_Formula_Renault_2.0_Northern_European_Cup"),
      team: wikiLink("ART Junior Team", "https://en.wikipedia.org/wiki/R-ace_GP"),
      races: 8,
      wins: 1,
      poles: 0,
      fastestLaps: 1,
      podiums: 3,
      points: 122,
      position: "12th",
    },
    {
      season: "2013",
      series: wikiLink("Macau Grand Prix", "https://en.wikipedia.org/wiki/2013_Macau_Grand_Prix"),
      team: wikiLink("Prema Powerteam", "https://en.wikipedia.org/wiki/Prema_Powerteam"),
      races: 2,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: "N/A",
      position: "10th",
    },
    {
      season: "2014",
      series: wikiLink("FIA Formula 3 European Championship", "https://en.wikipedia.org/wiki/2014_FIA_Formula_3_European_Championship"),
      team: wikiLink("Prema Powerteam", "https://en.wikipedia.org/wiki/Prema_Powerteam"),
      races: 33,
      wins: 9,
      poles: 15,
      fastestLaps: 7,
      podiums: 21,
      points: 478,
      position: "1st",
    },
    {
      season: "2014",
      series: wikiLink("Formula Renault 3.5 Series", "https://en.wikipedia.org/wiki/2014_Formula_Renault_3.5_Series"),
      team: wikiLink("Comtec Racing", "https://en.wikipedia.org/wiki/Comtec_Racing"),
      races: 3,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 2,
      position: "23rd",
    },
    {
      season: "2014",
      series: wikiLink("Macau Grand Prix", "https://en.wikipedia.org/wiki/2014_Macau_Grand_Prix"),
      team: wikiLink("Theodore Racing by Prema", "https://en.wikipedia.org/wiki/Theodore_Racing"),
      races: 2,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: "N/A",
      position: "DNF",
    },
    {
      season: "2015",
      series: wikiLink("GP3 Series", "https://en.wikipedia.org/wiki/2015_GP3_Series"),
      team: wikiLink("ART Grand Prix", "https://en.wikipedia.org/wiki/ART_Grand_Prix"),
      races: 18,
      wins: 1,
      poles: 3,
      fastestLaps: 5,
      podiums: 14,
      points: 253,
      position: "1st",
    },
    {
      season: "2016",
      series: wikiLink("Deutsche Tourenwagen Masters", "https://en.wikipedia.org/wiki/2016_Deutsche_Tourenwagen_Masters"),
      team: wikiLink("Mercedes-Benz DTM Team ART", "https://en.wikipedia.org/wiki/ART_Grand_Prix"),
      races: 10,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 2,
      position: "26th",
    },
    {
      season: "2016",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2016_FIA_Formula_One_World_Championship"),
      team: wikiLink("Manor Racing MRT", "https://en.wikipedia.org/wiki/Manor_Racing_MRT"),
      races: 9,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 0,
      position: "23rd",
    },
    {
      season: "2017",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2017_FIA_Formula_One_World_Championship"),
      team: wikiLink("Sahara Force India F1 Team", "https://en.wikipedia.org/wiki/Sahara_Force_India_F1_Team"),
      races: 20,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 87,
      position: "8th",
    },
    {
      season: "2018",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2018_FIA_Formula_One_World_Championship"),
      team: wikiLink("Sahara Force India / Racing Point", "https://en.wikipedia.org/wiki/Racing_Point_Force_India_F1_Team"),
      races: 21,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 49,
      position: "12th",
    },
    {
      season: "2019",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2019_Formula_One_World_Championship"),
      team: wikiLink("Mercedes-AMG Petronas Motorsport", "https://en.wikipedia.org/wiki/Mercedes-AMG_Petronas_Formula_One_Team"),
      races: 0,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: "—",
      position: "Reserve driver",
    },
    {
      season: "2020",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2020_Formula_One_World_Championship"),
      team: wikiLink("Renault DP World F1 Team", "https://en.wikipedia.org/wiki/Renault_DP_World_F1_Team"),
      races: 17,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 1,
      points: 62,
      position: "12th",
    },
    {
      season: "2021",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2021_Formula_One_World_Championship"),
      team: wikiLink("Alpine F1 Team", "https://en.wikipedia.org/wiki/Alpine_F1_Team"),
      races: 22,
      wins: 1,
      poles: 0,
      fastestLaps: 0,
      podiums: 1,
      points: 74,
      position: "11th",
    },
    {
      season: "2022",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2022_Formula_One_World_Championship"),
      team: wikiLink("BWT Alpine F1 Team", "https://en.wikipedia.org/wiki/BWT_Alpine_F1_Team"),
      races: 22,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 92,
      position: "8th",
    },
    {
      season: "2023",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2023_Formula_One_World_Championship"),
      team: wikiLink("BWT Alpine F1 Team", "https://en.wikipedia.org/wiki/BWT_Alpine_F1_Team"),
      races: 22,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 1,
      points: 58,
      position: "12th",
    },
    {
      season: "2024",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship"),
      team: wikiLink("BWT Alpine F1 Team", "https://en.wikipedia.org/wiki/BWT_Alpine_F1_Team"),
      races: 24,
      wins: 0,
      poles: 0,
      fastestLaps: 1,
      podiums: 1,
      points: 23,
      position: "14th",
    },
    {
      season: "2025",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship"),
      team: wikiLink("MoneyGram Haas F1 Team", "https://en.wikipedia.org/wiki/Haas_F1_Team"),
      races: 4,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: "14*",
      position: "9th*",
    },
  ],
  legend: [
    "* Season still in progress.",
  ],
};

export default racingCareerSummary;