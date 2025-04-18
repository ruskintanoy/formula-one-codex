const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const background = (
  <>
    Hülkenberg was born in{" "}
    {wikiLink("Emmerich am Rhein", "https://en.wikipedia.org/wiki/Emmerich_am_Rhein")}, North Rhine-Westphalia,{" "}
    {wikiLink("West Germany", "https://en.wikipedia.org/wiki/West_Germany")} to Klaus Dieter and Susanne Hülkenberg. Dieter Hülkenberg owns a shipping company, Hülkenberg Spedition e. K, based in Emmerich am Rhein. Hülkenberg trained as a freight forwarding agent at his father's company. He is fluent in{" "}
    German, Dutch, French, and English.

    <br /><br />

    Hülkenberg lives in{" "}
    {wikiLink("Monaco", "https://en.wikipedia.org/wiki/Monaco")}. He is married to Lithuanian fashion designer Eglė Ruškytė, having been in a relationship with her since 2015. Together they have one daughter born in 2021.

    <br /><br />

    Hülkenberg was previously managed by{" "}
    {wikiLink("Willi Weber", "https://en.wikipedia.org/wiki/Willi_Weber")}, the long-time manager of{" "}
    {wikiLink("Michael Schumacher", "https://en.wikipedia.org/wiki/Michael_Schumacher")}. Weber predicted that Hülkenberg would be ready for{" "}
    {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} by{" "}
    {wikiLink("2008", "https://en.wikipedia.org/wiki/2008_Formula_One_World_Championship")}. He also praised Hülkenberg as an "unbelievable talent" and said he reminded him of Schumacher as a young driver. He also stated that he nicknamed him{" "}
    {wikiLink("The Hulk", "https://en.wikipedia.org/wiki/Hulk")}, after the fictional superhero, in reference to Hülkenberg changing his personality whilst at the wheel.
  </>
);

export default background;
