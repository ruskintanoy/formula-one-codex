const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const summary = (
  <>
    <b>Andrea Kimi Antonelli</b> (born 25 August 2006) is an Italian{" "}
    {wikiLink("racing driver", "https://en.wikipedia.org/wiki/Racing_driver")}, who competes in{" "}
    {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} for{" "}
    {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One")}.

    <br /><br />

    Born and raised in{" "}
    {wikiLink("Bologna", "https://en.wikipedia.org/wiki/Bologna")}, Antonelli is the son of{" "}
    {wikiLink("sportscar racing", "https://en.wikipedia.org/wiki/Sportscar_racing")} driver{" "}
    {wikiLink("Marco Antonelli", "https://en.wikipedia.org/wiki/Marco_Antonelli")}. After a successful{" "}
    {wikiLink("karting", "https://en.wikipedia.org/wiki/Karting")} career — culminating in back-to-back victories at the{" "}
    {wikiLink("Karting European Championship", "https://en.wikipedia.org/wiki/Karting_European_Championship")} in 2020 and 2021 — Antonelli graduated to{" "}
    {wikiLink("junior formulae", "https://en.wikipedia.org/wiki/Junior_formulae")}.

    He won his first title at the{" "}
    {wikiLink("2022 Italian F4 Championship", "https://en.wikipedia.org/wiki/2022_Italian_F4_Championship")} with{" "}
    {wikiLink("Prema", "https://en.wikipedia.org/wiki/Prema_Racing")}, before winning{" "}
    {wikiLink("ADAC Formula 4", "https://en.wikipedia.org/wiki/ADAC_Formula_4")} in{" "}
    {wikiLink("2022", "https://en.wikipedia.org/wiki/2022_ADAC_Formula_4_Championship")} and{" "}
    {wikiLink("Formula Regional European", "https://en.wikipedia.org/wiki/Formula_Regional_European")} in{" "}
    {wikiLink("2023", "https://en.wikipedia.org/wiki/2023_Formula_Regional_European_Championship")} with Prema, as well as{" "}
    {wikiLink("Formula Regional Middle East", "https://en.wikipedia.org/wiki/Formula_Regional_Middle_East")} in{" "}
    {wikiLink("2023", "https://en.wikipedia.org/wiki/2023_Formula_Regional_Middle_East_Championship")} with{" "}
    {wikiLink("Mumbai Falcons", "https://en.wikipedia.org/wiki/Mumbai_Falcons")}.

    <br /><br />

    In addition to becoming a race-winner in{" "}
    {wikiLink("Italian GT3", "https://en.wikipedia.org/wiki/2023_Italian_GT_Championship")}, he also won a{" "}
    {wikiLink("gold medal", "https://en.wikipedia.org/wiki/Gold_medal")} at the{" "}
    {wikiLink("2022 FIA Motorsport Games", "https://en.wikipedia.org/wiki/2022_FIA_Motorsport_Games_Formula_4_Cup")}, representing{" "}
    {wikiLink("Italy", "https://en.wikipedia.org/wiki/Athletes_at_the_2022_FIA_Motorsport_Games#Team_Italy")}. Antonelli progressed to{" "}
    {wikiLink("FIA Formula 2", "https://en.wikipedia.org/wiki/FIA_Formula_2")} in{" "}
    {wikiLink("2024", "https://en.wikipedia.org/wiki/2024_Formula_2_Championship")}, winning multiple races as he finished sixth in his rookie season.

    <br /><br />

    A member of the{" "}
    {wikiLink("Mercedes Junior Team", "https://en.wikipedia.org/wiki/Mercedes_Junior_Team")} since 2019, Antonelli signed for{" "}
    {wikiLink("Mercedes", "https://en.wikipedia.org/wiki/Mercedes-Benz_in_Formula_One")} in{" "}
    {wikiLink("2025", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")}, replacing{" "}
    {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")} to partner{" "}
    {wikiLink("George Russell", "https://en.wikipedia.org/wiki/George_Russell_(racing_driver)")} and becoming the{" "}
    {wikiLink("third-youngest driver in Formula One history", "https://en.wikipedia.org/wiki/List_of_Formula_One_driver_records#Youngest_drivers_to_start_a_race")} at the{" "}
    {wikiLink("2025 Australian Grand Prix", "https://en.wikipedia.org/wiki/2025_Australian_Grand_Prix")}, aged 18.

    Antonelli is contracted to remain at Mercedes until at least the end of the 2025 season.
  </>
);

export default summary;
