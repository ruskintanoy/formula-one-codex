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
    { label: "Entries", value: 87 },
    { label: "Starts", value: 84 },
    { label: "Pole Positions", value: 0 },
    { label: "Race Wins", value: 0 },
    { label: "Podiums", value: 0 },
    { label: "Fastest Laps", value: 0 },
    { label: "Points", value: 91 },
    { label: "Laps Raced", value: 4281 },
    { label: "Distance Raced", value: "21,393 km (13,293 mi)" },
    { label: "Races Led", value: 1 },
    { label: "Laps Led", value: 5 },
    { label: "Distance Led", value: "26 km (16 mi)" },
  ],
};

export default careerStatistics;
