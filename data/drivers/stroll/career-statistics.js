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
    { label: "Entries", value: 164 },
    { label: "Starts", value: 163 },
    { label: "Pole Positions", value: 1 },
    { label: "Front Row Starts", value: 2 },
    { label: "Race Wins", value: 0 },
    { label: "Podiums", value: 3 },
    { label: "Fastest Laps", value: 0 },
    { label: "Points", value: 292 },
    { label: "Laps Raced", value: 8734 },
    { label: "Distance Raced", value: "43,955 km (27,312 mi)" },
    { label: "Races Led", value: 1 },
    { label: "Laps Led", value: 32 },
    { label: "Distance Led", value: "171 km (106 mi)" },
  ],
};

export default careerStatistics;
