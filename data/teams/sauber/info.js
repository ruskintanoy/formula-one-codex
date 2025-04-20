const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

export default {
  base: <>
    {wikiLink("Hinwil, Switzerland", "https://en.wikipedia.org/wiki/Hinwil,_Z%C3%BCrich")}
  </>,

  principal: <>
    {wikiLink("Jonathan Wheatley", "https://en.wikipedia.org/wiki/Jonathan_Wheatley")}
  </>,

  technicalDirector: <>
    {wikiLink("James Key", "https://en.wikipedia.org/wiki/James_Key_(Formula_One)")}
  </>,

  website: "https://www.sauber-group.com/",

  raceDrivers: [
    { id: "bortoleto", name: "Gabriel Bortoleto", nationality: "Brazil",},
    { id: "hulkenberg", name: "Nico Hülkenberg", nationality: "Germany",}
  ],

  testDrivers: [
    { name: "N/A",}
  ],

  chassis: wikiLink("C45", "https://en.wikipedia.org/wiki/Kick_Sauber_C45"),
  engine: wikiLink("Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari"),
  tyres: wikiLink("Pirelli", "https://en.wikipedia.org/wiki/Pirelli"),

  careerStats: {
    firstRace: wikiLink("1993 South African Grand Prix", "https://en.wikipedia.org/wiki/1993_South_African_Grand_Prix"),
    racesEntered: 494,
    engines: <>
      {wikiLink("Sauber", "https://en.wikipedia.org/wiki/Ilmor")},&nbsp;
      {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes_AMG_High_Performance_Powertrains")},&nbsp;
      {wikiLink("Ford", "https://en.wikipedia.org/wiki/Ford_Motor_Company")},&nbsp;
      {wikiLink("Petronas", "https://en.wikipedia.org/wiki/Sauber_Petronas_Engineering")},&nbsp;
      {wikiLink("BMW", "https://en.wikipedia.org/wiki/BMW_in_Formula_One")},&nbsp;
      {wikiLink("Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")}
    </>,
    constructorsChampionships: 0,
    driversChampionships: 0,
    raceVictories: 1,
    podiums: 27,
    points: 875,
    poles: 1,
    fastestLaps: 5
  }
};
