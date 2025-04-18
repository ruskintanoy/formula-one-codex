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
    { label: "Entries", value: 151 },
    { label: "Starts", value: 150 },
    { label: "Pole Positions", value: 0 },
    { label: "Front Row Starts", value: 1 },
    { label: "Race Wins", value: 1 },
    { label: "Podiums", value: 5 },
    { label: "Fastest Laps", value: 3 },
    { label: "Points", value: 436 },
    { label: "Laps Raced", value: 7918 },
    { label: "Distance Raced", value: "39,726 km (24,685 mi)" },
    { label: "Races Led", value: 1 },
    { label: "Laps Led", value: 26 },
    { label: "Distance Led", value: "151 km (94 mi)" },
    { label: "Sprint Podiums", value: 1 },
  ],
};

export default careerStatistics;
