const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const background = (
  <>
    Carlos Sainz Vázquez de Castro was born on 1 September 1994 in{" "}
    {wikiLink("Madrid", "https://en.wikipedia.org/wiki/Madrid")}, Spain, to father{" "}
    {wikiLink("Carlos Sainz", "https://en.wikipedia.org/wiki/Carlos_Sainz_Sr.")} and his wife Reyes Vázquez de Castro. His father is a{" "}
    {wikiLink("rally driver", "https://en.wikipedia.org/wiki/Rally_driver")}, who won the{" "}
    {wikiLink("World Rally Championship", "https://en.wikipedia.org/wiki/World_Rally_Championship")} twice in{" "}
    {wikiLink("1990", "https://en.wikipedia.org/wiki/1990_World_Rally_Championship")} and{" "}
    {wikiLink("1992", "https://en.wikipedia.org/wiki/1992_World_Rally_Championship")}, with 26{" "}
    {wikiLink("rally victories", "https://en.wikipedia.org/wiki/List_of_World_Rally_Championship_event_winners")}. Sainz Jr. was mentored by his father throughout his journey to F1.

    <br /><br />

    In 2016, Sainz was named Ambassador of{" "}
    {wikiLink("María de Villota", "https://en.wikipedia.org/wiki/Mar%C3%ADa_de_Villota")}'s Legacy, as he was coached by her at driving school in Madrid. He has spoken about how he was personally affected by her death in 2013, and he has kept a star on his helmet since 2014 in honor of her.
  </>
);

export default background;
