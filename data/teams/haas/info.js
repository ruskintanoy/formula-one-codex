const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

export default {
  base: <>
    {wikiLink("Kannapolis, North Carolina, U.S.", "https://en.wikipedia.org/wiki/Kannapolis,_North_Carolina")}
  </>,

  principal: <>
    {wikiLink("Ayao Komatsu", "https://en.wikipedia.org/wiki/Ayao_Komatsu")}
  </>,

  technicalDirector: <>
    {wikiLink("Andrea De Zordo", "https://en.wikipedia.org/wiki/Andrea_De_Zordo")}
  </>,

  website: "https://www.haasf1team.com/",

  raceDrivers: [
    { id: "ocon", name: "Esteban Ocon", nationality: "France",},
    { id: "bearman", name: "Oliver Bearman", nationality: "Great Britain",}
  ],

  testDrivers: [
    { name: wikiLink("Ryō Hirakawa", "https://en.wikipedia.org/wiki/Ry%C5%8D_Hirakawa"), nationality: "Japan" }
  ],

  chassis: wikiLink("VF-25", "https://en.wikipedia.org/wiki/Haas_VF-25"),
  engine: wikiLink("Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari"),
  tyres: wikiLink("Pirelli", "https://en.wikipedia.org/wiki/Pirelli"),

  careerStats: {
    firstRace: wikiLink("2016 Australian Grand Prix", "https://en.wikipedia.org/wiki/2016_Australian_Grand_Prix"),
    racesEntered: 195,
    engines: wikiLink("Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari"),
    constructorsChampionships: 0,
    driversChampionships: 0,
    raceVictories: 0,
    podiums: 0,
    points: 327,
    poles: 1,
    fastestLaps: 3
  }
};
