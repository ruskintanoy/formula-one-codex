const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const background = (
  <>
    Pierre Jean-Jacques Gasly was born on 7 February 1996 in{" "}
    {wikiLink("Rouen", "https://en.wikipedia.org/wiki/Rouen")}, France, to father Jean-Jacques Gasly and mother Pascale. Gasly is the youngest of five and has four{" "}
    {wikiLink("half brothers", "https://en.wikipedia.org/wiki/Half_brother")}: two{" "}
    {wikiLink("maternal", "https://en.wikipedia.org/wiki/Maternal")} from his mother's previous marriage, Nicolas Caron and Cyril Caron; and two{" "}
    {wikiLink("paternal", "https://en.wikipedia.org/wiki/Paternal")} from his father's previous marriage, Phillipe Gasly and Paul Gasly. Gasly was raised Christian and routinely makes the sign of the cross to bless himself before races.

    <br /><br />

    Gasly's family has long been involved in{" "}
    {wikiLink("motorsports", "https://en.wikipedia.org/wiki/Motorsport")}. His grandfather competed in{" "}
    {wikiLink("karting", "https://en.wikipedia.org/wiki/Kart_racing")}, his grandmother a kart champion, and his father Jean Jacques has also competed in various categories of racing including{" "}
    {wikiLink("karting", "https://en.wikipedia.org/wiki/Kart_racing")},{" "}
    {wikiLink("endurance racing", "https://en.wikipedia.org/wiki/Endurance_racing_(motorsport)")} and{" "}
    {wikiLink("rallying", "https://en.wikipedia.org/wiki/Rallying")}. His father stopped rallying when he 'fell off [a] mountain' after his co-driver made a mistake reading the pace note. At the age of six, Gasly first experienced karting at a local karting track in{" "}
    {wikiLink("Anneville-Ambourville", "https://en.wikipedia.org/wiki/Anneville-Ambourville")}. He was 13 years old when he left Rouen for Le Mans after his commitment for competitive racing.

    <br /><br />

    Gasly grew up alongside{" "}
    {wikiLink("Anthoine Hubert", "https://en.wikipedia.org/wiki/Anthoine_Hubert")}; karting with him since the age of seven, being educated at the same private school and having resided together as{" "}
    {wikiLink("roommates", "https://en.wikipedia.org/wiki/Roommate")} for several years. He has been close friends with{" "}
    {wikiLink("Charles Leclerc", "https://en.wikipedia.org/wiki/Charles_Leclerc")} and{" "}
    {wikiLink("Esteban Ocon", "https://en.wikipedia.org/wiki/Esteban_Ocon")} since a young age. However, his relationship with Ocon deteriorated during their karting career. In 2019 he moved to{" "}
    {wikiLink("Milan", "https://en.wikipedia.org/wiki/Milan")}. Besides his native French, Gasly also speaks Italian and English.

    <br /><br />

    Gasly has been dating Francisca Gomes since October 2022. Gomes is a model and influencer and she is signed to the Portugal-based modeling agency Central Models. The couple went official in the start of 2023.
  </>
);

export default background;
