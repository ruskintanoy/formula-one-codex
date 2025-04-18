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
    <figure className="float-right ml-4 mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="//upload.wikimedia.org/wikipedia/commons/thumb/5/54/Nico_Hulkenberg_2010_Malaysia_2nd_Free_Practice.jpg/250px-Nico_Hulkenberg_2010_Malaysia_2nd_Free_Practice.jpg"
        alt="Hülkenberg scored his first World Championship point at the 2010 Malaysian Grand Prix."
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Hülkenberg scored his first World Championship point at the{" "}
        {wikiLink("2010 Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2010_Malaysian_Grand_Prix")}.
      </figcaption>
    </figure>

    <p>
      Hülkenberg first drove a{" "}
      {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} car in a test for{" "}
      {wikiLink("Williams", "https://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering")} in 2007. His manager,{" "}
      {wikiLink("Willi Weber", "https://en.wikipedia.org/wiki/Willi_Weber")}, had organised the test after failing to
      conclude a deal with Renault boss {wikiLink("Flavio Briatore", "https://en.wikipedia.org/wiki/Flavio_Briatore")}. The two-day test was held at the{" "}
      {wikiLink("Circuito de Jerez", "https://en.wikipedia.org/wiki/Circuito_de_Jerez")} in Spain, and Hülkenberg outpaced Williams's driver{" "}
      {wikiLink("Kazuki Nakajima", "https://en.wikipedia.org/wiki/Kazuki_Nakajima")}, and set laptimes 0.4 seconds slower than{" "}
      {wikiLink("Nico Rosberg", "https://en.wikipedia.org/wiki/Nico_Rosberg")}. Hülkenberg's performance at the test led to the Williams team signing him as a{" "}
      {wikiLink("test driver", "https://en.wikipedia.org/wiki/Test_driver")}, and he competed in several test sessions in addition to racing in lower formulae. His test contract with Williams was extended for 2009, despite in-season tests being banned from that season. Hülkenberg would also act as the team's{" "}
      {wikiLink("reserve driver", "https://en.wikipedia.org/wiki/Williams_Driver_Academy")}, in the event of the regular drivers being unable to compete.
    </p>

    <div className="clear-both"></div>

    <section id="williams-2010" className="space-y-4 scroll-mt-24"></section>
    {/* Williams (2010) */}
    <h3 className="text-2xl font-bold text-red-600 mb-2">Williams (2010)</h3>

    <p>
      On 2 November 2009, Hülkenberg was confirmed to race for Williams in{" "}
      {wikiLink("2010", "https://en.wikipedia.org/wiki/2010_Formula_One_World_Championship")}. Hülkenberg's teammate for his first season would be the experienced driver{" "}
      {wikiLink("Rubens Barrichello", "https://en.wikipedia.org/wiki/Rubens_Barrichello")}, who moved from{" "}
      {wikiLink("Brawn GP", "https://en.wikipedia.org/wiki/Brawn_GP")} which in turn was bought out by{" "}
      {wikiLink("Mercedes-Benz", "https://en.wikipedia.org/wiki/Mercedes-Benz")}.
    </p>

    <p>
      Hülkenberg made his debut at the{" "}
      {wikiLink("Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2010_Bahrain_Grand_Prix")}, recovering from an early spin to finish in fourteenth position. At the second round in{" "}
      {wikiLink("Australia", "https://en.wikipedia.org/wiki/2010_Australian_Grand_Prix")}, he was involved in a first-lap incident with{" "}
      {wikiLink("Kamui Kobayashi", "https://en.wikipedia.org/wiki/Kamui_Kobayashi")}, after the Japanese driver's front wing failed and sent him into the barrier, rebounding into the path of Hülkenberg. At the third round in{" "}
      {wikiLink("Malaysia", "https://en.wikipedia.org/wiki/2010_Malaysian_Grand_Prix")}, Hülkenberg made it to Q3 for the first time, qualifying in fifth place; out-qualifying teammate Barrichello for the first time. Hülkenberg looked set to finish eleventh in the race until{" "}
      {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")} blew his engine three laps from the end, thus promoting Hülkenberg to tenth place and with the new-for-2010{" "}
      {wikiLink("points system", "https://en.wikipedia.org/wiki/List_of_Formula_One_World_Championship_points_scoring_systems")}, Hülkenberg along with{" "}
      {wikiLink("Jaime Alguersuari", "https://en.wikipedia.org/wiki/Jaime_Alguersuari")} scored their first points in Formula One. He was tenth again at Silverstone, and at the{" "}
      {wikiLink("Hungarian Grand Prix", "https://en.wikipedia.org/wiki/2010_Hungarian_Grand_Prix")} he finished sixth, a career best. He also picked up points finishes in Italy, Singapore, and Korea. At the{" "}
      {wikiLink("Japanese Grand Prix", "https://en.wikipedia.org/wiki/2010_Japanese_Grand_Prix")},{" "}
      {wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_in_Formula_One")} driver{" "}
      {wikiLink("Vitaly Petrov", "https://en.wikipedia.org/wiki/Vitaly_Petrov")} misjudged a move at the start and cut across Hülkenberg's nose thus taking them both out of the race. Towards the end of the season there were reports that he could lose his seat at Williams to the{" "}
      {wikiLink("GP2 Series", "https://en.wikipedia.org/wiki/2010_GP2_Series")} champion{" "}
      {wikiLink("Pastor Maldonado", "https://en.wikipedia.org/wiki/Pastor_Maldonado")} due to the money Maldonado could bring to the team.{" "}
      {wikiLink("Force India's", "https://en.wikipedia.org/wiki/Force_India")}{" "}
      {wikiLink("Adrian Sutil", "https://en.wikipedia.org/wiki/Adrian_Sutil")} was also linked to replace Hülkenberg at Williams.
    </p>

    <p>
      On 6 November Hülkenberg gained his first Formula One pole position, by 1.049 seconds over{" "}
      {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} at the{" "}
      {wikiLink("Brazilian Grand Prix", "https://en.wikipedia.org/wiki/2010_Brazilian_Grand_Prix")} in a rain-affected qualifying session. This was the Williams team's first pole position since the{" "}
      {wikiLink("2005 European Grand Prix", "https://en.wikipedia.org/wiki/2005_European_Grand_Prix")}. Hülkenberg completed a final lap after pole position was already secured, increasing his gap to the rest of the field. After losing the lead on the opening lap, he eventually finished the race in eighth place, having been passed by drivers in more competitive cars.
    </p>

    <p>
      After the{" "}
      {wikiLink("Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2010_Abu_Dhabi_Grand_Prix")}, team boss{" "}
      {wikiLink("Frank Williams", "https://en.wikipedia.org/wiki/Frank_Williams_(Formula_One)")} confirmed that Hülkenberg would not be driving for the team in{" "}
      {wikiLink("2011", "https://en.wikipedia.org/wiki/2011_Formula_One_World_Championship")}.
    </p>

    <div className="clear-both"></div>

    <section id="force-india-2011-2012" className="space-y-4 scroll-mt-24"></section>
    {/* Force India (2011–2012) */}
    <h3 className="text-2xl font-bold text-red-600 mb-2">Force India (2011–2012)</h3>

    {/* force-india-2011 */}
    <section id="force-india-2011" className="space-y-4 scroll-mt-24"></section>
    <h4 className="text-xl font-semibold text-red-400 mb-2">2011</h4>

    <div className="clear-both"></div>

    <figure className="float-right ml-4 mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="//upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Nico_Hulkenberg_2011_Malaysia_FP1.jpg/250px-Nico_Hulkenberg_2011_Malaysia_FP1.jpg"
        alt="Hülkenberg as Force India's third driver at the 2011 Malaysian Grand Prix"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Hülkenberg as{" "}
        {wikiLink("Force India", "https://en.wikipedia.org/wiki/Force_India")}'s third driver at the{" "}
        {wikiLink("2011 Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2011_Malaysian_Grand_Prix")}
      </figcaption>
    </figure>

    <p>
      On 26 January 2011, Hülkenberg was confirmed as{" "}
      {wikiLink("Force India", "https://en.wikipedia.org/wiki/Force_India")}'s reserve driver for the{" "}
      {wikiLink("2011", "https://en.wikipedia.org/wiki/2011_Formula_One_World_Championship")} season, where he would drive for the team in the Friday practice sessions. He replaced{" "}
      {wikiLink("Paul di Resta", "https://en.wikipedia.org/wiki/Paul_di_Resta")}, who was promoted to a race position in the team. Hülkenberg competed in the first practice sessions of all the races apart from{" "}
      {wikiLink("Monaco", "https://en.wikipedia.org/wiki/2011_Monaco_Grand_Prix")},{" "}
      {wikiLink("Hungary", "https://en.wikipedia.org/wiki/2011_Hungarian_Grand_Prix")},{" "}
      {wikiLink("Korea", "https://en.wikipedia.org/wiki/2011_Korean_Grand_Prix")},{" "}
      {wikiLink("India", "https://en.wikipedia.org/wiki/2011_Indian_Grand_Prix")}, and{" "}
      {wikiLink("Abu Dhabi", "https://en.wikipedia.org/wiki/2011_Abu_Dhabi_Grand_Prix")}.
    </p>

    {/* force-india-2012 */}
    <section id="force-india-2012" className="space-y-4 scroll-mt-24"></section>
    <h4 className="text-xl font-semibold text-red-400 mb-2">2012</h4>

    <p>
      On 16 December 2011, Force India announced di Resta and Hülkenberg would be their drivers for the{" "}
      {wikiLink("2012", "https://en.wikipedia.org/wiki/2012_Formula_One_World_Championship")} season. Hülkenberg qualified ninth for the{" "}
      {wikiLink("Australian Grand Prix", "https://en.wikipedia.org/wiki/2012_Australian_Grand_Prix")}, six places ahead of di Resta, but his race ended on the first lap after picking up damage in a first-corner incident before retiring further round the course. He picked up his first points for Force India the following weekend, at the{" "}
      {wikiLink("Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2012_Malaysian_Grand_Prix")}; he finished in ninth place, having started the race in sixteenth. He again qualified sixteenth, for the{" "}
      {wikiLink("Chinese Grand Prix", "https://en.wikipedia.org/wiki/2012_Chinese_Grand_Prix")}. He achieved his best Formula One finish with a fourth place at the{" "}
      {wikiLink("Belgian Grand Prix", "https://en.wikipedia.org/wiki/2012_Belgian_Grand_Prix")}. He had been running 2nd in the race, when he was jumped by{" "}
      {wikiLink("Kimi Räikkönen", "https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen")} during the pit stops, before the faster{" "}
      {wikiLink("Red Bull", "https://en.wikipedia.org/wiki/Red_Bull_Racing")} of{" "}
      {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} passed them both. Hülkenberg did not score any points in{" "}
      {wikiLink("Italy", "https://en.wikipedia.org/wiki/2012_Italian_Grand_Prix")} or{" "}
      {wikiLink("Singapore", "https://en.wikipedia.org/wiki/2012_Singapore_Grand_Prix")}, but collected points at all of the next five Grands Prix, except on the{" "}
      {wikiLink("Yas Marina Circuit", "https://en.wikipedia.org/wiki/2012_Abu_Dhabi_Grand_Prix")} where he was involved in a collision on the first lap, and subsequently retired. This was the first time he scored points in more than two races in a row.
    </p>

    <figure className="float-right ml-4 mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="//upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Nico_Hulkenberg_2012_Malaysia_Qualify.jpg/250px-Nico_Hulkenberg_2012_Malaysia_Qualify.jpg"
        alt="By the time of the 2012 Malaysian Grand Prix, Hülkenberg had been promoted to a full-time race seat."
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        By the time of the{" "}
        {wikiLink("2012 Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2012_Malaysian_Grand_Prix")},
        Hülkenberg had been promoted to a full-time race seat.
      </figcaption>
    </figure>

    <p>
      In the last race of the season, the{" "}
      {wikiLink("2012 Brazilian Grand Prix", "https://en.wikipedia.org/wiki/2012_Brazilian_Grand_Prix")}, Hülkenberg qualified 7th but was promoted to 6th after{" "}
      {wikiLink("Pastor Maldonado", "https://en.wikipedia.org/wiki/Pastor_Maldonado")} received a 10 place grid penalty. By lap three he had moved forward two places and on lap five he passed{" "}
      {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")} for third place. He moved into second position when McLaren's{" "}
      {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")} pitted on lap 11. Hülkenberg then passed{" "}
      {wikiLink("Jenson Button", "https://en.wikipedia.org/wiki/Jenson_Button")} at the start of lap 19 to take the lead. He and Button built up a 45-second lead before the safety car was deployed because of debris on the track. He still led until he was passed by Hamilton, after sliding at the entry of Turn 8 on lap 49. On lap 55 he collided with Hamilton when the rear of Hülkenberg's car slid out while trying to pass him at Turn 1. This ended Hamilton's last race for McLaren. After being given a drive-through penalty as a result of the incident, Hülkenberg finished fifth - letting his first race win and podium finish slip through his fingers. Nevertheless, this allowed him to take 11th place in the Drivers' Championship from Kamui Kobayashi.
    </p>

    <figure className="float-right ml-4 mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="//upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Nico_H%C3%BClkenberg%2C_United_States_Grand_Prix%2C_Austin_2012.jpg/250px-Nico_H%C3%BClkenberg%2C_United_States_Grand_Prix%2C_Austin_2012.jpg"
        alt="Hülkenberg at the 2012 United States Grand Prix"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Hülkenberg at the{" "}
        {wikiLink("2012 United States Grand Prix", "https://en.wikipedia.org/wiki/2012_United_States_Grand_Prix")}
      </figcaption>
    </figure>

    <p>
      Hülkenberg finished the year 17 points ahead of his teammate Paul di Resta and he out-qualified him 12 times, to di Resta's eight.
    </p>

    <section id="sauber-2013" className="space-y-4 scroll-mt-24"></section>
    {/* Sauber (2013) */}
    <h3 className="text-2xl font-bold text-red-600 mb-2">Sauber (2013)</h3>

    <p>
      On 31 October 2012, Sauber confirmed that they had signed Hülkenberg for the 2013 season.
    </p>

    <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="//upload.wikimedia.org/wikipedia/commons/thumb/2/28/Nico_Hulkenberg_2013_Malaysia_FP2.jpg/250px-Nico_Hulkenberg_2013_Malaysia_FP2.jpg"
        alt="Hülkenberg at the 2013 Malaysian Grand Prix"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Hülkenberg at the{" "}
        {wikiLink("2013 Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2013_Malaysian_Grand_Prix")}
      </figcaption>
    </figure>

    <p>
      Hülkenberg failed to start the{" "}
      {wikiLink("Australian Grand Prix", "https://en.wikipedia.org/wiki/2013_Australian_Grand_Prix")} due to a leak in the fuel system of his{" "}
      {wikiLink("Sauber C32", "https://en.wikipedia.org/wiki/Sauber_C32")}; he had qualified eleventh for the race, but was withdrawn for safety reasons. At the{" "}
      {wikiLink("Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2013_Malaysian_Grand_Prix")}, Hülkenberg qualified in twelfth, but finished the race in eighth place.{" "}
      Hülkenberg put in his best qualifying performance of the season to date at the{" "}
      {wikiLink("Italian Grand Prix", "https://en.wikipedia.org/wiki/2013_Italian_Grand_Prix")} to put himself 3rd on the grid. After losing two places to the{" "}
      {wikiLink("Ferraris", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")} of{" "}
      {wikiLink("Felipe Massa", "https://en.wikipedia.org/wiki/Felipe_Massa")} and{" "}
      {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")}, he managed to keep 5th place even though harried by the Mercedes of{" "}
      {wikiLink("Nico Rosberg", "https://en.wikipedia.org/wiki/Nico_Rosberg")} towards the end of the race. By finishing in fifth place, he overtook{" "}
      {wikiLink("Toro Rosso", "https://en.wikipedia.org/wiki/Scuderia_Toro_Rosso")} driver{" "}
      {wikiLink("Jean-Éric Vergne", "https://en.wikipedia.org/wiki/Jean-%C3%89ric_Vergne")} in the Drivers' Championship. His best finish was at the{" "}
      {wikiLink("Korean Grand Prix", "https://en.wikipedia.org/wiki/2013_Korean_Grand_Prix")} where he finished 4th after close battle with Hamilton and Alonso, in which he showed impressive defending skills and made no mistakes, in a battle where he overtook Hamilton more than once.
    </p>

    <div className="clear-both"></div>

    <section id="return-to-force-india" className="space-y-4 scroll-mt-24"></section>
    {/* Return to Force India (2014–2016) */}
    <h3 className="text-2xl font-bold text-red-600 mb-2">Return to Force India (2014–2016)</h3>

    {/* 2014 */}
    <section id="2014" className="space-y-4 scroll-mt-24"></section>
    <h4 className="text-lg font-semibold text-red-400 mb-1">2014</h4>

    <div className="clear-both"></div>

    <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="//upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Nico_Hulkenberg_2014_Singapore_FP2.jpg/250px-Nico_Hulkenberg_2014_Singapore_FP2.jpg"
        alt="Hülkenberg at the 2014 Singapore Grand Prix"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Hülkenberg at the{" "}
        {wikiLink("2014 Singapore Grand Prix", "https://en.wikipedia.org/wiki/2014_Singapore_Grand_Prix")}
      </figcaption>
    </figure>

    <p>
      On 3 December 2013, Force India confirmed they had signed Hülkenberg for 2014 to race alongside{" "}
      {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")}.
    </p>

    <p>
      In the first round, Hülkenberg finished the{" "}
      {wikiLink("Australian Grand Prix", "https://en.wikipedia.org/wiki/2014_Australian_Grand_Prix")} in seventh place – his first finish in Melbourne – but was promoted to sixth after the disqualification of second-placed{" "}
      {wikiLink("Daniel Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")}. He later finished fifth at the{" "}
      {wikiLink("Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2014_Malaysian_Grand_Prix")}, spending a large amount of time in fourth place, holding off{" "}
      {wikiLink("Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")}'s{" "}
      {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")} before being overtaken. Another fifth place at Bahrain put Hülkenberg in third place of the drivers' standings, behind the two{" "}
      {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One")} drivers,{" "}
      {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")} and{" "}
      {wikiLink("Nico Rosberg", "https://en.wikipedia.org/wiki/Nico_Rosberg")}.
    </p>

    <p>
      At the{" "}
      {wikiLink("Chinese Grand Prix", "https://en.wikipedia.org/wiki/2014_Chinese_Grand_Prix")} Hülkenberg took sixth place, taking eight points. He fell to fourth place in the Drivers' Championship after Fernando Alonso finished in third place. Force India lost second in the Constructors' Championship to{" "}
      {wikiLink("Red Bull Racing", "https://en.wikipedia.org/wiki/Red_Bull_Racing")}.
    </p>

    <p>
      Consistent point-scoring runs throughout the season meant that Hülkenberg finished the season in 9th place in the Drivers' Championship with 96 points, a career best, compared to his teammate's 59 points and helped Force India achieve sixth place in the Constructors' Championship, following the improvements of Williams and McLaren throughout the season. His best result of the season was fifth place, which he achieved four times.
    </p>

    <p>
      In October 2014, Force India confirmed they had re-signed Hülkenberg for 2015.
    </p>

    <div className="clear-both"></div>

    <section id="2015" className="space-y-4 scroll-mt-24"></section>
    {/* 2015 */}
    <h4 className="text-lg font-semibold text-red-400 mb-1">2015</h4>

    <div className="clear-both"></div>

    <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="//upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Nico_Hulkenberg_070615_b.jpg/250px-Nico_Hulkenberg_070615_b.jpg"
        alt="Hülkenberg at the 2015 Canadian Grand Prix"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Hülkenberg at the{" "}
        {wikiLink("2015 Canadian Grand Prix", "https://en.wikipedia.org/wiki/2015_Canadian_Grand_Prix")}
      </figcaption>
    </figure>

    <p>
      In the opening round in{" "}
      {wikiLink("Australia", "https://en.wikipedia.org/wiki/2015_Australian_Grand_Prix")}, he finished seventh, a lap down. However, he would not score again, in an uncompetitive Force India, until{" "}
      {wikiLink("Canada", "https://en.wikipedia.org/wiki/2015_Canadian_Grand_Prix")}.
    </p>

    <p>
      In{" "}
      {wikiLink("Hungary", "https://en.wikipedia.org/wiki/2015_Hungarian_Grand_Prix")}, mid-race, he suffered a big crash at turn one when his front wing detached and he drove over it, sending him slightly airborne and into the barriers, costing him a potential fourth place. He then failed to finish five of the next seven races. In{" "}
      {wikiLink("Belgium", "https://en.wikipedia.org/wiki/2015_Belgian_Grand_Prix")}, he had a power unit failure on the way to the grid, while in{" "}
      {wikiLink("Singapore", "https://en.wikipedia.org/wiki/2015_Singapore_Grand_Prix")}, he was tagged by{" "}
      {wikiLink("Felipe Massa", "https://en.wikipedia.org/wiki/Felipe_Massa")} at turn three and spun into the barriers, and received a three place grid penalty after being deemed responsible. In{" "}
      {wikiLink("Russia", "https://en.wikipedia.org/wiki/2015_Russian_Grand_Prix")} he spun at turn two at the start and collected{" "}
      {wikiLink("Marcus Ericsson", "https://en.wikipedia.org/wiki/Marcus_Ericsson")}, potentially costing him a podium finish, and in the{" "}
      {wikiLink("United States", "https://en.wikipedia.org/wiki/2015_United_States_Grand_Prix")} he slid into{" "}
      {wikiLink("Daniel Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")} and broke his front right suspension.
    </p>

    <p>
      He finished the season 10th with 58 points, 20 points behind his teammate, and helped Force India to secure fifth place in the Constructors' Championship and his best result of the season was sixth, which he achieved three times.
    </p>

    <div className="clear-both"></div>

    <section id="2016" className="space-y-4 scroll-mt-24"></section>
    {/* 2016 */}
    <h4 className="text-lg font-semibold text-red-400 mb-1">2016</h4>

    <div className="clear-both"></div>

    <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="//upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Nico_Hulkenberg_2016_Malaysia_FP2_2.jpg/250px-Nico_Hulkenberg_2016_Malaysia_FP2_2.jpg"
        alt="Hülkenberg at the 2016 Malaysian Grand Prix"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Hülkenberg at the{" "}
        {wikiLink("2016 Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2016_Malaysian_Grand_Prix")}
      </figcaption>
    </figure>

    <p>
      Hülkenberg again raced for Force India in 2016 alongside{" "}
      {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")}.
    </p>

    <p>
      In the opening round in{" "}
      {wikiLink("Australia", "https://en.wikipedia.org/wiki/2016_Australian_Grand_Prix")}, he finished seventh. He would finish the next two races in 15th position with the Force India being uncompetitive. In{" "}
      {wikiLink("Russia", "https://en.wikipedia.org/wiki/2016_Russian_Grand_Prix")}, he was hit by his former teammate{" "}
      {wikiLink("Esteban Gutiérrez", "https://en.wikipedia.org/wiki/Esteban_Guti%C3%A9rrez")} and retired from the race. He would also retire from the next race with an oil leak. A podium, once again, escaped Hülkenberg's grasp in{" "}
      {wikiLink("Monaco", "https://en.wikipedia.org/wiki/2016_Monaco_Grand_Prix")}. He qualified fifth and was set to finish on the podium, when he got stuck in traffic following his pit stop and his teammate jumped him for the final podium place. He eventually finished sixth, passing the eventual World Champion{" "}
      {wikiLink("Nico Rosberg", "https://en.wikipedia.org/wiki/Nico_Rosberg")}, who had struggled throughout the race, just before the finish line on the last lap. This was followed by points finishes at the next two races. He spun in qualifying during the{" "}
      {wikiLink("2016 European Grand Prix", "https://en.wikipedia.org/wiki/2016_European_Grand_Prix")} held at Baku, when the Force India was very competitive. This caused him to qualify 13th and finish 9th while Pérez qualified 2nd (demoted to seventh after a grid penalty) and finished third. At the following race in{" "}
      {wikiLink("Austria", "https://en.wikipedia.org/wiki/2016_Austrian_Grand_Prix")}, he put in another strong qualifying performance to qualify third, which became second when Nico Rosberg served his five-place grid penalty. However, he had a poor start, and was overtaken by quicker cars as the race went on, until his brakes failed and he had to retire.
    </p>

    <p>
      This was followed by five consecutive points finishes, including fourth at the{" "}
      {wikiLink("2016 Belgian Grand Prix", "https://en.wikipedia.org/wiki/2016_Belgian_Grand_Prix")}, his best result of the season, when he was initially running second after the first lap but was eventually passed by the faster cars of{" "}
      {wikiLink("Daniel Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")} and{" "}
      {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")}. At the following race in{" "}
      {wikiLink("Singapore", "https://en.wikipedia.org/wiki/2016_Singapore_Grand_Prix")}, he was involved in a first lap collision, where he was squeezed between two drivers, and had to retire from the race. Hülkenberg finished eighth at the next two races. Having announced his decision to move to{" "}
      {wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_in_Formula_One")} for the 2017 season before the{" "}
      {wikiLink("2016 United States Grand Prix", "https://en.wikipedia.org/wiki/2016_United_States_Grand_Prix")}, Hülkenberg put on some rejuvenated performances. He qualified seventh in the US, before retiring after being squeezed in between{" "}
      {wikiLink("Valtteri Bottas", "https://en.wikipedia.org/wiki/Valtteri_Bottas")} and{" "}
      {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")}. He then qualified fifth in{" "}
      {wikiLink("Mexico", "https://en.wikipedia.org/wiki/2016_Mexico_Grand_Prix")}, ahead of the Ferraris and finished seventh. He outqualified his teammate again in Brazil and was running fourth, but he picked up a puncture from debris on the track, following{" "}
      {wikiLink("Kimi Räikkönen", "https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen")}'s crash, costing him a podium finish, and fell outside the points before recovering to seventh, fending off Daniel Ricciardo towards the end of the race. He capped off his season in{" "}
      {wikiLink("Abu Dhabi", "https://en.wikipedia.org/wiki/2016_Abu_Dhabi_Grand_Prix")} by outqualifying Pérez again to seventh place and finishing in the same position, having survived a collision with{" "}
      {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} on the first lap.
    </p>

    <p>
      Hülkenberg scored 72 points in the season, finishing ninth in the Drivers' Championship and helping Force India finish the Constructors' Championship in fourth.
    </p>

    <div className="clear-both"></div>

    <section id="Renault (2017–2019)" className="space-y-4 scroll-mt-24"></section>
    {/* Renault (2017–2019) */}
    <h3 className="text-2xl font-bold text-red-600 mb-2">Renault (2017–2019)</h3>

    <section id="2017" className="space-y-4 scroll-mt-24"></section>
    {/* 2017 */}
    <h4 className="text-lg font-semibold text-red-400 mb-1">2017</h4>

    <div className="clear-both"></div>

    <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="//upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Nico_Hulkenberg_2017_Malaysia_FP2_1.jpg/250px-Nico_Hulkenberg_2017_Malaysia_FP2_1.jpg"
        alt="Hülkenberg driving for Renault at the 2017 Malaysian Grand Prix"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Hülkenberg driving for Renault at the{" "}
        {wikiLink("2017 Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2017_Malaysian_Grand_Prix")}
      </figcaption>
    </figure>

    <p>
      On 14 October 2016,{" "}
      {wikiLink("Renault Sport", "https://en.wikipedia.org/wiki/Renault_in_Formula_One")} announced that Hülkenberg had signed a multiyear agreement to race with the Renault Sport Formula One team.
    </p>

    <p>
      He got his first points for the team at the third race of the season in{" "}
      {wikiLink("Bahrain", "https://en.wikipedia.org/wiki/2017_Bahrain_Grand_Prix")} with 9th place, followed by 8th in{" "}
      {wikiLink("Russia", "https://en.wikipedia.org/wiki/2017_Russian_Grand_Prix")}. Hülkenberg then finished in 6th place in{" "}
      {wikiLink("Spain", "https://en.wikipedia.org/wiki/2017_Spanish_Grand_Prix")}, Renault's best result in the sport since returning in 2016. His point scoring streak ended in{" "}
      {wikiLink("Monaco", "https://en.wikipedia.org/wiki/2017_Monaco_Grand_Prix")} when he retired, when running in the points, with gearbox issues. He finished 8th in{" "}
      {wikiLink("Canada", "https://en.wikipedia.org/wiki/2017_Canadian_Grand_Prix")}, which was followed by a retirement in{" "}
      {wikiLink("Azerbaijan", "https://en.wikipedia.org/wiki/2017_Azerbaijan_Grand_Prix")}, when he clumsily clipped the wall while running in a promising 6th place. In{" "}
      {wikiLink("Austria", "https://en.wikipedia.org/wiki/2017_Austrian_Grand_Prix")}, he finished 13th, finishing behind his teammate{" "}
      {wikiLink("Jolyon Palmer", "https://en.wikipedia.org/wiki/Jolyon_Palmer")} for the first time, following a bad start.
    </p>

    <p>
      A new Renault upgrade brought massive improvement at the{" "}
      {wikiLink("British Grand Prix", "https://en.wikipedia.org/wiki/2017_British_Grand_Prix")} as Hülkenberg qualified and finished 6th. The car also proved to be the 'best of the rest' (behind Mercedes, Ferrari and Red Bull) in{" "}
      {wikiLink("Hungary", "https://en.wikipedia.org/wiki/2017_Hungarian_Grand_Prix")} as he qualified 7th, but a 5 place grid penalty for a new gearbox meant that he started 12th on the grid. He was set to score points in the race, before a slow pit stop dropped him down the field and he eventually retired from the race. There was an incident during the race, when{" "}
      {wikiLink("Kevin Magnussen", "https://en.wikipedia.org/wiki/Kevin_Magnussen")} had pushed Hülkenberg off the track as they were battling for position. Magnussen received a time penalty for the incident. Hülkenberg rudely confronted Magnussen while he was interviewed by Danish TV in the media pen, labelling him 'nasty' and the 'most unsporting driver of the whole grid' and Magnussen calmly responded with 'suck my balls, mate'.
    </p>

    <p>
      Hülkenberg entered the summer break with 26 points and in 10th place in the championship.
    </p>

    <p>
        Hülkenberg returned from the summer break in{" "}
        {wikiLink("Belgium", "https://en.wikipedia.org/wiki/2017_Belgian_Grand_Prix")} in good form as he qualified 7th and finished 6th in the race. At{" "}
        {wikiLink("Singapore", "https://en.wikipedia.org/wiki/2017_Singapore_Grand_Prix")}, it was announced that{" "}
        {wikiLink("Carlos Sainz Jr.", "https://en.wikipedia.org/wiki/Carlos_Sainz_Jr.")} would replace Jolyon Palmer, who at that time had scored 0 points to Hülkenberg's 34 points, for the 2018 season. Hülkenberg qualified 'best of the rest' in 7th. After the first lap of the race, Hülkenberg found himself in 3rd place, following the first corner collision and subsequent retirements of{" "}
        {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")},{" "}
        {wikiLink("Kimi Räikkönen", "https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen")},{" "}
        {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} and the fast-starting McLaren of{" "}
        {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")}. He looked set to take his long-awaited first podium finish in Formula 1, until{" "}
        {wikiLink("Daniil Kvyat", "https://en.wikipedia.org/wiki/Daniil_Kvyat")} crashed and brought out the Safety Car and a blunder in strategy by Renault left him in 5th place. He eventually got up to 4th place, before an oil leak brought about his retirement from the race, in which he succeeded{" "}
        {wikiLink("Adrian Sutil", "https://en.wikipedia.org/wiki/Adrian_Sutil")} to become the record holder for the most starts in Formula 1 without a podium finish.
      </p>

      <p>
        At the{" "}
        {wikiLink("Japanese Grand Prix", "https://en.wikipedia.org/wiki/2017_Japanese_Grand_Prix")}, it was announced that Carlos Sainz Jr. would replace Palmer for the rest of the season beginning at the next Grand Prix in Austin. In the race, he was running comfortably in the points for the majority of the race until a failure in the DRS mechanism of his car forced him to retire from the race. In their time together as teammates Hülkenberg scored 34 points to Palmer's 8 points and outqualified Palmer in all 16 races.
      </p>

      <p>
        In the{" "}
        {wikiLink("USA", "https://en.wikipedia.org/wiki/2017_United_States_Grand_Prix")}, Hülkenberg retired on lap 4 with an engine issue. In{" "}
        {wikiLink("Mexico", "https://en.wikipedia.org/wiki/2017_Mexican_Grand_Prix")}, he once again retired, again from a net 4th place, with an engine issue. This was the third time in a row that he had failed to finish a race and the fourth time in five races. At the{" "}
        {wikiLink("Brazilian Grand Prix", "https://en.wikipedia.org/wiki/2017_Brazilian_Grand_Prix")}, he led home teammate Sainz to 10th place, his first points in almost 3 months, with his previous points finish being his 6th-place finish at Belgium in August.
      </p>

      <p>
        He qualified 'best of the rest' in{" "}
        {wikiLink("Abu Dhabi", "https://en.wikipedia.org/wiki/2017_Abu_Dhabi_Grand_Prix")} with 7th place. He finished the race in 6th place, having received a contentious 5-second penalty for passing{" "}
        {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")} off the track at the start of the race, when many believed he should have given the position back. He ended up building enough of a gap to Pérez that the time penalty did not affect his position. With 6th place, Renault overtook Toro Rosso in the Constructors' Championship for 6th place.
      </p>

      <p>
        This confirmed Renault's position as 6th in the Constructors' Championship and moved Hülkenberg up to 43 points for the season, the same as Massa, but courtesy of more 6th-place finishes, he ended the season 10th in the standings. He had outqualified his teammates over the course of the season 19-1 and outscored his teammates 43–14 over the course of the season.
      </p>

      <div className="clear-both"></div>

      <section id="2018" className="space-y-4 scroll-mt-24"></section>
      {/* 2018 */}
      <h4 className="text-lg font-semibold text-red-400 mb-1">2018</h4>

      <p>
        For the 2018 season, Hülkenberg remained at{" "}
        {wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_in_Formula_One")}, alongside{" "}
        {wikiLink("Carlos Sainz", "https://en.wikipedia.org/wiki/Carlos_Sainz_Jr.")}, who was competing in his first full season for the Renault F1 team.
      </p>

      <figure className="float-right ml-4 mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="//upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Niko_Hulkenberg-Test_Days_2018_Circuit_Barcelona_%283%29.jpg/250px-Niko_Hulkenberg-Test_Days_2018_Circuit_Barcelona_%283%29.jpg"
          alt="Hülkenberg in the pre-season testing, Barcelona"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          Hülkenberg in the pre-season testing, Barcelona
        </figcaption>
      </figure>

      <p>
        Hülkenberg and Renault started the season well with a 7th and two 6th places in the first 3 races. The first race in{" "}
        {wikiLink("Australia", "https://en.wikipedia.org/wiki/2018_Australian_Grand_Prix")} with Sainz finishing in 10th, marked the first double points finish for Renault in F1 since the 2011 Turkish Grand Prix.
      </p>

      <p>
        At the fourth race of the season in{" "}
        {wikiLink("Baku", "https://en.wikipedia.org/wiki/2018_Azerbaijan_Grand_Prix")}, Hülkenberg was handed a 5-place grid penalty for changing his damaged gearbox. He qualified 9th and would start 14th. This meant the end of his streak of starting the last 6 races 7th on the grid. He had made his way up to 5th place by lap 10, when he lost the rear of his car on lap 10, and clattered the wall with his left rear tyre and retired with suspension damage, ending his 5-race point-scoring streak. It was second time in two years that he had retired from a top-6 position in Baku from an unforced error.
      </p>

      <p>
        Hülkenberg's misfortune continued at the next race in{" "}
        {wikiLink("Spain", "https://en.wikipedia.org/wiki/2018_Spanish_Grand_Prix")}. He went out in Q1 for the first time in 59 races due to a fuel pressure problem with his car. Then he was taken out by the spinning{" "}
        {wikiLink("Romain Grosjean", "https://en.wikipedia.org/wiki/Romain_Grosjean")} on the first lap of the race.{" "}
        {wikiLink("Hülkenberg criticised Grosjean's driving", "https://en.wikipedia.org/wiki/2018_Spanish_Grand_Prix")} following the crash, for which the Frenchman received a grid penalty for the next race.
      </p>

      <p>
        In{" "}
        {wikiLink("Monaco", "https://en.wikipedia.org/wiki/2018_Monaco_Grand_Prix")}, Hülkenberg was outqualified by his teammate by merit for the first time since the{" "}
        {wikiLink("2016 Japanese Grand Prix", "https://en.wikipedia.org/wiki/2016_Japanese_Grand_Prix")}. Nevertheless, he finished the race in 8th, having started in 11th, with his teammate Sainz obeying team orders late in the race to let him past.
      </p>

      <p>
        He followed this up with another point-scoring finish in{" "}
        {wikiLink("Canada", "https://en.wikipedia.org/wiki/2018_Canadian_Grand_Prix")} after qualifying and finishing the race in 7th. The next three races made up Formula One's first-ever triple header in{" "}
        {wikiLink("France", "https://en.wikipedia.org/wiki/2018_French_Grand_Prix")},{" "}
        {wikiLink("Austria", "https://en.wikipedia.org/wiki/2018_Austrian_Grand_Prix")}, and{" "}
        {wikiLink("Britain", "https://en.wikipedia.org/wiki/2018_British_Grand_Prix")}. Hülkenberg finished 9th in France, followed by a retirement from 9th in Austria with an engine failure. It was his 3rd retirement in 6 races and his 7th retirement in his last 16 races.
      </p>
      
      <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="//upload.wikimedia.org/wikipedia/commons/thumb/0/0d/2018_Spanish_Grand_Prix_Hulkenberg_%285%29.jpg/250px-2018_Spanish_Grand_Prix_Hulkenberg_%285%29.jpg"
          alt="Hülkenberg at the 2018 Spanish Grand Prix"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          Hülkenberg at the{" "}
          {wikiLink("2018 Spanish Grand Prix", "https://en.wikipedia.org/wiki/2018_Spanish_Grand_Prix")}
        </figcaption>
      </figure>

      <p>
        However, he finished the triple header on a high, finishing 6th at the{" "}
        {wikiLink("British Grand Prix", "https://en.wikipedia.org/wiki/2018_British_Grand_Prix")}. Hülkenberg achieved his best-ever result for Renault at his home grand prix in{" "}
        {wikiLink("Germany", "https://en.wikipedia.org/wiki/2018_German_Grand_Prix")} with 5th place, overtaking{" "}
        {wikiLink("Kevin Magnussen", "https://en.wikipedia.org/wiki/Kevin_Magnussen")} late on when the rain started to fall.
      </p>

      <p>
        After a refuelling problem limited him to only 13th on the grid, he finished 12th at the{" "}
        {wikiLink("Hungarian Grand Prix", "https://en.wikipedia.org/wiki/2018_Hungarian_Grand_Prix")}. Nevertheless, he entered the summer break with 52 points and 7th in the championship as the effective leader of the midfield, which many drivers had started to dub the B championship of Formula 1 or 'Formula 1.5', due to the very large gap in performance to the top three teams of Mercedes, Ferrari, and Red Bull.
      </p>

      <p>
        In{" "}
        {wikiLink("Belgium", "https://en.wikipedia.org/wiki/2018_Belgian_Grand_Prix")}, Hülkenberg triggered a massive first corner collision after starting 18th due to engine penalties.{" "}
        Hülkenberg outbraked himself and hit Fernando Alonso, who was launched above the Sauber of{" "}
        {wikiLink("Charles Leclerc", "https://en.wikipedia.org/wiki/Charles_Leclerc_(racing_driver)")}, with one of Alonso's tyres hitting the new controversially introduced safety device, the halo. The collision also ultimately ended the races of both{" "}
        {wikiLink("Kimi Räikkönen", "https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen")} and{" "}
        {wikiLink("Daniel Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")}.
      </p>

      <p>
        Hülkenberg was deemed to have 'completely misjudged the situation' by the race stewards and handed a 10-place grid penalty for the next race. The spectacular crash was likened to the crash at the{" "}
        {wikiLink("2012 Belgian Grand Prix", "https://en.wikipedia.org/wiki/2012_Belgian_Grand_Prix")} initiated by{" "}
        {wikiLink("Romain Grosjean", "https://en.wikipedia.org/wiki/Romain_Grosjean")}. Following the incident, Hülkenberg who had been a vocal opposer to the halo, introduced in 2018, admitted that it was 'pretty useful'.
      </p>

      <p>
        Hülkenberg suffered a tough period of results, coinciding with Renault's loss of competitiveness, by only scoring 1 point in the next 4 races. He bounced back with a 6th-place finish at the{" "}
        {wikiLink("United States Grand Prix", "https://en.wikipedia.org/wiki/2018_United_States_Grand_Prix")}. With Sainz finishing in 7th, this was the best team result for Renault in a race since they rejoined the sport in 2016, beating the 7th and 8th place the two drivers had achieved in Canada earlier in the year.
      </p>

      <p>
        This was followed by another strong race in{" "}
        {wikiLink("Mexico", "https://en.wikipedia.org/wiki/2018_Mexican_Grand_Prix")} with another 6th place. His season ended with two successive retirements due to high engine temperatures in{" "}
        {wikiLink("Brazil", "https://en.wikipedia.org/wiki/2018_Brazilian_Grand_Prix")} and after being rolled over into the barriers by{" "}
        {wikiLink("Romain Grosjean", "https://en.wikipedia.org/wiki/Romain_Grosjean")} in{" "}
        {wikiLink("Abu Dhabi", "https://en.wikipedia.org/wiki/2018_Abu_Dhabi_Grand_Prix")}.
      </p>

      <p>
        Nevertheless, he finished the season as the "champion of the rest" in 7th place with 69 points, 7 points ahead of{" "}
        {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")}, as Renault also secured 4th place in the Constructor's Championship.
      </p>

      <div className="clear-both"></div>

      <section id="2019" className="space-y-4 scroll-mt-24"></section>
      {/* 2019 */}
      <h4 className="text-lg font-semibold text-red-400 mb-1">2019</h4>

      <div className="clear-both"></div>

      <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="//upload.wikimedia.org/wikipedia/commons/thumb/a/a1/2019_Formula_One_tests_Barcelona%2C_H%C3%BClkenberg_%2840348248973%29.jpg/250px-2019_Formula_One_tests_Barcelona%2C_H%C3%BClkenberg_%2840348248973%29.jpg"
          alt="Hülkenberg driving during 2019 pre-season testing"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          Hülkenberg driving during{" "}
          {wikiLink("2019 pre-season testing", "https://en.wikipedia.org/wiki/2019_Formula_One_pre-season_testing")}
        </figcaption>
      </figure>

      <p>
        For the 2019 season, Hülkenberg was joined at Renault by multiple Grand Prix winner{" "}
        {wikiLink("Daniel Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")}, who was signed from Red Bull.
        Hülkenberg, yet to score a podium in 158 races by the beginning of the 2019 season, said his "future in the sport depends on the outcome of the duel" as his ability could be measured "against a Grand Prix winner", for the first time since his rookie season in 2010, when he was teammate to{" "}
        {wikiLink("Rubens Barrichello", "https://en.wikipedia.org/wiki/Rubens_Barrichello")} at Williams. Meanwhile, Renault managing director,{" "}
        {wikiLink("Cyril Abiteboul", "https://en.wikipedia.org/wiki/Cyril_Abiteboul")}, believed that the driver pairing was "one of the strongest - if not the strongest - driver line-up on the grid".
      </p>

      <figure className="float-right ml-4 mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="//upload.wikimedia.org/wikipedia/commons/thumb/9/9b/2019_Japanese_Grand_Prix_Nico_H%C3%BClkenberg_%2849028198968%29.jpg/250px-2019_Japanese_Grand_Prix_Nico_H%C3%BClkenberg_%2849028198968%29.jpg"
          alt="Hülkenberg at the 2019 Japanese Grand Prix"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          Hülkenberg at the{" "}
          {wikiLink("2019 Japanese Grand Prix", "https://en.wikipedia.org/wiki/2019_Japanese_Grand_Prix")}
        </figcaption>
      </figure>

      <p>
        Hülkenberg started the season strongly, outqualifying new teammate{" "}
        {wikiLink("Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")} at his{" "}
        {wikiLink("home race", "https://en.wikipedia.org/wiki/2019_Australian_Grand_Prix")}, but an engine issue prevented him from reaching Q3, leaving him 11th. He made a very strong start and finished the race in 7th.
      </p>

      <p>
        However, he was hit by misfortune in the next race in{" "}
        {wikiLink("Bahrain", "https://en.wikipedia.org/wiki/2019_Bahrain_Grand_Prix")}. An engine mapping issue restricted him to 17th in qualifying. However, he had a fantastic race, moving up 11 places and being on course to finish 6th, surviving contact with{" "}
        {wikiLink("Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")} on the way, when the Australian slid into him as Hülkenberg overtook him. Then, on lap 53, 4 laps from the end, disaster struck as both Hülkenberg and Ricciardo, running 6th and 10th respectively, both retired with engine issues at the same corner.{" "}
        {wikiLink("Abiteboul", "https://en.wikipedia.org/wiki/Cyril_Abiteboul")} stated that Renault's engine problems were "unacceptable".
      </p>

      <p>
        These issues were compounded, when Hülkenberg again retired from a points-scoring position with engine issues at the next race in{" "}
        {wikiLink("China", "https://en.wikipedia.org/wiki/2019_Chinese_Grand_Prix")}, this time with a software issue. In{" "}
        {wikiLink("Spain", "https://en.wikipedia.org/wiki/2019_Spanish_Grand_Prix")}, Hülkenberg crashed in qualifying and damaged his front wing. He had to fit a different specification front wing, which broke parc fermé rules, ensuring he would have to start the race in the pit lane. He would finish the race in 13th.
      </p>

      <p>
        In the following race in{" "}
        {wikiLink("Monaco", "https://en.wikipedia.org/wiki/2019_Monaco_Grand_Prix")}, a chance of a points finish evaporated, when the Ferrari of{" "}
        {wikiLink("Charles Leclerc", "https://en.wikipedia.org/wiki/Charles_Leclerc")} hit Hülkenberg, while attempting an overtaking move, which the German labelled "too ambitious". Both drivers suffered punctures. Hülkenberg recovered to 13th, but Leclerc eventually retired from the race. He then finished the next two races in 7th and 8th place in{" "}
        {wikiLink("Canada", "https://en.wikipedia.org/wiki/2019_Canadian_Grand_Prix")} and{" "}
        {wikiLink("France", "https://en.wikipedia.org/wiki/2019_French_Grand_Prix")} respectively.
      </p>

      <p>
        At the{" "}
        {wikiLink("British Grand Prix", "https://en.wikipedia.org/wiki/2019_British_Grand_Prix")}, he recovered to a 10th-place finish, after he was hit by former teammate{" "}
        {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")} and his engine momentarily failing and going into 'limp mode', whilst also bemoaning the team's strategy. Hülkenberg then crashed out of his{" "}
        {wikiLink("home race", "https://en.wikipedia.org/wiki/2019_German_Grand_Prix")} in precarious wet conditions. He was in 4th place, having run as high as 2nd at one point, when he crashed out at Turn 16, where fellow drivers{" "}
        {wikiLink("Charles Leclerc", "https://en.wikipedia.org/wiki/Charles_Leclerc")}, race leader{" "}
        {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")} and former teammate{" "}
        {wikiLink("Carlos Sainz", "https://en.wikipedia.org/wiki/Carlos_Sainz")} also went off. The latter two managed to survive their incidents and continue, while both Leclerc and Hülkenberg retired. Both retirees criticised the run-off of the corner, which is a different tarmac used for dragster racing, which meant there was no grip in the wet conditions to help prevent the accident.
      </p>

      <p>
        At the following race in{" "}
        {wikiLink("Hungary", "https://en.wikipedia.org/wiki/2019_Hungarian_Grand_Prix")}, Hülkenberg was in the running for points, but then he suffered yet another engine problem on his Renault, which meant he was only able to finish in 12th place. Going into the summer break, Hülkenberg was only 14th in the championship with 17 points, 5 points behind new teammate{" "}
        {wikiLink("Daniel Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")} in 11th place. Renault's points total of 39 points was 43 points behind the position they were in the previous year, after they suffered a disappointing first half of the season.
      </p>

      <p>
        Just before the{" "}
        {wikiLink("Belgian Grand Prix", "https://en.wikipedia.org/wiki/2019_Belgian_Grand_Prix")},
        Renault announced that Hülkenberg would be replaced by Mercedes reserve driver and former Force India driver{" "}
        {wikiLink("Esteban Ocon", "https://en.wikipedia.org/wiki/Esteban_Ocon")} for the 2020 season.
        Hülkenberg said the decision was "not only about performance", alluding that the French Renault team desired a French driver in Ocon.
        Four-time World Champion{" "}
        {wikiLink("Alain Prost", "https://en.wikipedia.org/wiki/Alain_Prost")}, non-executive director for Renault Sport at the time, said that Renault offered Hülkenberg a new one-year contract with an option for another year, but the German refused the offer due to wanting a full two-year contract.
      </p>

      <p>
        Hülkenberg started the second half of the season strongly by qualifying 7th in Belgium. A grid penalty meant he started 12th, and he fell even further back when he took evasive action to avoid collisions involving Verstappen, Räikkönen, Ricciardo, and Stroll. However, he executed an alternate two-stop strategy and made up 3 places in the last lap to finish 8th.
      </p>

      <p>
        In{" "}
        {wikiLink("Italy", "https://en.wikipedia.org/wiki/2019_Italian_Grand_Prix")},
        both Renaults had a very strong weekend, with Ricciardo and Hülkenberg qualifying 5th and 6th respectively, with both drivers moving up a place to finish 4th and 5th, after Sebastian Vettel spun out of contention. This was Renault's best points haul since returning to the sport in 2016, and Hülkenberg's joint best result for the team.
      </p>

      <p>
        In{" "}
        {wikiLink("Singapore", "https://en.wikipedia.org/wiki/2019_Singapore_Grand_Prix")}, Hülkenberg had initially qualified 9th but as teammate{" "}
        {wikiLink("Daniel Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")} had been disqualified from qualifying as his car exceeded the MGU-K power limit, he started the race in 8th. In the race, Hülkenberg was involved in a first-lap collision with former teammate{" "}
        {wikiLink("Carlos Sainz Jr.", "https://en.wikipedia.org/wiki/Carlos_Sainz_Jr.")}. Both drivers suffered punctures and had to pit on the first lap and fell to the back of the field. However, he managed to recover to 9th place for his 3rd points finish in a row.
      </p>

      <p>
        Hülkenberg started the{" "}
        {wikiLink("Russian Grand Prix", "https://en.wikipedia.org/wiki/2019_Russian_Grand_Prix")} in an impressive 6th place. However, his race was compromised by a bad start which left him outside the top 10. Having recovered to 9th place, the Renault pit crew dropped his car off the jack, which again dropped him out of the top 10. He eventually recovered to finish in 10th, overtaking Lance Stroll towards the end of the race. After the race, Hülkenberg said that "everything that could go wrong did go wrong."
      </p>

      <p>
        Further misfortune hit Hülkenberg in{" "}
        {wikiLink("Japan", "https://en.wikipedia.org/wiki/2019_Japanese_Grand_Prix")}. He was restricted to only 15th in qualifying, after a mechanical failure in Q2 meant he could not set a representative time to progress further. However, in the race he made a fantastic start and was up to 10th place by the end of the first lap and he would end up finishing the race in that position. However, following a protest by rival constructor{" "}
        {wikiLink("Racing Point", "https://en.wikipedia.org/wiki/Racing_Point_F1_Team")}, both Renault cars were disqualified for having a pre-set automated brake bias system that was deemed to be a driver aid, and thus illegal. This was Hülkenberg's first disqualification in his entire F1 career.
      </p>

      <p>
        He then managed to salvage a point at the{" "}
        {wikiLink("Mexican Grand Prix", "https://en.wikipedia.org/wiki/2019_Mexican_Grand_Prix")} with 10th after he was spun into the wall by{" "}
        {wikiLink("Daniil Kvyat", "https://en.wikipedia.org/wiki/Daniil_Kvyat")} at the last corner of the last lap, when running in 9th. He crossed the line in 11th, without a rear wing, but was promoted to 10th after Kvyat was penalized for the incident. He followed this up with yet another points finish in the{" "}
        {wikiLink("United States Grand Prix", "https://en.wikipedia.org/wiki/2019_United_States_Grand_Prix")} with 9th place.
      </p>

      <p>
        He suffered a difficult race in{" "}
        {wikiLink("Brazil", "https://en.wikipedia.org/wiki/2019_Brazilian_Grand_Prix")}, where two safety car periods interfered in his strategy and left him 12th on the line. He was penalized for overtaking{" "}
        {wikiLink("Kevin Magnussen", "https://en.wikipedia.org/wiki/Kevin_Magnussen")} before the safety car line during the safety car restart, and thus was classified 15th, his worst result of the year. He was voted Driver of the Day in the season finale in{" "}
        {wikiLink("Abu Dhabi", "https://en.wikipedia.org/wiki/2019_Abu_Dhabi_Grand_Prix")}, taking the title for the first time, after finishing 12th in what was his possible final race in Formula One, having failed to secure a drive for the 2020 season.
      </p>

      <p>
        He finished the season in 14th place, his lowest placing in the standings in the sport since his debut season in 2010, having scored 37 points across the season, 17 less than teammate Daniel Ricciardo.
      </p>

      <div className="clear-both"></div>

      <section id="racing-point-2020" className="space-y-4 scroll-mt-24"></section>
      {/* Racing Point reserve driver (2020) */}
      <h3 className="text-2xl font-bold text-red-600 mb-2">Racing Point reserve driver (2020)</h3>

      <p>
        Hülkenberg did not have a contract for the 2020 F1 season. He replaced{" "}
        {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")} at{" "}
        {wikiLink("Racing Point", "https://en.wikipedia.org/wiki/Racing_Point")} for the{" "}
        {wikiLink("British Grand Prix", "https://en.wikipedia.org/wiki/2020_British_Grand_Prix")} and{" "}
        {wikiLink("70th Anniversary Grand Prix", "https://en.wikipedia.org/wiki/70th_Anniversary_Grand_Prix")} after Pérez tested positive for{" "}
        {wikiLink("SARS-2 coronavirus", "https://en.wikipedia.org/wiki/Severe_acute_respiratory_syndrome_coronavirus_2")}.
      </p>

      <p>
        For the British Grand Prix he qualified thirteenth but did not start the race due to an engine failure before the start of the race. At the{" "}
        {wikiLink("70th Anniversary Grand Prix", "https://en.wikipedia.org/wiki/70th_Anniversary_Grand_Prix")}, he surprisingly qualified in third behind the two Mercedes cars and was running in 4th in the race. However, due to unexpectedly high levels of tyre wear, he was forced to pit again. He then went on to finish seventh behind teammate{" "}
        {wikiLink("Lance Stroll", "https://en.wikipedia.org/wiki/Lance_Stroll")}.
      </p>

      <p>
        Hülkenberg did not race at the{" "}
        {wikiLink("Spanish Grand Prix", "https://en.wikipedia.org/wiki/2020_Spanish_Grand_Prix")} as Sergio Pérez returned to racing after testing negative for COVID-19. He would later replace Stroll, for the{" "}
        {wikiLink("Eifel Grand Prix", "https://en.wikipedia.org/wiki/Eifel_Grand_Prix")} after the Canadian had sat out of the final practice session due to feeling unwell before later testing positive for COVID-19 himself. Hülkenberg finished the race in 8th after qualifying 20th, and last, on the grid, winning him the fans' vote of "Driver of the Day".
      </p>

      <div className="clear-both"></div>

      <section id="haas-2023" className="space-y-4 scroll-mt-24"></section>
      {/* Haas (2023–2024) */}
      <h3 className="text-2xl font-bold text-red-600 mb-2">Haas (2023–2024)</h3>

      <section id="2023" className="space-y-4 scroll-mt-24"></section>
      {/* 2023 */}
      <h4 className="text-lg font-semibold text-red-400 mb-1">2023</h4>

      <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="//upload.wikimedia.org/wikipedia/commons/thumb/0/02/FIA_F1_Austria_2023_Nr._27_%281%29.jpg/250px-FIA_F1_Austria_2023_Nr._27_%281%29.jpg"
          alt="Hülkenberg at the 2023 Austrian Grand Prix"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          Hülkenberg at the{" "}
          {wikiLink("2023 Austrian Grand Prix", "https://en.wikipedia.org/wiki/2023_Austrian_Grand_Prix")}
        </figcaption>
      </figure>

      <p>
        In November 2022,{" "}
        {wikiLink("Haas F1 Team", "https://en.wikipedia.org/wiki/Haas_F1_Team")} announced that Hülkenberg had signed to drive for them in{" "}
        {wikiLink("2023", "https://en.wikipedia.org/wiki/2023_Formula_One_World_Championship")}, partnering{" "}
        {wikiLink("Kevin Magnussen", "https://en.wikipedia.org/wiki/Kevin_Magnussen")} and replacing fellow German compatriot{" "}
        {wikiLink("Mick Schumacher", "https://en.wikipedia.org/wiki/Mick_Schumacher")}.
      </p>

      <p>
        The first race at the{" "}
        {wikiLink("Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2023_Bahrain_Grand_Prix")} saw Hülkenberg qualify tenth and finish fifteenth, behind his teammate Magnussen. He had also picked up a fifteen-second penalty for exceeding track limits, which ultimately did not affect his final position in the race.
      </p>

      <p>
        In the{" "}
        {wikiLink("2023 Australian Grand Prix", "https://en.wikipedia.org/wiki/2023_Australian_Grand_Prix")}, Hülkenberg benefitted from the turn one incident in lap 57, running in fourth when the third of three red flags during the race was shown; however, he was demoted back to seventh after it was determined that the drivers would return to their previous positions before the final red flag. Haas lodged an unsuccessful protest after the race.
      </p>

      <p>
        At the{" "}
        {wikiLink("2023 Canadian Grand Prix", "https://en.wikipedia.org/wiki/2023_Canadian_Grand_Prix")}, Hülkenberg qualified in second in a wet qualifying session in which he benefited when{" "}
        {wikiLink("McLaren's Oscar Piastri", "https://en.wikipedia.org/wiki/Oscar_Piastri")} crashed at the early part of the qualifying session which brought out the red flag. The rest of the grid were not able to improve on their qualifying as the rain got heavier when the session restarted. However, Hülkenberg was handed a three-place grid penalty for a red flag infraction and started the race in fifth position.
      </p>

      <p>
        In the race, excessive tyre wear and the unfortunate timing of a safety car meant he eventually finished 15th. At the{" "}
        {wikiLink("2023 Austrian Grand Prix", "https://en.wikipedia.org/wiki/2023_Austrian_Grand_Prix")}, Hülkenberg qualified an impressive 4th for the Sprint in wet conditions. The Sprint, also run in wet conditions, saw him take 2nd place on the first lap, but he eventually finished 6th, securing 3 crucial points for the struggling Haas team, to take them into 7th in the Constructor's standings. For the main grand prix, Hülkenberg qualified an impressive 8th, but had to retire early in the race with an engine issue.
      </p>

      <p>
        By the summer break, Hülkenberg had qualified in the top 10 an impressive 6 times, compared to his teammate's singular appearance. However, the Haas team's season-long struggle with tyre wear meant that neither he nor Haas had managed to add to their points tally since Austria as Haas slipped to 8th in the championship.
      </p>

      <p>
        Hülkenberg finished 16th in the championship with 9 points to teammate Magnussen's 3. Despite the low points tally he was praised for his qualifying performances, during the season he qualified in the top ten 11 times (3 times in sprint qualifying and 8 times in normal qualifying) even though he had been out of a full-time seat for three seasons.
      </p>

      <div className="clear-both"></div>

      <section id="2024" className="space-y-4 scroll-mt-24"></section>
      {/* 2024 */}
      <h4 className="text-lg font-semibold text-red-400 mb-1">2024</h4>

      <div className="clear-both"></div>

      <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="//upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Nico_Hulkenberg_2024_Chinese_GP.jpg/250px-Nico_Hulkenberg_2024_Chinese_GP.jpg"
          alt="Hülkenberg at the 2024 Chinese Grand Prix"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          Hülkenberg at the{" "}
          {wikiLink("2024 Chinese Grand Prix", "https://en.wikipedia.org/wiki/2024_Chinese_Grand_Prix")}
        </figcaption>
      </figure>

      <p>
        In August 2023, Haas announced that Hülkenberg and Magnussen had been retained for the 2024 season. He earned his first point of the season by finishing 10th at the{" "}
        {wikiLink("2024 Saudi Arabian Grand Prix", "https://en.wikipedia.org/wiki/2024_Saudi_Arabian_Grand_Prix")} with the help of strong defending from his teammate. He continued his good run of form by scoring points in{" "}
        {wikiLink("Australia", "https://en.wikipedia.org/wiki/2024_Australian_Grand_Prix")} and{" "}
        {wikiLink("China", "https://en.wikipedia.org/wiki/2024_Chinese_Grand_Prix")} as well. He finished 6th at the{" "}
        {wikiLink("Austrian Grand Prix", "https://en.wikipedia.org/wiki/2024_Austrian_Grand_Prix")} after holding off the{" "}
        {wikiLink("Red Bull", "https://en.wikipedia.org/wiki/Red_Bull_Racing_RB20")} of{" "}
        {wikiLink("Sergio Perez", "https://en.wikipedia.org/wiki/Sergio_Perez")} at the end of the race. Magnussen finished 8th, marking Haas's best result of the season and moving the team up to 7th place in the standings. He repeated this result at the{" "}
        {wikiLink("British Grand Prix", "https://en.wikipedia.org/wiki/2024_British_Grand_Prix")}, qualifying 6th and finishing in that position. He again qualified 6th at the{" "}
        {wikiLink("Singapore Grand Prix", "https://en.wikipedia.org/wiki/2024_Singapore_Grand_Prix")}, finishing 9th after a defensive drive. He finished 8th at the{" "}
        {wikiLink("United States Grand Prix", "https://en.wikipedia.org/wiki/2024_United_States_Grand_Prix")}, and took 9th at the{" "}
        {wikiLink("Mexico City Grand Prix", "https://en.wikipedia.org/wiki/2024_Mexico_City_Grand_Prix")} as Magnussen finished 7th.
      </p>

      <p>
        Hulkenberg was disqualified from a rainy{" "}
        {wikiLink("Sao Paulo Grand Prix", "https://en.wikipedia.org/wiki/2024_S%C3%A3o_Paulo_Grand_Prix")} for receiving assistance from marshals to rejoin the race after being stranded, becoming the first driver to receive a black flag since the{" "}
        {wikiLink("2007 Canadian Grand Prix", "https://en.wikipedia.org/wiki/2007_Canadian_Grand_Prix")}. After finishing 8th in{" "}
        {wikiLink("Las Vegas", "https://en.wikipedia.org/wiki/2024_Las_Vegas_Grand_Prix")} and failing to finish in{" "}
        {wikiLink("Qatar", "https://en.wikipedia.org/wiki/2024_Qatar_Grand_Prix")}, Hulkenberg qualified 4th at the season-ending{" "}
        {wikiLink("Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2024_Abu_Dhabi_Grand_Prix")}, in front of the Red Bull of champion{" "}
        {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")}. However, he started 7th after being given a three-place grid penalty for overtaking in the pit-road exit. He finished 8th in the race, but fell to 11th place in the standings after{" "}
        {wikiLink("Pierre Gasly", "https://en.wikipedia.org/wiki/Pierre_Gasly")} finished in 7th.
      </p>

      <div className="clear-both"></div>

      <section id="return-to-sauber" className="space-y-4 scroll-mt-24"></section>
      {/* Return to Sauber (2025–present) */}
      <h3 className="text-2xl font-bold text-red-600 mb-2">Return to Sauber (2025–present)</h3>

      <div className="clear-both"></div>

      <figure className="float-right ml-4 mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="//upload.wikimedia.org/wikipedia/commons/thumb/9/9e/2025_Japan_GP_-_Sauber_-_Nico_Hulkenberg_-_FP1.jpg/250px-2025_Japan_GP_-_Sauber_-_Nico_Hulkenberg_-_FP1.jpg"
          alt="Hülkenberg driving the Kick Sauber C45 at the 2025 Japanese Grand Prix"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          Hülkenberg (pictured at the{" "}
          {wikiLink("2025 Japanese Grand Prix", "https://en.wikipedia.org/wiki/2025_Japanese_Grand_Prix")}) returned to{" "}
          {wikiLink("Sauber", "https://en.wikipedia.org/wiki/Sauber")} in{" "}
          {wikiLink("2025", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")}, ahead of their acquisition by{" "}
          {wikiLink("Audi", "https://en.wikipedia.org/wiki/Audi_in_Formula_One")}.
        </figcaption>
      </figure>

      <p>
        Hülkenberg left Haas at the end of the 2024 season, with{" "}
        {wikiLink("Sauber", "https://en.wikipedia.org/wiki/Sauber")} signing him in preparation for{" "}
        {wikiLink("Audi", "https://en.wikipedia.org/wiki/Audi")}'s takeover of the team from{" "}
        {wikiLink("2026", "https://en.wikipedia.org/wiki/2026_Formula_One_World_Championship")} and beyond. He is partnered by reigning{" "}
        {wikiLink("FIA Formula 2", "https://en.wikipedia.org/wiki/2024_FIA_Formula_2_Championship")} champion and former{" "}
        {wikiLink("McLaren Driver Development Programme", "https://en.wikipedia.org/wiki/McLaren_Driver_Development_Programme")} member{" "}
        {wikiLink("Gabriel Bortoleto", "https://en.wikipedia.org/wiki/Gabriel_Bortoleto")}; the two replaced drivers{" "}
        {wikiLink("Valtteri Bottas", "https://en.wikipedia.org/wiki/Valtteri_Bottas")} and{" "}
        {wikiLink("Zhou Guanyu", "https://en.wikipedia.org/wiki/Zhou_Guanyu")}. In a wet season-opening{" "}
        {wikiLink("Australian Grand Prix", "https://en.wikipedia.org/wiki/2025_Australian_Grand_Prix")}, Hulkenberg finished seventh, the team's highest finish since the{" "}
        {wikiLink("2022 Emilia Romagna Grand Prix", "https://en.wikipedia.org/wiki/2022_Emilia_Romagna_Grand_Prix")}.
      </p>

    <div className="clear-both"></div>
  </>
);

export default f1Career;
