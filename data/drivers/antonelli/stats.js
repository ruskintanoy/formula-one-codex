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
  "Seasons Active": "2025 - Present",
  Championships: 0,
  Races: "4 (4 starts)",
  Poles: 0,
  Wins: 0,
  Podiums: 0,
  "Fastest Laps": 1,
  Points: 30,
  "First Race": wikiLink("2025 Australian Grand Prix", "https://en.wikipedia.org/wiki/2019_Australian_Grand_Prix"),
};

export default stats;
