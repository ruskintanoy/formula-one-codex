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
  "Seasons Active": "2017 - Present",
  Championships: 0,
  Races: "173 (170 starts)",
  Poles: 0,
  Wins: 0,
  Podiums: 3,
  "Fastest Laps": 0,
  Points: 302,
  "First Race": wikiLink("2017 Australian Grand Prix", "https://en.wikipedia.org/wiki/2017_Australian_Grand_Prix"),
};

export default stats;
