const wikiLink = (text, url) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
      {text}
    </a>
  );
  
  const summary = (
    <>
      <p>
        <b>Racing Bulls S.p.A.</b>, competing as <b>Visa Cash App Racing Bulls F1 Team</b> (shortened to <b>Racing Bulls</b> or <b>VCARB</b>), is an Italian{" "}
        {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} racing team and{" "}
        {wikiLink("constructor", "https://en.wikipedia.org/wiki/List_of_Formula_One_constructors")} that has been competing since the{" "}
        {wikiLink("2024", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship")} season.
        It is one of two Formula One constructors owned by Austrian conglomerate{" "}
        {wikiLink("Red Bull GmbH", "https://en.wikipedia.org/wiki/Red_Bull_GmbH")}, the other being{" "}
        {wikiLink("Red Bull Racing", "https://en.wikipedia.org/wiki/Red_Bull_Racing")}.
      </p>

      <br /><br />
  
      <p>
        Known as{" "}
        {wikiLink("Scuderia Toro Rosso", "https://en.wikipedia.org/wiki/Scuderia_Toro_Rosso")} from 2006 to 2019 and{" "}
        {wikiLink("Scuderia AlphaTauri", "https://en.wikipedia.org/wiki/Scuderia_AlphaTauri")} from 2020 to 2023, the team was rebranded to <b>RB</b> for the 2024 season, and then switched to Racing Bulls in 2025.
      </p>

      <br /><br />
  
      <p>
        The current CEO is Peter Bayer, and the team principal is{" "}
        {wikiLink("Laurent Mekies", "https://en.wikipedia.org/wiki/Laurent_Mekies")}.
        At the start of the 2024 season, the team retained incumbent drivers{" "}
        {wikiLink("Daniel Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")} and{" "}
        {wikiLink("Yuki Tsunoda", "https://en.wikipedia.org/wiki/Yuki_Tsunoda")} from when it was known as AlphaTauri;
        Ricciardo was dropped after the{" "}
        {wikiLink("2024 Singapore Grand Prix", "https://en.wikipedia.org/wiki/2024_Singapore_Grand_Prix")} and was replaced with Red Bull junior and reserve driver{" "}
        {wikiLink("Liam Lawson", "https://en.wikipedia.org/wiki/Liam_Lawson")}.
        Lawson was promoted to the main Red Bull team for 2025, with Formula 2 graduate{" "}
        {wikiLink("Isack Hadjar", "https://en.wikipedia.org/wiki/Isack_Hadjar")} taking his place at Racing Bulls.
        Lawson was subsequently dropped from the Red Bull team after two races and returned to Racing Bulls, with Tsunoda promoted to the senior team.
      </p>
    </>
  );
  
  export default summary;
  
  