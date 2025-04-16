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
  "Seasons Active": "2001 - Present",
  Championships: 0,
  Races: "408  (405 starts)",
  Poles: 22,
  Wins: 32,
  Podiums: 106,
  "Fastest Laps": 26,
  Points: 2337,
  "First Race": wikiLink("2019 Australian Grand Prix", "https://en.wikipedia.org/wiki/2019_Australian_Grand_Prix"),
  "Last Win": wikiLink("2023 Spanish Grand Prix", "https://en.wikipedia.org/wiki/2013_Spanish_Grand_Prix"),
};

export default stats;
