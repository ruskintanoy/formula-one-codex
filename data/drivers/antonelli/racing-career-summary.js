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
      season: "2021",
      series: wikiLink("Italian F4 Championship", "https://en.wikipedia.org/wiki/2021_Italian_F4_Championship"),
      team: wikiLink("Prema Powerteam", "https://en.wikipedia.org/wiki/Prema_Powerteam"),
      races: 9,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 3,
      points: 54,
      position: "10th",
    },
    {
      season: "2021",
      series: wikiLink("FIA Central European Zone Formula 4", "https://en.wikipedia.org/wiki/FIA_Central_European_Zone_Formula_3"),
      team: wikiLink("Prema Powerteam", "https://en.wikipedia.org/wiki/Prema_Powerteam"),
      races: 2,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 18,
      position: "9th",
    },
    {
      season: "2021",
      series: wikiLink("Formula 4 UAE – Trophy Round", "https://en.wikipedia.org/wiki/2022_Formula_4_UAE_Championship"),
      team: wikiLink("Abu Dhabi Racing by Prema", "https://en.wikipedia.org/wiki/Prema_Racing"),
      races: 1,
      wins: 0,
      poles: 1,
      fastestLaps: 0,
      podiums: 1,
      points: "—",
      position: "3rd",
    },
    {
      season: "2022",
      series: wikiLink("Formula 4 UAE Championship", "https://en.wikipedia.org/wiki/2022_Formula_4_UAE_Championship"),
      team: wikiLink("Prema Racing", "https://en.wikipedia.org/wiki/Prema_Racing"),
      races: 8,
      wins: 2,
      poles: 1,
      fastestLaps: 3,
      podiums: 5,
      points: 117,
      position: "8th",
    },
    {
      season: "2022",
      series: wikiLink("Italian F4 Championship", "https://en.wikipedia.org/wiki/2022_Italian_F4_Championship"),
      team: wikiLink("Prema Racing", "https://en.wikipedia.org/wiki/Prema_Racing"),
      races: 20,
      wins: 13,
      poles: 14,
      fastestLaps: 14,
      podiums: 15,
      points: 362,
      position: "1st",
    },
    {
      season: "2022",
      series: wikiLink("ADAC Formula 4 Championship", "https://en.wikipedia.org/wiki/2022_ADAC_Formula_4_Championship"),
      team: wikiLink("Prema Racing", "https://en.wikipedia.org/wiki/Prema_Racing"),
      races: 15,
      wins: 9,
      poles: 7,
      fastestLaps: 8,
      podiums: 12,
      points: 313,
      position: "1st",
    },
    {
      season: "2022",
      series: wikiLink("FIA Motorsport Games Formula 4 Cup", "https://en.wikipedia.org/wiki/2022_FIA_Motorsport_Games_Formula_4_Cup"),
      team: wikiLink("Team Italy", "https://en.wikipedia.org/wiki/Athletes_at_the_2022_FIA_Motorsport_Games#Team_Italy"),
      races: 1,
      wins: 1,
      poles: 1,
      fastestLaps: 1,
      podiums: 1,
      points: "—",
      position: "1st",
    },
    {
      season: "2023",
      series: wikiLink("Formula Regional Middle East Championship", "https://en.wikipedia.org/wiki/2023_Formula_Regional_Middle_East_Championship"),
      team: wikiLink("Mumbai Falcons", "https://en.wikipedia.org/wiki/Mumbai_Falcons_Racing_Limited"),
      races: 15,
      wins: 3,
      poles: 3,
      fastestLaps: 5,
      podiums: 7,
      points: 192,
      position: "1st",
    },
    {
      season: "2023",
      series: wikiLink("Formula Regional European Championship", "https://en.wikipedia.org/wiki/2023_Formula_Regional_European_Championship"),
      team: wikiLink("Prema Racing", "https://en.wikipedia.org/wiki/Prema_Racing"),
      races: 20,
      wins: 5,
      poles: 4,
      fastestLaps: 5,
      podiums: 11,
      points: 300,
      position: "1st",
    },
    {
      season: "2023",
      series: wikiLink("Italian GT Championship – GT3 Pro", "https://en.wikipedia.org/wiki/2023_Italian_GT_Championship"),
      team: wikiLink("AKM Motorsport", "https://en.wikipedia.org/wiki/Marco_Antonelli"),
      races: 2,
      wins: 1,
      poles: 1,
      fastestLaps: 2,
      podiums: 2,
      points: "—",
      position: "NC†",
    },
    {
      season: "2024",
      series: wikiLink("FIA Formula 2 Championship", "https://en.wikipedia.org/wiki/2024_Formula_2_Championship"),
      team: wikiLink("Prema Racing", "https://en.wikipedia.org/wiki/Prema_Racing"),
      races: 26,
      wins: 2,
      poles: 0,
      fastestLaps: 4,
      podiums: 3,
      points: 113,
      position: "6th",
    },
    {
      season: "2024",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship"),
      team: wikiLink("Mercedes-AMG Petronas F1 Team", "https://en.wikipedia.org/wiki/Mercedes-AMG_Petronas_F1_Team"),
      races: "—",
      wins: "—",
      poles: "—",
      fastestLaps: "—",
      podiums: "—",
      points: "—",
      position: "Test driver",
    },
    {
      season: "2025",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship"),
      team: wikiLink("Mercedes-AMG Petronas F1 Team", "https://en.wikipedia.org/wiki/Mercedes-AMG_Petronas_F1_Team"),
      races: 4,
      wins: 0,
      poles: 0,
      fastestLaps: 1,
      podiums: 0,
      points: "30*",
      position: "6th*",
    },
  ],
  legend: [
    "† As Antonelli was a guest driver, he was ineligible for points.",
    "* Season still in progress.",
  ],
};

export default racingCareerSummary;
