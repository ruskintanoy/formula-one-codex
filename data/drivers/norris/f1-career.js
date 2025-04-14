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
      <section id="mclaren-driver-programme" className="space-y-4 scroll-mt-24"></section>
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
        In February 2017, Norris joined the{" "}
        {wikiLink("McLaren Driver Development Programme", "https://en.wikipedia.org/wiki/McLaren_Driver_Development_Programme")}.
        Following the announcement,{" "}
        {wikiLink("Zak Brown", "https://en.wikipedia.org/wiki/Zak_Brown")} said that Norris was
        "a fabulous prospect" who deserved the award. Later that year, Norris tested for McLaren
        in a scheduled mid-season test. He set the second fastest lap in the second day of testing
        at the Hungaroring. In late 2017, Norris became the official McLaren test and reserve driver
        for the 2018 season. Norris participated in his first official practice session at the{" "}
        {wikiLink("Belgian Grand Prix", "https://en.wikipedia.org/wiki/2018_Belgian_Grand_Prix")},
        recording 26 laps. Norris drove in six further practice sessions during the year.
      </p>

      <div className="clear-both"></div>

      <section id="mclaren-2019-present" className="space-y-4 scroll-mt-24"></section>
      {/* McLaren (2019-Present) */}
      <h3 className="text-2xl font-bold text-red-600 mt-6 mb-2">
        McLaren (2019–present)
      </h3>

      <section id="rookie-season" className="space-y-4 scroll-mt-24"></section>
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
        Norris was contracted to drive for {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")} for the {wikiLink("2019 Formula One World Championship", "https://en.wikipedia.org/wiki/2019_Formula_One_World_Championship")}, 
        partnering {wikiLink("Carlos Sainz Jr.", "https://en.wikipedia.org/wiki/Carlos_Sainz_Jr.")}. He qualified eighth on his debut at the {wikiLink("Australian Grand Prix", "https://en.wikipedia.org/wiki/2019_Australian_Grand_Prix")} 
        and finished the race in twelfth place. He scored his first Formula One points by finishing sixth at the following race, the {wikiLink("Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2019_Bahrain_Grand_Prix")}. 
        The {wikiLink("Chinese Grand Prix", "https://en.wikipedia.org/wiki/2019_Chinese_Grand_Prix")} was the first of Norris' retirements that season, after damage from a first lap collision with {wikiLink("Daniil Kvyat", "https://en.wikipedia.org/wiki/Daniil_Kvyat")} 
        caused him to retire later in the race. Further retirements came at the {wikiLink("Spanish Grand Prix", "https://en.wikipedia.org/wiki/2019_Spanish_Grand_Prix")} after a collision with {wikiLink("Lance Stroll", "https://en.wikipedia.org/wiki/Lance_Stroll")} and 
        at the {wikiLink("Canadian Grand Prix", "https://en.wikipedia.org/wiki/2019_Canadian_Grand_Prix")} when a brake fire caused his suspension to fail.
      </p>

      <p>
        Norris was on course to finish seventh at the {wikiLink("French Grand Prix", "https://en.wikipedia.org/wiki/2019_French_Grand_Prix")} but suffered hydraulic problems late in the race and was eventually classified ninth. This was followed by a sixth-place 
        finish at the {wikiLink("Austrian Grand Prix", "https://en.wikipedia.org/wiki/2019_Austrian_Grand_Prix")}, matching his best result. He was forced to start from the back at the {wikiLink("German Grand Prix", "https://en.wikipedia.org/wiki/2019_German_Grand_Prix")} 
        due to penalties for exceeding the allowed number of engine components for the season. He later retired from the race after a power failure. At the {wikiLink("Belgian Grand Prix", "https://en.wikipedia.org/wiki/2019_Belgian_Grand_Prix")}, 
        he made his way from eleventh up to fifth in the early stages of the race. He maintained this position and was set to record his best career finish but suffered a power failure on his final lap and was classified eleventh.
      </p>

      <p>
        Three consecutive points finishes followed at the {wikiLink("Italian Grand Prix", "https://en.wikipedia.org/wiki/2019_Italian_Grand_Prix")}, {wikiLink("Singapore Grand Prix", "https://en.wikipedia.org/wiki/2019_Singapore_Grand_Prix")} 
        and {wikiLink("Russian Grand Prix", "https://en.wikipedia.org/wiki/2019_Russian_Grand_Prix")}. At the {wikiLink("Japanese Grand Prix", "https://en.wikipedia.org/wiki/2019_Japanese_Grand_Prix")}, Norris was running in fifth place 
        before {wikiLink("Alex Albon", "https://en.wikipedia.org/wiki/Alex_Albon")} collided with him during an overtake attempt. Norris dropped back after collecting floor damage and eventually finished eleventh. At the next race, 
        the {wikiLink("Mexican Grand Prix", "https://en.wikipedia.org/wiki/2019_Mexican_Grand_Prix")}, he had a wheel fitted incorrectly after pitting from seventh place. He spent almost two minutes in the pits as his mechanics resolved the problem but he was eventually 
        withdrawn from the race. He ended the season with three consecutive points finishes.
      </p>

      <p>
        Norris finished his debut Formula One season eleventh in the drivers' championship with 49 points. Teammate Sainz scored 96 points, however Norris out-qualified Sainz at eleven of the twenty-one races. During his debut year, Norris signed a multi-year contract to 
        stay with McLaren for the {wikiLink("2020 Formula One World Championship", "https://en.wikipedia.org/wiki/2020_Formula_One_World_Championship")} until the {wikiLink("2022 Formula One World Championship", 
          "https://en.wikipedia.org/wiki/2022_Formula_One_World_Championship")}.
      </p>

      <div className="clear-both"></div>
      
      <section id="maiden-podium" className="space-y-4 scroll-mt-24"></section>
      {/* 2020: Maiden Podium */}
      <h4 className="text-lg font-semibold text-red-400 mb-1">2020: Maiden Podium</h4>

      <p>
        At the season-opening {wikiLink("Austrian Grand Prix", "https://en.wikipedia.org/wiki/2020_Austrian_Grand_Prix")}, Norris qualified in fourth place but was elevated to third after a grid penalty 
        for {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")}, the highest grid position of his career at the time and the highest for McLaren since 
        the {wikiLink("2016 Austrian Grand Prix", "https://en.wikipedia.org/wiki/2016_Austrian_Grand_Prix")}. In the closing stages of the race, third-placed Hamilton was issued a five-second penalty for causing a collision with Alex Albon. 
        Norris set the fastest lap of the race on the final lap to finish 4.802 seconds behind Hamilton, allowing Norris to claim the first podium finish of his career. This made Norris the third youngest podium-finisher in Formula One history. 
        At the {wikiLink("Styrian Grand Prix", "https://en.wikipedia.org/wiki/2020_Styrian_Grand_Prix")}, Norris qualified sixth but was given a three-place grid penalty for overtaking under yellow flags during practice. He passed three cars in the 
        final two laps of the race to finish fifth, in what he described as "one of the best races of [his] career".
      </p>

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
        Six consecutive points finishes came between the {wikiLink("British Grand Prix", "https://en.wikipedia.org/wiki/2020_British_Grand_Prix")} and {wikiLink("Tuscan Grand Prix", "https://en.wikipedia.org/wiki/2020_Tuscan_Grand_Prix")}. 
        Norris collected damage on the opening lap of the {wikiLink("Russian Grand Prix", "https://en.wikipedia.org/wiki/2020_Russian_Grand_Prix")} and finished the race fifteenth. At the {wikiLink("Eifel Grand Prix", "https://en.wikipedia.org/wiki/2020_Eifel_Grand_Prix")}, 
        he retired from sixth place with power unit failure. During the {wikiLink("Portuguese Grand Prix", "https://en.wikipedia.org/wiki/2020_Portuguese_Grand_Prix")}, a collision with {wikiLink("Lance Stroll", "https://en.wikipedia.org/wiki/Lance_Stroll")} and 
        a puncture resulted in a thirteenth-place finish. Following this, Norris faced criticism over his remarks that Stroll "doesn't seem to learn" and his perceived downplaying of {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")}'s achievement 
        of most Grand Prix wins, describing it as meaning "nothing to him". Subsequently, Norris apologised for his comments about Stroll and also offered a personal apology to Hamilton, stating that his comments were "careless" and that he "[hadn't] shown the 
        respect I should have to certain people".
      </p>

      <p>
        At the wet {wikiLink("Turkish Grand Prix", "https://en.wikipedia.org/wiki/2020_Turkish_Grand_Prix")}, Norris had what he called "[the] worst start of everyone's career ever". He started from fourteenth place after a five-place grid penalty for failing to respect 
        yellow flags in qualifying, but recovered to finish eighth and recorded the fastest lap of the race. Norris finished fourth at the {wikiLink("Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2020_Bahrain_Grand_Prix")} and fifth at the 
        season-finale {wikiLink("Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2020_Abu_Dhabi_Grand_Prix")}, which alongside the points scored by teammate Sainz, assisted McLaren in claiming third place in the constructors' 
        championship over {wikiLink("Racing Point", "https://en.wikipedia.org/wiki/Racing_Point")}. Norris ended the season ninth in the drivers' championship with 97 points, eight points behind Sainz.
      </p>

      
      <section id="maiden-pole" className="space-y-4 scroll-mt-24"></section>
      {/* 2021: Maiden Pole Position */}
      <h4 className="text-lg font-semibold text-red-400 mb-1">2021: Maiden Pole Position</h4>

      <p>
        Norris remained at {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")} for the {wikiLink("2021 season", "https://en.wikipedia.org/wiki/2021_Formula_One_World_Championship")}, 
        partnering {wikiLink("Daniel Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")} as Sainz left the team for {wikiLink("Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")}. Norris qualified seventh for the 
        season-opening {wikiLink("Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2021_Bahrain_Grand_Prix")} and finished the race fourth. At the following race, the {wikiLink("Emilia Romagna Grand Prix", "https://en.wikipedia.org/wiki/2021_Emilia_Romagna_Grand_Prix")}, 
        a qualifying time that would have placed him third on the grid was deleted for exceeding track limits, and he started the race seventh. Norris had run in second place before being passed by {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")} 
        with three laps remaining. He finished third to claim his second Formula One podium finish. At the {wikiLink("Monaco Grand Prix", "https://en.wikipedia.org/wiki/2021_Monaco_Grand_Prix")}, Norris started fifth and benefited 
        from {wikiLink("Charles Leclerc", "https://en.wikipedia.org/wiki/Charles_Leclerc")}'s failure to start the race and {wikiLink("Valtteri Bottas", "https://en.wikipedia.org/wiki/Valtteri_Bottas")}' retirement to claim another podium finish. Norris was issued a 
        grid penalty and started ninth at the {wikiLink("Azerbaijan Grand Prix", "https://en.wikipedia.org/wiki/2021_Azerbaijan_Grand_Prix")} for failing to enter the pits during a red flag period in qualifying, a sanction he criticised as "unfair". 
        He recovered places in the race to finish fifth, assisted by crashes and mistakes from drivers ahead.
      </p>

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
        Norris equalled his then-highest grid position at the {wikiLink("Styrian Grand Prix", "https://en.wikipedia.org/wiki/2021_Styrian_Grand_Prix")} in Austria, starting third after Bottas was issued with a grid penalty. He finished fifth for the third consecutive race. 
        He bettered this qualifying position at the following weekend's {wikiLink("Austrian Grand Prix", "https://en.wikipedia.org/wiki/2021_Austrian_Grand_Prix")}, starting in second place after setting a time 0.048 seconds behind 
        pole-sitter {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")}. Norris received a penalty during the race after being judged to have forced Sergio Pérez off the track. He finished the race third to claim his third podium of the season. 
        He set the sixth fastest time in Friday qualifying at the {wikiLink("British Grand Prix", "https://en.wikipedia.org/wiki/2021_British_Grand_Prix")}, before finishing fifth in the new-format sprint qualifying and fourth in the Grand Prix. This result moved 
        him up to third place in the drivers' championship. He qualified sixth for the {wikiLink("Hungarian Grand Prix", "https://en.wikipedia.org/wiki/2021_Hungarian_Grand_Prix")}. He improved to third place by the first corner but was hit from behind by Bottas, 
        causing him to collide with Verstappen. Norris retired from the race two laps later due to heavy damage. At the {wikiLink("Italian Grand Prix", "https://en.wikipedia.org/wiki/2021_Italian_Grand_Prix")}, Norris finished fourth in sprint qualifying, which 
        became third on the grid for the race as Bottas incurred an engine penalty. Norris finished the race second behind teammate Ricciardo, scoring his fourth podium of the season and securing McLaren's first one-two finish since 
        the {wikiLink("2010 Canadian Grand Prix", "https://en.wikipedia.org/wiki/2010_Canadian_Grand_Prix")}.
      </p>

      <p>
        Norris took his first Formula One pole position in changing weather conditions in qualifying at the {wikiLink("Russian Grand Prix", "https://en.wikipedia.org/wiki/2021_Russian_Grand_Prix")}. He lost the lead to Carlos Sainz on the first lap before regaining it on 
        lap 13. Norris continued to lead the race with Lewis Hamilton close behind until rain began to fall in the closing laps. Norris decided to stay out on dry-weather tyres while Hamilton pitted for intermediate tyres. The rain soon worsened, allowing Hamilton to 
        overtake and forcing Norris to pit for intermediates. Norris finished seventh, recording the fastest lap of the race. Norris scored points in each of the remaining seven races of the season, but did not finish higher than seventh. He qualified third at the 
        season-ending {wikiLink("Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2023_Abu_Dhabi_Grand_Prix")} and was the first of the five cars controversially permitted to unlap themselves on the penultimate lap of the race. He criticised the decision to resume 
        the race on the final lap and described it as being done "for the TV". The result of the final race dropped Norris to sixth in the World Drivers' Championship, 4.5 points behind former teammate Sainz. Nevertheless, Norris achieved his career best result in the 
        standings and scored 160 points to teammate Ricciardo's 115.
      </p>

      <div className="clear-both"></div>

      <section id="season-2022" className="space-y-4 scroll-mt-24"></section>
      {/* 2022 Season */}
      <h4 className="text-lg font-semibold text-red-400 mb-1">2022 Season</h4>

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
        In February 2022 Norris signed a contract extension with {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")} that will see him be with the team until at least 2025. He completed all three days of pre-season testing in Bahrain after teammate Ricciardo 
        tested positive for COVID-19 and was unable to attend.
      </p>

      <p>
        Both McLaren drivers qualified and finished outside the top ten at the season-opening {wikiLink("Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2022_Bahrain_Grand_Prix")}. Norris then scored points at 
        the {wikiLink("Saudi Arabian Grand Prix", "https://en.wikipedia.org/wiki/2022_Saudi_Arabian_Grand_Prix")} and {wikiLink("Australian Grand Prix", "https://en.wikipedia.org/wiki/2022_Australian_Grand_Prix")} before achieving the team's only podium finish of the 
        season with third place at the {wikiLink("Emilia Romagna Grand Prix", "https://en.wikipedia.org/wiki/2022_Emilia_Romagna_Grand_Prix")}. At the new {wikiLink("Miami Grand Prix", "https://en.wikipedia.org/wiki/2022_Miami_Grand_Prix")}, the safety car was deployed 
        when Norris was involved in a crash with {wikiLink("Pierre Gasly", "https://en.wikipedia.org/wiki/Pierre_Gasly")}'s {wikiLink("AlphaTauri", "https://en.wikipedia.org/wiki/Scuderia_AlphaTauri")}. Despite suffering with tonsillitis, Norris came sixth in 
        the {wikiLink("Monaco Grand Prix", "https://en.wikipedia.org/wiki/2022_Monaco_Grand_Prix")} and secured the fastest lap. He qualified fifteenth at the {wikiLink("Austrian Grand Prix", "https://en.wikipedia.org/wiki/2022_Austrian_Grand_Prix")} but recovered in 
        the sprint and the race to finish seventh. He then qualified fourth for the {wikiLink("Hungarian Grand Prix", "https://en.wikipedia.org/wiki/2022_Hungarian_Grand_Prix")} but was unable to keep {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")} 
        and the two {wikiLink("Red Bulls", "https://en.wikipedia.org/wiki/Red_Bull_Racing")} behind and finished seventh.
      </p>

      <p>
        Norris started seventeenth at the {wikiLink("Belgian Grand Prix", "https://en.wikipedia.org/wiki/2022_Belgian_Grand_Prix")} with a power unit components penalty and failed to score points, finishing twelfth. He started third at 
        the {wikiLink("Italian Grand Prix", "https://en.wikipedia.org/wiki/2022_Italian_Grand_Prix")} but again lost out to the Red Bulls and finished seventh. His best result since Emilia Romagna came at the {wikiLink("Singapore Grand Prix", "https://en.wikipedia.org/wiki/2022_Singapore_Grand_Prix")} 
        where he and Ricciardo finished fourth and fifth respectively, briefly promoting McLaren to fourth place above {wikiLink("Alpine", "https://en.wikipedia.org/wiki/Alpine_F1_Team")} in the Constructors' Championship. He scored points in 
        the {wikiLink("São Paulo Grand Prix", "https://en.wikipedia.org/wiki/2022_S%C3%A3o_Paulo_Grand_Prix")} sprint, but a gearbox failure eliminated him from the points positions in the race. He ended the season with sixth place and the fastest lap at 
        the {wikiLink("Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2022_Abu_Dhabi_Grand_Prix")}. He finished seventh in the Drivers' Championship and scored 122 points to Ricciardo's 37.
      </p>

      <div className="clear-both"></div>

      <section id="season-2023" className="space-y-4 scroll-mt-24"></section>
      {/* 2023 Season */}
      <h4 className="text-lg font-semibold text-red-400 mb-1">2023 Season</h4>

      <p>
        Norris remained with {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")} for the 2023 season, partnered by rookie {wikiLink("Oscar Piastri", "https://en.wikipedia.org/wiki/Oscar_Piastri")} who replaced Ricciardo. At the first race at the {wikiLink("Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2023_Bahrain_Grand_Prix")}, both McLaren cars experienced reliability issues. Norris made six pit stops to manage the problem and finished seventeenth and last of the finishing drivers. He was eliminated in the first qualifying session (Q1) for the first time since 2019 at the {wikiLink("Saudi Arabian Grand Prix", "https://en.wikipedia.org/wiki/2023_Saudi_Arabian_Grand_Prix")} after hitting the wall. He received damage from debris on the opening lap and again finished seventeenth. The {wikiLink("Australian Grand Prix", "https://en.wikipedia.org/wiki/2023_Australian_Grand_Prix")} saw McLaren score their first points of the season; Piastri finished eighth and Norris improved from thirteenth at the start to sixth at the finish. Another Q1 knockout at the {wikiLink("Miami Grand Prix", "https://en.wikipedia.org/wiki/2023_Miami_Grand_Prix")} and contact with {wikiLink("Nyck de Vries", "https://en.wikipedia.org/wiki/Nyck_de_Vries")} at the start resulted in another finish outside the points. He qualified third at the {wikiLink("Spanish Grand Prix", "https://en.wikipedia.org/wiki/2023_Spanish_Grand_Prix")} but first-lap contact with {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")} dropped him to the back. He was demoted from a points finish at the {wikiLink("Canadian Grand Prix", "https://en.wikipedia.org/wiki/2023_Canadian_Grand_Prix")} with a penalty for "unsportsmanlike behaviour" after slowing excessively whilst entering the pit lane to create a gap to Piastri ahead.
      </p>

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
        McLaren brought upgrades to Norris's {wikiLink("MCL60", "https://en.wikipedia.org/wiki/McLaren_MCL60")} for the {wikiLink("Austrian Grand Prix", "https://en.wikipedia.org/wiki/2023_Austrian_Grand_Prix")}; team principal {wikiLink("Andrea Stella", "https://en.wikipedia.org/wiki/Andrea_Stella_(engineer)")} commented that "pretty much the entire car" had been redesigned. Norris qualified fourth for the race, third for the sprint and finished fourth in the race. More success came at the {wikiLink("British Grand Prix", "https://en.wikipedia.org/wiki/2023_British_Grand_Prix")} where Norris and Piastri qualified second and third respectively, a result Norris described as "insane". He passed {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} at the first corner and led the race for four laps before Verstappen regained the place. In the later stages of the race, Norris held off Lewis Hamilton to finish second, making him the first McLaren driver to finish on the podium at {wikiLink("Silverstone Circuit", "https://en.wikipedia.org/wiki/2010_British_Grand_Prix")} since Hamilton in 2010. He then qualified third and defended from {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")} to finish second at the {wikiLink("Hungarian Grand Prix", "https://en.wikipedia.org/wiki/2023_Hungarian_Grand_Prix")}, the first consecutive podiums of his Formula One career. He accidentally broke Verstappen's first place trophy during the podium celebrations; the trophy was later replaced. He started second at the {wikiLink("Dutch Grand Prix", "https://en.wikipedia.org/wiki/2023_Dutch_Grand_Prix")} but criticised his team's decision not to change tyres during a rain shower; he went on to finish seventh.
      </p>

      <p>
        Four consecutive podiums began with the {wikiLink("Singapore Grand Prix", "https://en.wikipedia.org/wiki/2023_Singapore_Grand_Prix")}, where he held off the {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes_in_F1")} duo of Hamilton and George Russell and finished less than a second behind race winner Carlos Sainz Jr., his former McLaren teammate. He qualified third, behind teammate Piastri, at the {wikiLink("Japanese Grand Prix", "https://en.wikipedia.org/wiki/2023_Japanese_Grand_Prix")}, but passed him in the race to finish second. He led much of the {wikiLink("United States Grand Prix", "https://en.wikipedia.org/wiki/2023_United_States_Grand_Prix")} having qualified second and passed Charles Leclerc at the start, but was ultimately overtaken by Verstappen and Hamilton. Hamilton's post-race disqualification promoted Norris to second place. Norris failed to set a competitive qualifying time at the {wikiLink("Mexico City Grand Prix", "https://en.wikipedia.org/wiki/2023_Mexico_City_Grand_Prix")}, starting seventeenth, but recovered to finish the race fifth. At the {wikiLink("São Paulo Grand Prix", "https://en.wikipedia.org/wiki/2023_S%C3%A3o_Paulo_Grand_Prix")}, he claimed sprint race pole position but was overtaken by Verstappen at the first corner and finished second. He also finished second in the main race, having started sixth and gained four places at the start. His only retirement of the season came at the penultimate round, the {wikiLink("Las Vegas Grand Prix", "https://en.wikipedia.org/wiki/2023_Las_Vegas_Grand_Prix")}. He qualified sixteenth and crashed heavily on the third lap. He was taken to hospital for precautionary checks and was discharged the same day.
      </p>

      <p>
        Norris scored 205 points in total to Piastri's 97 and placed sixth in the Drivers' Championship, matching his result from 2021. He finished only one point behind fourth place, as {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")} and Charles Leclerc tied on 206 points.
      </p>

      <div className="clear-both"></div>

      <section id="maiden-win" className="space-y-4 scroll-mt-24"></section>
      {/* 2024 Season - Maiden Win */}
      <h4 className="text-lg font-semibold text-red-400 mb-1">2024: Maiden Win and Title Challenge</h4>

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
        Ahead of the 2024 season, Norris signed a new multi-year contract with {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")}.
        He finished sixth at the first race, the {wikiLink("Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2024_Bahrain_Grand_Prix")} and took his first podium of the season at the {wikiLink("Australian Grand Prix", "https://en.wikipedia.org/wiki/2024_Australian_Grand_Prix")}, starting and finishing third. He took the season's first sprint pole at the {wikiLink("Chinese Grand Prix", "https://en.wikipedia.org/wiki/2024_Chinese_Grand_Prix")}, but dropped positions on the opening lap of the sprint and finished sixth. For the main race, he qualified fourth, overtook {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")} and gained on {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")} in the pits to finish second, his fifteenth Formula One podium.
      </p>

      <p>
        At the {wikiLink("Miami Grand Prix", "https://en.wikipedia.org/wiki/2024_Miami_Grand_Prix")}, he retired from the sprint after a first-corner collision with Alonso. He qualified fifth for the main race and led the race after the drivers ahead had made pit stops. A subsequent safety car allowed Norris to pit and retain his lead, which he held ahead of {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} at the restart to claim his maiden Grand Prix victory after 110 races and his 16th podium finish.
      </p>

      <p>
        After Miami, Norris achieved five podiums before the summer break. He scored podiums at {wikiLink("Imola", "https://en.wikipedia.org/wiki/2024_Emilia_Romagna_Grand_Prix")}, {wikiLink("Canada", "https://en.wikipedia.org/wiki/2024_Canadian_Grand_Prix")}, and {wikiLink("Spain", "https://en.wikipedia.org/wiki/2024_Spanish_Grand_Prix")}, where he took pole position. Norris failed to score a podium at {wikiLink("Monaco", "https://en.wikipedia.org/wiki/2024_Monaco_Grand_Prix")} and in {wikiLink("Austria", "https://en.wikipedia.org/wiki/2024_Austrian_Grand_Prix")}, where he sparred with Verstappen before making race-ending contact with him.
      </p>

      <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="/drivers/norris/celeb1.jpg"
          alt="Norris racing at Monza during the 2016 Eurocup Formula Renault 2.0 championship"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
         Norris (centre) on the podium after winning the {wikiLink("2024 Dutch Grand Prix", "https://en.wikipedia.org/wiki/2024_Dutch_Grand_Prix")}
        </figcaption>
      </figure>

      <p>
        Following the summer break, Norris achieved pole position at the {wikiLink("Dutch Grand Prix", "https://en.wikipedia.org/wiki/2024_Dutch_Grand_Prix")}. He reclaimed first place during the race and extended the lead to win McLaren's first at Circuit Zandvoort since 1985. He then took pole position for the {wikiLink("Italian Grand Prix", "https://en.wikipedia.org/wiki/2024_Italian_Grand_Prix")} marking consecutive poles for the first time in his career. He finished third behind teammate {wikiLink("Oscar Piastri", "https://en.wikipedia.org/wiki/Oscar_Piastri")} and {wikiLink("Charles Leclerc", "https://en.wikipedia.org/wiki/Charles_Leclerc")}. 
      </p>

      <p>
        Norris took his fifth pole of the season at the {wikiLink("Singapore Grand Prix", "https://en.wikipedia.org/wiki/2024_Singapore_Grand_Prix")} and claimed victory leading every lap. He battled Verstappen at the {wikiLink("United States Grand Prix", "https://en.wikipedia.org/wiki/2024_United_States_Grand_Prix")} but was denied a podium after a penalty. At the {wikiLink("Mexico City Grand Prix", "https://en.wikipedia.org/wiki/2024_Mexico_City_Grand_Prix")}, Norris finished second.
      </p>

      <p>
        Despite winning the sprint at the {wikiLink("São Paulo Grand Prix", "https://en.wikipedia.org/wiki/2024_S%C3%A3o_Paulo_Grand_Prix")}, Norris finished seventh in the main race after various setbacks. He concluded the season with a victory at the {wikiLink("Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2024_Abu_Dhabi_Grand_Prix")}, securing McLaren's first constructors' title since 1998.
      </p>

      <div className="clear-both"></div>

      <section id="season-2025" className="space-y-4 scroll-mt-24"></section>
      {/* 2025 Season - Title Challenge */}
      <h4 className="text-lg font-semibold text-red-400 mb-1">2025 Season: Title Challenge</h4>

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
        {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")} entered the{" "}
        {wikiLink("2025 Formula One World Championship", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")} as title favourites, with Norris stating he had learned 
        "a lot of lessons" in his bid to become World Drivers' Champion. He took pole for the season-opening{" "}
        {wikiLink("Australian Grand Prix", "https://en.wikipedia.org/wiki/2025_Australian_Grand_Prix")}, defending the lead from teammate{" "}
        {wikiLink("Oscar Piastri", "https://en.wikipedia.org/wiki/Oscar_Piastri")} and{" "}
        {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} in wet conditions to claim victory and the championship lead.
      </p>

      <p>
        After finishing eighth in the{" "}
        {wikiLink("Chinese Grand Prix", "https://en.wikipedia.org/wiki/2025_Chinese_Grand_Prix")} sprint, he claimed second in the main race behind Piastri. In{" "}
        {wikiLink("Japan", "https://en.wikipedia.org/wiki/2025_Japanese_Grand_Prix")}, he finished second to Verstappen, who reduced his championship lead to a single point. 
        Norris increased his championship lead to three points over Piastri with his third-placed finish at the{" "}
        {wikiLink("Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2025_Bahrain_Grand_Prix")}, after qualifying sixth and receiving a penalty for a start infringement.
      </p>

      <div className="clear-both"></div>
  </>
  );
  
  export default f1Career;
  