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
  "Seasons Active": "2021 - Present",
  Championships: 0,
  Races: "94 (91 starts)",
  Poles: 0,
  Wins: 0,
  Podiums: 0,
  "Fastest Laps": 1,
  Points: 96,
  "First Race": wikiLink("2021 Bahrain Grand Prix", "https://en.wikipedia.org/wiki/2021_Bahrain_Grand_Prix"),
};

export default stats;
