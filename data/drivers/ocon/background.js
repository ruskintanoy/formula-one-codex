const wikiLink = (text, url) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline"> {text}</a>);
    
    const background = (
      <>
        Esteban José Jean-Pierre Ocon-Khelfane was born on 17 September 1996 in{" "}
        {wikiLink("Évreux", "https://en.wikipedia.org/wiki/%C3%89vreux")},{" "}
        {wikiLink("Normandy", "https://en.wikipedia.org/wiki/Normandy")} to Sabrina Khelfane and Laurent Ocon, a mechanic who owns a garage in Évreux. His paternal family is originally from{" "}
        {wikiLink("Málaga", "https://en.wikipedia.org/wiki/M%C3%A1laga")}. While competing in karting, his parents decided to sell their family home, which included his father's garage, to fund his karting career. After selling the house, they lived and travelled to races in a caravan Ocon also used as a motor home. Ocon admitted that he almost gave up on his racing career to work at{" "}
        {wikiLink("McDonald's", "https://en.wikipedia.org/wiki/McDonald%27s")}.
    
        <br /><br />
    
        As of 2022, Ocon lives in{" "}
        {wikiLink("Geneva", "https://en.wikipedia.org/wiki/Geneva")}, Switzerland. Besides his native French language, Ocon also speaks English, Spanish and Italian. In 2023 Ocon began a relationship with model, social media influencer and former{" "}
        {wikiLink("Miss Côte d'Azur", "https://en.wikipedia.org/wiki/Miss_C%C3%B4te_d%27Azur")} Flavy Barla, having split with his previous girlfriend Elena Berri (whom he had started dating in 2018) earlier in 2023.
      </>
    );
    
    export default background;
    
  