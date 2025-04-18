const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const summary = (
  <>
    <b>Jack Doohan</b> (born 20 January 2003) is an Australian{" "}
    {wikiLink("racing driver", "https://en.wikipedia.org/wiki/Racing_driver")}, who competes in{" "}
    {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} for{" "}
    {wikiLink("Alpine", "https://en.wikipedia.org/wiki/Alpine_F1_Team")}.

    <br /><br />

    Born and raised in the{" "}
    {wikiLink("Gold Coast, Queensland", "https://en.wikipedia.org/wiki/Gold_Coast,_Queensland")}, Doohan is the son of five-time{" "}
    {wikiLink("Grand Prix motorcycle World Champion", "https://en.wikipedia.org/wiki/List_of_500cc/MotoGP_Motorcycle_World_Champions")}{" "}
    {wikiLink("Mick Doohan", "https://en.wikipedia.org/wiki/Mick_Doohan")}.

    He began{" "}
    {wikiLink("kart racing", "https://en.wikipedia.org/wiki/Kart_racing")} aged nine in a{" "}
    {wikiLink("go-kart", "https://en.wikipedia.org/wiki/Go-kart")} gifted to him by{" "}
    {wikiLink("Michael Schumacher", "https://en.wikipedia.org/wiki/Michael_Schumacher")}, winning multiple national titles.

    <br /><br />

    Graduating to{" "}
    {wikiLink("junior formulae", "https://en.wikipedia.org/wiki/Junior_formulae")} in 2018, Doohan began his career in the{" "}
    {wikiLink("F4 British Championship", "https://en.wikipedia.org/wiki/2018_F4_British_Championship")}.

    He finished runner-up to{" "}
    {wikiLink("Joey Alders", "https://en.wikipedia.org/wiki/Joey_Alders")} in the{" "}
    {wikiLink("2019–20 F3 Asian Championship", "https://en.wikipedia.org/wiki/2019%E2%80%9320_F3_Asian_Championship")} before progressing to{" "}
    {wikiLink("FIA Formula 3", "https://en.wikipedia.org/wiki/FIA_Formula_3")} in{" "}
    {wikiLink("2020", "https://en.wikipedia.org/wiki/2020_FIA_Formula_3_Championship")}.

    Doohan finished runner-up to{" "}
    {wikiLink("Dennis Hauger", "https://en.wikipedia.org/wiki/Dennis_Hauger")} in the{" "}
    {wikiLink("2021 FIA Formula 3 Championship", "https://en.wikipedia.org/wiki/2021_FIA_Formula_3_Championship")} with{" "}
    {wikiLink("Trident", "https://en.wikipedia.org/wiki/Trident_Motorsport")}.

    <br /><br />

    He moved to{" "}
    {wikiLink("FIA Formula 2", "https://en.wikipedia.org/wiki/FIA_Formula_2")}, scoring multiple wins in both the{" "}
    {wikiLink("2022", "https://en.wikipedia.org/wiki/2022_Formula_2_Championship")} and{" "}
    {wikiLink("2023", "https://en.wikipedia.org/wiki/2023_Formula_2_Championship")} seasons with{" "}
    {wikiLink("Virtuosi", "https://en.wikipedia.org/wiki/Virtuosi_Racing")}, finishing third overall in 2023.

    <br /><br />

    A member of the{" "}
    {wikiLink("Alpine Academy", "https://en.wikipedia.org/wiki/Alpine_Academy")} since 2022—and formerly part of the{" "}
    {wikiLink("Red Bull Junior Team", "https://en.wikipedia.org/wiki/Red_Bull_Junior_Team")}—Doohan served as a reserve driver for{" "}
    {wikiLink("Alpine", "https://en.wikipedia.org/wiki/Alpine_F1_Team")} in{" "}
    {wikiLink("2023", "https://en.wikipedia.org/wiki/2023_Formula_One_World_Championship")} and{" "}
    {wikiLink("2024", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship")}.

    He debuted at the{" "}
    {wikiLink("2024 Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2024_Abu_Dhabi_Grand_Prix")} as a replacement for{" "}
    {wikiLink("Esteban Ocon", "https://en.wikipedia.org/wiki/Esteban_Ocon")}.

    Doohan was promoted to a full-time seat in{" "}
    {wikiLink("2025", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")}, partnering{" "}
    {wikiLink("Pierre Gasly", "https://en.wikipedia.org/wiki/Pierre_Gasly")}, and is contracted to remain at Alpine until at least the end of the 2025 season.
  </>
);

export default summary;
