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
  "Seasons Active": "2016 - Present",
  Championships: 0,
  Races: "160 (160 starts)",
  Poles: 0,
  Wins: 1,
  Podiums: 4,
  "Fastest Laps": 1,
  Points: 459,
  "First Race": wikiLink("2016 Belgian Grand Prix", "https://en.wikipedia.org/wiki/2019_Australian_Grand_Prix"),
  "Last Win": wikiLink("2021 Hungarian Grand Prix", "https://en.wikipedia.org/wiki/2025_Australian_Grand_Prix"),
};

export default stats;
