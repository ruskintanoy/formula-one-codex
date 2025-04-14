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

const background = (
  <>
    
      Max Emilian Verstappen was born on 30 September 1997 in Hasselt, Belgium to{" "}
      {wikiLink("Jos Verstappen", "https://en.wikipedia.org/wiki/Jos_Verstappen")} and{" "}
      {wikiLink("Sophie Kumpen", "https://en.wikipedia.org/wiki/Sophie_Kumpen")}. Verstappen's parents separated 
      when he was young, after which he lived with his father. His younger sister, Victoria, lived with their mother. 
      Verstappen has three younger half-siblings from his father: a sister from Jos's second marriage and a brother 
      and sister from Jos's current marriage.

    <br />

      His family has a long association with motor sports: his father is a Dutch former{" "}
      {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} driver, his Belgian mother 
      competed in{" "}
      {wikiLink("karting", "https://en.wikipedia.org/wiki/Kart_racing")}, and his first cousin once removed,{" "}
      {wikiLink("Anthony Kumpen", "https://en.wikipedia.org/wiki/Anthony_Kumpen")}, competed in endurance 
      racing and is a two-time{" "}
      {wikiLink("NASCAR Whelen Euro Series", "https://en.wikipedia.org/wiki/NASCAR_Whelen_Euro_Series")} 
      champion, currently serving as the team manager for{" "}
      {wikiLink("PK Carsport", "https://en.wikipedia.org/wiki/PK_Carsport")}.    

    <br/><br/>
    
      Verstappen initially attended a secondary school in Maaseik, before moving into private tutoring. 
      He admitted that he used to leave class early to attend races across Europe with his father.   
  </>
);

export default background;
