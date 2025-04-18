const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const background = (
  <>
    Liam Lawson was born on 11 February 2002 in{" "}
    {wikiLink("Hastings", "https://en.wikipedia.org/wiki/Hastings,_New_Zealand")}, New Zealand. He was raised in{" "}
    {wikiLink("Pukekohe", "https://en.wikipedia.org/wiki/Pukekohe")}, which was home to{" "}
    {wikiLink("Pukekohe Park Raceway", "https://en.wikipedia.org/wiki/Pukekohe_Park_Raceway")}, located in the{" "}
    {wikiLink("Auckland Region", "https://en.wikipedia.org/wiki/Auckland_Region")} of the{" "}
    {wikiLink("North Island", "https://en.wikipedia.org/wiki/North_Island")}. His parents sold their house to fund his racing career.

    <br /><br />

    Lawson selected the number 30 as his personal driver number in{" "}
    {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")}, which he had used since age eight in honour of his karting mentor.
  </>
);

export default background;
