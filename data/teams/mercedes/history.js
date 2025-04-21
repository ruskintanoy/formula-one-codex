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
        {/* Grand Prix racing before Formula One (1930s) */}
        <section id="grand-prix-1930s" className="space-y-4 scroll-mt-24"></section>
        <h3 className="text-2xl font-bold text-red-600 mb-2">
        Grand Prix racing before Formula One (1930s)
        </h3>

        <p>
        {wikiLink("Mercedes-Benz", "https://en.wikipedia.org/wiki/Mercedes-Benz")} formerly competed in{" "}
        {wikiLink("Grand Prix motor racing", "https://en.wikipedia.org/wiki/Grand_Prix_motor_racing")} in the 1930s, when the{" "}
        {wikiLink("Silver Arrows", "https://en.wikipedia.org/wiki/Silver_Arrows")} dominated the races alongside rivals{" "}
        {wikiLink("Auto Union", "https://en.wikipedia.org/wiki/Auto_Union")}. Both teams were heavily funded by the{" "}
        {wikiLink("Nazi regime", "https://en.wikipedia.org/wiki/Nazi_Germany")}, winning all{" "}
        {wikiLink("European Grand Prix Championships", "https://en.wikipedia.org/wiki/European_Championship_(auto_racing)")} after 1934, of which{" "}
        {wikiLink("Rudolf Caracciola", "https://en.wikipedia.org/wiki/Rudolf_Caracciola")} won three for Mercedes-Benz.
        </p>

        {/* Daimler-Benz AG (1954–1955) */}
        <section id="1954-1955" className="space-y-4 scroll-mt-24"></section>
        <h3 className="text-2xl font-bold text-red-600 mb-2">Daimler-Benz AG (1954–1955)</h3>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Gro%C3%9Fer_Preis_von_Europa_-1954_N%C3%BCrburgring%2C_Juan_Manuel_Fangio%2C_Mercedes_%283%29x.JPG/250px-Gro%C3%9Fer_Preis_von_Europa_-1954_N%C3%BCrburgring%2C_Juan_Manuel_Fangio%2C_Mercedes_%283%29x.JPG"
            alt="Juan Manuel Fangio at the 1954 German Grand Prix driving the W196"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Juan Manuel Fangio", "https://en.wikipedia.org/wiki/Juan_Manuel_Fangio")} at the wheel of the {wikiLink("W196", "https://en.wikipedia.org/wiki/Mercedes-Benz_W196")} at the {wikiLink("Nürburgring", "https://en.wikipedia.org/wiki/N%C3%BCrburgring")} during the {wikiLink("1954 German Grand Prix", "https://en.wikipedia.org/wiki/1954_German_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        In {wikiLink("1954", "https://en.wikipedia.org/wiki/1954_Formula_One_season")}, Mercedes-Benz returned to what was now known as {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} under the leadership of {wikiLink("Alfred Neubauer", "https://en.wikipedia.org/wiki/Alfred_Neubauer")}, using the technologically advanced {wikiLink("Mercedes-Benz W196", "https://en.wikipedia.org/wiki/Mercedes-Benz_W196")}. The car was run in both the conventional open-wheeled configuration and a streamlined form, which featured covered wheels and wider bodywork. {wikiLink("Juan Manuel Fangio", "https://en.wikipedia.org/wiki/Juan_Manuel_Fangio")}, the 1951 champion, transferred mid-season from {wikiLink("Maserati", "https://en.wikipedia.org/wiki/Maserati_in_motorsport")} to Mercedes-Benz for their debut at the {wikiLink("French Grand Prix", "https://en.wikipedia.org/wiki/French_Grand_Prix")} on 4 July 1954. The team had immediate success and recorded a 1–2 victory with Fangio and {wikiLink("Karl Kling", "https://en.wikipedia.org/wiki/Karl_Kling")}, as well as the fastest lap by {wikiLink("Hans Herrmann", "https://en.wikipedia.org/wiki/Hans_Herrmann")}. Fangio went on to win three more races that year and claimed the championship.
        </p>

        <p>
        The success continued into the {wikiLink("1955 Formula One season", "https://en.wikipedia.org/wiki/1955_Formula_One_season")}, with Mercedes-Benz further developing the W196. The team again dominated, with Fangio taking four wins and his new teammate {wikiLink("Stirling Moss", "https://en.wikipedia.org/wiki/Stirling_Moss")} securing victory at the {wikiLink("1955 British Grand Prix", "https://en.wikipedia.org/wiki/1955_British_Grand_Prix")}. Fangio and Moss finished first and second in the championship. However, the tragic {wikiLink("1955 Le Mans disaster", "https://en.wikipedia.org/wiki/1955_Le_Mans_disaster")} on 11 June, which killed driver {wikiLink("Pierre Levegh", "https://en.wikipedia.org/wiki/Pierre_Levegh")} and more than 80 spectators, led to the cancellations of the French, German, Spanish, and Swiss Grands Prix. At the end of the season, Mercedes-Benz withdrew from motorsport, including Formula One.
        
        During this initial stint in Formula One, Mercedes won 9 races in total, including three Grands Prix — the {wikiLink("1954 French Grand Prix", "https://en.wikipedia.org/wiki/1954_French_Grand_Prix")}, {wikiLink("1954 Italian Grand Prix", "https://en.wikipedia.org/wiki/1954_Italian_Grand_Prix")}, and {wikiLink("1955 Italian Grand Prix", "https://en.wikipedia.org/wiki/1955_Italian_Grand_Prix")} — using the streamlined {wikiLink('"Type Monza"', "https://en.wikipedia.org/wiki/Mercedes-Benz_W196#Monza")}. These remain the only Formula One wins by a closed-wheel car in history.
        </p>

        <div className="clear-both"></div>

        {/* Mercedes-AMG Petronas Formula One Team (2010–Present) */}
        <section id="2010-present" className="space-y-4 scroll-mt-24"></section>
        <h3 className="text-2xl font-bold text-red-600 mb-2">Mercedes-AMG Petronas Formula One Team (2010–Present)</h3>

        <p>
        Before the start of the {wikiLink("2010 season", "https://en.wikipedia.org/wiki/2010_Formula_One_World_Championship")}, Mercedes-Benz's parent company {wikiLink("Daimler AG", "https://en.wikipedia.org/wiki/Daimler_AG")} purchased a 45.1% stake in the championship-winning {wikiLink("Brawn GP", "https://en.wikipedia.org/wiki/Brawn_GP")} team, while {wikiLink("Aabar Investments", "https://en.wikipedia.org/wiki/Aabar_Investments")} acquired an additional 30%. Following the acquisition and a sponsorship deal with {wikiLink("Petronas", "https://en.wikipedia.org/wiki/Petronas")}, the team was rebranded as the <i>Mercedes GP Petronas Formula One Team</i>, marking Mercedes' first entry into the Constructors' Championship as a works team. {wikiLink("Ross Brawn", "https://en.wikipedia.org/wiki/Ross_Brawn")} remained as team principal, and the outfit retained its headquarters in {wikiLink("Brackley", "https://en.wikipedia.org/wiki/Brackley")}, operating from a 60,000&nbsp;m² facility near the {wikiLink("Mercedes-Benz Formula One engine plant", "https://en.wikipedia.org/wiki/Mercedes_AMG_High_Performance_Powertrains")} in {wikiLink("Brixworth", "https://en.wikipedia.org/wiki/Brixworth")}.
        </p>

        <p>
        The team's lineage can be traced back to {wikiLink("Tyrrell Racing", "https://en.wikipedia.org/wiki/Tyrrell_Racing")}, who raced as a constructor from 1970 to 1998. The entry was acquired by British American Tobacco at the end of the {wikiLink("1997 Formula One World Championship", "https://en.wikipedia.org/wiki/1997_Formula_One_World_Championship")} to form {wikiLink("British American Racing", "https://en.wikipedia.org/wiki/British_American_Racing")} (BAR), debuting in {wikiLink("1999", "https://en.wikipedia.org/wiki/1999_Formula_One_World_Championship")}. BAR, having partnered with {wikiLink("Honda", "https://en.wikipedia.org/wiki/Honda")}, evolved into the {wikiLink("Honda Racing F1 Team", "https://en.wikipedia.org/wiki/Honda_in_Formula_One")} in 2006 after BAT’s exit from the sport. In 2008, Honda withdrew from Formula One, and the team was sold to its management—renamed {wikiLink("Brawn GP", "https://en.wikipedia.org/wiki/Brawn_GP")} after principal Ross Brawn.
      
        Running {wikiLink("Mercedes-Benz High Performance Engines", "https://en.wikipedia.org/wiki/Mercedes_AMG_High_Performance_Powertrains")} and operating on a modest budget, Brawn GP shocked the paddock when {wikiLink("Jenson Button", "https://en.wikipedia.org/wiki/Jenson_Button")} won six of the first seven races of the {wikiLink("2009 Formula One World Championship", "https://en.wikipedia.org/wiki/2009_Formula_One_World_Championship")}, clinching the Drivers' title. The team also won the Constructors' Championship—making it the first and only team to win both titles in its debut season.
        </p>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Nico_Rosberg_2010_Malaysia_race.jpg/250px-Nico_Rosberg_2010_Malaysia_race.jpg"
            alt="Nico Rosberg at the 2010 Malaysian Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Nico Rosberg", "https://en.wikipedia.org/wiki/Nico_Rosberg")} scored Mercedes's first podium finish as a works team since 1955 at the {wikiLink("2010 Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2010_Malaysian_Grand_Prix")}.
        </figcaption>
        </figure>

        <p>
        Team Mercedes GP hired German drivers {wikiLink("Nico Rosberg", "https://en.wikipedia.org/wiki/Nico_Rosberg")} and seven-time world champion {wikiLink("Michael Schumacher", "https://en.wikipedia.org/wiki/Michael_Schumacher")}, who returned after a three-year absence, with {wikiLink("Nick Heidfeld", "https://en.wikipedia.org/wiki/Nick_Heidfeld")} as reserve. {wikiLink("Jenson Button", "https://en.wikipedia.org/wiki/Jenson_Button")} signed with {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")}, while {wikiLink("Rubens Barrichello", "https://en.wikipedia.org/wiki/Rubens_Barrichello")} moved to {wikiLink("Williams", "https://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering")}. Mercedes ended its ownership involvement in McLaren, with {wikiLink("Daimler AG", "https://en.wikipedia.org/wiki/Daimler_AG")} selling its 40% stake in the {wikiLink("McLaren Group", "https://en.wikipedia.org/wiki/McLaren_Group")}, although engine supply continued.
        
        In 2010, the team struggled to match the leading outfits: {wikiLink("Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")}, {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")}, and {wikiLink("Red Bull", "https://en.wikipedia.org/wiki/Red_Bull_Racing")}. Rosberg earned three podiums—third at {wikiLink("Sepang", "https://en.wikipedia.org/wiki/2010_Malaysian_Grand_Prix")}, {wikiLink("Shanghai", "https://en.wikipedia.org/wiki/2010_Chinese_Grand_Prix")}, and {wikiLink("Silverstone", "https://en.wikipedia.org/wiki/2010_British_Grand_Prix")}. He finished seventh in the standings, while Schumacher endured a difficult return, with no podiums, poles, or wins—the first such season since his debut in {wikiLink("1991", "https://en.wikipedia.org/wiki/1991_Formula_One_World_Championship")}. He courted controversy in {wikiLink("Hungary", "https://en.wikipedia.org/wiki/2010_Hungarian_Grand_Prix")} for nearly squeezing Barrichello into the wall. The team finished fourth overall with 214 points.
        </p>

        <p>
        Ahead of the {wikiLink("2011 season", "https://en.wikipedia.org/wiki/2011_Formula_One_World_Championship")}, Daimler and Aabar acquired the remaining 24.9% of team ownership. With the new MGP W02, both drivers retired in the {wikiLink("Australian Grand Prix", "https://en.wikipedia.org/wiki/2011_Australian_Grand_Prix")}. In {wikiLink("Malaysia", "https://en.wikipedia.org/wiki/2011_Malaysian_Grand_Prix")}, Rosberg qualified ninth and Schumacher eleventh; the latter scored the first points of the season in ninth, with Rosberg finishing twelfth. Rosberg led 14 laps in {wikiLink("China", "https://en.wikipedia.org/wiki/2011_Chinese_Grand_Prix")}, finishing fifth, with Schumacher in eighth. Rosberg added another fifth place in {wikiLink("Turkey", "https://en.wikipedia.org/wiki/2011_Turkish_Grand_Prix")}, while Schumacher finished sixth in {wikiLink("Spain", "https://en.wikipedia.org/wiki/2011_Spanish_Grand_Prix")}.
        
        Schumacher ran as high as second in {wikiLink("Canada", "https://en.wikipedia.org/wiki/2011_Canadian_Grand_Prix")} before finishing fourth—his best since returning. In {wikiLink("Valencia", "https://en.wikipedia.org/wiki/2011_European_Grand_Prix")}, Rosberg finished seventh while Schumacher ended up seventeenth after a collision with {wikiLink("Vitaly Petrov", "https://en.wikipedia.org/wiki/Vitaly_Petrov")}. Both drivers scored in {wikiLink("Great Britain", "https://en.wikipedia.org/wiki/2011_British_Grand_Prix")} and {wikiLink("Germany", "https://en.wikipedia.org/wiki/2011_German_Grand_Prix")}, though a gearbox issue forced Schumacher’s retirement in {wikiLink("Hungary", "https://en.wikipedia.org/wiki/2011_Hungarian_Grand_Prix")}. In {wikiLink("Belgium", "https://en.wikipedia.org/wiki/2011_Belgian_Grand_Prix")}, Schumacher climbed from the back of the grid to finish fifth, with Rosberg in sixth. Once again, the team placed fourth in the Constructors’ standings—scoring 165 points without wins, podiums, or poles.
        </p>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Michael_Schumacher_pole_lap_monaco_2012.JPG/250px-Michael_Schumacher_pole_lap_monaco_2012.JPG"
            alt="Michael Schumacher at the 2012 Monaco Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Michael Schumacher", "https://en.wikipedia.org/wiki/Michael_Schumacher")} at the {wikiLink("2012 Monaco Grand Prix", "https://en.wikipedia.org/wiki/2012_Monaco_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        For the {wikiLink("2012 season", "https://en.wikipedia.org/wiki/2012_Formula_One_World_Championship")}, the team removed the <i>GP</i> from its name and added {wikiLink("AMG", "https://en.wikipedia.org/wiki/Mercedes-AMG")}, the performance division of Daimler AG, becoming officially known as the <i>Mercedes AMG Petronas F1 Team</i>. Early in the season, Mercedes faced protests over a controversial rear wing on the {wikiLink("Mercedes F1 W03", "https://en.wikipedia.org/wiki/Mercedes_F1_W03")}, though stewards dismissed the complaints by the third race in {wikiLink("China", "https://en.wikipedia.org/wiki/2012_Chinese_Grand_Prix")}.
      
        At that race, {wikiLink("Nico Rosberg", "https://en.wikipedia.org/wiki/Nico_Rosberg")} claimed the team’s first pole since {wikiLink("1955", "https://en.wikipedia.org/wiki/1955_Formula_One_season")}, with {wikiLink("Michael Schumacher", "https://en.wikipedia.org/wiki/Michael_Schumacher")} joining him on the front row after a grid penalty for {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")}. Rosberg went on to secure Mercedes’s first win as a works team in 57 years—also marking the first time a German driver won a race in a German car in {wikiLink("Formula 1", "https://en.wikipedia.org/wiki/Formula_1")} history. At {wikiLink("Monaco", "https://en.wikipedia.org/wiki/2012_Monaco_Grand_Prix")}, Schumacher set the fastest qualifying time but started sixth due to a grid penalty from an incident with {wikiLink("Bruno Senna", "https://en.wikipedia.org/wiki/Bruno_Senna")} in {wikiLink("Spain", "https://en.wikipedia.org/wiki/2012_Spanish_Grand_Prix")}.
        
        Rosberg also became the first German to win a Grand Prix in a German vehicle since {wikiLink("Hermann Lang", "https://en.wikipedia.org/wiki/Hermann_Lang")} at the {wikiLink("1939 Swiss Grand Prix", "https://en.wikipedia.org/wiki/1939_Swiss_Grand_Prix")}. On 28 September 2012, {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")} was announced as Schumacher’s replacement for the {wikiLink("2013 season", "https://en.wikipedia.org/wiki/2013_Formula_One_World_Championship")}, signing a three-year deal to join Rosberg. In January 2013, {wikiLink("Toto Wolff", "https://en.wikipedia.org/wiki/Toto_Wolff")} became executive director and managing partner, acquiring a 30% stake in Mercedes-Benz Grand Prix Ltd, alongside {wikiLink("Niki Lauda", "https://en.wikipedia.org/wiki/Niki_Lauda")} who held 10%, and Daimler retaining 60%. Wolff also took over global coordination of Mercedes-Benz motorsport operations from {wikiLink("Norbert Haug", "https://en.wikipedia.org/wiki/Norbert_Haug")}.
        </p>

        <p>
        In {wikiLink("2013", "https://en.wikipedia.org/wiki/2013_Formula_One_World_Championship")}, Rosberg converted pole into victory at the {wikiLink("Monaco Grand Prix", "https://en.wikipedia.org/wiki/2013_Monaco_Grand_Prix")}. Shortly after, {wikiLink("Paddy Lowe", "https://en.wikipedia.org/wiki/Paddy_Lowe")} joined as executive director. Hamilton earned the team a podium with third in {wikiLink("Canada", "https://en.wikipedia.org/wiki/2013_Canadian_Grand_Prix")}, while Rosberg claimed another win at the {wikiLink("British Grand Prix", "https://en.wikipedia.org/wiki/2013_British_Grand_Prix")}, where Mercedes locked out the front row in qualifying. Hamilton took his maiden win for the team in {wikiLink("Hungary", "https://en.wikipedia.org/wiki/2013_Hungarian_Grand_Prix")}, helping Mercedes clinch second place in the Constructors’ standings behind {wikiLink("Red Bull Racing", "https://en.wikipedia.org/wiki/Red_Bull_Racing")}.
        </p>

        <div className="clear-both"></div>

        {/* Eight consecutive constructors titles (2014–2021) */}
        <section id="mercedes-2014-2021" className="space-y-4 scroll-mt-24"></section>
        <h4 className="text-lg font-semibold text-red-400 mb-1">
        Eight consecutive constructors titles (2014–2021)
        </h4>

        <p>
        Both drivers were retained for {wikiLink("2014", "https://en.wikipedia.org/wiki/2014_Formula_One_World_Championship")}. Rosberg won the first race of the season in {wikiLink("Australia", "https://en.wikipedia.org/wiki/2014_Australian_Grand_Prix")}, then in {wikiLink("Malaysia", "https://en.wikipedia.org/wiki/2014_Malaysian_Grand_Prix")}, Hamilton completed a grand slam – leading every lap from pole position, with the fastest race lap – while Rosberg completed a 1–2 finish for the team; it ended Hamilton's nine race streak without a podium finish, and was the first 1–2 finish by Mercedes as a works team since the {wikiLink("1955 Italian Grand Prix", "https://en.wikipedia.org/wiki/1955_Italian_Grand_Prix")}. The team repeated the result at the {wikiLink("Bahrain", "https://en.wikipedia.org/wiki/2014_Bahrain_Grand_Prix")}, the {wikiLink("Chinese", "https://en.wikipedia.org/wiki/2014_Chinese_Grand_Prix")}, and the {wikiLink("Spanish Grands Prix", "https://en.wikipedia.org/wiki/2014_Spanish_Grand_Prix")}, while Rosberg and Hamilton finished 1–2 respectively at the {wikiLink("Monaco", "https://en.wikipedia.org/wiki/2014_Monaco_Grand_Prix")} and {wikiLink("Austrian Grands Prix", "https://en.wikipedia.org/wiki/2014_Austrian_Grand_Prix")}. At the {wikiLink("German Grand Prix", "https://en.wikipedia.org/wiki/2014_German_Grand_Prix")}, Rosberg became the first German driver driving a German vehicle to win the {wikiLink("German Grand Prix", "https://en.wikipedia.org/wiki/German_Grand_Prix")} since it was achieved by {wikiLink("Rudolf Caracciola", "https://en.wikipedia.org/wiki/Rudolf_Caracciola")} and Mercedes-Benz at the {wikiLink("1939 German Grand Prix", "https://en.wikipedia.org/wiki/1939_German_Grand_Prix")}. At the {wikiLink("Russian Grand Prix", "https://en.wikipedia.org/wiki/2014_Russian_Grand_Prix")} the team won their first Constructors' Championship as a works team. Hamilton won the last race of the season, held in {wikiLink("Abu Dhabi", "https://en.wikipedia.org/wiki/2014_Abu_Dhabi_Grand_Prix")}. He finished the season 67 points ahead of Rosberg, clinching the World Drivers' Championship. The team finished the 2014 season 296 points ahead of their closest rival {wikiLink("Red Bull Racing", "https://en.wikipedia.org/wiki/Red_Bull_Racing")} in the World Constructors' Championship standings. With 18 pole positions, 16 wins and 11 1–2s out of 19 races, Mercedes dominated this first year of the V6 turbo era. For their 16 race victories, the average winning margin to the nearest non-Mercedes competitor was 23.2 seconds.
        </p>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Rosberg_Hamilton_-_2016_Monaco_GP_2.jpg/250px-Rosberg_Hamilton_-_2016_Monaco_GP_2.jpg"
            alt="Rosberg and Hamilton at the 2016 Monaco Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            Rosberg (left) and Hamilton (right) at the {wikiLink("2016 Monaco Grand Prix", "https://en.wikipedia.org/wiki/2016_Monaco_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        For the {wikiLink("2015", "https://en.wikipedia.org/wiki/2015_Formula_One_World_Championship")} season, the team retained both Hamilton and Rosberg. At the {wikiLink("2015 Russian Grand Prix", "https://en.wikipedia.org/wiki/2015_Russian_Grand_Prix")} the team won their second Constructors' Championship as a works team and Hamilton won his second consecutive Drivers' Championship at the {wikiLink("2015 United States Grand Prix", "https://en.wikipedia.org/wiki/2015_United_States_Grand_Prix")}, finishing 59 points ahead of Rosberg. Mercedes continued their domination in this second year of the V6 turbo era, improving on their impressive numbers from 2014 with 18 pole positions, 16 wins and 12 1–2s in 19 races. Of their 16 race victories, the average winning margin to the nearest non-Mercedes competitor was 19.7 seconds, down from 23.2 seconds in 2014.
        </p>

        <p>
        In the {wikiLink("2016", "https://en.wikipedia.org/wiki/2016_Formula_One_World_Championship")} season, Mercedes won the Constructors' Championship for the third consecutive season, winning 19 of the 21 races held, while securing 20 poles (the highest percentage ever in a single season of F1 at 95.2%) and 8 1–2s. The average winning gap to the nearest non-Mercedes driver dropped to 14.6 seconds. Rosberg won his only Drivers' Championship, finishing 5 points ahead of Hamilton, before announcing his retirement shortly after winning the title.
        </p>

        <p>
        On 10 January 2017, Mercedes announced that Executive Director Paddy Lowe had left the team, and entered a period of {wikiLink("garden leave", "https://en.wikipedia.org/wiki/Garden_leave")}. On 16 January 2017, {wikiLink("Valtteri Bottas", "https://en.wikipedia.org/wiki/Valtteri_Bottas")} was announced as Rosberg's replacement for the {wikiLink("2017", "https://en.wikipedia.org/wiki/2017_Formula_One_World_Championship")} season and British {wikiLink("GP3", "https://en.wikipedia.org/wiki/2017_GP3_Series")} driver {wikiLink("George Russell", "https://en.wikipedia.org/wiki/George_Russell_(racing_driver)")} was incorporated into the junior team. On 22 October 2017, Mercedes won the Constructors' Championship for the fourth consecutive time. One week later, {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")} became the first British driver to win four world championships. Mercedes finished the 2017 season with 12 wins out of 20 races, 15 poles, 4 1–2s and an average winning margin to the nearest non-Mercedes driver of 13.1 seconds.
        </p>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/2019_Japanese_Grand_Prix_Valtteri_Bottas_%2849054225468%29.jpg/250px-2019_Japanese_Grand_Prix_Valtteri_Bottas_%2849054225468%29.jpg"
            alt="Bottas at the 2019 Japanese Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            Bottas at the {wikiLink("2019 Japanese Grand Prix", "https://en.wikipedia.org/wiki/2019_Japanese_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        For the {wikiLink("2018 season", "https://en.wikipedia.org/wiki/2018_Formula_One_World_Championship")} the team retained both Hamilton and Bottas. The team clinched their fifth straight constructors' title at the {wikiLink("penultimate race of the season in Brazil", "https://en.wikipedia.org/wiki/2018_Brazilian_Grand_Prix")} after a win for Hamilton. In the 2018 season, Mercedes won 11 races (all for Hamilton) out of 21 races, took 10 fastest laps (three for Hamilton and seven for Bottas), 13 pole positions (eleven for Hamilton and two for Bottas), and four 1–2 finishes. This made Mercedes only the second team in the history in F1 to achieve the feat of winning 5 drivers' and constructors' titles in a row, after {wikiLink("Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")} did so between {wikiLink("2000", "https://en.wikipedia.org/wiki/2000_Formula_One_World_Championship")} and {wikiLink("2004", "https://en.wikipedia.org/wiki/2004_Formula_One_World_Championship")}.
        </p>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Valtteri_Bottas_2020_Tuscan_Grand_Prix_-_race_day.jpg/250px-Valtteri_Bottas_2020_Tuscan_Grand_Prix_-_race_day.jpg"
            alt="Bottas at the 2020 Tuscan Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            Bottas at the {wikiLink("2020 Tuscan Grand Prix", "https://en.wikipedia.org/wiki/2020_Tuscan_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        For the {wikiLink("2019 season", "https://en.wikipedia.org/wiki/2019_Formula_One_World_Championship")}, the team again retained both Hamilton and Bottas. In the {wikiLink("opening race", "https://en.wikipedia.org/wiki/2019_Australian_Grand_Prix")}, both drivers locked out the front row with Hamilton taking pole position. Bottas overtook Hamilton at the start and took his first victory since the {wikiLink("2017 Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2017_Abu_Dhabi_Grand_Prix")}, with Hamilton managing to give the team a 1–2 finish after fending off {wikiLink("Red Bull's", "https://en.wikipedia.org/wiki/Red_Bull_Racing")} {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")}. The team continued the strong performance through the first half of the season. By the summer break, Mercedes had won 10 out of 12 races with Hamilton taking 8 victories to Bottas's 2, securing 1–2 finishes at the first 5 races of the season. The team would go on to take both the drivers and constructors titles for the sixth consecutive year.
        </p>

        <p>
        The team debuted their "Dual-Axis-Steering" system during pre-season testing for the {wikiLink("2020", "https://en.wikipedia.org/wiki/2020_Formula_One_World_Championship")} season. This allows the driver to change the {wikiLink("toe", "https://en.wikipedia.org/wiki/Toe_(automotive)")} of the front wheels by pushing or pulling on the steering wheel. This allows the driver to optimise the car for better tyre warming on the straights with zero toe, or better mechanical grip in the corners with positive toe. The system was allowed for the 2020 season, but has been made illegal for {wikiLink("2021", "https://en.wikipedia.org/wiki/2021_Formula_One_World_Championship")}. The team would go on to win both the drivers and constructors championships. Before the penultimate round of the season, the {wikiLink("2020 Sakhir Grand Prix", "https://en.wikipedia.org/wiki/2020_Sakhir_Grand_Prix")}, Hamilton was forced to sit the race out following a positive {wikiLink("coronavirus", "https://en.wikipedia.org/wiki/Coronavirus")} test, with Williams driver and Mercedes junior {wikiLink("George Russell", "https://en.wikipedia.org/wiki/George_Russell_(racing_driver)")} replacing him.
        </p>

        <div className="clear-both"></div>

        {/* Struggling with ground effect (2022–2024) */}
        <section id="mercedes-2022-2024" className="space-y-4 scroll-mt-24"></section>
        <h4 className="text-lg font-semibold text-red-400 mb-1">
        Struggling with ground effect (2022–2024)
        </h4>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/George_Russell_2022.jpg/250px-George_Russell_2022.jpg"
            alt="George Russell driving the Mercedes W13 at the 2022 Emilia Romagna Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("George Russell", "https://en.wikipedia.org/wiki/George_Russell_(racing_driver)")} driving the {wikiLink("Mercedes W13", "https://en.wikipedia.org/wiki/Mercedes_W13")} at the {wikiLink("2022 Emilia Romagna Grand Prix", "https://en.wikipedia.org/wiki/2022_Emilia_Romagna_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        Mercedes junior driver, {wikiLink("George Russell", "https://en.wikipedia.org/wiki/George_Russell_(racing_driver)")} replaced Bottas to partner Hamilton for {wikiLink("2022", "https://en.wikipedia.org/wiki/2022_Formula_One_World_Championship")}. 2022 saw major rule changes, which reintroduced {wikiLink("ground effect", "https://en.wikipedia.org/wiki/Ground_effect_(cars)")}. Mercedes revealed a radical design with what was dubbed 'zero-pods'. The radical design did not pay dividends, as the team struggled to understand and unlock its full potential. Additionally, the car suffered from aggressive {wikiLink("porpoising", "https://en.wikipedia.org/wiki/Porpoising")}, the porpoising was significantly reduced and "solved" ahead of the {wikiLink("Canadian Grand Prix", "https://en.wikipedia.org/wiki/2022_Canadian_Grand_Prix")}. Despite their performance struggles, Mercedes' reliability was "amazing", meaning their only three retirements of the season came at the {wikiLink("British Grand Prix", "https://en.wikipedia.org/wiki/2022_British_Grand_Prix")}, where Russell was involved in a crash with {wikiLink("Zhou Guanyu", "https://en.wikipedia.org/wiki/Zhou_Guanyu")} and {wikiLink("Pierre Gasly", "https://en.wikipedia.org/wiki/Pierre_Gasly")}, the {wikiLink("Belgian Grand Prix", "https://en.wikipedia.org/wiki/2022_Belgian_Grand_Prix")}, where Hamilton was involved in a crash with {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")}, and the {wikiLink("Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2022_Abu_Dhabi_Grand_Prix")}, where Hamilton suffered a mechanical failure, but was still classified 18th. The team regularly appeared on the podium. At the {wikiLink("French Grand Prix", "https://en.wikipedia.org/wiki/2022_French_Grand_Prix")}, Hamilton finished second while Russell finished third, marking the team's first double podium of the season. Russell achieved his first ever {wikiLink("pole position", "https://en.wikipedia.org/wiki/Pole_position")}, and Mercedes' first of the season, at the {wikiLink("Hungarian Grand Prix", "https://en.wikipedia.org/wiki/2022_Hungarian_Grand_Prix")}. Russell achieved his first Formula One win, and Mercedes' first of the season, along with Hamilton coming in second, at the {wikiLink("São Paulo Grand Prix", "https://en.wikipedia.org/wiki/2022_S%C3%A3o_Paulo_Grand_Prix")}.
        </p>

        <p>
        Mercedes finished the 2022 season third in the Constructors' Championship with the one win at São Paulo marking their best result of the season. Russell finished 4th in the Drivers' Championship having scored the win in Brazil plus a pole position in Hungary. Hamilton finished 6th in the Drivers' Championship marking the first time in his career he finished outside the top 5, with 2022 also marking the first time Hamilton had failed to score a pole position or Grand Prix win during a season.
        </p>

        <p>
        After continuing to struggle with their radical "zero-pods" design in the 2023 season, Mercedes opted to replace Technical Director {wikiLink("Mike Elliott", "https://en.wikipedia.org/wiki/Mike_Elliott_(Formula_One)")} with {wikiLink("James Allison", "https://en.wikipedia.org/wiki/James_Allison_(motorsport)")}, with Elliott becoming Chief Technical Officer. This change occurred on 21 April 2023.
        </p>

        <p>
        Mercedes finished 2023 second in the Constructors' Championship, 3 points ahead of Ferrari. The season however still was disappointing as the team failed to secure a win for the first time since {wikiLink("2011", "https://en.wikipedia.org/wiki/2011_Formula_One_World_Championship")}. The closest the team came to winning was at the {wikiLink("United States Grand Prix", "https://en.wikipedia.org/wiki/2023_United_States_Grand_Prix")} where Hamilton finished 0.3 seconds behind World Champion Max Verstappen before he was disqualified for his rear skid blocks being worn below the limit. Hamilton finished 2023 third in the Drivers' Championship with 6 podiums, with the highlight of his season being breaking the record for the most pole positions at a single circuit after he took his 9th pole at the {wikiLink("Hungaroring", "https://en.wikipedia.org/wiki/Hungaroring")} during the {wikiLink("Hungarian Grand Prix", "https://en.wikipedia.org/wiki/2023_Hungarian_Grand_Prix")}. Russell had a miserable season finishing 8th in the Drivers' Championship with 2 podiums.
        </p>

        <p>
        The team admitted the W15 will have a completely different concept for the {wikiLink("2024 season", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship")} with their intentions to be trying to catch up to pace setters {wikiLink("Red Bull", "https://en.wikipedia.org/wiki/Red_Bull_Racing")} for their hope of claiming the championship or fighting for wins.
        </p>

        {/* Preparing for a post-Lewis Hamilton era (2025–Present) */}
        <section id="mercedes-2025-present" className="space-y-4 scroll-mt-24"></section>
        <h4 className="text-lg font-semibold text-red-400 mb-1">
        Preparing for a post-Lewis Hamilton era (2025–Present)
        </h4>

        <p>
        On 1 February 2024, Mercedes confirmed Hamilton would leave the team after 12 years, with the seven-time champion signing a multi-year contract to drive for {wikiLink("Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")} from {wikiLink("2025", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")} onwards after he activated an exit clause in his contract. Mercedes junior driver {wikiLink("Andrea Kimi Antonelli", "https://en.wikipedia.org/wiki/Andrea_Kimi_Antonelli")} was announced as his replacement on 31 August 2024. On 19 December 2024, Bottas was announced to be rejoining the team as a reserve driver.
        </p>

        <div className="clear-both"></div>
  </>
  );
  
  export default history;
  