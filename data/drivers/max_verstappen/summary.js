const wikiLink = (text, url) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-500 hover:underline"
  >
    {text}
  </a>
);

const summary = (
  <>
      Max Emilian Verstappen (born 30 September 1997) is a Dutch and Belgian racing driver, who competes under the Dutch flag in{" "}
      {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} for{" "}
      {wikiLink("Red Bull Racing", "https://en.wikipedia.org/wiki/Red_Bull_Racing")}. Verstappen has won four Formula One World Drivers' Championship titles, which he won consecutively from 2021 to 2024 with Red Bull, and has won 64 Grands Prix across 11 seasons.

    <br/><br/>

      Born in Hasselt and raised in Maaseik, Verstappen is the son of Dutch former Formula One driver{" "}
      {wikiLink("Jos Verstappen", "https://en.wikipedia.org/wiki/Jos_Verstappen")} and Belgian former kart racer{" "}
      {wikiLink("Sophie Kumpen", "https://en.wikipedia.org/wiki/Sophie_Kumpen")}. After a successful karting career—culminating in his record-breaking 2013 season—Verstappen graduated to junior formulae. Progressing directly to{" "}
      {wikiLink("FIA European Formula 3", "https://en.wikipedia.org/wiki/FIA_Formula_3_European_Championship")}, Verstappen broke several records on his way to third in the{" "}
      {wikiLink("2014 FIA European Formula 3 Championship", "https://en.wikipedia.org/wiki/2014_FIA_Formula_3_European_Championship")} in his rookie season with{" "}
      {wikiLink("Van Amersfoort", "https://en.wikipedia.org/wiki/Van_Amersfoort")}. Aged 17, Verstappen signed for{" "}
      {wikiLink("Toro Rosso", "https://en.wikipedia.org/wiki/Toro_Rosso")} in{" "}
      {wikiLink("2015", "https://en.wikipedia.org/wiki/2015_Formula_One_World_Championship")} as part of the{" "}
      {wikiLink("Red Bull Junior Team", "https://en.wikipedia.org/wiki/Red_Bull_Junior_Team")}, becoming the youngest driver in Formula One history at the Australian Grand Prix. Following several points finishes in his debut season, Verstappen retained his seat for 2016 before being promoted to parent team Red Bull after four rounds. On debut for Red Bull, aged 18, Verstappen won the{" "}
      {wikiLink("2016 Spanish Grand Prix", "https://en.wikipedia.org/wiki/2016_Spanish_Grand_Prix")}, becoming the youngest-ever driver to win a Formula One Grand Prix. Verstappen achieved multiple race wins in his 2017 and 2018 campaigns, before finishing third in both the 2019 and 2020 World Drivers' Championships under{" "}
      {wikiLink("Honda power", "https://en.wikipedia.org/wiki/Honda_in_Formula_One")}.

      <br/><br/>

      Verstappen won his maiden title in{" "}
      {wikiLink("2021", "https://en.wikipedia.org/wiki/2021_Formula_One_World_Championship")} after overtaking{" "}
      {wikiLink("Lewis Hamilton", "https://en.wikipedia.org/wiki/Lewis_Hamilton")} on the final lap of the{" "}
      {wikiLink("2021 Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2021_Abu_Dhabi_Grand_Prix")}, becoming the{" "}
      {wikiLink("first World Drivers' Champion from the Netherlands", "https://en.wikipedia.org/wiki/Formula_One_drivers_from_the_Netherlands")}. Verstappen won the next two championships in{" "}
      {wikiLink("2022", "https://en.wikipedia.org/wiki/2022_Formula_One_World_Championship")} and{" "}
      {wikiLink("2023", "https://en.wikipedia.org/wiki/2023_Formula_One_World_Championship")}, overturning the largest points deficit in Formula One history in the former and breaking numerous records across both seasons. He secured his fourth consecutive title in{" "}
      {wikiLink("2024", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship")} after winning nine Grands Prix, including a widely acclaimed wet-weather performance in{" "}
      {wikiLink("São Paulo", "https://en.wikipedia.org/wiki/2024_S%C3%A3o_Paulo_Grand_Prix")}, to become the first driver to win the championship driving for a third-placed constructor in{" "}
      {wikiLink("41 years", "https://en.wikipedia.org/wiki/1983_Formula_One_World_Championship")}.
    
      <br/><br/>
   
      As of the{" "}
      {wikiLink("2025 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2025_Bahrain_Grand_Prix")}, Verstappen has achieved 64 race wins, 41 pole positions, 33 fastest laps and 114 podiums in Formula One. In addition to being the youngest Grand Prix winner, he holds several{" "}
      {wikiLink("Formula One records", "https://en.wikipedia.org/wiki/List_of_Formula_One_driver_records")}, including the{" "}
      {wikiLink("most wins in a season", "https://en.wikipedia.org/wiki/List_of_Formula_One_driver_records#Most_wins_in_a_season")} (19), the{" "}
      {wikiLink("most podium finishes in a season", "https://en.wikipedia.org/wiki/List_of_Formula_One_driver_records#Most_podium_finishes_in_a_season")} (21), the{" "}
      {wikiLink("most consecutive wins", "https://en.wikipedia.org/wiki/List_of_Formula_One_driver_records#Most_consecutive_wins")} (10), and the{" "}
      {wikiLink("most consecutive pole positions", "https://en.wikipedia.org/wiki/List_of_Formula_One_driver_records#Most_consecutive_pole_positions")} (8, shared with{" "}
      {wikiLink("Ayrton Senna", "https://en.wikipedia.org/wiki/Ayrton_Senna")}). Verstappen is contracted to remain at Red Bull until at least the end of the 2028 season. Verstappen was listed in the 2024 issue of{" "}
      {wikiLink("Time", "https://en.wikipedia.org/wiki/Time_(magazine)")} as one of the{" "}
      {wikiLink("100 most influential people globally", "https://en.wikipedia.org/wiki/Time_100")}, and was appointed an{" "}
      {wikiLink("Officer of the Order of Orange-Nassau", "https://en.wikipedia.org/wiki/Officer_of_the_Order_of_Orange-Nassau")} in 2022.   
  </>
);

export default summary;
