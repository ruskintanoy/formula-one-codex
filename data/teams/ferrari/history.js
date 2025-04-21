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
        {/* Scuderia Ferrari Foundation */}
        <section id="scuderia-ferrari-foundation" className="space-y-4 scroll-mt-24"></section>
        <h3 className="text-2xl font-bold text-red-600 mb-2">Scuderia Ferrari Foundation</h3>

        <p>
        Scuderia Ferrari was founded by {wikiLink("Enzo Ferrari", "https://en.wikipedia.org/wiki/Enzo_Ferrari")} in 1929 to enter amateur drivers in various races. Ferrari himself had raced in Costruzioni Meccaniche Nazionali and {wikiLink("Alfa Romeo", "https://en.wikipedia.org/wiki/Alfa_Romeo")} cars before that date. The idea came about on the night of 16 November at a dinner in {wikiLink("Bologna", "https://en.wikipedia.org/wiki/Bologna")}, where Ferrari solicited financial help from textile heirs Augusto and Alfredo Caniato and wealthy amateur racer Mario Tadini. He then gathered a team which at its peak included over forty drivers, most of whom raced in various {wikiLink("Alfa Romeo 8C", "https://en.wikipedia.org/wiki/Alfa_Romeo_8C")} cars; Ferrari himself continued racing, with moderate success, until the birth of his first son {wikiLink("Dino", "https://en.wikipedia.org/wiki/Alfredo_Ferrari")} in 1932. The prancing horse blazon first appeared at the 1932 {wikiLink("Spa 24 Hours", "https://en.wikipedia.org/wiki/Spa_24_Hours")} in Belgium on a two-car team of {wikiLink("Alfa Romeo 8C", "https://en.wikipedia.org/wiki/Alfa_Romeo_8C")} 2300 Spiders, which finished first and second.
        </p>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Alfa-Romeo-2900-Scuderia-Ferrari-maroon-fa-lr.jpg/250px-Alfa-Romeo-2900-Scuderia-Ferrari-maroon-fa-lr.jpg"
            alt="Alfa Romeo 8C 2900 Scuderia Ferrari"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Alfa Romeo 8C", "https://en.wikipedia.org/wiki/Alfa_Romeo_8C")} 2900 Scuderia Ferrari
        </figcaption>
        </figure>

        <p>
        In 1933, {wikiLink("Alfa Romeo", "https://en.wikipedia.org/wiki/Alfa_Romeo")} experienced economic difficulties and withdrew its team from racing. From then, the Scuderia Ferrari became the acting racing team of Alfa Romeo when the factory released to the Scuderia the up-to-date {wikiLink("Monoposto", "https://en.wikipedia.org/wiki/Monoposto")} Tipo B racers. In 1935, Enzo Ferrari and Luigi Bazzi built the {wikiLink("Alfa Romeo Bimotore", "https://en.wikipedia.org/wiki/Alfa_Romeo_Bimotore")}, the first car to wear a Ferrari badge on the radiator cowl. Ferrari managed numerous established drivers (notably {wikiLink("Tazio Nuvolari", "https://en.wikipedia.org/wiki/Tazio_Nuvolari")}, {wikiLink("Giuseppe Campari", "https://en.wikipedia.org/wiki/Giuseppe_Campari")}, {wikiLink("Achille Varzi", "https://en.wikipedia.org/wiki/Achille_Varzi")}, and {wikiLink("Louis Chiron", "https://en.wikipedia.org/wiki/Louis_Chiron")}) and several talented rookies (Mario Tadini, {wikiLink("Guy Moll", "https://en.wikipedia.org/wiki/Guy_Moll")}, {wikiLink("Carlo Maria Pintacuda", "https://en.wikipedia.org/wiki/Carlo_Maria_Pintacuda")}, and {wikiLink("Antonio Brivio", "https://en.wikipedia.org/wiki/Antonio_Brivio")}) from his headquarters in Viale Trento e Trieste, {wikiLink("Modena, Italy", "https://en.wikipedia.org/wiki/Modena,_Italy")}, until 1938, at which point Alfa Romeo made him the manager of the factory racing division, {wikiLink("Alfa Corse", "https://en.wikipedia.org/wiki/Alfa_Corse")}.
        </p>

        <p>
        {wikiLink("Alfa Romeo", "https://en.wikipedia.org/wiki/Alfa_Romeo")} had bought the shares of the Scuderia Ferrari in 1937 and transferred, from 1 January 1938, the official racing activity to {wikiLink("Alfa Corse", "https://en.wikipedia.org/wiki/Alfa_Corse")} whose new buildings were being erected next to the Alfa factory at {wikiLink("Portello, Milan", "https://en.wikipedia.org/wiki/Portello,_Milan")}. The Viale Trento e Trieste facilities remained active to assist the racing customers.
        </p>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Piloti_Alfa_Romeo_2.JPG/250px-Piloti_Alfa_Romeo_2.JPG"
            alt="Enzo Ferrari (first from left), Tazio Nuvolari (fourth), and Achille Varzi (sixth)"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Enzo Ferrari", "https://en.wikipedia.org/wiki/Enzo_Ferrari")} (first from left), {wikiLink("Tazio Nuvolari", "https://en.wikipedia.org/wiki/Tazio_Nuvolari")} (fourth), and {wikiLink("Achille Varzi", "https://en.wikipedia.org/wiki/Achille_Varzi")} (sixth) with {wikiLink("Alfa Romeo", "https://en.wikipedia.org/wiki/Alfa_Romeo")} managing director Prospero Gianferrari (third) at Colle Maddalena
        </figcaption>
        </figure>

        <p>
        Enzo Ferrari disagreed with this policy change and was dismissed by Alfa in 1939. In October 1939, Enzo Ferrari left Alfa when the racing activity stopped and founded Auto Avio Costruzioni Ferrari, which also manufactured machine tools. The agreement with Alfa included the condition that he would not use the Ferrari name on cars for four years. In the winter of 1939–1940, Ferrari started work on a racecar of his own, the {wikiLink("Tipo 815", "https://en.wikipedia.org/wiki/Auto_Avio_Costruzioni_815")} (eight cylinders, 1.5 L displacement). The 815s, designed by {wikiLink("Alberto Massimino", "https://en.wikipedia.org/wiki/Alberto_Massimino")}, were thus the first true Ferrari cars. After {wikiLink("Alberto Ascari", "https://en.wikipedia.org/wiki/Alberto_Ascari")} and the Marchese Lotario Rangoni Machiavelli di Modena drove them in the 1940 {wikiLink("Mille Miglia", "https://en.wikipedia.org/wiki/Mille_Miglia")}, {wikiLink("World War II", "https://en.wikipedia.org/wiki/World_War_II")} put a temporary end to racing and the 815s saw no more competition. Ferrari continued to manufacture machine tools (specifically oleodynamic grinding machines). In 1943, he moved his headquarters to {wikiLink("Maranello", "https://en.wikipedia.org/wiki/Maranello")}, where it was bombed in November 1944 and February 1945.
        </p>

        <div className="clear-both"></div>

        {/* Post-War Rebuilding and Ferrari's Legacy */}
        <section id="ferrari-post-war" className="space-y-4 scroll-mt-24"></section>
        <h3 className="text-2xl font-bold text-red-600 mb-2">Post-War Rebuilding and Ferrari's Legacy</h3>

        <p>
        Rules for a Grand Prix World Championship had been discussed before the war; it took several years afterwards for the series to become active. Meanwhile, Ferrari rebuilt his works in {wikiLink("Maranello", "https://en.wikipedia.org/wiki/Maranello")} and constructed the 12-cylinder, 1.5 L {wikiLink("Tipo 125", "https://en.wikipedia.org/wiki/Ferrari_Tipo_125")}, which competed at several non-championship Grands Prix. The car made its debut at the {wikiLink("1948 Italian Grand Prix", "https://en.wikipedia.org/wiki/1948_Italian_Grand_Prix")} with {wikiLink("Raymond Sommer", "https://en.wikipedia.org/wiki/Raymond_Sommer")} and achieved its first win at the minor Circuito di Garda with {wikiLink("Giuseppe Farina", "https://en.wikipedia.org/wiki/Giuseppe_Farina")}. After the four-year condition expired, the road car company was called Ferrari {wikiLink("S.p.A.", "https://en.wikipedia.org/wiki/S.p.A.")}, while the name SEFAC (Società Esercizio Fabbriche Automobili e Corse) was used for the racing department.
        </p>

        <p>
        The team was based in {wikiLink("Modena", "https://en.wikipedia.org/wiki/Modena")} from its pre-war founding until 1943, when Enzo Ferrari moved the team to a new factory in {wikiLink("Maranello", "https://en.wikipedia.org/wiki/Maranello")} in 1943, and both Scuderia Ferrari and Ferrari's road car factory remain at Maranello to this day. The team owns and operates a test track on the same site, the {wikiLink("Fiorano Circuit", "https://en.wikipedia.org/wiki/Fiorano_Circuit")} built in 1972, which is used for testing road and race cars.
        </p>

        <p>
        The team is named after its founder {wikiLink("Enzo Ferrari", "https://en.wikipedia.org/wiki/Enzo_Ferrari")}. <i>Scuderia</i> is Italian for a stable reserved for racing horses, and is also commonly applied to Italian motor racing teams. The prancing horse was the symbol used on Italian {wikiLink("World War I", "https://en.wikipedia.org/wiki/World_War_I")} ace {wikiLink("Francesco Baracca", "https://en.wikipedia.org/wiki/Francesco_Baracca")}'s fighter plane. It became the logo of Ferrari after the fallen ace's parents, close acquaintances of Enzo Ferrari, suggested that Ferrari use the symbol as the logo of the <i>Scuderia</i>, telling him it would "bring him good luck".
        </p>

        <div className="clear-both"></div>

        {/* Ferrari's Grand Prix Racing History */}
        <section id="ferrari-grand-prix-history" className="space-y-4 scroll-mt-24"></section>
        <h3 className="text-2xl font-bold text-red-600 mb-2">Ferrari's Grand Prix Racing History</h3>

        <h4 className="text-lg font-semibold text-red-400 mb-1">1930s</h4>

        <p>
        The <b>Grand Prix racing history of Scuderia Ferrari</b> dates back to 1947. The team is the most successful team in the history of {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} racing, having contested every {wikiLink("Formula One World Championship", "https://en.wikipedia.org/wiki/Formula_One_World_Championship")} season since {wikiLink("1950", "https://en.wikipedia.org/wiki/1950_Formula_One_season")}, winning 15 {wikiLink("Drivers' Championships", "https://en.wikipedia.org/wiki/List_of_Formula_One_World_Drivers%27_Champions")} and 16 {wikiLink("Constructors' Championships", "https://en.wikipedia.org/wiki/List_of_Formula_One_World_Constructors%27_Champions")}.
        </p>

        <p>
        Enzo Ferrari decided to pursue racing in 1908, at the age of ten: to this end, he eventually began a career as a racing driver in 1919. During the 1920s he worked for {wikiLink("Alfa Romeo", "https://en.wikipedia.org/wiki/Alfa_Romeo")}, both as a driver in various local races and as an employee in its Milan sales depot. In 1929, though, he broke from this line of work to found and manage his own racing team, which he named {wikiLink("Scuderia Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")}. Conceived as an outfit for {wikiLink("gentleman drivers", "https://en.wikipedia.org/wiki/Gentleman_driver")} and other amateurs, the team was founded through a million-{wikiLink("lira", "https://en.wikipedia.org/wiki/Italian_lira")} loan from a local bank, with additional backing from the wealthy amateur racer Mario Tadini, Augusto and Alfredo Caniato — two brothers in the textile industry — and the tyre company {wikiLink("Pirelli", "https://en.wikipedia.org/wiki/Pirelli")}. It would be based out of {wikiLink("Modena", "https://en.wikipedia.org/wiki/Modena")}, Enzo's hometown.
        </p>

        <p>
        Enzo quickly set about negotiating with Giorgio Rimini, Alfa Romeo's commercial director, and managed to secure a partnership between their respective companies. The intended arrangement was simple: {wikiLink("Alfa Corse", "https://en.wikipedia.org/wiki/Alfa_Corse")} would outfit their factory team with its latest, most sophisticated cars, while Ferrari's <i lang="it">scuderia</i> (<span className="gloss-quot">'</span><span className="gloss-text">stable</span><span className="gloss-quot">'</span>) of amateurs would use lower-end cars and hand-me-downs from past seasons. Additionally, Ferrari would operate independently from Alfa Romeo, such that the automaker would be insulated from negative press whenever the team placed poorly. Enzo presented this as beneficial to everyone involved, as it allowed Alfa Romeo to stay active in racing with minimal effects on their other ventures. The team's first race was the 1930 {wikiLink("Mille Miglia", "https://en.wikipedia.org/wiki/Mille_Miglia")}, using cars supplied by Alfa Romeo, and the first use of the {wikiLink("Prancing Horse", "https://en.wikipedia.org/wiki/Prancing_Horse")} logo was at the 1932 {wikiLink("24 Hours of Spa-Francorchamps", "https://en.wikipedia.org/wiki/24_Hours_of_Spa-Francorchamps")}.
        </p>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/1935-06-15_Altapascio_Alfa_Bimotore_Nuvolari_Bazzi.jpg/250px-1935-06-15_Altapascio_Alfa_Bimotore_Nuvolari_Bazzi.jpg"
            alt="The Alfa Romeo Bimotore photographed during a land speed record attempt, alongside its engineer Luigi Bazzi and driver Tazio Nuvolari."
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            The Alfa Romeo <i lang="it">Bimotore</i> photographed during a {wikiLink("land speed record", "https://en.wikipedia.org/wiki/Land_speed_record")} attempt, alongside its engineer {wikiLink("Luigi Bazzi", "https://it.wikipedia.org/wiki/Luigi_Bazzi")} (right) and driver {wikiLink("Tazio Nuvolari", "https://en.wikipedia.org/wiki/Tazio_Nuvolari")} (left).
        </figcaption>
        </figure>

        <p>
        This initial arrangement did not last. After {wikiLink("Alfa Romeo", "https://en.wikipedia.org/wiki/Alfa_Romeo")} came under the control of the Italian state in 1933, their racing division was downsized, and {wikiLink("Scuderia Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")} functioned as the unofficial company team throughout the mid-1930s. Leading up to the {wikiLink("1934 Grand Prix season", "https://en.wikipedia.org/wiki/1934_Grand_Prix_season")}, Ferrari began conducting their own {wikiLink("research and development", "https://en.wikipedia.org/wiki/Research_and_development")} while Alfa Romeo continued to supply racing cars, a situation that led to vehicles being engineered within Ferrari themselves. These include a streamlined variant of the {wikiLink("Alfa Romeo P3", "https://en.wikipedia.org/wiki/Alfa_Romeo_P3")} optimised for {wikiLink("AVUS", "https://en.wikipedia.org/wiki/AVUS")}, and the <i lang="it">{wikiLink("Bimotore", "https://en.wikipedia.org/wiki/Alfa_Romeo_8C#16C_Bimotore")}</i>, also based on the Type B, which was driven by two engines at once: one in front of the driver and another behind, each driving the rear wheels through a special split differential.
        </p>

        <p>
        These "first Ferraris" tended to be ad hoc and relatively primitive, as Alfa Romeo was facing rough financial outcomes with negligible support from the Italian government. During its heyday, the Scuderia Ferrari of the 1930s employed several notable figures including {wikiLink("Vittorio Jano", "https://en.wikipedia.org/wiki/Vittorio_Jano")}, who served as the team's chief designer, and drivers such as {wikiLink("Antonio Ascari", "https://en.wikipedia.org/wiki/Antonio_Ascari")}, {wikiLink("Giuseppe Campari", "https://en.wikipedia.org/wiki/Giuseppe_Campari")}, and {wikiLink("Tazio Nuvolari", "https://en.wikipedia.org/wiki/Tazio_Nuvolari")}.
        </p>

        <div className="clear-both"></div>

        {/* 1940s: The First Ferrari Racing Car */}
        <section id="ferrari-1940s" className="space-y-4 scroll-mt-24"></section>

        <h4 className="text-lg font-semibold text-red-400 mb-1">1940s: The First Ferrari Racing Car</h4>

        <p>
        In May 1947, Ferrari constructed the 12-cylinder, 1.5 L {wikiLink("Tipo 125", "https://en.wikipedia.org/wiki/Ferrari_Tipo_125")}, the first racing car to bear the Ferrari name. A Formula One version of the {wikiLink("Tipo 125", "https://en.wikipedia.org/wiki/Ferrari_Tipo_125")}, the {wikiLink("Ferrari 125 F1", "https://en.wikipedia.org/wiki/Ferrari_125_F1")} was developed in 1948 and entered in several Grands Prix, when a World Championship had not yet been established.
        </p>

        <div className="clear-both"></div>

        {/* 1950s: Ferrari Enters Formula One World Championship */}
        <section id="ferrari-1950s" className="space-y-4 scroll-mt-24"></section>

        <h4 className="text-lg font-semibold text-red-400 mb-1">1950s: Ferrari Enters Formula One World Championship</h4>

        <p>
        In 1950, the {wikiLink("Formula One World Championship", "https://en.wikipedia.org/wiki/Formula_One_World_Championship")} was established, and {wikiLink("Scuderia Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")} entered in this first season. It is the only team to have competed in every season of the World Championship, from its inception to the current day.
        </p>

        <p>
        In fact, the Ferrari team missed the first race of the championship, the {wikiLink("1950 British Grand Prix", "https://en.wikipedia.org/wiki/1950_British_Grand_Prix")}, due to a dispute about the 'start money' paid to entrants, and the team debuted in the {wikiLink("1950 Monaco Grand Prix", "https://en.wikipedia.org/wiki/1950_Monaco_Grand_Prix")} with the {wikiLink("125 F1", "https://en.wikipedia.org/wiki/Ferrari_125_F1")}, sporting a supercharged version of the 125 V12, and three experienced and successful drivers, {wikiLink("Alberto Ascari", "https://en.wikipedia.org/wiki/Alberto_Ascari")}, {wikiLink("Raymond Sommer", "https://en.wikipedia.org/wiki/Raymond_Sommer")}, and {wikiLink("Gigi Villoresi", "https://en.wikipedia.org/wiki/Gigi_Villoresi")}. The company later switched to the large-displacement naturally aspirated formula for the {wikiLink("275, 340, and 375 F1", "https://en.wikipedia.org/wiki/Ferrari_375_F1")} cars. The {wikiLink("Alfa Romeo", "https://en.wikipedia.org/wiki/Alfa_Romeo")} team won all eleven events it entered in 1950 (six World Championship events and five non-championship races), but Ferrari broke their streak in 1951 when {wikiLink("José Froilán González", "https://en.wikipedia.org/wiki/Jos%C3%A9_Froil%C3%A1n_Gonz%C3%A1lez")} took first place at the {wikiLink("1951 British Grand Prix", "https://en.wikipedia.org/wiki/1951_British_Grand_Prix")}.
        </p>

        <p>
        After the {wikiLink("1951 Formula One season", "https://en.wikipedia.org/wiki/1951_Formula_One_season")} the Alfa team withdrew from F1, causing the authorities to adopt the {wikiLink("Formula Two", "https://en.wikipedia.org/wiki/Formula_Two")} regulations due to the lack of suitable F1 cars. Ferrari entered the 2.0 L 4-cyl {wikiLink("Ferrari Tipo 500", "https://en.wikipedia.org/wiki/Ferrari_Tipo_500")}, which went on to win almost every race in which it competed in the {wikiLink("1952 Formula One season", "https://en.wikipedia.org/wiki/1952_Formula_One_season")} with drivers Ascari, {wikiLink("Giuseppe Farina", "https://en.wikipedia.org/wiki/Giuseppe_Farina")}, and {wikiLink("Piero Taruffi", "https://en.wikipedia.org/wiki/Piero_Taruffi")}; Ascari took the World Championship after winning six consecutive races. In the {wikiLink("1953 Formula One season", "https://en.wikipedia.org/wiki/1953_Formula_One_season")}, Ascari won only five races but another world title; at the end of that season, {wikiLink("Juan Manuel Fangio", "https://en.wikipedia.org/wiki/Juan_Manuel_Fangio")} beat the Ferraris in a {wikiLink("Maserati", "https://en.wikipedia.org/wiki/Maserati")} for the first time.
        </p>

        <p>
        The {wikiLink("1954 Formula One season", "https://en.wikipedia.org/wiki/1954_Formula_One_season")} brought new rules for 2.5 L engines; Ferrari's new car, designated the {wikiLink("Ferrari Tipo 625", "https://en.wikipedia.org/wiki/Ferrari_Tipo_625")}, could barely compete against Fangio with the Maserati and then the {wikiLink("Mercedes-Benz W196", "https://en.wikipedia.org/wiki/Mercedes-Benz_W196")} which appeared in July. Ferrari had only two wins, González at the {wikiLink("1954 British Grand Prix", "https://en.wikipedia.org/wiki/1954_British_Grand_Prix")} and {wikiLink("Mike Hawthorn", "https://en.wikipedia.org/wiki/Mike_Hawthorn")} at the {wikiLink("1954 Spanish Grand Prix", "https://en.wikipedia.org/wiki/1954_Spanish_Grand_Prix")}. In the {wikiLink("1955 Formula One season", "https://en.wikipedia.org/wiki/1955_Formula_One_season")} Ferrari did no better, winning only the {wikiLink("1955 Monaco Grand Prix", "https://en.wikipedia.org/wiki/1955_Monaco_Grand_Prix")} with driver {wikiLink("Maurice Trintignant", "https://en.wikipedia.org/wiki/Maurice_Trintignant")}. Late in the tragic 1955 season, the Ferrari team purchased the {wikiLink("Lancia", "https://en.wikipedia.org/wiki/Lancia_in_Formula_One")} team's D50 chassis after they had retired following Ascari's death; Fangio, {wikiLink("Peter Collins", "https://en.wikipedia.org/wiki/Peter_Collins_(racing_driver)")}, and {wikiLink("Eugenio Castellotti", "https://en.wikipedia.org/wiki/Eugenio_Castellotti")} raced the D50s successfully in the {wikiLink("1956 Formula One season", "https://en.wikipedia.org/wiki/1956_Formula_One_season")}: Collins two races, Fangio won three races and the championship.
        </p>

        <p>
        In the {wikiLink("1957 Formula One season", "https://en.wikipedia.org/wiki/1957_Formula_One_season")} Fangio returned to Maserati. Ferrari, still using its ageing Lancias, failed to win a race. Drivers {wikiLink("Luigi Musso", "https://en.wikipedia.org/wiki/Luigi_Musso")} and the Marquis {wikiLink("Alfonso de Portago", "https://en.wikipedia.org/wiki/Alfonso_de_Portago")} joined Castellotti; Castellotti died while testing and Portago crashed into a crowd at the Mille Miglia, killing twelve and causing Ferrari to be charged with manslaughter.
        </p>

        <p>
        In the {wikiLink("1958 Formula One season", "https://en.wikipedia.org/wiki/1958_Formula_One_season")}, a {wikiLink("Constructors' Championship", "https://en.wikipedia.org/wiki/List_of_Formula_One_World_Constructors%27_Champions")} was introduced and won by {wikiLink("Vanwall", "https://en.wikipedia.org/wiki/Vanwall")}. {wikiLink("Carlo Chiti", "https://en.wikipedia.org/wiki/Carlo_Chiti")} designed an entirely new car for Ferrari: the {wikiLink("Ferrari 246 F1", "https://en.wikipedia.org/wiki/Ferrari_246_F1")}, with a V6 engine named after Enzo Ferrari's recently deceased son. The team retained drivers Collins, Hawthorn, and Musso, but Musso died at the {wikiLink("1958 French Grand Prix", "https://en.wikipedia.org/wiki/1958_French_Grand_Prix")} and Collins died at the {wikiLink("1958 German Grand Prix", "https://en.wikipedia.org/wiki/1958_German_Grand_Prix")}; Hawthorn won the World Championship and announced his retirement, and died months later in a road accident.
        </p>

        <p>
        Ferrari hired five new drivers, {wikiLink("Tony Brooks", "https://en.wikipedia.org/wiki/Tony_Brooks_(racing_driver)")}, {wikiLink("Jean Behra", "https://en.wikipedia.org/wiki/Jean_Behra")}, {wikiLink("Phil Hill", "https://en.wikipedia.org/wiki/Phil_Hill")}, {wikiLink("Dan Gurney", "https://en.wikipedia.org/wiki/Dan_Gurney")}, and occasionally {wikiLink("Cliff Allison", "https://en.wikipedia.org/wiki/Cliff_Allison")}, for the {wikiLink("1959 Formula One season", "https://en.wikipedia.org/wiki/1959_Formula_One_season")}. The team did not get along well; Behra was fired after punching team manager Romolo Tavoni. Brooks was competitive until the end of the season, but in the end, he narrowly lost the championship to {wikiLink("Jack Brabham", "https://en.wikipedia.org/wiki/Jack_Brabham")} with the rear-engined {wikiLink("Cooper Car Company", "https://en.wikipedia.org/wiki/Cooper_Car_Company")}.
        </p>

        <div className="clear-both"></div>

        {/* 1960s: Difficult Seasons and Triumphs */}
        <section id="ferrari-1960s" className="space-y-4 scroll-mt-24"></section>

        <h4 className="text-lg font-semibold text-red-400 mb-1">1960s: Difficult Seasons and Triumphs</h4>

        <p>
        The {wikiLink("1960 Formula One season", "https://en.wikipedia.org/wiki/1960_Formula_One_season")} proved little better than 1959. Ferrari kept drivers {wikiLink("Hill", "https://en.wikipedia.org/wiki/Phil_Hill")}, {wikiLink("Allison", "https://en.wikipedia.org/wiki/Cliff_Allison")} and {wikiLink("Wolfgang von Trips", "https://en.wikipedia.org/wiki/Wolfgang_von_Trips")} and added {wikiLink("Willy Mairesse", "https://en.wikipedia.org/wiki/Willy_Mairesse")} to drive the dated front-engined 246s and {wikiLink("Richie Ginther", "https://en.wikipedia.org/wiki/Richie_Ginther")}, who drove Ferrari's first rear-engined car. Allison was severely injured in testing and Hill gave the team its lone win by heading a hollow podium sweep at Monza after top British teams, with the championship already decided, boycotted Italian organizers' decision to contest the race on a high-speed circuit which combined Monza's high-banked oval with the normal road course.
        </p>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/HillPhil1962.jpg/250px-HillPhil1962.jpg"
            alt="Phil Hill driving for Ferrari at the 1962 German Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Phil Hill", "https://en.wikipedia.org/wiki/Phil_Hill")} driving for Ferrari at the {wikiLink("1962 German Grand Prix", "https://en.wikipedia.org/wiki/1962_German_Grand_Prix")}.
        </figcaption>
        </figure>

        <p>
        In the {wikiLink("1961 Formula One season", "https://en.wikipedia.org/wiki/1961_Formula_One_season")}, with new rules for 1500 cc, the team kept Hill, von Trips and Ginther, and débuted another Chiti-designed car, the {wikiLink("Ferrari 156", "https://en.wikipedia.org/wiki/Ferrari_156")} based on the Formula 2 car of 1960, which was dominant throughout the season. Ferrari drivers Hill and Von Trips competed for the championship. {wikiLink("Giancarlo Baghetti", "https://en.wikipedia.org/wiki/Giancarlo_Baghetti")} joined in midseason and became the first driver to win on his debut race (the {wikiLink("1961 French Grand Prix", "https://en.wikipedia.org/wiki/1961_French_Grand_Prix")}). However, at the end of the season, von Trips crashed at the {wikiLink("1961 Italian Grand Prix", "https://en.wikipedia.org/wiki/1961_Italian_Grand_Prix")} and was killed, together with over a dozen spectators. Hill won the championship.
        </p>

        <p>
        At the end of the 1961 season, in what is called "the walk-out", car designer Carlo Chiti and team manager Romolo Tavoni left to set up their own team, {wikiLink("ATS", "https://en.wikipedia.org/wiki/Automobili_Turismo_e_Sport")}. Ferrari promoted {wikiLink("Mauro Forghieri", "https://en.wikipedia.org/wiki/Mauro_Forghieri")} to racing director and Eugenio Dragoni to team manager.
        </p>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Bandini%2C_Lorenzo_-_Ferrari-12-Zylinder_1966.jpg/250px-Bandini%2C_Lorenzo_-_Ferrari-12-Zylinder_1966.jpg"
            alt="Lorenzo Bandini driving for Ferrari at the 1966 German Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Lorenzo Bandini", "https://en.wikipedia.org/wiki/Lorenzo_Bandini")} driving for Ferrari at the {wikiLink("1966 German Grand Prix", "https://en.wikipedia.org/wiki/1966_German_Grand_Prix")}.
        </figcaption>
        </figure>

        <p>
        For the {wikiLink("1962 Formula One season", "https://en.wikipedia.org/wiki/1962_Formula_One_season")}, Hill and Baghetti stayed on with rookies {wikiLink("Ricardo Rodríguez", "https://en.wikipedia.org/wiki/Ricardo_Rodr%C3%ADguez_(Formula_One)")} and {wikiLink("Lorenzo Bandini", "https://en.wikipedia.org/wiki/Lorenzo_Bandini")}. {wikiLink("Richie Ginther", "https://en.wikipedia.org/wiki/Richie_Ginther")} had left for BRM, leaving a big gap in the development of new models. The somewhat volatile {wikiLink("Willy Mairesse", "https://en.wikipedia.org/wiki/Willy_Mairesse")} took his place. The team used the 1961 cars for a second year while Forghieri worked on a new design; the team won no race. After a prolonged metalworkers' strike in Italy, Ferrari missed two races. This, combined with the betrayal of the 1961 walk-out and various troubles arising from Enzo's refusal to accompany the team to the races (having his wife stand in for him instead) led to Enzo withdrawing from the last two races of the year. The drivers were free to drive for anyone, as long as it did not contradict the existing sponsor contracts with {wikiLink("Dunlop Rubber", "https://en.wikipedia.org/wiki/Dunlop_Rubber")}, {wikiLink("Shell", "https://en.wikipedia.org/wiki/Royal_Dutch_Shell")}, {wikiLink("Marchal", "https://en.wikipedia.org/wiki/Marchal_(company)")}, and {wikiLink("Ferodo", "https://en.wikipedia.org/wiki/Ferodo")}.
        </p>

        <p>
        There had been talk of a Gilera-Ferrari in late 1962, with technical drawings released but no car ever seen, using a transversely mounted eight-cylinder engine based on two {wikiLink("Gilera", "https://en.wikipedia.org/wiki/Gilera")} four-cylinder motorcycle blocks combined. This came to naught, however, and Ferrari ran smaller lighter 156 cars for the {wikiLink("1963 Formula One season", "https://en.wikipedia.org/wiki/1963_Formula_One_season")}. This time the team depended on drivers Bandini, {wikiLink("John Surtees", "https://en.wikipedia.org/wiki/John_Surtees")}, Willy Mairesse and {wikiLink("Ludovico Scarfiotti", "https://en.wikipedia.org/wiki/Ludovico_Scarfiotti")}. Surtees won the {wikiLink("1963 German Grand Prix", "https://en.wikipedia.org/wiki/1963_German_Grand_Prix")}, at which Mairesse crashed heavily, rendering him unable to drive again.
        </p>

        <p>
        The new 158 model was at last finished in late 1963 and developed into raceworthiness for the {wikiLink("1964 Formula One season", "https://en.wikipedia.org/wiki/1964_Formula_One_season")}, featuring an eight-cylinder engine designed by Angelo Bellei. Surtees and Bandini were joined by young Mexican {wikiLink("Pedro Rodríguez", "https://en.wikipedia.org/wiki/Pedro_Rodr%C3%ADguez_(racing_driver)")}, brother of Ricardo (who had been killed at the end of 1962), to drive the new cars. Surtees won two races and Bandini one; the Ferrari was slower than {wikiLink("Jim Clark", "https://en.wikipedia.org/wiki/Jim_Clark")}'s {wikiLink("Lotus", "https://en.wikipedia.org/wiki/Team_Lotus")} but its vastly superior reliability gave Surtees the championship and Bandini fourth place. In the last two races in North America, the Ferraris were entered by private team {wikiLink("North American Racing Team", "https://en.wikipedia.org/wiki/North_American_Racing_Team")} and painted in the US colour scheme of blue and white, as Enzo was protesting against the Italian sporting authority.
        </p>

        <p>
        The {wikiLink("1965 Formula One season", "https://en.wikipedia.org/wiki/1965_Formula_One_season")} was the last year of the 1.5 L formula, so Ferrari opted to use the same V8 engine another year together with a new flat-12 which had debuted at the end of 1964; they won no races as Clark dominated in his now more reliable Lotus. Surtees and Bandini stayed on as drivers, with odd races for Rodríguez, Vaccarella and {wikiLink("Bob Bondurant", "https://en.wikipedia.org/wiki/Bob_Bondurant")}.
        </p>

        <p>
        For the {wikiLink("1966 Formula One season", "https://en.wikipedia.org/wiki/1966_Formula_One_season")} with new rules, the {wikiLink("Ferrari 312", "https://en.wikipedia.org/wiki/Ferrari_312")} of Surtees consisted of a 3.0 L version of the 3.3 L V12 which they had previously used in {wikiLink("Ferrari P", "https://en.wikipedia.org/wiki/Ferrari_P")} sports car racers, mounted in the back of a rather heavy F1 chassis. Bandini drove a {wikiLink("Tasman Series", "https://en.wikipedia.org/wiki/Tasman_Series")} 2.4 L V6 car early in the season. Surtees won one race, the {wikiLink("1966 Belgian Grand Prix", "https://en.wikipedia.org/wiki/1966_Belgian_Grand_Prix")}, but departed after a row with manager Eugenio Dragoni; he was replaced by {wikiLink("Mike Parkes", "https://en.wikipedia.org/wiki/Mike_Parkes")}. Scarfiotti also won a race, the {wikiLink("1966 Italian Grand Prix", "https://en.wikipedia.org/wiki/1966_Italian_Grand_Prix")} at {wikiLink("Monza", "https://en.wikipedia.org/wiki/Autodromo_Nazionale_Monza")}, with an improved 36-valve engine.
        </p>

        <p>
        In the {wikiLink("1967 Formula One season", "https://en.wikipedia.org/wiki/1967_Formula_One_season")}, the team fired Dragoni and replaced him with Franco Lini; {wikiLink("Chris Amon", "https://en.wikipedia.org/wiki/Chris_Amon")} partnered Bandini to drive a somewhat improved version of the 1966 car. At the {wikiLink("1967 Monaco Grand Prix", "https://en.wikipedia.org/wiki/1967_Monaco_Grand_Prix")} Bandini crashed and suffered heavy injuries when he was trapped under his burning car; several days later he succumbed to his injuries. Ferrari kept Mike Parkes and Scarfiotti, but Parkes suffered career-ending injuries weeks later at the {wikiLink("1967 Belgian Grand Prix", "https://en.wikipedia.org/wiki/1967_Belgian_Grand_Prix")} and Scarfiotti temporarily retired from racing after witnessing his crash.
        </p>

        <p>
        The {wikiLink("1968 Formula One season", "https://en.wikipedia.org/wiki/1968_Formula_One_season")} was better; {wikiLink("Jacky Ickx", "https://en.wikipedia.org/wiki/Jacky_Ickx")} drove with one win in France and several good positions, which gave him a chance at the World Championship until a practise crash in Canada, and Amon led several races but won none. At the end of the season, manager Franco Lini quit and Ickx went to the {wikiLink("Brabham", "https://en.wikipedia.org/wiki/Brabham")} team. During the summer of 1968, Ferrari worked out a deal to sell his road car business to {wikiLink("Fiat", "https://en.wikipedia.org/wiki/Fiat")} for $11 million; the transaction took place in early 1969, leaving 50% of the business still under the control of Ferrari himself.
        </p>

        <p>
        During the {wikiLink("1969 Formula One season", "https://en.wikipedia.org/wiki/1969_Formula_One_season")}, Enzo Ferrari set about wisely spending his new-found wealth to revive his struggling team; though Ferrari did compete in Formula One in 1969, it was something of a throwaway season while the team was restructured. Amon continued to drive an older model and {wikiLink("Pedro Rodríguez", "https://en.wikipedia.org/wiki/Pedro_Rodr%C3%ADguez_(racing_driver)")} replaced Ickx; at the end of the year, Amon left the team.
        </p>

        <div className="clear-both"></div>

        {/* 1970s: New Car and Engine Developments */}
        <section id="mclaren-1970s" className="space-y-4 scroll-mt-24"></section>
        <h4 className="text-lg font-semibold text-red-400 mb-1" id="1970s">1970s: New Car and Engine Developments</h4>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/LaudaNiki19760731Ferrari312T2.jpg/250px-LaudaNiki19760731Ferrari312T2.jpg"
            alt="Niki Lauda driving for Ferrari at the 1976 German Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Niki Lauda", "https://en.wikipedia.org/wiki/Niki_Lauda")} driving for Ferrari at the {wikiLink("1976 German Grand Prix", "https://en.wikipedia.org/wiki/1976_German_Grand_Prix")}.
        </figcaption>
        </figure>

        <p>
        In {wikiLink("1970", "https://en.wikipedia.org/wiki/1970_Formula_One_season")}, a new car and engine was produced for that season, the {wikiLink("Ferrari 312B", "https://en.wikipedia.org/wiki/Ferrari_312B")}. It had an all-new flat-12 engine, which was to be the engine used by the team for the next 10 seasons. Jacky Ickx rejoined the team and won the {wikiLink("1970 Austrian Grand Prix", "https://en.wikipedia.org/wiki/1970_Austrian_Grand_Prix")}, the {wikiLink("1970 Canadian Grand Prix", "https://en.wikipedia.org/wiki/1970_Canadian_Grand_Prix")} and the {wikiLink("1970 Mexican Grand Prix", "https://en.wikipedia.org/wiki/1970_Mexican_Grand_Prix")} to become second in the Drivers' Championship. {wikiLink("Clay Regazzoni", "https://en.wikipedia.org/wiki/Clay_Regazzoni")} made his debut that season and won the {wikiLink("1970 Italian Grand Prix", "https://en.wikipedia.org/wiki/1970_Italian_Grand_Prix")}, finishing third in the standings. Ferrari driver Pedro Rodríguez was killed in an Interserie sports car race at Norisring in Nuremberg, Germany, on 11 July 1971, at the wheel of a Ferrari 512M.
        </p>

        <p>
        After three poor years, including a disastrous {wikiLink("1973 season", "https://en.wikipedia.org/wiki/1973_Formula_One_season")} which saw Ferrari failing to attend two races – the {wikiLink("Dutch", "https://en.wikipedia.org/wiki/1973_Dutch_Grand_Prix")} and {wikiLink("German", "https://en.wikipedia.org/wiki/1973_German_Grand_Prix")} Grands Prix – for the first time since the team had started racing in Formula One, Ferrari signed {wikiLink("Niki Lauda", "https://en.wikipedia.org/wiki/Niki_Lauda")} in 1974, and made the momentous decision to pull out of sportscar racing to concentrate upon F1. The same year {wikiLink("Luca di Montezemolo", "https://en.wikipedia.org/wiki/Luca_di_Montezemolo")} was appointed Team Principal. Ferrari won the {wikiLink("1974 Spanish Grand Prix", "https://en.wikipedia.org/wiki/1974_Spanish_Grand_Prix")}, the {wikiLink("1974 Dutch Grand Prix", "https://en.wikipedia.org/wiki/1974_Dutch_Grand_Prix")} and the {wikiLink("1974 German Grand Prix", "https://en.wikipedia.org/wiki/1974_German_Grand_Prix")}, but Regazzoni lost the World Championship to {wikiLink("Emerson Fittipaldi", "https://en.wikipedia.org/wiki/Emerson_Fittipaldi")} at the final race of the season, the {wikiLink("1974 United States Grand Prix", "https://en.wikipedia.org/wiki/1974_United_States_Grand_Prix")}.
        </p>

        <p>
        The new {wikiLink("Ferrari 312T", "https://en.wikipedia.org/wiki/Ferrari_312T")}, developed fully with Lauda and Regazzoni and designed by {wikiLink("Mauro Forghieri", "https://en.wikipedia.org/wiki/Mauro_Forghieri")}, was introduced in 1975, and brought the team back to winning ways. Lauda won five races and took the drivers' crown, and Ferrari won the Constructors' Championship.
        </p>

        <p>
        In 1976, Lauda was comfortably leading the championship when he crashed at the {wikiLink("1976 German Grand Prix", "https://en.wikipedia.org/wiki/1976_German_Grand_Prix")}, seriously injuring himself. {wikiLink("Carlos Reutemann", "https://en.wikipedia.org/wiki/Carlos_Reutemann")} was hired as a replacement, and Ferrari fielded three cars in the {wikiLink("1976 Italian Grand Prix", "https://en.wikipedia.org/wiki/1976_Italian_Grand_Prix")} when Lauda returned unexpectedly soon (only six weeks after his accident). Lauda scored points twice in the races following his severe crash, but voluntarily withdrew from the season-ending Grand Prix at Fuji after two laps because of heavy rain, and {wikiLink("James Hunt", "https://en.wikipedia.org/wiki/James_Hunt")} won the drivers' title by a single point, but Ferrari won the constructors' title for the second year in a row.
        </p>

        <p>
        In 1977, Lauda, having come back from his near-fatal crash the previous year, took the title again for Ferrari (and the team won the Constructors' Championship), overcoming his more fancied, and favoured, teammate Reutemann. His relations with the team, especially Forghieri, continued to deteriorate, and he decided finally to leave for {wikiLink("Brabham", "https://en.wikipedia.org/wiki/Brabham")} at the end of the season.
        </p>

        <p>
        In {wikiLink("1978", "https://en.wikipedia.org/wiki/1978_Formula_One_season")}, Ferrari raced with Reutemann and {wikiLink("Gilles Villeneuve", "https://en.wikipedia.org/wiki/Gilles_Villeneuve")}, and while they managed to produce a solid car, winning five races, it was outclassed by the {wikiLink("ground effect", "https://en.wikipedia.org/wiki/Ground_effect_in_cars")} {wikiLink("Lotus 79", "https://en.wikipedia.org/wiki/Lotus_79")}.
        </p>

        <p>
        {wikiLink("Jody Scheckter", "https://en.wikipedia.org/wiki/Jody_Scheckter")} replacing the Lotus-bound Argentinian in 1979, took the title, supported by Gilles Villeneuve (who dutifully followed the South African home at Monza), and won the last World Drivers' Championship in a Ferrari until {wikiLink("Michael Schumacher", "https://en.wikipedia.org/wiki/Michael_Schumacher")} 21 years later. The car was a compromise ground effect design due to the configuration of the Ferrari wide-angle flat-12, which was overtaken in due course by the extremely successful {wikiLink("Williams FW07", "https://en.wikipedia.org/wiki/Williams_FW07")}, but not before racking up the necessary points to take both titles that year.
        </p>

        <div className="clear-both"></div>

        {/* 1980s: Jody Scheckter's Title Defence and Turbocharged Ferrari */}
        <section id="mclaren-1980s" className="space-y-4 scroll-mt-24"></section>

        <h4 className="text-lg font-semibold text-red-400 mb-1">1980s: Jody Scheckter's Title Defence and Turbocharged Ferrari</h4>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Ferrari_312T5_at_Mont_Tremblant_04.jpg/250px-Ferrari_312T5_at_Mont_Tremblant_04.jpg"
            alt="Villeneuve's 312 T5 pictured at Mont-Tremblant"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            Villeneuve's 312 T5 pictured at Mont-Tremblant
        </figcaption>
        </figure>

        <p>
        Ferrari and {wikiLink("Jody Scheckter", "https://en.wikipedia.org/wiki/Jody_Scheckter")}'s {wikiLink("1980", "https://en.wikipedia.org/wiki/1980_Formula_One_season")} title defence was unsuccessful, as the team's rivals made up ground at the expense of the reigning champions. The team scored a meagre total of eight points all season, and Scheckter elected to retire at its conclusion. For the {wikiLink("1981", "https://en.wikipedia.org/wiki/1981_Formula_One_World_Championship")} season, Ferrari signed {wikiLink("Didier Pironi", "https://en.wikipedia.org/wiki/Didier_Pironi")} to partner {wikiLink("Gilles Villeneuve", "https://en.wikipedia.org/wiki/Gilles_Villeneuve")} and also introduced its own {wikiLink("turbo-charged", "https://en.wikipedia.org/wiki/Turbocharger")} engine, which provided more power in a more compact design than the previous normally aspirated, twelve-cylinder arrangement. The season was a distinct improvement on the last, Villeneuve winning the {wikiLink("1981 Monaco Grand Prix", "https://en.wikipedia.org/wiki/1981_Monaco_Grand_Prix")} and {wikiLink("1981 Spanish Grand Prix", "https://en.wikipedia.org/wiki/1981_Spanish_Grand_Prix")} Grands Prix, but a potential championship challenge was stymied by the difficult handling and extremely poor aerodynamics of the car. However, the lessons learnt from the team's first racing experience with a turbo car in F1 prepared it well for {wikiLink("1982", "https://en.wikipedia.org/wiki/1982_Formula_One_World_Championship")}.
        </p>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Alboreto_1985-08-02.jpg/250px-Alboreto_1985-08-02.jpg"
            alt="Michele Alboreto was Alain Prost's main challenger for the Championship in 1985"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Michele Alboreto", "https://en.wikipedia.org/wiki/Michele_Alboreto")} was {wikiLink("Alain Prost", "https://en.wikipedia.org/wiki/Alain_Prost")}'s main challenger for the Championship in {wikiLink("1985", "https://en.wikipedia.org/wiki/1985_Formula_One_World_Championship")}.
        </figcaption>
        </figure>

        <p>
        Throughout the {wikiLink("1982", "https://en.wikipedia.org/wiki/1982_Formula_One_World_Championship")} season, the Ferrari was the best package, in terms of a balance between speed and reliability. The year was, however, marred by the loss of both of Ferrari's drivers. Team leader and favourite driver of {wikiLink("Enzo Ferrari", "https://en.wikipedia.org/wiki/Enzo_Ferrari")}, {wikiLink("Villeneuve", "https://en.wikipedia.org/wiki/Gilles_Villeneuve")}, died in a crash during qualifying at the {wikiLink("1982 Belgian Grand Prix", "https://en.wikipedia.org/wiki/1982_Belgian_Grand_Prix")}, while {wikiLink("Pironi", "https://en.wikipedia.org/wiki/Didier_Pironi")} suffered career-ending injuries before the {wikiLink("1982 German Grand Prix", "https://en.wikipedia.org/wiki/1982_German_Grand_Prix")} later in the season. Ferrari first called up {wikiLink("Patrick Tambay", "https://en.wikipedia.org/wiki/Patrick_Tambay")}, in place of the late Villeneuve, and later {wikiLink("Mario Andretti", "https://en.wikipedia.org/wiki/Mario_Andretti")} in an effort to protect Pironi's lead in the championship, but to no avail. Ferrari did, however, win the Constructors' Championship. The same year, the Formula One works moved partially out of the original Maranello factory into its own autonomous facility, still in Maranello but directly next to the {wikiLink("Fiorano test circuit", "https://en.wikipedia.org/wiki/Fiorano_Circuit")}.
        </p>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Gerhard_Berger_1988_Canada.jpg/250px-Gerhard_Berger_1988_Canada.jpg"
            alt="Gerhard Berger driving for Ferrari at the 1988 Canadian Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Gerhard Berger", "https://en.wikipedia.org/wiki/Gerhard_Berger")} driving for Ferrari at the {wikiLink("1988 Canadian Grand Prix", "https://en.wikipedia.org/wiki/1988_Canadian_Grand_Prix")}.
        </figcaption>
        </figure>

        <p>
        Four wins by {wikiLink("René Arnoux", "https://en.wikipedia.org/wiki/Ren%C3%A9_Arnoux")} and Patrick Tambay won the team another constructors' title in {wikiLink("1983", "https://en.wikipedia.org/wiki/1983_Formula_One_World_Championship")}, but neither driver was consistent enough to challenge for the drivers' title. Patrick Tambay took an especially emotional victory at San Marino in front of the Tifosi, but left to join the {wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_in_Formula_One")} team at the end of the season. {wikiLink("Michele Alboreto", "https://en.wikipedia.org/wiki/Michele_Alboreto")} was hired for {wikiLink("1984", "https://en.wikipedia.org/wiki/1984_Formula_One_World_Championship")} following his impressive performances during the previous year driving a Cosworth-powered Tyrrell. He won the {wikiLink("1984 Belgian Grand Prix", "https://en.wikipedia.org/wiki/1984_Belgian_Grand_Prix")}, but the team's performance was not competitive enough to challenge the {wikiLink("TAG", "https://en.wikipedia.org/wiki/Techniques_d%27Avant_Garde")}-{wikiLink("Porsche", "https://en.wikipedia.org/wiki/Porsche_in_Formula_One")}-powered {wikiLink("McLarens", "https://en.wikipedia.org/wiki/McLaren")} of {wikiLink("Niki Lauda", "https://en.wikipedia.org/wiki/Niki_Lauda")} and {wikiLink("Alain Prost", "https://en.wikipedia.org/wiki/Alain_Prost")}. In the {wikiLink("1985", "https://en.wikipedia.org/wiki/1985_Formula_One_season")} following year, however, Alboreto was Prost's closest challenger for the championship, leading it at one stage before the team's competitiveness slumped in the final races. Arnoux, meanwhile, fell out with the team and was replaced by {wikiLink("Stefan Johansson", "https://en.wikipedia.org/wiki/Stefan_Johansson")} after the first race of the season. {wikiLink("1986", "https://en.wikipedia.org/wiki/1986_Formula_One_World_Championship")} continued the disappointing trend of the previous season as neither Alboreto nor Johansson could win a race, and never looked like doing so. For {wikiLink("1987", "https://en.wikipedia.org/wiki/1987_Formula_One_World_Championship")}, Johansson moved to McLaren and was replaced by {wikiLink("Gerhard Berger", "https://en.wikipedia.org/wiki/Gerhard_Berger")}, who got the better of Alboreto as the season progressed and won the final two races of the championship as the car's form improved towards the end of the season. The team remained competitive into {wikiLink("1988", "https://en.wikipedia.org/wiki/1988_Formula_One_World_Championship")}, finishing second in the Constructors' Championship, but a long way behind McLaren, who now used the works {wikiLink("Honda", "https://en.wikipedia.org/wiki/Honda_in_Formula_One")} engines which had won the previous two Constructors' Championships.
        </p>

        <p>
        The {wikiLink("1988", "https://en.wikipedia.org/wiki/1988_Formula_One_World_Championship")} season also witnessed the end of {wikiLink("Enzo Ferrari", "https://en.wikipedia.org/wiki/Enzo_Ferrari")}'s ownership of the team. On 14 August 1988, Ferrari died at the age of 90. {wikiLink("Fiat", "https://en.wikipedia.org/wiki/Fiat%22")}'s share of the company was raised to 90% with Enzo's only remaining son, {wikiLink("Piero Ferrari", "https://en.wikipedia.org/wiki/Piero_Ferrari")}, inheriting the remaining share from his father. Just under a month after Enzo's death, {wikiLink("Gerhard Berger", "https://en.wikipedia.org/wiki/Gerhard_Berger")} and {wikiLink("Michele Alboreto", "https://en.wikipedia.org/wiki/Michele_Alboreto")} completed a historic 1–2 at the {wikiLink("1988 Italian Grand Prix", "https://en.wikipedia.org/wiki/1988_Italian_Grand_Prix")}, the only time a team other than McLaren-Honda won a Grand Prix in the {wikiLink("1988 Formula One season", "https://en.wikipedia.org/wiki/1988_Formula_One_season")}. Berger dedicated the win to the late Enzo Ferrari.
        </p>

        <p>
        {wikiLink("1989", "https://en.wikipedia.org/wiki/1989_Formula_One_World_Championship")} saw the end of turbo-charging in Formula One. From this date, the formula was for 3.5-litre normally aspirated engines of no greater than 12 cylinders, which was a direct consequence of lobbying by Ferrari for the previous few years. The team went so far as to construct an Indycar, the {wikiLink("Ferrari 637", "https://en.wikipedia.org/wiki/Ferrari_637")}, as a threat to the {wikiLink("Fédération Internationale de l'Automobile", "https://en.wikipedia.org/wiki/F%C3%A9d%C3%A9ration_Internationale_de_l%27Automobile")} (FIA) that if they did not get what they wanted, namely the allowance of V12 engines under the revised formula, they could take part in another series. Due to the expected extreme high revs and consequent narrow power band expected of the new engines, technical director {wikiLink("John Barnard", "https://en.wikipedia.org/wiki/John_Barnard")} insisted upon the development of a revolutionary new gear-shifting arrangement – the paddle-operated, semi-automatic gearbox. In pre-season testing, the experimental system proved extremely troublesome, with newly arrived driver {wikiLink("Nigel Mansell", "https://en.wikipedia.org/wiki/Nigel_Mansell")} being unable to compete more than a handful of laps, but nonetheless they managed a debut win at the opening round in {wikiLink("1989 Brazilian Grand Prix", "https://en.wikipedia.org/wiki/1989_Brazilian_Grand_Prix")}. Horrendous reliability led to Berger being unable to score a point until a run of podiums at Monza, Estoril, and Jerez including a win at Estoril. Mansell scored a memorable win at Budapest where he overtook world champion {wikiLink("Ayrton Senna", "https://en.wikipedia.org/wiki/Ayrton_Senna")} for the win after qualifying far down the field in twelfth. He then dedicated the race to the memory of Enzo Ferrari as the win came a year after the latter's death.
        </p>

        <div className="clear-both"></div>

        {/* 1990s: Ferrari's title challenges */}
        <section id="ferrari-1990s" className="space-y-4 scroll-mt-24"></section>

        <h4 className="text-lg font-semibold text-red-400 mb-1">1990s: Ferrari's title challenges</h4>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Prost_monaco91.jpg/250px-Prost_monaco91.jpg"
            alt="After a title challenge in 1990, 1991 was bitterly disappointing for Ferrari and Alain Prost"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            After a title challenge in {wikiLink("1990", "https://en.wikipedia.org/wiki/1990_Formula_One_World_Championship")}, {wikiLink("1991", "https://en.wikipedia.org/wiki/1991_Formula_One_World_Championship")} was bitterly disappointing for Ferrari and {wikiLink("Alain Prost", "https://en.wikipedia.org/wiki/Alain_Prost")}.
        </figcaption>
        </figure>

        <p>
        Then triple world champion {wikiLink("Alain Prost", "https://en.wikipedia.org/wiki/Alain_Prost")} left McLaren to partner Mansell at Ferrari for the {wikiLink("1990 Formula One season", "https://en.wikipedia.org/wiki/1990_Formula_One_season")}. As reigning world champion, Prost assumed the role of lead driver, much to teammate Mansell's dismay. In his autobiography, Mansell claimed that Ferrari had switched his car with Prost's at the {wikiLink("1990 British Grand Prix", "https://en.wikipedia.org/wiki/1990_British_Grand_Prix")} without his foreknowledge. Mansell departed Ferrari at the end of the 1990 season. Prost won five races and entered the penultimate round of the season, the controversial {wikiLink("1990 Japanese Grand Prix", "https://en.wikipedia.org/wiki/1990_Japanese_Grand_Prix")}, with a nine-point deficit to McLaren driver and former teammate {wikiLink("Ayrton Senna", "https://en.wikipedia.org/wiki/Ayrton_Senna")}. A controversial first-lap collision between Senna and Prost allowed Senna to secure the 1990 FIA Formula One World Drivers' Championship, with Prost ranking second.
        </p>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Jean_Alesi_Ferrari_1995.jpg/250px-Jean_Alesi_Ferrari_1995.jpg"
            alt="Jean Alesi driving for Ferrari at the 1995 Canadian Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Jean Alesi", "https://en.wikipedia.org/wiki/Jean_Alesi")} driving for Ferrari at the {wikiLink("1995 Canadian Grand Prix", "https://en.wikipedia.org/wiki/1995_Canadian_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        Mansell was replaced by Frenchman {wikiLink("Jean Alesi", "https://en.wikipedia.org/wiki/Jean_Alesi")}, previously driving for {wikiLink("Tyrrell", "https://en.wikipedia.org/wiki/Tyrrell_Racing")}, for the {wikiLink("1991 Formula One season", "https://en.wikipedia.org/wiki/1991_Formula_One_season")}. However, Ferrari had entered a downturn in 1991, partially as their famous V12 engine was no longer competitive against the smaller, lighter and more fuel-efficient V10s of their competitors. Prost won no races, only getting onto the podium five times. He criticised the team, described his car as harder to drive than "a truck", and was fired prior to the end of the season, right before the {wikiLink("1991 Australian Grand Prix", "https://en.wikipedia.org/wiki/1991_Australian_Grand_Prix")}. Prost was replaced by Italian {wikiLink("Gianni Morbidelli", "https://en.wikipedia.org/wiki/Gianni_Morbidelli")}. The team won no races between 1991 and 1993.
        </p>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Michael_Schumacher_1997.jpg/250px-Michael_Schumacher_1997.jpg"
            alt="Michael Schumacher at the 1997 German Grand Prix during his second year with Ferrari"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Michael Schumacher", "https://en.wikipedia.org/wiki/Michael_Schumacher")} at the {wikiLink("1997 German Grand Prix", "https://en.wikipedia.org/wiki/1997_German_Grand_Prix")} during his second year with Ferrari
        </figcaption>
        </figure>

        <p>
        {wikiLink("Gerhard Berger", "https://en.wikipedia.org/wiki/Gerhard_Berger")} returned to Ferrari to partner Alesi in 1993, and {wikiLink("Jean Todt", "https://en.wikipedia.org/wiki/Jean_Todt")} was hired as team principal. With the {wikiLink("Ferrari 412T", "https://en.wikipedia.org/wiki/Ferrari_412_T1")}, Berger and Alesi achieved two podiums and four pole positions. However the next seasons' poor reliability and fuel consumption limited the number of wins to just one each for Berger (1994 {wikiLink("German Grand Prix", "https://en.wikipedia.org/wiki/1994_German_Grand_Prix")}) and Alesi (1995 {wikiLink("Canadian Grand Prix", "https://en.wikipedia.org/wiki/1995_Canadian_Grand_Prix")}), despite Alesi being in a good position to win at Monza and the Nürburgring in 1995. Nevertheless the car was a solid and competitive upgrade, and with Berger's victory, achieved after three seasons without a race win, started a record of at least one GP victory in the following twenty consecutive seasons.
        </p>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Eddie_Irvine_1999_Canada.jpg/250px-Eddie_Irvine_1999_Canada.jpg"
            alt="Schumacher's championship aspirations were ended by a leg-breaking accident in 1999. Eddie Irvine stepped up to lead the team and only lost the drivers' title to Mika Häkkinen by two points, while Ferrari won its first Constructors' Championship since 1983."
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Eddie Irvine", "https://en.wikipedia.org/wiki/Eddie_Irvine")} (pictured) stepped up to lead the team in {wikiLink("1999", "https://en.wikipedia.org/wiki/1999_Formula_One_World_Championship")}, losing the drivers' title to {wikiLink("Mika Häkkinen", "https://en.wikipedia.org/wiki/Mika_H%C3%A4kkinen")} by two points, while Ferrari won its first Constructors' Championship since {wikiLink("1983", "https://en.wikipedia.org/wiki/1983_Formula_One_World_Championship")}.
        </figcaption>
        </figure>

        <p>
        Ferrari completely changed their driver line-up for the {wikiLink("1996 Formula One season", "https://en.wikipedia.org/wiki/1996_Formula_One_season")}, replacing Berger and Alesi with former {wikiLink("Jordan", "https://en.wikipedia.org/wiki/Jordan_Grand_Prix")} driver {wikiLink("Eddie Irvine", "https://en.wikipedia.org/wiki/Eddie_Irvine")}, and two-time defending world champion (former {wikiLink("Benetton", "https://en.wikipedia.org/wiki/Benetton_Formula")} driver) {wikiLink("Michael Schumacher", "https://en.wikipedia.org/wiki/Michael_Schumacher")}, for a salary of around $30 million a year. Many members of the {wikiLink("Benetton", "https://en.wikipedia.org/wiki/Benetton_Formula")} team's technical staff followed, namely {wikiLink("Ross Brawn", "https://en.wikipedia.org/wiki/Ross_Brawn")} (technical director), {wikiLink("Rory Byrne", "https://en.wikipedia.org/wiki/Rory_Byrne")} (chief designer), {wikiLink("Nikolas Tombazis", "https://en.wikipedia.org/wiki/Nikolas_Tombazis")} (head of aerodynamics), and {wikiLink("Tad Czapski", "https://en.wikipedia.org/wiki/Tad_Czapski")} (head of electronics). New engine rules reducing engine capacity from 3500cc to 3000cc required Ferrari to switch to the (3.0L) {wikiLink("V10 engine", "https://en.wikipedia.org/wiki/V10_engine")} for 1996.
        </p>

        <p>
        Despite poor reliability, Michael Schumacher managed to score three wins during the 1996 season with the {wikiLink("Ferrari F310", "https://en.wikipedia.org/wiki/Ferrari_F310")}. In very wet conditions at the {wikiLink("Spanish Grand Prix", "https://en.wikipedia.org/wiki/1996_Spanish_Grand_Prix")}, despite starting from the second row and having a poor start, Schumacher climbed back up the order to win the race by 45 seconds over now Benetton driver {wikiLink("Jean Alesi", "https://en.wikipedia.org/wiki/Jean_Alesi")}. This was the first Formula One victory for a Ferrari V10 engine. Both Ferrari drivers retired from the three subsequent rounds on the calendar, the {wikiLink("Canadian Grand Prix", "https://en.wikipedia.org/wiki/1996_Canadian_Grand_Prix")}, the {wikiLink("French Grand Prix", "https://en.wikipedia.org/wiki/1996_French_Grand_Prix")}, where Schumacher had qualified in pole position but failed to start after an engine failure on the formation lap, and the {wikiLink("British Grand Prix", "https://en.wikipedia.org/wiki/1996_British_Grand_Prix")} respectively. At the {wikiLink("Belgian Grand Prix", "https://en.wikipedia.org/wiki/1996_Belgian_Grand_Prix")}, superior pit strategy enabled Schumacher to emerge ahead of Williams driver {wikiLink("Jacques Villeneuve", "https://en.wikipedia.org/wiki/Jacques_Villeneuve")} to score his second win of the season. Schumacher followed up his Belgian win by winning the {wikiLink("Italian Grand Prix", "https://en.wikipedia.org/wiki/1996_Italian_Grand_Prix")} at {wikiLink("Monza", "https://en.wikipedia.org/wiki/Autodromo_Nazionale_Monza")}, Ferrari's first win on home soil since 1988. Ferrari finished second in the Constructors' Championship, with Schumacher finishing third in the drivers' standings and Irvine tenth.
        </p>

        <p>
        For the {wikiLink("1997 Formula One season", "https://en.wikipedia.org/wiki/1997_Formula_One_season")}, the increased reliability of the {wikiLink("Ferrari F310B", "https://en.wikipedia.org/wiki/Ferrari_F310B")} enabled Ferrari to challenge for its first Drivers' Championship since {wikiLink("Jody Scheckter", "https://en.wikipedia.org/wiki/Jody_Scheckter")} had won Ferrari's last drivers' title 18 years earlier, in 1979. Michael Schumacher finished on the podium eight times during the course of the season, including five wins, and went into the final round leading Williams driver {wikiLink("Jacques Villeneuve", "https://en.wikipedia.org/wiki/Jacques_Villeneuve")} by one point. On Lap 48 of the final round of the 1997 season, the {wikiLink("European Grand Prix", "https://en.wikipedia.org/wiki/1997_European_Grand_Prix")} at {wikiLink("Jerez", "https://en.wikipedia.org/wiki/Circuito_Permanente_de_Jerez")}, Michael Schumacher and Jacques Villeneuve collided as the latter attempted to overtake for the race lead down the inside of the <i>Dry Sac</i> corner. Schumacher retired from the race, and Villeneuve clinched the 1997 Drivers' Championship with a third-place finish. The stewards of the event had initially deemed the collision a racing incident. However, Schumacher was then summoned and disqualified from the 1997 World Drivers' Championship for unsportsmanlike conduct in an extraordinary meeting of the {wikiLink("FIA World Motor Sport Council", "https://en.wikipedia.org/wiki/FIA_World_Motor_Sport_Council")} on 11 November 1997. Ferrari's Constructors' Championship points, however, remained intact, and the team finished second overall. Eddie Irvine, having scored five podiums throughout the season, was classified seventh in the drivers' standings.
        </p>

        <p>
        Following the dramatic {wikiLink("1997", "https://en.wikipedia.org/wiki/1997_Formula_One_season")} season, Ferrari came out with an all-new car to fit the new regulations for {wikiLink("1998", "https://en.wikipedia.org/wiki/1998_Formula_One_season")}, the {wikiLink("Ferrari F300", "https://en.wikipedia.org/wiki/Ferrari_F300")}. Although it was a competitive package, the McLaren–Mercedes {wikiLink("MP4/13", "https://en.wikipedia.org/wiki/McLaren_MP4/13")} was most often stronger. Schumacher won six races that season including three in a row at Canada, France, and Great Britain. The {wikiLink("Hungarian Grand Prix", "https://en.wikipedia.org/wiki/1998_Hungarian_Grand_Prix")} was won after a tactical master-stroke by {wikiLink("Ross Brawn", "https://en.wikipedia.org/wiki/Ross_Brawn")} decided to make the car run a 3-stop strategy as opposed to McLaren's 2. Schumacher then went on to lead Irvine home to Ferrari's first 1–2 at Monza since the memorable 1988 race after Enzo Ferrari's death. Schumacher lost the title to McLaren's {wikiLink("Mika Häkkinen", "https://en.wikipedia.org/wiki/Mika_H%C3%A4kkinen")} at Suzuka after he stalled on the front row then suffered a mid-race puncture. Irvine was fourth in the championship with Ferrari second in the constructors' title.
        </p>

        <p>
        The {wikiLink("1999 Formula One season", "https://en.wikipedia.org/wiki/1999_Formula_One_season")} started well for Ferrari, the team winning three of the first four races of the season. {wikiLink("Eddie Irvine", "https://en.wikipedia.org/wiki/Eddie_Irvine")} scored his maiden career win at the season-opening {wikiLink("Australian Grand Prix", "https://en.wikipedia.org/wiki/1999_Australian_Grand_Prix")}. Michael Schumacher scored back-to-back victories at the {wikiLink("San Marino Grand Prix", "https://en.wikipedia.org/wiki/1999_San_Marino_Grand_Prix")} and the {wikiLink("Monaco Grand Prix", "https://en.wikipedia.org/wiki/1999_Monaco_Grand_Prix")}. The team's fortunes began to change in {wikiLink("Canada", "https://en.wikipedia.org/wiki/1999_Canadian_Grand_Prix")}, however, with Michael Schumacher retiring from the lead of the race after sliding into the wall at the exit of the final chicane of the {wikiLink("Circuit Gilles Villeneuve", "https://en.wikipedia.org/wiki/Circuit_Gilles_Villeneuve")}, since known as the "<i>Wall of Champions</i>". On Lap 1 of the {wikiLink("British Grand Prix", "https://en.wikipedia.org/wiki/1999_British_Grand_Prix")} at {wikiLink("Silverstone Circuit", "https://en.wikipedia.org/wiki/Silverstone_Circuit")}, Schumacher crashed heavily at <i>Stowe Corner</i> after his rear brake failed, sending him off the circuit after he locked up at approximately 130 mph. He broke his lower right leg as a result, forcing him to miss the next six races and ending his bid for the 1999 Drivers' Championship. Ferrari replaced him with {wikiLink("Mika Salo", "https://en.wikipedia.org/wiki/Mika_Salo")}. Irvine became Ferrari's main contender for the drivers' title. He won the next two rounds in {wikiLink("Austria", "https://en.wikipedia.org/wiki/1999_Austrian_Grand_Prix")} and in {wikiLink("Germany", "https://en.wikipedia.org/wiki/1999_German_Grand_Prix")}. Schumacher returned for the final two races of the season, handing Irvine the race lead and eventual win at the inaugural {wikiLink("Malaysian Grand Prix", "https://en.wikipedia.org/wiki/1999_Malaysian_Grand_Prix")}. Both Ferrari drivers had been disqualified after the race as the side deflector panel on both cars was deemed to have been one centimetre too long, making {wikiLink("Mika Häkkinen", "https://en.wikipedia.org/wiki/Mika_H%C3%A4kkinen")} the provisional Drivers' Champion. However, both Ferrari cars were reinstated on appeal, and Irvine led the drivers' standings by four points over Häkkinen going into the final round. Irvine ultimately fell short of the 1999 Drivers' Championship at the season-ending {wikiLink("Japanese Grand Prix", "https://en.wikipedia.org/wiki/1999_Japanese_Grand_Prix")}, where he finished third, losing to Häkkinen by two points in the final standings. Schumacher's second place in the race helped Ferrari secure the 1999 Constructors' Championship, their first since 1983.
        </p>

        <div className="clear-both"></div>

        {/* 2000s: Schumacher’s Championship Success */}
        <section id="ferrari-2000-2001" className="space-y-4 scroll-mt-24"></section>

        <h4 className="text-lg font-semibold text-red-400 mb-1">2000s: Schumacher’s Championship Success</h4>

        <p>
        Ferrari replaced Irvine with {wikiLink("Rubens Barrichello", "https://en.wikipedia.org/wiki/Rubens_Barrichello")} ahead of the {wikiLink("2000 Formula One season", "https://en.wikipedia.org/wiki/2000_Formula_One_season")}. The season started well, with Schumacher and Barrichello scoring a 1–2 finish in {wikiLink("Australia", "https://en.wikipedia.org/wiki/2000_Australian_Grand_Prix")} after both McLaren drivers retired from the race. Schumacher followed his Australian win with consecutive victories in {wikiLink("Brazil", "https://en.wikipedia.org/wiki/2000_Brazilian_Grand_Prix")} and in {wikiLink("San Marino", "https://en.wikipedia.org/wiki/2000_San_Marino_Grand_Prix")}, to lead the drivers' standings by 21 points after only three races. Schumacher's early points lead was minimised, however, after a string of consecutive retirements in {wikiLink("France", "https://en.wikipedia.org/wiki/2000_French_Grand_Prix")}, {wikiLink("Austria", "https://en.wikipedia.org/wiki/2000_Austrian_Grand_Prix")}, and {wikiLink("Germany", "https://en.wikipedia.org/wiki/2000_German_Grand_Prix")} left him with only a two-point lead over reigning world champion {wikiLink("Mika Häkkinen", "https://en.wikipedia.org/wiki/Mika_H%C3%A4kkinen")}. At the {wikiLink("German Grand Prix", "https://en.wikipedia.org/wiki/2000_German_Grand_Prix")} at {wikiLink("Hockenheim", "https://en.wikipedia.org/wiki/Hockenheimring")}, Barrichello scored his maiden career win after starting 18th on the grid. At the {wikiLink("Italian Grand Prix", "https://en.wikipedia.org/wiki/2000_Italian_Grand_Prix")}, Schumacher scored his 41st career victory to match the victory tally of {wikiLink("Ayrton Senna", "https://en.wikipedia.org/wiki/Ayrton_Senna")}. During the post-race press conference, he burst into tears when asked if the record "meant a lot" to him. Schumacher won the 2000 Drivers' Championship in the {wikiLink("F1-2000", "https://en.wikipedia.org/wiki/Ferrari_F1-2000")} at the {wikiLink("Japanese Grand Prix", "https://en.wikipedia.org/wiki/2000_Japanese_Grand_Prix")}, becoming Ferrari's first Drivers' Champion since {wikiLink("Jody Scheckter", "https://en.wikipedia.org/wiki/Jody_Scheckter")} in 1979. Barrichello was classified fourth in the final standings, and Ferrari took its second consecutive Constructors' Championship.
        </p>

        <p>
        {wikiLink("Michael Schumacher", "https://en.wikipedia.org/wiki/Michael_Schumacher")} and Ferrari continued their good form into the {wikiLink("2001 Formula One season", "https://en.wikipedia.org/wiki/2001_Formula_One_season")}, winning the first two races in {wikiLink("Australia", "https://en.wikipedia.org/wiki/2001_Australian_Grand_Prix")} and in {wikiLink("Malaysia", "https://en.wikipedia.org/wiki/2001_Malaysian_Grand_Prix")}. Schumacher took his third victory of the season when, on the last lap of the {wikiLink("Spanish Grand Prix", "https://en.wikipedia.org/wiki/2001_Spanish_Grand_Prix")}, McLaren driver {wikiLink("Mika Häkkinen", "https://en.wikipedia.org/wiki/Mika_H%C3%A4kkinen")} retired from the race lead with mechanical failure. Wins in {wikiLink("Monaco", "https://en.wikipedia.org/wiki/2001_Monaco_Grand_Prix")}, {wikiLink("Europe", "https://en.wikipedia.org/wiki/2001_European_Grand_Prix")}, and {wikiLink("France", "https://en.wikipedia.org/wiki/2001_French_Grand_Prix")} helped Schumacher secure his lead in the drivers' standings, and he secured his fourth Drivers' Championship after winning the {wikiLink("Hungarian Grand Prix", "https://en.wikipedia.org/wiki/2001_Hungarian_Grand_Prix")}, with four races remaining. At the {wikiLink("Belgian Grand Prix", "https://en.wikipedia.org/wiki/2001_Belgian_Grand_Prix")}, Michael Schumacher scored his 52nd career victory to surpass {wikiLink("Alain Prost", "https://en.wikipedia.org/wiki/Alain_Prost")} 's record of most Grand Prix victories. The {wikiLink("Italian Grand Prix", "https://en.wikipedia.org/wiki/2001_Italian_Grand_Prix")} was the first Formula One race held after the {wikiLink("September 11 attacks", "https://en.wikipedia.org/wiki/September_11_attacks")} in the United States. Ferrari removed all advertising and painted the nosecones of both of its cars black as a mark of respect to the victims. Ferrari won their third consecutive Constructors' Championship, as Barrichello was classified third in the drivers' standings, despite scoring no wins.
        </p>

        <p>
        In {wikiLink("2002", "https://en.wikipedia.org/wiki/2002_Formula_One_season")}, Ferrari won 15 out of 17 races ({wikiLink("Schumacher", "https://en.wikipedia.org/wiki/Michael_Schumacher")} 11, {wikiLink("Barrichello", "https://en.wikipedia.org/wiki/Rubens_Barrichello")} 4) to match McLaren's record number of wins in a season, set in {wikiLink("1988", "https://en.wikipedia.org/wiki/1988_Formula_One_World_Championship")}. Their successful run, however, was tainted by a team orders controversy at the {wikiLink("Austrian Grand Prix", "https://en.wikipedia.org/wiki/2002_Austrian_Grand_Prix")}. In a replay of 2001, Barrichello was asked to give way to Schumacher on the final lap of the Grand Prix, except this time for the win. An embarrassed Schumacher then pushed Barrichello to the top step of the podium, and Ferrari were subsequently fined $1 million by the FIA for interfering with podium procedures. This debacle eventually led to the banning of team orders ahead of the {wikiLink("2003", "https://en.wikipedia.org/wiki/2003_Formula_One_World_Championship")} season. Schumacher matched {wikiLink("Juan Manuel Fangio", "https://en.wikipedia.org/wiki/Juan_Manuel_Fangio")}'s record of five world championships, set in the 1950s, at the {wikiLink("2002 French Grand Prix", "https://en.wikipedia.org/wiki/2002_French_Grand_Prix")}. Ferrari finished 1–2 at the {wikiLink("United States Grand Prix", "https://en.wikipedia.org/wiki/2002_United_States_Grand_Prix")}, Barrichello leading Schumacher after the latter had slowed down on the last lap to attempt a 'dead heat' with his teammate, by a margin of 0.011 seconds, in one of the closest finishes in Formula One history.
        </p>

        <p>
        The first race of the {wikiLink("2003 Formula One season", "https://en.wikipedia.org/wiki/2003_Formula_One_season")}, the {wikiLink("Australian Grand Prix", "https://en.wikipedia.org/wiki/2003_Australian_Grand_Prix")}, was the first race since the {wikiLink("1999 European Grand Prix", "https://en.wikipedia.org/wiki/1999_European_Grand_Prix")} where neither Ferrari driver had finished on the podium. McLaren had an early lead in the standings, but Ferrari had closed the points gap by the {wikiLink("Canadian Grand Prix", "https://en.wikipedia.org/wiki/2003_Canadian_Grand_Prix")}. Both championships were still undecided at the last round of the 2003 season, the {wikiLink("Japanese Grand Prix", "https://en.wikipedia.org/wiki/2003_Japanese_Grand_Prix")}. After having started 14th, Schumacher finished eighth in the race, and clinched his sixth championship by two points over McLaren driver {wikiLink("Kimi Räikkönen", "https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen")}, surpassing Juan Manuel Fangio's record; Ferrari managed to win their 13th {wikiLink("Constructors' Championship", "https://en.wikipedia.org/wiki/List_of_Formula_One_World_Constructors%27_Champions")} with {wikiLink("Rubens Barrichello", "https://en.wikipedia.org/wiki/Rubens_Barrichello")} winning the race after starting from pole position. In 2003, F1 magazine reported that Ferrari's budget was $443,800,000.
        </p>

        <p>
        Ferrari rebounded in {wikiLink("2004", "https://en.wikipedia.org/wiki/2004_Formula_One_season")}, with Schumacher winning 13 of the 18 races, and 12 of the first 13 of the season, both F1 records. He won his seventh and final {wikiLink("Drivers' Championship", "https://en.wikipedia.org/wiki/List_of_Formula_One_World_Drivers%27_Champions")} by finishing second at the {wikiLink("2004 Belgian Grand Prix", "https://en.wikipedia.org/wiki/2004_Belgian_Grand_Prix")}, with four races still remaining. {wikiLink("Barrichello", "https://en.wikipedia.org/wiki/Rubens_Barrichello")} finished second in the standings, and Ferrari easily wrapped up the {wikiLink("Constructors' Championship", "https://en.wikipedia.org/wiki/List_of_Formula_One_World_Constructors%27_Champions")}. Barrichello won twice, at the {wikiLink("2004 Italian Grand Prix", "https://en.wikipedia.org/wiki/2004_Italian_Grand_Prix")} and the {wikiLink("2004 Chinese Grand Prix", "https://en.wikipedia.org/wiki/2004_Chinese_Grand_Prix")} respectively.
        </p>

        <p>
        The {wikiLink("2005 Formula One season", "https://en.wikipedia.org/wiki/2005_Formula_One_season")} saw a change of fortune for Ferrari. The team started the year with the F2004M, a modified version of the previous year's car pending full development of their new car, the {wikiLink("F2005", "https://en.wikipedia.org/wiki/Ferrari_F2005")}, which was scheduled to be introduced at the {wikiLink("2005 Spanish Grand Prix", "https://en.wikipedia.org/wiki/2005_Spanish_Grand_Prix")}. The car lacked pace in comparison with other teams (particularly McLaren and Renault who started the year with brand new cars). Alarmed by poor performances in the {wikiLink("2005 Australian Grand Prix", "https://en.wikipedia.org/wiki/2005_Australian_Grand_Prix")} and in the {wikiLink("2005 Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2005_Malaysian_Grand_Prix")}, the F2005 was rushed into service at the third round, the {wikiLink("2005 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2005_Bahrain_Grand_Prix")}, where Schumacher retired from hydraulics failure, his first mechanical failure since the {wikiLink("2001 German Grand Prix", "https://en.wikipedia.org/wiki/2001_German_Grand_Prix")}, ending a run of 58 Grands Prix without technical failure.
        </p>

        <p>
        The poor relative performance of the team's {wikiLink("Bridgestone", "https://en.wikipedia.org/wiki/Bridgestone")} tyres was also cited as a reason for Ferrari's lack of performance in {wikiLink("2005", "https://en.wikipedia.org/wiki/2005_Formula_One_season")}. The Bridgestone tyres failed to give sufficient grip in qualifying and were not as durable as their {wikiLink("Michelin", "https://en.wikipedia.org/wiki/Michelin")} rivals during races. However, the tyres provided for the {wikiLink("2005 San Marino Grand Prix", "https://en.wikipedia.org/wiki/2005_San_Marino_Grand_Prix")} were more competitive, and the Bridgestone tyres supplied for the {wikiLink("2005 United States Grand Prix", "https://en.wikipedia.org/wiki/2005_United_States_Grand_Prix")} allowed the three Bridgestone teams to race, while the seven Michelin teams were forced to withdraw.
        </p>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Felipe_Massa_2006_Brazil_winner.jpg/250px-Felipe_Massa_2006_Brazil_winner.jpg"
            alt="Felipe Massa won his home race driving for Ferrari at the 2006 Brazilian Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Felipe Massa", "https://en.wikipedia.org/wiki/Felipe_Massa")} won his home race driving for Ferrari at the {wikiLink("2006 Brazilian Grand Prix", "https://en.wikipedia.org/wiki/2006_Brazilian_Grand_Prix")}.
        </figcaption>
        </figure>

        <p>
        In August 2005, {wikiLink("Rubens Barrichello", "https://en.wikipedia.org/wiki/Rubens_Barrichello")} announced that he was leaving Ferrari at the end of the year to join the {wikiLink("Honda", "https://en.wikipedia.org/wiki/Honda_in_Formula_One")} team, citing a need for 'renewed motivation', and rumoured to have been 'unhappy with his continued status as number two to Schumacher'. Ferrari named then {wikiLink("Sauber", "https://en.wikipedia.org/wiki/Sauber")} driver {wikiLink("Felipe Massa", "https://en.wikipedia.org/wiki/Felipe_Massa")} as Barrichello's replacement for the {wikiLink("2006 Formula One season", "https://en.wikipedia.org/wiki/2006_Formula_One_season")}.
        </p>

        <p>
        Ferrari's {wikiLink("2006 car", "https://en.wikipedia.org/wiki/Ferrari_248_F1")}, the {wikiLink("248 F1", "https://en.wikipedia.org/wiki/Ferrari_248_F1")}, was the first car developed entirely under {wikiLink("Aldo Costa", "https://en.wikipedia.org/wiki/Aldo_Costa")}, after the departure of Rory Byrne. Ferrari finished 1–2 in the {wikiLink("2006 United States Grand Prix", "https://en.wikipedia.org/wiki/2006_United_States_Grand_Prix")}. Massa won his first race at the {wikiLink("2006 Turkish Grand Prix", "https://en.wikipedia.org/wiki/2006_Turkish_Grand_Prix")}, and Schumacher announced his retirement at the {wikiLink("2006 Italian Grand Prix", "https://en.wikipedia.org/wiki/2006_Italian_Grand_Prix")}, which he won. {wikiLink("Kimi Räikkönen", "https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen")} was announced as Schumacher's replacement for the {wikiLink("2007 season", "https://en.wikipedia.org/wiki/2007_Formula_One_season")}. Still in contention for the championship, Schumacher won his final race at the {wikiLink("2006 Chinese Grand Prix", "https://en.wikipedia.org/wiki/2006_Chinese_Grand_Prix")}, but ultimately fell short of an eighth drivers title. At the {wikiLink("2006 Brazilian Grand Prix", "https://en.wikipedia.org/wiki/2006_Brazilian_Grand_Prix")} Schumacher finished fourth in his final race for Ferrari, setting the fastest lap following a puncture, the race was won by Massa. Ferrari finished five points behind Renault for the Constructors' Championship.
        </p>

        <p>
        In the {wikiLink("F2007", "https://en.wikipedia.org/wiki/Ferrari_F2007")}, {wikiLink("Kimi Räikkönen", "https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen")} won the inaugural race of the {wikiLink("2007 Formula One season", "https://en.wikipedia.org/wiki/2007_Formula_One_season")}, the first Ferrari driver to win on his Ferrari debut since {wikiLink("Nigel Mansell", "https://en.wikipedia.org/wiki/Nigel_Mansell")} in 1989. Räikkönen subsequently won the Drivers' Championship by one point over both McLaren drivers, and, with nine victories, Ferrari won the Constructors' Championship.
        </p>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Kimi_Raikkonen_won_2007_Brazil_GP_side.jpg/250px-Kimi_Raikkonen_won_2007_Brazil_GP_side.jpg"
            alt="Räikkönen celebrates his race win and 2007 Drivers' Championship at the 2007 Brazilian GP"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            Räikkönen celebrates his race win and {wikiLink("2007", "https://en.wikipedia.org/wiki/2007_Formula_One_World_Championship")} Drivers' Championship at the 2007 Brazilian GP.
        </figcaption>
        </figure>

        <p>
        The {wikiLink("2007 Formula One espionage controversy", "https://en.wikipedia.org/wiki/2007_Formula_One_espionage_controversy")} directly concerned Ferrari employee {wikiLink("Nigel Stepney", "https://en.wikipedia.org/wiki/Nigel_Stepney")}, who was dismissed by the team as a result. The case revolved around the theft of technical information.
        </p>

        <p>
        After the end of the 2007 season, Ferrari President {wikiLink("Luca Cordero di Montezemolo", "https://en.wikipedia.org/wiki/Luca_Cordero_di_Montezemolo")} announced a new structure for the team, with {wikiLink("Jean Todt", "https://en.wikipedia.org/wiki/Jean_Todt")} departing the team principal role and moving up to his senior role as CEO of the company, {wikiLink("Stefano Domenicali", "https://en.wikipedia.org/wiki/Stefano_Domenicali")} took over as team principal as {wikiLink("Ross Brawn", "https://en.wikipedia.org/wiki/Ross_Brawn")} declined a return following his sabbatical (he became Team Principal of {wikiLink("Honda in Formula One", "https://en.wikipedia.org/wiki/Honda_in_Formula_One")}), {wikiLink("Aldo Costa", "https://en.wikipedia.org/wiki/Aldo_Costa")} as technical director and {wikiLink("Mario Almondo", "https://en.wikipedia.org/wiki/Mario_Almondo")} as Operations Director. It had been reported that this completed a shift in Ferrari personnel where the older foreign leadership was replaced with a new one composed mostly of Italians.
        </p>

        <p>
        The {wikiLink("F2008", "https://en.wikipedia.org/wiki/Ferrari_F2008")} was Ferrari's car for the {wikiLink("2008 Formula One season", "https://en.wikipedia.org/wiki/2008_Formula_One_season")}. Räikkönen led the championship early on after taking two victories from the early rounds, but multiple incidents for him later saw Massa battle McLaren's {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")} for the Drivers' Championship until the end of the season. Massa went into the final race of the season, the {wikiLink("Brazilian Grand Prix", "https://en.wikipedia.org/wiki/2008_Brazilian_Grand_Prix")}, in contention for the championship. Massa won the race, but ultimately lost the drivers' title to Hamilton after the latter managed to get past {wikiLink("Timo Glock", "https://en.wikipedia.org/wiki/Timo_Glock")} for fifth place on the final lap of the race. However, Ferrari did win the Constructors' World Championship. In October 2008, Ferrari issued a statement saying that they would reconsider their participation in Formula One beyond the {wikiLink("2009 Formula One season", "https://en.wikipedia.org/wiki/2009_Formula_One_season")}, due to the FIA's desire to introduce standardised engines from 2010. The FIA's plan was never implemented.
        </p>

        <p>
        Ferrari started the {wikiLink("2009 Formula One season", "https://en.wikipedia.org/wiki/2009_Formula_One_season")} poorly with the {wikiLink("F60", "https://en.wikipedia.org/wiki/Ferrari_F60")}, recording their worst start to a season since {wikiLink("1981", "https://en.wikipedia.org/wiki/1981_Formula_One_World_Championship")}. During qualifying for the {wikiLink("2009 Hungarian Grand Prix", "https://en.wikipedia.org/wiki/2009_Hungarian_Grand_Prix")}, Felipe Massa was injured when he was struck by a spring that had detached from the rear suspension of Rubens Barrichello's {wikiLink("Brawn BGP 001", "https://en.wikipedia.org/wiki/Brawn_BGP_001")}. He was poised to be replaced by former Ferrari teammate and seven-time Formula One champion Michael Schumacher as of the {wikiLink("European Grand Prix", "https://en.wikipedia.org/wiki/2009_European_Grand_Prix")}, but the latter was sidelined by a motorbike injury he had sustained earlier in the year. Massa was eventually replaced by {wikiLink("Luca Badoer", "https://en.wikipedia.org/wiki/Luca_Badoer")}, and later by {wikiLink("Giancarlo Fisichella", "https://en.wikipedia.org/wiki/Giancarlo_Fisichella")}, for the remainder of the 2009 season. Ferrari recorded their only win of the 2009 season at the {wikiLink("Belgian Grand Prix", "https://en.wikipedia.org/wiki/2009_Belgian_Grand_Prix")}, where Kimi Räikkönen won ahead of pole-sitter Giancarlo Fisichella (Force India) after having started sixth.
        </p>

        <div className="clear-both"></div>

        {/* 2010s: Fernando Alonso Joins Ferrari */}
        <section id="ferrari-2010s" className="space-y-4 scroll-mt-24"></section>
        <h4 className="text-lg font-semibold text-red-400 mb-1">2010s: Fernando Alonso Joins Ferrari</h4>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Alonso_Canadian_GP_2010_%28cropped%29.jpg/250px-Alonso_Canadian_GP_2010_%28cropped%29.jpg"
            alt="Fernando Alonso narrowly missed out on the 2010 and 2012 drivers' titles"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")} narrowly missed out on the {wikiLink("2010", "https://en.wikipedia.org/wiki/2010_Formula_One_World_Championship")} and {wikiLink("2012", "https://en.wikipedia.org/wiki/2012_Formula_One_World_Championship")} drivers' titles.
        </figcaption>
        </figure>

        <p>
        Despite still having a year of his contract remaining, Räikkönen left Ferrari and was replaced by the double world champion {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")}. Ferrari announced that Felipe Massa would partner Fernando Alonso until at least the end of the {wikiLink("2012 Formula One season", "https://en.wikipedia.org/wiki/2012_Formula_One_season")}.
        </p>

        <p>
        The {wikiLink("2010 Formula One season", "https://en.wikipedia.org/wiki/2010_Formula_One_season")} started with Fernando Alonso leading a Ferrari 1–2, with Massa second, at the {wikiLink("2010 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2010_Bahrain_Grand_Prix")}. However, after the first seven races, Ferrari were lying third in the Constructors' Championship, following a string of low points finishes. Ferrari remained third in the Constructors' Championship following a controversial 1–2 finish at the {wikiLink("2010 German Grand Prix", "https://en.wikipedia.org/wiki/2010_German_Grand_Prix")}, where Ferrari were deemed to have given an order to Felipe Massa to give the lead of the race to Fernando Alonso. Team orders had been banned in Formula One since 2003. The stewards fined Ferrari $100,000 – the maximum penalty race stewards could impose. The incident was referred to the {wikiLink("FIA World Motor Sport Council", "https://en.wikipedia.org/wiki/FIA_World_Motor_Sport_Council")} for review, and no further action was taken. Alonso won further races at {wikiLink("Monza", "https://en.wikipedia.org/wiki/2010_Italian_Grand_Prix")}, {wikiLink("Singapore", "https://en.wikipedia.org/wiki/2010_Singapore_Grand_Prix")} and the inaugural race in {wikiLink("Korea", "https://en.wikipedia.org/wiki/2010_Korean_Grand_Prix")} as he finished the season second to {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")}.
        </p>

        <p>
        Ferrari launched its 2011 car, the {wikiLink("Ferrari 150º Italia", "https://en.wikipedia.org/wiki/Ferrari_150%C2%BA_Italia")} in January 2011, with {wikiLink("Ford Motor Company", "https://en.wikipedia.org/wiki/Ford_Motor_Company")} declaring intentions to sue over the use of the F150 name – under which the car had been launched – Ferrari began referring to the car as the "F150th Italia". In March 2011, the car's name was changed again to "150º Italia", with the {wikiLink("Italian language", "https://en.wikipedia.org/wiki/Italian_language")} {wikiLink("ordinal indicator", "https://en.wikipedia.org/wiki/Ordinal_indicator")} º being used to replace the English language -th. Ford and Ferrari also settled their legal matter, asking for the case to be dismissed at a court in Detroit. In 2011 Alonso renewed his contract with Ferrari to at least the end of the 2016 season. Massa renewed his contract for one more season alongside Alonso.
        </p>

        <p>
        The {wikiLink("2012 Formula One season", "https://en.wikipedia.org/wiki/2012_Formula_One_season")} saw Ferrari continue with the driver pairing of the previous two years of {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")} and {wikiLink("Felipe Massa", "https://en.wikipedia.org/wiki/Felipe_Massa")}, with Alonso once again narrowly missing out on the drivers' title.
        </p>

        <p>
        Ferrari's car for the {wikiLink("2013 Formula One season", "https://en.wikipedia.org/wiki/2013_Formula_One_season")} is the {wikiLink("Ferrari F138", "https://en.wikipedia.org/wiki/Ferrari_F138")}. Massa was replaced by {wikiLink("Kimi Räikkönen", "https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen")} for 2014, while Alonso was retained. Despite having such a line-up, the team struggled throughout the season, only achieving two podiums and finishing fourth in the Constructors' Championship behind a resurgent Williams, marking Ferrari's first winless season since {wikiLink("1993", "https://en.wikipedia.org/wiki/1993_Formula_One_World_Championship")}. {wikiLink("Stefano Domenicali", "https://en.wikipedia.org/wiki/Stefano_Domenicali")} was replaced as team principal by {wikiLink("Marco Mattiacci", "https://en.wikipedia.org/wiki/Marco_Mattiacci")}. Prior to the {wikiLink("2014 Italian Grand Prix", "https://en.wikipedia.org/wiki/2014_Italian_Grand_Prix")}, {wikiLink("Luca Cordero di Montezemolo", "https://en.wikipedia.org/wiki/Luca_Cordero_di_Montezemolo")} announced his resignation as Ferrari chairman. Räikkönen was retained for the {wikiLink("2015 Formula One season", "https://en.wikipedia.org/wiki/2015_Formula_One_World_Championship")} season while Alonso left the team, to rejoin {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")}. He was replaced by {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")}, who left {wikiLink("Red Bull Racing", "https://en.wikipedia.org/wiki/Red_Bull_Racing")}. In October 2014, the team announced replacing its outdated simulator software to the more capable rFpro.
        </p>

        <p>
        After a massive management overhaul, with {wikiLink("Sergio Marchionne", "https://en.wikipedia.org/wiki/Sergio_Marchionne")} and {wikiLink("Maurizio Arrivabene", "https://en.wikipedia.org/wiki/Maurizio_Arrivabene")} replacing di Montezemolo and Mattiacci as Ferrari President and Team Principal respectively, the team enjoyed an improved start to the {wikiLink("2015 Formula One season", "https://en.wikipedia.org/wiki/2015_Formula_One_World_Championship")} season, with Sebastian Vettel taking third in {wikiLink("Australia", "https://en.wikipedia.org/wiki/2015_Australian_Grand_Prix")}. However, Räikkönen was forced to retire from the race due to a loose wheel. The team ended their 34-race winless streak in {wikiLink("Malaysia", "https://en.wikipedia.org/wiki/2015_Malaysian_Grand_Prix")} when Vettel held off both Mercedes cars to claim his first victory since leaving Red Bull at the end of the previous year. Sebastian Vettel managed to win twice more for Ferrari in 2015, at the {wikiLink("2015 Hungarian Grand Prix", "https://en.wikipedia.org/wiki/2015_Hungarian_Grand_Prix")}, and finally at the {wikiLink("2015 Singapore Grand Prix", "https://en.wikipedia.org/wiki/2015_Singapore_Grand_Prix")}. Vettel and Räikkönen finished third and fourth respectively in the drivers' standings.
        </p>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Sebastian_Vettel_2015_Malaysia_FP2_3.jpg/250px-Sebastian_Vettel_2015_Malaysia_FP2_3.jpg"
            alt="Sebastian Vettel at the 2015 Malaysian Grand Prix, where he took his first win for Ferrari"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} at the {wikiLink("2015 Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2015_Malaysian_Grand_Prix")}, where he took his first win for Ferrari.
        </figcaption>
        </figure>

        <p>
        After scoring no wins during the {wikiLink("2016 Formula One World Championship", "https://en.wikipedia.org/wiki/2016_Formula_One_World_Championship")} season, Ferrari scored their 225th Formula One victory at the {wikiLink("2017 Australian Grand Prix", "https://en.wikipedia.org/wiki/2017_Australian_Grand_Prix")}, courtesy of Sebastian Vettel, who had not won a race since the {wikiLink("2015 Singapore Grand Prix", "https://en.wikipedia.org/wiki/2015_Singapore_Grand_Prix")}. Vettel took the lead of the World Drivers' Championship standings, the first time a Ferrari driver had done so since the {wikiLink("2012 Japanese Grand Prix", "https://en.wikipedia.org/wiki/2012_Japanese_Grand_Prix")}, 1,625 days prior, and became the first non-Mercedes driver to do so since Vettel himself had done so at the end of the {wikiLink("2013 Formula One World Championship", "https://en.wikipedia.org/wiki/2013_Formula_One_World_Championship")} season. It was also the first time a team other than Mercedes led the World Constructors' Championship standings since the start of {wikiLink("2014 Formula One World Championship", "https://en.wikipedia.org/wiki/2014_Formula_One_World_Championship")}.

        At the {wikiLink("2017 Chinese Grand Prix", "https://en.wikipedia.org/wiki/2017_Chinese_Grand_Prix")}, Vettel finished second behind Mercedes driver Lewis Hamilton, while Kimi Räikkönen finished fifth. Vettel took his second victory of the season at the {wikiLink("2017 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2017_Bahrain_Grand_Prix")} after starting third to extend his lead in the Drivers' Championship standings. Räikkönen's fourth place in the race gave Ferrari a three-point lead in the Constructors' Championship standings.
        </p>

        <p>
        Ferrari's first 1–2 finish since 2010 came at the {wikiLink("2017 Monaco Grand Prix", "https://en.wikipedia.org/wiki/2017_Monaco_Grand_Prix")}, where Vettel became the first Ferrari driver to win in Monaco since Michael Schumacher had done so 16 years earlier, in 2001. The event also marked Kimi Räikkönen's first pole position since the {wikiLink("2008 French Grand Prix", "https://en.wikipedia.org/wiki/2008_French_Grand_Prix")}, almost nine years earlier, after beating Vettel by 0.043 seconds in qualifying.

        Controversy followed at the {wikiLink("2017 Azerbaijan Grand Prix", "https://en.wikipedia.org/wiki/2017_Azerbaijan_Grand_Prix")}. On lap 19 of the Grand Prix, immediately prior to the Safety Car restart, Sebastian Vettel and Lewis Hamilton collided after the former hit the latter in the rear. Vettel, having judged Hamilton, the leader, to have brake-tested him at the exit of Turn 15 of the {wikiLink("Baku City Circuit", "https://en.wikipedia.org/wiki/Baku_City_Circuit")}, then drove alongside him and turned into him. Vettel was awarded a 10-second stop-and-go penalty for his actions, losing a win after Hamilton had issues of his own. Vettel, however, still re-emerged ahead of Hamilton after the former served his penalty and extended his lead in the Drivers' Championship. The {wikiLink("FIA", "https://en.wikipedia.org/wiki/FIA")} summoned Vettel to an extraordinary meeting of the {wikiLink("FIA World Motor Sport Council", "https://en.wikipedia.org/wiki/FIA_World_Motor_Sport_Council")} for his actions at the Azerbaijan Grand Prix, but ruled that no further action was necessary after Vettel issued a full apology.

        After four races without a win, Ferrari returned to success at the {wikiLink("2017 Hungarian Grand Prix", "https://en.wikipedia.org/wiki/2017_Hungarian_Grand_Prix")} with a victory by {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} and their second 1–2 of the season. Vettel lost his lead in the Drivers' Championship to Hamilton at the {wikiLink("2017 Italian Grand Prix", "https://en.wikipedia.org/wiki/2017_Italian_Grand_Prix")}, on Ferrari home ground.
        </p>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/FP2-%E3%83%9B%E3%83%BC%E3%83%A0%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%83%88%E3%81%AB%E3%81%A6_%2836329260414%29.jpg/250px-FP2-%E3%83%9B%E3%83%BC%E3%83%A0%E3%82%B9%E3%83%88%E3%83%AC%E3%83%BC%E3%83%88%E3%81%AB%E3%81%A6_%2836329260414%29.jpg"
            alt="In 2017 Ferrari celebrated their 70th anniversary and ran a special livery at their home race at Monza"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            In 2017 Ferrari celebrated their 70th anniversary and ran a special livery at their home {wikiLink("race", "https://en.wikipedia.org/wiki/Italian_Grand_Prix")} at {wikiLink("Monza", "https://en.wikipedia.org/wiki/Autodromo_Nazionale_di_Monza")}
        </figcaption>
        </figure>

        <p>
        After taking pole position at the next {wikiLink("race", "https://en.wikipedia.org/wiki/2017_Singapore_Grand_Prix")} in Singapore and Hamilton only qualifying fifth, Vettel looked set to regain the championship lead, however a crash between him, Raikkonen and {wikiLink("Red Bull", "https://en.wikipedia.org/wiki/Red_Bull_Racing")}'s {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} right after the start of the race took all three drivers out and elevated Hamilton to the lead. Hamilton went on to win the Grand Prix and extended his championship lead to 28 points. In {wikiLink("Malaysia", "https://en.wikipedia.org/wiki/2017_Malaysian_Grand_Prix")}, Vettel failed to set a time in qualifying due to an engine issue he suffered in Free Practice 3, a few hours earlier, and therefore started last on the grid, while Hamilton took pole. Raikkonen qualified second but failed to even start the race after yet another engine issue. Vettel climbed up to fourth in the race, but Hamilton extended his advantage to 34 points after finishing second.
        </p>

        <p>
        In {wikiLink("Japan", "https://en.wikipedia.org/wiki/2017_Japanese_Grand_Prix")}, Vettel and Ferrari's championship aspirations took yet another blow, after the German retired on lap 4 due to a spark plug failure. Mercedes claimed the Constructors' Championship at the {wikiLink("United States Grand Prix", "https://en.wikipedia.org/wiki/2017_United_States_Grand_Prix")}, while Hamilton claimed the Drivers' Championship at the next race in Mexico. Vettel took Ferrari's first win since Hungary and the last of 2017 in {wikiLink("Brazil", "https://en.wikipedia.org/wiki/2017_Brazilian_Grand_Prix")}.
        </p>

        <p>
        On 22 August 2017, Ferrari announced that {wikiLink("Kimi Räikkönen", "https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen")} had been re-signed for the 2018 season. On 26 August 2017, Ferrari announced that {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} had also re-signed, meaning that Ferrari's duo of drivers would remain unchanged for the fourth consecutive year in {wikiLink("2018", "https://en.wikipedia.org/wiki/2018_Formula_One_season")}. On 11 September 2018, Ferrari announced that Räikkönen would be leaving for {wikiLink("Sauber", "https://en.wikipedia.org/wiki/Sauber")} (which subsequently became {wikiLink("Alfa Romeo", "https://en.wikipedia.org/wiki/Alfa_Romeo_Racing")}) and {wikiLink("Charles Leclerc", "https://en.wikipedia.org/wiki/Charles_Leclerc")} and Vettel would be the team's race drivers for 2019. On 7 January 2019, Ferrari announced that {wikiLink("Maurizio Arrivabene", "https://en.wikipedia.org/wiki/Maurizio_Arrivabene")} had been replaced by {wikiLink("Mattia Binotto", "https://en.wikipedia.org/wiki/Mattia_Binotto")} as team principal for the 2019 season.
        </p>

        <p>
        At the {wikiLink("2019 Belgian Grand Prix", "https://en.wikipedia.org/wiki/2019_Belgian_Grand_Prix")}, Leclerc took his third pole position of the season alongside teammate {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} in 2nd—the second Ferrari front row lockout of the season. During the race, Leclerc fended off the charging Mercedes of {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")} to record his maiden Grand Prix win. At the {wikiLink("2019 Italian Grand Prix", "https://en.wikipedia.org/wiki/2019_Italian_Grand_Prix")}, Leclerc won the race from pole position after defending his position from both {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes_in_F1")} drivers and became the first Ferrari driver to win at {wikiLink("Monza", "https://en.wikipedia.org/wiki/Autodromo_Nazionale_di_Monza")} since {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")} won there for the team in {wikiLink("2010", "https://en.wikipedia.org/wiki/2010_Italian_Grand_Prix")} in front of the {wikiLink("tifosi", "https://en.wikipedia.org/wiki/Tifosi#Formula_One")}. Sebastian Vettel won the {wikiLink("2019 Singapore Grand Prix", "https://en.wikipedia.org/wiki/2019_Singapore_Grand_Prix")} from teammate Leclerc. That win remained Ferrari's last victory in Formula 1 until {wikiLink("Charles Leclerc", "https://en.wikipedia.org/wiki/Charles_Leclerc")} won the {wikiLink("2022 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2022_Bahrain_Grand_Prix")} on the opening round of the season, ending the team's 45-race winless streak.
        </p>

        <div className="clear-both"></div>

        {/* 2020s: Ferrari's Challenges and Changes */}
        <section id="ferrari-2020s" className="space-y-4 scroll-mt-24"></section>
        <h4 className="text-lg font-semibold text-red-400 mb-1">2020s: Ferrari's Challenges and Changes</h4>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Sebastian_Vettel_2020_Tuscan_Grand_Prix_-_race_day.jpg/250px-Sebastian_Vettel_2020_Tuscan_Grand_Prix_-_race_day.jpg"
            alt="The Tuscan Grand Prix was Ferrari's 1000th race, as both Sebastian Vettel and Charles Leclerc ran with special helmets designs and overalls with dark burgundy"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            The {wikiLink("Tuscan Grand Prix", "https://en.wikipedia.org/wiki/2020_Tuscan_Grand_Prix")} was Ferrari's 1000th race, as both {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} and {wikiLink("Charles Leclerc", "https://en.wikipedia.org/wiki/Charles_Leclerc")} ran with special helmets designs and overalls with dark burgundy.
        </figcaption>
        </figure>

        <p>
        {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} and {wikiLink("Charles Leclerc", "https://en.wikipedia.org/wiki/Charles_Leclerc")} were retained for the {wikiLink("2020 Formula One World Championship", "https://en.wikipedia.org/wiki/2020_Formula_One_World_Championship")}, Leclerc was contracted to drive for the team through to 2024 and Vettel left the team at the end of 2020 joining {wikiLink("Aston Martin F1 Team", "https://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One")} for {wikiLink("2021", "https://en.wikipedia.org/wiki/2021_Formula_One_World_Championship")}. {wikiLink("Carlos Sainz Jr.", "https://en.wikipedia.org/wiki/Carlos_Sainz_Jr.")} joined the team from the {wikiLink("2021", "https://en.wikipedia.org/wiki/2021_Formula_One_World_Championship")} season as Vettel's replacement, coming from {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")}. In August 2020, the Scuderia signed the new {wikiLink("Concorde Agreement", "https://en.wikipedia.org/wiki/Concorde_Agreement")} to compete in the Formula 1 World Championship from 2021 to 2025 coinciding with the new rule changes while also expressing their synonymity and commitment with the sport. The {wikiLink("2020 Tuscan Grand Prix", "https://en.wikipedia.org/wiki/2020_Tuscan_Grand_Prix")} marked Ferrari's 1,000th Grand Prix start as a constructor. Ferrari finished the season in 6th place in the Constructors' Championship, their worst finish since {wikiLink("1980", "https://en.wikipedia.org/wiki/1980_Formula_One_season")}.
        </p>

        <p>
        Following {wikiLink("Ferrari SF90 Power Unit Controversy", "https://en.wikipedia.org/wiki/Ferrari_SF90#Power_unit_controversy")} over the high straight-line speed of the previous car, the 2020 {wikiLink("Ferrari SF1000", "https://en.wikipedia.org/wiki/Ferrari_SF1000")} car was notably slower than last year's entry, losing 65 bhp (48 kW).
        </p>

        <p>
        At the {wikiLink("2020 Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2020_Abu_Dhabi_Grand_Prix")}, the Ferrari Team Principal {wikiLink("Mattia Binotto", "https://en.wikipedia.org/wiki/Mattia_Binotto")} announced the name of the 2021 car, {wikiLink("Ferrari SF21", "https://en.wikipedia.org/wiki/Ferrari_SF21")}, with the 2020 {wikiLink("Ferrari SF1000", "https://en.wikipedia.org/wiki/Ferrari_SF1000")} chassis with a new aerodynamic design for less drag and a new powertrain for more horsepower. While scoring no wins with the SF21, Ferrari finished third in the Constructors' Championship.
        </p>

        <p>
        For the {wikiLink("2022 season", "https://en.wikipedia.org/wiki/2022_Formula_One_World_Championship")}, the team used the {wikiLink("Ferrari F1-75", "https://en.wikipedia.org/wiki/Ferrari_F1-75")}, which celebrated the 75th anniversary of the first Ferrari production car. The F1-75 brought Ferrari their first race win at {wikiLink("Bahrain", "https://en.wikipedia.org/wiki/2022_Bahrain_Grand_Prix")} under Leclerc, their first since the 2019 season. For the first half of the championship, Ferrari looked to be back on form after the winless seasons of the past two years, showing consistent results. However, a string of strategy errors and mechanical failures soon ensued, and in {wikiLink("France", "https://en.wikipedia.org/wiki/2022_French_Grand_Prix")}, Leclerc, due to driver error, spun out and crashed. He subsequently retired, locking Ferrari out of first place in the Constructors' Championship. However, Leclerc would secure another win, and Ferrari's last win of the season, in the {wikiLink("Austrian Grand Prix", "https://en.wikipedia.org/wiki/2022_Austrian_Grand_Prix")} at the expense of Sainz, whose engine blew up. Ferrari would go on to finish second in the Constructors' Championship with Leclerc in second and Sainz in fifth in the Drivers' Championship.
        </p>

        <p>
        Ferrari went into {wikiLink("2023", "https://en.wikipedia.org/wiki/2023_Formula_One_World_Championship")} with the {wikiLink("Ferrari SF-23", "https://en.wikipedia.org/wiki/Ferrari_SF-23")}, which suffered a retirement at {wikiLink("Bahrain", "https://en.wikipedia.org/wiki/2023_Bahrain_Grand_Prix")} with {wikiLink("Leclerc", "https://en.wikipedia.org/wiki/Charles_Leclerc")}, who started third, reporting a mechanical failure, and {wikiLink("Sainz", "https://en.wikipedia.org/wiki/Carlos_Sainz_Jr.")} bringing the car to fourth. Ferrari secured their first pole position of the season with Leclerc taking pole at the {wikiLink("Azerbaijan", "https://en.wikipedia.org/wiki/2023_Azerbaijan_Grand_Prix")} and {wikiLink("Belgian", "https://en.wikipedia.org/wiki/2023_Belgian_Grand_Prix")} Grands Prix. The {wikiLink("Italian Grand Prix", "https://en.wikipedia.org/wiki/2023_Italian_Grand_Prix")} saw {wikiLink("Sainz", "https://en.wikipedia.org/wiki/Carlos_Sainz_Jr.")} take his first pole position of the season, and after Sainz offered a spirited defence against {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")}, both Ferrari drivers ultimately finished third and fourth to propel Scuderia Ferrari to third place in the Constructors' Championship. The team secured its only win of the season with Sainz playing a strategic move with {wikiLink("Lando Norris", "https://en.wikipedia.org/wiki/Lando_Norris")} at {wikiLink("Singapore Grand Prix", "https://en.wikipedia.org/wiki/2023_Singapore_Grand_Prix")}. Sainz had converted his pole position to a victory. Leclerc took pole position for the {wikiLink("United States Grand Prix", "https://en.wikipedia.org/wiki/2023_United_States_Grand_Prix")}, which was also his 100th start, but while he achieved a podium during the sprint, he could not convert his race pole position to a victory once again; in addition, he was disqualified for an infringement with his planks, promoting, amongst them, his teammate to a podium position. Leclerc made it two consecutive pole positions in a row at the {wikiLink("Mexico City Grand Prix", "https://en.wikipedia.org/wiki/2023_Mexico_City_Grand_Prix")}, but an ill-fated encounter with {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")} which resulted in the home hero's retirement damaged his endplate. He would end up finishing third with Sainz trailing behind him. The {wikiLink("São Paulo Grand Prix", "https://en.wikipedia.org/wiki/2023_S%C3%A3o_Paulo_Grand_Prix")} offered differing fortunes for both drivers; Leclerc finished fifth in the sprint, but he crashed out due to a sudden hydraulics failure. Meanwhile, Sainz finished eighth in the sprint and sixth in the main race. Leclerc would return to pole position at the {wikiLink("Las Vegas Grand Prix", "https://en.wikipedia.org/wiki/2023_Las_Vegas_Grand_Prix")}, while Sainz's SF-23 suffered from a severely damaged floor in the first practice session which led to a ten-place grid penalty for the race itself. In the main race, Sainz finished sixth and Leclerc fought Pérez to the line. After Sainz crashed out during first practice at the {wikiLink("Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2023_Abu_Dhabi_Grand_Prix")}, he failed to exit the first qualifying segment and was disallowed a race finish due to engine-related issues. Meanwhile, Leclerc finished second, and Ferrari ultimately finished third in the Constructors' Championship, three points behind Mercedes, and Leclerc ended up tying, points-wise, with {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")} (206 each); Sainz was positioned in seventh.
        </p>

        <p>
        Ferrari began the {wikiLink("2024", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship")} campaign by extending {wikiLink("Leclerc", "https://en.wikipedia.org/wiki/Charles_Leclerc")}, ending rumours he would leave the team at the conclusion of the season. A week later, Ferrari announced that seven-time World Champion {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")} would race for Ferrari beginning in 2025, leaving {wikiLink("Carlos Sainz", "https://en.wikipedia.org/wiki/Carlos_Sainz_Jr.")} to look for an alternative drive for the following season. The {wikiLink("Ferrari SF-23", "https://en.wikipedia.org/wiki/Ferrari_SF-23")}, from the first race in {wikiLink("Bahrain", "https://en.wikipedia.org/wiki/2024_Bahrain_Grand_Prix")}, was immediately competitive. After being replaced by reserve driver {wikiLink("Oliver Bearman", "https://en.wikipedia.org/wiki/Oliver_Bearman")} for the {wikiLink("Saudi Arabian Grand Prix", "https://en.wikipedia.org/wiki/2024_Saudi_Arabian_Grand_Prix")} due to {wikiLink("appendicitis", "https://en.wikipedia.org/wiki/Appendicitis")} surgery, Sainz proceeded to take a victory in the {wikiLink("Australian Grand Prix", "https://en.wikipedia.org/wiki/2024_Australian_Grand_Prix")}. His teammate {wikiLink("Leclerc", "https://en.wikipedia.org/wiki/Charles_Leclerc")} was behind him, marking Ferrari's first 1-2 finish since the 2022 {wikiLink("Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2022_Bahrain_Grand_Prix")}.
        </p>

        <p>
        On 24 April 2024, the team announced a multi-year title partnership with {wikiLink("HP Inc.", "https://en.wikipedia.org/wiki/HP_Inc.")}, renaming the team as Scuderia Ferrari HP from the {wikiLink("2024 Miami Grand Prix", "https://en.wikipedia.org/wiki/2024_Miami_Grand_Prix")} onwards. Following the victory in Australia, three further wins were observed. Leclerc took three victories at his {wikiLink("home Grand Prix", "https://en.wikipedia.org/wiki/2024_Monaco_Grand_Prix")} at Monaco, won at Ferrari's home race of {wikiLink("Monza", "https://en.wikipedia.org/wiki/2024_Italian_Grand_Prix")}, and then won their first race in the {wikiLink("United States", "https://en.wikipedia.org/wiki/2024_United_States_Grand_Prix")} since {wikiLink("2018", "https://en.wikipedia.org/wiki/2018_United_States_Grand_Prix")} with {wikiLink("Kimi Räikkönen", "https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen")}, while Sainz won an additional race, and his last with the team before departing for {wikiLink("Williams", "https://en.wikipedia.org/wiki/Williams_Racing")}, at {wikiLink("Mexico City", "https://en.wikipedia.org/wiki/2024_Mexico_City_Grand_Prix")}. Ferrari ultimately placed second in the Constructors' Championship, behind {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")}; {wikiLink("Red Bull Racing", "https://en.wikipedia.org/wiki/Red_Bull_Racing")} fell out of contention in {wikiLink("Qatar", "https://en.wikipedia.org/wiki/2024_Qatar_Grand_Prix")}. In the Drivers' Championship, Leclerc finished in second, with Sainz in fifth.
        </p>

        <p>
        For {wikiLink("2025", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")}, Ferrari rolled out the {wikiLink("Ferrari SF-25", "https://en.wikipedia.org/wiki/Ferrari_SF-25")}. The team began their campaign with a disappointing season opener in {wikiLink("Australia", "https://en.wikipedia.org/wiki/2025_Australian_Grand_Prix")} with an eighth and tenth-place finish, for Leclerc and Hamilton respectively, after a poor strategy. 
        </p>

        <p>
        While Hamilton won the {wikiLink("Chinese", "https://en.wikipedia.org/wiki/2025_Chinese_Grand_Prix")} sprint, both him and Leclerc were disqualified from the main race due to skid wear and an underweight car respectively.
        </p>

        <div className="clear-both"></div>

  </>
  );
  
  export default history;