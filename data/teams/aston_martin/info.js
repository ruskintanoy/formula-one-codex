const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

export default {
  base: <>
    {wikiLink("Silverstone, United Kingdom", "https://en.wikipedia.org/wiki/Silverstone")},
  </>,

  principal: <>
    {wikiLink("Andy Cowell", "https://en.wikipedia.org/wiki/Andy_Cowell")}
  </>,

  technicalDirector: <>
    {wikiLink("Enrico Cardile", "https://en.wikipedia.org/wiki/Enrico_Cardile")}
  </>,

  website: "https://www.astonmartinf1.com/",

  raceDrivers: [
    { id: "alonso", name: "Fernando Alonso", nationality: "Spain", number: 14 },
    { id: "stroll", name: "Lance Stroll", nationality: "Canada", number: 18 }
  ],

  testDrivers: [
    { name: wikiLink("Felipe Drugovich", "https://en.wikipedia.org/wiki/Felipe_Drugovich"), nationality: "Brazil" },
    { name: wikiLink("Jak Crawford", "https://en.wikipedia.org/wiki/Jak_Crawford"), nationality: "United States" },
    { name: wikiLink("Stoffel Vandoorne", "https://en.wikipedia.org/wiki/Stoffel_Vandoorne"), nationality: "Belgium" }
  ],

  chassis: wikiLink("AMR25", "https://en.wikipedia.org/wiki/Aston_Martin_AMR25"),
  engine: wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes_AMG_High_Performance_Powertrains"),
  tyres: wikiLink("Pirelli", "https://en.wikipedia.org/wiki/Pirelli"),

  careerStats: {
    firstRace: wikiLink("1959 Dutch Grand Prix", "https://en.wikipedia.org/wiki/1959_Dutch_Grand_Prix"),
    racesEntered: 101,
    engines: <>Aston Martin, {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes_AMG_High_Performance_Powertrains")}</>,
    constructorsChampionships: 0,
    driversChampionships: 0,
    raceVictories: 0,
    podiums: 9,
    points: 516,
    poles: 0,
    fastestLaps: 3
  }
};
