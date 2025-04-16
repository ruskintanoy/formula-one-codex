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
    { label: "Entries", value: 353 },
    { label: "Starts", value: 354 },
    { label: "Pole Positions", value: 104 },
    { label: "Front Row Starts", value: 176 },
    { label: "Race Wins", value: 105 },
    { label: "Podiums", value: 202 },
    { label: "Fastest Laps", value: 67 },
    { label: "Points", value: 4862.5 },
    { label: "Laps Raced", value: 19927 },
    { label: "Distance Raced", value: "100,278 km (62,310 mi)" },
    { label: "Races Led", value: 190 },
    { label: "Laps Led", value: 5485 },
    { label: "Distance Led", value: "27,959 km (17,373 mi)" },
    { label: "Doubles", value: 61 },
    { label: "Hat-Tricks", value: 19 },
    { label: "Grand Chelems", value: 6 },
    { label: "Sprint Poles", value: 1 },
    { label: "Sprint Podiums", value: 4 },
    { label: "Sprint Fastest Laps", value: 1 },
  ],
};

export default careerStatistics;
