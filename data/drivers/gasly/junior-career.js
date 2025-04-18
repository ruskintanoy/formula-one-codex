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
    <section id="karting" className="space-y-4 scroll-mt-24"></section>
    <h3 className="text-2xl font-bold text-red-600 mb-2">Karting</h3>

    <p>
      Gasly entered competitive {wikiLink("karting", "https://en.wikipedia.org/wiki/Karting")} in 2006 at the age of ten,
      when he finished fifteenth in the French Minime Championship, before he finished fourth the following year. In 2008 he stepped up
      to the French Cadet Championship, before moving to the international scene in 2009. He moved into the{" "}
      {wikiLink("KF3", "https://en.wikipedia.org/wiki/KF3")} category, staying until the end of 2010, when he finished as runner-up in the{" "}
      {wikiLink("CIK-FIA European Championship", "https://en.wikipedia.org/wiki/CIK-FIA_Karting_European_Championship")}.
    </p>

    <div className="clear-both" />

    {/* Formula Renault */}
    <section id="formula-renault" className="space-y-4 scroll-mt-24"></section>
    <h3 className="text-2xl font-bold text-red-600 mb-2">Formula Renault</h3>

    <div className="clear-both" />

    <figure className="float-right ml-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/62/Pierre_Gasly_en_Motorland.JPG"
        alt="Pierre Gasly in Motorland Aragón, 2014"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Pierre Gasly in {wikiLink("Motorland Aragón", "https://en.wikipedia.org/wiki/Motorland_Arag%C3%B3n")}, 2014
      </figcaption>
    </figure>

    <p>
      In {wikiLink("2011", "https://en.wikipedia.org/wiki/2011_French_F4_Championship_season")}, Gasly made his début in{" "}
      {wikiLink("single-seaters", "https://en.wikipedia.org/wiki/Open-wheel_car")}, taking part in the{" "}
      {wikiLink("French F4 Championship", "https://en.wikipedia.org/wiki/French_F4_Championship")} 1.6-litre category. He finished third
      behind his future Eurocup rivals {wikiLink("Matthieu Vaxivière", "https://en.wikipedia.org/wiki/Matthieu_Vaxivi%C3%A8re")} and Andrea Pizzitola
      with seven podiums, including wins at {wikiLink("Spa", "https://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps")},
      {wikiLink("Albi", "https://en.wikipedia.org/wiki/Circuit_d%27Albi")} and {wikiLink("Le Castellet", "https://en.wikipedia.org/wiki/Circuit_Paul_Ricard")}.
    </p>

    <p>
      Gasly moved to the 2-litre Formula Renault machinery in 2012, joining R-Ace GP in the{" "}
      {wikiLink("Formula Renault Eurocup", "https://en.wikipedia.org/wiki/2012_Eurocup_Formula_Renault_2.0_season")}. He finished tenth with six
      point-scoring finishes, including podiums at {wikiLink("Spa", "https://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps")} and the{" "}
      {wikiLink("Nürburgring", "https://en.wikipedia.org/wiki/N%C3%BCrburgring")}. He also had seven starts in the{" "}
      {wikiLink("Formula Renault 2.0 Northern European Cup", "https://en.wikipedia.org/wiki/2012_Formula_Renault_2.0_NEC_season")} with the same team,
      taking a podium at the Nürburgring.
    </p>

    <p>
      For {wikiLink("2013", "https://en.wikipedia.org/wiki/2013_Eurocup_Formula_Renault_2.0_season")}, Gasly moved to{" "}
      {wikiLink("Tech 1 Racing", "https://en.wikipedia.org/wiki/Tech_1_Racing")}. He took five podiums, as well as victories at{" "}
      {wikiLink("Moscow", "https://en.wikipedia.org/wiki/Moscow_Raceway")}, the {wikiLink("Hungaroring", "https://en.wikipedia.org/wiki/Hungaroring")} and
      Le Castellet. He held an eleven-point lead over {wikiLink("Oliver Rowland", "https://en.wikipedia.org/wiki/Oliver_Rowland")} into the final
      meeting at {wikiLink("Circuit de Barcelona-Catalunya", "https://en.wikipedia.org/wiki/Circuit_de_Barcelona-Catalunya")}, and ultimately clinched the
      title with third and sixth-place finishes; the latter result coming after a collision with Rowland, who received a drive-through penalty.
    </p>

    <p>
      The driver jumped to the{" "}
      {wikiLink("Formula Renault 3.5 Series", "https://en.wikipedia.org/wiki/Formula_Renault_3.5_Series")} in 2014, where he was hired by{" "}
      {wikiLink("Arden", "https://en.wikipedia.org/wiki/Arden_Motorsport")} under the{" "}
      {wikiLink("Red Bull Junior Team", "https://en.wikipedia.org/wiki/Red_Bull_Junior_Team")} development program. He finished the season as
      runner-up to another Red Bull Junior {wikiLink("Carlos Sainz Jr.", "https://en.wikipedia.org/wiki/Carlos_Sainz_Jr.")}, collecting eight podiums in the
      seventeen races.
    </p>

    <div className="clear-both" />


    {/* GP2 Series */}
    <section id="gp2-series" className="space-y-4 scroll-mt-24"></section>
    <h3 className="text-2xl font-bold text-red-600 mb-2">GP2 Series</h3>

    <div className="clear-both" />

    <figure className="float-left mr-4 mb-4 max-w-[250px] border border-gray-700 rounded-lg bg-gray-900 p-2 shadow-lg">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/2014_Italian_GP2_round_%2814968955090%29.jpg/250px-2014_Italian_GP2_round_%2814968955090%29.jpg"
        alt="Gasly racing at the 2014 Monza GP2 Series round"
        className="w-full h-auto rounded"
      />
      <figcaption className="text-sm text-gray-400 text-center">
        Gasly racing at the{" "}
        {wikiLink("2014 Monza GP2 Series round", "https://en.wikipedia.org/wiki/2014_Monza_GP2_Series_round")}
      </figcaption>
    </figure>

    <p>
      Gasly made his {wikiLink("GP2 Series", "https://en.wikipedia.org/wiki/GP2_Series")} debut in{" "}
      {wikiLink("2014", "https://en.wikipedia.org/wiki/2014_GP2_Series")} at{" "}
      {wikiLink("Monza", "https://en.wikipedia.org/wiki/Autodromo_Nazionale_Monza")} circuit in support of the{" "}
      {wikiLink("Italian Grand Prix", "https://en.wikipedia.org/wiki/2014_Italian_Grand_Prix")}, replacing{" "}
      {wikiLink("Caterham Racing", "https://en.wikipedia.org/wiki/Caterham_Racing_(GP2_team)")} driver{" "}
      {wikiLink("Tom Dillmann", "https://en.wikipedia.org/wiki/Tom_Dillmann")}.
      He later took part in post-season testing with {wikiLink("DAMS", "https://en.wikipedia.org/wiki/DAMS")} and signed with the team for 2015,
      partnering {wikiLink("Alex Lynn", "https://en.wikipedia.org/wiki/Alex_Lynn")}, development driver for the{" "}
      {wikiLink("Williams F1 Team", "https://en.wikipedia.org/wiki/Williams_F1_Team")}.
      Despite securing three pole positions and four podiums, Gasly had an inconsistent season, with incidents at{" "}
      {wikiLink("Bahrain", "https://en.wikipedia.org/wiki/Bahrain_International_Circuit")},{" "}
      {wikiLink("Spa", "https://en.wikipedia.org/wiki/Circuit_de_Spa-Francorchamps")}, and{" "}
      {wikiLink("Yas Marina", "https://en.wikipedia.org/wiki/Yas_Marina_Circuit")}, finishing eighth overall—two places behind Lynn.
    </p>

    <p>
      In {wikiLink("2016", "https://en.wikipedia.org/wiki/2016_GP2_Series")}, Gasly joined{" "}
      {wikiLink("Prema Powerteam", "https://en.wikipedia.org/wiki/Prema_Powerteam")} alongside{" "}
      {wikiLink("Antonio Giovinazzi", "https://en.wikipedia.org/wiki/Antonio_Giovinazzi")}, the 2015{" "}
      {wikiLink("European Formula 3", "https://en.wikipedia.org/wiki/2015_European_Formula_3_season")} runner-up.
      He went on to win the championship, becoming the final{" "}
      {wikiLink("GP2 Series", "https://en.wikipedia.org/wiki/GP2_Series")} titleholder before its rebranding to{" "}
      {wikiLink("FIA Formula 2", "https://en.wikipedia.org/wiki/FIA_Formula_2_Championship")}.
    </p>

    <div className="clear-both" />
  </>
);

export default juniorCareer;
