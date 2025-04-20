const wikiLink = (text, url) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
      {text}
    </a>
  );
  
  export default {
    base: <>
      {wikiLink("Enstone", "https://en.wikipedia.org/wiki/Enstone")}, Oxfordshire, England (Chassis);{" "}
      {wikiLink("Viry-Châtillon", "https://en.wikipedia.org/wiki/Viry-Ch%C3%A2tillon")}, France (Engine)
    </>,
  
    principal: <>
      {wikiLink("Oliver Oakes", "https://en.wikipedia.org/wiki/Oliver_Oakes")}
    </>,
  
    technicalDirector: <>
      {wikiLink("David Sanchez", "https://en.wikipedia.org/wiki/David_Sanchez_(engineer)")} (Executive TD),{" "}
      Joe Burnell (Engineering),{" "}
      David Wheater (Aero),{" "}
      {wikiLink("Ciaron Pilbeam", "https://en.wikipedia.org/wiki/Ciaron_Pilbeam")} (Performance),{" "}
      Eric Meignan (Power Unit)
    </>,
  
    founder: wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_in_Formula_One"),
  
    website: "https://www.alpinef1.com/",
  
    raceDrivers: [
      { id: "gasly", name: "Pierre Gasly" },
      { id: "doohan", name: "Jack Doohan" }
    ],
  
    testDrivers: [
      wikiLink("Franco Colapinto", "https://en.wikipedia.org/wiki/Franco_Colapinto"),
      wikiLink("Paul Aron", "https://en.wikipedia.org/wiki/Paul_Aron"),
      wikiLink("Kush Maini", "https://en.wikipedia.org/wiki/Kush_Maini"),
      wikiLink("Ryō Hirakawa", "https://en.wikipedia.org/wiki/Ry%C5%8D_Hirakawa")
    ],
  
    chassis: wikiLink("A525", "https://en.wikipedia.org/wiki/Alpine_A525"),
    engine: wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_in_Formula_One"),
    tyres: wikiLink("Pirelli", "https://en.wikipedia.org/wiki/Pirelli"),
  
    careerStats: {
      firstRace: wikiLink("2021 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2021_Bahrain_Grand_Prix"),
      racesEntered: 95,
      engines: wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_in_Formula_One"),
      constructorsChampionships: 0,
      driversChampionships: 0,
      raceVictories: 1,
      podiums: 6,
      points: 519,
      poles: 0,
      fastestLaps: 1
    }
  };
  