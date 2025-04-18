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
    { label: "Entries", value: 8 },
    { label: "Starts", value: 8 },
    { label: "Pole Positions", value: 0 },
    { label: "Race Wins", value: 0 },
    { label: "Podiums", value: 0 },
    { label: "Fastest Laps", value: 0 },
    { label: "Points", value: 6 },
    { label: "Laps Raced", value: 293 },
    { label: "Distance Raced", value: "1,514 km (941 mi)" },
  ],
};

export default careerStatistics;
