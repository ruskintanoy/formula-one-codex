const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const background = (
  <>
    Andrea Kimi Antonelli was born on 25 August 2006 in{" "}
    {wikiLink("Bologna", "https://en.wikipedia.org/wiki/Bologna")}, Emilia-Romagna, Italy.

    <br /><br />

    His father{" "}
    {wikiLink("Marco Antonelli", "https://en.wikipedia.org/wiki/Marco_Antonelli")} is a{" "}
    {wikiLink("sportscar racing", "https://en.wikipedia.org/wiki/Sportscar_racing")} driver and owner of{" "}
    <i>AKM Motorsport</i>, a team based in{" "}
    {wikiLink("San Marino", "https://en.wikipedia.org/wiki/San_Marino")} that has competed in the{" "}
    {wikiLink("Italian F4 Championship", "https://en.wikipedia.org/wiki/Italian_F4_Championship")} since{" "}
    {wikiLink("2022", "https://en.wikipedia.org/wiki/2022_Italian_F4_Championship")}.

    <br /><br />

    He formerly operated <i>Antonelli Motorsport</i>, which competed in the{" "}
    {wikiLink("Blancpain GT Series", "https://en.wikipedia.org/wiki/Blancpain_GT_Series")},{" "}
    {wikiLink("Porsche Supercup", "https://en.wikipedia.org/wiki/Porsche_Supercup")} and{" "}
    {wikiLink("International GT Open", "https://en.wikipedia.org/wiki/International_GT_Open")}, winning the{" "}
    {wikiLink("2018 Italian GT Championship", "https://en.wikipedia.org/wiki/2018_Italian_GT_Championship")}.

    <br /><br />

    Antonelli shares his middle name with the forename of{" "}
    {wikiLink("Kimi Räikkönen", "https://en.wikipedia.org/wiki/Kimi_R%C3%A4ikk%C3%B6nen")}, the{" "}
    {wikiLink("2007 Formula One World Drivers' Champion", "https://en.wikipedia.org/wiki/2007_Formula_One_World_Championship")}. He has stated that the name was given by{" "}
    {wikiLink("Enrico Bertaggia", "https://en.wikipedia.org/wiki/Enrico_Bertaggia")} to his father, who wanted a foreign-sounding name after "Andrea", and that he was not named after Räikkönen.

    <br /><br />

    Antonelli attended <i>ITCS Gaetano Salvemini</i> in{" "}
    {wikiLink("Casalecchio di Reno", "https://en.wikipedia.org/wiki/Casalecchio_di_Reno")}, where he studied{" "}
    {wikiLink("international relations", "https://en.wikipedia.org/wiki/International_relations")} and{" "}
    {wikiLink("marketing", "https://en.wikipedia.org/wiki/Marketing")}. He learned to speak English during race weekends.

    <br /><br />

    His father initially encouraged him to pursue{" "}
    {wikiLink("association football", "https://en.wikipedia.org/wiki/Association_football")}, but Antonelli showed greater passion for{" "}
    {wikiLink("motorsport", "https://en.wikipedia.org/wiki/Motorsport")}, leading to his early entry into{" "}
    {wikiLink("karting", "https://en.wikipedia.org/wiki/Karting")}.
  </>
);

export default background;
