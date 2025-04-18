const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const summary = (
  <>
    <b>Liam Lawson</b> (born 11 February 2002) is a New Zealand{" "}
    {wikiLink("racing driver", "https://en.wikipedia.org/wiki/Racing_driver")}, who competes in{" "}
    {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} for{" "}
    {wikiLink("Racing Bulls", "https://en.wikipedia.org/wiki/Racing_Bulls")}.

    <br /><br />

    Born in{" "}
    {wikiLink("Hastings", "https://en.wikipedia.org/wiki/Hastings,_New_Zealand")} and raised in{" "}
    {wikiLink("Pukekohe", "https://en.wikipedia.org/wiki/Pukekohe")}, Lawson began competitive{" "}
    {wikiLink("kart racing", "https://en.wikipedia.org/wiki/Kart_racing")} aged seven. Mentored by{" "}
    {wikiLink("Ken Smith", "https://en.wikipedia.org/wiki/Ken_Smith_(racing_driver)")}, a three-time{" "}
    {wikiLink("New Zealand Grand Prix", "https://en.wikipedia.org/wiki/New_Zealand_Grand_Prix")} winner, Lawson graduated to{" "}
    {wikiLink("junior formulae", "https://en.wikipedia.org/wiki/Junior_formulae")} in 2015, winning his first title in the{" "}
    {wikiLink("New Zealand Formula Ford Championship", "https://en.wikipedia.org/wiki/New_Zealand_Formula_Ford_Championship")} as a{" "}
    {wikiLink("privateer", "https://en.wikipedia.org/wiki/Privateer_(motorsport)")}.

    He finished runner-up in the{" "}
    {wikiLink("2017 Australian F4", "https://en.wikipedia.org/wiki/2017_Australian_Formula_4_Championship")},{" "}
    {wikiLink("2018 ADAC F4", "https://en.wikipedia.org/wiki/2018_ADAC_Formula_4_Championship")}, and{" "}
    {wikiLink("2019 Euroformula Open", "https://en.wikipedia.org/wiki/2019_Euroformula_Open_Championship")} championships, before winning the{" "}
    {wikiLink("Toyota Racing Series", "https://en.wikipedia.org/wiki/Toyota_Racing_Series")} in{" "}
    {wikiLink("2019", "https://en.wikipedia.org/wiki/2019_Toyota_Racing_Series")} with{" "}
    {wikiLink("M2", "https://en.wikipedia.org/wiki/M2_Competition")}.

    <br /><br />

    Lawson competed in{" "}
    {wikiLink("FIA Formula 3", "https://en.wikipedia.org/wiki/FIA_Formula_3")} in{" "}
    {wikiLink("2020", "https://en.wikipedia.org/wiki/2020_FIA_Formula_3_Championship")}, then progressed to{" "}
    {wikiLink("FIA Formula 2", "https://en.wikipedia.org/wiki/FIA_Formula_2")} in{" "}
    {wikiLink("2021", "https://en.wikipedia.org/wiki/2021_Formula_2_Championship")}, finishing third in the{" "}
    {wikiLink("2022 Formula 2 Championship", "https://en.wikipedia.org/wiki/2022_Formula_2_Championship")} with{" "}
    {wikiLink("Carlin", "https://en.wikipedia.org/wiki/Carlin_Motorsport")}.

    He also raced in the{" "}
    {wikiLink("2021 Deutsche Tourenwagen Masters", "https://en.wikipedia.org/wiki/2021_Deutsche_Tourenwagen_Masters")} with{" "}
    {wikiLink("Red Bull", "https://en.wikipedia.org/wiki/Red_Bull_Racing")}{" "}
    {wikiLink("AF Corse", "https://en.wikipedia.org/wiki/AF_Corse")}, finishing runner-up to{" "}
    {wikiLink("Maximilian Götz", "https://en.wikipedia.org/wiki/Maximilian_G%C3%B6tz")} in a controversial finale.

    Lawson also placed second in the{" "}
    {wikiLink("2023 Super Formula Championship", "https://en.wikipedia.org/wiki/2023_Super_Formula_Championship")} with{" "}
    {wikiLink("Team Mugen", "https://en.wikipedia.org/wiki/Team_Mugen")} behind{" "}
    {wikiLink("Ritomo Miyata", "https://en.wikipedia.org/wiki/Ritomo_Miyata")}.

    <br /><br />

    A member of the{" "}
    {wikiLink("Red Bull Junior Team", "https://en.wikipedia.org/wiki/Red_Bull_Junior_Team")} since 2019, Lawson served as reserve driver for both{" "}
    {wikiLink("Red Bull", "https://en.wikipedia.org/wiki/Red_Bull_Racing")} and{" "}
    {wikiLink("AlphaTauri", "https://en.wikipedia.org/wiki/Scuderia_AlphaTauri")} from{" "}
    {wikiLink("2022", "https://en.wikipedia.org/wiki/2022_Formula_One_World_Championship")} to{" "}
    {wikiLink("2024", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship")}.

    He made his Formula One debut at the{" "}
    {wikiLink("2023 Dutch Grand Prix", "https://en.wikipedia.org/wiki/2023_Dutch_Grand_Prix")}, replacing an injured{" "}
    {wikiLink("Daniel Ricciardo", "https://en.wikipedia.org/wiki/Daniel_Ricciardo")} at AlphaTauri, and scored points in{" "}
    {wikiLink("Singapore", "https://en.wikipedia.org/wiki/2023_Singapore_Grand_Prix")}.

    Lawson returned full-time with{" "}
    {wikiLink("Racing Bulls", "https://en.wikipedia.org/wiki/Racing_Bulls")} from the{" "}
    {wikiLink("2024 United States Grand Prix", "https://en.wikipedia.org/wiki/2024_United_States_Grand_Prix")}.

    <br /><br />

    Promoted to{" "}
    {wikiLink("Red Bull", "https://en.wikipedia.org/wiki/Red_Bull_Racing")} for the{" "}
    {wikiLink("2025 season", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")}, he replaced{" "}
    {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")} to partner{" "}
    {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")}, but was demoted after the{" "}
    {wikiLink("2025 Chinese Grand Prix", "https://en.wikipedia.org/wiki/2025_Chinese_Grand_Prix")}.
  </>
);

export default summary;
