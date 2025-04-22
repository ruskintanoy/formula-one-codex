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
        {/* Origins of the team */}
        <section id="mclaren-origins-team" className="space-y-4 scroll-mt-24"></section>
        <h3 className="text-2xl font-bold text-red-600 mb-2">Origins of the team</h3>

        <div className="clear-both"></div>

        <p>
        The team has a long history, first competing in Formula One in {wikiLink("1981", "https://en.wikipedia.org/wiki/1981_Formula_One_World_Championship")} as {wikiLink("Toleman", "https://en.wikipedia.org/wiki/Toleman")}, when the team was based in {wikiLink("Witney", "https://en.wikipedia.org/wiki/Witney")}, England. In {wikiLink("1986", "https://en.wikipedia.org/wiki/1986_Formula_One_World_Championship")}, following its purchase by {wikiLink("Benetton Group", "https://en.wikipedia.org/wiki/Benetton_Group")}, it was renamed and competed as {wikiLink("Benetton", "https://en.wikipedia.org/wiki/Benetton_Formula")}. As Benetton, it won the {wikiLink("1995", "https://en.wikipedia.org/wiki/1995_Formula_One_World_Championship")} Constructors' Championship and its driver, {wikiLink("Michael Schumacher", "https://en.wikipedia.org/wiki/Michael_Schumacher")}, won two Drivers' Championships in {wikiLink("1994", "https://en.wikipedia.org/wiki/1994_Formula_One_World_Championship")} and {wikiLink("1995", "https://en.wikipedia.org/wiki/1995_Formula_One_World_Championship")}. Prior to the {wikiLink("1992", "https://en.wikipedia.org/wiki/1992_Formula_One_World_Championship")} season it moved to its current location in {wikiLink("Enstone", "https://en.wikipedia.org/wiki/Enstone")}, UK.
        </p>

        <p>
        By the {wikiLink("2000", "https://en.wikipedia.org/wiki/2000_Formula_One_World_Championship")} season, {wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault")} had purchased the team (for the first time), and by the {wikiLink("2002", "https://en.wikipedia.org/wiki/2002_Formula_One_World_Championship")} season its name was changed to {wikiLink("Renault F1 Team", "https://en.wikipedia.org/wiki/Renault_F1_Team")}, and it was racing as Renault. Renault won the Constructors' Championship in {wikiLink("2005", "https://en.wikipedia.org/wiki/2005_Formula_One_World_Championship")} and {wikiLink("2006", "https://en.wikipedia.org/wiki/2006_Formula_One_World_Championship")} and its driver, {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")} won the Drivers' Championships in the same two years. In {wikiLink("2011", "https://en.wikipedia.org/wiki/2011_Formula_One_World_Championship")}, {wikiLink("Lotus Cars", "https://en.wikipedia.org/wiki/Lotus_Cars")} came on board as a sponsor, and the team's name changed to {wikiLink("Lotus Renault GP", "https://en.wikipedia.org/wiki/Lotus_Renault_GP")}, though still racing as just "Renault" for that season. By 2012, {wikiLink("Genii Capital", "https://en.wikipedia.org/wiki/Genii_Capital")} had a majority stake in the team, and from 2012 until 2015 the team's name was {wikiLink("Lotus F1 Team", "https://en.wikipedia.org/wiki/Lotus_F1")} after its branding partner, and it raced as "Lotus".
        </p>

        <p>
        At the end of 2015, Renault had taken over the team for a second time, renaming it to {wikiLink("Renault Sport Formula One Team", "https://en.wikipedia.org/wiki/Renault_Sport_Formula_One_Team")}. The team raced as "Renault" again, from {wikiLink("2016", "https://en.wikipedia.org/wiki/2016_Formula_One_World_Championship")}, and continued as such until the end of the {wikiLink("2020", "https://en.wikipedia.org/wiki/2020_Formula_One_World_Championship")} season. When discussing the history of the organisation as a whole rather than those of specific constructors it has operated, the colloquialism "{wikiLink("Team Enstone", "https://en.wikipedia.org/wiki/Team_Enstone")}" is generally used. The team operates in a 17,000 m² (180,000 sq ft) facility on a 17-acre (6.9 ha) site in Enstone. By May 2023, Alpine had approximately 1,000 personnel in Enstone and 350 in {wikiLink("Viry-Châtillon", "https://en.wikipedia.org/wiki/Viry-Ch%C3%A2tillon")}.
        </p>

        <div className="clear-both"></div>

        {/* Rebranded Renault works team (2021–2025) */}
        <section id="mclaren-renault-works-team-2021" className="space-y-4 scroll-mt-24"></section>
        <h3 className="text-2xl font-bold text-red-600 mb-2">Rebranded Renault works team (2021–2025)</h3>

        {/* 2021 season */}
        <h4 className="text-lg font-semibold text-red-400 mb-1">2021 season</h4>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/2021_British_Grand_Prix_%2851349529828%29.jpg/250px-2021_British_Grand_Prix_%2851349529828%29.jpg"
            alt="Fernando Alonso driving the A521 at the 2021 British Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")} driving the {wikiLink("A521", "https://en.wikipedia.org/wiki/Alpine_A521")} at the {wikiLink("2021 British Grand Prix", "https://en.wikipedia.org/wiki/2021_British_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        For {wikiLink("2021", "https://en.wikipedia.org/wiki/2021_Formula_One_World_Championship")} Alpine signed two-time {wikiLink("World Champion", "https://en.wikipedia.org/wiki/List_of_Formula_One_World_Drivers%27_Champions")} {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")} to replace an outgoing {wikiLink("Daniel Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")}. This would mark Alonso's third spell driving for {wikiLink("Team Enstone", "https://en.wikipedia.org/wiki/Team_Enstone")} having driven for them from {wikiLink("2003", "https://en.wikipedia.org/wiki/2003_Formula_One_World_Championship")} to {wikiLink("2006", "https://en.wikipedia.org/wiki/2006_Formula_One_World_Championship")} and again from {wikiLink("2008", "https://en.wikipedia.org/wiki/2008_Formula_One_World_Championship")} to {wikiLink("2009", "https://en.wikipedia.org/wiki/2009_Formula_One_World_Championship")} and won two drivers championships with the team in 2005 and 2006 when the team used the Renault name. {wikiLink("Esteban Ocon", "https://en.wikipedia.org/wiki/Esteban_Ocon")} was retained from the {wikiLink("2020 Renault team", "https://en.wikipedia.org/wiki/Renault_in_Formula_One")}. The Alpine car used {wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_in_Formula_One")} engines. {wikiLink("Renault team boss", "https://en.wikipedia.org/wiki/Cyril_Abiteboul")} announced he would leave as Renault transitioned to Alpine. Abiteboul was replaced by {wikiLink("Davide Brivio", "https://en.wikipedia.org/wiki/Davide_Brivio_(motorsport)")} who previously worked for {wikiLink("Suzuki", "https://en.wikipedia.org/wiki/Suzuki_MotoGP")} in {wikiLink("MotoGP", "https://en.wikipedia.org/wiki/MotoGP")}.
        </p>

        <p>
        Alpine's first race ended with Alonso being forced to retire, after debris caused his car to overheat. {wikiLink("Ocon", "https://en.wikipedia.org/wiki/Esteban_Ocon")} was hit by {wikiLink("Aston Martin", "https://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One")} driver, {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")}. Despite a disappointing start, Alpine scored in the next fifteen races, including a victory for Ocon at the {wikiLink("2021 Hungarian Grand Prix", "https://en.wikipedia.org/wiki/2021_Hungarian_Grand_Prix")}.
        </p>

        <p>
        It marked the first victory for a {wikiLink("French driver", "https://en.wikipedia.org/wiki/Formula_One_drivers_from_France")} driving for a French team since {wikiLink("Olivier Panis", "https://en.wikipedia.org/wiki/Olivier_Panis")}' triumph at the {wikiLink("1996 Monaco Grand Prix", "https://en.wikipedia.org/wiki/1996_Monaco_Grand_Prix")} driving for the {wikiLink("Ligier", "https://en.wikipedia.org/wiki/%C3%89quipe_Ligier")} team as well as the first victory for a French driver driving a French car powered by a {wikiLink("French engine", "https://en.wikipedia.org/wiki/List_of_French_Formula_One_engine_manufacturers")} since {wikiLink("Alain Prost", "https://en.wikipedia.org/wiki/Alain_Prost")}'s triumph at the {wikiLink("1983 Austrian Grand Prix", "https://en.wikipedia.org/wiki/1983_Austrian_Grand_Prix")} driving a {wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_in_Formula_One")} car.
        </p>

        <p>
        Alonso also scored a podium in the {wikiLink("2021 Qatar Grand Prix", "https://en.wikipedia.org/wiki/2021_Qatar_Grand_Prix")}, after qualifying fifth but starting third due to {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} and {wikiLink("Valtteri Bottas", "https://en.wikipedia.org/wiki/Valtteri_Bottas")} gaining grid penalties.
        </p>

        <div className="clear-both"></div>

        {/* 2022 Season */}
        <section id="mclaren-2022" className="space-y-4 scroll-mt-24"></section>
        <h4 className="text-lg font-semibold text-red-400 mb-1">2022 Season</h4>

        <div className="clear-both"></div>

        <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/FIA_F1_Austria_2022_Nr._31_Ocon.jpg/250px-FIA_F1_Austria_2022_Nr._31_Ocon.jpg"
            alt="Esteban Ocon driving the A522 at the 2022 Austrian Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Esteban Ocon", "https://en.wikipedia.org/wiki/Esteban_Ocon")} driving the {wikiLink("A522", "https://en.wikipedia.org/wiki/Alpine_A522")} at the {wikiLink("2022 Austrian Grand Prix", "https://en.wikipedia.org/wiki/2022_Austrian_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        In January 2022, both team principal, {wikiLink("Marcin Budkowski", "https://en.wikipedia.org/wiki/Marcin_Budkowski")}, and non-executive director, {wikiLink("Alain Prost", "https://en.wikipedia.org/wiki/Alain_Prost")}, left their roles. {wikiLink("Otmar Szafnauer", "https://en.wikipedia.org/wiki/Otmar_Szafnauer")}, formerly of {wikiLink("Aston Martin F1 Team", "https://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One")}, was announced as the new team principal in the same month. Former deputy secretary-general for sport at the {wikiLink("FIA", "https://en.wikipedia.org/wiki/FIA")}, Bruno Famin, has been recruited as executive director of Alpine at Viry-Châtillon, responsible for power-unit development. Famin had also previously led {wikiLink("Peugeot", "https://en.wikipedia.org/wiki/Peugeot")} to three consecutive {wikiLink("Dakar Rally", "https://en.wikipedia.org/wiki/Dakar_Rally")} victories as head of its sporting division from 2016 to 2018, and a {wikiLink("Le Mans 24 Hours", "https://en.wikipedia.org/wiki/2009_24_Hours_of_Le_Mans")} triumph in 2009 as technical head of its endurance program. {wikiLink("Oscar Piastri", "https://en.wikipedia.org/wiki/Oscar_Piastri")} replaced {wikiLink("Daniil Kvyat", "https://en.wikipedia.org/wiki/Daniil_Kvyat")} as test driver. In February 2022, {wikiLink("BWT", "https://en.wikipedia.org/wiki/BWT_(company)")} became the title sponsor of the team, in a deal aimed at sustainability drive.
        </p>

        <p>
        Alonso qualified in second for the {wikiLink("Canadian Grand Prix", "https://en.wikipedia.org/wiki/2022_Canadian_Grand_Prix")}, only behind Verstappen. This was his best qualifying position since the {wikiLink("2012 German Grand Prix", "https://en.wikipedia.org/wiki/2012_German_Grand_Prix")}, though he suffered an issue in the race and finished in ninth.
        </p>

        <div className="clear-both"></div>

        {/* 2023 Season */}
        <section id="mclaren-2023" className="space-y-4 scroll-mt-24"></section>
        <h4 className="text-lg font-semibold text-red-400 mb-1">2023 Season</h4>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/FIA_F1_Austria_2023_Nr._10_%282%29_%28cropped%29.jpg/250px-FIA_F1_Austria_2023_Nr._10_%282%29_%28cropped%29.jpg"
            alt="Gasly at the 2023 Austrian Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Gasly", "https://en.wikipedia.org/wiki/Pierre_Gasly")} at the {wikiLink("2023 Austrian Grand Prix", "https://en.wikipedia.org/wiki/2023_Austrian_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        Alonso moved to {wikiLink("Aston Martin", "https://en.wikipedia.org/wiki/Aston_Martin_F1")} for the {wikiLink("2023 season", "https://en.wikipedia.org/wiki/2023_Formula_One_World_Championship")} because he wanted a multi-year contract extension, and Alpine was only willing to give him one more year in F1. {wikiLink("Alpine", "https://en.wikipedia.org/wiki/Alpine_F1_Team")} announced that {wikiLink("Piastri", "https://en.wikipedia.org/wiki/Oscar_Piastri")} would be replacing Alonso; but Piastri immediately denied he had a contract to race with the team. Team principal {wikiLink("Szafnauer", "https://en.wikipedia.org/wiki/Otmar_Szafnauer")} criticised Piastri, saying that Piastri should show more loyalty to Alpine, and claimed that Piastri was thankful when told about his F1 promotion prior to Alpine's announcement. In September 2022, a hearing of the {wikiLink("Contract Recognition Board", "https://en.wikipedia.org/wiki/FIA_Contract_Recognition_Board")} determined that Alpine did not have a valid contract with Piastri and was free to race with rival team {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")} in 2023. During the {wikiLink("2022 Japanese Grand Prix", "https://en.wikipedia.org/wiki/2022_Japanese_Grand_Prix")} weekend the team confirmed that {wikiLink("Pierre Gasly", "https://en.wikipedia.org/wiki/Pierre_Gasly")} had signed a multiple-year contract with them starting in 2023.
        </p>

        <p>
        In July 2023, {wikiLink("Laurent Rossi", "https://en.wikipedia.org/wiki/Laurent_Rossi")} was replaced by Philippe Krief as CEO. During the {wikiLink("2023 Belgian Grand Prix", "https://en.wikipedia.org/wiki/2023_Belgian_Grand_Prix")} weekend, Alpine announced that Szafnauer and sporting director {wikiLink("Alan Permane", "https://en.wikipedia.org/wiki/Alan_Permane")} will leave the team after the race. Chief technical officer Pat Fry will leave the team at the end of the year to join {wikiLink("Williams", "https://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering")}.
        </p>

        <p>
        Alpine finished the season sixth in the Constructors' Championship, while Gasly and Ocon were 11th and 12th, respectively, in the drivers' standings. The team reportedly lost about half a second per lap on average because the Renault power unit was lagging behind its rivals. Without this deficit, the team could have had performance similar to that of the {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One")} team.
        </p>

        <div className="clear-both"></div>

        {/* 2024 Season */}
        <section id="mclaren-2024" className="space-y-4 scroll-mt-24"></section>
        <h4 className="text-lg font-semibold text-red-400 mb-1">2024 Season</h4>

        <div className="clear-both"></div>

        <p>
        Alpine retained the driver pairing of Gasly and Ocon for the {wikiLink("2024 season", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship")}. At the {wikiLink("Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2024_Bahrain_Grand_Prix")}, the team locked out the bottom of the grid in qualifying and finished the race in 17th and 18th. After the race, it was announced that Alpine's technical director Matt Harman and head of aerodynamics {wikiLink("Dirk de Beer", "https://en.wikipedia.org/wiki/Dirk_de_Beer")} had left the team, with the team moving to a structure of three technical directors, with Joe Burnell overseeing engineering, David Wheater for aerodynamics and {wikiLink("Ciaron Pilbeam", "https://en.wikipedia.org/wiki/Ciaron_Pilbeam")} for performance. A few days later, it was reported that {wikiLink("Bob Bell", "https://en.wikipedia.org/wiki/Bob_Bell_(motorsport)")} will leave his advisory role at Alpine to reunite with Fernando Alonso at Aston Martin in an operational role. On 2 May, {wikiLink("David Sanchez", "https://en.wikipedia.org/wiki/David_Sanchez_(engineer)")}, who had left McLaren a month earlier, was signed as executive technical director. In May 2024, Alpine announced the controversial return of {wikiLink("Flavio Briatore", "https://en.wikipedia.org/wiki/Flavio_Briatore")} to the team as an executive advisor. He previously worked at {wikiLink("Team Enstone", "https://en.wikipedia.org/wiki/Team_Enstone")} as team principal from 2000 to 2009, having previously resigned due to a {wikiLink("race-fixing scandal", "https://en.wikipedia.org/wiki/Renault_Formula_One_crash_controversy")}.
        </p>

        <div className="clear-both"></div>

        <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3863_by_Stepro.jpg/250px-2024-08-25_Motorsport%2C_Formel_1%2C_Gro%C3%9Fer_Preis_der_Niederlande_2024_STP_3863_by_Stepro.jpg"
            alt="Gasly at the 2024 Dutch Grand Prix"
            className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
            {wikiLink("Gasly", "https://en.wikipedia.org/wiki/Pierre_Gasly")} at the {wikiLink("2024 Dutch Grand Prix", "https://en.wikipedia.org/wiki/2024_Dutch_Grand_Prix")}
        </figcaption>
        </figure>

        <p>
        After finishing out of the top ten four races later, Alpine scored their first points at the {wikiLink("Miami Grand Prix", "https://en.wikipedia.org/wiki/2024_Miami_Grand_Prix")} where Ocon finished tenth. At the {wikiLink("Monaco Grand Prix", "https://en.wikipedia.org/wiki/2024_Monaco_Grand_Prix")}, Ocon collided with Gasly during an overtake attempt in the first lap, resulting in the former's retirement from damage. Ocon was issued a five-place grid penalty at the {wikiLink("Canadian Grand Prix", "https://en.wikipedia.org/wiki/2024_Canadian_Grand_Prix")} and later apologised for his role in the incident. Team principal {wikiLink("Bruno Famin", "https://en.wikipedia.org/wiki/Bruno_Famin")} commented that there would be "appropriate consequences." A week later, Alpine announced that Ocon will leave the team at the end of the season following his contract running out. During the {wikiLink("Belgian Grand Prix", "https://en.wikipedia.org/wiki/2024_Belgian_Grand_Prix")} weekend, Alpine announced that team principal Bruno Famin would leave his role as team principal. Famin is set to move to {wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault")}'s mainline motorsports divisions. Famin's position was taken by {wikiLink("Oliver Oakes", "https://en.wikipedia.org/wiki/Oliver_Oakes")} from the {wikiLink("Dutch Grand Prix", "https://en.wikipedia.org/wiki/2024_Dutch_Grand_Prix")} onwards.
        </p>

        <p>
        Alpine scored a double podium at the {wikiLink("São Paulo Grand Prix", "https://en.wikipedia.org/wiki/2024_S%C3%A3o_Paulo_Grand_Prix")} with Ocon finishing second and Gasly third behind only race winner and defending drivers champion {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} of Red Bull Racing, a result which moved Alpine from ninth to sixth in the Constructors' Championship ahead of the Haas, RB and Williams teams with three rounds remaining. This marked "Team Enstone's" first double podium under the Alpine name and their first double-double under any name since the {wikiLink("2013 Korean Grand Prix", "https://en.wikipedia.org/wiki/2013_Korean_Grand_Prix")} when the team was known as {wikiLink("Lotus F1", "https://en.wikipedia.org/wiki/Lotus_F1")}.
        </p>

        <p>
        The day after the {wikiLink("Qatar Grand Prix", "https://en.wikipedia.org/wiki/2024_Qatar_Grand_Prix")}—where Gasly finished 5th and Ocon DNFed due to a crash on the first lap—it was announced that Ocon would be released from the team early, prior to his scheduled move to {wikiLink("Haas F1 Team", "https://en.wikipedia.org/wiki/Haas_F1_Team")} in 2025. In his place, {wikiLink("Jack Doohan", "https://en.wikipedia.org/wiki/Jack_Doohan")}, who was already signed for the team in 2025, made an early debut for the last round of the season at the {wikiLink("Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2024_Abu_Dhabi_Grand_Prix")}.
        </p>

        <div className="clear-both"></div>

        {/* 2025 Season */}
        <section id="mclaren-2025" className="space-y-4 scroll-mt-24"></section>
        <h4 className="text-lg font-semibold text-red-400 mb-1">2025 Season</h4>

        <div className="clear-both"></div>

        <p>
        For {wikiLink("2025", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")}, Gasly will be retained by the team for what will be Alpine's last season with a works Renault power unit. {wikiLink("Jack Doohan", "https://en.wikipedia.org/wiki/Jack_Doohan")}, who has served as the teams' reserve driver in previous seasons, will be promoted to a full-time race drive replacing {wikiLink("Esteban Ocon", "https://en.wikipedia.org/wiki/Esteban_Ocon")} who will join {wikiLink("Haas F1 Team", "https://en.wikipedia.org/wiki/Haas_F1_Team")}. Four drivers were selected to replace Doohan as test and reserve driver for the 2025 season, including {wikiLink("Paul Aron", "https://en.wikipedia.org/wiki/Paul_Aron")}, {wikiLink("Franco Colapinto", "https://en.wikipedia.org/wiki/Franco_Colapinto")}, {wikiLink("Ryō Hirakawa", "https://en.wikipedia.org/wiki/Ry%C5%8D_Hirakawa")}, and {wikiLink("Kush Maini", "https://en.wikipedia.org/wiki/Kush_Maini")}.
        </p>

        <p>
        In place of {wikiLink("BP", "https://en.wikipedia.org/wiki/BP")} and {wikiLink("Castrol", "https://en.wikipedia.org/wiki/Castrol")}, with both teams leaving Alpine after eight years to supply fuels and lubricants to the impending {wikiLink("Audi entry", "https://en.wikipedia.org/wiki/Audi_in_Formula_One")}, {wikiLink("Eni", "https://en.wikipedia.org/wiki/Eni")} and {wikiLink("Valvoline", "https://en.wikipedia.org/wiki/Valvoline")} joined the team as official suppliers.
        </p>

        <p>
        The 2025 season started poorly for Alpine with the team sitting bottom of the Constructors' Championship in 10th place after the first three rounds in {wikiLink("Australia", "https://en.wikipedia.org/wiki/2025_Australian_Grand_Prix")}, {wikiLink("China", "https://en.wikipedia.org/wiki/2025_Chinese_Grand_Prix")}, and {wikiLink("Japan", "https://en.wikipedia.org/wiki/2025_Japanese_Grand_Prix")}, being the only team not to score a point in any of those three rounds. Following a poor Melbourne weekend for the team, Doohan was involved in a wheel-to-wheel incident with other drivers during the China weekend in both the Sprint and the Grand Prix which saw him pick up four penalty points on his FIA Super Licence after only two Grands Prix. To make matters worse, Gasly was disqualified from the main Grand Prix result due to his {wikiLink("A525", "https://en.wikipedia.org/wiki/Alpine_A525")} chassis being underweight. The Ferrari of Charles Leclerc was disqualified for the same infringement at the same race.
        </p>

        <p>
        At the following round at the Japanese Grand Prix, having had to vacate his car to {wikiLink("Ryō Hirakawa", "https://en.wikipedia.org/wiki/Ry%C5%8D_Hirakawa")} for the first practice session that weekend, Jack Doohan returned to the cockpit for the second practice session only for him to crash after failing to close his car's DRS system before going through the first turn. Doohan started and finished the race in Japan in 19th, where Gasly started 11th and finished 13th in the same event. The Japanese round also laid bare the continued deficiencies of the Renault hybrid V6 power unit once more, with data suggesting the Alpines losing at best 0.6 seconds in the second sector at the lap at the Suzuka Circuit (which features two long straights), mostly because of the power deficit of their Renault engines.
        </p>

        <div className="clear-both"></div>

  </>
  );
  
  export default history;