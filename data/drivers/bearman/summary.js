const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const summary = (
  <>
    <b>Oliver James Bearman</b> (born 8 May 2005) is a British{" "}
    {wikiLink("racing driver", "https://en.wikipedia.org/wiki/Racing_driver")}, who competes in{" "}
    {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} for{" "}
    {wikiLink("Haas", "https://en.wikipedia.org/wiki/Haas_F1_Team")}.

    <br /><br />

    Born in{" "}
    {wikiLink("London", "https://en.wikipedia.org/wiki/London")} and raised in{" "}
    {wikiLink("Chelmsford", "https://en.wikipedia.org/wiki/Chelmsford")}, Bearman began competitive{" "}
    {wikiLink("kart racing", "https://en.wikipedia.org/wiki/Kart_racing")} aged seven, winning several national and continental titles.

    Graduating to{" "}
    {wikiLink("junior formulae", "https://en.wikipedia.org/wiki/Junior_formulae")} in 2020, Bearman won his first title at the{" "}
    {wikiLink("2021 Italian F4 Championship", "https://en.wikipedia.org/wiki/2021_Italian_F4_Championship")} and also won the{" "}
    {wikiLink("ADAC F4 Championship", "https://en.wikipedia.org/wiki/2021_ADAC_Formula_4_Championship")} that year, both with{" "}
    {wikiLink("Van Amersfoort", "https://en.wikipedia.org/wiki/Van_Amersfoort")}.

    He moved to{" "}
    {wikiLink("FIA Formula 3", "https://en.wikipedia.org/wiki/FIA_Formula_3")} in{" "}
    {wikiLink("2022", "https://en.wikipedia.org/wiki/2022_FIA_Formula_3_Championship")}, finishing third in his rookie season with{" "}
    {wikiLink("Prema", "https://en.wikipedia.org/wiki/Prema_Racing")}.

    Bearman then progressed to{" "}
    {wikiLink("FIA Formula 2", "https://en.wikipedia.org/wiki/FIA_Formula_2")} in{" "}
    {wikiLink("2023", "https://en.wikipedia.org/wiki/2023_Formula_2_Championship")}, winning several races across two seasons and finishing sixth in his debut year.

    <br /><br />

    A member of the{" "}
    {wikiLink("Ferrari Driver Academy", "https://en.wikipedia.org/wiki/Ferrari_Driver_Academy")} since 2022, Bearman served as a reserve driver for both{" "}
    {wikiLink("Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")} and{" "}
    {wikiLink("Haas", "https://en.wikipedia.org/wiki/Haas_F1_Team")} in{" "}
    {wikiLink("2024", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship")}.

    He substituted for{" "}
    {wikiLink("Carlos Sainz Jr.", "https://en.wikipedia.org/wiki/Carlos_Sainz_Jr.")} at the{" "}
    {wikiLink("2024 Saudi Arabian Grand Prix", "https://en.wikipedia.org/wiki/2024_Saudi_Arabian_Grand_Prix")}, making his Formula One debut, and later replaced{" "}
    {wikiLink("Kevin Magnussen", "https://en.wikipedia.org/wiki/Kevin_Magnussen")} in{" "}
    {wikiLink("Azerbaijan", "https://en.wikipedia.org/wiki/2024_Azerbaijan_Grand_Prix")} and{" "}
    {wikiLink("São Paulo", "https://en.wikipedia.org/wiki/2024_S%C3%A3o_Paulo_Grand_Prix")}.

    At the Saudi Arabian round, Bearman became the youngest-ever driver to compete for Ferrari.

    <br /><br />

    Bearman joined Haas full-time in{" "}
    {wikiLink("2025", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")}, partnering{" "}
    {wikiLink("Esteban Ocon", "https://en.wikipedia.org/wiki/Esteban_Ocon")}.

    He is contracted to remain at Haas until at least the end of the 2026 season.
  </>
);

export default summary;
