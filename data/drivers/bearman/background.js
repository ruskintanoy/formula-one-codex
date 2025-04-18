const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const background = (
  <>
    Bearman was born on 8 May 2005 to David and Terri Bearman in{" "}
    {wikiLink("Havering", "https://en.wikipedia.org/wiki/London_Borough_of_Havering")}, London. He has a younger brother, Thomas Bearman (who is also a racing driver), and a sister. His father is the founder and chief executive officer of the insurance firm Aventum Group. Bearman grew up in{" "}
    {wikiLink("Chelmsford", "https://en.wikipedia.org/wiki/Chelmsford")}, Essex, where he attended{" "}
    {wikiLink("King Edward VI Grammar School", "https://en.wikipedia.org/wiki/King_Edward_VI_Grammar_School,_Chelmsford")}. Bearman left school at the age of 16 to join the{" "}
    {wikiLink("Ferrari Driver Academy", "https://en.wikipedia.org/wiki/Ferrari_Driver_Academy")} in{" "}
    {wikiLink("Modena", "https://en.wikipedia.org/wiki/Modena")}, Italy.

    <br /><br />

    Bearman chose 87 as his permanent racing number for{" "}
    {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")}, as it was the number that he first used in{" "}
    {wikiLink("kart racing", "https://en.wikipedia.org/wiki/Kart_racing")}.
  </>
);

export default background;
