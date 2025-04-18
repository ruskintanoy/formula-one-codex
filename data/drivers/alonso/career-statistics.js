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
    { label: "Entries", value: 401 },
    { label: "Starts", value: 398 },
    { label: "Pole Positions", value: 22 },
    { label: "Front Row Starts", value: 42 },
    { label: "Race Wins", value: 32 },
    { label: "Podiums", value: 106 },
    { label: "Fastest Laps", value: 26 },
    { label: "Points", value: 2337 },
    { label: "Laps Raced", value: 21462 },
    { label: "Distance Raced", value: "107,347 km (66,702 mi)" },
    { label: "Races Led", value: 87 },
    { label: "Laps Led", value: 1773 },
    { label: "Distance Led", value: "8,676 km (5,391 mi)" },
    { label: "Doubles", value: 14 },
    { label: "Hat-Tricks", value: 5 },
    { label: "Grand Chelems", value: 1 },
  ],
};

export default careerStatistics;
