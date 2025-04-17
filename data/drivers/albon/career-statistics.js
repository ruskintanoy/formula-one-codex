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
  updatedTo: wikiLink("2025 Australian Grand Prix", "https://en.wikipedia.org/wiki/2025_Australian_Grand_Prix"),
  stats: [
    { label: "Entries", value: 102 },
    { label: "Starts", value: 101 },
    { label: "Pole Positions", value: 0 },
    { label: "Race Wins", value: 0 },
    { label: "Podiums", value: 2 },
    { label: "Fastest Laps", value: 0 },
    { label: "Points", value: 240 },
    { label: "Laps Raced", value: 5419 },
    { label: "Distance Raced", value: "27,267 km (16,943 mi)" },
    { label: "Races Led", value: 1 },
    { label: "Laps Led", value: 1 },
    { label: "Distance Led", value: "5 km (3.1 mi)" },
  ],
};

export default careerStatistics;
