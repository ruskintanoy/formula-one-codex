const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const summary = (
  <>
    <b>Yuki Tsunoda</b> (born 11 May 2000) is a Japanese{" "}
    {wikiLink("racing driver", "https://en.wikipedia.org/wiki/Racing_driver")}, who competes in{" "}
    {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} for{" "}
    {wikiLink("Red Bull Racing", "https://en.wikipedia.org/wiki/Red_Bull_Racing")}.

    <br /><br />

    Born in{" "}
    {wikiLink("Sagamihara, Kanagawa", "https://en.wikipedia.org/wiki/Sagamihara,_Kanagawa")}, Tsunoda began competitive{" "}
    {wikiLink("kart racing", "https://en.wikipedia.org/wiki/Kart_racing")} aged nine.

    Supported by{" "}
    {wikiLink("Honda", "https://en.wikipedia.org/wiki/Honda")} since 2016 through the{" "}
    {wikiLink("Honda Formula Dream Project", "https://en.wikipedia.org/wiki/Honda_Formula_Dream_Project")}, Tsunoda graduated to{" "}
    {wikiLink("junior formulae", "https://en.wikipedia.org/wiki/Junior_formulae")} that year.

    He won the{" "}
    {wikiLink("JAF Japan F4 East Series", "https://en.wikipedia.org/wiki/Formula_Beat")} in 2017 and the{" "}
    {wikiLink("F4 Japanese Championship", "https://en.wikipedia.org/wiki/2018_F4_Japanese_Championship")} in 2018.

    In{" "}
    {wikiLink("2019", "https://en.wikipedia.org/wiki/2019_FIA_Formula_3_Championship")}, he stepped up to{" "}
    {wikiLink("FIA Formula 3", "https://en.wikipedia.org/wiki/FIA_Formula_3")} with{" "}
    {wikiLink("Jenzer", "https://en.wikipedia.org/wiki/Jenzer_Motorsport")}, and joined the{" "}
    {wikiLink("Red Bull Junior Team", "https://en.wikipedia.org/wiki/Red_Bull_Junior_Team")}.

    He then finished third in his rookie{" "}
    {wikiLink("FIA Formula 2", "https://en.wikipedia.org/wiki/FIA_Formula_2")} season in{" "}
    {wikiLink("2020", "https://en.wikipedia.org/wiki/2020_Formula_2_Championship")} with{" "}
    {wikiLink("Carlin", "https://en.wikipedia.org/wiki/Carlin_Motorsport")}.

    <br /><br />

    Tsunoda made his Formula One debut with{" "}
    {wikiLink("AlphaTauri", "https://en.wikipedia.org/wiki/Scuderia_AlphaTauri")} in{" "}
    {wikiLink("2021", "https://en.wikipedia.org/wiki/2021_Formula_One_World_Championship")}, racing alongside{" "}
    {wikiLink("Pierre Gasly", "https://en.wikipedia.org/wiki/Pierre_Gasly")} and finishing a career-best fourth at the{" "}
    {wikiLink("2021 Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2021_Abu_Dhabi_Grand_Prix")}.

    He continued with AlphaTauri in{" "}
    {wikiLink("2022", "https://en.wikipedia.org/wiki/2022_Formula_One_World_Championship")} and{" "}
    {wikiLink("2023", "https://en.wikipedia.org/wiki/2023_Formula_One_World_Championship")}, partnering{" "}
    {wikiLink("Nyck de Vries", "https://en.wikipedia.org/wiki/Nyck_de_Vries")} and later{" "}
    {wikiLink("Daniel Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")}.

    He remained with the team for the{" "}
    {wikiLink("2024", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship")} season, during its rebranding to{" "}
    {wikiLink("Racing Bulls", "https://en.wikipedia.org/wiki/Racing_Bulls")}.

    <br /><br />

    Tsunoda was promoted to{" "}
    {wikiLink("Red Bull", "https://en.wikipedia.org/wiki/Red_Bull_Racing")} for the{" "}
    {wikiLink("2025 Japanese Grand Prix", "https://en.wikipedia.org/wiki/2025_Japanese_Grand_Prix")} as part of the{" "}
    {wikiLink("2025 Formula One World Championship", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")}.
  </>
);

export default summary;
