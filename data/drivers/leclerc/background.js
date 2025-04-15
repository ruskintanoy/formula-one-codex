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

const background = (
  <>
    <figure className="mb-4">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Charles_Leclerc_after_winning_F2_championship_%28cropped3%29.jpg/500px-Charles_Leclerc_after_winning_F2_championship_%28cropped3%29.jpg"
        alt="Leclerc with his mother, Pascale, after winning the 2017 FIA Formula 2 Championship"
        className="rounded-lg w-100 h-100 mx-auto"
      />
      <figcaption className="text-sm text-gray-400 mt-2 text-center">
        Leclerc <i>(left)</i> with his mother, Pascale, after winning the{" "}
        {wikiLink("2017 FIA Formula 2 Championship", "https://en.wikipedia.org/wiki/2017_FIA_Formula_2_Championship")}
      </figcaption>
    </figure>

    Charles Leclerc was born on 16 October 1997 in{" "}
    {wikiLink("Monte Carlo", "https://en.wikipedia.org/wiki/Monte_Carlo")},{" "}
    Monaco.


    His father, Hervé Leclerc, was a{" "}
    {wikiLink("racing driver", "https://en.wikipedia.org/wiki/Racing_driver")}
    who competed in{" "}
    {wikiLink("Formula Three", "https://en.wikipedia.org/wiki/Formula_Three")}
    in the 1980s and 1990s. His mother, Pascale Leclerc (née Manni), is a former{" "}
    {wikiLink("hairdresser", "https://en.wikipedia.org/wiki/Hairdresser")} who
    operated a{" "}
    {wikiLink("hair salon", "https://en.wikipedia.org/wiki/Hair_salon")} in{" "}
    {wikiLink("Fontvieille", "https://en.wikipedia.org/wiki/Fontvieille,_Monaco")}.

    His maternal grandfather founded the{" "}
    {wikiLink("Novares Group", "https://en.wikipedia.org/wiki/Novares_Group")},
    a French{" "}
    {wikiLink("manufacturing", "https://en.wikipedia.org/wiki/Manufacturing")}
    company; he helped cover miscellaneous costs throughout Charles'{" "}
    {wikiLink("karting", "https://en.wikipedia.org/wiki/Karting")} career, but
    not the racing itself.

    Leclerc studied at{" "}
    {wikiLink("Lycée Albert Premier", "https://en.wikipedia.org/wiki/Lyc%C3%A9e_Albert_Premier")} in{" "}
    {wikiLink("Monaco-Ville", "https://en.wikipedia.org/wiki/Monaco-Ville")}.

    <br /><br />

    His father, Hervé, passed away in 2017 aged 54, just four days before
    Leclerc won the feature race at the Baku Formula 2 round. Prior to his
    father’s death, Leclerc told him that he had signed a{" "}
    {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} contract for 2018 — which later became true when he signed with{" "}
    {wikiLink("Sauber", "https://en.wikipedia.org/wiki/Sauber")}.

    His older half-brother, Lorenzo Tolotta-Leclerc, was best friends with{" "}
    {wikiLink("Jules Bianchi", "https://en.wikipedia.org/wiki/Jules_Bianchi")}, who was Leclerc’s godfather and karting mechanic until his death in 2015.

    His younger brother,{" "}
    {wikiLink("Arthur Leclerc", "https://en.wikipedia.org/wiki/Arthur_Leclerc")},
    is also a racing driver who has competed in open-wheel and sportscar racing,
    winning the{" "}
    {wikiLink("Formula Regional Asian Championship", "https://en.wikipedia.org/wiki/Formula_Regional_Asian_Championship")} in 2022.
  </>
);

export default background;
