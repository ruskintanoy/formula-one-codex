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

const summary = (
  <>
      Oscar Jack Piastri (born 6 April 2001) is an Australian racing driver, who competes in{" "}
      {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} for{" "}
      {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")}. Piastri has won four{" "}
      Formula One Grands Prix across three seasons.

      <br /><br />

      Born and raised in Melbourne, Piastri began his career in radio-controlled racing before moving into karting aged nine.
      Graduating to junior formulae in 2016, Piastri won his first championship at the{" "}
      {wikiLink("2019 Formula Renault Eurocup", "https://en.wikipedia.org/wiki/2019_Formula_Renault_Eurocup")} with{" "}
      {wikiLink("R-ace GP", "https://en.wikipedia.org/wiki/R-ace_GP")}. He then won both the{" "}
      {wikiLink("2020 FIA Formula 3 Championship", "https://en.wikipedia.org/wiki/2020_FIA_Formula_3_Championship")} and{" "}
      {wikiLink("2021 FIA Formula 2 Championship", "https://en.wikipedia.org/wiki/2021_Formula_2_Championship")} back-to-back with Prema, becoming the sixth driver in history to win the{" "}
      {wikiLink("FIA Formula 2 Championship", "https://en.wikipedia.org/wiki/FIA_Formula_2_Championship")} title in their rookie season. 
      Piastri is the only driver in history to win Formula Renault, Formula Three and Formula Two—or equivalent—championships in successive seasons.
  
      <br /><br />

      A member of the{" "}
      {wikiLink("Alpine Academy", "https://en.wikipedia.org/wiki/Alpine_Academy")} from 2020 to 2021, Piastri signed with{" "}
      {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")} in 2023 to partner{" "}
      {wikiLink("Lando Norris", "https://en.wikipedia.org/wiki/Lando_Norris")}, following a contract dispute with{" "}
      {wikiLink("Alpine", "https://en.wikipedia.org/wiki/Alpine_F1_Team")}. He made his Formula One debut at the{" "}
      {wikiLink("2023 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2023_Bahrain_Grand_Prix")}, achieving his first career podium in his rookie season at the{" "}
      {wikiLink("2023 Japanese Grand Prix", "https://en.wikipedia.org/wiki/2023_Japanese_Grand_Prix")}.
  
      <br /><br />

      Retaining his seat for the{" "}
      {wikiLink("2024 Formula One World Championship", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship")}, 
      Piastri achieved his maiden victory in{" "}
      {wikiLink("Hungary", "https://en.wikipedia.org/wiki/2024_Hungarian_Grand_Prix")}, becoming the fifth Australian driver to win a Formula One Grand Prix, 
      and repeated this feat in{" "}
      {wikiLink("Azerbaijan", "https://en.wikipedia.org/wiki/2024_Azerbaijan_Grand_Prix")}. In{" "}
      {wikiLink("2025", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")}, he took his maiden pole position at the{" "}
      {wikiLink("Chinese Grand Prix", "https://en.wikipedia.org/wiki/2025_Chinese_Grand_Prix")}.
    
      As of the{" "}
      {wikiLink("2025 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2025_Bahrain_Grand_Prix")}, Piastri has achieved four race wins, 
      two pole positions, four fastest laps and 13 podiums in Formula One. Piastri is contracted to remain at McLaren until at least the end of the 2028 season.
  </>
);

export default summary;
