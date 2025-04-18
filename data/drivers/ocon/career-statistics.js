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
    { label: "Entries", value: "154" },
    { label: "Starts", value: "154" },
    { label: "Pole Positions", value: "0" },
    { label: "Race Wins", value: "1" },
    { label: "Podiums", value: "4" },
    { label: "Fastest Laps", value: "1" },
    { label: "Points", value: "445" },
    { label: "Laps Raced", value: "7,977" },
    { label: "Distance Raced", value: "40,391 km (25,098 mi)" },
    { label: "Races Led", value: "3" },
    { label: "Laps Led", value: "66" },
    { label: "Distance Led", value: "291 km (181 mi)" },
  ],
};

export default careerStatistics;
