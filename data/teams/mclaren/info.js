const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

export default {
  base: <>
    {wikiLink("Woking, United Kingdom", "https://en.wikipedia.org/wiki/Woking")}
  </>,

  principal: <>
    {wikiLink("Andrea Stella", "https://en.wikipedia.org/wiki/Andrea_Stella_(engineer)")}
  </>,

  technicalDirector: <>
    Neil Houldey and Peter Prodromou
  </>,

  founder: wikiLink("Bruce McLaren", "https://en.wikipedia.org/wiki/Bruce_McLaren"),

  website: "https://www.mclaren.com/racing/formula-1/",

  raceDrivers: [
    { id: "norris", name: "Lando Norris", nationality: "Great Britain"},
    { id: "piastri", name: "Oscar Piastri", nationality: "Australia"}
  ],

  testDrivers: [
    { name: wikiLink("Valtteri Bottas", "https://en.wikipedia.org/wiki/Valtteri_Bottas"), nationality: "Finland" },
    { name: wikiLink("Pato O'Ward", "https://en.wikipedia.org/wiki/Pato_O%27Ward"), nationality: "Mexico" }
  ],

  chassis: wikiLink("MCL39", "https://en.wikipedia.org/wiki/McLaren_MCL39"),
  engine: wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes_AMG_High_Performance_Powertrains"),
  tyres: wikiLink("Pirelli", "https://en.wikipedia.org/wiki/Pirelli"),

  careerStats: {
    firstRace: wikiLink("1966 Monaco Grand Prix", "https://en.wikipedia.org/wiki/1966_Monaco_Grand_Prix"),
    racesEntered: 979,
    engines: <>
      {wikiLink("Ford", "https://en.wikipedia.org/wiki/Ford_Motor_Company")}, {" "}
      {wikiLink("Serenissima", "https://en.wikipedia.org/wiki/Scuderia_Serenissima")}, {" "}
      {wikiLink("BRM", "https://en.wikipedia.org/wiki/British_Racing_Motors")}, {" "}
      {wikiLink("Alfa Romeo", "https://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One")}, {" "}
      {wikiLink("TAG", "https://en.wikipedia.org/wiki/Techniques_d%27Avant_Garde")}, {" "}
      {wikiLink("Honda", "https://en.wikipedia.org/wiki/Honda_in_Formula_One")}, {" "}
      {wikiLink("Peugeot", "https://en.wikipedia.org/wiki/Peugeot")}, {" "}
      {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes_AMG_High_Performance_Powertrains")}, {" "}
      {wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_in_Formula_One")}
    </>,
    constructorsChampionships: 9,
    driversChampionships: 12,
    raceVictories: 192,
    podiums: 531,
    points: 7108.5,
    poles: 167,
    fastestLaps: 174
  }
};
