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
  Races: "132 (132 starts)",
  Poles: 5,
  Wins: 3,
  Podiums: 18,
  "Fastest Laps": 8,
  Points: 777,
  "First Race": wikiLink("2019 Australian Grand Prix", "https://en.wikipedia.org/wiki/2019_Australian_Grand_Prix"),
  "Last Win": wikiLink("2024 Las Vegas Grand Prix", "https://en.wikipedia.org/wiki/2024_Las_Vegas_Grand_Prix"),
};

export default stats;
