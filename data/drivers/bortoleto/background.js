const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const background = (
  <>
    Gabriel Lourenzo Bortoleto Oliveira was born on 14 October 2004 in{" "}
    {wikiLink("Osasco", "https://en.wikipedia.org/wiki/Osasco")},{" "}
    {wikiLink("São Paulo", "https://en.wikipedia.org/wiki/São_Paulo_(state)")}{" "}
    Brazil. His father, Lincoln Oliveira, serves as{" "}
    {wikiLink("chief executive officer", "https://en.wikipedia.org/wiki/Chief_executive_officer")} and co-owner of the{" "}
    {wikiLink("Stock Car Pro Series", "https://en.wikipedia.org/wiki/Stock_Car_Pro_Series")} in Brazil. He founded <i>Americanet</i> in 1996, which merged with <i>Vero</i> in 2023 to become one of the largest{" "}
    {wikiLink("internet service providers", "https://en.wikipedia.org/wiki/Internet_service_provider")} in Brazil, with a revenue of R$1.9 billion.

    <br /><br />

    The family also operates <i>KTF Racing</i>, a{" "}
    {wikiLink("stock car", "https://en.wikipedia.org/wiki/Stock_car_racing")} and{" "}
    {wikiLink("kart racing", "https://en.wikipedia.org/wiki/Kart_racing")} team. His older brother, Enzo, formerly competed in{" "}
    {wikiLink("Formula 4", "https://en.wikipedia.org/wiki/Formula_4")} and{" "}
    {wikiLink("British Formula Three", "https://en.wikipedia.org/wiki/British_Formula_Three")}. Bortoleto is known as "Bibi" amongst his close friends. He is managed by <i>A14 Management</i>, a firm owned by{" "}
    {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")}, and his career is supported by{" "}
    {wikiLink("Porto Seguro", "https://en.wikipedia.org/wiki/Porto_Seguro_S.A.")},{" "}
    {wikiLink("O Boticário", "https://en.wikipedia.org/wiki/O_Botic%C3%A1rio")},{" "}
    {wikiLink("Banco de Brasília", "https://en.wikipedia.org/wiki/Banco_de_Bras%C3%ADlia")}, and{" "}
    {wikiLink("Qualcomm Snapdragon", "https://en.wikipedia.org/wiki/Qualcomm_Snapdragon")}. He has been dating{" "}
    {wikiLink("computer science", "https://en.wikipedia.org/wiki/Computer_science")} student Isabella Bernardini since 2020. His racing idol is{" "}
    {wikiLink("Ayrton Senna", "https://en.wikipedia.org/wiki/Ayrton_Senna")}.
  </>
);

export default background;
