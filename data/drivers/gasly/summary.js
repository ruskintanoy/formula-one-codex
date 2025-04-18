const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const summary = (
  <>
    <b>Pierre Jean-Jacques Gasly</b> (born 7 February 1996) is a French{" "}
    {wikiLink("racing driver", "https://en.wikipedia.org/wiki/Racing_driver")}, who competes in{" "}
    {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} for{" "}
    {wikiLink("Alpine", "https://en.wikipedia.org/wiki/Alpine_F1_Team")}. Gasly won the{" "}
    {wikiLink("2020 Italian Grand Prix", "https://en.wikipedia.org/wiki/2020_Italian_Grand_Prix")} with{" "}
    {wikiLink("AlphaTauri", "https://en.wikipedia.org/wiki/Scuderia_AlphaTauri")}.

    <br /><br />

    Born and raised in{" "}
    {wikiLink("Normandy", "https://en.wikipedia.org/wiki/Normandy")}, Gasly began competitive{" "}
    {wikiLink("kart racing", "https://en.wikipedia.org/wiki/Kart_racing")} aged 10. Graduating to{" "}
    {wikiLink("junior formulae", "https://en.wikipedia.org/wiki/Junior_formulae")} in 2011, Gasly finished third in the{" "}
    {wikiLink("French F4 Championship", "https://en.wikipedia.org/wiki/2011_French_F4_Championship")} that year with the{" "}
    {wikiLink("FFSA Academy", "https://en.wikipedia.org/wiki/FFSA_Academy")}. He won his first championship at the{" "}
    {wikiLink("Formula Renault Eurocup", "https://en.wikipedia.org/wiki/Formula_Renault_Eurocup")} in{" "}
    {wikiLink("2013", "https://en.wikipedia.org/wiki/2013_Eurocup_Formula_Renault_2.0")} with{" "}
    {wikiLink("Tech 1", "https://en.wikipedia.org/wiki/Tech_1_Racing")}. Gasly then progressed to the{" "}
    {wikiLink("GP2 Series", "https://en.wikipedia.org/wiki/GP2_Series")}, winning the championship in{" "}
    {wikiLink("2016", "https://en.wikipedia.org/wiki/2016_GP2_Series")} with{" "}
    {wikiLink("Prema", "https://en.wikipedia.org/wiki/Prema_Racing")} amid a close title battle with{" "}
    {wikiLink("Antonio Giovinazzi", "https://en.wikipedia.org/wiki/Antonio_Giovinazzi")}. He moved to{" "}
    {wikiLink("Super Formula", "https://en.wikipedia.org/wiki/Super_Formula")} the{" "}
    {wikiLink("following year", "https://en.wikipedia.org/wiki/2017_Super_Formula_Championship")}, finishing runner-up to{" "}
    {wikiLink("Hiroaki Ishiura", "https://en.wikipedia.org/wiki/Hiroaki_Ishiura")} with{" "}
    {wikiLink("Mugen", "https://en.wikipedia.org/wiki/Team_Mugen")}.

    <br /><br />

    A member of the{" "}
    {wikiLink("Red Bull Junior Team", "https://en.wikipedia.org/wiki/Red_Bull_Junior_Team")} since 2014, Gasly made his Formula One debut with{" "}
    {wikiLink("Toro Rosso", "https://en.wikipedia.org/wiki/Toro_Rosso")} at the{" "}
    {wikiLink("2017 Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2017_Malaysian_Grand_Prix")}, replacing{" "}
    {wikiLink("Daniil Kvyat", "https://en.wikipedia.org/wiki/Daniil_Kvyat")} for the remainder of the{" "}
    {wikiLink("2017", "https://en.wikipedia.org/wiki/2017_Formula_One_World_Championship")} season. He completed a full-time move to Toro Rosso for{" "}
    {wikiLink("2018", "https://en.wikipedia.org/wiki/2018_Formula_One_World_Championship")}, before being promoted to parent team{" "}
    {wikiLink("Red Bull", "https://en.wikipedia.org/wiki/Red_Bull_Racing")} in{" "}
    {wikiLink("2019", "https://en.wikipedia.org/wiki/2019_Formula_One_World_Championship")}. Gasly was demoted after the{" "}
    {wikiLink("Hungarian Grand Prix", "https://en.wikipedia.org/wiki/2019_Hungarian_Grand_Prix")}, replaced by{" "}
    {wikiLink("Alexander Albon", "https://en.wikipedia.org/wiki/Alexander_Albon")}; he achieved his maiden podium at the{" "}
    {wikiLink("Brazilian Grand Prix", "https://en.wikipedia.org/wiki/2019_Brazilian_Grand_Prix")} that year with Toro Rosso. In{" "}
    {wikiLink("2020", "https://en.wikipedia.org/wiki/2020_Formula_One_World_Championship")}, Gasly took his maiden{" "}
    {wikiLink("victory", "https://en.wikipedia.org/wiki/List_of_Formula_One_Grand_Prix_winners")} at the{" "}
    {wikiLink("Italian Grand Prix", "https://en.wikipedia.org/wiki/2020_Italian_Grand_Prix")} whilst driving for the re-branded{" "}
    {wikiLink("AlphaTauri", "https://en.wikipedia.org/wiki/Scuderia_AlphaTauri")}. He achieved a third podium for the team at the{" "}
    {wikiLink("Azerbaijan Grand Prix", "https://en.wikipedia.org/wiki/2021_Azerbaijan_Grand_Prix")} in{" "}
    {wikiLink("2021", "https://en.wikipedia.org/wiki/2021_Formula_One_World_Championship")}. Gasly moved to{" "}
    {wikiLink("Alpine", "https://en.wikipedia.org/wiki/Alpine_F1_Team")} for his{" "}
    {wikiLink("2023", "https://en.wikipedia.org/wiki/2023_Formula_One_World_Championship")} campaign, scoring his first podium for the team at the{" "}
    {wikiLink("Dutch Grand Prix", "https://en.wikipedia.org/wiki/2023_Dutch_Grand_Prix")}, repeating this feat at the rain-affected{" "}
    {wikiLink("São Paulo Grand Prix", "https://en.wikipedia.org/wiki/2024_S%C3%A3o_Paulo_Grand_Prix")} in{" "}
    {wikiLink("2024", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship")}.

    <br /><br />

    As of the{" "}
    {wikiLink("2025 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2025_Bahrain_Grand_Prix")}, Gasly has achieved one race win, three fastest laps and five podiums in Formula One. Gasly is contracted to remain at Alpine until at least the end of the 2026 season.
  </>
);

export default summary;
