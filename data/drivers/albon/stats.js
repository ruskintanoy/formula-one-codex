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
  "Seasons Active": "2019 - Present",
  Championships: 0,
  Races: "110 (108 starts)",
  Poles: 0,
  Wins: 0,
  Podiums: 2,
  "Fastest Laps": 0,
  Points: 258,
  "First Race": wikiLink("2019 Australian Grand Prix", "https://en.wikipedia.org/wiki/2019_Australian_Grand_Prix"),
};

export default stats;
