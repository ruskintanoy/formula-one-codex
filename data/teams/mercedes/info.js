const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

export default {
  base: <>
    {wikiLink("Brackley, United Kingdom", "https://en.wikipedia.org/wiki/Brackley")}
  </>,

  principal: <>
    {wikiLink("Toto Wolff", "https://en.wikipedia.org/wiki/Toto_Wolff")}
  </>,

  technicalDirector: <>
    {wikiLink("James Allison", "https://en.wikipedia.org/wiki/James_Allison_(Formula_One)")}
  </>,

  website: "https://www.mercedesamgf1.com/",

  raceDrivers: [
    { id: "antonelli", name: "Andrea Kimi Antonelli", nationality: "Italian"},
    { id: "russell", name: "George Russell", nationality: "Great Britain"}
  ],

  testDrivers: [
    { name: wikiLink("Valtteri Bottas", "https://en.wikipedia.org/wiki/Valtteri_Bottas"), nationality: "Finland" },
    { name: wikiLink("Frederik Vesti", "https://en.wikipedia.org/wiki/Frederik_Vesti"), nationality: "Denmark" }
  ],

  chassis: wikiLink("F1 W16", "https://en.wikipedia.org/wiki/Mercedes_W16"),
  engine: wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes_AMG_High_Performance_Powertrains"),
  tyres: wikiLink("Pirelli", "https://en.wikipedia.org/wiki/Pirelli"),

  careerStats: {
    firstRace: wikiLink("1954 French Grand Prix", "https://en.wikipedia.org/wiki/1954_French_Grand_Prix"),
    racesEntered: 322,
    engines: wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes_AMG_High_Performance_Powertrains"),
    constructorsChampionships: 8,
    driversChampionships: 9,
    raceVictories: 129,
    podiums: 301,
    points: "7783.5",
    poles: 141,
    fastestLaps: 110
  }
};
