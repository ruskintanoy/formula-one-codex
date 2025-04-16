const wikiLink = (text, url) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-500 hover:underline"
  >
    {text}
  </a>
);

const stats = {
  "Seasons Active": "2010 - Present",
  Championships: 0,
  Races: "234 (231 starts)",
  Poles: 1,
  Wins: 0,
  Podiums: 0,
  "Fastest Laps": 2,
  Points: 577,
  "First Race": wikiLink("2010 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2010_Bahrain_Grand_Prix"),
};

export default stats;
