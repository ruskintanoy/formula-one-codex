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
        Tsunoda started his professional karting career in 2010, joining the{" "}
        {wikiLink("JAF Junior Karting Championship", "https://en.wikipedia.org/wiki/JAF_Junior_Karting_Championship")}
        , before moving to the{" "}
        {wikiLink("regional class", "https://en.wikipedia.org/wiki/Regional_karting_series")} in 2013 and to the{" "}
        {wikiLink("national class", "https://en.wikipedia.org/wiki/National_karting_series")} in 2014.
      </p>
  
    {/* Japanese Formula 4 */}
    <section id="f4" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">Japanese Formula 4</h3>
      
      <p>
        In 2016, Tsunoda graduated from{" "}
        {wikiLink("Honda's Suzuka Circuit Racing School", "https://ja.wikipedia.org/wiki/%E9%88%B0%E9%B9%BF%E3%82%B5%E3%83%BC%E3%82%AD%E3%83%83%E3%83%88%E3%83%AC%E3%83%BC%E3%82%B7%E3%83%B3%E3%82%B0%E3%82%B9%E3%82%AF%E3%83%BC%E3%83%AB")}
        in the advanced formula class and became a member of the{" "}
        {wikiLink("Honda Formula Dream Project", "https://en.wikipedia.org/wiki/Honda_Formula_Dream_Project")}
        . In the same year, he made his single-seater debut in the{" "}
        {wikiLink("F4 Japanese Championship", "https://en.wikipedia.org/wiki/F4_Japanese_Championship")}
        with the Sutekina Racing Team for a one-off event at{" "}
        {wikiLink("Suzuka", "https://en.wikipedia.org/wiki/Suzuka_International_Racing_Course")}. He claimed his first podium with 2nd in the first race and finished 4th in the second race.
      </p>

      <p>
        In 2017, Tsunoda started his first full season of single-seater racing in the{" "}
        {wikiLink("F4 Japanese Championship", "https://en.wikipedia.org/wiki/F4_Japanese_Championship")}
        while also contesting in the regional East series of the{" "}
        {wikiLink("JAF F4 Japanese Championship", "https://en.wikipedia.org/wiki/Japan_Formula_4")}
        . At {wikiLink("Okayama", "https://en.wikipedia.org/wiki/Okayama_International_Circuit")}, he won his first race. Tsunoda went on to win the regional championship while finishing third in the national Formula 4 championship.
      </p>

      <p>
        Tsunoda continued to race in Japanese F4 in 2018 with the Honda Formula Dream Project team. He amassed seven wins and claimed the title during the final race at{" "}
        {wikiLink("Motegi", "https://en.wikipedia.org/wiki/Twin_Ring_Motegi")}
        , beating rival{" "}
        {wikiLink("Teppei Natori", "https://en.wikipedia.org/wiki/Teppei_Natori")}
        by 14 points.
      </p>

      <div className="clear-both"></div>

      {/* FIA Formula 3 Championship */}
      <section id="fia-formula-3-championship" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">
        FIA Formula 3 Championship
      </h3>

      <div className="clear-both"></div>

      {/* Tsunoda Racing at the 2019 Spielberg Formula 3 round */}
      <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="//upload.wikimedia.org/wikipedia/commons/thumb/0/09/FIA_F3_Austria_2019_Nr._14_Tsunoda.jpg/250px-FIA_F3_Austria_2019_Nr._14_Tsunoda.jpg"
          alt="Tsunoda racing at the 2019 Spielberg Formula 3 round"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          Tsunoda racing at the{" "}
          {wikiLink("2019 Spielberg Formula 3 round", "https://en.wikipedia.org/wiki/2019_Spielberg_Formula_3_round")}
        </figcaption>
      </figure>

      <p>
        With {wikiLink("Honda", "https://en.wikipedia.org/wiki/Honda_in_Formula_One")} tying up with{" "}
        {wikiLink("Red Bull", "https://en.wikipedia.org/wiki/Red_Bull_Racing")} in{" "}
        {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")}, Tsunoda also joined the Red Bull{" "}
        {wikiLink("junior team", "https://en.wikipedia.org/wiki/Red_Bull_Junior_Team")} alongside the Honda programme.
        At the end of 2018, Tsunoda was announced to join{" "}
        {wikiLink("Jenzer Motorsport", "https://en.wikipedia.org/wiki/Jenzer_Motorsport")} in the newly announced{" "}
        {wikiLink("FIA Formula 3 Championship", "https://en.wikipedia.org/wiki/FIA_Formula_3_Championship")}. He scored tenth place and his first point during the first race in{" "}
        {wikiLink("Barcelona", "https://en.wikipedia.org/wiki/2019_Barcelona_Formula_3_round")}, and ninth in Race 2. More points came in{" "}
        {wikiLink("Paul Ricard", "https://en.wikipedia.org/wiki/2019_Le_Castellet_Formula_3_round")} where he came away seventh in Race 1, but struggled to ninth in Race 2 from second. Tsunoda failed to score points in{" "}
        {wikiLink("Austria", "https://en.wikipedia.org/wiki/2019_Spielberg_Formula_3_round")}, but came back during Race 2 in{" "}
        {wikiLink("Silverstone", "https://en.wikipedia.org/wiki/2019_Silverstone_Formula_3_round")} with seventh. He scored points in{" "}
        {wikiLink("Budapest", "https://en.wikipedia.org/wiki/2019_Budapest_Formula_3_round")}, with ninth and sixth place. In{" "}
        {wikiLink("Spa-Francorchamps", "https://en.wikipedia.org/wiki/2019_Spa-Francorchamps_Formula_3_round")}, he qualified in an astonishing third place. The Japanese racer dropped to sixth in Race 1, but from third in Race 2, scored a breakthrough second place.
      </p>

      <p>
        {wikiLink("Monza", "https://en.wikipedia.org/wiki/2019_Monza_Formula_3_round")} was fruitful for Tsunoda, finishing fourth on the road but was promoted to the podium following a penalty for{" "}
        {wikiLink("Marcus Armstrong", "https://en.wikipedia.org/wiki/Marcus_Armstrong")}. In Race 2, a storming start from sixth moved him to third at the start. After passing{" "}
        {wikiLink("Fabio Scherer", "https://en.wikipedia.org/wiki/Fabio_Scherer")}, he would go by{" "}
        {wikiLink("Jake Hughes", "https://en.wikipedia.org/wiki/Jake_Hughes")} on lap 15 and claim his only F3 win of the year. He finished ninth in the championship with 67 points, including three podiums and a win, scoring all of the Jenzer team's points during the season.
      </p>

      <p>
        Tsunoda finished 11th at the non-championship{" "}
        {wikiLink("Macau Grand Prix", "https://en.wikipedia.org/wiki/2019_Macau_Grand_Prix")}.
      </p>

      <div className="clear-both"></div>

      {/* Euroformula Open */}
      <section id="euroformula-open" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">Euroformula Open</h3>

      <p>
        Tsunoda also competed for {wikiLink("Motopark", "/wiki/Motopark_Academy")} in the {wikiLink("Euroformula Open Championship", "/wiki/2019_Euroformula_Open_Championship")}, following the cancellation of Formula European Masters. 
        After a second-place finish in the first race at {wikiLink("Paul Ricard", "/wiki/Circuit_Paul_Ricard")} and achieving third place in the {wikiLink("Pau Grand Prix", "/wiki/Pau_Grand_Prix")}, Tsunoda claimed his maiden championship win in the second race at {wikiLink("Hockenheim", "/wiki/Hockenheimring")}.
        In {wikiLink("Spa-Francorchamps", "/wiki/Circuit_de_Spa-Francorchamps")}, Tsunoda was involved in a collision with teammate {wikiLink("Liam Lawson", "/wiki/Liam_Lawson")} during the second race, having scored second place in Race 1.
        He took a double podium during the {wikiLink("Monza", "/wiki/Monza_Circuit")} final round. Despite missing two rounds due to F3 commitments, Tsunoda placed fourth in the standings with 151 points, one win, and five more podiums.
      </p>

      <div className="clear-both"></div>

      {/* Toyota Racing Series */}
      <section id="toyota-racing-series" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">Toyota Racing Series</h3>

      <p>
        Before the start of his 2020 season, Tsunoda partook in the {wikiLink("2020 Toyota Racing Series", "/wiki/2020_Toyota_Racing_Series")} with {wikiLink("M2 Competition", "/wiki/M2_Competition")} alongside {wikiLink("Liam Lawson", "/wiki/Liam_Lawson")}.
        Tsunoda scored one win throughout the campaign, during the second race at the opening round in {wikiLink("Highlands Motorsport Park", "/wiki/Highlands_Motorsport_Park")}.
        He claimed two further podium finishes later in the season, landing him fourth place in the championship.
      </p>

      <div className="clear-both"></div>
    
      {/* FIA Formula 2 Championship (2020) */}
      <section id="fia-formula-2" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">
        FIA Formula 2 Championship (2020)
      </h3>

      <p>
        In the beginning of 2020, {wikiLink("Honda", "https://en.wikipedia.org/wiki/Honda")} announced that Tsunoda would join {wikiLink("Carlin", "https://en.wikipedia.org/wiki/Carlin_Motorsport")} to race in the {wikiLink("FIA Formula 2 Championship", "https://en.wikipedia.org/wiki/FIA_Formula_2_Championship")} alongside new {wikiLink("Red Bull junior", "https://en.wikipedia.org/wiki/Red_Bull_Junior_Team")} {wikiLink("Jehan Daruvala", "https://en.wikipedia.org/wiki/Jehan_Daruvala")}. The season was set to start in {wikiLink("Bahrain", "https://en.wikipedia.org/wiki/Bahrain_International_Circuit")}, but started in {wikiLink("Austria", "https://en.wikipedia.org/wiki/2020_Spielberg_Formula_3_round")} in July due to the {wikiLink("COVID-19 pandemic", "https://en.wikipedia.org/wiki/COVID-19_pandemic")}. He topped free practice on his debut, but only qualified 12th. His races were disappointing, colliding with Daruvala on the opening lap of the feature race saw him finish last, but recovered to 11th on Sunday. During the {wikiLink("second Austrian round", "https://en.wikipedia.org/wiki/2020_2nd_Spielberg_Formula_2_round")}, Tsunoda stormed to his first pole. He would lead the race for much of the race under wet conditions, but encountered a radio problem that delayed his pit stop. He would pit two laps later than expected and drop to fourth place, but fought past the {wikiLink("Virtuosi", "https://en.wikipedia.org/wiki/Virtuosi_Racing")} drivers for second place. More disappointment followed as a engine issue saw him drop out of the race on lap 10. Another disappointing round in {wikiLink("Hungary", "https://en.wikipedia.org/wiki/2020_Budapest_Formula_2_round")} rewarded him with zero points, with a 16th and 18th place.
      </p>

      <p>
        Tsunoda qualified ninth in {wikiLink("Silverstone", "https://en.wikipedia.org/wiki/2020_Silverstone_Formula_2_round")}, and made a masterclass charge, passing {wikiLink("Christian Lundgaard", "https://en.wikipedia.org/wiki/Christian_Lundgaard")} on the last lap for third place. Another sprint race disappointment followed, as he was taken out by {wikiLink("Callum Ilott", "https://en.wikipedia.org/wiki/Callum_Ilott")} on the opening lap. During the {wikiLink("second Silverstone round", "https://en.wikipedia.org/wiki/2020_2nd_Silverstone_Formula_2_round")}, Tsunoda qualified tenth and moved up to sixth for the feature race. In the sprint race, he remained in third for most of the race, until lap 19 of 21, where the two {wikiLink("Prema", "https://en.wikipedia.org/wiki/Prema_Racing")} drivers ahead collided and promoted Tsunoda for his maiden win. Post-race, Tsunoda stated that "he had the potential for P1 even without late Prema crash". Tsunoda qualified sixth in {wikiLink("Barcelona", "https://en.wikipedia.org/wiki/2020_Barcelona_Formula_2_round")}. Tsunoda would briefly lead on lap 30 after a safety car restart due to the frontrunners pitting again, but they caught up on fresher tyres, including fellow compatriot {wikiLink("Nobuharu Matsushita", "https://en.wikipedia.org/wiki/Nobuharu_Matsushita")}, and he dropped to fourth. He again finished fourth in the sprint race.
      </p>

      <p>
        Tsunoda took his second pole of the year in {wikiLink("Spa-Francorchamps", "https://en.wikipedia.org/wiki/2020_Spa-Francorchamps_Formula_2_round")}. After a slow pit stop during the feature race, Tsunoda would fall behind {wikiLink("Nikita Mazepin", "https://en.wikipedia.org/wiki/Nikita_Mazepin")} but fought back to him by lap 20. Mazepin would push Tsunoda wide on the penultimate lap while defending, which earned the Russian a five-second time penalty. Tsunoda would be promoted to the win having finished second on the road. In the sprint race, Tsunoda finished in ninth as a penalty for hitting {wikiLink("Ilott", "https://en.wikipedia.org/wiki/Callum_Ilott")} at the start saw him drop out of the points due to a time penalty. He secured second in qualifying for {wikiLink("Monza", "https://en.wikipedia.org/wiki/2020_Monza_Formula_2_round")}. A slow start in the feature race dropped him to fifth, Tsunoda made it up by crossing the line in fourth place. In the sprint race, mechanical woes saw him out early. In {wikiLink("Mugello", "https://en.wikipedia.org/wiki/2020_Mugello_Formula_2_round")}, he qualified 11th and finished eighth on the road in the feature race, but was penalised for colliding with {wikiLink("Dan Ticktum", "https://en.wikipedia.org/wiki/Dan_Ticktum")}, dropping to 16th. His disappointing weekend continued in the sprint race, as he damaged his front wing hitting the back of {wikiLink("Felipe Drugovich", "https://en.wikipedia.org/wiki/Felipe_Drugovich")} on the fourth last lap, and was forced to pit which dropped him to 20th.
      </p>

      <p>
        In {wikiLink("Sochi", "https://en.wikipedia.org/wiki/2020_Sochi_Formula_2_round")}, Tsunoda claimed his third pole ahead of teammate Daruvala. He settled for second place after being overtaken by {wikiLink("Mick Schumacher", "https://en.wikipedia.org/wiki/Mick_Schumacher")}, although he would win a battle over {wikiLink("Ilott", "https://en.wikipedia.org/wiki/Callum_Ilott")} for runners-up position on the last lap. In the sprint race, Tsunoda finished in sixth. Tsunoda sat third in the standings heading into the two-month break before the final two rounds, 44 points behind leader Schumacher. In {wikiLink("Bahrain", "https://en.wikipedia.org/wiki/2020_Sakhir_Formula_2_round")}, Tsunoda spun out on his flying lap, which left him down in last. He made an incredible charge on the alternate strategy, charging to sixth. In the sprint race, Tsunoda suffered a puncture on lap 1 caused by contact with {wikiLink("Marcus Armstrong", "https://en.wikipedia.org/wiki/Marcus_Armstrong")} which ruined his race, ending in 15th. He took pole for the {wikiLink("second Bahrain round", "https://en.wikipedia.org/wiki/2020_2nd_Sakhir_Formula_2_round")}. Tsunoda had another feature race battle with Mazepin, but the Japanese driver would win out and take another victory. In the sprint race, a last lap charge passing {wikiLink("Ticktum", "https://en.wikipedia.org/wiki/Dan_Ticktum")} would seal second place. Overall, Tsunoda took three wins, four pole positions, seven podiums and finished third in the championship with 200 points. He was the best-placed rookie and scored more points than any other driver across the feature races.
      </p>

      <div className="clear-both"></div>
  </>
);

export default juniorCareer;
