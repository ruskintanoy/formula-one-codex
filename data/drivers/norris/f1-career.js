const wikiLink = (text, url) => (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="text-red-500 hover:underline"
    >
      {text}
    </a>
  );
  
  const f1Career = (
    <>
      {/* McLaren Driver Development Programme */}
      <h3 className="text-2xl font-bold text-red-600 mb-2">
        McLaren Driver Development Programme
      </h3>
      <p>
        In February 2017, Norris joined the {wikiLink("McLaren Driver Development Programme", "https://en.wikipedia.org/wiki/McLaren")}. Following the announcement, Zak Brown said that Norris was "a fabulous prospect" who deserved the award. 
        Later that year, Norris tested for McLaren in a scheduled mid-season test. He set the second fastest lap in the second day of testing at the Hungaroring. In late 2017, Norris became the official McLaren test and reserve driver for the 2018 season. 
        Norris participated in his first official practice session at the Belgian Grand Prix, recording 26 laps. Norris drove in six further practice sessions during the year.
      </p>
  
      {/* McLaren (2019-Present) */}
      <h3 className="text-2xl font-bold text-red-600 mt-6 mb-2">
        McLaren (2019–present)
      </h3>
  
      {/* 2019: Rookie season */}
      <h4 className="text-lg font-semibold text-red-400 mb-1">
        2019: Rookie season
      </h4>
      <p>
        Norris was contracted to drive for McLaren for the {wikiLink("2019 Formula One World Championship", "https://en.wikipedia.org/wiki/2019_Formula_One_World_Championship")}, partnering {wikiLink("Carlos Sainz Jr.", "https://en.wikipedia.org/wiki/Carlos_Sainz_Jr.")}. 
        He qualified eighth on his debut at the Australian Grand Prix and finished the race in twelfth place. He scored his first Formula One points by finishing sixth at the following race, the Bahrain Grand Prix. 
        The Chinese Grand Prix was the first of Norris' retirements that season, after damage from a first lap collision with Daniil Kvyat caused him to retire later in the race. Further retirements came at the Spanish Grand Prix after a collision with Lance Stroll and at the Canadian Grand Prix when a brake fire caused his suspension to fail.
      </p>
  
      {/* 2020: Maiden Podium */}
      <h3 className="text-2xl font-bold text-red-600 mt-6 mb-2">2020: Maiden Podium</h3>

      <p>
        At the season-opening {wikiLink("Austrian Grand Prix", "https://en.wikipedia.org/wiki/2020_Austrian_Grand_Prix")}, Norris qualified in fourth place but was elevated to third after a grid penalty for Lewis Hamilton. In the closing stages of the race, Hamilton was issued a five-second penalty for causing a collision with Alex Albon. Norris set the fastest lap of the race on the final lap to finish just within the five-second window, claiming his maiden Formula One podium.
      </p>

      <p>
        Norris continued to impress throughout the season, securing consistent points finishes and earning praise for his racecraft. His highlight was a fifth-place finish at the {wikiLink("Styrian Grand Prix", "https://en.wikipedia.org/wiki/2020_Styrian_Grand_Prix")}, where he overtook multiple cars in the final laps. Norris ended the season ninth in the Drivers' Championship with 97 points.
      </p>

      {/* 2021: Maiden Pole Position */}
      <h3 className="text-2xl font-bold text-red-600 mt-6 mb-2">2021: Maiden Pole Position</h3>

      <p>
        Norris remained at McLaren alongside new teammate Daniel Ricciardo. The season saw Norris achieve his maiden pole position at the {wikiLink("Russian Grand Prix", "https://en.wikipedia.org/wiki/2021_Russian_Grand_Prix")}, leading much of the race before late-race rain and strategic calls saw him finish seventh.
      </p>

      <p>
        During the season, Norris secured multiple podiums, including at the {wikiLink("Emilia Romagna Grand Prix", "https://en.wikipedia.org/wiki/2021_Emilia_Romagna_Grand_Prix")}, {wikiLink("Monaco Grand Prix", "https://en.wikipedia.org/wiki/2021_Monaco_Grand_Prix")}, and {wikiLink("Austrian Grand Prix", "https://en.wikipedia.org/wiki/2021_Austrian_Grand_Prix")}. He finished the season sixth in the Drivers' Championship with 160 points.
      </p>

      <div className="clear-both"></div>

      {/* 2022 Season */}
      <h3 className="text-2xl font-bold text-red-600 mt-6 mb-2">2022 Season</h3>

      <p>
        Norris signed a contract extension with McLaren until at least the end of 2025. The 2022 season saw Norris secure McLaren's only podium of the year with a third-place finish at the {wikiLink("Emilia Romagna Grand Prix", "https://en.wikipedia.org/wiki/2022_Emilia_Romagna_Grand_Prix")}. Despite challenges, Norris consistently outperformed teammate Ricciardo, finishing seventh in the Drivers' Championship with 122 points.
      </p>

      <div className="clear-both"></div>

    </>
  );
  
  export default f1Career;
  