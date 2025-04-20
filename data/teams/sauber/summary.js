const wikiLink = (text, url) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
      {text}
    </a>
  );
  
  const summary = (
    <>
      <p>
        <b>Sauber Motorsport AG</b>, currently competing in{" "}
        {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} as <b>Stake F1 Team Kick Sauber</b>, and also known simply as <b>Kick Sauber</b> or <b>Sauber</b>, is a Swiss{" "}
        {wikiLink("motorsport", "https://en.wikipedia.org/wiki/Motorsport")} engineering company.
        It was founded in 1970 (as PP Sauber AG) by{" "}
        {wikiLink("Peter Sauber", "https://en.wikipedia.org/wiki/Peter_Sauber")}, who progressed through{" "}
        {wikiLink("hillclimbing", "https://en.wikipedia.org/wiki/Hillclimbing")} and the{" "}
        {wikiLink("World Sportscar Championship", "https://en.wikipedia.org/wiki/World_Sportscar_Championship")} to reach{" "}
        {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} in{" "}
        {wikiLink("1993", "https://en.wikipedia.org/wiki/1993_Formula_One_World_Championship")}.
        Sauber operated under their own name from{" "}
        {wikiLink("1993", "https://en.wikipedia.org/wiki/1993_Formula_One_World_Championship")} until{" "}
        {wikiLink("2005", "https://en.wikipedia.org/wiki/2005_Formula_One_World_Championship")} and from{" "}
        {wikiLink("2011", "https://en.wikipedia.org/wiki/2011_Formula_One_World_Championship")} until{" "}
        {wikiLink("2018", "https://en.wikipedia.org/wiki/2018_Formula_One_World_Championship")}.
        They were known as{" "}
        {wikiLink("BMW Sauber", "https://en.wikipedia.org/wiki/BMW_in_Formula_One#BMW_Sauber")} from{" "}
        {wikiLink("2006", "https://en.wikipedia.org/wiki/2006_Formula_One_World_Championship")} to{" "}
        {wikiLink("2010", "https://en.wikipedia.org/wiki/2010_Formula_One_World_Championship")} and as{" "}
        {wikiLink("Alfa Romeo", "https://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One")} from{" "}
        {wikiLink("2019", "https://en.wikipedia.org/wiki/2019_Formula_One_World_Championship")} to{" "}
        {wikiLink("2023", "https://en.wikipedia.org/wiki/2023_Formula_One_World_Championship")} in partnership deals with{" "}
        {wikiLink("BMW", "https://en.wikipedia.org/wiki/BMW")} and{" "}
        {wikiLink("Alfa Romeo", "https://en.wikipedia.org/wiki/Alfa_Romeo")}, respectively.
        Sauber returned in{" "}
        {wikiLink("2024", "https://en.wikipedia.org/wiki/2024_Formula_One_World_Championship")} as <b>Stake F1 Team Kick Sauber</b>, and is set to be the{" "}
        {wikiLink("Audi", "https://en.wikipedia.org/wiki/Audi_in_Formula_One")} works team from{" "}
        {wikiLink("2026", "https://en.wikipedia.org/wiki/2026_Formula_One_World_Championship")} onwards, with the German outfit planning to acquire the Swiss team.
      </p>

      <br /><br />
  
      <p>
        Having not won a Grand Prix as an independent, the team was rebranded to{" "}
        {wikiLink("BMW Sauber", "https://en.wikipedia.org/wiki/BMW_Sauber")} in 2006 and competed as BMW Sauber from 2006 to 2009, finishing second in 2007 and third in 2008 in the Constructors' Championship,
        and scoring their lone grand prix victory together with Robert Kubica at the{" "}
        {wikiLink("2008 Canadian Grand Prix", "https://en.wikipedia.org/wiki/2008_Canadian_Grand_Prix")}.
        At the end of a less successful 2009 season, BMW pulled out of Formula One and the team's future remained uncertain for several months until total control was handed back to Peter Sauber and granted a 2010 entry.
        Due to issues with the{" "}
        {wikiLink("Concorde Agreement", "https://en.wikipedia.org/wiki/Concorde_Agreement")}, the team remained as "BMW Sauber" for the 2010 season.
        In March 2010, Peter Sauber announced plans to change the team name but the FIA announced that they would have to wait until the end of the season.
        At the beginning of the{" "}
        {wikiLink("2011", "https://en.wikipedia.org/wiki/2011_Formula_One_World_Championship")} season, the team dropped BMW from their name.
      </p>

      <br /><br />
  
      <p>
        Until mid-2016, Peter Sauber held a controlling 66.6% stake in the team, with the remainder belonging to then CEO{" "}
        {wikiLink("Monisha Kaltenborn", "https://en.wikipedia.org/wiki/Monisha_Kaltenborn")}; she had been a leading figure in the team since BMW's withdrawal.
        The team was sold during the 2016 season to Swiss investment firm Longbow Finance S.A, with Pascal Picci taking over Peter Sauber's role as chairman of the board and president.
        Audi bought a minority stake in the team in January 2023 in preparation of their Formula One entry.
        The team operates in a 15,600 m² (168,000 sq ft) facility in{" "}
        {wikiLink("Hinwil", "https://en.wikipedia.org/wiki/Hinwil")},{" "}
        {wikiLink("Switzerland", "https://en.wikipedia.org/wiki/Switzerland")}.
      </p>
    </>
  );
  
  export default summary;
  
  