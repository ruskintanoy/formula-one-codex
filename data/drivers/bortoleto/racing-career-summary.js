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
      season: "2020",
      series: wikiLink("Italian F4 Championship", "https://en.wikipedia.org/wiki/2020_Italian_F4_Championship"),
      team: wikiLink("Prema Powerteam", "https://en.wikipedia.org/wiki/Prema_Powerteam"),
      races: 20,
      wins: 1,
      poles: 4,
      fastestLaps: 1,
      podiums: 5,
      points: 157,
      position: "5th",
    },
    {
      season: "2021",
      series: wikiLink("Formula Regional European Championship", "https://en.wikipedia.org/wiki/2021_Formula_Regional_European_Championship"),
      team: wikiLink("FA Racing by MP", "https://en.wikipedia.org/wiki/Fernando_Alonso"),
      races: 20,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 1,
      points: 44,
      position: "15th",
    },
    {
      season: "2021",
      series: wikiLink("Stock Car Light Brasil", "https://en.wikipedia.org/wiki/Stock_Car_Light"),
      team: wikiLink("KTF Racing", "https://en.wikipedia.org/wiki/KTF_Racing"),
      races: 4,
      wins: 1,
      poles: 1,
      fastestLaps: 0,
      podiums: 1,
      points: 60,
      position: "13th",
    },
    {
      season: "2022",
      series: wikiLink("Formula Regional Asian Championship", "https://en.wikipedia.org/wiki/2022_Formula_Regional_Asian_Championship"),
      team: wikiLink("3Y by R-ace GP", "https://en.wikipedia.org/wiki/R-ace_GP"),
      races: 6,
      wins: 1,
      poles: 0,
      fastestLaps: 0,
      podiums: 1,
      points: 44,
      position: "15th",
    },
    {
      season: "2022",
      series: wikiLink("Formula Regional European Championship", "https://en.wikipedia.org/wiki/2022_Formula_Regional_European_Championship"),
      team: wikiLink("R-ace GP", "https://en.wikipedia.org/wiki/R-ace_GP"),
      races: 20,
      wins: 2,
      poles: 2,
      fastestLaps: 1,
      podiums: 5,
      points: 176,
      position: "6th",
    },
    {
      season: "2022",
      series: wikiLink("Stock Car Brasil", "https://en.wikipedia.org/wiki/2022_Stock_Car_Pro_Series"),
      team: wikiLink("KTF Sports", "https://en.wikipedia.org/wiki/KTF_Sports"),
      races: 1,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 0,
      position: "NC†",
    },
    {
      season: "2023",
      series: wikiLink("FIA Formula 3 Championship", "https://en.wikipedia.org/wiki/2023_FIA_Formula_3_Championship"),
      team: wikiLink("Trident", "https://en.wikipedia.org/wiki/Trident_Racing"),
      races: 18,
      wins: 2,
      poles: 1,
      fastestLaps: 3,
      podiums: 6,
      points: 164,
      position: "1st",
    },
    {
      season: "2024",
      series: wikiLink("FIA Formula 2 Championship", "https://en.wikipedia.org/wiki/2024_Formula_2_Championship"),
      team: wikiLink("Invicta Racing", "https://en.wikipedia.org/wiki/Invicta_Racing"),
      races: 28,
      wins: 2,
      poles: 2,
      fastestLaps: 2,
      podiums: 8,
      points: 214.5,
      position: "1st",
    },
    {
      season: "2025",
      series: wikiLink("Formula One", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship"),
      team: wikiLink("Stake F1 Team Kick Sauber", "https://en.wikipedia.org/wiki/Stake_F1_Team_Kick_Sauber"),
      races: 4,
      wins: 0,
      poles: 0,
      fastestLaps: 0,
      podiums: 0,
      points: 0,
      position: "20th*",
    },
  ],
  legend: [
    "† As Bortoleto was a guest driver, he was ineligible for points.",
    "* Season still in progress.",
  ],
};

export default racingCareerSummary;