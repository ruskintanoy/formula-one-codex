const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const background = (
  <>
    Jack Doohan was born on 20 January 2003 in{" "}
    {wikiLink("Gold Coast, Queensland", "https://en.wikipedia.org/wiki/Gold_Coast,_Queensland")}. He attended{" "}
    {wikiLink("The Southport School", "https://en.wikipedia.org/wiki/The_Southport_School")} throughout his upbringing. Doohan is the son of five-time{" "}
    {wikiLink("Grand Prix motorcycle World Champion", "https://en.wikipedia.org/wiki/List_of_500cc/MotoGP_Motorcycle_World_Champions")}{" "}
    {wikiLink("Mick Doohan", "https://en.wikipedia.org/wiki/Mick_Doohan")}.
  </>
);

export default background;
