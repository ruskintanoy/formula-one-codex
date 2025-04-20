const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

export default {
  base: <>
    {wikiLink("Grove, United Kingdom", "https://en.wikipedia.org/wiki/Grove,_Oxfordshire")}
  </>,

  principal: <>
    {wikiLink("James Vowles", "https://en.wikipedia.org/wiki/James_Vowles")}
  </>,

  technicalDirector: <>
    {wikiLink("Pat Fry", "https://en.wikipedia.org/wiki/Pat_Fry")}
  </>,

  founder: <>
    {wikiLink("Frank Williams", "https://en.wikipedia.org/wiki/Frank_Williams_(Formula_One)")}, {wikiLink("Patrick Head", "https://en.wikipedia.org/wiki/Patrick_Head")}
  </>,

  website: "https://www.williamsf1.com/",

  raceDrivers: [
    { id: "albon", name: "Alex Albon", nationality: "Thailand",},
    { id: "sainz", name: "Carlos Sainz Jr.", nationality: "Spain",}
  ],

  testDrivers: [
    {name: "N/A"}
  ],

  chassis: wikiLink("FW47", "https://en.wikipedia.org/wiki/Williams_FW47"),
  engine: wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes_AMG_High_Performance_Powertrains"),
  tyres: wikiLink("Pirelli", "https://en.wikipedia.org/wiki/Pirelli"),

  careerStats: {
    firstRace: wikiLink("1977 Spanish Grand Prix", "https://en.wikipedia.org/wiki/1977_Spanish_Grand_Prix"),
    racesEntered: "843 (838 starts)",
    engines: <>
      {wikiLink("Ford", "https://en.wikipedia.org/wiki/Ford_Motor_Company")}, {wikiLink("Honda", "https://en.wikipedia.org/wiki/Honda_in_Formula_One")}, {wikiLink("Judd", "https://en.wikipedia.org/wiki/Judd_(engine)")}, {wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_in_Formula_One")}, {wikiLink("Mecachrome", "https://en.wikipedia.org/wiki/Mecachrome")}, {wikiLink("Supertec", "https://en.wikipedia.org/wiki/Supertec")}, {wikiLink("BMW", "https://en.wikipedia.org/wiki/BMW_in_Formula_One")}, {wikiLink("Cosworth", "https://en.wikipedia.org/wiki/Cosworth")}, {wikiLink("Toyota", "https://en.wikipedia.org/wiki/Toyota_Racing_(Formula_One_team)")}, {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes_AMG_High_Performance_Powertrains")}
    </>,
    constructorsChampionships: 9,
    driversChampionships: 7,
    raceVictories: 114,
    podiums: 313,
    points: "3650 (3656)",
    poles: 128,
    fastestLaps: 133
  }
};