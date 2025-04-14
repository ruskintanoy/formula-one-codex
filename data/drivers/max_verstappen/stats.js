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
      Races: "50 (50 starts)",
      Poles: 2,
      Wins: 4,
      Podiums: 13,
      "Fastest Laps": 4,
      Points: 463,
      "First Race": wikiLink("2023 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2023_Bahrain_Grand_Prix"),
      "Last Win": wikiLink("2025 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2025_Bahrain_Grand_Prix"),
    }

export default stats;
