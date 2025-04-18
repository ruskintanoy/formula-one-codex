const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const summary = (
  <>
    <b>Nicolas Hülkenberg</b> (born 19 August 1987) is a German{" "}
    {wikiLink("racing driver", "https://en.wikipedia.org/wiki/Racing_driver")}, who competes in{" "}
    {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} for{" "}
    {wikiLink("Sauber", "https://en.wikipedia.org/wiki/Sauber")}.

    In{" "}
    {wikiLink("endurance racing", "https://en.wikipedia.org/wiki/Endurance_racing_(motorsport)")}, Hülkenberg won the{" "}
    {wikiLink("24 Hours of Le Mans", "https://en.wikipedia.org/wiki/24_Hours_of_Le_Mans")} in{" "}
    {wikiLink("2015", "https://en.wikipedia.org/wiki/2015_24_Hours_of_Le_Mans")} with{" "}
    {wikiLink("Porsche", "https://en.wikipedia.org/wiki/Porsche_in_motorsport")}.

    <br /><br />

    Born and raised in{" "}
    {wikiLink("Emmerich am Rhein", "https://en.wikipedia.org/wiki/Emmerich_am_Rhein")}, Hülkenberg began competitive{" "}
    {wikiLink("kart racing", "https://en.wikipedia.org/wiki/Kart_racing")} aged 10, winning several national titles before graduating to{" "}
    {wikiLink("junior formulae", "https://en.wikipedia.org/wiki/Junior_formulae")} in 2005.

    He won his first championship in the{" "}
    {wikiLink("Formula BMW ADAC", "https://en.wikipedia.org/wiki/2005_Formula_BMW_ADAC_season")} that year, followed by the{" "}
    {wikiLink("2006–07 A1 Grand Prix", "https://en.wikipedia.org/wiki/2006%E2%80%9307_A1_Grand_Prix_season")} for{" "}
    {wikiLink("Germany", "https://en.wikipedia.org/wiki/A1_Team_Germany")}, the{" "}
    {wikiLink("2007 Masters of Formula 3", "https://en.wikipedia.org/wiki/2007_Masters_of_Formula_3")}, and the{" "}
    {wikiLink("2008 Formula 3 Euro Series", "https://en.wikipedia.org/wiki/2008_Formula_3_Euro_Series")}.

    Hülkenberg then progressed to the{" "}
    {wikiLink("GP2 Series", "https://en.wikipedia.org/wiki/GP2_Series")} in{" "}
    {wikiLink("2009", "https://en.wikipedia.org/wiki/2009_GP2_Series")} with{" "}
    {wikiLink("ART", "https://en.wikipedia.org/wiki/ART_Grand_Prix")}, winning the championship in his rookie season and becoming the third rookie title-winner after{" "}
    {wikiLink("Nico Rosberg", "https://en.wikipedia.org/wiki/Nico_Rosberg")} and{" "}
    {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")}.

    <br /><br />

    Hülkenberg made his Formula One debut with{" "}
    {wikiLink("Williams", "https://en.wikipedia.org/wiki/Williams_Racing")} in{" "}
    {wikiLink("2010", "https://en.wikipedia.org/wiki/2010_Formula_One_World_Championship")} following testing roles from{" "}
    {wikiLink("2007", "https://en.wikipedia.org/wiki/2007_Formula_One_World_Championship")} to{" "}
    {wikiLink("2009", "https://en.wikipedia.org/wiki/2009_Formula_One_World_Championship")}.

    He claimed his maiden{" "}
    {wikiLink("pole position", "https://en.wikipedia.org/wiki/List_of_Formula_One_polesitters")} at the{" "}
    {wikiLink("2010 Brazilian Grand Prix", "https://en.wikipedia.org/wiki/2010_Brazilian_Grand_Prix")}, before joining{" "}
    {wikiLink("Force India", "https://en.wikipedia.org/wiki/Force_India")} from{" "}
    {wikiLink("2011", "https://en.wikipedia.org/wiki/2011_Formula_One_World_Championship")} to{" "}
    {wikiLink("2012", "https://en.wikipedia.org/wiki/2012_Formula_One_World_Championship")}.

    After a one-year stint at{" "}
    {wikiLink("Sauber", "https://en.wikipedia.org/wiki/Sauber")} in{" "}
    {wikiLink("2013", "https://en.wikipedia.org/wiki/2013_Formula_One_World_Championship")}, he returned to Force India in{" "}
    {wikiLink("2014", "https://en.wikipedia.org/wiki/2014_Formula_One_World_Championship")} to partner{" "}
    {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")}.

    He moved to{" "}
    {wikiLink("Renault", "https://en.wikipedia.org/wiki/Renault_in_Formula_One")} in{" "}
    {wikiLink("2017", "https://en.wikipedia.org/wiki/2017_Formula_One_World_Championship")} and remained until{" "}
    {wikiLink("2019", "https://en.wikipedia.org/wiki/2019_Formula_One_World_Championship")}, when he was replaced by{" "}
    {wikiLink("Esteban Ocon", "https://en.wikipedia.org/wiki/Esteban_Ocon")}.

    From{" "}
    {wikiLink("2020", "https://en.wikipedia.org/wiki/2020_Formula_One_World_Championship")} to{" "}
    {wikiLink("2022", "https://en.wikipedia.org/wiki/2022_Formula_One_World_Championship")}, Hülkenberg returned as a reserve driver for{" "}
    {wikiLink("Racing Point", "https://en.wikipedia.org/wiki/Racing_Point")} and{" "}
    {wikiLink("Aston Martin", "https://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One")}, substituting for{" "}
    {wikiLink("Sergio Pérez", "https://en.wikipedia.org/wiki/Sergio_P%C3%A9rez")},{" "}
    {wikiLink("Lance Stroll", "https://en.wikipedia.org/wiki/Lance_Stroll")}, and{" "}
    {wikiLink("Sebastian Vettel", "https://en.wikipedia.org/wiki/Sebastian_Vettel")} across five races.

    He returned full-time with{" "}
    {wikiLink("Haas", "https://en.wikipedia.org/wiki/Haas_F1_Team")} in{" "}
    {wikiLink("2023", "https://en.wikipedia.org/wiki/2023_Formula_One_World_Championship")} and re-joined{" "}
    {wikiLink("Sauber", "https://en.wikipedia.org/wiki/Sauber")} for{" "}
    {wikiLink("2025", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")} ahead of their acquisition by{" "}
    {wikiLink("Audi", "https://en.wikipedia.org/wiki/Audi_in_Formula_One")} in{" "}
    {wikiLink("2026", "https://en.wikipedia.org/wiki/2026_Formula_One_World_Championship")}.

    <br /><br />

    As of the{" "}
    {wikiLink("2025 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2025_Bahrain_Grand_Prix")}, Hülkenberg has recorded one pole position and two fastest laps in Formula One.

    He holds the{" "}
    {wikiLink("Formula One records", "https://en.wikipedia.org/wiki/List_of_Formula_One_driver_records")} for the{" "}
    {wikiLink("most career starts without a podium finish", "https://en.wikipedia.org/wiki/List_of_Formula_One_driver_records#Most_races_without_scoring_a_podium_finish")} and the{" "}
    {wikiLink("most career starts without a win", "https://en.wikipedia.org/wiki/List_of_Formula_One_driver_records#Most_races_without_a_win")} (both 231).

    Hülkenberg is contracted to remain with Sauber / Audi until at least the end of the 2026 season.

    Outside of Formula One, he won the{" "}
    {wikiLink("24 Hours of Le Mans", "https://en.wikipedia.org/wiki/2015_24_Hours_of_Le_Mans")} on debut with{" "}
    {wikiLink("Porsche", "https://en.wikipedia.org/wiki/Porsche")} during the{" "}
    {wikiLink("2015 FIA World Endurance Championship", "https://en.wikipedia.org/wiki/2015_FIA_World_Endurance_Championship")}.
  </>
);

export default summary;
