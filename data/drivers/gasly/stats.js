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
  Races: "158 (157 starts)",
  Poles: 0,
  Wins: 1,
  Podiums: 5,
  "Fastest Laps": 3,
  Points: 442,
  "First Race": wikiLink("2017 Malaysian Grand Prix", "https://en.wikipedia.org/wiki/2017_Malaysian_Grand_Prix"),
  "Last Win": wikiLink("2020 Italian Grand Prix", "https://en.wikipedia.org/wiki/2020_Italian_Grand_Prix"),
};

export default stats;
