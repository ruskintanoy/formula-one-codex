const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

export default {
  base: <>
    {wikiLink("Maranello, Italy", "https://en.wikipedia.org/wiki/Maranello")}
  </>,

  principal: <>
    {wikiLink("Frédéric Vasseur", "https://en.wikipedia.org/wiki/Fr%C3%A9d%C3%A9ric_Vasseur")}
  </>,

  technicalDirector: <>
    {wikiLink("Loïc Serra", "https://en.wikipedia.org/wiki/Lo%C3%AFc_Serra")} and {wikiLink("Enrico Gualtieri", "https://en.wikipedia.org/wiki/Enrico_Gualtieri")}
  </>,

  website: "https://www.ferrari.com/formula1",

  raceDrivers: [
    { id: "leclerc", name: "Charles Leclerc", nationality: "Monaco",},
    { id: "hamilton", name: "Lewis Hamilton", nationality: "Great Britain",}
  ],

  testDrivers: [
    { name: wikiLink("Zhou Guanyu", "https://en.wikipedia.org/wiki/Zhou_Guanyu"), nationality: "China" },
    { name: wikiLink("Antonio Giovinazzi", "https://en.wikipedia.org/wiki/Antonio_Giovinazzi"), nationality: "Italian" }
  ],

  chassis: wikiLink("SF-25", "https://en.wikipedia.org/wiki/Ferrari_SF-25"),
  engine: "Ferrari",
  tyres: wikiLink("Pirelli", "https://en.wikipedia.org/wiki/Pirelli"),

  careerStats: {
    firstRace: wikiLink("1950 Monaco Grand Prix", "https://en.wikipedia.org/wiki/1950_Monaco_Grand_Prix"),
    racesEntered: "1105 (1101 starts)",
    engines: "Ferrari",
    constructorsChampionships: 16,
    driversChampionships: 15,
    raceVictories: 247,
    podiums: 824,
    poles: 253,
    fastestLaps: 262
  }
};
