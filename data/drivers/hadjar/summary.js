const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const summary = (
  <>
    <b>Isack Alexandre Hadjar</b> (born 28 September 2004) is a French and Algerian{" "}
    {wikiLink("racing driver", "https://en.wikipedia.org/wiki/Racing_driver")}, who competes{" "}
    {wikiLink("under the French flag", "https://en.wikipedia.org/wiki/Formula_One_drivers_from_France")} in{" "}
    {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} for{" "}
    {wikiLink("Racing Bulls", "https://en.wikipedia.org/wiki/Racing_Bulls")}.

    <br /><br />

    Born and raised in{" "}
    {wikiLink("Paris", "https://en.wikipedia.org/wiki/Paris")}, Hadjar began competitive{" "}
    {wikiLink("kart racing", "https://en.wikipedia.org/wiki/Kart_racing")} aged seven.

    He made his{" "}
    {wikiLink("sportscar racing", "https://en.wikipedia.org/wiki/Sportscar_racing")} debut in the{" "}
    {wikiLink("Ginetta Junior Winter Series", "https://en.wikipedia.org/wiki/Ginetta_Junior_Championship")}, then graduated to{" "}
    {wikiLink("junior formulae", "https://en.wikipedia.org/wiki/Junior_formulae")} in 2019.

    Hadjar finished third in the{" "}
    {wikiLink("2020 French F4 Championship", "https://en.wikipedia.org/wiki/2020_French_F4_Championship")} with{" "}
    {wikiLink("FFSA Academy", "https://en.wikipedia.org/wiki/FFSA_Academy")}, and moved up to the{" "}
    {wikiLink("Formula Regional European Championship", "https://en.wikipedia.org/wiki/Formula_Regional_European_Championship")} in{" "}
    {wikiLink("2021", "https://en.wikipedia.org/wiki/2021_Formula_Regional_European_Championship")}, finishing fifth with multiple wins.

    <br /><br />

    In{" "}
    {wikiLink("2022", "https://en.wikipedia.org/wiki/2022_FIA_Formula_3_Championship")}, Hadjar entered both the{" "}
    {wikiLink("Formula Regional Asian Championship", "https://en.wikipedia.org/wiki/2022_Formula_Regional_Asian_Championship")} and{" "}
    {wikiLink("FIA Formula 3", "https://en.wikipedia.org/wiki/FIA_Formula_3")} with{" "}
    {wikiLink("Hitech", "https://en.wikipedia.org/wiki/Hitech_Grand_Prix")}, earning wins and podiums in both series.

    He graduated to{" "}
    {wikiLink("FIA Formula 2", "https://en.wikipedia.org/wiki/FIA_Formula_2")} in{" "}
    {wikiLink("2023", "https://en.wikipedia.org/wiki/2023_Formula_2_Championship")}, and finished runner-up to{" "}
    {wikiLink("Gabriel Bortoleto", "https://en.wikipedia.org/wiki/Gabriel_Bortoleto")} in the{" "}
    {wikiLink("2024 Formula 2 Championship", "https://en.wikipedia.org/wiki/2024_Formula_2_Championship")} with{" "}
    {wikiLink("Campos", "https://en.wikipedia.org/wiki/Campos_Racing")}.

    His performances earned him the nickname "<b>le Petit Prost</b>" in French media.

    <br /><br />

    A member of the{" "}
    {wikiLink("Red Bull Junior Team", "https://en.wikipedia.org/wiki/Red_Bull_Junior_Team")} since 2022, Hadjar joined{" "}
    {wikiLink("Racing Bulls", "https://en.wikipedia.org/wiki/Racing_Bulls")} for the{" "}
    {wikiLink("2025 Formula One World Championship", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")}, making his Formula One debut at the{" "}
    {wikiLink("2025 Australian Grand Prix", "https://en.wikipedia.org/wiki/2025_Australian_Grand_Prix")}, where he crashed on the{" "}
    {wikiLink("formation lap", "https://en.wikipedia.org/wiki/Formation_lap")}.

    Hadjar is contracted to remain at Racing Bulls until at least the end of the 2025 season.
  </>
);

export default summary;
