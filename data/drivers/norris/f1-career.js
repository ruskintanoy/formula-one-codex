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

      <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="/drivers/norris/car4.jpg"
          alt="Norris racing at Monza during the 2016 Eurocup Formula Renault 2.0 championship"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
         Norris testing for McLaren during free practice at the {wikiLink("2018 Japanese Grand Prix", "https://en.wikipedia.org/wiki/2018_Japanese_Grand_Prix")}
        </figcaption>
      </figure>

      <p>
        In February 2017, Norris joined the {wikiLink("McLaren Driver Development Programme", "https://en.wikipedia.org/wiki/McLaren")}. Following the announcement, Zak Brown said that Norris was "a fabulous prospect" who deserved the award. 
        Later that year, Norris tested for McLaren in a scheduled mid-season test. He set the second fastest lap in the second day of testing at the Hungaroring. In late 2017, Norris became the official McLaren test and reserve driver for the 2018 season. 
        Norris participated in his first official practice session at the Belgian Grand Prix, recording 26 laps. Norris drove in six further practice sessions during the year.
      </p>

      <div className="clear-both"></div>
  
      {/* McLaren (2019-Present) */}
      <h3 className="text-2xl font-bold text-red-600 mt-6 mb-2">
        McLaren (2019–present)
      </h3>
  
      {/* 2019: Rookie season */}
      <h4 className="text-lg font-semibold text-red-400 mb-1">
        2019: Rookie season
      </h4>

      <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="/drivers/norris/car5.jpg"
          alt="Norris racing at Monza during the 2016 Eurocup Formula Renault 2.0 championship"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
         Norris at the {wikiLink("2019 Chinese Grand Prix", "https://en.wikipedia.org/wiki/2019_Chinese_Grand_Prix")}
        </figcaption>
      </figure>

      <p>
        Norris was contracted to drive for McLaren for the {wikiLink("2019 Formula One World Championship", "https://en.wikipedia.org/wiki/2019_Formula_One_World_Championship")}, partnering {wikiLink("Carlos Sainz Jr.", 
        "https://en.wikipedia.org/wiki/Carlos_Sainz_Jr.")}. He qualified eighth on his debut at the Australian Grand Prix and finished the race in twelfth place. He scored his first Formula One points by finishing sixth at the following race, 
        the Bahrain Grand Prix. The Chinese Grand Prix was the first of Norris' retirements that season, after damage from a first lap collision with Daniil Kvyat caused him to retire later in the race. 
        Further retirements came at the Spanish Grand Prix after a collision with Lance Stroll and at the Canadian Grand Prix when a brake fire caused his suspension to fail.
      </p>

      <div className="clear-both"></div>
  
      {/* 2020: Maiden Podium */}
      <h3 className="text-2xl font-bold text-red-600 mt-6 mb-2">2020: Maiden Podium</h3>

      <figure className="float-right mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="/drivers/norris/car6.jpg"
          alt="Norris racing at Monza during the 2016 Eurocup Formula Renault 2.0 championship"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
         Norris at the {wikiLink("2020 Tuscan Grand Prix", "https://en.wikipedia.org/wiki/2020_Tuscan_Grand_Prix")}
        </figcaption>
      </figure>

      <p>
        At the season-opening {wikiLink("Austrian Grand Prix", "https://en.wikipedia.org/wiki/2020_Austrian_Grand_Prix")}, Norris qualified in fourth place but was elevated to third after a grid penalty for Lewis Hamilton. 
        In the closing stages of the race, Hamilton was issued a five-second penalty for causing a collision with Alex Albon. Norris set the fastest lap of the race on the final lap to finish just within the five-second window, claiming his maiden Formula One podium.
      </p>

      <p>
        Norris continued to impress throughout the season, securing consistent points finishes and earning praise for his racecraft. 
        His highlight was a fifth-place finish at the {wikiLink("Styrian Grand Prix", "https://en.wikipedia.org/wiki/2020_Styrian_Grand_Prix")}, where he overtook multiple cars in the final laps. Norris ended the season ninth in the Drivers' Championship with 97 points.
      </p>

      {/* 2021: Maiden Pole Position */}
      <h3 className="text-2xl font-bold text-red-600 mt-6 mb-2">2021: Maiden Pole Position</h3>

      <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="/drivers/norris/car7.jpg"
          alt="Norris racing at Monza during the 2016 Eurocup Formula Renault 2.0 championship"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
         Norris at the {wikiLink("2021 Austrian Grand Prix", "https://en.wikipedia.org/wiki/2021_Austrian_Grand_Prix")}
        </figcaption>
      </figure>

      <p>
        Norris remained at McLaren alongside new teammate Daniel Ricciardo. The season saw Norris achieve his maiden pole position at the {wikiLink("Russian Grand Prix", "https://en.wikipedia.org/wiki/2021_Russian_Grand_Prix")}, 
        leading much of the race before late-race rain and strategic calls saw him finish seventh.
      </p>

      <p>
        During the season, Norris secured multiple podiums, including at the {wikiLink("Emilia Romagna Grand Prix", "https://en.wikipedia.org/wiki/2021_Emilia_Romagna_Grand_Prix")}, 
        {wikiLink("Monaco Grand Prix", "https://en.wikipedia.org/wiki/2021_Monaco_Grand_Prix")}, and {wikiLink("Austrian Grand Prix", "https://en.wikipedia.org/wiki/2021_Austrian_Grand_Prix")}. 
        He finished the season sixth in the Drivers' Championship with 160 points.
      </p>

      <div className="clear-both"></div>

      {/* 2022 Season */}
      <h3 className="text-2xl font-bold text-red-600 mt-6 mb-2">2022 Season</h3>

      <figure className="float-right mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="/drivers/norris/car8.jpg"
          alt="Norris racing at Monza during the 2016 Eurocup Formula Renault 2.0 championship"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
         Norris at the {wikiLink("2022 British Grand Prix", "https://en.wikipedia.org/wiki/2022_British_Grand_Prix")}
        </figcaption>
      </figure>

      <p>
        Norris signed a contract extension with McLaren until at least the end of 2025. The 2022 season saw Norris secure McLaren's only podium of the year with a third-place finish at the {wikiLink("Emilia Romagna Grand Prix", "https://en.wikipedia.org/wiki/2022_Emilia_Romagna_Grand_Prix")}. Despite challenges, Norris consistently outperformed teammate Ricciardo, finishing seventh in the Drivers' Championship with 122 points.
      </p>

      <div className="clear-both"></div>

      {/* 2023 Season */}
      <h3 className="text-2xl font-bold text-red-600 mb-2 mt-6">2023 Season</h3>

      <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="/drivers/norris/car9.jpg"
          alt="Norris racing at Monza during the 2016 Eurocup Formula Renault 2.0 championship"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          Norris racing at the {wikiLink("2023 Austrian Grand Prix", "https://en.wikipedia.org/wiki/2023_Austrian_Grand_Prix")}
        </figcaption>
      </figure>

      <p>
        Norris remained with McLaren for 2023, partnered by rookie {wikiLink("Oscar Piastri", "https://en.wikipedia.org/wiki/Oscar_Piastri")} who replaced Ricciardo. At the first race at Bahrain, both McLaren cars experienced reliability issues. 
        Norris made six pit stops to manage the problem and finished seventeenth and last of the finishing drivers. He was eliminated in the first qualifying session (Q1) for the first time since 2019 at the {wikiLink("Saudi Arabian Grand Prix", 
        "https://en.wikipedia.org/wiki/2023_Saudi_Arabian_Grand_Prix")} after hitting the wall.
      </p>

      <p>
        The Australian Grand Prix saw McLaren score their first points of the season; Piastri finished eighth and Norris improved from thirteenth at the start to sixth at the finish. He qualified third at the Spanish Grand Prix but first-lap contact 
        with {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")} dropped him to the back.
      </p>

      <p>
        McLaren brought upgrades to Norris's MCL60 for the {wikiLink("Austrian Grand Prix", "https://en.wikipedia.org/wiki/2023_Austrian_Grand_Prix")}; team principal Andrea Stella commented that "pretty much the entire car" had been redesigned. 
        Norris qualified fourth for the race, third for the sprint and finished fourth in the race.
      </p>

      <p>
        More success came at the {wikiLink("British Grand Prix", "https://en.wikipedia.org/wiki/2023_British_Grand_Prix")} where Norris and Piastri qualified second and third respectively, a result Norris described as "insane". 
        He passed {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} at the first corner and led the race for four laps before Verstappen regained the place. In the later stages of the race, 
        Norris held off Hamilton to finish second, making him the first McLaren driver to finish on the podium at Silverstone Circuit since Hamilton in 2010.
      </p>

      <p>
        He then qualified third and defended from {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")} to finish second at the {wikiLink("Hungarian Grand Prix", "https://en.wikipedia.org/wiki/2023_Hungarian_Grand_Prix")}, 
        the first consecutive podiums of his Formula One career.
      </p>

      <div className="clear-both"></div>

      {/* 2024 Season - Maiden Win */}
      <h3 className="text-2xl font-bold text-red-600 mb-2 mt-6">2024: Maiden Win and Title Challenge</h3>

      <figure className="float-right mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="/drivers/norris/car10.jpg"
          alt="Norris racing at Monza during the 2016 Eurocup Formula Renault 2.0 championship"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
         Norris at the {wikiLink("2024 Chinese Grand Prix", "https://en.wikipedia.org/wiki/2024_Chinese_Grand_Prix")}
        </figcaption>
      </figure>

      <p>
        Ahead of the 2024 season, Norris signed a new multi-year contract with McLaren. He finished sixth at the first race, the {wikiLink("Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2024_Bahrain_Grand_Prix")}, 
        and took his first podium of the season at the {wikiLink("Australian Grand Prix", "https://en.wikipedia.org/wiki/2024_Australian_Grand_Prix")}, starting and finishing third.
      </p>

      <p>
        At the {wikiLink("Miami Grand Prix", "https://en.wikipedia.org/wiki/2024_Miami_Grand_Prix")}, Norris claimed his maiden Grand Prix victory after 110 races, tying the record for the most podiums before taking a first win. 
        After Miami, Norris achieved five podiums before the summer break at circuits like {wikiLink("Imola", "https://en.wikipedia.org/wiki/Imola_Circuit")}, {wikiLink("Canada", "https://en.wikipedia.org/wiki/Canadian_Grand_Prix")}, 
        and {wikiLink("Spain", "https://en.wikipedia.org/wiki/Spanish_Grand_Prix")}.
      </p>

      <p>
        Following the summer break, Norris claimed victories at the {wikiLink("Dutch Grand Prix", "https://en.wikipedia.org/wiki/2024_Dutch_Grand_Prix")}, {wikiLink("Singapore Grand Prix", "https://en.wikipedia.org/wiki/2024_Singapore_Grand_Prix")}, 
        and secured multiple pole positions, establishing himself as a legitimate title contender.
      </p>

      <div className="clear-both"></div>

      {/* 2025 Season - Title Challenge */}
      <h3 className="text-2xl font-bold text-red-600 mb-2 mt-6">2025 Season: Title Challenge</h3>

      <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="/drivers/norris/car11.jpg"
          alt="Norris racing at Monza during the 2016 Eurocup Formula Renault 2.0 championship"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
         Norris (pictured at the {wikiLink("2025 Japanese Grand Prix", "https://en.wikipedia.org/wiki/2025_Japanese_Grand_Prix")}) and McLaren entered {wikiLink("2025", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")} as title favourites.
        </figcaption>
      </figure>

      <p>
        McLaren entered 2025 as title favourites, with Norris stating he had learned "a lot of lessons" in his bid to become World Drivers' Champion. He took pole for the season-opening {wikiLink("Australian Grand Prix", 
          "https://en.wikipedia.org/wiki/2025_Australian_Grand_Prix")}, defending the lead from teammate Oscar Piastri and Max Verstappen in wet conditions to claim victory and the championship lead.
      </p>

      <p>
        After finishing eighth in the {wikiLink("Chinese Grand Prix", "https://en.wikipedia.org/wiki/2025_Chinese_Grand_Prix")} sprint, he claimed second in the main race behind Piastri. 
        In Japan, he finished second to Verstappen, who reduced his championship lead to a single point.
      </p>

      <div className="clear-both"></div>
  </>
  );
  
  export default f1Career;
  