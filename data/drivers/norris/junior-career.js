import ImageCard from "@/components/ImageCard";

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

const juniorCareer = (
  <>
    {/* Karting */}
    <h3 className="text-2xl font-bold text-red-600 mb-2">Karting</h3>
    <p>
      Norris started his racing career at the age of seven when he claimed pole
      position at his first national event. In 2013, Norris competed in
      KF-Junior class, winning the{" "}
      {wikiLink(
        "CIK-FIA European Championship",
        "https://en.wikipedia.org/wiki/CIK-FIA_Karting_European_Championship"
      )}{" "}
      and the{" "}
      {wikiLink(
        "CIK-FIA International Super Cup",
        "https://en.wikipedia.org/wiki/Karting_World_Championship"
      )}
      , as well as the{" "}
      {wikiLink(
        "WSK Euro Series",
        "https://en.wikipedia.org/wiki/WSK_Euro_Series"
      )}
      . The following year he won the{" "}
      {wikiLink(
        "CIK-FIA World Championship",
        "https://en.wikipedia.org/wiki/Karting_World_Championship"
      )}{" "}
      in KF class with Ricky Flynn Motorsport, making him the youngest karting
      world champion in that category.
    </p>

    {/* Ginetta Junior Championship */}
    <h3 className="text-2xl font-bold text-red-600 mt-6 mb-2">
      Ginetta Junior Championship
    </h3>
    <p>
      In 2014, Norris made his car racing debut in the{" "}
      {wikiLink(
        "Ginetta Junior Championship",
        "https://en.wikipedia.org/wiki/2014_Ginetta_Junior_Championship"
      )}
      , a support series to the{" "}
      {wikiLink(
        "British Touring Car Championship",
        "https://en.wikipedia.org/wiki/British_Touring_Car_Championship"
      )}
      . He finished third in the championship, winning four races and claiming
      the Rookie Cup.
    </p>

    {/* Lower Formulae */}
    <h3 className="text-2xl font-bold text-red-600 mt-6 mb-2">
      Lower Formulae
    </h3>

    {/* Formula 4 */}
    <h4 className="text-lg font-semibold text-red-400 mb-1">Formula 4</h4>

    <ImageCard
      src="/drivers/norris/car1.JPG"
      alt="Norris racing for Mücke Motorsport in Formula 4 in 2015"
      caption="Norris racing for Mücke Motorsport in Formula 4 in 2015"
    />

    <p>
      For 2015, Norris signed with Carlin Motorsport to drive in the newly
      established{" "}
      {wikiLink(
        "MSA Formula Championship",
        "https://en.wikipedia.org/wiki/2015_MSA_Formula_Championship"
      )}{" "}
      (now known as the{" "}
      {wikiLink(
        "F4 British Championship",
        "https://en.wikipedia.org/wiki/F4_British_Championship"
      )}
      ). Norris took eight wins, ten pole positions, and fourteen total podiums
      to win the championship ahead of{" "}
      {wikiLink(
        "Ricky Collard",
        "https://en.wikipedia.org/wiki/Ricky_Collard"
      )}{" "}
      and{" "}
      {wikiLink("Colton Herta", "https://en.wikipedia.org/wiki/Colton_Herta")}
      . He also made occasional appearances in the{" "}
      {wikiLink(
        "ADAC Formula 4",
        "https://en.wikipedia.org/wiki/2015_ADAC_Formula_4_Championship"
      )}{" "}
      and{" "}
      {wikiLink(
        "Italian Formula 4",
        "https://en.wikipedia.org/wiki/2015_Italian_Formula_4_Championship"
      )}{" "}
      championships with{" "}
      {wikiLink(
        "Mücke Motorsport",
        "https://en.wikipedia.org/wiki/M%C3%BCcke_Motorsport"
      )}
      , where he claimed six podiums from eight starts in the former.
    </p>

    {/* Continue other sections... */}
  </>
);

export default juniorCareer;
