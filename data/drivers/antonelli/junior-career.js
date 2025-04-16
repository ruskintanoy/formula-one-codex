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
    {/* Karting (2014–2021) */}
    <section id="karting" className="space-y-4 scroll-mt-24" />
    <h3 className="text-2xl font-bold text-red-600 mb-2">
      Karting (2014–2021)
    </h3>

    {/* 2014–2017: Career beginnings and international debut */}
    <section id="career-beginnings" className="space-y-4 scroll-mt-24" />
    <h4 className="text-lg font-semibold text-red-400 mb-1">
      2014–2017: Career beginnings and international debut
    </h4>

    <p>
      Antonelli started {wikiLink("kart racing", "https://en.wikipedia.org/wiki/Kart_racing")} at the age of seven and won championships in several categories of the discipline.
      After attending a {wikiLink("summer camp", "https://en.wikipedia.org/wiki/Summer_camp#Sports_camps")} with the{" "}
      {wikiLink("Automobile Club d'Italia", "https://en.wikipedia.org/wiki/Automobile_Club_d%27Italia")} in 2014, Antonelli was{" "}
      {wikiLink("scouted", "https://en.wikipedia.org/wiki/Scout_(sport)")} by{" "}
      {wikiLink("Giovanni Minardi", "https://en.wikipedia.org/wiki/Giancarlo_Minardi#Later_life")}, who signed him to <i>Minardi Management</i>.
      He won his first title at the 2015 Trofeo Easykart Italia in the 60{" "}
      {wikiLink("cc", "https://en.wikipedia.org/wiki/Engine_displacement")} class, progressing to win the Easykart International Grand Final that year from twenty-second on the grid.
      Aged nine, he also placed thirty-first in the{" "}
      {wikiLink("WSK Final Cup", "https://en.wikipedia.org/wiki/WSK_Final_Cup")} in 60 Mini.
      Antonelli entered several{" "}
      {wikiLink("major competitions", "https://en.wikipedia.org/wiki/List_of_kart_racing_championships")} in 2016, achieving top-three finishes in the Italian Cup and Trofeo delle Industrie, as well as the{" "}
      {wikiLink("WSK Super Master Series", "https://en.wikipedia.org/wiki/WSK_Super_Master_Series")} in 2017.
      He won the third round of the{" "}
      {wikiLink("Italian Karting Championship", "https://en.wikipedia.org/wiki/Italian_Karting_Championship")} that year at{" "}
      {wikiLink("Battipaglia", "https://en.wikipedia.org/wiki/Battipaglia")}.
    </p>

    <div className="clear-both" />

    {/* 2018–2019: International success as a Mercedes Junior */}
    <section id="mercedes-junior" className="space-y-4 scroll-mt-24" />
    <h4 className="text-lg font-semibold text-red-400 mb-1">
      2018–2019: International success as a Mercedes Junior
    </h4>

    <p>
      Signing to the{" "}
      {wikiLink("Mercedes Junior Team", "https://en.wikipedia.org/wiki/Mercedes_Junior_Team")} in 2018, Antonelli won the{" "}
      {wikiLink("WSK Champions Cup", "https://en.wikipedia.org/wiki/WSK_Champions_Cup")},{" "}
      {wikiLink("South Garda Winter Cup", "https://en.wikipedia.org/wiki/South_Garda_Winter_Cup")}, and{" "}
      {wikiLink("ROK Cup International Final", "https://en.wikipedia.org/wiki/ROK_Cup_International_Final")} in the Mini class that year,
      as well as finishing runner-up in the Italian Championship.
    </p>

    <p>
      Antonelli progressed to{" "}
      {wikiLink("OK-Junior", "https://en.wikipedia.org/wiki/OK-Junior")}—the premier under-15 international{" "}
      {wikiLink("direct-drive", "https://en.wikipedia.org/wiki/Direct-drive")} karting category—in 2019, winning the{" "}
      {wikiLink("South Garda Winter Cup", "https://en.wikipedia.org/wiki/South_Garda_Winter_Cup")},{" "}
      {wikiLink("WSK Super Master Series", "https://en.wikipedia.org/wiki/WSK_Super_Master_Series")},{" "}
      {wikiLink("WSK Euro Series", "https://en.wikipedia.org/wiki/WSK_Euro_Series")},{" "}
      {wikiLink("WSK Open Cup", "https://en.wikipedia.org/wiki/WSK_Open_Cup")}, and{" "}
      {wikiLink("WSK Final Cup", "https://en.wikipedia.org/wiki/WSK_Final_Cup")}—all with the{" "}
      {wikiLink("Rosberg Racing Academy", "https://en.wikipedia.org/wiki/Nico_Rosberg")}.
    </p>

    <p>
      He entered his first{" "}
      {wikiLink("Karting European Championship", "https://en.wikipedia.org/wiki/Karting_European_Championship")} and{" "}
      {wikiLink("Karting World Championship", "https://en.wikipedia.org/wiki/Karting_World_Championship")} that year,
      finishing runner-up to{" "}
      {wikiLink("Marcus Amand", "https://en.wikipedia.org/wiki/Marcus_Amand")} at the former and fifth at the latter.
    </p>

    <div className="clear-both" />

    {/* 2020–2021: Dominance in senior classes */}
    <section id="senior-karting" className="space-y-4 scroll-mt-24"></section>
    <h4 className="text-lg font-semibold text-red-400 mb-1">
      2020–2021: Dominance in senior classes
    </h4>

    <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/6/6d/Andrea_Kimi_Antonelli_Karting_European_Championship_2021.jpg"
        alt="Antonelli leading the final round of the 2021 OK Karting European Championship at Zuera"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Antonelli <i>(centre)</i> dominated the{" "}
        {wikiLink("OK European Championship", "https://en.wikipedia.org/wiki/Karting_European_Championship#Primary_OK_class_(1972–present)")} in 2021, winning five of eight rounds.
      </figcaption>
    </figure>

    <p>
      In 2020, Antonelli progressed to the senior direct-drive{" "}
      {wikiLink("OK class", "https://en.wikipedia.org/wiki/Original_Kart")}, aged 13. Amongst finishing third at the{" "}
      {wikiLink("South Garda Winter Cup", "https://en.wikipedia.org/wiki/South_Garda_Karting")}, and runner-up to{" "}
      {wikiLink("Nikita Bedrin", "https://en.wikipedia.org/wiki/Nikita_Bedrin")} at the{" "}
      {wikiLink("WSK Super Master Series", "https://en.wikipedia.org/wiki/WSK_Super_Master_Series")}, he won the{" "}
      {wikiLink("European Championship", "https://en.wikipedia.org/wiki/Karting_European_Championship")} on his senior class debut aged 14, as well as the{" "}
      {wikiLink("WSK Euro Series", "https://en.wikipedia.org/wiki/WSK_Euro_Series")}, all with{" "}
      {wikiLink("Kart Republic", "https://www.kartrepublic.com/")}.
    </p>

    <p>
      Antonelli retired from the final of the{" "}
      {wikiLink("Karting World Championship", "https://en.wikipedia.org/wiki/Karting_World_Championship")} at{" "}
      {wikiLink("Portimão", "https://en.wikipedia.org/wiki/Algarve_International_Circuit")} with an injury; he collided with the stationary kart of{" "}
      {wikiLink("Maya Weug", "https://en.wikipedia.org/wiki/Maya_Weug")} in wet-weather conditions, suffering a broken left{" "}
      {wikiLink("tibia", "https://en.wikipedia.org/wiki/Tibia")} and{" "}
      {wikiLink("metatarsus", "https://en.wikipedia.org/wiki/Metatarsus")}. For his efforts in 2020, he was named the{" "}
      <i>FIA Karting Rookie of the Year</i> by the{" "}
      {wikiLink("CIK-FIA", "https://en.wikipedia.org/wiki/CIK-FIA")}.
    </p>

    <p>
      Returning for the 2021 season, Antonelli moved to the premier{" "}
      {wikiLink("KZ class", "https://en.wikipedia.org/wiki/KZ_(karting)")} gearbox category. Bidding to become the youngest-ever{" "}
      {wikiLink("KZ World Champion", "https://en.wikipedia.org/wiki/Karting_World_Championship#125_Gearbox_FIA_Karting_world_champions_and_World_Cup_winners")} — a record held by{" "}
      {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} since 2013 — he finished fifteenth after topping qualifying practice.
    </p>

    <p>
      He successfully defended his{" "}
      {wikiLink("OK European Championship", "https://en.wikipedia.org/wiki/Karting_European_Championship")} title, dominating the season with five wins from eight races, and finished runner-up to{" "}
      {wikiLink("Rafael Câmara", "https://en.wikipedia.org/wiki/Rafael_Câmara")} at both the{" "}
      {wikiLink("WSK Champions Cup", "https://en.wikipedia.org/wiki/WSK_Champions_Cup")} and{" "}
      {wikiLink("WSK Super Master Series", "https://en.wikipedia.org/wiki/WSK_Super_Master_Series")}.
    </p>

    <p>
      Upon his graduation to junior formulae, <i>Vroomkart</i> opined that his karting career "already [foretold] of a classic anthology of a Champion".
    </p>

    <div className="clear-both" />

    {/* Formula 4 (2021–2022) */}
    <section id="formula-4" className="space-y-6 scroll-mt-24"></section>
    <h3 className="text-2xl font-bold text-red-600 mb-2">Formula 4 (2021–2022)</h3>

    {/* 2021: Junior formulae debut */}
    <section id="f4-2021" className="space-y-4 scroll-mt-24"></section>
      <h4 className="text-lg font-semibold text-red-400 mb-1">2021: Junior formulae debut</h4>

      <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/F4_Italy_2021_Spielberg_Nr._99_Antonelli.jpg/220px-F4_Italy_2021_Spielberg_Nr._99_Antonelli.jpg"
          alt="Antonelli driving in the 2021 Italian F4 Championship at the Red Bull Ring"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          Antonelli debuted in the <a href="https://en.wikipedia.org/wiki/2021_Italian_F4_Championship" target="_blank" rel="noreferrer" className="text-red-400 hover:underline">2021 Italian F4 Championship</a> at the <a href="https://en.wikipedia.org/wiki/Red_Bull_Ring" target="_blank" rel="noreferrer" className="text-red-400 hover:underline">Red Bull Ring</a>.
        </figcaption>
      </figure>

      <p>
        Three weeks after he turned 15, Antonelli made his <a href="https://en.wikipedia.org/wiki/Junior_formulae" target="_blank" rel="noreferrer" className="text-red-400 hover:underline">junior formulae</a> debut in the fifth round of the <a href="https://en.wikipedia.org/wiki/2021_Italian_F4_Championship" target="_blank" rel="noreferrer" className="text-red-400 hover:underline">2021 Italian F4 Championship</a>, driving for <a href="https://en.wikipedia.org/wiki/Prema_Powerteam" target="_blank" rel="noreferrer" className="text-red-400 hover:underline">Prema</a> at the <a href="https://en.wikipedia.org/wiki/Red_Bull_Ring" target="_blank" rel="noreferrer" className="text-red-400 hover:underline">Red Bull Ring</a>.
      </p>

      <p>
        He finished as the highest-placed rookie in his first race and scored four points across the weekend. Antonelli earned further points in the next round at <a href="https://en.wikipedia.org/wiki/Mugello_Circuit" target="_blank" rel="noreferrer" className="text-red-400 hover:underline">Mugello</a>, before a breakout performance at the season finale in <a href="https://en.wikipedia.org/wiki/Monza_Circuit" target="_blank" rel="noreferrer" className="text-red-400 hover:underline">Monza</a>.
      </p>

      <p>
        He claimed second in race one following a close battle with champion <a href="https://en.wikipedia.org/wiki/Oliver_Bearman" target="_blank" rel="noreferrer" className="text-red-400 hover:underline">Oliver Bearman</a>, and secured podiums in both remaining races. Antonelli ended the season tenth overall—despite contesting only a few rounds—and placed fourth in the rookies' championship with four rookie wins.
      </p>

      <div className="clear-both" />

      {/* 2022: Maiden championships and gold medal */}
      <section id="2022" className="space-y-4 scroll-mt-24"></section>
      <h4 className="text-lg font-semibold text-red-400 mb-1">
        2022: Maiden championships and gold medal
      </h4>

      {/* F4 UAE */}
      <section id="f4-uae" className="space-y-4 scroll-mt-24"></section>
      <h5 className="text-base font-semibold text-red-300 mb-1">F4 UAE</h5>

      <p>
        In preparation for his primary 2022 campaigns, Antonelli contested select rounds of the{" "}
        {wikiLink("F4 UAE Championship", "https://en.wikipedia.org/wiki/2022_Formula_4_UAE_Championship")}. He finished third after qualifying on pole
        for the{" "}
        <i>Trophy Round</i>, a{" "}
        {wikiLink("non-championship", "https://en.wikipedia.org/wiki/Glossary_of_motorsport_terms#N")} event held in support of the{" "}
        {wikiLink("2021 Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2021_Abu_Dhabi_Grand_Prix")}.
      </p>

      <p>
        Initially set to only contest Round 3 with{" "}
        {wikiLink("Abu Dhabi Racing by Prema", "https://en.wikipedia.org/wiki/Prema_Racing")}, Antonelli replaced{" "}
        {wikiLink("Rafael Câmara", "https://en.wikipedia.org/wiki/Rafael_Câmara")} in the season opener due to a{" "}
        {wikiLink("COVID-19", "https://en.wikipedia.org/wiki/COVID-19")} diagnosis.
      </p>

      <p>
        He secured three consecutive on-track victories, though a post-race penalty demoted him to third in the final race of Round 1. He also finished
        second in Race 4, leading the championship after the opening weekend. As planned, Antonelli did not contest Round 2.
      </p>

      <p>
        He returned in Round 3 at the{" "}
        {wikiLink("Dubai Autodrome", "https://en.wikipedia.org/wiki/Dubai_Autodrome")}, achieving another podium finish but was again penalised from
        victory. Having competed in only two of the five rounds, Antonelli ended the championship eighth overall.
      </p>

      <div className="clear-both" />

      {/* Italian F4 */}
      <section id="italian-f4" className="space-y-4 scroll-mt-24" />
      <h5 className="text-base font-semibold text-red-300 mb-1">Italian F4</h5>

      <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/4/43/F4_Germany_2022_Spa_Podium_Race_1_%281%29.jpg"
          alt="Antonelli lifting his trophy after winning at Spa-Francorchamps in the 2022 ADAC F4 Championship, between Rafael Câmara and Charlie Wurz"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          Antonelli won both the{" "}
          {wikiLink("Italian F4", "https://en.wikipedia.org/wiki/2022_Italian_F4_Championship")} and{" "}
          {wikiLink("ADAC F4", "https://en.wikipedia.org/wiki/2022_ADAC_Formula_4_Championship")} titles in 2022,
          as well as a{" "}
          {wikiLink("gold medal", "https://en.wikipedia.org/wiki/Gold_medal")} at the{" "}
          {wikiLink("FIA Motorsport Games", "https://en.wikipedia.org/wiki/2022_FIA_Motorsport_Games_Formula_4_Cup")}.
        </figcaption>
      </figure>

      <p>
        In {wikiLink("2022", "https://en.wikipedia.org/wiki/2022_Italian_F4_Championship")}, Antonelli remained with{" "}
        {wikiLink("Prema", "https://en.wikipedia.org/wiki/Prema_Racing")} in Italian F4, also co-signed by the{" "}
        {wikiLink("Automobile Club d'Italia", "https://en.wikipedia.org/wiki/Automobile_Club_d%27Italia")} as a member of <i>ACI Team Italia</i> by virtue of winning the <i>Supercorso Federale</i> in November 2021.
        Antonelli retired from the lead of the season opener at{" "}
        {wikiLink("Imola", "https://en.wikipedia.org/wiki/Imola_Circuit")} with a gearbox issue, having started on pole position.
        He received front wing damage after clipping a kerb in race two, and was penalised for a collision with teammate{" "}
        {wikiLink("James Wharton", "https://en.wikipedia.org/wiki/James_Wharton_(racing_driver)")} in the final race which demoted him from fourth to tenth.
      </p>

      <p>
        His fortunes changed with two wins in the next round at{" "}
        {wikiLink("Misano", "https://en.wikipedia.org/wiki/Misano_World_Circuit_Marco_Simoncelli")}, followed by six consecutive victories at{" "}
        {wikiLink("Spa-Francorchamps", "https://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps")} and{" "}
        {wikiLink("Vallelunga", "https://en.wikipedia.org/wiki/Vallelunga_Circuit")} which propelled him to lead the standings ahead of{" "}
        {wikiLink("Rafael Câmara", "https://en.wikipedia.org/wiki/Rafael_C%C3%A2mara")}.
      </p>

      <p>
        Further wins at the{" "}
        {wikiLink("Red Bull Ring", "https://en.wikipedia.org/wiki/Red_Bull_Ring")} and{" "}
        {wikiLink("Monza", "https://en.wikipedia.org/wiki/Monza_Circuit")} consolidated his championship advantage,
        and he clinched the title by winning the first race at{" "}
        {wikiLink("Mugello", "https://en.wikipedia.org/wiki/Mugello_Circuit")}.
        He won the remaining two races of the season, having secured a then-record thirteen victories.
      </p>

      <div className="clear-both" />

      {/* ADAC Formula 4 */}
      <section id="adac-f4" className="space-y-4 scroll-mt-24" />
      <h5 className="text-base font-semibold text-red-300 mb-1">ADAC F4</h5>

      <p>
        In parallel with his Italian F4 programme, Antonelli also competed in the{" "}
        {wikiLink("ADAC Formula 4 Championship", "https://en.wikipedia.org/wiki/2022_ADAC_Formula_4_Championship")} with{" "}
        {wikiLink("Prema", "https://en.wikipedia.org/wiki/Prema_Racing")}. He seized two victories in the first round at{" "}
        {wikiLink("Spa-Francorchamps", "https://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps")}, before taking all available
        wins, pole positions and fastest laps at the{" "}
        {wikiLink("Hockenheimring", "https://en.wikipedia.org/wiki/Hockenheimring")}.
      </p>

      <p>
        At the third round in{" "}
        {wikiLink("Zandvoort", "https://en.wikipedia.org/wiki/Circuit_Zandvoort")}, Antonelli added further consecutive wins in the
        opening two races before missing out on another perfect weekend by 0.058 seconds in the{" "}
        {wikiLink("reverse-grid", "https://en.wikipedia.org/wiki/Glossary_of_motorsport_terms#R")} final race, finishing second to{" "}
        {wikiLink("Conrad Laursen", "https://en.wikipedia.org/wiki/Conrad_Laursen")} in a{" "}
        {wikiLink("photo finish", "https://en.wikipedia.org/wiki/Photo_finish")}.
      </p>

      <p>
        After missing the penultimate event at the{" "}
        {wikiLink("Lausitzring", "https://en.wikipedia.org/wiki/Lausitzring")} with Prema, Antonelli clinched the championship with one
        race to spare, having taken victory in the first two races during a rain-affected final round at the{" "}
        {wikiLink("Nürburgring", "https://en.wikipedia.org/wiki/N%C3%BCrburgring")}.
      </p>

      <div className="clear-both" />

      {/* FIA Motorsport Games */} 
      <section id="fia-motorsport-games" className="space-y-4 scroll-mt-24" />
      <h5 className="text-base font-semibold text-red-300 mb-1">
        FIA Motorsport Games
      </h5>

      <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/thumb/1/19/2022_FIA_Motorsport_Games_F4_Cup_Podium.jpeg/250px-2022_FIA_Motorsport_Games_F4_Cup_Podium.jpeg"
          alt="Antonelli wearing his gold medal on the podium of the 2022 FIA Motorsport Games alongside Manuel Espírito Santo and Bruno del Pino, with the Italian flag draped over him"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          Antonelli won a{" "}
          {wikiLink("gold medal", "https://en.wikipedia.org/wiki/Gold_medal")} in the{" "}
          {wikiLink("Formula 4 Cup", "https://en.wikipedia.org/wiki/2022_FIA_Motorsport_Games_Formula_4_Cup")} discipline of the{" "}
          {wikiLink("2022 FIA Motorsport Games", "https://en.wikipedia.org/wiki/2022_FIA_Motorsport_Games")} with a broken left wrist, representing{" "}
          {wikiLink("Team Italy", "https://en.wikipedia.org/wiki/Athletes_at_the_2022_FIA_Motorsport_Games#Team_Italy")}.
        </figcaption>
      </figure>

      <p>
        Following his titles in Italian and ADAC F4, Antonelli represented{" "}
        {wikiLink("Team Italy", "https://en.wikipedia.org/wiki/Athletes_at_the_2022_FIA_Motorsport_Games#Team_Italy")} in the{" "}
        {wikiLink("Formula 4 Cup", "https://en.wikipedia.org/wiki/2022_FIA_Motorsport_Games_Formula_4_Cup")} discipline of the biennial{" "}
        {wikiLink("FIA Motorsport Games", "https://en.wikipedia.org/wiki/2022_FIA_Motorsport_Games")} at{" "}
        {wikiLink("Paul Ricard", "https://en.wikipedia.org/wiki/Circuit_Paul_Ricard")}. After taking pole position, he won both the qualifying and main races whilst driving with a broken left wrist — owing to a collision near the end of qualifying — to take the{" "}
        {wikiLink("gold medal", "https://en.wikipedia.org/wiki/Gold_medal")} and secure Italy's victory in the{" "}
        {wikiLink("overall medal table", "https://en.wikipedia.org/wiki/2022_FIA_Motorsport_Games#Medal_table")}.
      </p>

      <p>
        He subsequently received a €10,000 grant from chassis manufacturer{" "}
        {wikiLink("KC Motorgroup", "https://en.wikipedia.org/wiki/KC_Motorgroup")} to support his 2023 campaigns. Following the win, Antonelli stated that he experienced "a lot of pain" and "[drove] not properly", adding that he had to take{" "}
        {wikiLink("painkillers", "https://en.wikipedia.org/wiki/Painkiller")} to continue.
      </p>

      <p>
        Antonelli graduated{" "}
        {wikiLink("F4", "https://en.wikipedia.org/wiki/Formula_4")} with 26 wins, 24 pole positions and 37 podium finishes in 57 appearances, becoming the second-most successful driver in the history of the discipline.
      </p>

      <div className="clear-both" />

      {/* Formula Three (2023) */}
      <section id="formula-3" className="space-y-6 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">Formula Three (2023)</h3>

      {/* Formula Regional Middle East */}
      <section id="freca-middle-east" className="space-y-4 scroll-mt-24"></section>
      <h4 className="text-lg font-semibold text-red-400 mb-1">Formula Regional Middle East</h4>

      <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/FREC_2023_Spielberg_Nr._12_%282%29_Antonelli.jpg/250px-FREC_2023_Spielberg_Nr._12_%282%29_Antonelli.jpg"
          alt="Antonelli driving the Tatuus F3 T-318 at the Red Bull Ring in the 2023 Formula Regional European Championship"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          Antonelli won both the{" "}
          {wikiLink("Formula Regional European", "https://en.wikipedia.org/wiki/2023_Formula_Regional_European_Championship")} and{" "}
          {wikiLink("Middle East", "https://en.wikipedia.org/wiki/2023_Formula_Regional_Middle_East_Championship")} Championships in 2023,
          driving for {wikiLink("Prema", "https://en.wikipedia.org/wiki/Prema_Racing")} and{" "}
          {wikiLink("Mumbai Falcons", "https://en.wikipedia.org/wiki/Mumbai_Falcons")}, respectively.
        </figcaption>
      </figure>

      <p>
        Prior to his main 2023 campaign, Antonelli contested the inaugural {wikiLink("F3", "https://en.wikipedia.org/wiki/Formula_Three")}-level{" "}
        {wikiLink("Formula Regional Middle East Championship", "https://en.wikipedia.org/wiki/2023_Formula_Regional_Middle_East_Championship")} with{" "}
        {wikiLink("Mumbai Falcons", "https://en.wikipedia.org/wiki/Mumbai_Falcons")}. He opened the season with a trio of second-placed finishes across
        the opening two rounds, propelling him to an early championship lead.
      </p>

      <p>
        He consolidated his advantage with his maiden three {wikiLink("Formula Regional", "https://en.wikipedia.org/wiki/Formula_Regional")} wins at the
        third and fourth rounds in {wikiLink("Kuwait", "https://en.wikipedia.org/wiki/Kuwait_Motor_Town")} and{" "}
        {wikiLink("Dubai", "https://en.wikipedia.org/wiki/Dubai_Autodrome")}, respectively. Antonelli led title rival{" "}
        {wikiLink("Taylor Barnard", "https://en.wikipedia.org/wiki/Taylor_Barnard")} of{" "}
        {wikiLink("PHM", "https://en.wikipedia.org/wiki/PHM_Racing")} by 37 points going into the final round at{" "}
        {wikiLink("Yas Marina", "https://en.wikipedia.org/wiki/Yas_Marina_Circuit")}, where he received a penalty for colliding with Barnard whilst
        battling for the lead in race one.
      </p>

      <p>
        Antonelli ultimately secured the title with one race to go, and took his seventh podium of the season in the final race.
      </p>

      <div className="clear-both" />

      {/* Formula Regional European */}
      <section id="formula-regional-european" className="space-y-4 scroll-mt-24"></section>
      <h4 className="text-lg font-semibold text-red-400 mb-1">
        Formula Regional European
      </h4>

      <p>
        Antonelli progressed to the{" "}
        {wikiLink("Formula Regional European Championship", "https://en.wikipedia.org/wiki/Formula_Regional_European_Championship")} in{" "}
        {wikiLink("2023", "https://en.wikipedia.org/wiki/2023_Formula_Regional_European_Championship")}, remaining with{" "}
        {wikiLink("Prema", "https://en.wikipedia.org/wiki/Prema_Racing")} alongside{" "}
        {wikiLink("Lorenzo Fluxá", "https://en.wikipedia.org/wiki/Lorenzo_Flux%C3%A1")}, as well as F4 and karting rival{" "}
        {wikiLink("Rafael Câmara", "https://en.wikipedia.org/wiki/Rafael_C%C3%A2mara")}. Antonelli later expressed that he was still "lacking a bit of experience", so progression to{" "}
        {wikiLink("FIA Formula 3", "https://en.wikipedia.org/wiki/FIA_Formula_3")} was "a bit early for [him]".
        Prior to the season, Marcus Simmons of <i>{wikiLink("Autosport", "https://en.wikipedia.org/wiki/Autosport")}</i> compared the intrigue surrounding his campaign to the{" "}
        {wikiLink("Formula Three", "https://en.wikipedia.org/wiki/Formula_Three")} debuts of{" "}
        {wikiLink("Ayrton Senna", "https://en.wikipedia.org/wiki/Ayrton_Senna")},{" "}
        {wikiLink("Mika Häkkinen", "https://en.wikipedia.org/wiki/Mika_H%C3%A4kkinen")}, and{" "}
        {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")}, whilst Salvo Sardina of{" "}
        <i>{wikiLink("La Gazzetta dello Sport", "https://en.wikipedia.org/wiki/La_Gazzetta_dello_Sport")}</i> described him as a "predestinato" (lit. '{
          wikiLink("predestined", "https://en.wikipedia.org/wiki/Predestined")
        }').
      </p>

      <p>
        His season started with a second-place on debut at{" "}
        {wikiLink("Imola", "https://en.wikipedia.org/wiki/Imola_Circuit")}, repeating this feat in both races at{" "}
        {wikiLink("Barcelona-Catalunya", "https://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya")}. A gear selection issue denied his first victory of the season at the{" "}
        {wikiLink("Hungaroring", "https://en.wikipedia.org/wiki/Hungaroring")}, before finally clinching victory in the second race at{" "}
        {wikiLink("Spa-Francorchamps", "https://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps")}, which was marred by the fatal accident of{" "}
        {wikiLink("Dilano van 't Hoff", "https://en.wikipedia.org/wiki/Dilano_van_%27t_Hoff")}.
      </p>

      <p>
        Additional wins from pole position at{" "}
        {wikiLink("Mugello", "https://en.wikipedia.org/wiki/Mugello_Circuit")} and{" "}
        {wikiLink("Paul Ricard", "https://en.wikipedia.org/wiki/Circuit_Paul_Ricard")} followed for Antonelli, who became the championship leader going into the summer break, ahead of{" "}
        {wikiLink("Martinius Stenshorne", "https://en.wikipedia.org/wiki/Martinius_Stenshorne")}. He earned another podium in race two at the{" "}
        {wikiLink("Red Bull Ring", "https://en.wikipedia.org/wiki/Red_Bull_Ring")} following a penalty for Stenshorne, before achieving two on-track victories at{" "}
        {wikiLink("Monza", "https://en.wikipedia.org/wiki/Monza_Circuit")}; he was stripped of the win in race one for illegal use of the{" "}
        {wikiLink("push-to-pass", "https://en.wikipedia.org/wiki/Push-to-pass")} system.
      </p>

      <p>
        Upon his dominant victory in the second race at{" "}
        {wikiLink("Zandvoort", "https://en.wikipedia.org/wiki/Circuit_Zandvoort")} — winning by over 12 seconds in mixed-weather conditions after starting eighth — Antonelli clinched the championship.
        He later described the win as "one of [his] best races". Antonelli dedicated his title to van 't Hoff, and was voted driver of the season by the team principals.
      </p>

      <p>
        He ended the season with five wins from 11 podiums and four pole positions, finishing 39 points ahead of Stenshorne and 61 points ahead of{" "}
        {wikiLink("Tim Tramnitz", "https://en.wikipedia.org/wiki/Tim_Tramnitz")}. <i>Formula Scout</i> ranked Antonelli as the best driver in junior formulae throughout 2023.
      </p>

      <div className="clear-both" />

      {/* FIA Formula 2 (2024) */}
      <section id="fia-f2" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">FIA Formula 2 (2024)</h3>

      <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/FIA_F2_Austria_2024_Nr._4_Antonelli_%28cropped%29.jpg/250px-FIA_F2_Austria_2024_Nr._4_Antonelli_%28cropped%29.jpg"
          alt="Antonelli qualifying for the 2024 Spielberg Formula 2 round"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          Antonelli (pictured in{" "}
          {wikiLink("Spielberg", "https://en.wikipedia.org/wiki/2024_Spielberg_Formula_2_round")})
          {" "}progressed to{" "}
          {wikiLink("FIA Formula 2", "https://en.wikipedia.org/wiki/FIA_Formula_2")}
          {" "}with{" "}
          {wikiLink("Prema", "https://en.wikipedia.org/wiki/Prema_Racing")} in{" "}
          {wikiLink("2024", "https://en.wikipedia.org/wiki/2024_Formula_2_Championship")}.
        </figcaption>
      </figure>

      <p>
        Antonelli bypassed the international{" "}
        {wikiLink("FIA Formula 3 Championship", "https://en.wikipedia.org/wiki/FIA_Formula_3_Championship")},
        progressing directly to{" "}
        {wikiLink("FIA Formula 2", "https://en.wikipedia.org/wiki/FIA_Formula_2")} in{" "}
        {wikiLink("2024", "https://en.wikipedia.org/wiki/2024_Formula_2_Championship")} with{" "}
        {wikiLink("Prema", "https://en.wikipedia.org/wiki/Prema_Racing")}, alongside{" "}
        {wikiLink("Ferrari Driver Academy", "https://en.wikipedia.org/wiki/Ferrari_Driver_Academy")} member{" "}
        {wikiLink("Oliver Bearman", "https://en.wikipedia.org/wiki/Oliver_Bearman")}.
      </p>

      <p>
        Ahead of the season, Antonelli remarked that he "[did not] want to set any expectation [sic]" amidst early
        rumours of his {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} prospects for{" "}
        {wikiLink("2025", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")}.
      </p>

      <p>
        Prema struggled to adapt to{" "}
        {wikiLink("new regulations", "https://en.wikipedia.org/wiki/Dallara_F2_2024")} utilising{" "}
        {wikiLink("ground effect", "https://en.wikipedia.org/wiki/Ground_effect_(cars)")}, with Antonelli claiming a single point at the
        season-opener in{" "}
        {wikiLink("Sakhir", "https://en.wikipedia.org/wiki/2024_Sakhir_Formula_2_round")} after finishing fourteenth in the{" "}
        {wikiLink("sprint race", "https://en.wikipedia.org/wiki/FIA_Formula_2_Championship#Race_weekend")} and tenth in the{" "}
        {wikiLink("feature", "https://en.wikipedia.org/wiki/FIA_Formula_2_Championship#Race_weekend")}, albeit ahead of Bearman in both races.
      </p>

      <p>
        He secured a pair of sixth-placed finishes the following round in{" "}
        {wikiLink("Jeddah", "https://en.wikipedia.org/wiki/2024_Jeddah_Formula_2_round")}. After qualifying second in{" "}
        {wikiLink("Melbourne", "https://en.wikipedia.org/wiki/2024_Melbourne_Formula_2_round")}, he spun into the gravel
        whilst making up places in the{" "}
        {wikiLink("reverse-grid", "https://en.wikipedia.org/wiki/Glossary_of_motorsport_terms#R")} sprint, before battling
        with{" "}
        {wikiLink("Dennis Hauger", "https://en.wikipedia.org/wiki/Dennis_Hauger")} for the lead of the feature, where he ultimately finished fourth.
      </p>

      <p>
        Antonelli again finished fourth in both the{" "}
        {wikiLink("Imola", "https://en.wikipedia.org/wiki/2024_Imola_Formula_2_round")} feature and{" "}
        {wikiLink("Monaco", "https://en.wikipedia.org/wiki/2024_Monte_Carlo_Formula_2_round")} sprint, ending the latter weekend
        seventh in the feature.
      </p>

      <p>
        After placing outside of the points in{" "}
        {wikiLink("Barcelona", "https://en.wikipedia.org/wiki/2024_Barcelona_Formula_2_round")} and{" "}
        {wikiLink("Spielberg", "https://en.wikipedia.org/wiki/2024_Spielberg_Formula_2_round")}, Antonelli sat ninth in the standings
        halfway through the season;{" "}
        {wikiLink("Toto Wolff", "https://en.wikipedia.org/wiki/Toto_Wolff")} commented that{" "}
        {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One")} were unfazed by his results and that
        "a champion needs to be thrown in the cold water".
      </p>

      <div className="clear-both" />

      <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/2024_FIA_Formula_2_Silverstone_%2854042418131%29_%28cropped%29.jpg/250px-2024_FIA_Formula_2_Silverstone_%2854042418131%29_%28cropped%29.jpg"
          alt="Antonelli leads the sprint race of the 2024 Silverstone Formula 2 round on extreme wet tyres"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          Antonelli took his maiden F2 victory at the rain-affected{" "}
          {wikiLink("Silverstone", "https://en.wikipedia.org/wiki/2024_Silverstone_Formula_2_round")} round.
        </figcaption>
      </figure>

      <p>
        Antonelli qualified tenth at {wikiLink("Silverstone", "https://en.wikipedia.org/wiki/2024_Silverstone_Formula_2_round")}, putting him on pole for the rain-affected sprint. After three{" "}
        {wikiLink("safety cars", "https://en.wikipedia.org/wiki/Safety_car")} and a{" "}
        {wikiLink("red flag", "https://en.wikipedia.org/wiki/Red_flag_(motorsport)")}, Antonelli secured his maiden win and podium in his eighth F2 round. He retired from the feature, following a first-lap collision with{" "}
        {wikiLink("Kush Maini", "https://en.wikipedia.org/wiki/Kush_Maini")}.
      </p>

      <p>
        In {wikiLink("Budapest", "https://en.wikipedia.org/wiki/2024_Budapest_Formula_2_round")}, a gamble on{" "}
        {wikiLink("option tyres", "https://en.wikipedia.org/wiki/Glossary_of_motorsport_terms#O")} saw him lead the majority of the sprint, but forced him to make an unscheduled{" "}
        {wikiLink("pit stop", "https://en.wikipedia.org/wiki/Pit_stop")} after a loss of tyre performance.
        The following day, Antonelli took his first feature race victory after starting seventh on the grid, elevating him to sixth in the standings.
      </p>

      <p>
        He finished sixth in the curtailed{" "}
        {wikiLink("Spa-Francorchamps", "https://en.wikipedia.org/wiki/2024_Spa-Francorchamps_Formula_2_round")} sprint after an award-winning overtake on{" "}
        {wikiLink("Franco Colapinto", "https://en.wikipedia.org/wiki/Franco_Colapinto")} into{" "}
        <i>{wikiLink("Eau Rouge", "https://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps#Eau_Rouge_and_Raidillon")}</i>, before finishing ninth in the feature following a slow pit stop.
        He then received a ten-place grid penalty—for Prema's usage of{" "}
        {wikiLink("dry ice", "https://en.wikipedia.org/wiki/Dry_ice")} as a{" "}
        {wikiLink("cooling agent", "https://en.wikipedia.org/wiki/Cooling_agent")}—which applied at the{" "}
        {wikiLink("Monza", "https://en.wikipedia.org/wiki/2024_Monza_Formula_2_round")} sprint, where he was involved in a multi-car collision.
        He placed fourth in the feature, following a contentious battle with teammate{" "}
        {wikiLink("Bearman", "https://en.wikipedia.org/wiki/Oliver_Bearman")}.
      </p>

      <p>
        Antonelli missed out on his maiden{" "}
        {wikiLink("pole position", "https://en.wikipedia.org/wiki/Pole_position")} by seventeen-thousandths of a second in{" "}
        {wikiLink("Baku", "https://en.wikipedia.org/wiki/2024_Baku_Formula_2_round")}, finishing seventh in the sprint and third in the feature, after contact with{" "}
        {wikiLink("Zane Maloney", "https://en.wikipedia.org/wiki/Zane_Maloney")}.
        He retired from both races in{" "}
        {wikiLink("Lusail", "https://en.wikipedia.org/wiki/2024_Lusail_Formula_2_round")}, subsequent to a collision with{" "}
        {wikiLink("Maini", "https://en.wikipedia.org/wiki/Kush_Maini")} in the sprint and{" "}
        {wikiLink("Richard Verschoor", "https://en.wikipedia.org/wiki/Richard_Verschoor")} in the feature—the latter released unsafely into his path in the{" "}
        {wikiLink("pit lane", "https://en.wikipedia.org/wiki/Pit_lane")}.
      </p>

      <p>
        Antonelli withdrew from the season-ending round at{" "}
        {wikiLink("Yas Marina", "https://en.wikipedia.org/wiki/2024_Yas_Island_Formula_2_round")} with illness,
        finishing the season sixth in the standings with two victories from three podiums.
      </p>

      <div className="clear-both" />

  </>
);

export default juniorCareer;
