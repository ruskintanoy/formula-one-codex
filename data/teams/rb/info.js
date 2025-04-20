const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

export default {
  base: <>
    {wikiLink("Faenza, Italy", "https://en.wikipedia.org/wiki/Faenza")}
  </>,

  principal: <>
    {wikiLink("Laurent Mekies", "https://en.wikipedia.org/wiki/Laurent_Mekies")}
  </>,

  technicalDirector: <>
    {wikiLink("Tim Goss", "https://en.wikipedia.org/wiki/Tim_Goss")}
  </>,

  website: "https://visacashapprb.com",

  raceDrivers: [
    { id: "lawson", name: "Liam Lawson", nationality: "New Zealander",},
    { id: "hadjar", name: "Isack Hadjar", nationality: "France",},

  ],

  testDrivers: [
    { name: wikiLink("Ayumu Iwasa", "https://en.wikipedia.org/wiki/Ayumu_Iwasa"), nationality: "Japan" }
  ],

  chassis: wikiLink("VCARB 02", "https://en.wikipedia.org/wiki/Racing_Bulls_VCARB_02"),
  engine: wikiLink("Honda RBPT", "https://en.wikipedia.org/wiki/Honda_RBPT"),
  tyres: wikiLink("Pirelli", "https://en.wikipedia.org/wiki/Pirelli"),

  careerStats: {
    firstRace: wikiLink("2024 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2024_Bahrain_Grand_Prix"),
    racesEntered: 29,
    engines: wikiLink("Honda RBPT", "https://en.wikipedia.org/wiki/Honda_RBPT"),
    constructorsChampionships: 0,
    driversChampionships: 0,
    raceVictories: 0,
    podiums: 0,
    points: 53,
    poles: 0,
    fastestLaps: 1
  }
};
