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
  "Seasons Active": "2023 - Present",
  Championships: 0,
  Races: "15 (15 starts)",
  Poles: 0,
  Wins: 0,
  Podiums: 0,
  "Fastest Laps": 0,
  Points: 6,
  "First Race": wikiLink("2023 Dutch Grand Prix", "https://en.wikipedia.org/wiki/2023_Dutch_Grand_Prix"),
};

export default stats;
