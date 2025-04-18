const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const background = (
  <>
    Isack Alexandre Hadjar was born on 28 September 2004 in{" "}
    {wikiLink("Paris", "https://en.wikipedia.org/wiki/Paris")}, France to an Algerian family of{" "}
    {wikiLink("physicians", "https://en.wikipedia.org/wiki/Physician")} and{" "}
    {wikiLink("physicists", "https://en.wikipedia.org/wiki/Physicist")}. His father, Yassine Hadjar, is a{" "}
    {wikiLink("researcher", "https://en.wikipedia.org/wiki/Scientific_method")} in{" "}
    {wikiLink("quantum mechanics", "https://en.wikipedia.org/wiki/Quantum_mechanics")} and also served as his kart{" "}
    {wikiLink("mechanic", "https://en.wikipedia.org/wiki/Mechanic")}. He holds dual French and Algerian citizenship.

    <br /><br />

    Hadjar initially grew fond of{" "}
    {wikiLink("motorsport", "https://en.wikipedia.org/wiki/Motorsport")} after watching the{" "}
    {wikiLink("Pixar", "https://en.wikipedia.org/wiki/Pixar")} animated movie <i>{wikiLink("Cars", "https://en.wikipedia.org/wiki/Cars_(film)")}</i>. His parents bought him a{" "}
    {wikiLink("go-kart", "https://en.wikipedia.org/wiki/Go-kart")} when he was seven, a year after he started watching{" "}
    {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")}. He also contested{" "}
    {wikiLink("boxing", "https://en.wikipedia.org/wiki/Boxing")} and{" "}
    {wikiLink("judo", "https://en.wikipedia.org/wiki/Judo")} at a young age.
  </>
);

export default background;
