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
  "Seasons Active": "2018 - Present",
  Championships: 0,
  Races: "153 (151 starts)",
  Poles: 26,
  Wins: 8,
  Podiums: 43,
  "Fastest Laps": 10,
  Points: 1462,
  "First Race": wikiLink("2018 Australian Grand Prix", "https://en.wikipedia.org/wiki/2018_Australian_Grand_Prix"),
  "Last Win": wikiLink("2024 United States Grand Prix", "https://en.wikipedia.org/wiki/2024_United_States_Grand_Prix"),
};

export default stats;
