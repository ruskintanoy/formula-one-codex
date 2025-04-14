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
  Championships: 0,
  Races: "132 (131 starts)",
  Poles: 10,
  Wins: 5,
  Podiums: 29,
  "Fastest Laps": 14,
  Points: 1069,
  "First Race": wikiLink("2019 Australian Grand Prix", "https://en.wikipedia.org/wiki/2019_Australian_Grand_Prix"),
  "Last Win": wikiLink("2025 Australian Grand Prix", "https://en.wikipedia.org/wiki/2025_Australian_Grand_Prix"),
};

export default stats;
