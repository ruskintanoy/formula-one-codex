const wikiLink = (text, url) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="text-red-500 hover:underline">
    {text}
  </a>
);

const background = (
  <>
    <b>Lewis Carl Davidson Hamilton</b> was born on 7 January 1985 in{" "}
    {wikiLink("Stevenage", "https://en.wikipedia.org/wiki/Stevenage")},{" "}
    {wikiLink("Hertfordshire", "https://en.wikipedia.org/wiki/Hertfordshire")}. His father, Anthony Hamilton, is of{" "}
    {wikiLink("Afro-Grenadian", "https://en.wikipedia.org/wiki/Afro-Grenadians")} descent, while his mother, Carmen Larbalestier, is{" "}
    {wikiLink("White British", "https://en.wikipedia.org/wiki/White_British")} from{" "}
    {wikiLink("Birmingham", "https://en.wikipedia.org/wiki/Birmingham")}, making him{" "}
    {wikiLink("mixed-race", "https://en.wikipedia.org/wiki/Mixed_(United_Kingdom_ethnicity_category)")}.
 
    His parents separated when he was two, after which he lived with his mother and older half-sisters until age twelve. He then moved in with his father, stepmother Linda, and his half-brother{" "}
    {wikiLink("Nicolas Hamilton", "https://en.wikipedia.org/wiki/Nicolas_Hamilton")}, who is also a racing driver. Hamilton was raised{" "}
    {wikiLink("Catholic", "https://en.wikipedia.org/wiki/Catholic")}.
    <br /><br />
    Hamilton's father bought him a{" "}
    {wikiLink("radio-controlled car", "https://en.wikipedia.org/wiki/Radio-controlled_car")} at age five, and Hamilton finished second in a national{" "}
    {wikiLink("BRCA", "https://en.wikipedia.org/wiki/British_Radio_Car_Association")} championship the following year, competing against adults.
    Being the only Black child racing at his club, he experienced{" "}
    {wikiLink("racist abuse", "https://en.wikipedia.org/wiki/Racism_in_sport")}.
  
    At six, his father gave him a{" "}
    {wikiLink("go-kart", "https://en.wikipedia.org/wiki/Kart_racing")} and committed to support his racing career as long as he performed well in school. To fund this, Anthony Hamilton took redundancy from his IT manager role and worked multiple jobs—including as a{" "}
    {wikiLink("double glazing", "https://en.wikipedia.org/wiki/Insulated_glazing")} salesman and estate agent signage contractor—while attending every race.
  
    He later launched his own IT firm and remained Lewis’s manager until early 2010.

    <br /><br />

    <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Hamilton_and_Father_Brazil_2008.jpg/250px-Hamilton_and_Father_Brazil_2008.jpg"
        alt="Hamilton celebrating with his father Anthony after the 2008 Brazilian Grand Prix"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Hamilton celebrating with his father and then-manager Anthony Hamilton after the{" "}
        {wikiLink("2008 Brazilian Grand Prix", "https://en.wikipedia.org/wiki/2008_Brazilian_Grand_Prix")}
      </figcaption>
    </figure>

    <p>
      Hamilton was educated at the{" "}
      {wikiLink("The John Henry Newman School", "https://en.wikipedia.org/wiki/The_Saint_John_Henry_Newman_Catholic_School,_Stevenage")}, a{" "}
      {wikiLink("voluntary aided", "https://en.wikipedia.org/wiki/Voluntary_aided_school")} Catholic secondary school in Stevenage. Hamilton has said that at the age of five he took up{" "}
      {wikiLink("karate", "https://en.wikipedia.org/wiki/Karate")} to defend himself as a result of bullying at school. He was also excluded from school for a period when he was mistakenly identified as having attacked a fellow student who was treated in hospital for his injuries. In addition to racing, he played{" "}
      {wikiLink("association football", "https://en.wikipedia.org/wiki/Association_football")} for his school team with eventual{" "}
      {wikiLink("England international", "https://en.wikipedia.org/wiki/England_national_football_team")},{" "}
      {wikiLink("Ashley Young", "https://en.wikipedia.org/wiki/Ashley_Young")}. Hamilton, an{" "}
      {wikiLink("Arsenal", "https://en.wikipedia.org/wiki/Arsenal_F.C.")} fan, said that if{" "}
      {wikiLink("Formula One", "https://en.wikipedia.org/wiki/Formula_One")} had not worked for him, he would have been a footballer or a cricketer, having played both for his school teams. In February 2001, he began studies at{" "}
      {wikiLink("Cambridge Arts and Sciences", "https://en.wikipedia.org/wiki/Cambridge_Arts_and_Sciences")}, a private{" "}
      {wikiLink("sixth-form college", "https://en.wikipedia.org/wiki/Sixth-form_college")} in Cambridge.
    </p>

    <div className="clear-both"></div>

  </>
);

export default background;
