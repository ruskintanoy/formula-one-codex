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
        {/* Origins */}
        <section id="redbull-origins" className="space-y-4 scroll-mt-24"></section>
        <h3 className="text-2xl font-bold text-red-600 mb-2">Origins</h3>

        <p>
        The current Red Bull team traces its origins back to the {wikiLink("Stewart Grand Prix", "https://en.wikipedia.org/wiki/Stewart_Grand_Prix")} outfit that made its debut in {wikiLink("1997", "https://en.wikipedia.org/wiki/1997_Formula_One_World_Championship")}. {wikiLink("Jackie Stewart", "https://en.wikipedia.org/wiki/Jackie_Stewart")} sold his team to the {wikiLink("Ford Motor Company", "https://en.wikipedia.org/wiki/Ford_Motor_Company")} late in 1999, and Ford made the decision to rebrand the team {wikiLink("Jaguar Racing", "https://en.wikipedia.org/wiki/Jaguar_Racing")} with little subsequent success over the next five years.
        </p>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Jean-Christophe_Boullion_1995_Britain.jpg/250px-Jean-Christophe_Boullion_1995_Britain.jpg"
            alt="Red Bull's involvement in Formula One dates back to 1995, when it first sponsored the Sauber team."
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            Red Bull's involvement in Formula One dates back to {wikiLink("1995", "https://en.wikipedia.org/wiki/1995_Formula_One_World_Championship")}, when it first sponsored the {wikiLink("Sauber", "https://en.wikipedia.org/wiki/Sauber")} team.
        </figcaption>
        </figure>

        <p>
        The {wikiLink("Jaguar Racing", "https://en.wikipedia.org/wiki/Jaguar_Racing")} {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} constructor and racing team was put up for sale in September 2004 when {wikiLink("Ford", "https://en.wikipedia.org/wiki/Ford_Motor_Company")} decided it could "no longer make a compelling business case for any of its brands to compete in Formula One." {wikiLink("Red Bull", "https://en.wikipedia.org/wiki/Red_Bull")} agreed its purchase of Jaguar Racing on the final day of the sale, 15 November 2004. {wikiLink("BBC Sport", "https://en.wikipedia.org/wiki/BBC_Sport")} reported that Ford asked bidders for a symbolic US$1 in return for a commitment to invest US$400 million in the team over three Grand Prix seasons. The team continued to have access to the {wikiLink("Cosworth", "https://en.wikipedia.org/wiki/Cosworth")} engine developed for their 2005 chassis, and the operation continued under the new title. {wikiLink("Christian Horner", "https://en.wikipedia.org/wiki/Christian_Horner")} was installed as the new team boss and lined up {wikiLink("David Coulthard", "https://en.wikipedia.org/wiki/David_Coulthard")} and {wikiLink("Christian Klien", "https://en.wikipedia.org/wiki/Christian_Klien")} to drive for the team. The team operated under a British racing licence from {wikiLink("2005", "https://en.wikipedia.org/wiki/2005_Formula_One_World_Championship")} to {wikiLink("2006", "https://en.wikipedia.org/wiki/2006_Formula_One_World_Championship")}.
        </p>

        <p>
        Red Bull Racing was not the start of Red Bull's involvement in Formula One, as they sponsored {wikiLink("Sauber", "https://en.wikipedia.org/wiki/Sauber")} from 1995 to 2004. After buying a Formula One team of its own, Red Bull ended its long-term partnership with the Swiss team. Red Bull also runs a young drivers programme, the {wikiLink("Red Bull Junior Team", "https://en.wikipedia.org/wiki/Red_Bull_Junior_Team")}, whereby Red Bull sponsors promising young drivers. High-profile drivers who have received this backing include {wikiLink("Enrique Bernoldi", "https://en.wikipedia.org/wiki/Enrique_Bernoldi")}, {wikiLink("Christian Klien", "https://en.wikipedia.org/wiki/Christian_Klien")}, {wikiLink("Patrick Friesacher", "https://en.wikipedia.org/wiki/Patrick_Friesacher")}, {wikiLink("Vitantonio Liuzzi", "https://en.wikipedia.org/wiki/Vitantonio_Liuzzi")}, and {wikiLink("Scott Speed", "https://en.wikipedia.org/wiki/Scott_Speed")}. Red Bull also sponsors many drivers and teams competing in the {wikiLink("FIA Formula 2 Championship", "https://en.wikipedia.org/wiki/FIA_Formula_2_Championship")}, Formula One's "feeder" series.
        </p>

        <div className="clear-both"></div>

        {/* Cosworth engines (2005) */}
        <section id="cosworth-2005" className="space-y-4 scroll-mt-24"></section>
        <h3 className="text-2xl font-bold text-red-600 mb-2">Cosworth engines (2005)</h3>

        {/* 2005 season */}
        <section id="season-2005" className="space-y-4 scroll-mt-24"></section>
        <h4 className="text-lg font-semibold text-red-400 mb-1">2005 season</h4>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Vitantonio_Liuzzi_2005_Britain.jpg/250px-Vitantonio_Liuzzi_2005_Britain.jpg"
            alt="Vitantonio Liuzzi during free practice at the 2005 British Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Vitantonio Liuzzi", "https://en.wikipedia.org/wiki/Vitantonio_Liuzzi")} during free practice at the {wikiLink("2005 British Grand Prix", "https://en.wikipedia.org/wiki/2005_British_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        Red Bull's owner, {wikiLink("Dietrich Mateschitz", "https://en.wikipedia.org/wiki/Dietrich_Mateschitz")}, reportedly tried to recruit former Formula One driver and {wikiLink("BMW Motorsport", "https://en.wikipedia.org/wiki/BMW_Motorsport")} chief (and fellow Austrian) {wikiLink("Gerhard Berger", "https://en.wikipedia.org/wiki/Gerhard_Berger")} to help guide the team through its debut season. However, this was never realised. For {wikiLink("2005", "https://en.wikipedia.org/wiki/2005_Formula_One_World_Championship")}, the chassis was christened the {wikiLink("RB1", "https://en.wikipedia.org/wiki/Red_Bull_RB1")}. Red Bull Racing used {wikiLink("Cosworth", "https://en.wikipedia.org/wiki/Cosworth")} engines in its maiden year due to the ease of continuing with the engine Jaguar Racing used.
        </p>

        <div className="clear-both"></div>

        <p>
            Former {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")} driver David Coulthard led the team. Coulthard was chosen for his experience, considered ideal to help lead the fledgling team. For the second car, Red Bull shared the drive between two of its young sponsored drivers: {wikiLink("Christian Klien", "https://en.wikipedia.org/wiki/Christian_Klien")}, who had driven for Jaguar in {wikiLink("2004", "https://en.wikipedia.org/wiki/2004_Formula_One_World_Championship")} and 2004 {wikiLink("F3000", "https://en.wikipedia.org/wiki/International_Formula_3000")} champion {wikiLink("Vitantonio Liuzzi", "https://en.wikipedia.org/wiki/Vitantonio_Liuzzi")}. At first, it was announced that Klien and Liuzzi would swap driving duty every four races, but by the end of the season, Liuzzi had appeared only four times.
        </p>

        <p>
            Red Bull's first year in Formula One was a massive success compared to its predecessors, Jaguar Racing. They were 6th in the Constructors' Championship for most of the season, only beaten by the fast-improving {wikiLink("BAR Hondas", "https://en.wikipedia.org/wiki/BAR_Honda")} at the end of the season. In a single season, they amassed more points than Jaguar had in {wikiLink("2003", "https://en.wikipedia.org/wiki/2003_Formula_One_World_Championship")} and 2004. Coulthard, after a poor 2003 and 2004 with McLaren, was a revelation for the team while Klien showed that he had vastly improved from 2004. Overall they scored 34 points; 24 for Coulthard, 9 for Klien and 1 for Liuzzi. Red Bull Racing was a consistent point and occasional {wikiLink("podium", "https://en.wikipedia.org/wiki/Podium#Usage_in_motorsport")} challenger for most of their debut season.
        </p>

        <p>
            American driver {wikiLink("Scott Speed", "https://en.wikipedia.org/wiki/Scott_Speed")}, who rose through the ranks in the American equivalent of the Red Bull Junior Team, {wikiLink("Red Bull Driver Search", "https://en.wikipedia.org/wiki/Red_Bull_Driver_Search")}, was Red Bull Racing's {wikiLink("third driver", "https://en.wikipedia.org/wiki/Third_driver")} in 2005 for the {wikiLink("Canadian", "https://en.wikipedia.org/wiki/2005_Canadian_Grand_Prix")} and {wikiLink("United States", "https://en.wikipedia.org/wiki/2005_United_States_Grand_Prix")} Grands Prix. Speed was attractive to Red Bull Racing because of his American nationality which would raise the profile of both Red Bull and {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} in America, a market where the sport has traditionally struggled to make an impact.
        </p>

        <div className="clear-both"></div>

        {/* Ferrari engines (2006) */}
        <section id="ferrari-2006" className="space-y-4 scroll-mt-24"></section>
        <h3 className="text-2xl font-bold text-red-600 mb-2">Ferrari engines (2006)</h3>

        {/* 2006 season */}
        <section id="season-2006" className="space-y-4 scroll-mt-24"></section>
        <h4 className="text-lg font-semibold text-red-400 mb-1">2006 season</h4>

        <p>
        On 23 April 2005, the team announced a deal to utilise customer {wikiLink("Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")} engines in {wikiLink("2006", "https://en.wikipedia.org/wiki/2006_Formula_One_World_Championship")}. This coincided with a rule change mandating the use of {wikiLink("V8 engines", "https://en.wikipedia.org/wiki/V8_engine")}, making it likely that both Red Bull Racing and Ferrari would use the same specification engine. Red Bull Racing continued to use {wikiLink("Michelin", "https://en.wikipedia.org/wiki/Michelin")} tyres, rather than the {wikiLink("Bridgestones", "https://en.wikipedia.org/wiki/Bridgestone")} used by Ferrari.
        </p>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Formel1_Rennwagen_%27RedBul-Racing%27_Hockenheim_2006_001.JPG/250px-Formel1_Rennwagen_%27RedBul-Racing%27_Hockenheim_2006_001.JPG"
            alt="Coulthard driving the RB2 at the 2006 German Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            Coulthard driving the {wikiLink("RB2", "https://en.wikipedia.org/wiki/Red_Bull_RB2")} at the {wikiLink("2006 German Grand Prix", "https://en.wikipedia.org/wiki/2006_German_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        On 8 November 2005, Red Bull Racing hired {wikiLink("Adrian Newey", "https://en.wikipedia.org/wiki/Adrian_Newey")}, the highly successful {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")} technical director.
        </p>

        <p>
        On 15 December 2005, the team's second car, the {wikiLink("Red Bull RB2", "https://en.wikipedia.org/wiki/Red_Bull_RB2")}, hit the track for the first time. David Coulthard completed a handful of laps of the {wikiLink("Silverstone", "https://en.wikipedia.org/wiki/Silverstone_Circuit")} circuit in England, and declared the new car was a "sexy looking thing". In early testing Red Bull was plagued with cooling problems and overheating of car components.
        </p>

        <p>
        At the opening race of the 2006 season in {wikiLink("Bahrain", "https://en.wikipedia.org/wiki/2006_Bahrain_Grand_Prix")}, {wikiLink("Christian Klien", "https://en.wikipedia.org/wiki/Christian_Klien")} qualified eighth (ahead of {wikiLink("Giancarlo Fisichella", "https://en.wikipedia.org/wiki/Giancarlo_Fisichella")}'s Renault and both BMWs). Coulthard had problems when he flat-spotted a tyre fighting with {wikiLink("Nick Heidfeld", "https://en.wikipedia.org/wiki/Nick_Heidfeld")}, and finished 10th; the cooling problems returned when his {wikiLink("Ferrari", "https://en.wikipedia.org/wiki/Ferrari")} engine expired on the slowing down lap, forcing a grid penalty for the following race. In {wikiLink("Malaysia", "https://en.wikipedia.org/wiki/2006_Malaysian_Grand_Prix")}, Coulthard made up several places from the back of the grid but was forced to retire with hydraulic problems, while Klien had an opening lap incident with {wikiLink("Kimi Räikkönen", "https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen")} and after pitting for repairs also retired with hydraulic failure. Coulthard got a point in {wikiLink("Australia", "https://en.wikipedia.org/wiki/2006_Australian_Grand_Prix")} after Scott Speed was penalised for passing him under the yellow flags. The following races were marred with retirements and lowly finishes.
        </p>

        <p>
        Coulthard finished 3rd at {wikiLink("Monaco", "https://en.wikipedia.org/wiki/2006_Monaco_Grand_Prix")}, the team's first podium finish. Team boss Christian Horner said before the race that if one of his cars were to finish on the podium, he would jump into a swimming pool at the track naked. He ended up jumping into the pool wearing only a red cape. Coincidentally both {wikiLink("Stewart Grand Prix", "https://en.wikipedia.org/wiki/Stewart_Grand_Prix")} and {wikiLink("Jaguar Racing", "https://en.wikipedia.org/wiki/Jaguar_Racing")}, the team's predecessors, also scored their maiden podiums at that race.
        </p>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Robert_Doornbos_2006_Brazil.jpg/250px-Robert_Doornbos_2006_Brazil.jpg"
            alt="Robert Doornbos replaced Klien for the last three races of the 2006 season"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Robert Doornbos", "https://en.wikipedia.org/wiki/Robert_Doornbos")} replaced Klien for the last three races of the {wikiLink("2006", "https://en.wikipedia.org/wiki/2006_Formula_One_World_Championship")} season.
        </figcaption>
        </figure>

        <p>
        Coulthard scored a point at {wikiLink("Montreal", "https://en.wikipedia.org/wiki/2006_Canadian_Grand_Prix")}, passing {wikiLink("Jenson Button", "https://en.wikipedia.org/wiki/Jenson_Button")} in the closing stages of the race despite starting in last place due to an engine change that warranted a grid penalty. Klien also fared well, driving the second RB2 to 11th position. At the {wikiLink("United States Grand Prix", "https://en.wikipedia.org/wiki/2006_United_States_Grand_Prix")} Klien retired along with eight other cars including {wikiLink("Toro Rosso", "https://en.wikipedia.org/wiki/Toro_Rosso")} driver Scott Speed on the first lap after a series of first corner incidents. Coulthard finished 7th.
        </p>

        <p>
        The team finished 7th in the FIA Constructors' Championship, with 16 points, five points ahead of the struggling {wikiLink("Williams", "https://en.wikipedia.org/wiki/Williams_F1")} team. Coulthard (14 pts) finished in 13th place in the drivers' standings, the departed Klien (2 pts) was classified in 18th position. Klien's replacement, {wikiLink("Robert Doornbos", "https://en.wikipedia.org/wiki/Robert_Doornbos")}, failed to score any points.
        </p>

        <div className="clear-both"></div>

        {/* Renault engines (2007–2018) */}
        <section id="renault-2007-2018" className="space-y-4 scroll-mt-24"></section>
        <h3 className="text-2xl font-bold text-red-600 mb-2">Renault engines (2007–2018)</h3>

        {/* Customer era (2007–2010) */}
        <section id="customer-era-2007-2010" className="space-y-4 scroll-mt-24"></section>
        <h4 className="text-lg font-semibold text-red-400 mb-1">Customer era (2007–2010)</h4>

        {/* 2007 season */}
        <section id="2007 season" className="space-y-4 scroll-mt-24" />
        <h5 className="text-base font-semibold text-red-300 mb-1">2007 season</h5>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Mark_Webber_2007_Malaysia_%28cropped%29.jpg/250px-Mark_Webber_2007_Malaysia_%28cropped%29.jpg"
            alt="Mark Webber driving for the team at the 2007 Malaysian Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Mark Webber", "https://en.wikipedia.org/wiki/Mark_Webber_(racing_driver)")} driving for the team at the {wikiLink("2007 Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2007_Malaysian_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        {wikiLink("2007", "https://en.wikipedia.org/wiki/2007_Formula_One_World_Championship")} saw the debut of the Adrian Newey designed {wikiLink("RB3", "https://en.wikipedia.org/wiki/Red_Bull_RB3")}. After lengthy discussions over Red Bull Racing's obligation to continue to use Ferrari engines for 2007, the team announced on 31 August 2006 they would use customer Renault engines for the 2007 season, the Ferrari contract being passed to {wikiLink("Scuderia Toro Rosso", "https://en.wikipedia.org/wiki/Scuderia_Toro_Rosso")}.
        </p>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Mark_Webber_2007_Britain_2.jpg/250px-Mark_Webber_2007_Britain_2.jpg"
            alt="Mark Webber driving for RBR at the 2007 British Grand Prix. Note the special Wings for Life livery."
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Mark Webber", "https://en.wikipedia.org/wiki/Mark_Webber_(racing_driver)")} driving for RBR at the {wikiLink("2007 British Grand Prix", "https://en.wikipedia.org/wiki/2007_British_Grand_Prix")}. Note the special <i>Wings for Life</i> livery.
        </figcaption>
        </figure>

        <p>
        The team announced on 7 August 2006 that it had signed {wikiLink("Mark Webber", "https://en.wikipedia.org/wiki/Mark_Webber_(racing_driver)")} to drive alongside Coulthard for the 2007 season, replacing {wikiLink("Christian Klien", "https://en.wikipedia.org/wiki/Christian_Klien")} who ended his association with the team. Klien was replaced by {wikiLink("Robert Doornbos", "https://en.wikipedia.org/wiki/Robert_Doornbos")} for the last three races of 2006. Doornbos became the team's non-racing third driver for 2007. In 2007 Red Bull officially became an Austrian constructor by receiving an Austrian licence, though continued to operate from the same base in Britain.
        </p>

        <p>
        Despite qualifying in 7th place for his home race in {wikiLink("Melbourne", "https://en.wikipedia.org/wiki/2007_Australian_Grand_Prix")}, {wikiLink("Mark Webber", "https://en.wikipedia.org/wiki/Mark_Webber_(racing_driver)")} finished down in 13th due to a persistent problem with a fuel flap that closed as the pit mechanics went to put the fuel in and when it was opened it remained open until the next pit stop greatly increasing drag and decreasing airflow over the rear wing. It was worse for Coulthard however, who crashed heavily with {wikiLink("Williams", "https://en.wikipedia.org/wiki/Williams_F1")}'s {wikiLink("Alexander Wurz", "https://en.wikipedia.org/wiki/Alexander_Wurz")} in the late stages of the race. {wikiLink("Malaysia", "https://en.wikipedia.org/wiki/2007_Malaysian_Grand_Prix")} was more of the same for Webber, while Coulthard retired with brake problems. However, in {wikiLink("Bahrain", "https://en.wikipedia.org/wiki/2007_Bahrain_Grand_Prix")} the team showed improving pace, and Coulthard and Webber were running 7th (with Coulthard starting from the back) and 8th respectively before reliability problems put both out of the race in quick succession. However, in testing at {wikiLink("Barcelona", "https://en.wikipedia.org/wiki/Circuit_de_Catalunya")} Coulthard has set the fastest lap in the new configuration of the circuit (since superseded by {wikiLink("Felipe Massa", "https://en.wikipedia.org/wiki/Felipe_Massa")}). Coulthard secured the team's first points by scoring a gritty 5th with a faulty gearbox on his closing laps in {wikiLink("Spain", "https://en.wikipedia.org/wiki/2007_Spanish_Grand_Prix")}, while Webber was dogged with hydraulic problems all weekend, eventually retiring from the race after failing to set a competitive lap in qualifying. The performance hike the team experienced at the Catalan track left both drivers and team optimistic about their future results, with reliability troubles being as much a focus as the increase of their already competitive pace.
        </p>

        <p>
        Red Bull Racing further strengthened their technical department by hiring {wikiLink("Geoff Willis", "https://en.wikipedia.org/wiki/Geoff_Willis")} as Technical Director on 17 July 2007.
        </p>

        <p>
        After this, the drivers seemed to have a stroke of good luck during the unpredictable and exciting {wikiLink("2007 European Grand Prix", "https://en.wikipedia.org/wiki/2007_European_Grand_Prix")} in which Webber finished 3rd, his second career podium. Coulthard backed it up with a strong 5th which was made all the more impressive by the fact he started 20th on the grid after the team mistakenly kept him in the pits too long resulting in him not being able to complete another qualifying lap.
        </p>

        <p>
        Red Bull had a strong end to the season. Webber seemed on course for at least a podium at the {wikiLink("Japanese Grand Prix", "https://en.wikipedia.org/wiki/2007_Japanese_Grand_Prix")}, but he was involved in a crash with {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")}. During the same race, Coulthard again demonstrated his wet-weather ability and finished 4th.
        </p>

        <p>
        At the {wikiLink("Chinese Grand Prix", "https://en.wikipedia.org/wiki/2007_Chinese_Grand_Prix")}, Red Bull had a competitive qualifying session. Coulthard achieved 5th on the grid, along with Webber in 9th.
        </p>

        <div className="clear-both"></div>

        {/* 2008 season */}
        <section id="2008 season" className="space-y-4 scroll-mt-24" />
        <h5 className="text-base font-semibold text-red-300 mb-1">2008 season</h5>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Redbull-webber2-spain-2008-lrg.jpg/250px-Redbull-webber2-spain-2008-lrg.jpg"
            alt="Mark Webber driving for RBR at the 2008 Spanish Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Mark Webber", "https://en.wikipedia.org/wiki/Mark_Webber_(racing_driver)")} driving for RBR at the {wikiLink("2008 Spanish Grand Prix", "https://en.wikipedia.org/wiki/2008_Spanish_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        Red Bull continued with the same drivers in {wikiLink("2008", "https://en.wikipedia.org/wiki/2008_Formula_One_World_Championship")} and had numbers 9 and 10 on their cars after finishing 5th in the 2007 Constructors' Championship. Red Bull presented the {wikiLink("RB4", "https://en.wikipedia.org/wiki/Red_Bull_RB4")} at the {wikiLink("Jerez circuit", "https://en.wikipedia.org/wiki/Circuito_de_Jerez")} on 16 January and announced that {wikiLink("Sébastien Buemi", "https://en.wikipedia.org/wiki/S%C3%A9bastien_Buemi")} would be their test and reserve driver for 2008 combining it with his GP2 drive with the {wikiLink("Arden International", "https://en.wikipedia.org/wiki/Arden_International")} GP2 team.
        </p>

        <p>
        After Webber retired from the {wikiLink("opening round", "https://en.wikipedia.org/wiki/2008_Australian_Grand_Prix")} he went on to score 5 consecutive points finishes. Coulthard had a tougher start to the 2008 campaign due to poor qualifying, but a 3rd place at {wikiLink("Canada", "https://en.wikipedia.org/wiki/2008_Canadian_Grand_Prix")} gave Red Bull their first podium since the {wikiLink("2007 European Grand Prix", "https://en.wikipedia.org/wiki/2007_European_Grand_Prix")}. At the half-way mark, the team had notched up 24 points – the same as their total for the 2007 season – and were locked in a fierce battle with {wikiLink("Toyota", "https://en.wikipedia.org/wiki/Toyota_Racing_(Formula_One_team)")} and Renault for 4th in the Constructors' Championship. The team had also resolved the reliability problems that had dogged them the previous year.
        </p>

        <p>
        However, as the season progressed, Red Bull failed to keep up with their competitors. Red Bull scored just 5 points in the last 10 races, and {wikiLink("Toro Rosso", "https://en.wikipedia.org/wiki/Scuderia_Toro_Rosso")} – the Red Bull 'B team' – had overhauled their total by the season's end and won the rain-affected {wikiLink("Italian Grand Prix", "https://en.wikipedia.org/wiki/2008_Italian_Grand_Prix")}, becoming the first Red Bull-owned team to win a race. This fact led many to claim that the Renault engine powering the Red Bull was lacking in horsepower compared to the Ferrari and Mercedes engines. For the 2009 season, Renault was allowed to equalise the difference in engine power compared to their competitors after the single-year freeze in engine development from 2007.
        </p>

        <p>
        Webber notched up his 50th top ten grid position in 107 Grands Prix at the {wikiLink("Spanish Grand Prix", "https://en.wikipedia.org/wiki/2008_Spanish_Grand_Prix")}. Coulthard announced his retirement from Formula One at the {wikiLink("British Grand Prix", "https://en.wikipedia.org/wiki/2008_British_Grand_Prix")} and, despite hopes for a strong final home Grand Prix, was forced to retire on the first lap, which also occurred at his final race in {wikiLink("Brazil", "https://en.wikipedia.org/wiki/2008_Brazilian_Grand_Prix")} where he retired at the second corner.
        </p>

        <div className="clear-both"></div>

        {/* 2009 season */}
        <section id="2009season" className="space-y-4 scroll-mt-24" />
        <h5 className="text-base font-semibold text-red-300 mb-1">2009 season</h5>

        <div className="clear-both"></div>

        <p>
        For {wikiLink("2009", "https://en.wikipedia.org/wiki/2009_Formula_One_World_Championship")}, Red Bull Racing launched their new {wikiLink("RB5", "https://en.wikipedia.org/wiki/Red_Bull_RB5")} chassis virtually on 8 February utilising a 3D computer-generated video narrated by {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")}. The physical launch of the car was held the next day. The team secured their first pole position at the {wikiLink("Chinese Grand Prix", "https://en.wikipedia.org/wiki/2009_Chinese_Grand_Prix")} with Sebastian Vettel, posting the fastest time with just a single qualifying lap in Q3. {wikiLink("Mark Webber", "https://en.wikipedia.org/wiki/Mark_Webber_(racing_driver)")} qualified in third on the grid. The next day, Vettel won, with Webber second. Vettel's victory, in rain-soaked conditions, marked Red Bull Racing's first-ever win (although the team's predecessor, {wikiLink("Stewart GP", "https://en.wikipedia.org/wiki/Stewart_Grand_Prix")}, had won the {wikiLink("1999 European Grand Prix", "https://en.wikipedia.org/wiki/1999_European_Grand_Prix")} courtesy of {wikiLink("Johnny Herbert", "https://en.wikipedia.org/wiki/Johnny_Herbert")}).
        </p>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Sebastian_Vettel_Jerez_Feb_2009_3593a.jpg/250px-Sebastian_Vettel_Jerez_Feb_2009_3593a.jpg"
            alt="Sebastian Vettel driving the RB5 at pre-season testing at Jerez"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} driving the {wikiLink("RB5", "https://en.wikipedia.org/wiki/Red_Bull_RB5")} at pre-season testing at Jerez
        </figcaption>
        </figure>

        <p>
        In the next race at {wikiLink("Bahrain", "https://en.wikipedia.org/wiki/2009_Bahrain_Grand_Prix")} after qualifying 3rd, {wikiLink("Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} finished second behind {wikiLink("Jenson Button", "https://en.wikipedia.org/wiki/Jenson_Button")} and collected another eight world championship points. At the {wikiLink("Spanish Grand Prix", "https://en.wikipedia.org/wiki/2009_Spanish_Grand_Prix")}, {wikiLink("Webber", "https://en.wikipedia.org/wiki/Mark_Webber_(racing_driver)")} and Vettel finished third and fourth respectively, after having qualified fifth and second. In {wikiLink("Turkey", "https://en.wikipedia.org/wiki/2009_Turkish_Grand_Prix")}, Webber and Vettel finished second and third respectively. At the {wikiLink("British Grand Prix", "https://en.wikipedia.org/wiki/2009_British_Grand_Prix")} the car had new upgrades and Sebastian Vettel won after qualifying on pole position, ending championship leader Jenson Button's run of four straight wins. The team scored another 1–2 at the {wikiLink("German Grand Prix", "https://en.wikipedia.org/wiki/2009_German_Grand_Prix")} with Mark Webber (who scored his first win despite being given a drive-through penalty earlier on) leading home Sebastian Vettel. Mark Webber also took his second Formula One victory at the {wikiLink("Brazilian Grand Prix", "https://en.wikipedia.org/wiki/2009_Brazilian_Grand_Prix")}. Another 1–2 finish for the team was achieved at the season-ending {wikiLink("Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2009_Abu_Dhabi_Grand_Prix")}, this time with Vettel finishing ahead of Webber.
        </p>

        <p>
        Vettel finished second in the Drivers' Championship with 84 points, 11 behind {wikiLink("Jenson Button", "https://en.wikipedia.org/wiki/Jenson_Button")}. Mark Webber finished fourth with 69.5 points. The team also finished second in the Constructors' Championship with 153.5 points, 18.5 points behind {wikiLink("Brawn GP", "https://en.wikipedia.org/wiki/Brawn_GP")}.
        </p>

        <div className="clear-both"></div>

        {/* 2010 season */}
        <section id="2010 season" className="space-y-4 scroll-mt-24" />
        <h5 className="text-base font-semibold text-red-300 mb-1">2010 season</h5>

        <div className="clear-both"></div>

        <p>
        For the {wikiLink("2010 season", "https://en.wikipedia.org/wiki/2010_Formula_One_World_Championship")}, the team retained both {wikiLink("Mark Webber", "https://en.wikipedia.org/wiki/Mark_Webber_(racing_driver)")} and {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")}, with {wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_in_Formula_One")} remaining the engine supplier.
        </p>

        <p>
        At the opening round, the {wikiLink("Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2010_Bahrain_Grand_Prix")}, Vettel took pole position while Webber qualified sixth. Vettel led the race until he slowed due to a spark-plug failure, while the two {wikiLink("Ferraris", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")} and {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")} overtook Vettel. Vettel finished fourth, and Webber finished eighth.
        </p>

        <p>
        In {wikiLink("Australia", "https://en.wikipedia.org/wiki/2010_Australian_Grand_Prix")}, Vettel again took pole, with Webber in the second position. Vettel led the race and again looked set to take the race, but he reported a vibration of one of the front wheels on his car. The problem seemed to subside, and the decision was made to keep him on the track rather than pit him. A few corners later, the problem struck again, and Vettel ran off the track and subsequently retired, due to brake failure. Webber got wheelspin off the line and gave up one position on the run to the first right-handed corner. Subsequent errors led to him dropping a few more places, and near the end of the race, he crashed with Hamilton, destroying his front wing. He pitted to get a new one, and finished ninth, scoring two points.
        </p>

        <p>
        In {wikiLink("Malaysia", "https://en.wikipedia.org/wiki/2010_Malaysian_Grand_Prix")}, Webber took pole with Vettel in the third position. Vettel managed to pass both {wikiLink("Nico Rosberg", "https://en.wikipedia.org/wiki/Nico_Rosberg")} and Webber before the first corner, leading for all bar two laps en route to his and the team's first victory of the year. Webber led the other two laps and eventually finished second, with the team moving up into third in the Constructors' Championship.
        </p>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Vettel_abu_dabi_2010.jpg/250px-Vettel_abu_dabi_2010.jpg"
            alt="Vettel won the 2010 World Drivers' Championship at the season-ending Abu Dhabi Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            Vettel won the 2010 World Drivers' Championship at the season-ending {wikiLink("Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2010_Abu_Dhabi_Grand_Prix")}.
        </figcaption>
        </figure>

        <p>
        The team once again scored pole position in {wikiLink("China", "https://en.wikipedia.org/wiki/2010_Chinese_Grand_Prix")}, when Vettel managed to set a faster time than Webber, who completed the front row. Webber overtook Vettel at the start, but both were overtaken by {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")}, who was later given a penalty for a false start. The race was then hit by rain and {wikiLink("Jenson Button", "https://en.wikipedia.org/wiki/Jenson_Button")} made the best strategy call and won the race, Vettel finished sixth whilst Webber was eighth. This left Vettel and Webber fifth and seventh in the Drivers' Championship respectively, and the team in third in the Constructors' Championship.
        </p>

        <p>
        At the {wikiLink("Spanish Grand Prix", "https://en.wikipedia.org/wiki/2010_Spanish_Grand_Prix")} the two drivers were the other way around, with Webber on pole position and Vettel second on the grid. Webber won the race without too much trouble. Vettel, however, suffered brake problems and dropped to fourth – this became third when Hamilton had a puncture and crashed from second on the penultimate lap.
        </p>

        <p>
        Webber took pole position again at the {wikiLink("Monaco Grand Prix", "https://en.wikipedia.org/wiki/2010_Monaco_Grand_Prix")}; Vettel qualified third behind {wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_in_Formula_One")}'s {wikiLink("Robert Kubica", "https://en.wikipedia.org/wiki/Robert_Kubica")}, but overtook him at the start. Webber won the race and Vettel finished in second place.
        After the race, Webber was leading the championship after being in seventh after China, with Vettel in second place (this was only by countback though because both drivers were on 78 points). The team was leading the Constructors' Championship.
        </p>

        <p>
        At the {wikiLink("Turkish Grand Prix", "https://en.wikipedia.org/wiki/2010_Turkish_Grand_Prix")}, Webber again took pole position, taking the team's run of pole positions to seven consecutive races, with Vettel third on the grid. Following the pit stops, Webber and Vettel were running first and second until lap 40, when Vettel attempted to overtake Webber, leading to a collision between the two. Webber finished third, while Vettel was forced to retire. Neither driver took 100% of responsibility while senior members of the team alluded to the thought that Webber had not provided "enough room" for Vettel.
        </p>

        <p>
        In {wikiLink("Canada", "https://en.wikipedia.org/wiki/2010_Canadian_Grand_Prix")}, Hamilton took pole position – the first non-Red Bull pole of the year. Webber and Vettel were second and third respectively in qualifying before the pair finished fourth and fifth in the race. The team admitted that it was a track that the car struggled with.
        </p>

        <p>
        At the {wikiLink("European Grand Prix", "https://en.wikipedia.org/wiki/2010_European_Grand_Prix")} in {wikiLink("Valencia, Spain", "https://en.wikipedia.org/wiki/Valencia,_Spain")}, Vettel won from pole position, leading every lap of the race. Webber collided with the Lotus of {wikiLink("Heikki Kovalainen", "https://en.wikipedia.org/wiki/Heikki_Kovalainen")}, flipping his Red Bull car into a somersault before landing and crashing into a tyre barrier.
        </p>

        <p>
        At the {wikiLink("British Grand Prix", "https://en.wikipedia.org/wiki/2010_British_Grand_Prix")} at {wikiLink("Silverstone", "https://en.wikipedia.org/wiki/Silverstone_Circuit")}, Vettel took pole position but after a bad start, he got a puncture and subsequently dropped to the back of the field, eventually finishing seventh. Webber, who started from second, won after leading for the entire race.
        </p>

        <p>
        Vettel qualified in pole position in front of the two Ferraris in {wikiLink("Germany", "https://en.wikipedia.org/wiki/2010_German_Grand_Prix")}, but finished his home race behind the pair in third place. Webber qualified in fourth but finished in sixth behind both the McLaren cars. During the race {wikiLink("Felipe Massa", "https://en.wikipedia.org/wiki/Felipe_Massa")} controversially let {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")} past into the lead to win the race after a message from the team. Red Bull team principal Christian Horner said: "That was the most blatant team order ever". He also criticised Ferrari for not letting their drivers race each other.
        </p>

        <p>
        At the {wikiLink("Hungarian Grand Prix", "https://en.wikipedia.org/wiki/2010_Hungarian_Grand_Prix")} in {wikiLink("Budapest", "https://en.wikipedia.org/wiki/Budapest")}, Vettel again took pole position and was leading until the safety car came out. He was second behind Webber, who started second and was then given a drive-through penalty for exceeding the ten-car maximum distance between himself and the safety car. This cost him second place and he finished third. Webber won the race after using his super-soft tyres for over half the race to build up a lead to keep him ahead after his stop. Webber won with {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")} ten seconds behind in second place.
        </p>

        <p>
        The {wikiLink("Belgian Grand Prix", "https://en.wikipedia.org/wiki/2010_Belgian_Grand_Prix")} saw Webber claim pole position, despite McLaren and Ferrari having a straight-line speed advantage. At the start, the anti-stall device on Webber's car came on, dropping the Australian to 5th. Vettel, meanwhile in 3rd (after starting 4th) was chasing Jenson Button for 2nd place when he collided with the Brit at the Bus Stop. After sensing an inside passing opportunity, Vettel attempted to quickly change direction while under braking, causing the car to spear into the side of Button's McLaren. Button retired from the race, while Vettel was able to pit for repairs. He subsequently received a drive-through penalty for his action and suffered a rear tyre puncture while attempting to overtake {wikiLink("Vitantonio Liuzzi", "https://en.wikipedia.org/wiki/Vitantonio_Liuzzi")}, finishing 15th. Webber was able to capitalise on the DNF of Button and Alonso, as well as a mistake by Renault's {wikiLink("Robert Kubica", "https://en.wikipedia.org/wiki/Robert_Kubica")}, during his pit stop, and finish 2nd, behind race winner Hamilton.
        </p>

        <p>
        At the {wikiLink("Italian Grand Prix", "https://en.wikipedia.org/wiki/2010_Italian_Grand_Prix")} in {wikiLink("Monza", "https://en.wikipedia.org/wiki/Monza")}, Webber had a bad start and was 9th from 4th place on the grid after the first lap. Vettel had brake binding problems for a short period, around lap 20, and he too dropped back a place but was then back on the pace. Webber was held back by {wikiLink("Nico Hülkenberg", "https://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg")} in the latter part of the race, until he passed, and finished 6th. Vettel stayed out on soft tyres until the penultimate lap, doing better lap times than Webber and overtaking Mark when he pitted, to finish fourth.
        </p>

        <p>
        At the {wikiLink("Korean Grand Prix", "https://en.wikipedia.org/wiki/2010_Korean_Grand_Prix")} in {wikiLink("Yeongam", "https://en.wikipedia.org/wiki/Yeongam")}, Vettel gave the team its 19th pole position, while Webber started second, making it a Red Bull front row. On lap 18, Webber spun and hit the wall, and hit the {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One")} of {wikiLink("Nico Rosberg", "https://en.wikipedia.org/wiki/Nico_Rosberg")}, causing both drivers to retire. Worse was to come for the team when Vettel's engine failed just 10 laps from the finish, while he was in the lead, and the German retired and handed his lead to {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")} in the {wikiLink("Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")}. Red Bull had suffered their first double retirement since the {wikiLink("2008 Australian Grand Prix", "https://en.wikipedia.org/wiki/2008_Australian_Grand_Prix")} and as a result, Webber lost his championship lead and Vettel's engine failure prevented him from leading the championship for the first time in 2010, but the team still led the Constructors' Championship.
        </p>

        <p>
        At the {wikiLink("Brazilian Grand Prix", "https://en.wikipedia.org/wiki/2010_Brazilian_Grand_Prix")} in {wikiLink("São Paulo", "https://en.wikipedia.org/wiki/S%C3%A3o_Paulo")}, Red Bull Racing became Constructors' Champion for the first time after Sebastian Vettel and Mark Webber finished 1–2 in the race, enough to finish ahead of {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")} and {wikiLink("Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")}. In doing so Red Bull became the first Austrian team to win the Formula One Constructors' Championship. Christian Horner stated that the main goal had been achieved and that now his remaining aim was to win the Drivers' Championship and put the icing on the cake of Red Bull's year. In some other teams, the drivers would have been told to change positions, to improve better placed Mark Webber's chances to win the drivers' title in the last race, but the team insisted that the faster driver should win the race, and kept being reluctant to give any orders of the kind "let your teammate pass" to their drivers.
        </p>

        <p>
        In the {wikiLink("final race", "https://en.wikipedia.org/wiki/2010_Abu_Dhabi_Grand_Prix")} at {wikiLink("Abu Dhabi", "https://en.wikipedia.org/wiki/Abu_Dhabi")}, Sebastian Vettel won the race and the Formula One Drivers' Championship. Red Bull finished the year with a total of 9 Grand Prix victories with five going to Sebastian Vettel and four going to Mark Webber. Red Bull claimed a total of 15 pole positions with 10 going to Vettel and five going to Webber. The team scored six fastest laps – three scored by Vettel and three scored by Webber. Horner also praised the sportsmanship of both drivers stating that they conducted themselves in a well orderly and mannered fashion.
        </p>

        <div className="clear-both"></div>

        {/* Renault full-works partnership era (2011–2015) */}
        <section id="red-bull-renault-era" className="space-y-4 scroll-mt-24"></section>
        <h4 className="text-lg font-semibold text-red-400 mb-1">
        Renault full-works partnership era (2011–2015)
        </h4>

        {/* 2011 season */}
        <section id="2011 season" className="space-y-4 scroll-mt-24" />
        <h5 className="text-base font-semibold text-red-300 mb-1">2011 season</h5>

        <div className="clear-both"></div>

        <figure className="float-right mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/2011_Italian_GP_-_Vettel.jpg/250px-2011_Italian_GP_-_Vettel.jpg"
            alt="Sebastian Vettel competing at the 2011 Italian Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} competing at the {wikiLink("2011 Italian Grand Prix", "https://en.wikipedia.org/wiki/2011_Italian_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        Red Bull Racing was officially promoted to {wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_F1")}'s full-works partnership status, receiving free engines as Renault's full-works constructor team was rebranded to {wikiLink("Lotus Renault GP", "https://en.wikipedia.org/wiki/Lotus_Renault_GP")}. Both {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} and {wikiLink("Mark Webber", "https://en.wikipedia.org/wiki/Mark_Webber_(racing_driver)")} were retained by the team for the {wikiLink("2011", "https://en.wikipedia.org/wiki/2011_Formula_One_World_Championship")} season, as was engine supplier Renault. Vettel defended his world title – becoming the ninth driver to do so – after winning eleven of the season's races, and also achieved 15 pole positions during the season, breaking {wikiLink("Nigel Mansell", "https://en.wikipedia.org/wiki/Nigel_Mansell")}'s record from the {wikiLink("1992", "https://en.wikipedia.org/wiki/1992_Formula_One_World_Championship")} season. Webber finished the season in third place in the championship, taking one victory, in the final race of the season in {wikiLink("Brazil", "https://en.wikipedia.org/wiki/2011_Brazilian_Grand_Prix")}. The team also defended their respective title, as they finished the season with 650 points in the Constructors' Championship, 153 points ahead of the next closest team, {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")}. {wikiLink("Nissan", "https://en.wikipedia.org/wiki/Nissan")}'s premium automotive brand {wikiLink("Infiniti", "https://en.wikipedia.org/wiki/Infiniti")} joined Red Bull Racing as an official partner for the 2011 and 2012 seasons which saw Infiniti logos appear on the race car, {wikiLink("drivers overalls", "https://en.wikipedia.org/wiki/Racing_suit")} and team kit.
        </p>

        <div className="clear-both"></div>

        {/* 2012 season */}
        <section id="2012 season" className="space-y-4 scroll-mt-24" />
        <h5 className="text-base font-semibold text-red-300 mb-1">2012 season</h5>

        <div className="clear-both"></div>

        <p>
        For the {wikiLink("2012 season", "https://en.wikipedia.org/wiki/2012_Formula_One_World_Championship")}, Red Bull retained the duo of {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} and {wikiLink("Mark Webber", "https://en.wikipedia.org/wiki/Mark_Webber_(racing_driver)")} from the previous three years. Webber was signed on a one-year contract extension while Vettel continued under his current multi-year agreement, ending at the end of 2014. Vettel won the Drivers' Championship for a third consecutive time in 2012 making him the youngest triple World Champion, surpassing {wikiLink("Ayrton Senna", "https://en.wikipedia.org/wiki/Ayrton_Senna")}.
        </p>

        <div className="clear-both"></div>

        {/* 2013 season */}
        <section id="2013 season" className="space-y-4 scroll-mt-24" />
        <h5 className="text-base font-semibold text-red-300 mb-1">2013 season</h5>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[270px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Sebastian_Vettel_overtaking_Mark_Webber_2013_Malaysia_1.jpg/330px-Sebastian_Vettel_overtaking_Mark_Webber_2013_Malaysia_1.jpg"
            alt="Sebastian Vettel disobeyed team orders and made a controversial overtake on teammate Mark Webber at the 2013 Malaysian Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} disobeyed team orders and made a controversial overtake on teammate {wikiLink("Mark Webber", "https://en.wikipedia.org/wiki/Mark_Webber_(racing_driver)")} at the {wikiLink("2013 Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2013_Malaysian_Grand_Prix")}.
        </figcaption>
        </figure>

        <p>
        The team was renamed Infiniti Red Bull Racing for the {wikiLink("2013 season", "https://en.wikipedia.org/wiki/2013_Formula_One_World_Championship")} following the announcement that premium automotive brand {wikiLink("Infiniti", "https://en.wikipedia.org/wiki/Infiniti")} had become Title Partner and Vehicle Performance Partner of the team. Infiniti Red Bull continued with drivers {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} and {wikiLink("Mark Webber", "https://en.wikipedia.org/wiki/Mark_Webber_(racing_driver)")} for the fifth consecutive season. As with 2012, Webber was signed on a single year contract while Vettel continued to honour his current multi-year agreement.
        </p>

        <p>
        In {wikiLink("Australia", "https://en.wikipedia.org/wiki/2013_Australian_Grand_Prix")}, the first race of the season, Vettel placed the new RB9 on pole position but struggled in the race finishing in 3rd place behind title rivals of 2012, {wikiLink("Kimi Räikkönen", "https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen")} and {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")} whilst teammate Webber finished in sixth place. In {wikiLink("Malaysia", "https://en.wikipedia.org/wiki/2013_Malaysian_Grand_Prix")} the team went better with Vettel again putting the RB9 on pole, but unlike in Australia winning the race, albeit under heavy controversy. Vettel won the race after disobeying a direct team order. Red Bull ordered both its drivers to maintain position with the now infamous ‘Multi 21’ instruction, which was a code for the driver in car #2 (Webber) must remain ahead of the other driver in car #1 (Vettel). Vettel ignored the order and passed Webber with 13 laps remaining. In the cool down room Webber could be heard asking his teammate "Multi-21, Seb. Multi-21!” and so despite the 1–2 result, the race was overshadowed by Vettel's actions.

        In {wikiLink("China", "https://en.wikipedia.org/wiki/2013_Chinese_Grand_Prix")}, the third race of the season, Vettel qualified in 9th whilst Webber qualified 14th after an issue with his fuel pick up led him to have to stop the car on the track. Infiniti Red Bull failed to give the FIA a 1-litre fuel sample, therefore, placing Webber at the back of the grid. The downfall of his performance was matched when a collision and then a dislodged wheel nut led to Webber not completing the race. Vettel finished in 4th, retaining his lead in the World Championship. In {wikiLink("Bahrain", "https://en.wikipedia.org/wiki/2013_Bahrain_Grand_Prix")}, the fourth race of the season, Vettel qualified in second place behind {wikiLink("Nico Rosberg", "https://en.wikipedia.org/wiki/Nico_Rosberg")}. Webber qualified fifth but after a 3 place grid penalty started the race in seventh. In the race, Webber failed to improve on his qualifying position finishing 7th whilst his teammate won the race in a dominating fashion. After the fourth race of the season, Infiniti Red Bull finished the first round of flyaway races leading both the Drivers' and Constructors' Championships.

        {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} extended his contract with Infiniti Red Bull Racing until the end of 2015, despite interests in racing for Ferrari and Mercedes. At the {wikiLink("British Grand Prix", "https://en.wikipedia.org/wiki/2013_British_Grand_Prix")}, {wikiLink("Mark Webber", "https://en.wikipedia.org/wiki/Mark_Webber_(racing_driver)")} announced his retirement from Formula One at the end of the season, having signed a deal with {wikiLink("Porsche", "https://en.wikipedia.org/wiki/Porsche")} in the {wikiLink("FIA World Endurance Championship", "https://en.wikipedia.org/wiki/FIA_World_Endurance_Championship")} for 2014. It was then announced before the {wikiLink("Italian Grand Prix", "https://en.wikipedia.org/wiki/2013_Italian_Grand_Prix")} that {wikiLink("Daniel Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")}, the Toro Rosso driver, would replace Webber for the 2014 season, ending talk of Lotus's Kimi Räikkönen taking Webber's seat.
        </p>

        <p>
        At the {wikiLink("Italian Grand Prix", "https://en.wikipedia.org/wiki/2013_Italian_Grand_Prix")}, Vettel secured the team's 50th pole position, and 40th Grand Prix victory. At the {wikiLink("Indian Grand Prix", "https://en.wikipedia.org/wiki/2013_Indian_Grand_Prix")}, Vettel sealed the Drivers' Championship title, and in doing so, won the Constructors' Championship for Infiniti Red Bull Racing for the fourth consecutive year.
        </p>

        <div className="clear-both"></div>

        {/* 2014 season */}
        <section id="2014 season" className="space-y-4 scroll-mt-24" />
        <h5 className="text-base font-semibold text-red-300 mb-1">2014 season</h5>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Daniel_Ricciardo_2014_Singapore_FP1.jpg/250px-Daniel_Ricciardo_2014_Singapore_FP1.jpg"
            alt="Daniel Ricciardo won three races in 2014 with the Red Bull RB10"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Daniel Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")} won three races in 2014 with the {wikiLink("Red Bull RB10", "https://en.wikipedia.org/wiki/Red_Bull_RB10")}.
        </figcaption>
        </figure>

        <p>
        Infiniti Red Bull started the season with reigning World Champion {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} and {wikiLink("Daniel Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")} who replaced {wikiLink("Mark Webber", "https://en.wikipedia.org/wiki/Mark_Webber_(racing_driver)")} after he had announced in 2013 that he would be moving to {wikiLink("Porsche", "https://en.wikipedia.org/wiki/Porsche")} in the {wikiLink("World Endurance Championship", "https://en.wikipedia.org/wiki/FIA_World_Endurance_Championship")} for 2014.
        </p>

        <p>
        In pre-season testing, it became clear, not just from Red Bull, but other Renault teams that the Renault engine was very unreliable and down on power compared to the Ferrari and Mercedes engines. Renault struggled to get the new hybrid engine to function properly all through testing with the combustion engine, the kinetic recovery system, and the turbo all unable to work as one.
        </p>

        <p>
        At the {wikiLink("Australian Grand Prix", "https://en.wikipedia.org/wiki/2014_Australian_Grand_Prix")}, Ricciardo had qualified second on his first race for the team while Vettel qualified a rather distant 13th being at least 1.8 seconds off pole-sitter Lewis Hamilton. In the race itself, Ricciardo finished second while Vettel retired after just three laps due to a power unit failure. However, after the race, Ricciardo was disqualified for violating the FIA's new rule of capping fuel use at 100 kg per hour in each race. He thus lost his podium finish. Red Bull appealed this decision on 14 April but lost their case.
        </p>

        <p>
        At the {wikiLink("Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2014_Malaysian_Grand_Prix")} Vettel qualified second while Ricciardo qualified fifth. On lap 49 Ricciardo had to retire due to a technical failure while Vettel went on to finish third and earn his first podium finish of the season. Ricciardo was hit with a ten-place grid penalty for the {wikiLink("Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2014_Bahrain_Grand_Prix")}, due to an unsafe release by Red Bull at one of his pit stops. At the {wikiLink("Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2014_Bahrain_Grand_Prix")} Ricciardo qualified third, but dropped to 13th due to his ten-place grid penalty from the previous week. Vettel qualified 11th. Ricciardo managed to finish fourth, obtaining his first championship points of the season. Vettel finished sixth. At the {wikiLink("Chinese Grand Prix", "https://en.wikipedia.org/wiki/2014_Chinese_Grand_Prix")}, under harsh weather conditions, Ricciardo qualified 2nd, with Vettel qualifying third. Ricciardo finished in 4th again, nearly 25 seconds ahead of his teammate Vettel, who finished 5th.
        </p>

        <p>
        Ricciardo would go on to obtain the first podium finish in his career as a Formula One driver at the {wikiLink("Spanish Grand Prix", "https://en.wikipedia.org/wiki/2014_Spanish_Grand_Prix")}, after qualifying third, over a second behind polesitter Lewis Hamilton. Vettel did not participate in Q3 due to problems with his gearbox, which ultimately needed to be replaced, incurring a five-place grid penalty. Despite starting from the 15th position, Vettel managed to finish the race in 4th, setting the fastest lap of the race in the process. In {wikiLink("Canada", "https://en.wikipedia.org/wiki/2014_Canadian_Grand_Prix")}, Ricciardo won the race, achieving his first career victory in Formula One.
        </p>

        <p>
        After an {wikiLink("Austrian Grand Prix", "https://en.wikipedia.org/wiki/2014_Austrian_Grand_Prix")} with poor results, including Vettel's retirement, Christian Horner described the performance of the Renault engine as "unacceptable." He also mocked Renault in an interview with {wikiLink("Servus TV", "https://en.wikipedia.org/wiki/Servus_TV")} by saying that "the big difference between Mercedes and Renault is that when a driver with a Mercedes engine pushes the overtake button his car goes faster. When our drivers, which have a Renault engine, push the button, the car stops!"
        </p>

        <p>
        The team finished second in the championship on 405 points, with the team only winning three races throughout the season.
        </p>

        <div className="clear-both"></div>


        {/* 2015 season */}
        <section id="2015 season" className="space-y-4 scroll-mt-24" />
        <h5 className="text-base font-semibold text-red-300 mb-1">2015 season</h5>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Red_Bull_duo_2015_Malaysia_Race_2.jpg/250px-Red_Bull_duo_2015_Malaysia_Race_2.jpg"
            alt="Daniil Kvyat and Daniel Ricciardo at the 2015 Malaysian Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Daniil Kvyat", "https://en.wikipedia.org/wiki/Daniil_Kvyat")} and {wikiLink("Daniel Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")} at the {wikiLink("2015 Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2015_Malaysian_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        Daniel Ricciardo returned for a second season with the team. At the previous year's {wikiLink("Japanese Grand Prix", "https://en.wikipedia.org/wiki/2014_Japanese_Grand_Prix")}, the team announced that Vettel would leave after the 2014 season. He was replaced by {wikiLink("Daniil Kvyat", "https://en.wikipedia.org/wiki/Daniil_Kvyat")} for 2015, who had spent a single season with the junior {wikiLink("Toro Rosso", "https://en.wikipedia.org/wiki/Scuderia_Toro_Rosso#2014")} team.
        </p>

        <p>
        2015 for Infiniti Red Bull was seen initially as a continuous resurgence for the team. It was expected from the progress Renault made with the engine in 2014 that in 2015 it would be close to the Mercedes duo of Hamilton and Rosberg. However, it quickly became apparent that reliability, power, and drivability were all major issues that plagued the team through the season.
        </p>

        <p>
        At the {wikiLink("Australian Grand Prix", "https://en.wikipedia.org/wiki/2015_Australian_Grand_Prix")} Ricciardo qualified 7th while Kvyat qualified 13th. Kvyat failed to start the race due to a gearbox failure, whilst Ricciardo finished the race in sixth, a lap down from the race winner, Lewis Hamilton. The team scored their best finish in {wikiLink("Hungary", "https://en.wikipedia.org/wiki/2015_Hungarian_Grand_Prix")}, where Ricciardo and Kvyat finished 2–3. Their only opportunity to win a race occurred at the {wikiLink("United States Grand Prix", "https://en.wikipedia.org/wiki/2015_United_States_Grand_Prix")}, however, both of the team's drivers made some mistakes allowing both of the Mercedes cars to pass them. Lewis Hamilton won the race and, as a result, his third Formula One World Championship.
        </p>

        <p>
        Come the end of the season, it was the first winless season for Red Bull Racing since 2008, and come season’s end, Red Bull wanted to end its partnership with Renault due to the lack of progress and confidence expressed by Renault. Red Bull would however be unable to agree to have another engine instead opting to run Renault engines for the 2016 season but rebadged as TAG-Heuer.
        </p>

        <p>
        They ended the season in fourth place on 187 points with Kvyat in seventh (95 points) and Ricciardo in eighth (92 points), their lowest finish position in seven years.
        </p>

        <div className="clear-both"></div>

        {/* TAG Heuer era (2016–2018) */}
        <section id="redbull-tag-heuer-era" className="space-y-4 scroll-mt-24"></section>
        <h4 className="text-lg font-semibold text-red-400 mb-1">TAG Heuer era (2016–2018)</h4>

        {/* 2016 season */}
        <section id="2016 season" className="space-y-4 scroll-mt-24" />
        <h5 className="text-base font-semibold text-red-300 mb-1">2016 season</h5>

        <div className="clear-both"></div>

        <p>
        For 2016, Red Bull Racing used Renault engines branded as {wikiLink("TAG Heuer", "https://en.wikipedia.org/wiki/TAG_Heuer")} due to their public breakdown with Renault in 2015. Infiniti also departed as a main sponsor to the newly reformed {wikiLink("Renault Sport Formula One Team", "https://en.wikipedia.org/wiki/Renault_F1")} for the same reason. The team announced on 17 March 2016, one day before the {wikiLink("Australian Grand Prix", "https://en.wikipedia.org/wiki/2016_Australian_Grand_Prix")} weekend, that they had formed a new technology partnership with {wikiLink("Aston Martin", "https://en.wikipedia.org/wiki/Aston_Martin")} for the new season.
        </p>

        <p>
        At the {wikiLink("Chinese Grand Prix", "https://en.wikipedia.org/wiki/2016_Chinese_Grand_Prix")}, Red Bull recorded their first podium of the season with {wikiLink("Daniil Kvyat", "https://en.wikipedia.org/wiki/Daniil_Kvyat")} finishing third behind {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} and {wikiLink("Nico Rosberg", "https://en.wikipedia.org/wiki/Nico_Rosberg")}.
        </p>

        <p>
        Daniil Kvyat and Max Verstappen traded places ahead of the {wikiLink("Spanish Grand Prix", "https://en.wikipedia.org/wiki/2016_Spanish_Grand_Prix")}, with Verstappen promoted to Red Bull Racing and Kvyat returning to {wikiLink("Scuderia Toro Rosso", "https://en.wikipedia.org/wiki/Scuderia_Toro_Rosso")}. Verstappen eventually won the Spanish Grand Prix, becoming the youngest ever Grand Prix winner.
        </p>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Red_Bull_duo_2016_Malaysia_Race.jpg/250px-Red_Bull_duo_2016_Malaysia_Race.jpg"
            alt="Daniel Ricciardo and Max Verstappen during the 2016 Malaysian Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            Together {wikiLink("Daniel Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")} and {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} won two races during the 2016 season with the {wikiLink("Red Bull RB12", "https://en.wikipedia.org/wiki/Red_Bull_RB12")}.
        </figcaption>
        </figure>

        <p>
        2016 in general was a much stronger season for Red Bull Racing than 2015, especially after Max Verstappen replaced {wikiLink("Daniil Kvyat", "https://en.wikipedia.org/wiki/Daniil_Kvyat")}. This may be because {wikiLink("Daniel Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")} was pushed much more by Verstappen than he was by Kvyat, Ricciardo stating he has learned from Verstappen's driving techniques to improve as a driver. Red Bull would go on to collect podium finishes with Max Verstappen in {wikiLink("Austria", "https://en.wikipedia.org/wiki/2016_Austrian_Grand_Prix")} and {wikiLink("Silverstone", "https://en.wikipedia.org/wiki/2016_British_Grand_Prix")}, with Daniel Ricciardo in {wikiLink("Monaco", "https://en.wikipedia.org/wiki/2016_Monaco_Grand_Prix")}, {wikiLink("Budapest", "https://en.wikipedia.org/wiki/2016_Hungarian_Grand_Prix")} and in {wikiLink("Singapore", "https://en.wikipedia.org/wiki/2016_Singapore_Grand_Prix")}, with both Verstappen and Ricciardo being on the podium in {wikiLink("Germany", "https://en.wikipedia.org/wiki/2016_German_Grand_Prix")} and {wikiLink("Malaysia", "https://en.wikipedia.org/wiki/2016_Malaysian_Grand_Prix")}. Daniel Ricciardo collected his 4th career victory in {wikiLink("Malaysia", "https://en.wikipedia.org/wiki/2016_Malaysian_Grand_Prix")} after Lewis Hamilton's engine failure. Verstappen had challenged for the victory but was compromised due to an incident at the start between Vettel and Rosberg leading to Verstappen referring to Vettel as 'crazy'. This incident was the latest flare-up between Vettel and Verstappen after the two disagreed over a first corner collision at the {wikiLink("Belgian Grand Prix", "https://en.wikipedia.org/wiki/2016_Belgian_Grand_Prix")} which resulted in Max failing to score at a race where he started on the front row, outqualifying his teammate for only the 2nd time, in which a large number of Dutch fans had travelled to see him race.
        </p>

        <p>
        Towards the end of the {wikiLink("Brazilian Grand Prix", "https://en.wikipedia.org/wiki/2016_Brazilian_Grand_Prix")} Verstappen dropped to 14th after changing back to wet tyres. He then gained 11 places in the closing 16 laps finishing in third place.
        </p>

        <p>
        Red Bull Racing finished second in the Constructors' Championship that year, with Daniel Ricciardo taking third in the Drivers' Championship.
        </p>

        <div className="clear-both"></div>

        {/* 2017 season */}
        <section id="2017 season" className="space-y-4 scroll-mt-24" />
        <h5 className="text-base font-semibold text-red-300 mb-1">2017 season</h5>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Max_Verstappen_%2836132602681%29.jpg/250px-Max_Verstappen_%2836132602681%29.jpg"
            alt="Max Verstappen during the 2017 Australian Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            Max Verstappen during the {wikiLink("2017 Australian Grand Prix", "https://en.wikipedia.org/wiki/2017_Australian_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        In 2017, Red Bull Racing retained their 2016 driver line-up and continued using TAG Heuer-branded Renault engines. In the first race in {wikiLink("Australia", "https://en.wikipedia.org/wiki/2017_Australian_Grand_Prix")}, Ricciardo retired on lap 25, in a weekend plagued with problems for him, while Verstappen finished 5th.
        </p>

        <p>
        Verstappen suffered various reliability issues with the car, suffering three retirements due to the engine and one due to an electric problem at the {wikiLink("Canadian Grand Prix", "https://en.wikipedia.org/wiki/2017_Canadian_Grand_Prix")}. He was also involved in three first-lap collisions that ended in retirement.
        </p>
        
        <div className="clear-both"></div>
    
        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Red_Bull_Racing_celebration%2C_Malaysia_GP_2017.jpg/250px-Red_Bull_Racing_celebration%2C_Malaysia_GP_2017.jpg"
            alt="Red Bull Racing celebrates a double podium finish in the 2017 Malaysian Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            Red Bull Racing celebrates a double podium finish in the {wikiLink("2017 Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2017_Malaysian_Grand_Prix")}.
        </figcaption>
        </figure>
        <p>
        The team won three races in {wikiLink("2017", "https://en.wikipedia.org/wiki/2017_Formula_One_World_Championship")}; Ricciardo won the {wikiLink("Azerbaijan Grand Prix", "https://en.wikipedia.org/wiki/2017_Azerbaijan_Grand_Prix")} after starting tenth, while Verstappen won the {wikiLink("Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2017_Malaysian_Grand_Prix")} and the {wikiLink("Mexican Grand Prix", "https://en.wikipedia.org/wiki/2017_Mexican_Grand_Prix")}. Moreover, Verstappen and Ricciardo finished second and third at the {wikiLink("Japanese Grand Prix", "https://en.wikipedia.org/wiki/2017_Japanese_Grand_Prix")}. In the Drivers' Championship, Ricciardo finished fifth with 200 points and Verstappen sixth with 168 points. The team finished third in the Constructors' Championship with 368 points.
        </p>

        <div className="clear-both"></div>


        {/* 2018 season */}
        <section id="2018 season" className="space-y-4 scroll-mt-24" />
        <h5 className="text-base font-semibold text-red-300 mb-1">2018 season</h5>

        <div className="clear-both"></div>

        <p>
        Ricciardo and Verstappen were both retained by the team for the 2018 season. On 25 September 2017, it was announced that {wikiLink("Aston Martin", "https://en.wikipedia.org/wiki/Aston_Martin")} would become Red Bull Racing's title sponsor from 2018.
        </p>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Max_Verstappen%2C_Red_Bull_Racing_F1_Team_%2843693639382%29.jpg/250px-Max_Verstappen%2C_Red_Bull_Racing_F1_Team_%2843693639382%29.jpg"
            alt="Max Verstappen at the 2018 British Grand Prix at the Silverstone Circuit"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            Max Verstappen at the {wikiLink("2018 British Grand Prix", "https://en.wikipedia.org/wiki/2018_British_Grand_Prix")} at the {wikiLink("Silverstone Circuit", "https://en.wikipedia.org/wiki/Silverstone_Circuit")}
        </figcaption>
        </figure>

        <p>
        The team suffered a double retirement at the {wikiLink("Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2018_Bahrain_Grand_Prix")}; Ricciardo retired on lap 2 with an electrical issue, whilst Verstappen retired two laps later. Ricciardo then took the team's first win of the season at the following race, the {wikiLink("Chinese Grand Prix", "https://en.wikipedia.org/wiki/2018_Chinese_Grand_Prix")}, having started sixth on the grid. During the {wikiLink("Azerbaijan Grand Prix", "https://en.wikipedia.org/wiki/2018_Azerbaijan_Grand_Prix")}, both drivers crashed into each other at Turn 1. The team achieved a podium with Verstappen during the {wikiLink("Spanish Grand Prix", "https://en.wikipedia.org/wiki/2018_Spanish_Grand_Prix")}, securing third place, while Ricciardo achieved fifth. At the {wikiLink("Monaco Grand Prix", "https://en.wikipedia.org/wiki/2018_Monaco_Grand_Prix")}, Red Bull had a dominant car due to its highly efficient high down-force setup. Ricciardo scored pole position, and despite running into an engine issue costing him power, he eventually won the race. This incident re-ignited the bad relationship with its engine manufacturer, Renault. Meanwhile, Verstappen crashed during free practice 3 and started from 20th on the grid, finishing the race in ninth. This race also put an end to a streak of incidents for Verstappen. Monaco was also the last race that saw Daniel Ricciardo on the podium with Red Bull, with him parting ways with the team and joining rival team Renault at the end of the season.
        </p>

        <p>
        The European season saw consistent podiums and a good form, with Verstappen winning Red Bull's home race at the Red Bull Ring during the {wikiLink("Austrian Grand Prix", "https://en.wikipedia.org/wiki/2018_Austrian_Grand_Prix")}. The second half of the season saw great form from Verstappen and good development of the car, as Verstappen scored 6 out of 8 possible podiums, and was the driver which scored the most points following the 2018 World Champion Lewis Hamilton. Ricciardo had a spree of mechanical issues and retirements during the second half of the season, with him getting 7 retirements in total and no podiums after the first six races coming to the end of the season. Verstappen won the {wikiLink("Mexican Grand Prix", "https://en.wikipedia.org/wiki/2018_Mexican_Grand_Prix")} from second after pole position was grabbed by his teammate, making it Red Bull's first front-row lock-out in the turbo-hybrid era.
        </p>

        <p>
        Verstappen was also finding himself in a back-to-back win at the {wikiLink("Brazilian Grand Prix", "https://en.wikipedia.org/wiki/Brazilian_Grand_Prix")} but clashed with rival Esteban Ocon as the latter tried to unlap himself, costing him the victory. Following the race the drivers conflicted, resulting in 2 days of public service for Verstappen, which he completed on 9 February 2019. Ricciardo's multiple retirements would end up costing both himself and Red Bull key points in the Drivers' and Constructors' Championships. Verstappen would finish the 2018 season in 4th place, just 3 points behind {wikiLink("Kimi Räikkönen", "https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen")} while Daniel Ricciardo would finish the season in 6th place, behind {wikiLink("Valtteri Bottas", "https://en.wikipedia.org/wiki/Valtteri_Bottas")}. Red Bull would finish the season in 3rd place behind Mercedes and Ferrari.
        </p>

        <p>
        By the {wikiLink("French Grand Prix", "https://en.wikipedia.org/wiki/2018_French_Grand_Prix")}, Red Bull, encouraged by the progress of Honda in the sister team Scuderia Toro Rosso, decided that in 2019 it would officially end its relationship with Renault for the Honda power.
        </p>

        <div className="clear-both"></div>

        {/* Honda engines (2019–2025) */}
        <section id="honda-era" className="space-y-4 scroll-mt-24"></section>
        <h3 className="text-2xl font-bold text-red-600 mb-2">Honda engines (2019–2025)</h3>

        {/* Works-era (2019–2021) */}
        <section id="honda-works-era" className="space-y-4 scroll-mt-24"></section>
        <h4 className="text-lg font-semibold text-red-400 mb-1">Works-era (2019–2021)</h4>


        {/* 2019 season */}
        <section id="2019 season" className="space-y-4 scroll-mt-24" />
        <h5 className="text-base font-semibold text-red-300 mb-1">2019 season</h5>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Max_Verstappen_2019_Italian_Grand_Prix.jpg/250px-Max_Verstappen_2019_Italian_Grand_Prix.jpg"
            alt="Max Verstappen at the 2019 Italian Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            Max Verstappen at the {wikiLink("2019 Italian Grand Prix", "https://en.wikipedia.org/wiki/2019_Italian_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        Preceding the 2018 {wikiLink("French Grand Prix", "https://en.wikipedia.org/wiki/2018_French_Grand_Prix")}, Red Bull Racing confirmed they are to utilise full-works {wikiLink("Honda", "https://en.wikipedia.org/wiki/Honda_in_Formula_One")} power units from 2019 to 2020, signing a two-year deal and thus ending their twelve-year partnership with {wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_F1")}. The switch to {wikiLink("Honda", "https://en.wikipedia.org/wiki/Honda_F1")} marked the first time since {wikiLink("2008", "https://en.wikipedia.org/wiki/2008_Formula_One_World_Championship")} that Honda supplied two teams (own works team and {wikiLink("Super Aguri", "https://en.wikipedia.org/wiki/Super_Aguri")}) in the sport respectively.
        </p>

        <p>
        On 3 August 2018, it was announced that Ricciardo would be leaving the team at the end of the season to join {wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_in_Formula_One")}, signing a two-year contract with them. {wikiLink("Pierre Gasly", "https://en.wikipedia.org/wiki/Pierre_Gasly")} was promoted from Toro Rosso to replace him.
        </p>

        <p>
        On 12 August 2019, it was announced that {wikiLink("Alex Albon", "https://en.wikipedia.org/wiki/Alex_Albon")} would move to Red Bull Racing for the rest of the season, replacing Gasly, who returned to Toro Rosso.
        </p>

        <div className="clear-both"></div>

        {/* 2020 season */}
        <section id="2020 season" className="space-y-4 scroll-mt-24" />
        <h5 className="text-base font-semibold text-red-300 mb-1">2020 season</h5>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Alexander_Albon_2020_Tuscan_Grand_Prix_-_race_day.jpg/250px-Alexander_Albon_2020_Tuscan_Grand_Prix_-_race_day.jpg"
            alt="Albon racing at the 2020 Tuscan Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            Albon racing at the {wikiLink("2020 Tuscan Grand Prix", "https://en.wikipedia.org/wiki/2020_Tuscan_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        For the 2020 season, the team retained {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} and {wikiLink("Alex Albon", "https://en.wikipedia.org/wiki/Alex_Albon")} as their line-up.
        </p>

        <p>
        Because of a modified calendar due to the {wikiLink("COVID-19 pandemic", "https://en.wikipedia.org/wiki/COVID-19_pandemic")}, the first race of the season was the {wikiLink("Austrian Grand Prix", "https://en.wikipedia.org/wiki/2020_Austrian_Grand_Prix")}. Toward the beginning of the race, Max Verstappen's Red Bull retired due to a technical issue. Later in this race, whilst making a charge for his first podium, Alex Albon was involved in an incident with {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")} which led to the Red Bull leaving the track and finishing in thirteenth. For the next six rounds, Verstappen finished in the podium positions including winning the {wikiLink("70th Anniversary Grand Prix", "https://en.wikipedia.org/wiki/70th_Anniversary_Grand_Prix")}. Meanwhile, Albon consistently scored points but failed to finish with a podium. During the {wikiLink("Italian Grand Prix", "https://en.wikipedia.org/wiki/2020_Italian_Grand_Prix")}, Alex Albon had an incident with {wikiLink("Pierre Gasly", "https://en.wikipedia.org/wiki/Pierre_Gasly")} at turn 1 dropping him to fifteenth and was also given a five-second penalty for pushing Romain Grosjean during lap 5 leading to him finishing fifteenth. On the other hand, Verstappen had another mechanical issue and retired on lap 3. The next week however, Albon scored his first-ever Formula One podium at the {wikiLink("Tuscan Grand Prix", "https://en.wikipedia.org/wiki/2020_Tuscan_Grand_Prix")} finishing third while Verstappen had a collision with Gasly forcing him to retire. For the rest of the season, Verstappen managed to finish in the podium every race but three and Albon finished with one more.
        </p>

        <p>
        The team ended the season in second in the World Constructors' Championship with 319 points. In the World Drivers' Championship, Verstappen finished third with 214 points and Albon finished seventh with 105 points. Following the season, Red Bull announced that {wikiLink("Sergio Perez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")} would replace Alex Albon as the second Red Bull driver for the 2021 season.
        </p>

        <div className="clear-both"></div>

        {/* 2021 season */}
        <section id="2021 season" className="space-y-4 scroll-mt-24" />
        <h5 className="text-base font-semibold text-red-300 mb-1">2021 season</h5>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/FIA_F1_Austria_2021_Nr._11_Perez.jpg/250px-FIA_F1_Austria_2021_Nr._11_Perez.jpg"
            alt="Pérez at the 2021 Austrian Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            Pérez at the {wikiLink("2021 Austrian Grand Prix", "https://en.wikipedia.org/wiki/2021_Austrian_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        In October 2020, engine manufacturer Honda announced it would end its full-works participation in Formula One at the end of the 2021 season. Verstappen was contracted to continue racing for the team with experienced Mexican {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")} becoming his teammate as Albon took the reserve driver role. Verstappen took pole position at the season-opening {wikiLink("2021 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2021_Bahrain_Grand_Prix")}. Verstappen was later out-qualified by Sergio Pérez at the {wikiLink("2021 Emilia Romagna Grand Prix", "https://en.wikipedia.org/wiki/2021_Emilia_Romagna_Grand_Prix")}, but went on to win the race and be just one point behind Lewis Hamilton in the Drivers' Championship standings. At the {wikiLink("2021 Monaco Grand Prix", "https://en.wikipedia.org/wiki/2021_Monaco_Grand_Prix")}, Red Bull Racing took the lead of the Constructors' Championship for the first time since the {wikiLink("2013 Brazilian Grand Prix", "https://en.wikipedia.org/wiki/2013_Brazilian_Grand_Prix")} as a result of another Verstappen win and a poor result for Mercedes. Verstappen also took the lead in the championship for the first time in his career after the race. In the {wikiLink("2021 Azerbaijan Grand Prix", "https://en.wikipedia.org/wiki/2021_Azerbaijan_Grand_Prix")} Verstappen led the majority of the race and looked set to win before a late-race tyre blowout. Pérez won the race. Verstappen then took pole and won the next three races while Pérez took one more podium in France to grow Red Bull's championship lead.
        </p>

        <p>
        At {wikiLink("Silverstone", "https://en.wikipedia.org/wiki/Silverstone_Circuit")}, Red Bull was beaten in Friday qualifying but Verstappen won the sprint on Saturday to claim a 4th consecutive pole position. During the race, Hamilton and Verstappen made contact at Copse corner, resulting in Verstappen crashing out of the race. In {wikiLink("Hungary", "https://en.wikipedia.org/wiki/2021_Hungarian_Grand_Prix")}, both Red Bulls suffered severe damage in a first-lap accident triggered by Mercedes' {wikiLink("Valtteri Bottas", "https://en.wikipedia.org/wiki/Valtteri_Bottas")}. Pérez was out of the race, Verstappen managed to salvage a 9th-place finish. In {wikiLink("Spa", "https://en.wikipedia.org/wiki/2021_Belgian_Grand_Prix")} Verstappen took pole and won a rain-shortened race in which half points were awarded. In {wikiLink("Italy", "https://en.wikipedia.org/wiki/2021_Italian_Grand_Prix")}, Hamilton and Verstappen made contact yet again at the Rettifilo chicane which resulted in both drivers retiring from the race, and Verstappen receiving a 3-place grid penalty for the next race, as the stewards judged him at fault for the collision. At the {wikiLink("Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2021_Abu_Dhabi_Grand_Prix")}, Verstappen took pole position, his first since {wikiLink("Austin", "https://en.wikipedia.org/wiki/2021_United_States_Grand_Prix")}. He secured his first world title and a first championship for the team since 2013 with a last lap overtake on Hamilton.
        </p>

        <p>
        On 10 October 2022, the FIA announced that Red Bull were one of two teams who had breached the 2021 Financial Regulations applicable during the season, with Red Bull committing what was described as "a Procedural Breach and a Minor Financial Overspend (less than 5% of the Cost Cap)". On 28 October 2022, the FIA announced that Red Bull had entered an Accepted Breach Agreement; in summary Red Bull were in breach of 13 points of non-compliance. The agreement resulted in a $7m fine and a 10% reduction in permitted aerodynamic research.
        </p>


        <div className="clear-both"></div>

        {/* 2022–2025: Red Bull Powertrains collaboration with Honda */}
        <section id="rbpt-honda-2022-2025" className="space-y-4 scroll-mt-24"></section>
        <h4 className="text-lg font-semibold text-red-400 mb-1">
        Red Bull Powertrains collaboration with Honda (2022–2025)
        </h4>

        {/* 2022 season */}
        <section id="2022 season" className="space-y-4 scroll-mt-24" />
        <h5 className="text-base font-semibold text-red-300 mb-1">2022 season</h5>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/2022_Miami_GP_-_Red_Bull_RB18_of_Sergio_P%C3%A9rez.jpg/250px-2022_Miami_GP_-_Red_Bull_RB18_of_Sergio_P%C3%A9rez.jpg"
            alt="Sergio Pérez at the 2022 Miami Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            Sergio Pérez at the {wikiLink("2022 Miami Grand Prix", "https://en.wikipedia.org/wiki/2022_Miami_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        American multinational software company {wikiLink("Oracle", "https://en.wikipedia.org/wiki/Oracle_Corporation")} became the team's title sponsor for the season.
        </p>

        <p>
        Following Honda's withdrawal as a works entity after 2021, an engine development freeze lobbied by Red Bull allowed them to sign a deal with Honda to use their engines until the end of 2024 (this would later be extended until 2025). The initial deal would see Red Bull receive the Honda engine {wikiLink("I.P", "https://en.wikipedia.org/wiki/Intellectual_property")} and then construct and maintain the engines through a newly formed company named {wikiLink("Red Bull Powertrains", "https://en.wikipedia.org/wiki/Red_Bull_Powertrains")} Limited which also took over part of Honda's Milton Keynes facility. This was only made possible by the engine freeze being agreed upon as Red Bull, at the time, did not have the ability to further develop the Honda engine and without the freeze, there were concerns of falling behind rival manufacturers. For the 2022 season, to reflect Honda's initial decision to withdraw, it was agreed that Red Bull would rebrand the Honda engines as RBPT power units.
        </p>

        <p>
        During the season, as future regulations were announced for the next generation power units for the 2026 season, that initial deal was scrapped and another was created that would see Honda remain involved and retain all {wikiLink("I.P", "https://en.wikipedia.org/wiki/Intellectual_property")} of its engines and agree to continue to manufacture, supply and maintain the engines until the end of the current regulations at the conclusion of the 2025 season. Despite their withdrawal, Honda developed and manufactured an improved power unit in time for the 2022 season – which would be used up to the end of 2024 – and will continue to provide trackside support and maintenance. The Honda-Red Bull deal was later extended to include the 2025 season.
        </p>

        <p>
        On 27 July, in Morocco, official information was published on the approval of an application submitted jointly by {wikiLink("Porsche", "https://en.wikipedia.org/wiki/Porsche")} and {wikiLink("Red Bull GmbH", "https://en.wikipedia.org/wiki/Red_Bull_GmbH")} in which Porsche acquired 50% of the shares in Red Bull Technology, the parent company of Red Bull Racing and its Formula One program. This application had to be filed with the antitrust authorities of up to 20 countries, including outside the {wikiLink("European Union", "https://en.wikipedia.org/wiki/European_Union")}. The press release was due to go out for the {wikiLink("Austrian GP", "https://en.wikipedia.org/wiki/2022_Austrian_Grand_Prix")}, however the {wikiLink("FIA", "https://en.wikipedia.org/wiki/F%C3%A9d%C3%A9ration_Internationale_de_l%27Automobile")} did not approve the regulations for the 2026 engines before 29 June as planned, delaying official confirmation of Porsche's entry into Formula One. However, by March 2023 Porsche had decided to abandon its planned entry into F1.
        </p>

        <p>
        Max Verstappen secured the sixth Drivers' World Championship for the team at the {wikiLink("Japanese Grand Prix", "https://en.wikipedia.org/wiki/2022_Japanese_Grand_Prix")}, dominating much of the season winning 15 out of 22 races. He then won the {wikiLink("United States Grand Prix", "https://en.wikipedia.org/wiki/2022_United_States_Grand_Prix")} to secure the Constructors' World Championship for Red Bull, their fifth overall and the first since 2013.
        </p>

        <div className="clear-both"></div>

        {/* 2023 season */}
        <section id="2023 season" className="space-y-4 scroll-mt-24" />
        <h5 className="text-base font-semibold text-red-300 mb-1">2023 season</h5>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/FIA_F1_Austria_2023_Nr._1_%281%29.jpg/250px-FIA_F1_Austria_2023_Nr._1_%281%29.jpg"
            alt="Max Verstappen at the 2023 Austrian Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} at the {wikiLink("2023 Austrian Grand Prix", "https://en.wikipedia.org/wiki/2023_Austrian_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        Red Bull Racing retained their 2022 line-up, defending World Champion {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} and teammate {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")}, for the 2023 season. To reflect the re-strengthened deal agreed upon in 2022, Honda returned to being the named supplier of engines and its branding was added back to the cars and team kit.
        </p>

        <p>
        Immediately, the {wikiLink("RB19", "https://en.wikipedia.org/wiki/Red_Bull_Racing_RB19")} was on the pace, outpacing all the other teams during pre-season testing. This pace was confirmed at the first race in {wikiLink("Bahrain", "https://en.wikipedia.org/wiki/2023_Bahrain_Grand_Prix")} when Verstappen, who took a comfortable pole position and race victory – the first of many throughout 2023. His teammate Pérez would himself win two races during the season, taking victory at the {wikiLink("Saudi Arabian", "https://en.wikipedia.org/wiki/2023_Saudi_Arabian_Grand_Prix")} and {wikiLink("Azerbaijan", "https://en.wikipedia.org/wiki/2023_Azerbaijan_Grand_Prix")} Grands Prix. The only race Red Bull did not win throughout the 2023 season was in {wikiLink("Singapore", "https://en.wikipedia.org/wiki/2023_Singapore_Grand_Prix")}, where Verstappen and Pérez finished fifth and eighth respectively; Verstappen's former {wikiLink("Toro Rosso", "https://en.wikipedia.org/wiki/Scuderia_Toro_Rosso")} teammate {wikiLink("Carlos Sainz Jr.", "https://en.wikipedia.org/wiki/Carlos_Sainz_Jr.")} would take the victory at Marina Bay.
        </p>

        <p>
        Red Bull remained consistent throughout the season, going on to secure the Constructors' Championship after Max Verstappen's triumph at the {wikiLink("Japanese Grand Prix", "https://en.wikipedia.org/wiki/2023_Japanese_Grand_Prix")}. He would then secure the Drivers' Championship at the following {wikiLink("Qatar Grand Prix", "https://en.wikipedia.org/wiki/2023_Qatar_Grand_Prix")} sprint event, with his victory at the {wikiLink("Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2023_Abu_Dhabi_Grand_Prix")} marking the culmination of one of Red Bull's most successful seasons in Formula One to date. Following the success of the previous year's {wikiLink("RB18", "https://en.wikipedia.org/wiki/Red_Bull_Racing_RB18")}, the RB19, also designed by {wikiLink("Adrian Newey", "https://en.wikipedia.org/wiki/Adrian_Newey")}, was noted as being one of the most dominant cars in Formula One history. The RB19 won 21 out of the 22 races in the season, with a 95.45% win rate, outperforming the {wikiLink("McLaren MP4/4", "https://en.wikipedia.org/wiki/McLaren_MP4/4")}, another Honda-powered car with a high win rate. The MP4/4 had won 15 out of 16 races in the {wikiLink("1988", "https://en.wikipedia.org/wiki/1988_Formula_One_World_Championship")} season with a 93.8% win rate; the only race it did not win is the {wikiLink("1988 Italian Grand Prix", "https://en.wikipedia.org/wiki/1988_Italian_Grand_Prix")} – which, like the 2023 Singapore Grand Prix, was won by {wikiLink("Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")}.
        </p>

        <p>
        Winning the {wikiLink("2023 Hungarian Grand Prix", "https://en.wikipedia.org/wiki/2023_Hungarian_Grand_Prix")}, the twelfth consecutive race Red Bull had won, set the record for most consecutive wins by a constructor, beating the record of eleven which had been held by {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")} since the {wikiLink("1988 Belgian Grand Prix", "https://en.wikipedia.org/wiki/1988_Belgian_Grand_Prix")}. The streak was subsequently extended to fifteen, with wins at the {wikiLink("Belgian", "https://en.wikipedia.org/wiki/2023_Belgian_Grand_Prix")}, {wikiLink("Dutch", "https://en.wikipedia.org/wiki/2023_Dutch_Grand_Prix")}, and {wikiLink("Italian", "https://en.wikipedia.org/wiki/2023_Italian_Grand_Prix")} Grands Prix. In addition, Verstappen became the first driver to surpass 1,000 laps led in a single season, and became the only driver to complete every racing lap in the 2023 season.
        </p>

        <div className="clear-both"></div>

        {/* 2024 season */}
        <section id="2024 season" className="space-y-4 scroll-mt-24" />
        <h5 className="text-base font-semibold text-red-300 mb-1">2024 season</h5>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Sergio_Perez_in_the_RB20.jpg/250px-Sergio_Perez_in_the_RB20.jpg"
            alt="Sergio Pérez at the 2024 Japanese Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")} at the {wikiLink("2024 Japanese Grand Prix", "https://en.wikipedia.org/wiki/2024_Japanese_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        Red Bull Racing retained their 2023 line-up, 3-times World Champion {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} and teammate {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")}, for the 2024 season. The {wikiLink("RB20", "https://en.wikipedia.org/wiki/Red_Bull_Racing_RB20")} was revealed on 15 February, with what Verstappen described as a "bold" and "aggressive" design.
        </p>

        <p>
        Red Bull Racing comfortably won the first two races, with Verstappen winning with over a ten-second gap from the car behind – both times the second car of Sergio Pérez. However, a brake failure due to overheating in the {wikiLink("2024 Australian Grand Prix", "https://en.wikipedia.org/wiki/2024_Australian_Grand_Prix")} caused {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} to retire.
        </p>

        <p>
        The team achieved its one-hundredth pole position at the {wikiLink("2024 Chinese Grand Prix", "https://en.wikipedia.org/wiki/2024_Chinese_Grand_Prix")}, with {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} on pole. The team acquired their first pole position fifteen years earlier with {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} at the {wikiLink("2009 Chinese Grand Prix", "https://en.wikipedia.org/wiki/2009_Chinese_Grand_Prix")}.
        </p>

        <p>
        During the summer break, Red Bull Racing announced the departure of its Sporting Director, {wikiLink("Jonathan Wheatley", "https://en.wikipedia.org/wiki/Jonathan_Wheatley")} after 18 years with the team. He will remain with the team until the end of the 2024 season, before entering a period of {wikiLink("gardening leave", "https://en.wikipedia.org/wiki/Garden_leave")} in 2025. He is set to join upcoming Formula One team, {wikiLink("Audi", "https://en.wikipedia.org/wiki/Audi_in_Formula_One")}, with the position of team principal in 2026.
        </p>

        <p>
        Red Bull slowly recovered from issues stemming from an underfloor tweak at the {wikiLink("2023 Spanish Grand Prix", "https://en.wikipedia.org/wiki/2023_Spanish_Grand_Prix")}. A new floor was introduced at the {wikiLink("2024 Azerbaijan Grand Prix", "https://en.wikipedia.org/wiki/2024_Azerbaijan_Grand_Prix")}, slightly improving the RB20's pace. Following a remarkable victory from {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} after starting from P17 in the {wikiLink("2024 São Paulo Grand Prix", "https://en.wikipedia.org/wiki/2024_S%C3%A3o_Paulo_Grand_Prix")}, Max scored 31 points during the weekend, securing his championship lead. He went on to take P5 in the {wikiLink("2024 Las Vegas Grand Prix", "https://en.wikipedia.org/wiki/2024_Las_Vegas_Grand_Prix")}, outscoring his championship rival, {wikiLink("Lando Norris", "https://en.wikipedia.org/wiki/Lando_Norris")}, winning his fourth championship at 403 points. Verstappen then won the following {wikiLink("2024 Qatar Grand Prix", "https://en.wikipedia.org/wiki/2024_Qatar_Grand_Prix")}. However, this was not enough to stop the team losing all mathematical chance of retaining the constructors' title the team had won in 2022 and 2023 as Pérez retired with a clutch issue.
        </p>

        <div className="clear-both"></div>

        {/* 2025 season */}
        <section id="2025 season" className="space-y-4 scroll-mt-24" />
        <h5 className="text-base font-semibold text-red-300 mb-1">2025 season</h5>

        <div className="clear-both"></div>

        <p>
        During the {wikiLink("2024 Miami Grand Prix", "https://en.wikipedia.org/wiki/2024_Miami_Grand_Prix")} race weekend, Red Bull Racing announced the departure of its Chief Technical Officer, {wikiLink("Adrian Newey", "https://en.wikipedia.org/wiki/Adrian_Newey")} after 19 years with the team. He left for {wikiLink("Aston Martin", "https://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One")} in March 2025. Despite initially having signed a contract until {wikiLink("2026", "https://en.wikipedia.org/wiki/2026_Formula_One_World_Championship")}, it was announced on 18 December 2024 that {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")} had mutually terminated his contract with Red Bull and would leave the team after four seasons. On 19 December, it was announced that {wikiLink("Liam Lawson", "https://en.wikipedia.org/wiki/Liam_Lawson")}, who had already driven for Red Bull's sister team {wikiLink("Scuderia AlphaTauri", "https://en.wikipedia.org/wiki/Scuderia_AlphaTauri")} / {wikiLink("RB", "https://en.wikipedia.org/wiki/Racing_Bulls")} for parts of 2023 and 2024, would be lining up alongside Verstappen for the 2025 season.
        </p>

        <p>
        The {wikiLink("Red Bull RB21", "https://en.wikipedia.org/wiki/Red_Bull_Racing_RB21")} started the 2025 season off the pace of the pacesetting {wikiLink("McLaren MCL39", "https://en.wikipedia.org/wiki/McLaren_MCL39")}. Despite this, after the first two rounds of the season in {wikiLink("Australia", "https://en.wikipedia.org/wiki/2025_Australian_Grand_Prix")} and {wikiLink("China", "https://en.wikipedia.org/wiki/2025_Chinese_Grand_Prix")} – the latter event a Sprint – Verstappen, scoring a podium by finishing in second, sat in second place in the Drivers' Championship just eight points behind early leader {wikiLink("Lando Norris", "https://en.wikipedia.org/wiki/Lando_Norris")}.
        </p>

        <p>
        Meanwhile, Pérez's replacement {wikiLink("Liam Lawson", "https://en.wikipedia.org/wiki/Liam_Lawson")} struggled badly, qualifying 18th at his first race for the team in Australia, then crashing out of the race having started from the pit lane due to the team making setup changes to Lawson's car outside of {wikiLink("parc fermé", "https://en.wikipedia.org/wiki/Parc_fermé")} regulations after qualifying. At the following race in China, Verstappen scored a podium during the sprint, but finished in fourth for the Grand Prix. Meanwhile, Lawson qualified 20th and last for both the Sprint and the Grand Prix, starting the Grand Prix once again from the pit lane after the team took his car out of parc fermé to make setup changes to the car in an effort to improve the handling of Lawson's car. He finished the Sprint 14th and Grand Prix 16th, but was promoted to 12th in the results after three drivers ahead of him were disqualified for technical infringements, while another driver was given a time penalty for dangerous driving.
        </p>

        <p>
        Following the race weekend in China, team advisor {wikiLink("Helmut Marko", "https://en.wikipedia.org/wiki/Helmut_Marko")} revealed to {wikiLink("Sky Germany", "https://en.wikipedia.org/wiki/Sky_Sport_(Germany)")} that the team would hold a "crisis meeting" to discuss their disappointing start to the season, and discuss Lawson's future at the team. By 26 March 2025, rumours started to circulate that ahead of the {wikiLink("2025 Japanese Grand Prix", "https://en.wikipedia.org/wiki/2025_Japanese_Grand_Prix")}, Lawson, following his two Grands Prix with the team ending with disappointing results, would be demoted back to sister team {wikiLink("Racing Bulls", "https://en.wikipedia.org/wiki/Racing_Bulls")}, with their driver {wikiLink("Yuki Tsunoda", "https://en.wikipedia.org/wiki/Yuki_Tsunoda")} being promoted to Red Bull in Lawson's place. On 27 March 2025, Red Bull confirmed that Yuki Tsunoda would drive for the team from the Japanese Grand Prix onwards.
        </p>

        <div className="clear-both"></div>
  </>
  );
  
  export default history;
  