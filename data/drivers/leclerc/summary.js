const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const summary = (
  <>
    <b>Charles Marc Hervé Perceval Leclerc</b> (born 16 October 1997) is a Monégasque{" "}
    {wikiLink("racing driver", "https://en.wikipedia.org/wiki/Racing_driver")}, who competes in{" "}
    {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} for{" "}
    {wikiLink("Ferrari", "https://en.wikipedia.org/wiki/Scuderia_Ferrari")}.

    Leclerc was runner-up in the{" "}
    {wikiLink("Formula One World Drivers' Championship", "https://en.wikipedia.org/wiki/Formula_One_World_Drivers%27_Championship")} in{" "}
    {wikiLink("2022", "https://en.wikipedia.org/wiki/2022_Formula_One_World_Championship")} with Ferrari, and has won eight{" "}
    {wikiLink("Grands Prix", "https://en.wikipedia.org/wiki/Formula_One_Grands_Prix")} across eight seasons.

    <br /><br />

    Born and raised in{" "}
    {wikiLink("Monte Carlo", "https://en.wikipedia.org/wiki/Monte_Carlo")}, Leclerc began competitive{" "}
    {wikiLink("kart racing", "https://en.wikipedia.org/wiki/Kart_racing")} aged seven. After a successful karting career — culminating in his victory at the{" "}
    {wikiLink("Karting World Cup", "https://en.wikipedia.org/wiki/Karting_World_Cup")} in 2011 — Leclerc graduated to{" "}
    {wikiLink("junior formulae", "https://en.wikipedia.org/wiki/Junior_formulae")}.

    Progressing directly to{" "}
    {wikiLink("Formula Renault 2.0", "https://en.wikipedia.org/wiki/Formula_Renault_2.0")}, he finished runner-up to{" "}
    {wikiLink("Nyck de Vries", "https://en.wikipedia.org/wiki/Nyck_de_Vries")} in the Alps Series and achieved several podiums in the Eurocup.

    Leclerc graduated to{" "}
    {wikiLink("FIA European Formula 3", "https://en.wikipedia.org/wiki/FIA_Formula_3_European_Championship")} in{" "}
    {wikiLink("2015", "https://en.wikipedia.org/wiki/2015_FIA_Formula_3_European_Championship")}, winning several races and finishing fourth in his rookie season.

    He won his first championship at the{" "}
    {wikiLink("2016 GP3 Series", "https://en.wikipedia.org/wiki/2016_GP3_Series")} with{" "}
    {wikiLink("ART", "https://en.wikipedia.org/wiki/ART_Grand_Prix")}, before winning the inaugural{" "}
    {wikiLink("FIA Formula 2 Championship", "https://en.wikipedia.org/wiki/FIA_Formula_2_Championship")} in{" "}
    {wikiLink("2017", "https://en.wikipedia.org/wiki/2017_Formula_2_Championship")} with{" "}
    {wikiLink("Prema", "https://en.wikipedia.org/wiki/Prema_Racing")}.

    <br /><br />

    Leclerc made his Formula One debut in{" "}
    {wikiLink("2018", "https://en.wikipedia.org/wiki/2018_Formula_One_World_Championship")} with{" "}
    {wikiLink("Sauber", "https://en.wikipedia.org/wiki/Sauber")} as part of the{" "}
    {wikiLink("Ferrari Driver Academy", "https://en.wikipedia.org/wiki/Ferrari_Driver_Academy")}, scoring several points finishes.

    He joined Ferrari for{" "}
    {wikiLink("2019", "https://en.wikipedia.org/wiki/2019_Formula_One_World_Championship")}, partnering{" "}
    {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")}, and became the{" "}
    {wikiLink("second-youngest polesitter", "https://en.wikipedia.org/wiki/List_of_Formula_One_driver_records#Youngest_polesitters")} in Formula One history at the{" "}
    {wikiLink("2019 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2019_Bahrain_Grand_Prix")}.

    Leclerc took his maiden win at the{" "}
    {wikiLink("2019 Belgian Grand Prix", "https://en.wikipedia.org/wiki/2019_Belgian_Grand_Prix")}, before ending Ferrari's nine-year drought at the{" "}
    {wikiLink("2019 Italian Grand Prix", "https://en.wikipedia.org/wiki/2019_Italian_Grand_Prix")}, earning the nickname "<b>il Predestinato</b>".

    After winless seasons in{" "}
    {wikiLink("2020", "https://en.wikipedia.org/wiki/2020_Formula_One_World_Championship")} and{" "}
    {wikiLink("2021", "https://en.wikipedia.org/wiki/2021_Formula_One_World_Championship")}, Leclerc returned to form in{" "}
    {wikiLink("2022", "https://en.wikipedia.org/wiki/2022_Formula_One_World_Championship")}, taking several victories and finishing runner-up to{" "}
    {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")}.

    Following a 2023 campaign with five pole positions and six podiums, Leclerc won the{" "}
    {wikiLink("2024 Monaco Grand Prix", "https://en.wikipedia.org/wiki/2024_Monaco_Grand_Prix")} — becoming the first Monégasque to win the race in 93 years — and added further victories in{" "}
    {wikiLink("Italy", "https://en.wikipedia.org/wiki/2024_Italian_Grand_Prix")} and the{" "}
    {wikiLink("United States", "https://en.wikipedia.org/wiki/2024_United_States_Grand_Prix")} to finish third in the championship.

    <br /><br />

    As of the{" "}
    {wikiLink("2025 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2025_Bahrain_Grand_Prix")}, Leclerc has achieved eight race wins, 26 pole positions, 10 fastest laps and 43 podiums in Formula One. He is contracted to remain at Ferrari until at least the end of the 2026 season.

    Outside of racing, Leclerc collaborated with pianist{" "}
    {wikiLink("Sofiane Pamart", "https://en.wikipedia.org/wiki/Sofiane_Pamart")} on the EP{" "}
    {wikiLink("Dreamers", "https://en.wikipedia.org/wiki/Dreamers_(EP)")} (2024), which peaked at number two on the{" "}
    {wikiLink("Billboard Classical Albums", "https://en.wikipedia.org/wiki/Billboard_charts")} chart.
  </>
);

export default summary;
