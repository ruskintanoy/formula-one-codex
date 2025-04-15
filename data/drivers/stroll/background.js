const wikiLink = (text, url) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline"> {text}</a>);
    
  const background = (
    <>
      Lando Norris was born on 13 November 1999 in Bristol, England. His father Adam Norris is a retired pensions manager and is one of Bristol's wealthiest people as well as the 501st-richest person in the country (as of 2018).
  
      <br /><br />
  
      His mother Cisca (née Wauman) is from the Flanders region of Belgium. He has three siblings — two younger sisters, and an older brother Oliver, who was also involved in{" "}
      {wikiLink("karting", "https://en.wikipedia.org/wiki/Karting")} on a competitive level until 2014.
  
      <br /><br />
  
      Norris holds both British and Belgian citizenship, and speaks a small amount of Flemish Dutch. In his early childhood, Norris tried horse riding, then quad biking and motorcycle riding before moving into karting after his father took him to watch the national British Karting Championships at age seven.
  
      <br /><br />
  
      Norris was educated at Millfield School in Street, Somerset. He left school without taking his GCSEs, but studied physics and mathematics with a full-time personal tutor. His family later moved to Glastonbury to allow him to become a day pupil and to pursue his racing career, citing{" "}
      {wikiLink("Valentino Rossi", "https://en.wikipedia.org/wiki/Valentino_Rossi")} as an inspiration.
  
      <br /><br />
  
      At the start of his F1 career, he initially resided in Woking near the McLaren team headquarters, but later moved to Monaco in 2022 for financial reasons.
  
      <br /><br />
  
      Between August 2021 and September 2022, Norris dated Portuguese model Luísa Oliveira. Norris has stated that he and Oliveira were subjected to abuse and death threats from online trolls.
    </>
  );
  
  export default background;
  