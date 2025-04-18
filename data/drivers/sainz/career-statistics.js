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
    { label: "Entries", value: 205 },
    { label: "Starts", value: 203 },
    { label: "Pole Positions", value: 6 },
    { label: "Front Row Starts", value: 14 },
    { label: "Race Wins", value: 4 },
    { label: "Podiums", value: 26 },
    { label: "Fastest Laps", value: 4 },
    { label: "Points", value: 1272.5 },
    { label: "Laps Raced", value: 10727 },
    { label: "Distance Raced", value: "53,470 km (33,220 mi)" },
    { label: "Races Led", value: 21 },
    { label: "Laps Led", value: 237 },
    { label: "Distance Led", value: "1,262 km (784 mi)" },
    { label: "Doubles", value: 3 },
    { label: "Sprint Podiums", value: 5 },
  ],
};

export default careerStatistics;
