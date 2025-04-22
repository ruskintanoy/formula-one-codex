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
  
  const history = (
    <>
        {/* David Brown Corporation (1959–1960) */}
        <section id="aston-martin-1959" className="space-y-4 scroll-mt-24"></section>

        <h3 className="text-2xl font-bold text-red-600 mb-2">David Brown Corporation (1959–1960)</h3>

        <p>
        Aston Martin first entered Formula One with the {wikiLink("DBR4", "https://en.wikipedia.org/wiki/Aston_Martin_DBR4")}, their first open-wheel racing car. The DBR4 was first built and tested in 1957 but did not make its Formula One debut until 1959. This delay was caused by the company prioritising the development of the {wikiLink("DBR1", "https://en.wikipedia.org/wiki/Aston_Martin_DBR1")} sports car, which went on to win the {wikiLink("1959 24 Hours of Le Mans", "https://en.wikipedia.org/wiki/1959_24_Hours_of_Le_Mans")}. By the DBR4's world championship debut at the {wikiLink("1959 Dutch Grand Prix", "https://en.wikipedia.org/wiki/1959_Dutch_Grand_Prix")}, it had become outdated and struggled for pace against its competitors, with {wikiLink("Carroll Shelby", "https://en.wikipedia.org/wiki/Carroll_Shelby")} and {wikiLink("Roy Salvadori", "https://en.wikipedia.org/wiki/Roy_Salvadori")} qualifying 10th and 13th respectively out of 15. Salvadori retired from the race in the early laps with an engine failure, with Shelby's car suffering the same fate later in the race.
        </p>

        <p>
        The team's next entry came at the {wikiLink("1959 British Grand Prix", "https://en.wikipedia.org/wiki/1959_British_Grand_Prix")} where Salvadori surprised by qualifying in 2nd place. Early in the race, one of Shelby's {wikiLink("ignition magneto", "https://en.wikipedia.org/wiki/Ignition_magneto")} failed, harming his car's pace. The second magneto failed late in the race, causing his retirement. Salvadori could only hold on to 6th place, narrowly missing out on a points finish. At the {wikiLink("1959 Portuguese Grand Prix", "https://en.wikipedia.org/wiki/1959_Portuguese_Grand_Prix")}, both cars avoided issues to finish 6th and 8th but still failed to score points. Aston Martin's final entry of the season was the {wikiLink("1959 Italian Grand Prix", "https://en.wikipedia.org/wiki/1959_Italian_Grand_Prix")} where both cars continued to struggle, qualifying only 17th and 19th. During the race, Salvadori had run as high as 7th before suffering an engine failure whilst Shelby came home to finish 10th. The car was significantly outdated by its rivals and failed to score any points.
        </p>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Aston_Martin_DBR4_Mallory_Park.JPG/250px-Aston_Martin_DBR4_Mallory_Park.JPG"
            alt="The Aston Martin DBR4 driven by Roy Salvadori and Carroll Shelby"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            The {wikiLink("Aston Martin DBR4", "https://en.wikipedia.org/wiki/Aston_Martin_DBR4")} driven by {wikiLink("Roy Salvadori", "https://en.wikipedia.org/wiki/Roy_Salvadori")} and {wikiLink("Carroll Shelby", "https://en.wikipedia.org/wiki/Carroll_Shelby")}.
        </figcaption>
        </figure>

        <p>
        Aston Martin built the {wikiLink("DBR5", "https://en.wikipedia.org/wiki/Aston_Martin_DBR5")} to compete in the 1960 season. The DBR5 was based on its predecessor but was lighter and featured an independent suspension. However, the car had a heavy engine in the front and was regularly outclassed by the more commonplace rear-engined cars. The team's first entry of the season came at the {wikiLink("1960 Dutch Grand Prix", "https://en.wikipedia.org/wiki/1960_Dutch_Grand_Prix")}, but the DBR5 was not yet ready to compete. As a result, only Salvadori entered the race, driving the spare DBR4. He could only qualify 18th. Despite being allowed to start the race, Aston Martin were told by the race organisers that they would not be paid. The team, therefore, refused to start the race.
        </p>

        <p>
        The DBR5s were ready for the team's next race in {wikiLink("1960 British Grand Prix", "https://en.wikipedia.org/wiki/1960_British_Grand_Prix")}, with Salvadori and {wikiLink("Maurice Trintignant", "https://en.wikipedia.org/wiki/Maurice_Trintignant")} taking part. Salvadori retired from the race with steering problems, and Trintignant could only finish 11th, five laps behind the leader.
        </p>

        <p>
        Following this string of poor results, with the team failing to score a single championship point, Aston Martin abandoned Formula One entirely after the British Grand Prix to focus on sports car racing.
        </p>

        <div className="clear-both"></div>

        {/* Potential return and sponsorship (2008, 2010, 2016–2020) */}
        <section id="aston-martin-return-sponsorship" className="space-y-4 scroll-mt-24"></section>

        <h3 className="text-2xl font-bold text-red-600 mb-2">Potential return and sponsorship (2008, 2010, 2016–2020)</h3>

        <p>
        In 2006, {wikiLink("David Richards (racing)", "https://en.wikipedia.org/wiki/David_Richards_(racing)")}, who leads the consortium that owns Aston Martin, and his tech firm {wikiLink("Prodrive", "https://en.wikipedia.org/wiki/Prodrive")} were granted a spot as a potential entrant for the {wikiLink("2008 Formula One World Championship", "https://en.wikipedia.org/wiki/2008_Formula_One_season")}. Upon speculation of an Aston Martin F1 return, Richards made it clear that Aston Martin had a long way to go until it was ready for an F1 team. He believed the route to being competitive was to partner with an existing team, rather than setting up a new team with Aston Martin and Prodrive.
        </p>

        <p>
        In 2009, Richards again announced his intent to return to {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} in {wikiLink("2010 Formula One World Championship", "https://en.wikipedia.org/wiki/2010_Formula_One_World_Championship")} with the possibility of using the Aston Martin name, however, this did not come to fruition. Between 2016 and 2020, Aston Martin served as a sponsor for {wikiLink("Red Bull Racing", "https://en.wikipedia.org/wiki/Red_Bull_Racing")}, and as title sponsor of the team between 2018 and 2020.
        </p>

        <div className="clear-both"></div>
        {/* Potential return and sponsorship (2008, 2010, 2016–2020) */}
        <section id="aston-martin-return-sponsorship" className="space-y-4 scroll-mt-24"></section>

        <h3 className="text-2xl font-bold text-red-600 mb-2">Potential return and sponsorship (2008, 2010, 2016–2020)</h3>

        <p>
        In 2006, {wikiLink("David Richards (racing)", "https://en.wikipedia.org/wiki/David_Richards_(racing)")}, who leads the consortium that owns Aston Martin, and his tech firm {wikiLink("Prodrive", "https://en.wikipedia.org/wiki/Prodrive")} were granted a spot as a potential entrant for the {wikiLink("2008 Formula One World Championship", "https://en.wikipedia.org/wiki/2008_Formula_One_season")}. Upon speculation of an Aston Martin F1 return, Richards made it clear that Aston Martin had a long way to go until it was ready for an F1 team. He believed the route to being competitive was to partner with an existing team, rather than setting up a new team with Aston Martin and Prodrive.
        </p>

        <p>
        In 2009, Richards again announced his intent to return to {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} in {wikiLink("2010 Formula One World Championship", "https://en.wikipedia.org/wiki/2010_Formula_One_World_Championship")} with the possibility of using the Aston Martin name, however, this did not come to fruition. Between 2016 and 2020, Aston Martin served as a sponsor for {wikiLink("Red Bull Racing", "https://en.wikipedia.org/wiki/Red_Bull_Racing")}, and as title sponsor of the team between 2018 and 2020.
        </p>

        <div className="clear-both"></div>

        {/* Aston Martin F1 Team (2021–Present) */}
        <section id="aston-martin-2021-present" className="space-y-4 scroll-mt-24"></section>
        <h3 className="text-2xl font-bold text-red-600 mb-2">Aston Martin F1 Team (2021–Present)</h3>

        {/* Customer Mercedes power units (2021–2025) */}
        <h4 className="text-lg font-semibold text-red-400 mb-1">Customer Mercedes power units (2021–2025)</h4>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Sebastian_Vettel%2C_F1_British_Grand_Prix_2021.jpg/250px-Sebastian_Vettel%2C_F1_British_Grand_Prix_2021.jpg"
            alt="The AMR21 during the 2021 British Grand Prix, driven by Sebastian Vettel"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            The AMR21 during the 2021 British Grand Prix, driven by {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")}
        </figcaption>
        </figure>

        <p>
        In January 2020, a funding investment from {wikiLink("Racing Point", "https://en.wikipedia.org/wiki/Racing_Point_F1_Team")} owner {wikiLink("Lawrence Stroll", "https://en.wikipedia.org/wiki/Lawrence_Stroll")} into {wikiLink("Aston Martin", "https://en.wikipedia.org/wiki/Aston_Martin")} saw him take a 16.7% stake in the company. This resulted in the commercial rebranding of {wikiLink("Racing Point UK", "https://en.wikipedia.org/wiki/Racing_Point_UK")}'s {wikiLink("Racing Point F1 Team", "https://en.wikipedia.org/wiki/Racing_Point_F1_Team")} into Aston Martin F1 Team for the {wikiLink("2021 season", "https://en.wikipedia.org/wiki/2021_Formula_One_World_Championship")}. As part of the rebrand, the team switched their racing colour of {wikiLink("BWT", "https://en.wikipedia.org/wiki/BWT_(company)")} pink to a modern iteration of Aston Martin's {wikiLink("British racing green", "https://en.wikipedia.org/wiki/British_racing_green")}. {wikiLink("Cognizant", "https://en.wikipedia.org/wiki/Cognizant")} was also announced as the team's new title sponsor in January 2021. The {wikiLink("Aston Martin AMR21", "https://en.wikipedia.org/wiki/Aston_Martin_AMR21")} was unveiled in March 2021 and became the first Aston Martin-branded Formula One car after a 61-year absence. The team competes with {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes_AMG_High_Performance_Powertrains")} power units, which it has done under its various names since 2009.
        </p>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/FIA_F1_Austria_2022_Nr._5_Vettel_%28side_2%29.jpg/250px-FIA_F1_Austria_2022_Nr._5_Vettel_%28side_2%29.jpg"
            alt="Sebastian Vettel driving the AMR22 during the 2022 Austrian Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} driving the AMR22 during the 2022 Austrian Grand Prix
        </figcaption>
        </figure>

        <p>
        {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")} was under contract to drive for them until 2022, but he was replaced by four-time World Drivers' Champion {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")}, who previously drove at Ferrari, for the 2021 championship. He teamed up with {wikiLink("Lance Stroll", "https://en.wikipedia.org/wiki/Lance_Stroll")}, son of owner {wikiLink("Lawrence Stroll", "https://en.wikipedia.org/wiki/Lawrence_Stroll")} to complete the driver lineup. The team had also signed {wikiLink("Nico Hülkenberg", "https://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg")} as their reserve and development driver.
        </p>

        <p>
        Vettel earned Aston Martin's first podium by finishing second in the {wikiLink("Azerbaijan Grand Prix", "https://en.wikipedia.org/wiki/2021_Azerbaijan_Grand_Prix")}. Vettel finished second again in the {wikiLink("Hungarian Grand Prix", "https://en.wikipedia.org/wiki/2021_Hungarian_Grand_Prix")}, but was disqualified due to a fuel sample issue. In June 2021, Team Principal {wikiLink("Otmar Szafnauer", "https://en.wikipedia.org/wiki/Otmar_Szafnauer")} confirmed that the team will expand its workforce from 535 to 800 employees. In September 2021, Aston Martin confirmed they would compete in 2022 with an unchanged driver lineup. In January 2022, Team Principal {wikiLink("Otmar Szafnauer", "https://en.wikipedia.org/wiki/Otmar_Szafnauer")} left after having spent 12 years with the team. {wikiLink("Mike Krack", "https://en.wikipedia.org/wiki/Mike_Krack")}, who had previously worked on {wikiLink("BMW", "https://en.wikipedia.org/wiki/BMW")} and {wikiLink("Porsche", "https://en.wikipedia.org/wiki/Porsche")}, was announced as his replacement in the same month. In February 2022, {wikiLink("Aramco", "https://en.wikipedia.org/wiki/Saudi_Aramco")} was announced as the team's joint title sponsor after having secured a long-term partnership deal. In December 2023, Aramco signed a new five-year agreement to become an exclusive title sponsor for the team, while Cognizant would remain as a strategic partner.
        </p>

        <p>
        {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")} was under contract to drive for them until 2022, but he was replaced by four-time World Drivers' Champion {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")}, who previously drove at Ferrari, for the 2021 championship. He teamed up with {wikiLink("Lance Stroll", "https://en.wikipedia.org/wiki/Lance_Stroll")}, son of owner {wikiLink("Lawrence Stroll", "https://en.wikipedia.org/wiki/Lawrence_Stroll")} to complete the driver lineup. The team had also signed {wikiLink("Nico Hülkenberg", "https://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg")} as their reserve and development driver.
        </p>

        <p>
        Vettel earned Aston Martin's first podium by finishing second in the {wikiLink("Azerbaijan Grand Prix", "https://en.wikipedia.org/wiki/2021_Azerbaijan_Grand_Prix")}. Vettel finished second again in the {wikiLink("Hungarian Grand Prix", "https://en.wikipedia.org/wiki/2021_Hungarian_Grand_Prix")}, but was disqualified due to a fuel sample issue. In June 2021, Team Principal {wikiLink("Otmar Szafnauer", "https://en.wikipedia.org/wiki/Otmar_Szafnauer")} confirmed that the team will expand its workforce from 535 to 800 employees. In September 2021, Aston Martin confirmed they would compete in 2022 with an unchanged driver lineup. In January 2022, Team Principal {wikiLink("Otmar Szafnauer", "https://en.wikipedia.org/wiki/Otmar_Szafnauer")} left after having spent 12 years with the team. {wikiLink("Mike Krack", "https://en.wikipedia.org/wiki/Mike_Krack")}, who had previously worked on {wikiLink("BMW", "https://en.wikipedia.org/wiki/BMW")} and {wikiLink("Porsche", "https://en.wikipedia.org/wiki/Porsche")}, was announced as his replacement in the same month. In February 2022, {wikiLink("Aramco", "https://en.wikipedia.org/wiki/Saudi_Aramco")} was announced as the team's joint title sponsor after having secured a long-term partnership deal. In December 2023, Aramco signed a new five-year agreement to become an exclusive title sponsor for the team, while Cognizant would remain as a strategic partner.
        </p>

        <p>
        {wikiLink("Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} missed the opening two races of 2022 after testing positive for {wikiLink("COVID-19", "https://en.wikipedia.org/wiki/COVID-19")}. He returned on the third race of the season at the {wikiLink("2022 Australian Grand Prix", "https://en.wikipedia.org/wiki/2022_Australian_Grand_Prix")}. {wikiLink("Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} retired following the conclusion of the {wikiLink("2022 Formula One World Championship", "https://en.wikipedia.org/wiki/2022_Formula_One_World_Championship")}. {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")}, a two-time World Champion, is his replacement for 2023 on a multi-year contract. {wikiLink("Stoffel Vandoorne", "https://en.wikipedia.org/wiki/Stoffel_Vandoorne")} joined the team as their new test and reserve driver, a role he shares with {wikiLink("Felipe Drugovich", "https://en.wikipedia.org/wiki/Felipe_Drugovich")}. {wikiLink("Hülkenberg", "https://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg")} left Aston Martin, returning as a full-time F1 driver for the {wikiLink("Haas F1 Team", "https://en.wikipedia.org/wiki/Haas_F1_Team")} in 2023.
        </p>

        <p>
        Construction on a new 37,000 m<sup>2</sup> (400,000 sq ft) factory at Aston Martin's Silverstone base began in September 2021. The factory features three interconnected buildings and is based in a 40-acre (16 ha) site directly opposite the {wikiLink("Silverstone Circuit", "https://en.wikipedia.org/wiki/Silverstone_Circuit")}. Building One will serve as the main building housing the team's design, manufacturing, and marketing resources. Building Two will redevelop and repurpose the original factory premises as a central hub with staff amenities and will also serve as a logistics centre. Building Two is set to house the team's wellness centre, auditorium, simulator, and heritage facility, while Building Three will contain the new {wikiLink("wind tunnel", "https://en.wikipedia.org/wiki/Wind_tunnel")}.
        </p>

        <p>
        Building One was completed in July 2023 followed by Building Two a year later and Building Three was completed in the first week of November 2024. Commissioning of the wind tunnel was completed by January 2025, and it became operational two months later. Aston Martin is the sixth different constructor to operate from the Silverstone base since 1991.
        </p>

        <p>
        Aston Martin retained {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")} and {wikiLink("Lance Stroll", "https://en.wikipedia.org/wiki/Lance_Stroll")} as their drivers for {wikiLink("2025 Formula One World Championship", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")}. In January 2025, {wikiLink("Andy Cowell", "https://en.wikipedia.org/wiki/Andy_Cowell")} replaced Krack as team principal.
        </p>

        <div className="clear-both"></div>

        {/* Works Honda power units (2026–) */}
        <section id="aston-martin-honda-2026" className="space-y-4 scroll-mt-24"></section>

        {/* Works Honda power units (2026–) */}
        <h4 className="text-lg font-semibold text-red-400 mb-1">Works Honda power units (2026–)</h4>

        <p>
        In {wikiLink("2026", "https://en.wikipedia.org/wiki/2026_Formula_One_World_Championship")}, Aston Martin will begin a works partnership with Japanese power unit manufacturer {wikiLink("Honda", "https://en.wikipedia.org/wiki/Honda_in_Formula_One")}, whose F1 programme will be run by its motorsport subsidiary {wikiLink("Honda Racing Corporation", "https://en.wikipedia.org/wiki/Honda_Racing_Corporation")}. The partnership means that the team will receive full factory support from Honda, including bespoke power units designed specifically for their chassis, and the two partners can work together to integrate the chassis and power unit without unwanted compromises. The works team status is often seen as necessary for a team to become a genuine title contender. By this time, the Silverstone-based team will have used customer {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes-AMG_High_Performance_Powertrains")} engines for seventeen seasons from 2009 to 2025. The team previously ran {wikiLink("Mugen-Honda", "https://en.wikipedia.org/wiki/Mugen-Honda")} engines between 1998 and 2000 and full Honda units in 2001 and 2002, when it was known as {wikiLink("Jordan", "https://en.wikipedia.org/wiki/Jordan_Grand_Prix")}. The team had also previously ran with a Japanese-licensed engine manufacturer when {wikiLink("Toyota", "https://en.wikipedia.org/wiki/Toyota_F1")} supplied its customer engines to Jordan in {wikiLink("2005", "https://en.wikipedia.org/wiki/2005_Formula_One_World_Championship")}, and in {wikiLink("2006", "https://en.wikipedia.org/wiki/2006_Formula_One_World_Championship")} when the team was rebranded as {wikiLink("Midland", "https://en.wikipedia.org/wiki/Midland_F1")}.
        </p>

        <p>
        In addition, the Silverstone-based team will produce its own transmission gearbox package for the first time. {wikiLink("Adrian Newey", "https://en.wikipedia.org/wiki/Adrian_Newey")}, who left {wikiLink("Red Bull Racing", "https://en.wikipedia.org/wiki/Red_Bull_Racing")} in May 2024, signed a deal with Aston Martin in September 2024 and joined the team the following March, in time for the {wikiLink("2026", "https://en.wikipedia.org/wiki/2026_Formula_One_World_Championship")} regulations. Newey also became a major shareholder of Aston Martin.
        </p>

        <div className="clear-both"></div>

  </>
  );
  
  export default history;