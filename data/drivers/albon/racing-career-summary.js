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
      team: wikiLink("EPIC Racing", "https://en.wikipedia.org/wiki/EPIC_Racing"),
      races: 14,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 0,
      position: "38th",
    },
    {
      season: "2012",
      series: wikiLink("Formula Renault 2.0 Alps", "https://en.wikipedia.org/wiki/2012_Formula_Renault_2.0_Alps_season"),
      team: wikiLink("EPIC Racing", "https://en.wikipedia.org/wiki/EPIC_Racing"),
      races: 14,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 26,
      position: "16th",
    },
    {
      season: "2013",
      series: wikiLink("Eurocup Formula Renault 2.0", "https://en.wikipedia.org/wiki/2013_Eurocup_Formula_Renault_2.0"),
      team: wikiLink("KTR", "https://en.wikipedia.org/wiki/Keerbergs_Transport_Racing"),
      races: 14,
      wins: 0,
      poles: 1,
      fastestLaps: 1,
      podiums: 0,
      points: 22,
      position: "16th",
    },
    {
      season: "2013",
      series: wikiLink("Formula Renault 2.0 NEC", "https://en.wikipedia.org/wiki/2013_Formula_Renault_2.0_Northern_European_Cup"),
      team: wikiLink("KTR", "https://en.wikipedia.org/wiki/Keerbergs_Transport_Racing"),
      races: 6,
      wins: 0,
      poles: 0,
      fastestLaps: 1,
      podiums: 1,
      points: 61,
      position: "22nd",
    },
    {
      season: "2014",
      series: wikiLink("Eurocup Formula Renault 2.0", "https://en.wikipedia.org/wiki/2014_Eurocup_Formula_Renault_2.0"),
      team: wikiLink("KTR", "https://en.wikipedia.org/wiki/Keerbergs_Transport_Racing"),
      races: 14,
      wins: 0,
      poles: 1,
      fastestLaps: 0,
      podiums: 3,
      points: 117,
      position: "3rd",
    },
    {
      season: "2014",
      series: wikiLink("Formula Renault 2.0 NEC", "https://en.wikipedia.org/wiki/2014_Formula_Renault_2.0_Northern_European_Cup"),
      team: wikiLink("KTR", "https://en.wikipedia.org/wiki/Keerbergs_Transport_Racing"),
      races: 6,
      wins: 1,
      poles: 0,
      fastestLaps: 1,
      podiums: 2,
      points: 80,
      position: "17th",
    },
    {
      season: "2015",
      series: wikiLink("FIA Formula 3 European Championship", "https://en.wikipedia.org/wiki/2015_FIA_Formula_3_European_Championship"),
      team: wikiLink("Signature", "https://en.wikipedia.org/wiki/Signature_Team"),
      races: 33,
      wins: 0,
      poles: 2,
      fastestLaps: 1,
      podiums: 5,
      points: 187,
      position: "7th",
    },
    {
      season: "2015",
      series: wikiLink("Macau Grand Prix", "https://en.wikipedia.org/wiki/2015_Macau_Grand_Prix"),
      team: wikiLink("Signature", "https://en.wikipedia.org/wiki/Signature_Team"),
      races: 1,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: "N/A",
      position: "13th",
    },
    {
      season: "2016",
      series: wikiLink("GP3 Series", "https://en.wikipedia.org/wiki/2016_GP3_Series"),
      team: wikiLink("ART Grand Prix", "https://en.wikipedia.org/wiki/ART_Grand_Prix"),
      races: 18,
      wins: 4,
      poles: 3,
      fastestLaps: 3,
      podiums: 7,
      points: 177,
      position: "2nd",
    },
    {
      season: "2016",
      series: wikiLink("Masters of Formula 3", "https://en.wikipedia.org/wiki/2016_Masters_of_Formula_3"),
      team: wikiLink("Hitech GP", "https://en.wikipedia.org/wiki/Hitech_Racing"),
      races: 1,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: "N/A",
      position: "5th",
    },
    {
      season: "2017",
      series: wikiLink("FIA Formula 2 Championship", "https://en.wikipedia.org/wiki/2017_FIA_Formula_2_Championship"),
      team: wikiLink("ART Grand Prix", "https://en.wikipedia.org/wiki/ART_Grand_Prix"),
      races: 20,
      wins: 0,
      poles: 1,
      fastestLaps: 1,
      podiums: 2,
      points: 86,
      position: "10th",
    },
    {
      season: "2018",
      series: wikiLink("FIA Formula 2 Championship", "https://en.wikipedia.org/wiki/2018_FIA_Formula_2_Championship"),
      team: wikiLink("DAMS", "https://en.wikipedia.org/wiki/DAMS"),
      races: 24,
      wins: 4,
      poles: 3,
      fastestLaps: 0,
      podiums: 8,
      points: 212,
      position: "3rd",
    },
    {
      season: "2019",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2019_Formula_One_World_Championship"),
      team: wikiLink("Red Bull Toro Rosso Honda", "https://en.wikipedia.org/wiki/Scuderia_Toro_Rosso"),
      races: 12,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 92,
      position: "8th",
    },
    {
      season: "2019",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2019_Formula_One_World_Championship"),
      team: wikiLink("Aston Martin Red Bull Racing", "https://en.wikipedia.org/wiki/Red_Bull_Racing"),
      races: 9,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: "—",
      position: "—",
    },
    {
      season: "2020",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2020_Formula_One_World_Championship"),
      team: wikiLink("Aston Martin Red Bull Racing", "https://en.wikipedia.org/wiki/Red_Bull_Racing"),
      races: 17,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 2,
      points: 105,
      position: "7th",
    },
    {
      season: "2021",
      series: wikiLink("Deutsche Tourenwagen Masters", "https://en.wikipedia.org/wiki/2021_Deutsche_Tourenwagen_Masters"),
      team: <>
        {wikiLink("AlphaTauri", "https://en.wikipedia.org/wiki/AlphaTauri_(fashion_brand)")} /{" "}
        {wikiLink("AF Corse", "https://en.wikipedia.org/wiki/AF_Corse")}
      </>,
      races: 14,
      wins: 1,
      poles: 1,
      fastestLaps: 3,
      podiums: 4,
      points: 130,
      position: "6th",
    },
    {
      season: "2021",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2021_Formula_One_World_Championship"),
      team: <>
        {wikiLink("Red Bull Racing Honda", "https://en.wikipedia.org/wiki/Red_Bull_Racing")} /{" "}
        {wikiLink("Scuderia AlphaTauri", "https://en.wikipedia.org/wiki/Scuderia_AlphaTauri")}
      </>,
      races: "—",
      wins: "—",
      poles: "—",
      fastestLaps: "—",
      podiums: "—",
      points: "—",
      position: "Test/Reserve driver",
    },
    {
      season: "2022",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2022_Formula_One_World_Championship"),
      team: wikiLink("Williams Racing", "https://en.wikipedia.org/wiki/Williams_Racing"),
      races: 22,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 4,
      position: "19th",
    },
    {
      season: "2023",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2023_Formula_One_World_Championship"),
      team: wikiLink("Williams Racing", "https://en.wikipedia.org/wiki/Williams_Racing"),
      races: 22,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 27,
      position: "13th",
    },
    {
      season: "2024",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship"),
      team: wikiLink("Williams Racing", "https://en.wikipedia.org/wiki/Williams_Racing"),
      races: 24,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 12,
      position: "16th",
    },
    {
      season: "2025",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship"),
      team: wikiLink("Atlassian Williams Racing", "https://en.wikipedia.org/wiki/Williams_Racing"),
      races: 4,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: "18*",
      position: "8th*",
    },
  ],
  legend: [
    "* Season still in progress."
  ],
};

export default racingCareerSummary;
