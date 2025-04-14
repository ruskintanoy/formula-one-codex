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
      Championships: "4 (2021, 2022, 2023, 2024)",
      Races: "213 (213 starts)",
      Poles: 41,
      Wins: 64,
      Podiums: 114,
      "Fastest Laps": 33,
      Points: 3092.5,
      "First Race": wikiLink("2015 Australian Grand Prix", "https://en.wikipedia.org/wiki/2015_Australian_Grand_Prix"),
      "Last Win": wikiLink("2025 Japanese Grand Prix", "https://en.wikipedia.org/wiki/2025_Japanese_Grand_Prix"),
    }

export default stats;
