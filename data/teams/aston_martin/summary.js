const wikiLink = (text, url) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
      {text}
    </a>
  );
  
  const summary = (
    <>
      <p>
        {wikiLink("Aston Martin", "https://en.wikipedia.org/wiki/Aston_Martin")} is a British car manufacturer that has participated in{" "}
        {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} in various forms and is currently represented by a team named as <b>Aston Martin Aramco F1 Team</b>.
        The company first participated in Formula One during the{" "}
        {wikiLink("1959 season", "https://en.wikipedia.org/wiki/1959_Formula_One_season")}, where they debuted the{" "}
        {wikiLink("DBR4", "https://en.wikipedia.org/wiki/Aston_Martin_DBR4")} chassis using their own engine, but it failed to score any points.
        They continued to perform poorly through the{" "}
        {wikiLink("1960 season", "https://en.wikipedia.org/wiki/1960_Formula_One_season")}, once again failing to score any points.
        As a result, Aston Martin decided to leave Formula One after 1960.
      </p>

      <br /><br />
  
      <p>
        A commercial rebranding of the{" "}
        {wikiLink("Racing Point F1 Team", "https://en.wikipedia.org/wiki/Racing_Point_F1_Team")} resulted in the team's return as Aston Martin in{" "}
        {wikiLink("2021", "https://en.wikipedia.org/wiki/2021_Formula_One_World_Championship")}, utilising customer{" "}
        {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes_AMG_High_Performance_Powertrains")} power units.
        In{" "}
        {wikiLink("2026", "https://en.wikipedia.org/wiki/2026_Formula_One_World_Championship")}, the team will begin using{" "}
        {wikiLink("Honda", "https://en.wikipedia.org/wiki/Honda_in_Formula_One")} power units as part of a works partnership with the Japanese manufacturer.
        The team, owned by{" "}
        {wikiLink("Lawrence Stroll", "https://en.wikipedia.org/wiki/Lawrence_Stroll")}, has{" "}
        {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")}, a 2-time champion from Spain, and{" "}
        {wikiLink("Lance Stroll", "https://en.wikipedia.org/wiki/Lance_Stroll")} of Canada as their race drivers beginning with the{" "}
        {wikiLink("2023 season", "https://en.wikipedia.org/wiki/2023_Formula_One_World_Championship")}.
        The team is headquartered in{" "}
        {wikiLink("Silverstone", "https://en.wikipedia.org/wiki/Silverstone")} and has previously raced under various different names, starting with{" "}
        {wikiLink("Jordan Grand Prix", "https://en.wikipedia.org/wiki/Jordan_Grand_Prix")} in{" "}
        {wikiLink("1991", "https://en.wikipedia.org/wiki/1991_Formula_One_World_Championship")}.
      </p>
    </>
  );
  
  export default summary;
  
  