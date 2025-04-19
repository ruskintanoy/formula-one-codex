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
      {/* Karting Career */}
      <section id="karting" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">Karting</h3>

      <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Fernando_Alonso_1983_kart_front-left_2017_Museo_Fernando_Alonso.jpg/250px-Fernando_Alonso_1983_kart_front-left_2017_Museo_Fernando_Alonso.jpg"
          alt="The first go-kart driven by Alonso"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          The first go-kart driven by Alonso, which his elder sister did not want to drive.
        </figcaption>
      </figure>

      <p>
        Aged seven, Alonso won his first kart race in{" "}
        {wikiLink("Pola de Laviana", "https://en.wikipedia.org/wiki/Pola_de_Laviana")}. He won the 1988 and 1989 children's junior
        championships of the Asturias and Galicia, and progressed to the Cadet class in 1990.
        Go-kart importer Genís Marcó was impressed by Alonso and mentored him; kart track owner José Luis Echevarria had referred Alonso to Marcó.
        He found sponsorship to support Alonso’s racing and allow him to compete in European series.
        Alonso was invited for a test session by six-time{" "}
        {wikiLink("Karting World Champion", "https://en.wikipedia.org/wiki/Karting_World_Championship")}{" "}
        Mike Wilson at a track in{" "}
        {wikiLink("Parma", "https://en.wikipedia.org/wiki/Parma")}.
        Marcó taught Alonso to conserve his kart and race with strategy.
      </p>

      <div className="clear-both" />

      <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Fernando_Alonso_1996_kart_front-left_2017_Museo_Fernando_Alonso.jpg/250px-Fernando_Alonso_1996_kart_front-left_2017_Museo_Fernando_Alonso.jpg"
          alt="The go-kart Alonso drove to win the Karting World Championship in 1996"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          The go-kart Alonso drove to win the{" "}
          {wikiLink("Karting World Championship", "https://en.wikipedia.org/wiki/Karting_World_Championship")} in 1996.
        </figcaption>
      </figure>

      <p>
        Alonso won the 1990 Asturias and Basque Country Cadet Championships and finished second in the 1991 Spanish Cadet National Championship.
        Despite being underage for higher-powered karts, he was allowed by the local karting federation to race in the 100cc class.
        At a Catalan Karting Championship meet in{" "}
        {wikiLink("Móra d'Ebre", "https://en.wikipedia.org/wiki/M%C3%B3ra_d%27Ebre")}, Marcó invited Alonso to enter the national championship.
        Under the mentorship of Mike Wilson, Alonso joined the{" "}
        {wikiLink("Italian American Motor Engineering", "https://en.wikipedia.org/wiki/Italian_American_Motor_Engineering")} works team in 1993.
        He went on to win three consecutive Spanish Junior National Championships from 1993 to 1995.
      </p>

      <div className="clear-both" />

      {/* International Karting & Junior Titles */}
      <section id="international-karting" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">
        1995–1997: Rise through international karting
      </h3>

      <p>
        Alonso’s strong national performances earned him a place in the world championships.
        He finished third in the 1995{" "}
        {wikiLink("Commission Internationale de Karting", "https://en.wikipedia.org/wiki/Commission_Internationale_de_Karting")} Cadets' Rainbow Trophy.
        To support his career, Alonso worked as a mechanic for younger kart drivers.
        In 1996, he claimed his fourth Spanish Junior Karting Championship, the Trofeo Estival, the Marlboro Masters, and the{" "}
        {wikiLink("CIK-FIA 5 Continents Juniors Cup", "https://en.wikipedia.org/wiki/Karting_Genk")} at{" "}
        {wikiLink("Karting Genk", "https://en.wikipedia.org/wiki/Karting_Genk")}.
        The following year, he won both the Italian and Spanish International A championships and finished second in the European Championship with nine wins.
        He also competed in the{" "}
        {wikiLink("Masters Karting Paris Bercy", "https://en.wikipedia.org/wiki/Masters_Karting_Paris_Bercy")} and the Spanish Karting Championship.
      </p>

      <div className="clear-both" />

      {/* Car Racing Debut */}
      <section id="car-racing" className="space-y-4 scroll-mt-24"></section>
      <h3 className="text-2xl font-bold text-red-600 mb-2">Early Car Racing (1999–2000)</h3>

      <p>
        At age 17, Alonso transitioned to single-seaters, debuting in the{" "}
        {wikiLink("1999 Euro Open by Nissan", "https://en.wikipedia.org/wiki/1999_Euro_Open_by_Nissan")} with{" "}
        {wikiLink("Campos Motorsport", "https://en.wikipedia.org/wiki/Campos_Racing")}.
        He won the championship title with six wins and nine{" "}
        {wikiLink("pole positions", "https://en.wikipedia.org/wiki/Pole_position")}, clinching the title in the final race over{" "}
        {wikiLink("Manuel Gião", "https://en.wikipedia.org/wiki/Manuel_Gi%C3%A3o")}.
      </p>

      <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Lola_B99-50_front-right_2017_Museo_Fernando_Alonso.jpg/250px-Lola_B99-50_front-right_2017_Museo_Fernando_Alonso.jpg"
          alt="The Lola B99/50 driven by Alonso in Formula 3000"
          className="w-full h-auto rounded"
        />
        <figcaption className="text-sm text-gray-400 text-center">
          The{" "}
          {wikiLink("Lola B99/50", "https://en.wikipedia.org/wiki/Lola_Cars")} Alonso drove in the{" "}
          {wikiLink("2000 International Formula 3000 Championship", "https://en.wikipedia.org/wiki/2000_International_Formula_3000_Championship")}.
        </figcaption>
      </figure>

      <p>
        For the 2000 season, Alonso graduated to the{" "}
        {wikiLink("International Formula 3000 Championship", "https://en.wikipedia.org/wiki/International_Formula_3000")} with{" "}
        {wikiLink("Team Astromega", "https://en.wikipedia.org/wiki/Team_Astromega")}, backed by{" "}
        {wikiLink("Minardi", "https://en.wikipedia.org/wiki/Minardi")}.
        He stepped in after a sponsorship deal with driver Robert Lechner fell through.
        Alonso finished second at the{" "}
        {wikiLink("Hungaroring", "https://en.wikipedia.org/wiki/Hungaroring")} and won the final round at{" "}
        {wikiLink("Spa-Francorchamps", "https://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps")}, securing fourth in the championship with 17 points.
      </p>

      <div className="clear-both" />
    </>
  );
  
  export default juniorCareer;
  