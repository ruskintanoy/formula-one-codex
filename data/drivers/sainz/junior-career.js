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
  
  const juniorCareer = (
    <>
      {/* Karting */}
      <section id="karting" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">Karting</h3>
      <p>
        Sainz started his career in karting in 2006, after participating in smaller series, in 2008, 
        he won the Asia-Pacific {wikiLink("KF3", "https://en.wikipedia.org/wiki/KF3")} title, as well as finishing runner-up in the {wikiLink("Spanish Championship", "https://en.wikipedia.org/wiki/Spanish_Karting_Championship")}. In 2009, 
        he also won the {wikiLink("Junior Monaco Kart Cup", "https://en.wikipedia.org/wiki/Junior_Monaco_Kart_Cup")},
        and was runner-up in the European KF3 Championship. 
        While at driving school in Madrid, he was coached by María de Villota.
      </p>

      <div className="clear-both"></div>
  
      {/* Formula BMW */}
      <section id="formula-bmw" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">Formula BMW (2010)</h3>

      <div className="clear-both"></div>

      <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <a href="/wiki/File:Carlos_Sainz_Jr_2010_Formula_BMW_Malaysia_April.jpg" className="mw-file-description">
          <img
            src="//upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Carlos_Sainz_Jr_2010_Formula_BMW_Malaysia_April.jpg/250px-Carlos_Sainz_Jr_2010_Formula_BMW_Malaysia_April.jpg"
            alt="Sainz during Race 1 of the 2010 Formula BMW Pacific season at Sepang International Circuit"
            className="w-full h-auto rounded"
          />
        </a>
        <figcaption className="text-sm text-gray-400 text-center">
          Sainz during Race 1 of the{" "}
          {wikiLink("2010 Formula BMW Pacific season", "https://en.wikipedia.org/wiki/2010_Formula_BMW_Pacific_season")} at{" "}
          {wikiLink("Sepang International Circuit", "https://en.wikipedia.org/wiki/Sepang_International_Circuit")}
        </figcaption>
      </figure>

      <p>
        Sainz raced in{" "}
        {wikiLink("Formula BMW", "https://en.wikipedia.org/wiki/Formula_BMW")} Europe in{" "}
        {wikiLink("2010", "https://en.wikipedia.org/wiki/2010_Formula_BMW_Europe_season")} with the{" "}
        {wikiLink("EuroInternational", "https://en.wikipedia.org/wiki/EuroInternational")} team. He was also part of the{" "}
        {wikiLink("Red Bull Junior Team", "https://en.wikipedia.org/wiki/Red_Bull_Junior_Team")} programme. He made his{" "}
        {wikiLink("Formula BMW debut", "https://en.wikipedia.org/wiki/2010_Formula_BMW_Pacific_season")} during a guest drive in the{" "}
        {wikiLink("Formula BMW Pacific series", "https://en.wikipedia.org/wiki/2010_Formula_BMW_Pacific_season")} at{" "}
        {wikiLink("Sepang", "https://en.wikipedia.org/wiki/Sepang_International_Circuit")}, Malaysia where he was ineligible to score points as a guest driver. However, he placed second in the opening race in Malaysia. That debut was followed by a 4th place. The following race day, he retired from the first race but won the second race. He finished 7th in the following race. He missed the next race in China but returned to Singapore. He finished 6th in the first race and 2nd in the second race. He missed the Japanese races but returned to win the season finale in Macau. Overall, in 9 races he achieved 3 pole positions, 2 wins, and 2 fastest laps.
      </p>

      <p>
        In Formula BMW Europe, he started his career with a podium position of 3rd and 6th place at the{" "}
        {wikiLink("Circuit de Catalunya", "https://en.wikipedia.org/wiki/Circuit_de_Catalunya")}. At{" "}
        {wikiLink("Zandvoort", "https://en.wikipedia.org/wiki/Zandvoort")}, he took 5th and 2nd place. At{" "}
        {wikiLink("Valencia", "https://en.wikipedia.org/wiki/Valencia_Circuit")}, he scored 7th and 10th place. A weekend at{" "}
        {wikiLink("Silverstone", "https://en.wikipedia.org/wiki/Silverstone_Circuit")} saw him take 3rd place and a victory in the following race, his first that season.{" "}
        {wikiLink("Hockenheim", "https://en.wikipedia.org/wiki/Hockenheimring")} saw him take 11th and 6th place. A 4th and a podium position of 3rd.{" "}
        {wikiLink("Robin Frijns", "https://en.wikipedia.org/wiki/Robin_Frijns")} was on a charge, scoring a podium position in every race but 3, two of which he finished in 4th. A double retirement at{" "}
        {wikiLink("Spa", "https://en.wikipedia.org/wiki/Spa-Francorchamps")} put him out of championship contention. An 8th and 6th at the season finale at{" "}
        {wikiLink("Monza", "https://en.wikipedia.org/wiki/Monza_Circuit")} followed. He finished the season 4th with 227 points.
      </p>

      <p>
        Sainz also competed in the UK Formula Renault Winter Cup, finishing 6th in the first race and retiring from the second race at{" "}
        {wikiLink("Snetterton", "https://en.wikipedia.org/wiki/Snetterton")}
      </p>

      <div className="clear-both"></div>

      {/* Formula Three */}
      <section id="formula-three" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">Formula Three (2012)</h3>

      <p>
        During the 2012 season, Sainz raced in both{" "}
        {wikiLink("British", "https://en.wikipedia.org/wiki/2012_British_Formula_3_International_Series")} and{" "}
        {wikiLink("Euro Series", "https://en.wikipedia.org/wiki/2012_Formula_3_Euro_Series")} Formula 3 championships. Racing for{" "}
        {wikiLink("Carlin", "https://en.wikipedia.org/wiki/Carlin_Motorsport")}, he won four races, finished nine times on the podium, as well as scoring a pole position in the British championship, finishing sixth overall in the final championship standings. He scored two podiums and two pole positions in the Euro Series championship, finishing in ninth position overall.
      </p>

      {/* GP3 Series */}
      <section id="gp3-series" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">GP3 Series (2013)</h3>

      <div className="clear-both"></div>

      <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <a href="/wiki/File:GP3-Belgium-2013-Sprint_Race-Carlos_Sainz_junior.jpg" className="mw-file-description">
          <img
            src="//upload.wikimedia.org/wikipedia/commons/thumb/7/70/GP3-Belgium-2013-Sprint_Race-Carlos_Sainz_junior.jpg/250px-GP3-Belgium-2013-Sprint_Race-Carlos_Sainz_junior.jpg"
            alt="Sainz competing for MW Arden during the 2013 GP3 Series, at Spa-Francorchamps"
            className="w-full h-auto rounded"
          />
        </a>
        <figcaption className="text-sm text-gray-400 text-center">
          Sainz competing for{" "}
          {wikiLink("MW Arden", "https://en.wikipedia.org/wiki/Mark_Webber_(racing_driver)")} during the{" "}
          {wikiLink("2013 GP3 Series", "https://en.wikipedia.org/wiki/2013_GP3_Series")} at{" "}
          {wikiLink("Spa-Francorchamps", "https://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps")}
        </figcaption>
      </figure>

      <p>
        In 2013, Sainz signed with{" "}
        {wikiLink("Arden", "https://en.wikipedia.org/wiki/Arden_International")} to compete in the GP3 series. During the first qualifying session of the year, he qualified in 5th place, 5 tenths off of pole sitter{" "}
        {wikiLink("Kevin Korjus", "https://en.wikipedia.org/wiki/Kevin_Korjus")}. However, he, as well as{" "}
        {wikiLink("Alex Fontana", "https://en.wikipedia.org/wiki/Alex_Fontana")} and{" "}
        {wikiLink("Patrick Kujala", "https://en.wikipedia.org/wiki/Patrick_Kujala")}, were penalised 10 places for ignoring{" "}
        {wikiLink("yellow flags", "https://en.wikipedia.org/wiki/Yellow_flag_(motorsport)")} during free practice. During the beginning of race one, Sainz got up to 13th place by passing Alex Fontana and{" "}
        {wikiLink("Jimmy Eriksson", "https://en.wikipedia.org/wiki/Jimmy_Eriksson")} off the start. By the start of lap 3, he was 13 seconds behind the leader. Sainz made it up to 8th place with his teammate{" "}
        {wikiLink("Daniil Kvyat", "https://en.wikipedia.org/wiki/Daniil_Kvyat")} until both cars lacked grip. Because they were both pushing to get into the top ten for points, neither driver decided to manage their Pirelli tyres and so by the end of the race, Kvyat was 20th and Sainz was 15th. He finished 51 seconds off first placed man{" "}
        {wikiLink("Tio Ellinas", "https://en.wikipedia.org/wiki/Tio_Ellinas")}.
      </p>

      <p>
        Sainz started in 15th place for race 2 on Sunday morning. At the end of lap 1, he was in 9th place. As they approached lap 2, the safety car was deployed due to an accident behind, giving Sainz time to save his tyres. With 5 laps remaining, Sainz was up to 8th place. During the next lap, he put a move on{" "}
        {wikiLink("Jack Harvey", "https://en.wikipedia.org/wiki/Jack_Harvey")} 's ART car to move up into 7th place. Sainz eventually would finish in 7th place. However, post-race investigating revealed that Sainz's car was underweight, so he was disqualified from the final results from race 2, thus scoring no points. His teammate,{" "}
        {wikiLink("Daniil Kvyat", "https://en.wikipedia.org/wiki/Daniil_Kvyat")}, retired during the race due to contact with another driver.
      </p>

      <p>
        In Valencia, Sainz began, and finished, the race in 8th place. In race 2, he started in 4th place and got up to 3rd place by the end of lap 1. He remained in that position, scoring a podium for the first time in GP3. Sainz obtained 24 world championship points, 4 for fastest laps in both races. He was now in 6th place in the championship overall.
      </p>

      <p>
        During the first race in Silverstone, Sainz was squeezed off track, falling to 9th place. By mid-distance, Sainz overtook{" "}
        {wikiLink("Lewis Williamson", "https://en.wikipedia.org/wiki/Lewis_Williamson")} to get into 8th place. Williamson then moved alongside Sainz to try and overtake, but Sainz kept moving over towards him until there was contact. Williamson was sent into a spin whilst Sainz continued to circulate around the track. Due to the damage to his car, Sainz fell down the order until he crossed the finish line in 13th place. In race 2, he finished where he started, in 13th place.
      </p>

      <div className="clear-both"></div>

      {/* Formula Renault 3.5 */}
      <section id="formula-renault-3-5" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">Formula Renault 3.5 (2013–2014)</h3>

      <div className="clear-both"></div>

      <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <a href="/wiki/File:WsbR-Germany-2014-Race1-Carlos_Sainz.jpg" className="mw-file-description">
          <img
            src="//upload.wikimedia.org/wikipedia/commons/thumb/b/bc/WsbR-Germany-2014-Race1-Carlos_Sainz.jpg/250px-WsbR-Germany-2014-Race1-Carlos_Sainz.jpg"
            alt="Sainz competing for DAMS during the 2014 Formula Renault 3.5 Series at the Nürburgring."
            className="w-full h-auto rounded"
          />
        </a>
        <figcaption className="text-sm text-gray-400 text-center">
          Sainz competing for{" "}
          {wikiLink("DAMS", "https://en.wikipedia.org/wiki/DAMS")} during the{" "}
          {wikiLink("2014 Formula Renault 3.5 Series", "https://en.wikipedia.org/wiki/2014_Formula_Renault_3.5_Series")} at the{" "}
          {wikiLink("Nürburgring", "https://en.wikipedia.org/wiki/N%C3%BCrburgring")}. He took the fifth of seven victories during the 2014 season at the Nürburgring, en route to the championship title.
        </figcaption>
      </figure>

      <p>
        Sainz raced in{" "}
        {wikiLink("Formula Renault 3.5", "https://en.wikipedia.org/wiki/Formula_Renault_3.5")} for the first time in 2013. However, he missed several races in his first season most likely due to his commitment towards GP3. In{" "}
        {wikiLink("Monaco", "https://en.wikipedia.org/wiki/Monaco_Grand_Prix")}, he finished 6th place, most probably due to a challenging start to his GP3 season. He then experienced a double retirement in{" "}
        {wikiLink("Spa", "https://en.wikipedia.org/wiki/Belgian_Grand_Prix")}. He also missed the races in{" "}
        {wikiLink("Moscow", "https://www.motorsportmagazine.com/database/races/2013-moscow-formula-renault-3-5-2/")} and{" "}
        {wikiLink("Austria", "https://en.wikipedia.org/wiki/Austrian_Grand_Prix")}. However, he made a comeback in{" "}
        {wikiLink("Hungary", "https://en.wikipedia.org/wiki/Hungarian_Grand_Prix")}, securing a 7th-place finish in Race 1. In Race 2, he faced several issues and finished in 22nd place. In{" "}
        {wikiLink("France", "https://en.wikipedia.org/wiki/Circuit_Paul_Ricard")}, at the{" "}
        {wikiLink("Circuit de Paul Ricard", "https://en.wikipedia.org/wiki/Circuit_Paul_Ricard")}, he had another double retirement. In the last race weekend of the year in{" "}
        {wikiLink("Catalunya", "https://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya")}, he retired in race 1 but managed to score 6th place.
      </p>

      <p>
        In 2014, he switched teams to{" "}
        {wikiLink("DAMS", "https://en.wikipedia.org/wiki/DAMS")}. In the season opener at{" "}
        {wikiLink("Monza", "https://en.wikipedia.org/wiki/Monza_Circuit")}, he finished 18th in the first race but won the second. He left Monza with 25 points, beating his previous seasons' score by 3 points. Another win at{" "}
        {wikiLink("Aragon", "https://en.wikipedia.org/wiki/Aragon")} meant he doubled his score and in race 2, he finished in 4th. Another 4th place followed at the one race in{" "}
        {wikiLink("Monaco", "https://en.wikipedia.org/wiki/Monaco_Grand_Prix")}. The weekend at{" "}
        {wikiLink("Spa", "https://en.wikipedia.org/wiki/Spa-Francorchamps")} followed with another 2 wins.{" "}
        {wikiLink("Moscow", "https://en.wikipedia.org/wiki/Moscow")} followed. 14th and 6th meant that he only took 8 points from a possible 50. At the{" "}
        {wikiLink("Nürburgring", "https://en.wikipedia.org/wiki/N%C3%BCrburgring")} GP Circuit, he won race 1 but in race 2, he retired. In{" "}
        {wikiLink("Hungary", "https://en.wikipedia.org/wiki/Hungarian_Grand_Prix")}, he was no match for{" "}
        {wikiLink("Roberto Merhi", "https://en.wikipedia.org/wiki/Roberto_Merhi")} who led by half a minute from the rest of the field in the wet. Another 6th place followed in race 2. In{" "}
        {wikiLink("France", "https://en.wikipedia.org/wiki/Circuit_de_La_Sarthe")}, he won and scored a total of 50 points to extend his championship lead over Merhi.
      </p>

      <div className="clear-both"></div>
    </>
  );
  
  export default juniorCareer;
  