const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const background = (
  <>
    Lance Strulovitch was born on 29 October 1998 in{" "}
    {wikiLink("Montreal", "https://en.wikipedia.org/wiki/Montreal")}. Stroll is the son of Canadian billionaire businessman{" "}
    {wikiLink("Lawrence Stroll", "https://en.wikipedia.org/wiki/Lawrence_Stroll")} (part-owner of the{" "}
    {wikiLink("Aston Martin Formula One team", "https://en.wikipedia.org/wiki/Aston_Martin_in_Formula_One")}) and Belgian fashion designer Claire-Anne Callens, and has an older sister named{" "}
    {wikiLink("Chloe", "https://en.wikipedia.org/wiki/Chloe_Stroll")}. His parents are divorced and his father has since remarried to Raquel Diniz. He is of{" "}
    {wikiLink("Russian Jewish", "https://en.wikipedia.org/wiki/Russian_Jewish")} descent from his father's side. Stroll races under the Canadian flag and holds both Canadian and Belgian citizenship. 
    He is multilingual, speaking{" "}
    {wikiLink("English", "https://en.wikipedia.org/wiki/English_language")},{" "}
    {wikiLink("French", "https://en.wikipedia.org/wiki/French_language")},{" "}
    {wikiLink("Flemish Dutch", "https://en.wikipedia.org/wiki/Flemish_dialects")}, and{" "}
    {wikiLink("Italian", "https://en.wikipedia.org/wiki/Italian_language")}.
  </>
);

export default background;
