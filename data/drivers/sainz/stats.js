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
  "Seasons Active": "2015 - Present",
  Championships: 0,
  Races: "213 (210 starts)",
  Poles: 6,
  Wins: 4,
  Podiums: 27,
  "Fastest Laps": 4,
  Points: 1273.5,
  "First Race": wikiLink("2015 Australian Grand Prix", "https://en.wikipedia.org/wiki/2015_Australian_Grand_Prix"),
  "Last Win": wikiLink("2024 Mexico city Grand Prix", "https://en.wikipedia.org/wiki/2024_Mexico_City_Grand_Prix"),
};

export default stats;
