const wikiLink = (text, url) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
      {text}
    </a>
  );
  
  const summary = (
    <>
      <p>
        <b>McLaren Racing Limited</b> is a British{" "}
        {wikiLink("motor racing", "https://en.wikipedia.org/wiki/Auto_racing")} team based at the{" "}
        {wikiLink("McLaren Technology Centre", "https://en.wikipedia.org/wiki/McLaren_Technology_Centre")} in{" "}
        {wikiLink("Woking", "https://en.wikipedia.org/wiki/Woking")}, Surrey, England. The team is a subsidiary of the{" "}
        {wikiLink("McLaren Group", "https://en.wikipedia.org/wiki/McLaren_Group")}, which owns a majority of the team.
        McLaren is best known as a{" "}
        {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} chassis{" "}
        {wikiLink("constructor", "https://en.wikipedia.org/wiki/List_of_Formula_One_constructors")}, the second-oldest active team and the second-most successful Formula One team after{" "}
        {wikiLink("Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")}, having won 193 races, 12{" "}
        {wikiLink("Drivers' Championships", "https://en.wikipedia.org/wiki/Formula_One_Drivers%27_Championship")}, and nine{" "}
        {wikiLink("Constructors' Championships", "https://en.wikipedia.org/wiki/Formula_One_constructors%27_championship")}.
        McLaren also has a history in{" "}
        {wikiLink("American open wheel racing", "https://en.wikipedia.org/wiki/American_open_wheel_racing")} as both an entrant and a chassis constructor, and has won the{" "}
        {wikiLink("Canadian-American Challenge Cup", "https://en.wikipedia.org/wiki/Can-Am")} (Can-Am){" "}
        {wikiLink("sports car racing", "https://en.wikipedia.org/wiki/Sports_car_racing")} championship. McLaren is one of only three constructors, and the only team, to complete the{" "}
        {wikiLink("Triple Crown of Motorsport", "https://en.wikipedia.org/wiki/Triple_Crown_of_Motorsport#Teams_and_manufacturers")} (wins at the{" "}
        {wikiLink("Indianapolis 500", "https://en.wikipedia.org/wiki/Indianapolis_500")},{" "}
        {wikiLink("24 Hours of Le Mans", "https://en.wikipedia.org/wiki/24_Hours_of_Le_Mans")}, and{" "}
        {wikiLink("Monaco Grand Prix", "https://en.wikipedia.org/wiki/Monaco_Grand_Prix")}).
      </p>

      <br /><br />
  
      <p>
        Founded in 1963 by New Zealander{" "}
        {wikiLink("Bruce McLaren", "https://en.wikipedia.org/wiki/Bruce_McLaren")}, the team won its first Grand Prix at the{" "}
        {wikiLink("1968 Belgian Grand Prix", "https://en.wikipedia.org/wiki/1968_Belgian_Grand_Prix")}, but their greatest initial success was in Can-Am, which they dominated from 1967 to 1971.
        Further American triumph followed, with Indianapolis 500 wins in McLaren cars for{" "}
        {wikiLink("Mark Donohue", "https://en.wikipedia.org/wiki/Mark_Donohue")} in{" "}
        {wikiLink("1972", "https://en.wikipedia.org/wiki/1972_Indianapolis_500")} and{" "}
        {wikiLink("Johnny Rutherford", "https://en.wikipedia.org/wiki/Johnny_Rutherford")} in{" "}
        {wikiLink("1974", "https://en.wikipedia.org/wiki/1974_Indianapolis_500")} and{" "}
        {wikiLink("1976", "https://en.wikipedia.org/wiki/1976_Indianapolis_500")}.
        After Bruce McLaren died in a testing accident in 1970,{" "}
        {wikiLink("Teddy Mayer", "https://en.wikipedia.org/wiki/Teddy_Mayer")} took over and led the team to their first Formula One Constructors' Championship in{" "}
        {wikiLink("1974", "https://en.wikipedia.org/wiki/1974_Formula_One_season")}, with{" "}
        {wikiLink("Emerson Fittipaldi", "https://en.wikipedia.org/wiki/Emerson_Fittipaldi")} and{" "}
        {wikiLink("James Hunt", "https://en.wikipedia.org/wiki/James_Hunt")} winning the Drivers' Championship in 1974 and{" "}
        {wikiLink("1976", "https://en.wikipedia.org/wiki/1976_Formula_One_season")} respectively.
        The year 1974 also marked the start of a long-standing sponsorship by the{" "}
        {wikiLink("Marlboro", "https://en.wikipedia.org/wiki/Marlboro_(cigarette)")} cigarette brand.
      </p>

      <br /><br />

      <p>
      In 1981, McLaren merged with{" "}
      {wikiLink("Ron Dennis", "https://en.wikipedia.org/wiki/Ron_Dennis")}'{" "}
      {wikiLink("Project Four Racing", "https://en.wikipedia.org/wiki/Project_Four_Racing")}; Dennis took over as team principal, and shortly afterwards organised a buyout of the original McLaren shareholders to take full control of the team.
      This began the team's most successful era; with{" "}
      {wikiLink("Porsche", "https://en.wikipedia.org/wiki/Porsche_in_motorsport")} and{" "}
      {wikiLink("Honda", "https://en.wikipedia.org/wiki/Honda_in_Formula_One")} engines,{" "}
      {wikiLink("Niki Lauda", "https://en.wikipedia.org/wiki/Niki_Lauda")},{" "}
      {wikiLink("Alain Prost", "https://en.wikipedia.org/wiki/Alain_Prost")}, and{" "}
      {wikiLink("Ayrton Senna", "https://en.wikipedia.org/wiki/Ayrton_Senna")} won seven Drivers' Championships between them and the team took six Constructors' Championships.
      The combination of Prost and Senna was particularly dominant—together they won all but one race in{" "}
      {wikiLink("1988", "https://en.wikipedia.org/wiki/1988_Formula_One_World_Championship")}—but later their rivalry soured and Prost left for Ferrari.
      Fellow English team{" "}
      {wikiLink("Williams", "https://en.wikipedia.org/wiki/Williams_Grand_Prix_Engineering")} offered the most consistent challenge during this period, the two winning every constructors' title between{" "}
      {wikiLink("1984", "https://en.wikipedia.org/wiki/1984_Formula_One_World_Championship")} and{" "}
      {wikiLink("1994", "https://en.wikipedia.org/wiki/1994_Formula_One_World_Championship")}.
      By the mid-1990s, Honda had withdrawn from Formula One, Senna had moved to Williams, and the team went three seasons without a win.
      With{" "}
      {wikiLink("Mercedes-Benz", "https://en.wikipedia.org/wiki/Mercedes_AMG_High_Performance_Powertrains")} engines,{" "}
      {wikiLink("West", "https://en.wikipedia.org/wiki/West_(cigarette)")} sponsorship, and former Williams designer{" "}
      {wikiLink("Adrian Newey", "https://en.wikipedia.org/wiki/Adrian_Newey")}, further championships came in{" "}
      {wikiLink("1998", "https://en.wikipedia.org/wiki/1998_Formula_One_World_Championship")} and{" "}
      {wikiLink("1999", "https://en.wikipedia.org/wiki/1999_Formula_One_World_Championship")} with driver{" "}
      {wikiLink("Mika Häkkinen", "https://en.wikipedia.org/wiki/Mika_H%C3%A4kkinen")}, and during the 2000s the team were consistent front-runners, with{" "}
      {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")} taking their latest drivers' title in{" "}
      {wikiLink("2008", "https://en.wikipedia.org/wiki/2008_Formula_One_World_Championship")}.
    </p>

    <br /><br />

    <p>
      Ron Dennis retired as McLaren team principal in 2009, handing over to long-time McLaren employee{" "}
      {wikiLink("Martin Whitmarsh", "https://en.wikipedia.org/wiki/Martin_Whitmarsh")}.
      At the end of 2013, after the team's worst season since 2004, Whitmarsh was ousted.
      McLaren announced in 2013 that they would be using{" "}
      {wikiLink("Honda", "https://en.wikipedia.org/wiki/Honda_in_Formula_One")} engines from 2015 onwards, replacing Mercedes-Benz.
      The team raced as McLaren Honda for the first time since 1992 at the{" "}
      {wikiLink("2015 Australian Grand Prix", "https://en.wikipedia.org/wiki/2015_Australian_Grand_Prix")}.
      In September 2017, McLaren announced they had agreed on an engine supply with{" "}
      {wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_in_Formula_One")} from 2018 to 2020.
      McLaren is using Mercedes-Benz engines from the 2021 season until at least 2030.
      The team's ninth Constructors' Championship, and first since 1998, was won in{" "}
      {wikiLink("2024", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship")}.
      McLaren is the joint second-most successful Formula One team of all time with nine Constructors' Championships, a{" "}
      {wikiLink("record", "https://en.wikipedia.org/wiki/List_of_Formula_One_constructor_records")} shared with Williams as of the end of the 2024 season.
    </p>

    <br /><br />

    <p>
      After initially returning to the{" "}
      {wikiLink("Indianapolis 500", "https://en.wikipedia.org/wiki/Indianapolis_500")} in{" "}
      {wikiLink("2017", "https://en.wikipedia.org/wiki/2017_Indianapolis_500")} as a backer of{" "}
      {wikiLink("Andretti Autosport", "https://en.wikipedia.org/wiki/Andretti_Autosport")} to run{" "}
      {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")} and then in{" "}
      {wikiLink("2019", "https://en.wikipedia.org/wiki/2019_Indianapolis_500")} as an independent entry, McLaren announced in August 2019 that they would run in conjunction with Arrow Schmidt Peterson Motorsports starting in{" "}
      {wikiLink("2020", "https://en.wikipedia.org/wiki/2020_IndyCar_Series")} to run the full{" "}
      {wikiLink("IndyCar Series", "https://en.wikipedia.org/wiki/IndyCar_Series")}, the combined entry being named{" "}
      {wikiLink("Arrow McLaren SP", "https://en.wikipedia.org/wiki/Arrow_McLaren_SP")}.
      Initially having no ownership interest in the team, McLaren would purchase 75% of the operation in 2021.
      McLaren entered the electric{" "}
      {wikiLink("off-road racing", "https://en.wikipedia.org/wiki/Off-road_racing")} series{" "}
      {wikiLink("Extreme E", "https://en.wikipedia.org/wiki/Extreme_E")} from{" "}
      {wikiLink("2022", "https://en.wikipedia.org/wiki/2022_Extreme_E_Championship")} to{" "}
      {wikiLink("2024", "https://en.wikipedia.org/wiki/2024_Extreme_E_Championship")}, and also joined{" "}
      {wikiLink("Formula E", "https://en.wikipedia.org/wiki/Formula_E")} in the{" "}
      {wikiLink("2022–23 season", "https://en.wikipedia.org/wiki/2022%E2%80%9323_Formula_E_World_Championship")}.
    </p>
    </>
  );
  
  export default summary;
  