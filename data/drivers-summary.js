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

const driverSummary = {
  norris: (
    <>
      {wikiLink("Lando Norris", "https://en.wikipedia.org/wiki/Lando_Norris")} (born 13 November 1999) is a British racing driver, who competes in{" "}
      {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} for{" "}
      {wikiLink("McLaren", "https://en.wikipedia.org/wiki/McLaren")}.

      Norris was runner-up in the{" "}
      {wikiLink("2024 Formula One World Championship", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship")} with McLaren, and has won five{" "}
      {wikiLink("Grands Prix", "https://en.wikipedia.org/wiki/List_of_Formula_One_Grands_Prix")} across seven seasons.

      <br /><br />

      Born in Bristol and raised in Glastonbury to an English father and Belgian mother, Norris began competitive{" "}
      {wikiLink("kart racing", "https://en.wikipedia.org/wiki/Kart_racing")} aged seven. After a successful karting career — culminating in his victory at the{" "}
      {wikiLink("Karting World Championship", "https://en.wikipedia.org/wiki/Karting_World_Championship")} in 2014 — Norris graduated to junior formulae.

      He won his first title at the{" "}
      {wikiLink("2015 MSA Formula Championship", "https://en.wikipedia.org/wiki/2015_MSA_Formula_Championship")} with{" "}
      {wikiLink("Carlin", "https://en.wikipedia.org/wiki/Carlin_Motorsport")}.

      <br /><br />

      He then won the{" "}
      {wikiLink("Toyota Racing Series", "https://en.wikipedia.org/wiki/2016_Toyota_Racing_Series")},{" "}
      {wikiLink("Formula Renault Eurocup", "https://en.wikipedia.org/wiki/2016_Eurocup_Formula_Renault_2.0")}, and{" "}
      {wikiLink("Formula Renault NEC", "https://en.wikipedia.org/wiki/2016_Formula_Renault_2.0_Northern_European_Cup")} in 2016, receiving the{" "}
      {wikiLink("Autosport BRDC Award", "https://en.wikipedia.org/wiki/Autosport_BRDC_Award")} that year.

      Norris won the{" "}
      {wikiLink("FIA Formula 3 European Championship", "https://en.wikipedia.org/wiki/FIA_Formula_3_European_Championship")} in 2017, and finished runner-up to{" "}
      {wikiLink("George Russell", "https://en.wikipedia.org/wiki/George_Russell_(racing_driver)")} 
      in the{" "}
      {wikiLink("FIA Formula 2 Championship", "https://en.wikipedia.org/wiki/FIA_Formula_2_Championship")} in 2018, both with Carlin.

      <br /><br />

      A member of the{" "}
      {wikiLink("McLaren Young Driver Programme", "https://en.wikipedia.org/wiki/McLaren_Young_Driver_Programme")} since 2017, Norris joined McLaren in 2019 
      to partner{" "}
      {wikiLink("Carlos Sainz Jr.", "https://en.wikipedia.org/wiki/Carlos_Sainz_Jr.")}, making his Formula One debut at the{" "}
      {wikiLink("2019 Australian Grand Prix", "https://en.wikipedia.org/wiki/2019_Australian_Grand_Prix")}.

      <br /><br />

      He achieved his maiden podium finish and fastest lap at the season-opening{" "}
      {wikiLink("2020 Austrian Grand Prix", "https://en.wikipedia.org/wiki/2020_Austrian_Grand_Prix")}, before achieving his maiden pole position at the{" "}
      {wikiLink("2021 Russian Grand Prix", "https://en.wikipedia.org/wiki/2021_Russian_Grand_Prix")}.

      <br /><br />

      In 2024, Norris took his maiden career win at the{" "}
      {wikiLink("2024 Miami Grand Prix", "https://en.wikipedia.org/wiki/2024_Miami_Grand_Prix")}, repeating this feat in the{" "}
      {wikiLink("2024 Dutch Grand Prix", "https://en.wikipedia.org/wiki/2024_Dutch_Grand_Prix")},{" "}
      {wikiLink("2024 Singapore Grand Prix", "https://en.wikipedia.org/wiki/2024_Singapore_Grand_Prix")}, and{" "}
      {wikiLink("2024 Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2024_Abu_Dhabi_Grand_Prix")}.

      <br /><br />

      As of the{" "}
      {wikiLink("2025 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2025_Bahrain_Grand_Prix")}, Norris has achieved five race wins, 10 pole positions, 
      14 fastest laps, and 29 podiums in Formula One. He is contracted to remain at McLaren until at least the end of the 2027 season.
    </>
  ),

  // Other drivers...
};

export default driverSummary;
