const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const summary = (
  <>
    
      <b>Gabriel Lourenzo Bortoleto Oliveira</b> (born 14 October 2004) is a Brazilian{" "}
      {wikiLink("racing driver", "https://en.wikipedia.org/wiki/Racing_driver")}, who competes in{" "}
      {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} for{" "}
      {wikiLink("Sauber", "https://en.wikipedia.org/wiki/Sauber")}.

      <br /><br />
    
      Born and raised in {wikiLink("Osasco", "https://en.wikipedia.org/wiki/Osasco")}, Bortoleto began competitive{" "}
      {wikiLink("kart racing", "https://en.wikipedia.org/wiki/Kart_racing")} aged seven, winning multiple national titles and graduating to{" "}
      {wikiLink("junior formulae", "https://en.wikipedia.org/wiki/Formula_racing")} in 2020. A{" "}
      {wikiLink("protégé", "https://en.wikipedia.org/wiki/Mentorship")} of two-time{" "}
      {wikiLink("World Drivers' Champion", "https://en.wikipedia.org/wiki/List_of_Formula_One_World_Drivers%27_Champions")}{" "}
      {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")}, Bortoleto became a race-winner in{" "}
      {wikiLink("Italian F4", "https://en.wikipedia.org/wiki/2020_Italian_F4_Championship")} and{" "}
      {wikiLink("Formula Regional European", "https://en.wikipedia.org/wiki/2022_Formula_Regional_European_Championship")}, before winning his first title at the{" "}
      {wikiLink("2023 FIA Formula 3 Championship", "https://en.wikipedia.org/wiki/2023_FIA_Formula_3_Championship")} with{" "}
      {wikiLink("Trident", "https://en.wikipedia.org/wiki/Trident_Motorsport")}. Bortoleto progressed to{" "}
      {wikiLink("FIA Formula 2", "https://en.wikipedia.org/wiki/FIA_Formula_2")} in{" "}
      {wikiLink("2024", "https://en.wikipedia.org/wiki/2024_Formula_2_Championship")}, winning the championship that year with{" "}
      {wikiLink("Invicta", "https://en.wikipedia.org/wiki/Invicta_Racing")} to become the seventh driver in history to win the{" "}
      {wikiLink("GP2", "https://en.wikipedia.org/wiki/GP2_Series")}/Formula 2 title in their rookie season; at the{" "}
      {wikiLink("Monza feature race", "https://en.wikipedia.org/wiki/2024_Monza_Formula_2_round")}, Bortoleto became the first driver to win from last on the grid in either Formula 2 or Formula One.

      <br /><br />

      A member of the {wikiLink("McLaren Driver Development Programme", "https://en.wikipedia.org/wiki/McLaren_Driver_Development_Programme")} from 2023 to 2024, Bortoleto joined{" "}
      {wikiLink("Sauber", "https://en.wikipedia.org/wiki/Sauber")} for{" "}
      {wikiLink("2025", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")}, ahead of their acquisition by{" "}
      {wikiLink("Audi", "https://en.wikipedia.org/wiki/Audi_in_Formula_One")} in{" "}
      {wikiLink("2026", "https://en.wikipedia.org/wiki/2026_Formula_One_World_Championship")}. Bortoleto is contracted to remain at Sauber / Audi until at least the end of the 2026 season.
    
  </>
);

export default summary;
