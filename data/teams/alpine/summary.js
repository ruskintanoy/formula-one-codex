const wikiLink = (text, url) => (
    <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
      {text}
    </a>
  );
  
  const summary = (
    <>
      <p>
        <b>Alpine F1 Team</b>, currently racing as <b>BWT Alpine F1 Team</b> for sponsorship reasons, is the name under which the{" "}
        {wikiLink("Enstone-based Formula One team", "https://en.wikipedia.org/wiki/Team_Enstone")} has been competing since the start of the{" "}
        {wikiLink("2021 Formula One World Championship", "https://en.wikipedia.org/wiki/2021_Formula_One_World_Championship")}.
        Formerly named{" "}
        {wikiLink("Renault F1 Team", "https://en.wikipedia.org/wiki/Renault_in_Formula_One")} and owned by the French automotive company{" "}
        {wikiLink("Groupe Renault", "https://en.wikipedia.org/wiki/Renault")} as well as the{" "}
        {wikiLink("Renault–Nissan–Mitsubishi Alliance", "https://en.wikipedia.org/wiki/Renault%E2%80%93Nissan%E2%80%93Mitsubishi_Alliance")}, the team was rebranded for 2021 to promote Renault's sports car brand,{" "}
        {wikiLink("Alpine", "https://en.wikipedia.org/wiki/Automobiles_Alpine")}, and continues to serve as Renault's{" "}
        {wikiLink("works team", "https://en.wikipedia.org/wiki/Factory-backed")}, a position the team will keep until Renault pulls out of Formula One after 2025.
        The chassis and managerial side of the team is based in{" "}
        {wikiLink("Enstone", "https://en.wikipedia.org/wiki/Enstone")}, Oxfordshire, England, and the Renault-branded engine side of the team is based in{" "}
        {wikiLink("Viry-Châtillon", "https://en.wikipedia.org/wiki/Viry-Ch%C3%A2tillon")}, a suburb of Paris, France.
        The team competes with a{" "}
        {wikiLink("French licence", "https://en.wikipedia.org/wiki/List_of_Formula_One_constructors#Team's_nationality")}.
      </p>
    </>
  );
  
  export default summary;
  
  