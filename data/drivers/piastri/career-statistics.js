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

const careerStatistics = {
  updatedTo: wikiLink("2025 Australian Grand Prix", "https://f1.fandom.com/wiki/2025_Australian_Grand_Prix"),
  stats: [
    { label: "Entries", value: 43 },
    { label: "Starts", value: 43 },
    { label: "Pole Positions", value: 1, link: "https://en.wikipedia.org/wiki/Pole_position" },
    { label: "Front Row Starts", value: 6 },
    { label: "Race Wins", value: 4, link: "https://en.wikipedia.org/wiki/Victory" },
    { label: "Podiums", value: 11, link: "https://en.wikipedia.org/wiki/Podium" },
    { label: "Fastest Laps", value: 3, link: "https://en.wikipedia.org/wiki/Fastest_lap" },
    { label: "Points", value: 389, link: "https://en.wikipedia.org/wiki/Points" },
    { label: "Laps Raced", value: 2206 },
    { label: "Distance Raced", value: "11,043 km (6,862 mi)" },
    { label: "Races Led", value: 9 },
    { label: "Laps Led", value: 124 },
    { label: "Distance Led", value: "657 km (408 mi)" },
    { label: "Sprint Poles", value: 2 },
    { label: "Sprint Wins", value: 2 },
    { label: "Sprint Podiums", value: 5 },
  ],
};

export default careerStatistics;
