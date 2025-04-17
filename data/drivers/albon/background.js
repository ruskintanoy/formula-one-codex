const wikiLink = (text, url) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline"> {text}</a>);
    
    const background = (
      <>
        Albon was born at the{" "}
        {wikiLink("Portland Hospital", "https://en.wikipedia.org/wiki/Portland_Hospital")} in the{" "}
        {wikiLink("City of Westminster", "https://en.wikipedia.org/wiki/City_of_Westminster")}, London, England, on 23 March 1996. His father,{" "}
        {wikiLink("Nigel Albon", "https://en.wikipedia.org/wiki/Nigel_Albon")} is a British former racing driver who participated in the{" "}
        {wikiLink("British Touring Car Championship", "https://en.wikipedia.org/wiki/British_Touring_Car_Championship")} and{" "}
        {wikiLink("Porsche Carrera Cup", "https://en.wikipedia.org/wiki/Porsche_Carrera_Cup")}. His mother, Kankamol, is from Thailand. His uncle,{" "}
        {wikiLink("Mark Albon", "https://en.wikipedia.org/wiki/Mark_Albon")}, is a former racing driver who competed in one round of{" "}
        {wikiLink("International Formula 3000", "https://en.wikipedia.org/wiki/International_Formula_3000")}.
    
        <br /><br />
    
        Growing up in{" "}
        {wikiLink("Bures", "https://en.wikipedia.org/wiki/Bures,_England")},{" "}
        {wikiLink("Suffolk", "https://en.wikipedia.org/wiki/Suffolk")} alongside a younger brother, Luca, and three sisters, Chloe, Zoe and Alicia, Albon attended{" "}
        {wikiLink("Ipswich School", "https://en.wikipedia.org/wiki/Ipswich_School")} before leaving to pursue his professional racing career, citing{" "}
        {wikiLink("Michael Schumacher", "https://en.wikipedia.org/wiki/Michael_Schumacher")} and{" "}
        {wikiLink("Valentino Rossi", "https://en.wikipedia.org/wiki/Valentino_Rossi")} as being inspirational figures when he was younger.
    
        <br /><br />
    
        Albon holds{" "}
        {wikiLink("dual", "https://en.wikipedia.org/wiki/Dual_national")} British and Thai nationality, and races under the Thai flag. Albon practises{" "}
        {wikiLink("Buddhism", "https://en.wikipedia.org/wiki/Buddhism")}. Albon and his family own a number of pets, consisting of at least twelve cats, a dog and two horses. He has been publicly dating Chinese{" "}
        {wikiLink("LPGA", "https://en.wikipedia.org/wiki/LPGA")} golfer{" "}
        {wikiLink("Lily He", "https://en.wikipedia.org/wiki/Muni_He")} since 2019.
      </>
    );
    
    export default background;
    
  