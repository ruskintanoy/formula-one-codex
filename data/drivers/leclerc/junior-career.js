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
    <h3 className="text-2xl font-bold text-red-600 mb-2">
      Karting (2005–2013)
    </h3>

    {/* 2005–2009 Early Success */}
    <section id="early-success" className="space-y-4 scroll-mt-24"></section>
    <h4 className="text-lg font-semibold text-red-400 mb-1">
      2005–2009: Early success in national championships
    </h4>

    <p>
      Leclerc first began {wikiLink("karting", "https://en.wikipedia.org/wiki/Karting")} aged five and started racing at{" "}
      {wikiLink("Brignoles", "https://en.wikipedia.org/wiki/Brignoles")} — a{" "}
      {wikiLink("kart circuit", "https://en.wikipedia.org/wiki/Kart_circuit")} owned by{" "}
      {wikiLink("Jules Bianchi", "https://en.wikipedia.org/wiki/Jules_Bianchi")}'s father.
   
      He began his competitive career in 2005, winning the regional{" "}
      {wikiLink("PACA", "https://en.wikipedia.org/wiki/Provence-Alpes-C%C3%B4te_d%27Azur")} championship in the Mini class with 15 wins from 18 races, successfully defending the title in 2006.
    
      Leclerc advanced to Minime in 2007, winning the Trophée Claude Secq and finishing runner-up at the PACA championship. In 2008, he finished fifth in the Bridgestone Cup and runner-up in the French Championship, while also winning the PACA title once more.
   
      Progressing to the Cadet class in 2009, Leclerc won the French Championship and Bridgestone Cup, as well as the regional{" "}
      {wikiLink("Rhône-Alpes", "https://en.wikipedia.org/wiki/Rh%C3%B4ne-Alpes")} title. That same year, he partnered with{" "}
      {wikiLink("Richard Mille", "https://en.wikipedia.org/wiki/Richard_Mille")}, who supported him through the remainder of his karting career.
    </p>

    <div className="clear-both"></div>

    {/* 2010–2011: Progression to international series */}
    <section id="international-series" className="space-y-4 scroll-mt-24"></section>
    <h4 className="text-lg font-semibold text-red-400 mb-1">
      2010–2011: Progression to international series
    </h4>

    <p>
      Leclerc progressed to {wikiLink("international competition", "https://en.wikipedia.org/wiki/List_of_kart_racing_championships")} in 2010, entering the junior{" "}
      {wikiLink("KF3", "https://en.wikipedia.org/wiki/KF3")} class, where he became the youngest winner of the{" "}
      {wikiLink("CIK-FIA Monaco Kart Cup", "https://en.wikipedia.org/wiki/CIK-FIA_Monaco_Kart_Cup")} — his home event at the{" "}
      {wikiLink("Circuit de Monaco", "https://en.wikipedia.org/wiki/Circuit_de_Monaco")}.
    
      He finished 29th on his {wikiLink("Karting World Cup", "https://en.wikipedia.org/wiki/Karting_World_Cup")} debut, fifth in the inaugural{" "}
      {wikiLink("Karting Academy Trophy", "https://en.wikipedia.org/wiki/Karting_Academy_Trophy")}, and runner-up to{" "}
      {wikiLink("Pierre Gasly", "https://en.wikipedia.org/wiki/Pierre_Gasly")} in the French Championship.
  
      Leclerc was {wikiLink("scouted", "https://en.wikipedia.org/wiki/Scout_(sport)")} by{" "}
      {wikiLink("Nicolas Todt", "https://en.wikipedia.org/wiki/Nicolas_Todt")} in 2011, joining his{" "}
      <i>All Road Management</i> firm. Todt negotiated his move to{" "}
      {wikiLink("Intrepid", "https://en.wikipedia.org/wiki/Intrepid_Kart")} that year, where Leclerc won the World Cup at{" "}
      {wikiLink("Sarno", "https://en.wikipedia.org/wiki/Sarno")} — later describing it as "by far [his] best karting race ever".
    
      He also won the{" "}
      {wikiLink("CIK-FIA Karting Academy Trophy", "https://en.wikipedia.org/wiki/2011_CIK-FIA_Karting_Academy_Trophy")} and the{" "}
      {wikiLink("Masters of Paris-Bercy", "https://en.wikipedia.org/wiki/Masters_of_Paris-Bercy")}, and finished runner-up to{" "}
      {wikiLink("Nicklas Nielsen", "https://en.wikipedia.org/wiki/Nicklas_Nielsen")} in the{" "}
      {wikiLink("WSK Final Cup", "https://en.wikipedia.org/wiki/WSK_Final_Cup")}.
    </p>

    <div className="clear-both"></div>

    {/* 2012–2013: Senior titles with ART */}
    <section id="senior-art" className="space-y-4 scroll-mt-24"></section>
    <h4 className="text-lg font-semibold text-red-400 mb-1">2012–2013: Senior titles with ART</h4>

    <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="https://upload.wikimedia.org/wikipedia/en/9/9e/Charles_Leclerc_Max_Verstappen.png"
        alt="Leclerc leads Max Verstappen at the 2013 WSK Master Series at Castelletto"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Leclerc <i>(right)</i> won several senior titles with{" "}
        {wikiLink("ART Grand Prix", "https://en.wikipedia.org/wiki/ART_Grand_Prix")}, amidst a rivalry with{" "}
        {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} <i>(left)</i>.
      </figcaption>
    </figure>

    <p>
      Leclerc graduated to the senior {wikiLink("KF2", "https://en.wikipedia.org/wiki/KF2")} category in 2012 with the{" "}
      {wikiLink("factory-backed", "https://en.wikipedia.org/wiki/Factory-backed")}{" "}
      {wikiLink("ART Grand Prix", "https://en.wikipedia.org/wiki/ART_Grand_Prix")} team, winning the{" "}
      {wikiLink("WSK Euro Series", "https://en.wikipedia.org/wiki/WSK_Euro_Series")}; he was involved in an incident with{" "}
      {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} at the second round, which resulted in both drivers' disqualifications.
    
      He finished runner-up on his {wikiLink("Karting European Championship", "https://en.wikipedia.org/wiki/Karting_European_Championship")} debut amidst a title battle with Verstappen and{" "}
      {wikiLink("Ben Barnicoat", "https://en.wikipedia.org/wiki/Ben_Barnicoat")}, as well as at the under-18{" "}
      {wikiLink("Karting World Championship", "https://en.wikipedia.org/wiki/Karting_World_Championship")} by a single point.
    
      He achieved fifth-placed finishes in both the {wikiLink("World Cup", "https://en.wikipedia.org/wiki/Karting_World_Cup")} and{" "}
      {wikiLink("WSK Final Cup", "https://en.wikipedia.org/wiki/WSK_Final_Cup")}, and fourth at the{" "}
      {wikiLink("SKUSA SuperNationals", "https://en.wikipedia.org/wiki/SKUSA_SuperNationals")}.
    </p>

    <p>
      In 2013, Leclerc progressed to the {wikiLink("KZ", "https://en.wikipedia.org/wiki/KZ_(karting)")} senior {wikiLink("gearbox", "https://en.wikipedia.org/wiki/Gearbox")} class, aged 15.<sup>[36]</sup> He opened the season with victory at the South Garda Winter Cup in {wikiLink("KZ2", "https://en.wikipedia.org/wiki/KZ2")}.<sup>[36]</sup> He finished twelfth in the WSK Euro Series, and fourth in the WSK Master Series.<sup>[26]</sup> Leclerc finished sixth in the European Championship after claiming a podium in the final round at {wikiLink("Genk", "https://en.wikipedia.org/wiki/Karting_Genk")}.<sup>[37]</sup> He duelled with rival Verstappen to become the youngest-ever {wikiLink("KZ World Champion", "https://en.wikipedia.org/wiki/Karting_World_Championship#125_Gearbox_FIA_Karting_world_champions_and_World_Cup_winners")} at {wikiLink("Varennes-sur-Allier", "https://en.wikipedia.org/wiki/Varennes-sur-Allier")}, with Leclerc finishing runner-up to him.<sup>[38][39]</sup> Upon his graduation to {wikiLink("junior formulae", "https://en.wikipedia.org/wiki/Junior_formulae")}, Leclerc credited their "numerous clashes" with boosting his experience and character.<sup>[40]</sup> <i>Kartcom</i> opined that "his rise [was] meteoric for a driver who [did not] spend much time training on the track".<sup>[40]</sup>
    </p>

    <div className="clear-both" />

    {/* Formula Renault 2.0 (2014) */}
    <section id="formula-renault-2.0" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">Formula Renault 2.0 (2014)</h3>

      {/* Formula Renault 2.0 Alps */}
      <section id="formula-renault-2.0-alps" className="space-y-4 scroll-mt-24"></section>
      <h4 className="text-lg font-semibold text-red-400 mb-1">Formula Renault 2.0 Alps</h4>

      <p>
        Leclerc graduated to {wikiLink("junior formulae", "https://en.wikipedia.org/wiki/Junior_formulae")} in{" "}
        {wikiLink("2014", "https://en.wikipedia.org/wiki/2014_Formula_Renault_2.0_Alps_Series")}, signing for{" "}
        {wikiLink("Fortec", "https://en.wikipedia.org/wiki/Fortec_Motorsport")} in{" "}
        {wikiLink("Formula Renault 2.0", "https://en.wikipedia.org/wiki/Formula_Renault_2.0")}, aged 16. He debuted in the{" "}
        {wikiLink("Alps Series", "https://en.wikipedia.org/wiki/Formula_Renault_2.0_Alps")}, retiring from both races in the opening round at{" "}
        {wikiLink("Imola", "https://en.wikipedia.org/wiki/Imola_Circuit")}. He achieved his maiden podium finish in the second race at{" "}
        {wikiLink("Pau", "https://en.wikipedia.org/wiki/Pau_Circuit")}. After fourth-placed finishes at the{" "}
        {wikiLink("Red Bull Ring", "https://en.wikipedia.org/wiki/Red_Bull_Ring")}, Leclerc scored a double podium during the{" "}
        {wikiLink("Spa-Francorchamps", "https://en.wikipedia.org/wiki/Spa-Francorchamps")} round. He followed this up with his maiden{" "}
        {wikiLink("formula racing", "https://en.wikipedia.org/wiki/Formula_racing")} victories at{" "}
        {wikiLink("Monza", "https://en.wikipedia.org/wiki/Monza_Circuit")}, the latter from{" "}
        {wikiLink("pole position", "https://en.wikipedia.org/wiki/Pole_position")}. He finished second to{" "}
        {wikiLink("Nyck de Vries", "https://en.wikipedia.org/wiki/Nyck_de_Vries")} in both{" "}
        {wikiLink("Mugello", "https://en.wikipedia.org/wiki/Mugello_Circuit")} races, before claiming points finishes at the season-ending{" "}
        {wikiLink("Jerez", "https://en.wikipedia.org/wiki/Circuito_de_Jerez")} round. During the season, Leclerc took two victories from
        seven podium finishes as he finished runner-up to De Vries—a third-year Formula Renault 2.0 driver—and beat{" "}
        {wikiLink("Matevos Isaakyan", "https://en.wikipedia.org/wiki/Matevos_Isaakyan")} to the rookies' championship.
      </p>

      <div className="clear-both" />

    {/* Formula Renault Eurocup (2014) */}
    <section id="formula-renault-eurocup" className="space-y-4 scroll-mt-24"></section>
    <h4 className="text-lg font-semibold text-red-400 mb-1">Formula Renault Eurocup</h4>

      <p>
        Fortec also entered Leclerc into select rounds of the{" "}
        {wikiLink("Eurocup", "https://en.wikipedia.org/wiki/2014_Eurocup_Formula_Renault_2.0")}, part of the{" "}
        {wikiLink("World Series by Renault", "https://en.wikipedia.org/wiki/2014_World_Series_by_Renault")}, as a guest driver. He set a track record at{" "}
        {wikiLink("Barcelona-Catalunya", "https://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya")} in pre-season testing. After finishing outside of the points on debut at{" "}
        {wikiLink("Spa-Francorchamps", "https://en.wikipedia.org/wiki/Spa-Francorchamps")}, Leclerc took his maiden podium in the series at the{" "}
        {wikiLink("Nürburgring", "https://en.wikipedia.org/wiki/N%C3%BCrburgring")}, finishing second to{" "}
        {wikiLink("Dennis Olsen", "https://en.wikipedia.org/wiki/Dennis_Olsen_(racing_driver)")}. He then took further second-placed finishes in both races at the{" "}
        {wikiLink("Hungaroring", "https://en.wikipedia.org/wiki/Hungaroring")}, ending his campaign with three podiums from six starts.
      </p>

      <div className="clear-both" />

      {/* Formula Three (2015) */}
      <section id="formula-three-2015" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">
        Formula Three (2015)
      </h3>

      {/* FIA European Formula 3 */}
      <section id="fia-f3" className="space-y-4 scroll-mt-24"></section>
      <h4 className="text-lg font-semibold text-red-400 mb-1">
        FIA European Formula 3
      </h4>

      <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/2/21/Charles_Leclerc%2C_Formel_3_2015_%28cropped%29.JPG"
          alt="Leclerc driving the Dallara F314 at the 2015 FIA European Formula 3 Spa-Francorchamps round"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          Leclerc progressed to {wikiLink("FIA European Formula 3", "https://en.wikipedia.org/wiki/2015_FIA_Formula_3_European_Championship")} in {wikiLink("2015", "https://en.wikipedia.org/wiki/2015_FIA_Formula_3_European_Championship")}, winning several races and finishing second at the {wikiLink("Macau Grand Prix", "https://en.wikipedia.org/wiki/2015_Macau_Grand_Prix")}.
        </figcaption>
      </figure>

      <p>
        Leclerc graduated to {wikiLink("Formula Three", "https://en.wikipedia.org/wiki/Formula_Three")} in 2015, contesting {wikiLink("FIA European F3", "https://en.wikipedia.org/wiki/2015_FIA_Formula_3_European_Championship")} with {wikiLink("Van Amersfoort Racing", "https://en.wikipedia.org/wiki/Van_Amersfoort_Racing")} amongst a highly-competitive field.
      
        In the opening round at {wikiLink("Silverstone", "https://en.wikipedia.org/wiki/Silverstone_Circuit")}, he inherited {wikiLink("pole position", "https://en.wikipedia.org/wiki/Pole_position")} for the second and third races after {wikiLink("Felix Rosenqvist", "https://en.wikipedia.org/wiki/Felix_Rosenqvist")} was excluded for a technical infringement.
      
        After finishing twelfth on debut, he clinched second in race two followed by his maiden victory amidst a race-long battle with {wikiLink("Antonio Giovinazzi", "https://en.wikipedia.org/wiki/Antonio_Giovinazzi")}.
      
        Leclerc claimed an additional three consecutive podiums at the {wikiLink("Hockenheimring", "https://en.wikipedia.org/wiki/Hockenheimring")}, winning the rain-affected third race after overtaking Rosenqvist.
      
        He increased his run to eight consecutive podiums at {wikiLink("Pau", "https://en.wikipedia.org/wiki/Pau_Circuit")}, including a third-placed finish at the {wikiLink("Pau Grand Prix", "https://en.wikipedia.org/wiki/Pau_Grand_Prix")} — the final race of the weekend.
    
        He suffered his first retirement of the season in the second race at {wikiLink("Monza", "https://en.wikipedia.org/wiki/Monza_Circuit")} after colliding with {wikiLink("Jake Dennis", "https://en.wikipedia.org/wiki/Jake_Dennis")}, before returning to the podium in the curtailed final race.
      </p>

      <p>
        With his victory in the first race at {wikiLink("Spa-Francorchamps", "https://en.wikipedia.org/wiki/Spa-Francorchamps")} from sixth on the grid — following a three-way battle with Rosenqvist and Giovinazzi — Leclerc took the championship lead; he achieved a further podium in race three.
      
        With a victory from pole followed by another podium at the {wikiLink("Norisring", "https://en.wikipedia.org/wiki/Norisring")}, Leclerc held a 42.5-point lead over Giovinazzi after six rounds.
      
        Leclerc collided with {wikiLink("Lance Stroll", "https://en.wikipedia.org/wiki/Lance_Stroll")} in race two at {wikiLink("Zandvoort", "https://en.wikipedia.org/wiki/Circuit_Zandvoort")}, and had to replace his {wikiLink("Dallara F314", "https://en.wikipedia.org/wiki/Dallara_F314")} chassis.
      
        From that point onwards, Leclerc did not score a single podium across the remaining four rounds, with fourth-placed finishes at the {wikiLink("Red Bull Ring", "https://en.wikipedia.org/wiki/Red_Bull_Ring")} and {wikiLink("Nürburgring", "https://en.wikipedia.org/wiki/N%C3%BCrburgring")}, as he slipped to fourth in the standings — behind Rosenqvist, Giovinazzi and Dennis.
      
        He clinched the rookies' championship, having achieved four victories from 13 podium finishes, and {wikiLink("Valentin Khorounzhiy", "https://www.motorsport.com/")} of <i>Motorsport.com</i> ranked him the best driver of the season.
      </p>

      <div className="clear-both"></div>

      {/* Macau Grand Prix */}
      <section id="macau-grand-prix" className="space-y-4 scroll-mt-24"></section>
      <h4 className="text-lg font-semibold text-red-400 mb-1">Macau Grand Prix</h4>

      <p>Following his European F3 campaign, Leclerc entered the <a href="/wiki/2015_Macau_Grand_Prix" title="2015 Macau Grand Prix">Macau Grand Prix</a> with Van Amersfoort.<sup id="cite_ref-91" className="reference"><a href="#cite_note-91"><span className="cite-bracket">[</span>89<span className="cite-bracket">]</span></a></sup> After qualifying third,<sup id="cite_ref-MAC1_92-0" className="reference"><a href="#cite_note-MAC1-92"><span className="cite-bracket">[</span>90<span className="cite-bracket">]</span></a></sup> Leclerc finished second to <a href="/wiki/Felix_Rosenqvist" title="Felix Rosenqvist">Felix Rosenqvist</a> in the qualification race after a penalty for <a href="/wiki/Antonio_Giovinazzi" title="Antonio Giovinazzi">Antonio Giovinazzi</a>, which set the grid for the main race.<sup id="cite_ref-MAC2_93-0" className="reference"><a href="#cite_note-MAC2-93"><span className="cite-bracket">[</span>91<span className="cite-bracket">]</span></a></sup><sup id="cite_ref-94" className="reference"><a href="#cite_note-94"><span className="cite-bracket">[</span>92<span className="cite-bracket">]</span></a></sup> Leclerc again finished second to Rosenqvist in the Grand Prix, following a race-long battle.<sup id="cite_ref-MAC3_95-0" className="reference"><a href="#cite_note-MAC3-95"><span className="cite-bracket">[</span>93<span className="cite-bracket">]</span></a></sup><sup id="cite_ref-96" className="reference"><a href="#cite_note-96"><span className="cite-bracket">[</span>94<span className="cite-bracket">]</span></a></sup> He described the result as crucial to his "mental strength" after the closing rounds of his F3 season.<sup id="cite_ref-97" className="reference"><a href="#cite_note-97"><span className="cite-bracket">[</span>95<span className="cite-bracket">]</span></a></sup>
      </p>

      <div className="clear-both"></div>

      {/* GP3 Series (2016) */}
      <section id="gp3-series" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">
        GP3 Series (2016)
      </h3>

      <p>
        In December 2015, Leclerc partook in post-season {wikiLink("GP3", "https://en.wikipedia.org/wiki/GP3_Series")} testing with {wikiLink("ART", "https://en.wikipedia.org/wiki/ART_Grand_Prix")} and {wikiLink("Arden", "https://en.wikipedia.org/wiki/Arden_International")}, ultimately signing with the former for the {wikiLink("2016 GP3 Series", "https://en.wikipedia.org/wiki/2016_GP3_Series")}. Also joining the {wikiLink("Ferrari Driver Academy", "https://en.wikipedia.org/wiki/Ferrari_Driver_Academy")} prior to the season, Leclerc qualified third at {wikiLink("Catalunya", "https://en.wikipedia.org/wiki/2016_Catalunya_GP3_Series_round")} before winning his debut race by over six seconds; in the {wikiLink("reverse-grid second race", "https://en.wikipedia.org/wiki/GP3_Series#Race_weekend")}, he finished ninth. At the {wikiLink("Red Bull Ring", "https://en.wikipedia.org/wiki/2016_Red_Bull_Ring_GP3_Series_round")}, he took {wikiLink("pole position", "https://en.wikipedia.org/wiki/Pole_position")} by over half a second, and led the first race from {wikiLink("lights-to-flag", "https://en.wikipedia.org/wiki/Glossary_of_motorsport_terms#L")}. He retired after colliding with {wikiLink("Jake Dennis", "https://en.wikipedia.org/wiki/Jake_Dennis")} and {wikiLink("Tatiana Calderón", "https://en.wikipedia.org/wiki/Tatiana_Calderón")} in race two, receiving a five-place {wikiLink("grid penalty", "https://en.wikipedia.org/wiki/Glossary_of_motorsport_terms#G")}. Subsequently starting seventh at {wikiLink("Silverstone", "https://en.wikipedia.org/wiki/2016_Silverstone_GP3_Series_round")}, Leclerc recovered to second- and third-placed finishes. After finishing sixth in race one at the {wikiLink("Hungaroring", "https://en.wikipedia.org/wiki/2016_Hungaroring_GP3_Series_round")}, he achieved a podium in race two as race-winner {wikiLink("Alexander Albon", "https://en.wikipedia.org/wiki/Alexander_Albon")} took the championship lead. He received a three-place grid drop for impeding {wikiLink("Giuliano Alesi", "https://en.wikipedia.org/wiki/Giuliano_Alesi")} in qualifying at the {wikiLink("Hockenheimring", "https://en.wikipedia.org/wiki/2016_Hockenheimring_GP3_Series_round")}, where he finished fifth in race one—behind Albon. His third-placed finish in race two, coupled with Albon's retirement, saw Leclerc reclaim his points lead.
      </p>

      <p>
        Leclerc took pole at {wikiLink("Spa-Francorchamps", "https://en.wikipedia.org/wiki/2016_Spa-Francorchamps_GP3_Series_round")} and held off Dennis to win race one, before finishing sixth in the second race. Another pole followed at {wikiLink("Monza", "https://en.wikipedia.org/wiki/2016_Monza_GP3_Series_round")}, where he finished fourth in race one—ahead of title rivals Albon and {wikiLink("Antonio Fuoco", "https://en.wikipedia.org/wiki/Antonio_Fuoco")}—and retired from race two after colliding with teammate {wikiLink("Nirei Fukuzumi", "https://en.wikipedia.org/wiki/Nirei_Fukuzumi")}. Leclerc took his third consecutive pole at {wikiLink("Sepang", "https://en.wikipedia.org/wiki/2016_Sepang_GP3_Series_round")}, finishing third and fifth in the races, which extended his championship lead to 29 points over Albon with one round remaining. Leclerc clinched the title in race one at {wikiLink("Yas Marina", "https://en.wikipedia.org/wiki/2016_Yas_Marina_GP3_Series_round")} after Albon retired, with Leclerc suffering race-ending damage himself after colliding with {wikiLink("Santino Ferrucci", "https://en.wikipedia.org/wiki/Santino_Ferrucci")}, and dedicated the title to his godfather {wikiLink("Jules Bianchi", "https://en.wikipedia.org/wiki/Jules_Bianchi")}. With three victories from eight podiums, Leclerc described the season as "amazing" and that it was the first time in his {wikiLink("junior formulae", "https://en.wikipedia.org/wiki/Junior_formulae")} career he felt pressure: "now I can handle the pressure".
      </p>

      <div className="clear-both" />

      {/* FIA Formula 2 (2017) */}
      <section id="fia-f2" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">FIA Formula 2 (2017)</h3>

      <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/F2-Race1%E3%81%AE%E3%82%B7%E3%83%A3%E3%83%AB%E3%83%AB%EF%BC%91_%2836974715682%29.jpg/250px-F2-Race1%E3%81%AE%E3%82%B7%E3%83%A3%E3%83%AB%E3%83%AB%EF%BC%91_%2836974715682%29.jpg"
          alt="Leclerc looking out of his Dallara GP2/11 with his visor raised before the 2017 Monza Formula 2 round"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          Leclerc (pictured at {wikiLink("Monza", "https://en.wikipedia.org/wiki/2017_Monza_Formula_2_round")}) graduated to{" "}
          {wikiLink("FIA Formula 2", "https://en.wikipedia.org/wiki/FIA_Formula_2")} with{" "}
          {wikiLink("Prema", "https://en.wikipedia.org/wiki/Prema_Racing")} in{" "}
          {wikiLink("2017", "https://en.wikipedia.org/wiki/2017_Formula_2_Championship")}.
        </figcaption>
      </figure>

      <p>
        Following his GP3 title victory, Leclerc progressed to {wikiLink("FIA Formula 2", "https://en.wikipedia.org/wiki/FIA_Formula_2")} with{" "}
        {wikiLink("Prema", "https://en.wikipedia.org/wiki/Prema_Racing")} for its inaugural{" "}
        {wikiLink("2017", "https://en.wikipedia.org/wiki/2017_Formula_2_Championship")} season, alongside fellow{" "}
        {wikiLink("Ferrari Driver Academy", "https://en.wikipedia.org/wiki/Ferrari_Driver_Academy")} member{" "}
        {wikiLink("Antonio Fuoco", "https://en.wikipedia.org/wiki/Antonio_Fuoco")}.
  
        Debuting at {wikiLink("Sakhir", "https://en.wikipedia.org/wiki/2017_Sakhir_Formula_2_round")}, Leclerc took{" "}
        {wikiLink("pole position", "https://en.wikipedia.org/wiki/Pole_position")} for the{" "}
        {wikiLink("feature race", "https://en.wikipedia.org/wiki/FIA_Formula_2_Championship#Race_weekend")}, finishing third. In the{" "}
        {wikiLink("reverse-grid sprint race", "https://en.wikipedia.org/wiki/FIA_Formula_2_Championship#Race_weekend")}, he opted for a rare mid-race{" "}
        {wikiLink("pit stop", "https://en.wikipedia.org/wiki/Pit_stop")} and overtook 13 drivers in nine laps to secure his maiden F2 win.
     
        He took another pole in {wikiLink("Barcelona", "https://en.wikipedia.org/wiki/2017_Barcelona_Formula_2_round")} and won his first feature race after holding off{" "}
        {wikiLink("Luca Ghiotto", "https://en.wikipedia.org/wiki/Luca_Ghiotto")} despite radio issues. He finished fourth in the sprint.
      
        At his home round in {wikiLink("Monte Carlo", "https://en.wikipedia.org/wiki/2017_Monte_Carlo_Formula_2_round")}, Leclerc retired from both races despite qualifying on pole, due to suspension failure and a collision with{" "}
        {wikiLink("Norman Nato", "https://en.wikipedia.org/wiki/Norman_Nato")}. Despite retaining the championship lead, he called it a "hugely disappointing" weekend.
      
        Leclerc dedicated his {wikiLink("Baku", "https://en.wikipedia.org/wiki/2017_Baku_Formula_2_round")} pole to his late father Hervé, converting it to a feature win and finishing second in the sprint. A 10-second penalty for yellow flag infringement cost him the latter win to Nato.
      
        At {wikiLink("Spielberg", "https://en.wikipedia.org/wiki/2017_Spielberg_Formula_2_round")}, Leclerc won the feature from pole ahead of teammate Fuoco and{" "}
        {wikiLink("Nicholas Latifi", "https://en.wikipedia.org/wiki/Nicholas_Latifi")} of{" "}
        {wikiLink("DAMS", "https://en.wikipedia.org/wiki/DAMS")}. A collision with Fuoco in the sprint reduced his championship lead over{" "}
        {wikiLink("Oliver Rowland", "https://en.wikipedia.org/wiki/Oliver_Rowland")} to 49 points midway through the season.
      </p>

      <div className="clear-both" />

      <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Charles_Leclerc_Jerez_2017_%28cropped%29.jpg/250px-Charles_Leclerc_Jerez_2017_%28cropped%29.jpg"
          alt="Charles Leclerc crossing the start/finish line during the 2017 Jerez Formula 2 round"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          Leclerc dominated F2 in his rookie season, taking a joint-record seven victories and clinching the championship in{" "}
          {wikiLink("Jerez", "https://en.wikipedia.org/wiki/2017_Jerez_Formula_2_round")}, aged 19.
        </figcaption>
      </figure>

      <p>
        Leclerc achieved a record-equalling sixth consecutive pole at{" "}
        {wikiLink("Silverstone", "https://en.wikipedia.org/wiki/2017_Silverstone_Formula_2_round")}, winning the feature race despite reliability issues—his{" "}
        {wikiLink("brakes", "https://en.wikipedia.org/wiki/Brake")} and{" "}
        {wikiLink("exhaust", "https://en.wikipedia.org/wiki/Exhaust_gas")} caught fire.
      
        He was disqualified from pole in{" "}
        {wikiLink("Budapest", "https://en.wikipedia.org/wiki/2017_Budapest_Formula_2_round")} for a technical infringement but recovered from last to finish fourth in both races—outscoring{" "}
        {wikiLink("Rowland", "https://en.wikipedia.org/wiki/Oliver_Rowland")} in both.
      
        Leclerc returned to pole at{" "}
        {wikiLink("Spa-Francorchamps", "https://en.wikipedia.org/wiki/2017_Spa-Francorchamps_Formula_2_round")}, but was disqualified from his feature win due to{" "}
        {wikiLink("skid block", "https://en.wikipedia.org/wiki/Skid_block")} wear. He climbed to fifth in the sprint after starting nineteenth.
    
        In{" "}
        {wikiLink("Monza", "https://en.wikipedia.org/wiki/2017_Monza_Formula_2_round")}, Leclerc collided with{" "}
        {wikiLink("Nyck de Vries", "https://en.wikipedia.org/wiki/Nyck_de_Vries")} while battling for the lead on the final lap of the feature, and both finished outside the points.
      
        Heading into{" "}
        {wikiLink("Jerez", "https://en.wikipedia.org/wiki/2017_Jerez_Formula_2_round")} with a 59-point lead, Leclerc claimed pole and won the feature race to seal the title—becoming the youngest-ever{" "}
        {wikiLink("GP2", "https://en.wikipedia.org/wiki/GP2_Series")}/F2 champion at 19 years and 356 days, and the third rookie champion after{" "}
        {wikiLink("Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")},{" "}
        {wikiLink("Rosberg", "https://en.wikipedia.org/wiki/Nico_Rosberg")}, and{" "}
        {wikiLink("Hülkenberg", "https://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg")}.
      
        In the final round at{" "}
        {wikiLink("Yas Island", "https://en.wikipedia.org/wiki/2017_Yas_Island_Formula_2_round")}, Leclerc finished second in the feature after disqualifications promoted him and overtook{" "}
        {wikiLink("Albon", "https://en.wikipedia.org/wiki/Alexander_Albon")} on the last lap of the sprint to take a record-equalling seventh win.
     
        Leclerc was named{" "}
        {wikiLink("FIA Rookie of the Year", "https://en.wikipedia.org/wiki/FIA_Prize_Giving_Ceremony#Rookie_of_the_Year")} for his performance, finishing the season with seven wins, ten podiums, and eight poles—72 points ahead of runner-up{" "}
        {wikiLink("Artem Markelov", "https://en.wikipedia.org/wiki/Artem_Markelov")}.
      </p>

      <div className="clear-both" />


  </>
);

export default juniorCareer;
