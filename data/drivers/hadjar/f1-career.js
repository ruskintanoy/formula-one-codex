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

const f1Career = (
  <>
    <p>
      On 16 June 2021, {wikiLink("Red Bull Racing", "/wiki/Red_Bull_Racing")} announced that Hadjar was to become a member of the {wikiLink("Red Bull Junior Team", "/wiki/Red_Bull_Junior_Team")} in 2022.
    </p>

    <p>
      Hadjar made his {wikiLink("free practice", "/wiki/Formula_One_racing#Free_practice")} debut at the {wikiLink("2023 Mexico City Grand Prix", "/wiki/2023_Mexico_City_Grand_Prix")} with {wikiLink("Scuderia AlphaTauri", "/wiki/Scuderia_AlphaTauri")}, to fulfill the mandatory rookie driver rule. Before the weekend, Hadjar admitted that he felt "apprehension", having not driven a {wikiLink("Formula One car", "/wiki/Formula_One_car")} prior. He ended the session in 17th place, second highest of the five rookies who participated. He then drove for Red Bull during the {wikiLink("2023 Abu Dhabi Grand Prix", "/wiki/2023_Abu_Dhabi_Grand_Prix")}, finishing the session in 17th again.
    </p>

    <p>
      In July 2024, Hadjar would take part in his first FP1 session of the year at the {wikiLink("2024 British Grand Prix", "/wiki/2024_British_Grand_Prix")} with Red Bull, ending the session in 19th. Later that year, Hadjar took part in free practice during the {wikiLink("2024 Abu Dhabi Grand Prix", "/wiki/2024_Abu_Dhabi_Grand_Prix")}, driving {wikiLink("Max Verstappen", "/wiki/Max_Verstappen")}'s {wikiLink("Red Bull Racing RB20", "/wiki/Red_Bull_Racing_RB20")}. He finished the session in 15th. Hadjar also drove the RB20 in the post-season Abu Dhabi rookie test, where his pace — faster than that of future teammate {wikiLink("Yuki Tsunoda", "/wiki/Yuki_Tsunoda")} — impressed team principal {wikiLink("Christian Horner", "/wiki/Christian_Horner")}.
    </p>

    <p>
      In September 2024, Hadjar was promoted to replace {wikiLink("Liam Lawson", "/wiki/Liam_Lawson")} as the reserve driver for both Red Bull Racing and {wikiLink("RB", "/wiki/RB_Formula_One_Team")} (previously known as AlphaTauri) as Lawson replaced {wikiLink("Daniel Ricciardo", "/wiki/Daniel_Ricciardo")} from the {wikiLink("2024 United States Grand Prix", "/wiki/2024_United_States_Grand_Prix")}.
    </p>

    <div className="clear-both"></div>

    {/* Racing Bulls (2025) */}
    <section id="Racing Bulls (2025)" className="space-y-4 scroll-mt-24"></section>
    <h3 className="text-2xl font-bold text-red-600 mb-2">Racing Bulls (2025)</h3>

    <div className="clear-both"></div>

    <figure className="float-right ml-4 mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <a href="/wiki/File:2025_Japan_GP_-_Racing_Bulls_-_Isack_Hadjar_-_FP2.jpg" className="mw-file-description">
        <img
          alt="Hadjar driving the Racing Bulls VCARB 02 at the 2025 Japanese Grand Prix"
          src="//upload.wikimedia.org/wikipedia/commons/thumb/0/02/2025_Japan_GP_-_Racing_Bulls_-_Isack_Hadjar_-_FP2.jpg/250px-2025_Japan_GP_-_Racing_Bulls_-_Isack_Hadjar_-_FP2.jpg"
          className="w-full h-auto rounded"
        />
      </a>
      <figcaption className="text-sm text-gray-400 text-center">
        Hadjar (pictured at the {wikiLink("2025 Japanese Grand Prix", "/wiki/2025_Japanese_Grand_Prix")}) debuted in Formula One with {wikiLink("Racing Bulls", "/wiki/Racing_Bulls")} in {wikiLink("2025", "/wiki/2025_Formula_One_World_Championship")}.
      </figcaption>
    </figure>

    <p>
      Following the promotion of {wikiLink("Liam Lawson", "/wiki/Liam_Lawson")} to {wikiLink("Red Bull Racing", "/wiki/Red_Bull_Racing")}, Hadjar partnered {wikiLink("Yuki Tsunoda", "/wiki/Yuki_Tsunoda")} at {wikiLink("Racing Bulls", "/wiki/Racing_Bulls")} for {wikiLink("2025", "/wiki/2025_Formula_One_World_Championship")}. He qualified eleventh on debut at the {wikiLink("2025 Australian Grand Prix", "/wiki/2025_Australian_Grand_Prix")}, before spinning into the barriers on the {wikiLink("formation lap", "/wiki/Formation_lap")} and failing to start the race. After finishing thirteenth in the {wikiLink("2025 Chinese Grand Prix", "/wiki/2025_Chinese_Grand_Prix")} sprint, he qualified seventh for the main race and finished eleventh due to a strategic error. He qualified seventh again in {wikiLink("2025 Japanese Grand Prix", "/wiki/2025_Japanese_Grand_Prix")}, before finishing eighth to claim his maiden points finish. He dropped outside the points with thirteenth in {wikiLink("2025 Bahrain Grand Prix", "/wiki/2025_Bahrain_Grand_Prix")}.
    </p>

    <div className="clear-both"></div>
</>
);

export default f1Career;
