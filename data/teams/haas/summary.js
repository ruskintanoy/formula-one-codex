const wikiLink = (text, url) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
      {text}
    </a>
  );
  
  const summary = (
    <>
      <p>
        <b>Haas Formula LLC</b>, competing as <b>MoneyGram Haas F1 Team</b>, is an{" "}
        {wikiLink("American-licensed", "https://en.wikipedia.org/wiki/List_of_Formula_One_constructors#Team's_nationality")}{" "}
        {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} racing team established by{" "}
        {wikiLink("NASCAR Cup Series", "https://en.wikipedia.org/wiki/NASCAR_Cup_Series")} team owner{" "}
        {wikiLink("Gene Haas", "https://en.wikipedia.org/wiki/Gene_Haas")} in April 2014.
        The team made its debut in the{" "}
        {wikiLink("2016", "https://en.wikipedia.org/wiki/2016_Formula_One_World_Championship")} season.
        The team principal is{" "}
        {wikiLink("Ayao Komatsu", "https://en.wikipedia.org/wiki/Ayao_Komatsu")}, who replaced{" "}
        {wikiLink("Guenther Steiner", "https://en.wikipedia.org/wiki/Guenther_Steiner")} who served in the role from the team's inception until January 2024.
      </p>

      <br /><br />
  
      <p>
        The team is headquartered in{" "}
        {wikiLink("Kannapolis, North Carolina", "https://en.wikipedia.org/wiki/Kannapolis,_North_Carolina")}, United States – 31 mi (50 km) from{" "}
        {wikiLink("Charlotte", "https://en.wikipedia.org/wiki/Charlotte,_North_Carolina")} – alongside sister team and{" "}
        {wikiLink("NASCAR", "https://en.wikipedia.org/wiki/NASCAR")} entrant{" "}
        {wikiLink("Haas Factory Team", "https://en.wikipedia.org/wiki/Haas_Factory_Team")}, though the two teams are separate entities.
        The team also established a forward base in{" "}
        {wikiLink("Banbury", "https://en.wikipedia.org/wiki/Banbury")}, England, to turn cars around between races during the European part of the calendar.
        The team maintains a design office in{" "}
        {wikiLink("Maranello", "https://en.wikipedia.org/wiki/Maranello")}, which is also home to{" "}
        {wikiLink("Scuderia Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")}'s headquarters.
      </p>
    </>
  );
  
  export default summary;
  
  