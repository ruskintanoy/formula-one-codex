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
    {/* Karting */}
    <section id="karting" className="space-y-4 scroll-mt-24"></section>
    <h3 className="text-2xl font-bold text-red-600 mb-2">Karting</h3>

    <p>
      Hülkenberg made his {wikiLink("karting", "https://en.wikipedia.org/wiki/Kart_racing")} debut in 1997, at the age of 10. In 2002 he was German Junior Karting Champion and the following year he won the German Kart Championship.
    </p>

    <div className="clear-both"></div>

    {/* Formula BMW */}
    <section id="formula-bmw" className="space-y-4 scroll-mt-24"></section>
    <h3 className="text-2xl font-bold text-red-600 mb-2">Formula BMW</h3>

    <p>
      Hülkenberg made his German {wikiLink("Formula BMW", "https://en.wikipedia.org/wiki/Formula_BMW")} debut in 2005, dominating the championship and winning the title comfortably. He finished first in the Formula BMW world final but was stripped of the win after it was claimed he had brake-tested his rivals during a safety car period.
    </p>

    <div className="clear-both"></div>

    {/* A1 Grand Prix */}
    <section id="a1-grand-prix" className="space-y-4 scroll-mt-24"></section>
    <h3 className="text-2xl font-bold text-red-600 mb-2">A1 Grand Prix</h3>

    <div className="clear-both"></div>

    <figure className="float-right ml-4 mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Hulkenberg_Sepang_2006.jpg/250px-Hulkenberg_Sepang_2006.jpg"
        alt="Hülkenberg, as a driver for A1 Team Germany, in 2006"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Hülkenberg, as a driver for {wikiLink("A1 Team Germany", "https://en.wikipedia.org/wiki/A1_Team_Germany")}, in 2006
      </figcaption>
    </figure>

    <p>
      Hülkenberg also joined the {wikiLink("German A1 Grand Prix team", "https://en.wikipedia.org/wiki/A1_Team_Germany")} for the {wikiLink("2006–07 season", "https://en.wikipedia.org/wiki/2006%E2%80%9307_A1_Grand_Prix_season")}. Nine wins in his rookie season made him the most successful driver in A1GP history. It meant he almost single-handedly won Germany the championship with 128 points, 35 more than {wikiLink("Team New Zealand", "https://en.wikipedia.org/wiki/A1_Team_New_Zealand")}.
    </p>

    {/* Formula Three */}
    <section id="formula-three" className="space-y-4 scroll-mt-24"></section>
    <h3 className="text-2xl font-bold text-red-600 mb-2">Formula Three</h3>

    <p>
      Hülkenberg finished fifth in the {wikiLink("German Formula Three Championship", "https://en.wikipedia.org/wiki/German_Formula_Three_Championship")} (ATS Formel 3 Cup) in 2006. For {wikiLink("2007", "https://en.wikipedia.org/wiki/2007_Formula_3_Euro_Series")} he switched to the {wikiLink("Formula 3 Euro Series", "https://en.wikipedia.org/wiki/Formula_3_Euro_Series")} with the {wikiLink("ASM", "https://en.wikipedia.org/wiki/ART_Grand_Prix")} team that had taken {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")} and {wikiLink("Paul di Resta", "https://en.wikipedia.org/wiki/Paul_di_Resta")} to the last two championships. His first win came at the {wikiLink("Norisring", "https://en.wikipedia.org/wiki/Norisring")} from 18th on the grid, he won again in the rain at {wikiLink("Zandvoort", "https://en.wikipedia.org/wiki/Zandvoort")} and added a third at the {wikiLink("Nürburgring", "https://en.wikipedia.org/wiki/N%C3%BCrburgring")}. But he ran into trouble at {wikiLink("Magny-Cours", "https://en.wikipedia.org/wiki/Circuit_de_Nevers_Magny-Cours")}, being penalised in qualifying for passing the chequered flag twice, and crashing into {wikiLink("Filip Salaquarda", "https://en.wikipedia.org/wiki/Filip_Salaquarda")} in the race. Hülkenberg finished his rookie season 3rd in the championship, with four wins and 72 points.
    </p>

    <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Nico_H%C3%BClkenberg.JPG/250px-Nico_H%C3%BClkenberg.JPG"
        alt="Hülkenberg won seven races en route to the 2008 Formula 3 Euro Series title"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Hülkenberg won seven races en route to the {wikiLink("2008 Formula 3 Euro Series", "https://en.wikipedia.org/wiki/2008_Formula_3_Euro_Series")} title.
      </figcaption>
    </figure>

    <p>
      Hülkenberg won the non-championship {wikiLink("Masters of Formula 3", "https://en.wikipedia.org/wiki/Masters_of_Formula_3")} race at {wikiLink("Zolder", "https://en.wikipedia.org/wiki/Circuit_Zolder")} from teammate (and F3 Euro Series championship leader) {wikiLink("Romain Grosjean", "https://en.wikipedia.org/wiki/Romain_Grosjean")} after Grosjean stalled at the start. Hülkenberg won the Formula 3 Euro Series championship in {wikiLink("2008", "https://en.wikipedia.org/wiki/2008_Formula_3_Euro_Series")}. He amassed 76 of his total of 85 points during the feature races on Saturdays, taking seven wins in the progress.
    </p>

    <div className="clear-both"></div>

    {/* GP2 Series (2008–2009) */}
    <section id="gp2-series" className="space-y-4 scroll-mt-24"></section>
    <h3 className="text-2xl font-bold text-red-600 mb-2">GP2 Series (2008–2009)</h3>

    <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/7/77/Nico_Hulkenberg_2009_GP2_Monaco.jpg"
        alt="Hülkenberg driving for ART Grand Prix at the Monaco round of the 2009 GP2 Series"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Hülkenberg driving for{" "}
        {wikiLink("ART Grand Prix", "https://en.wikipedia.org/wiki/ART_Grand_Prix")} at the{" "}
        {wikiLink("Monaco", "https://en.wikipedia.org/wiki/Circuit_de_Monaco")} round of the{" "}
        {wikiLink("2009 GP2 Series", "https://en.wikipedia.org/wiki/2009_GP2_Series")}
      </figcaption>
    </figure>

    <p>
      Hülkenberg made his {wikiLink("GP2 Asia Series", "https://en.wikipedia.org/wiki/GP2_Asia_Series")} début for the{" "}
      {wikiLink("ART Grand Prix", "https://en.wikipedia.org/wiki/ART_Grand_Prix")} team at the third round of the{" "}
      {wikiLink("2008–09 GP2 Asia Series", "https://en.wikipedia.org/wiki/2008–09_GP2_Asia_Series")} in{" "}
      {wikiLink("Bahrain", "https://en.wikipedia.org/wiki/Bahrain_International_Circuit")}, where he took{" "}
      pole position at his first attempt. He finished both races in fourth place, sitting seventh in the championship.
      At his second round in {wikiLink("Qatar", "https://en.wikipedia.org/wiki/Losail_International_Circuit")}, Hülkenberg
      became the first night race pole-sitter and winner under lights, finishing thirteen seconds ahead of{" "}
      {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")}. He also placed third in the sprint race,
      tallying 27 points from four races to finish sixth in the championship.
    </p>

    <p>
      Hülkenberg continued with ART in the{" "}
      {wikiLink("2009 GP2 Series", "https://en.wikipedia.org/wiki/2009_GP2_Series")}, partnered by{" "}
      {wikiLink("Pastor Maldonado", "https://en.wikipedia.org/wiki/Pastor_Maldonado")}. He won his home feature race at the{" "}
      {wikiLink("Nürburgring", "https://en.wikipedia.org/wiki/N%C3%BCrburgring")}, then won the sprint from eighth due to
      the reversed grid, becoming the first driver to do the weekend double since{" "}
      {wikiLink("Giorgio Pantano", "https://en.wikipedia.org/wiki/Giorgio_Pantano")} in{" "}
      {wikiLink("Monza", "https://en.wikipedia.org/wiki/Autodromo_Nazionale_Monza")} (2006). He matched{" "}
      {wikiLink("Nelson Piquet Jr.", "https://en.wikipedia.org/wiki/Nelson_Piquet_Jr.")}'s sweep with pole, both wins, and
      fastest laps.
    </p>

    <p>
      He clinched the title with two races to spare at Monza after finishing third behind{" "}
      {wikiLink("Luiz Razia", "https://en.wikipedia.org/wiki/Luiz_Razia")} and{" "}
      {wikiLink("Lucas di Grassi", "https://en.wikipedia.org/wiki/Lucas_di_Grassi")}. Hülkenberg became the third rookie GP2
      champion (after{" "}
      {wikiLink("Nico Rosberg", "https://en.wikipedia.org/wiki/Nico_Rosberg")} and{" "}
      {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")}), and second to win both the GP3/F3 and
      GP2/F2 titles in back-to-back years.
    </p>

    <p>
      A fifth victory followed at the{" "}
      {wikiLink("Autódromo Internacional do Algarve", "https://en.wikipedia.org/wiki/Algarve_International_Circuit")},
      pushing him past the 100-point mark. He won the title by 25 points over{" "}
      {wikiLink("Vitaly Petrov", "https://en.wikipedia.org/wiki/Vitaly_Petrov")}, and ended the season 64 points ahead of
      teammate Maldonado—who would later secure a{" "}
      {wikiLink("Williams", "https://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering")} Formula One seat in 2011.
    </p>

    <div className="clear-both" />


</>
);

export default f1Career;
