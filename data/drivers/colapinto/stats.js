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
  "Seasons Active": "2024 - Present",
  Championships: 0,
  Races: "5 (5 starts)",
  Poles: 0,
  Wins: 0,
  Podiums: 0,
  "Fastest Laps": 0,
  Points: 0,
  "First Race": wikiLink("2024 Abu Dhabi Grand Prix", "https://en.wikipedia.org/wiki/2024_Abu_Dhabi_Grand_Prix"),
};

export default stats;
