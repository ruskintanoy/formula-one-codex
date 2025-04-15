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
      Russell began {wikiLink("karting", "https://en.wikipedia.org/wiki/Karting")} in 2006 and progressed to the cadet class by 2009, becoming {wikiLink("MSA", "https://en.wikipedia.org/wiki/Motor_Sports_Association")} British champion and British Open champion. In 2010 he moved to the Rotax Mini Max category where he became Super One British champion, Formula Kart Stars British champion, and also won the Kartmasters British Grand Prix.
    </p>

    <p>
      Russell graduated to the {wikiLink("KF3", "https://en.wikipedia.org/wiki/KF3")} class in 2011. He joined the Intrepid karting team with help from Intrepid's {wikiLink("Alex Albon", "https://en.wikipedia.org/wiki/Alex_Albon")}; his teammates that year included Albon and {wikiLink("Charles Leclerc", "https://en.wikipedia.org/wiki/Charles_Leclerc")}. Russell became {wikiLink("CIK-FIA European Champion", "https://en.wikipedia.org/wiki/CIK-FIA_Karting_European_Championship")} and won the {wikiLink("SKUSA SuperNationals", "https://en.wikipedia.org/wiki/SKUSA_SuperNationals")} title, while Leclerc won the {wikiLink("Karting World Cup", "https://en.wikipedia.org/wiki/Karting_World_Cup")}.
    </p>

    <p>
      In 2012, Russell defended his European title and nearly defended his SKUSA title following {wikiLink("Lance Stroll", "https://en.wikipedia.org/wiki/Lance_Stroll")}'s disqualification, although Stroll's win was ultimately reinstated. In his final year of karting in 2013, Russell moved up to {wikiLink("KF1", "https://en.wikipedia.org/wiki/KF1")}, finishing 19th in the {wikiLink("CIK-FIA World Championship", "https://en.wikipedia.org/wiki/Karting_World_Championship")}.
    </p>

    <div className="clear-both"></div>

    {/* Lower Formulae */}
    <section id="lower-formulae" className="space-y-4 scroll-mt-24"></section>
    <h3 className="text-2xl font-bold text-red-600 mb-2">Lower Formulae</h3>

    <p>
      In 2014, Russell made his{" "}
      {wikiLink("single-seater", "https://en.wikipedia.org/wiki/Open_wheel_car")} debut, simultaneously competing in{" "}
      {wikiLink("BRDC Formula 4", "https://en.wikipedia.org/wiki/2014_BRDC_Formula_4_Championship_season")} with Lanan Racing and{" "}
      {wikiLink("Formula Renault 2.0 Alps", "https://en.wikipedia.org/wiki/2014_Formula_Renault_2.0_Alps_season")} with{" "}
      {wikiLink("Koiranen GP", "https://en.wikipedia.org/wiki/Koiranen_GP")}.
    </p>

    <p>
      He led most of the BRDC F4 season, but lost the points lead to teammate{" "}
      {wikiLink("Arjun Maini", "https://en.wikipedia.org/wiki/Arjun_Maini")} before the final race at{" "}
      {wikiLink("Snetterton", "https://en.wikipedia.org/wiki/Snetterton_Motor_Racing_Circuit")}, which{" "}
      {wikiLink("Formula Scout", "https://formulascout.com/")} attributed to a mid-season case of{" "}
      {wikiLink("chickenpox", "https://en.wikipedia.org/wiki/Chickenpox")}.
    </p>

    <p>
      He won that race to claim the title. As a reward, he was granted a{" "}
      {wikiLink("GP3", "https://en.wikipedia.org/wiki/GP3_Series")} test at{" "}
      {wikiLink("Yas Marina", "https://en.wikipedia.org/wiki/Yas_Marina_Circuit")}.
    </p>

    <p>
      Russell had a more difficult season in{" "}
      {wikiLink("Formula Renault 2.0", "https://en.wikipedia.org/wiki/Formula_Renault_2.0")}. Although he was initially set to race for{" "}
      {wikiLink("Prema Powerteam", "https://en.wikipedia.org/wiki/Prema_Powerteam")},{" "}
      {wikiLink("Lance Stroll", "https://en.wikipedia.org/wiki/Lance_Stroll")}'s father vetoed the deal despite Stroll racing elsewhere.
      Russell joined{" "}
      {wikiLink("Koiranen GP", "https://en.wikipedia.org/wiki/Koiranen_GP")}, which dominated the season.
    </p>

    <p>
      However, he was outperformed by his teammate{" "}
      {wikiLink("Nyck de Vries", "https://en.wikipedia.org/wiki/Nyck_de_Vries")}, who won nine of twelve races. Russell later reflected that{" "}
      {wikiLink("Tech 1 Racing", "https://en.wikipedia.org/wiki/Tech_1_Racing")} might have been a better fit, but praised de Vries as{" "}
      "one of the very best" and "the man to beat" in karting.
    </p>

    <p>
      Russell also competed as a guest in the{" "}
      {wikiLink("Eurocup Formula Renault 2.0", "https://en.wikipedia.org/wiki/2014_Eurocup_Formula_Renault_2.0_season")} series, winning a race at{" "}
      {wikiLink("Jerez", "https://en.wikipedia.org/wiki/Circuito_de_Jerez")} with Tech 1 Racing.
    </p>

    <p>
      At the end of the season, he won the{" "}
      {wikiLink("Autosport BRDC Award", "https://en.wikipedia.org/wiki/Autosport_BRDC_Award")} after testing{" "}
      {wikiLink("Formula Two", "https://en.wikipedia.org/wiki/Formula_Two")},{" "}
      {wikiLink("DTM", "https://en.wikipedia.org/wiki/Deutsche_Tourenwagen_Masters")}, and GT3 cars. At seventeen, he became the youngest-ever winner of the award.
      He was also selected for the BRDC's SuperStars junior driver mentorship programme.
    </p>

    <div className="clear-both"></div>

    {/* FIA European Formula 3 */}
    <section id="fia-f3" className="space-y-4 scroll-mt-24"></section>
    <h3 className="text-2xl font-bold text-red-600 mb-2">
      FIA European Formula 3
    </h3>

    <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="/drivers/russell/car1.jpg"
        alt="Russell competing at Spa during the 2015 FIA Formula 3 European Championship"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Russell competing at {wikiLink("Spa", "https://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps")} during the{" "}
        {wikiLink("2015 FIA Formula 3 European Championship", "https://en.wikipedia.org/wiki/2015_FIA_Formula_3_European_Championship")}
      </figcaption>
    </figure>

    <p>
      Although Russell was expected to spend 2015 competing full-time in {wikiLink("Eurocup Formula Renault 2.0", "https://en.wikipedia.org/wiki/Eurocup_Formula_Renault_2.0")}, his {wikiLink("BRDC Award", "https://en.wikipedia.org/wiki/Autosport_BRDC_Award")} win prompted him to skip directly to European {wikiLink("Formula Three", "https://en.wikipedia.org/wiki/Formula_Three")}, where he spent the next two years.
    </p>

    <p>
      {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One")}' {wikiLink("Toto Wolff", "https://en.wikipedia.org/wiki/Toto_Wolff")} offered to fund his 2015 season, but since Russell had already been vetoed from Prema, Mercedes' top F3 affiliate, Russell signed with {wikiLink("Volkswagen", "https://en.wikipedia.org/wiki/Volkswagen")} affiliate {wikiLink("Carlin", "https://en.wikipedia.org/wiki/Carlin_Motorsport")} in 2015.
    </p>

    
    <p>In 2015, Russell finished sixth, winning one race and collecting three podiums; <i>PaddockScout</i> opined that his qualifying pace was "his one obvious weak-spot," and that he primarily stood out for his race pace and ability to cleanly overtake other drivers. He was second in the Rookies' Championship, behind {wikiLink("Charles Leclerc", "https://en.wikipedia.org/wiki/Charles_Leclerc")}, although fellow rookie {wikiLink("Lance Stroll", "https://en.wikipedia.org/wiki/Lance_Stroll")} finished above him in the overall classification. He also finished second at the {wikiLink("2015 Masters of Formula 3", "https://en.wikipedia.org/wiki/2015_Masters_of_Formula_3")} exhibition race, behind {wikiLink("Antonio Giovinazzi", "https://en.wikipedia.org/wiki/Antonio_Giovinazzi")}. At season's end, {wikiLink("BMW", "https://en.wikipedia.org/wiki/BMW")} offered him a {wikiLink("DTM", "https://en.wikipedia.org/wiki/Deutsche_Tourenwagen_Masters")} drive, but he chose to stay in F3 to compete for a spot on the {wikiLink("Mercedes Junior Team", "https://en.wikipedia.org/wiki/Mercedes_Junior_Team")}.</p>
    <p>In {wikiLink("2016 FIA Formula 3 European Championship", "https://en.wikipedia.org/wiki/2016_FIA_Formula_3_European_Championship")}, Russell switched to {wikiLink("Hitech GP", "https://en.wikipedia.org/wiki/Hitech_GP")}, a new Mercedes affiliate competing in its first full F3 season. That year, {wikiLink("Prema", "https://en.wikipedia.org/wiki/Prema_Powerteam")} allegedly received special engines from {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One")} and technical support (including a suspension upgrade) from {wikiLink("Williams", "https://en.wikipedia.org/wiki/Williams_Racing")}. {wikiLink("Lance Stroll", "https://en.wikipedia.org/wiki/Lance_Stroll")} (whose family was funding Prema) cruised to the title, with Russell finishing third, behind Prema drivers Stroll and {wikiLink("Maximilian Günther", "https://en.wikipedia.org/wiki/Maximilian_G%C3%BCnther")}. Nonetheless, Mercedes was impressed by Russell's performances and signed him to its driver academy at the end of the season. After making it to Formula One, Russell questioned the fairness of the 2016 competition, stating that it was "almost laughable to see ... how wrong that championship was."</p>

    <div className="clear-both"></div>

    {/* GP3 Series */}
    <section id="gp3-series" className="space-y-4 scroll-mt-24"></section>
    <h3 className="text-2xl font-bold text-red-600 mb-2">GP3 Series</h3>

    <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="/drivers/russell/car2.jpg"
        alt="George Russell GP3 Series during Spa GP 2017"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Russell racing at the 2017 Spa-Francorchamps GP3 round
      </figcaption>
    </figure>

    <p>
      With financial help from {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One")}, Russell secured a drive with {wikiLink("ART Grand Prix", "https://en.wikipedia.org/wiki/ART_Grand_Prix")} for the {wikiLink("2017 GP3 Series", "https://en.wikipedia.org/wiki/2017_GP3_Series")} season. ART was GP3's dominant team, having won six of the last seven team titles. In 2017, it swept the top four places in the standings.
    </p>

    <p>
      Russell won the title as a rookie, scoring four wins and finishing 79 points ahead of the second-placed {wikiLink("Jack Aitken", "https://en.wikipedia.org/wiki/Jack_Aitken")}. He locked up the title with two races to go. Notable races included a dominant performance at {wikiLink("Spa-Francorchamps", "https://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps")} (a win, a second place, two poles, and two fastest laps) and a close three-way battle at {wikiLink("Monza", "https://en.wikipedia.org/wiki/Monza_Circuit")}.
    </p>

    <div className="clear-both"></div>

    {/* FIA Formula 2 Championship */}
    <section id="formula2" className="space-y-4 scroll-mt-24"></section>
    <h3 className="text-2xl font-bold text-red-600 mb-2">FIA Formula 2 Championship</h3>

    <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="/drivers/russell/win1.jpg"
        alt="Russell on the podium alongside Lando Norris and Antonio Fuoco after winning the 2018 Spielberg Formula 2 round"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Russell on the podium alongside {wikiLink("Lando Norris", "https://en.wikipedia.org/wiki/Lando_Norris")} (left) and {wikiLink("Antonio Fuoco", "https://en.wikipedia.org/wiki/Antonio_Fuoco")} (right) after winning the {wikiLink("2018 Spielberg Formula 2 round", "https://en.wikipedia.org/wiki/2018_Spielberg_Formula_2_round")}
      </figcaption>
    </figure>

    <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="/drivers/russell/car3.jpg"
        alt="Russell at the 2018 Silverstone Formula 2 round"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Russell at the {wikiLink("2018 Silverstone Formula 2 round", "https://en.wikipedia.org/wiki/2018_Silverstone_Formula_2_round")}
      </figcaption>
    </figure>

    <p>
      ART promoted Russell to its {wikiLink("Formula 2", "https://en.wikipedia.org/wiki/2018_Formula_2_Championship")} team for the 2018 season. In addition, Mercedes promoted Russell to first-team reserve driver, sharing duties with {wikiLink("Pascal Wehrlein", "https://en.wikipedia.org/wiki/Pascal_Wehrlein")}. The 2018 F2 grid was "possibly the strongest field of the decade", and featured several future F1 racers, including Lando Norris, Alex Albon, {wikiLink("Nyck de Vries", "https://en.wikipedia.org/wiki/Nyck_de_Vries")}, and {wikiLink("Nicholas Latifi", "https://en.wikipedia.org/wiki/Nicholas_Latifi")}.
    </p>

    <p>
      ART did not carry over its lopsided dominance from the prior year's F3 season, as Norris' {wikiLink("Carlin", "https://en.wikipedia.org/wiki/Carlin_Motorsport")} took the teams' championship. Although {wikiLink("Formula Two", "https://en.wikipedia.org/wiki/Formula_Two")} is a {wikiLink("spec series", "https://en.wikipedia.org/wiki/Spec_series")} and every engine is built by the same company, Russell, Albon, and Norris agreed that in practice, teams had engines of varying quality. Albon and Norris said that Russell had the best engine that year, while Russell and Albon said that Norris' engine was very competitive early in the season.
    </p>

    <p>
      After ten races, Norris led the standings. Russell heated up at midseason, finishing either first or second in five out of six races. He qualified in the top four at all but one race (where he had engine trouble). He won the title, finishing 68 points ahead of the second-placed Norris.
    </p>

    <p>
      With his title, Russell became the fifth rookie champion of the GP2/F2 category (previously achieved by {wikiLink("Nico Rosberg", "https://en.wikipedia.org/wiki/Nico_Rosberg")}, {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")}, {wikiLink("Nico Hülkenberg", "https://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg")}, and {wikiLink("Charles Leclerc", "https://en.wikipedia.org/wiki/Charles_Leclerc")}), the fourth driver to win the GP3/F3 and GP2/F2 titles in consecutive seasons (after Hamilton, Hülkenberg and Leclerc), and the second driver to win both of these titles as a rookie (after Leclerc). {wikiLink("Oscar Piastri", "https://en.wikipedia.org/wiki/Oscar_Piastri")} and {wikiLink("Gabriel Bortoleto", "https://en.wikipedia.org/wiki/Gabriel_Bortoleto")} subsequently matched each of these feats.
    </p>


    <div className="clear-both"></div>

  </>
);

export default juniorCareer;
