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
    { label: "Entries", value: 227 },
    { label: "Starts", value: 224 },
    { label: "Pole Positions", value: 0 },
    { label: "Front Row Starts", value: 2 },
    { label: "Race Wins", value: 0 },
    { label: "Podiums", value: 0 },
    { label: "Fastest Laps", value: 2 },
    { label: "Points", value: 571 },
    { label: "Laps Raced", value: 11513 },
    { label: "Distance Raced", value: "58,587 km (36,404 mi)" },
    { label: "Races Led", value: 3 },
    { label: "Laps Led", value: 43 },
    { label: "Distance Led", value: "194 km (121 mi)" },
    { label: "Sprint Fastest Laps", value: 1 },
  ],
};

export default careerStatistics;
