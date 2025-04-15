const wikiLink = (text, url) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="text-red-500 hover:underline"
  >
    {" "}
    {text}
  </a>
);

const background = (
  <>
    George Russell was born on 15 February 1998 in{" "}
    {wikiLink("King's Lynn", "https://en.wikipedia.org/wiki/King%27s_Lynn")},{" "}
    {wikiLink("Norfolk", "https://en.wikipedia.org/wiki/Norfolk")}, to father Steve and mother Alison.

    <br /><br />

    His father managed a business selling seeds and{" "}
    {wikiLink("pulses", "https://en.wikipedia.org/wiki/Pulses")} before stepping down to a consultant role in 2012. Russell is the youngest of three siblings, including sister Cara and brother Benjy.

    <br /><br />

    He grew up in{" "}
    {wikiLink("Tydd St Giles", "https://en.wikipedia.org/wiki/Tydd_St_Giles")},{" "}
    {wikiLink("Wisbech", "https://en.wikipedia.org/wiki/Wisbech")} and{" "}
    {wikiLink("Castle Rising", "https://en.wikipedia.org/wiki/Castle_Rising")}.

    <br /><br />

    Russell began{" "}
    {wikiLink("karting", "https://en.wikipedia.org/wiki/Karting")} at the age of seven, following his brother Benjy, who won the 2007{" "}
    {wikiLink("Super 1 National Kart Championship", "https://en.wikipedia.org/wiki/Super_1_National_Kart_Championships")} in the Rotax Max category.

    <br /><br />

    Russell adopted his racing number 63 from the kart his brother rented at the time.

    <br /><br />

    He attended{" "}
    {wikiLink("Wisbech Grammar School", "https://en.wikipedia.org/wiki/Wisbech_Grammar_School")} before shifting to homeschooling to focus on his racing career.

    <br /><br />

    At 18, Russell moved to{" "}
    {wikiLink("Milton Keynes", "https://en.wikipedia.org/wiki/Milton_Keynes")} to be closer to his junior racing team, sharing accommodation with future Formula One driver{" "}
    {wikiLink("Alex Albon", "https://en.wikipedia.org/wiki/Alex_Albon")}.
  </>
);

export default background;
