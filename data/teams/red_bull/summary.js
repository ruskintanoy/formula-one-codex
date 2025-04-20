const wikiLink = (text, url) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
      {text}
    </a>
  );
  
  const summary = (
    <>
      <p>
        <b>Red Bull Racing</b>, currently competing as <b>Oracle Red Bull Racing</b> and also known simply as <b>Red Bull</b> or <b>RBR</b>, is a{" "}
        {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} racing team,{" "}
        {wikiLink("competing under an Austrian racing licence", "https://en.wikipedia.org/wiki/List_of_Formula_One_constructors#Team's_nationality")} and based in the United Kingdom.
        It is one of two Formula One teams owned by conglomerate{" "}
        {wikiLink("Red Bull GmbH", "https://en.wikipedia.org/wiki/Red_Bull_GmbH")}, the other being{" "}
        {wikiLink("Racing Bulls", "https://en.wikipedia.org/wiki/Racing_Bulls")}.
        The Red Bull Racing team has been managed by{" "}
        {wikiLink("Christian Horner", "https://en.wikipedia.org/wiki/Christian_Horner")} since its formation in 2005.
      </p>

      <br /><br />
  
      <p>
        Red Bull had{" "}
        {wikiLink("Cosworth", "https://en.wikipedia.org/wiki/Cosworth")} engines in{" "}
        {wikiLink("2005", "https://en.wikipedia.org/wiki/2005_Formula_One_World_Championship")} and{" "}
        {wikiLink("Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")} engines in{" "}
        {wikiLink("2006", "https://en.wikipedia.org/wiki/2006_Formula_One_World_Championship")}.
        The team used engines supplied by{" "}
        {wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_in_Formula_One")} between{" "}
        {wikiLink("2007", "https://en.wikipedia.org/wiki/2007_Formula_One_World_Championship")} and{" "}
        {wikiLink("2018", "https://en.wikipedia.org/wiki/2018_Formula_One_World_Championship")} (from{" "}
        {wikiLink("2016", "https://en.wikipedia.org/wiki/2016_Formula_One_World_Championship")} to 2018, the Renault engine was re-badged{" "}
        {wikiLink("TAG Heuer", "https://en.wikipedia.org/wiki/TAG_Heuer")} following the breakdown in the relationship between Red Bull and Renault in{" "}
        {wikiLink("2015", "https://en.wikipedia.org/wiki/2015_Formula_One_World_Championship")}).
        During this partnership, they won four successive Drivers' and Constructors' Championship titles in{" "}
        {wikiLink("2010", "https://en.wikipedia.org/wiki/2010_Formula_One_World_Championship")},{" "}
        {wikiLink("2011", "https://en.wikipedia.org/wiki/2011_Formula_One_World_Championship")},{" "}
        {wikiLink("2012", "https://en.wikipedia.org/wiki/2012_Formula_One_World_Championship")}, and{" "}
        {wikiLink("2013", "https://en.wikipedia.org/wiki/2013_Formula_One_World_Championship")}, becoming the first Austrian team to win the title.
      </p>

      <br /><br />
  
      <p>
        The team began using{" "}
        {wikiLink("Honda", "https://en.wikipedia.org/wiki/Honda_in_Formula_One")} engines in{" "}
        {wikiLink("2019", "https://en.wikipedia.org/wiki/2019_Formula_One_World_Championship")}.
        The works Honda partnership culminated in{" "}
        {wikiLink("2021", "https://en.wikipedia.org/wiki/2021_Formula_One_World_Championship")} following Red Bull driver{" "}
        {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")}'s World Drivers' Championship victory, with Verstappen also winning the championship in{" "}
        {wikiLink("2022", "https://en.wikipedia.org/wiki/2022_Formula_One_World_Championship")},{" "}
        {wikiLink("2023", "https://en.wikipedia.org/wiki/2023_Formula_One_World_Championship")}, and{" "}
        {wikiLink("2024", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship")}.
        Red Bull also won two Constructors' Championship titles in 2022 and 2023, but lost out in 2021 to{" "}
        {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One")} and in 2024 to{" "}
        {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")}.
        Honda left the sport officially after 2021 but is set to continue to supply complete engines from Japan to the team partly under{" "}
        {wikiLink("Red Bull Powertrains", "https://en.wikipedia.org/wiki/Red_Bull_Powertrains")} branding until the end of{" "}
        {wikiLink("2025", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")}.
        Red Bull have a new{" "}
        {wikiLink("wind tunnel", "https://en.wikipedia.org/wiki/Wind_tunnel")} due to be operational by 2026.
      </p>
    </>
  );
  
  export default summary;
  
  