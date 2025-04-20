const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

export default {
  base: <>
    {wikiLink("Milton Keynes, United Kingdom", "https://en.wikipedia.org/wiki/Milton_Keynes")}
  </>,

  principal: <>
    {wikiLink("Christian Horner", "https://en.wikipedia.org/wiki/Christian_Horner")}
  </>,

  technicalDirector: <>
    {wikiLink("Pierre Waché", "https://en.wikipedia.org/wiki/Pierre_Wach%C3%A9")}
  </>,

  website: "https://redbullracing.com",

  raceDrivers: [
    { id: "verstappen", name: "Max Verstappen", nationality: "Netherlands",},
    { id: "tsunoda", name: "Yuki Tsunoda", nationality: "Japan",},
    { id: "lawson", name: "Liam Lawson", nationality: "New Zealander",}
  ],

  testDrivers: [
    { name: wikiLink("Ayumu Iwasa", "https://en.wikipedia.org/wiki/Ayumu_Iwasa"), nationality: "Japan" }
  ],

  chassis: wikiLink("RB21", "https://en.wikipedia.org/wiki/Red_Bull_Racing_RB21"),
  engine: wikiLink("Honda RBPT", "https://en.wikipedia.org/wiki/Honda_RBPT"),
  tyres: wikiLink("Pirelli", "https://en.wikipedia.org/wiki/Pirelli"),

  careerStats: {
    firstRace: wikiLink("2005 Australian Grand Prix", "https://en.wikipedia.org/wiki/2005_Australian_Grand_Prix"),
    racesEntered: 399,
    engines: <>
      {wikiLink("Cosworth", "https://en.wikipedia.org/wiki/Cosworth")},{" "}
      {wikiLink("Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")},{" "}
      {wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_in_Formula_One")},{" "}
      {wikiLink("TAG Heuer", "https://en.wikipedia.org/wiki/TAG_Heuer")},{" "}
      {wikiLink("Honda", "https://en.wikipedia.org/wiki/Honda_in_Formula_One")},{" "}
      {wikiLink("RBPT", "https://en.wikipedia.org/wiki/Red_Bull_Powertrains")}
    </>,
    constructorsChampionships: 6,
    driversChampionships: 8,
    raceVictories: 123,
    podiums: 284,
    points: 7908,
    poles: 105,
    fastestLaps: 99
  }
};
