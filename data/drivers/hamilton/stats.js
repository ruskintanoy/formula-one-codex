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
  "Seasons Active": "2007 - Present",
  Championships: "7 (2008, 2014-2015, 2017-2020)",
  Races: "360 (360 starts)",
  Poles: 104,
  Wins: 105,
  Podiums: 202,
  "Fastest Laps": 67,
  Points: 4887.5,
  "First Race": wikiLink("2007 Australian Grand Prix", "https://en.wikipedia.org/wiki/2007_Australian_Grand_Prix"),
  "Last Win": wikiLink("2025 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2025_Bahrain_Grand_Prix"),
};

export default stats;
