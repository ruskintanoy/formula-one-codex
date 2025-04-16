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
    { label: "Entries", value: 146 },
    { label: "Starts", value: 144 },
    { label: "Pole Positions", value: 26 },
    { label: "Front Row Starts", value: 38 },
    { label: "Race Wins", value: 8 },
    { label: "Podiums", value: 42, },
    { label: "Fastest Laps", value: 10 },
    { label: "Points", value: 1430 },
    { label: "Laps Raced", value: 7507 },
    { label: "Distance Raced", value: "38,213 km (23,744 mi)" },
    { label: "Races Led", value: 39 },
    { label: "Laps Led", value: 779 },
    { label: "Distance Led", value: "3,987 km (2,477 mi)" },
    { label: "Doubles", value: 5 }, // Pole & Win same weekend
    { label: "Hat-Tricks", value: 2 }, // Pole, Win, Fastest Lap
    { label: "Grand Chelems", value: 1 },
    { label: "Sprint Poles", value: 1 },
    { label: "Sprint Podiums", value: 6 },
    { label: "Sprint Fastest Laps", value: 2 },
  ],
};

export default careerStatistics;
