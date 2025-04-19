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
      {/* Junior Career & Management Section */}
      <section id="junior-career" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">Junior Career & Management</h3>

      <p>
        In September 2022, Bortoleto announced that he had joined A14, two-time {wikiLink("Formula One champion", "https://en.wikipedia.org/wiki/List_of_Formula_One_World_Drivers%27_Champions")} {wikiLink("Fernando Alonso", "https://en.wikipedia.org/wiki/Fernando_Alonso")}'s driver management company. After winning the {wikiLink("Formula 3 title", "https://en.wikipedia.org/wiki/2023_FIA_Formula_3_Championship")}, Bortoleto signed with the {wikiLink("McLaren Driver Development Programme", "https://en.wikipedia.org/wiki/McLaren_Driver_Development_Programme")} in October 2023. He completed his first test in Formula One machinery at the {wikiLink("Red Bull Ring", "https://en.wikipedia.org/wiki/Red_Bull_Ring")} in September 2024, testing the {wikiLink("McLaren MCL36", "https://en.wikipedia.org/wiki/McLaren_MCL36")}.
      </p>

      {/* 2025 Sauber/Audi Prospects */}
      <section id="sauber-prospects" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">2025 Sauber/Audi Prospects</h3>

      <p>
        Around the time that he completed his first test, {wikiLink("Sauber Motorsport", "https://en.wikipedia.org/wiki/Sauber_Motorsport")} COO and CTO {wikiLink("Mattia Binotto", "https://en.wikipedia.org/wiki/Mattia_Binotto")} marked Bortoleto as one of the contenders for a seat at Kick Sauber in {wikiLink("2025", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")}, ahead of their takeover by {wikiLink("Audi", "https://en.wikipedia.org/wiki/Audi_in_Formula_One")}.
      </p>

      <p>
        Three-time Formula One world champion {wikiLink("Max Verstappen", "https://en.wikipedia.org/wiki/Max_Verstappen")} and race winner {wikiLink("Oscar Piastri", "https://en.wikipedia.org/wiki/Oscar_Piastri")} endorsed Bortoleto to be selected, with Piastri sharing his experience of not getting a seat immediately after winning the {wikiLink("2021 Formula 2 Championship", "https://en.wikipedia.org/wiki/2021_Formula_2_Championship")} and his hope that Bortoleto would avoid such a situation. Furthermore, McLaren team principal Andrea Stella revealed he would allow Bortoleto to leave their academy for Sauber if needed, praising him for his performances in his junior career.
      </p>

      <div className="clear-both"></div>

      {/* Sauber (2025–present) */}
      <section id="sauber-2025" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">Sauber (2025–present)</h3>

      <figure className="float-right ml-4 mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/c/c2/2025_Japan_GP_-_Sauber_-_Gabriel_Bortoleto_-_FP2.jpg"
          alt="Bortoleto driving the Kick Sauber C45 at the 2025 Japanese Grand Prix"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          Bortoleto (pictured at the {wikiLink("Japanese Grand Prix", "https://en.wikipedia.org/wiki/2025_Japanese_Grand_Prix")}) debuted in Formula One with {wikiLink("Sauber", "https://en.wikipedia.org/wiki/Sauber")} in {wikiLink("2025", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")}, ahead of their acquisition by {wikiLink("Audi", "https://en.wikipedia.org/wiki/Audi_in_Formula_One")}.
        </figcaption>
      </figure>

      <p>
        Bortoleto signed for {wikiLink("Sauber", "https://en.wikipedia.org/wiki/Sauber")} in {wikiLink("2025", "https://en.wikipedia.org/wiki/2025_Formula_One_World_Championship")}, partnering {wikiLink("Nico Hülkenberg", "https://en.wikipedia.org/wiki/Nico_H%C3%BClkenberg")} on a multi-year deal beyond the {wikiLink("2026 regulation changes", "https://en.wikipedia.org/wiki/2026_Formula_One_World_Championship#Regulation_changes")} with {wikiLink("Audi", "https://en.wikipedia.org/wiki/Audi_in_Formula_One")}; they replaced {wikiLink("Valtteri Bottas", "https://en.wikipedia.org/wiki/Valtteri_Bottas")} and {wikiLink("Zhou Guanyu", "https://en.wikipedia.org/wiki/Zhou_Guanyu")}. He was subsequently released from the {wikiLink("McLaren Driver Development Programme", "https://en.wikipedia.org/wiki/McLaren_Driver_Development_Programme")}.
      </p>

      <p>
        On debut at the {wikiLink("Australian Grand Prix", "https://en.wikipedia.org/wiki/2025_Australian_Grand_Prix")}, Bortoleto received acclaim for progressing to the second qualifying session, outqualifying teammate Hülkenberg; he crashed out of the race in changing conditions. He finished nineteenth in the {wikiLink("Chinese Grand Prix", "https://en.wikipedia.org/wiki/2025_Chinese_Grand_Prix")} sprint following a final-lap collision with {wikiLink("Jack Doohan", "https://en.wikipedia.org/wiki/Jack_Doohan")}, before finishing fourteenth in the main race after spinning into the {wikiLink("gravel trap", "https://en.wikipedia.org/wiki/Gravel_trap")} on the opening lap. He then finished nineteenth in {wikiLink("Japan", "https://en.wikipedia.org/wiki/2025_Japanese_Grand_Prix")} on an alternate strategy, as well as eighteenth in {wikiLink("Bahrain", "https://en.wikipedia.org/wiki/2025_Bahrain_Grand_Prix")}, where he described the {wikiLink("C45", "https://en.wikipedia.org/wiki/Kick_Sauber_C45")} as "undriveable".
      </p>

      <div className="clear-both"></div>
  </>
  );
  
  export default f1Career;
  