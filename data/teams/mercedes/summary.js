const wikiLink = (text, url) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
      {text}
    </a>
  );
  
  const summary = (
    <>
      <p>
      {wikiLink("Mercedes-Benz", "https://en.wikipedia.org/wiki/Mercedes-Benz")}, a German luxury automotive brand of the{" "}
      {wikiLink("Mercedes-Benz Group", "https://en.wikipedia.org/wiki/Mercedes-Benz_Group")}, has been involved in{" "}
      {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} as both team owner and engine manufacturer for various periods since 1954.
      The current <b>Mercedes-AMG Petronas F1 Team</b> is based in{" "}
      {wikiLink("Brackley", "https://en.wikipedia.org/wiki/Brackley")}, England, and holds a{" "}
      {wikiLink("German racing licence", "https://en.wikipedia.org/wiki/List_of_Formula_One_constructors#Team's_nationality")}.
      An announcement was made in December 2020 that{" "}
      {wikiLink("Ineos", "https://en.wikipedia.org/wiki/Ineos")} planned to take a one third equal ownership stake alongside the Mercedes-Benz Group and{" "}
      {wikiLink("Toto Wolff", "https://en.wikipedia.org/wiki/Toto_Wolff")}; this came into effect on 25 January 2022.
      Mercedes-branded teams are often referred to by the nickname, the{" "}
      {wikiLink("Silver Arrows", "https://en.wikipedia.org/wiki/Silver_Arrows")} (German: <i lang="de">Silberpfeile</i>).
    </p>

    <br /><br />

    <p>
      Before the{" "}
      {wikiLink("Second World War", "https://en.wikipedia.org/wiki/Second_World_War")}, Mercedes-Benz competed in the{" "}
      {wikiLink("European Championship", "https://en.wikipedia.org/wiki/European_Championship_(auto_racing)")}, winning three titles.
      The marque debuted in Formula One in{" "}
      {wikiLink("1954", "https://en.wikipedia.org/wiki/1954_Formula_One_season")}.
      After winning their first race at the{" "}
      {wikiLink("1954 French Grand Prix", "https://en.wikipedia.org/wiki/1954_French_Grand_Prix")}, driver{" "}
      {wikiLink("Juan Manuel Fangio", "https://en.wikipedia.org/wiki/Juan_Manuel_Fangio")} won another three Grands Prix to win the 1954 Drivers' Championship and repeated this success in{" "}
      {wikiLink("1955", "https://en.wikipedia.org/wiki/1955_Formula_One_season")}.
      Despite winning two Drivers' Championships, Mercedes-Benz withdrew from motor racing after 1955 in response to the{" "}
      {wikiLink("1955 Le Mans disaster", "https://en.wikipedia.org/wiki/1955_Le_Mans_disaster")}.
    </p>

    <br /><br />

    <p>
      Mercedes returned to Formula One in{" "}
      {wikiLink("1994", "https://en.wikipedia.org/wiki/1994_Formula_One_World_Championship")} as an engine manufacturer in association with{" "}
      {wikiLink("Ilmor", "https://en.wikipedia.org/wiki/Ilmor")}, a British independent high-performance autosport engineering company, which developed their engines.
      The company won one constructors' title and three drivers' titles in a works partnership with{" "}
      {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")} which lasted until 2009.
      In 2005, Ilmor was rebranded as{" "}
      {wikiLink("Mercedes AMG High Performance Powertrains", "https://en.wikipedia.org/wiki/Mercedes_AMG_High_Performance_Powertrains")}.
      In{" "}
      {wikiLink("2010", "https://en.wikipedia.org/wiki/2010_Formula_One_World_Championship")}, the company bought the{" "}
      {wikiLink("Brawn GP", "https://en.wikipedia.org/wiki/Brawn_GP")} team, rebranding it as Mercedes.
      Since a major rule shake-up in 2014, which required the use of{" "}
      {wikiLink("turbochargers", "https://en.wikipedia.org/wiki/Turbocharger")} and{" "}
      {wikiLink("hybrid electric engines", "https://en.wikipedia.org/wiki/Hybrid_electric_vehicle")}, Mercedes has become one of the most successful teams in Formula One history, winning seven consecutive Drivers' titles from{" "}
      {wikiLink("2014", "https://en.wikipedia.org/wiki/2014_Formula_One_World_Championship")} to{" "}
      {wikiLink("2020", "https://en.wikipedia.org/wiki/2020_Formula_One_World_Championship")} and eight consecutive Constructors' titles from{" "}
      {wikiLink("2014", "https://en.wikipedia.org/wiki/2014_Formula_One_World_Championship")} to{" "}
      {wikiLink("2021", "https://en.wikipedia.org/wiki/2021_Formula_One_World_Championship")}, both records.
      The manufacturer has also collected more than 200 wins as an engine supplier and is ranked second in Formula One history.
      Ten Constructors' and thirteen Drivers' Championships have been won with Mercedes-Benz engines.
    </p>
    </>
  );
  
  export default summary;
  