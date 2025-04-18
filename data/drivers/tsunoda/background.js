const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const background = (
  <>
    Tsunoda was born on May 11, 2000, in{" "}
    {wikiLink("Sagamihara", "https://en.wikipedia.org/wiki/Sagamihara")},{" "}
    {wikiLink("Kanagawa", "https://en.wikipedia.org/wiki/Kanagawa_Prefecture")}. He attended LCA International Elementary School and Nihon University Third High School before transferring to Wako High School in April 2017. Tsunoda started his studies at the Faculty of Sport Management of{" "}
    {wikiLink("Nippon Sport Science University", "https://en.wikipedia.org/wiki/Nippon_Sport_Science_University")} in April 2019 but later took a leave of absence and eventually withdrew to concentrate on his racing career.
  </>
);

export default background;
