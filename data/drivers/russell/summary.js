const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const summary = (
  <>
    <b>George William Russell</b> (born 15 February 1998) is a British{" "}
    {wikiLink("racing driver", "https://en.wikipedia.org/wiki/Racing_driver")}, who competes in{" "}
    {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} for{" "}
    {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One")}.

    Russell has won three{" "}
    {wikiLink("Formula One Grands Prix", "https://en.wikipedia.org/wiki/Formula_One_Grands_Prix")} across seven seasons.

    <br /><br />

    Born and raised in{" "}
    {wikiLink("King's Lynn, Norfolk", "https://en.wikipedia.org/wiki/King%27s_Lynn,_Norfolk")}, Russell began competitive{" "}
    {wikiLink("kart racing", "https://en.wikipedia.org/wiki/Kart_racing")} aged seven. After a successful karting career — culminating in back-to-back victories at the{" "}
    {wikiLink("Karting European Championship", "https://en.wikipedia.org/wiki/Karting_European_Championship")} in 2011 and 2012 — Russell graduated to{" "}
    {wikiLink("junior formulae", "https://en.wikipedia.org/wiki/Junior_formulae")}.

    <br /><br />

    He won his first title at the{" "}
    {wikiLink("2014 BRDC F4 Championship", "https://en.wikipedia.org/wiki/2014_BRDC_Formula_4_Championship")}.

    <br /><br />

    Russell then won the{" "}
    {wikiLink("2017 GP3 Series", "https://en.wikipedia.org/wiki/2017_GP3_Series")} and the{" "}
    {wikiLink("2018 FIA Formula 2 Championship", "https://en.wikipedia.org/wiki/2018_FIA_Formula_2_Championship")} back-to-back with{" "}
    {wikiLink("ART", "https://en.wikipedia.org/wiki/ART_Grand_Prix")}, becoming the fifth driver to win the{" "}
    {wikiLink("GP2", "https://en.wikipedia.org/wiki/GP2_Series")} /{" "}
    {wikiLink("Formula 2", "https://en.wikipedia.org/wiki/FIA_Formula_2_Championship")} championship in their rookie season and the second driver to win both titles in their respective rookie seasons.

    <br /><br />

    A member of the{" "}
    {wikiLink("Mercedes Junior Team", "https://en.wikipedia.org/wiki/Mercedes_Junior_Team")} since 2017, Russell signed for{" "}
    {wikiLink("Williams", "https://en.wikipedia.org/wiki/Williams_Racing")} in{" "}
    {wikiLink("2019", "https://en.wikipedia.org/wiki/2019_Formula_One_World_Championship")} to partner{" "}
    {wikiLink("Robert Kubica", "https://en.wikipedia.org/wiki/Robert_Kubica")}, making his Formula One debut at the{" "}
    {wikiLink("2019 Australian Grand Prix", "https://en.wikipedia.org/wiki/2019_Australian_Grand_Prix")}.

    <br /><br />

    He substituted for{" "}
    {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")} at the{" "}
    {wikiLink("2020 Sakhir Grand Prix", "https://en.wikipedia.org/wiki/2020_Sakhir_Grand_Prix")} for Mercedes, but was denied victory due to a team error and a puncture after leading the majority of the race.

    <br /><br />

    Russell scored his maiden podium at the curtailed{" "}
    {wikiLink("2021 Belgian Grand Prix", "https://en.wikipedia.org/wiki/2021_Belgian_Grand_Prix")} with Williams.

    <br /><br />

    In{" "}
    {wikiLink("2022", "https://en.wikipedia.org/wiki/2022_Formula_One_World_Championship")}, Russell replaced{" "}
    {wikiLink("Valtteri Bottas", "https://en.wikipedia.org/wiki/Valtteri_Bottas")} at Mercedes to partner Hamilton; in his first season, Russell achieved his maiden{" "}
    {wikiLink("pole position", "https://en.wikipedia.org/wiki/List_of_Formula_One_polesitters")} in{" "}
    {wikiLink("Hungary", "https://en.wikipedia.org/wiki/2022_Hungarian_Grand_Prix")} and his maiden{" "}
    {wikiLink("win", "https://en.wikipedia.org/wiki/List_of_Formula_One_Grand_Prix_winners")} in{" "}
    {wikiLink("São Paulo", "https://en.wikipedia.org/wiki/2022_S%C3%A3o_Paulo_Grand_Prix")}, finishing fourth in the{" "}
    {wikiLink("World Drivers' Championship", "https://en.wikipedia.org/wiki/World_Drivers%27_Championship")}.

    <br /><br />

    After a winless season for Mercedes in{" "}
    {wikiLink("2023", "https://en.wikipedia.org/wiki/2023_Formula_One_World_Championship")}, Russell won the{" "}
    {wikiLink("2024 Austrian Grand Prix", "https://en.wikipedia.org/wiki/2024_Austrian_Grand_Prix")} and{" "}
    {wikiLink("2024 Las Vegas Grand Prix", "https://en.wikipedia.org/wiki/2024_Las_Vegas_Grand_Prix")} in{" "}
    {wikiLink("2024", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship")}, and became the first driver in{" "}
    {wikiLink("30 years", "https://en.wikipedia.org/wiki/1994_Belgian_Grand_Prix")} to have been disqualified from a race win at the{" "}
    {wikiLink("2024 Belgian Grand Prix", "https://en.wikipedia.org/wiki/2024_Belgian_Grand_Prix")}.

    <br /><br />

    As of the{" "}
    {wikiLink("2025 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2025_Bahrain_Grand_Prix")}, Russell has achieved three race wins, five pole positions, eight fastest laps and 18 podiums in Formula One. Russell is contracted to remain at Mercedes until at least the end of the 2025 season.
  </>
);

export default summary;
