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
    { label: "Entries", value: 125 },
    { label: "Starts", value: 125 },
    { label: "Pole Positions", value: 4, link: "https://en.wikipedia.org/wiki/Pole_position" },
    { label: "Front Row Starts", value: 14 },
    { label: "Race Wins", value: 3, link: "https://en.wikipedia.org/wiki/Victory" },
    { label: "Podiums", value: 15, link: "https://en.wikipedia.org/wiki/Podium" },
    { label: "Fastest Laps", value: 8, link: "https://en.wikipedia.org/wiki/Fastest_lap" },
    { label: "Points", value: 714, link: "https://en.wikipedia.org/wiki/Points" },
    { label: "Laps Raced", value: 6725 },
    { label: "Distance Raced", value: "33,675 km (20,925 mi)" },
    { label: "Races Led", value: 13 },
    { label: "Laps Led", value: 225 },
    { label: "Distance Led", value: "999 km (621 mi)" },
    { label: "Doubles", value: 1 }, // Pole & Win same weekend
    { label: "Sprint Wins", value: 1 },
    { label: "Sprint Podiums", value: 2 },
    { label: "Sprint Fastest Laps", value: 2 },
  ],
};

export default careerStatistics;
