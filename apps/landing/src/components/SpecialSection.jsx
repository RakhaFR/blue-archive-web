export default function SpecialSection() {
  return (
    <section id="special" className="special relative min-h-screen bg-[#6b3346] py-16 overflow-hidden">
      <div className="wrapper">
        <div className="bg-grid"></div>
      </div>

      <div className="bg-wrapper">
        <div className="shape square s1 top-[30rem]"></div>
        <div className="shape square s1 top-[28rem] left-3/4"></div>
        <div className="shape donut d2 left-[10rem] bottom-[25rem]"></div>
        <div className="shape donut d1 right-40"></div>
        <div className="shape line l1 rotate-[-35deg] left-[70rem] top-1/2"></div>
        <div className="shape line l3 rotate-[-35deg] left-[68rem] top-1/2"></div>
      </div>

      <div className="flex items-center justify-center gap-5 w-full relative flex-col z-10 px-6">
        <div className="flex flex-row items-center gap-6 mb-8">
          <img src="/img/ui/special-hero.png" alt="Special Icon" className="w-max h-[70px] md:h-[80px]" />
          <h2
            className="text-4xl md:text-6xl text-white font-normal"
            style={{
              fontFamily: 'Agbalumo, cursive',
              WebkitTextStroke: '1px #ff009d',
              textShadow: '3px 3px 0 #ff009d, -1px -1px 0 #ff009d, 1px -1px 0 #ff009d, -1px 1px 0 #ff009d',
            }}
          >
            Special
          </h2>
        </div>

        {/* WEAPON & SHIELD CARDS */}
        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center max-w-5xl w-full">
          <div className="card-about bg-white w-full max-w-[540px]">
            <img src="/img/EYE-OF-HORUS.webp" alt="Eye Of Horus" className="w-full object-cover" />
            <div className="card-about__content">
              <p className="card-about__title">Eye Of Horus</p>
              <p className="card-about__description">
                The Eye of Horus is Hoshino's signature weapon — a two-tone Beretta 1301 Tactical semi-automatic shotgun with a black vent ribbed 21" Comp barrel, bolt carrier, and tubular magazine with a +3 Nordic Extension Tube. Features an extended choke tube, Mesa Tactical top rail, and polymer side saddle with spare buckshots.
              </p>
            </div>
          </div>

          <div className="card-about bg-white w-full max-w-[540px]">
            <img src="/img/IRON-HORUS.png" alt="Iron Horus" className="w-full object-cover" />
            <div className="card-about__content">
              <p className="card-about__title">Iron Horus</p>
              <p className="card-about__description">
                The Iron Horus is Hoshino's primary defensive tool. A collapsible heavy ballistic shield that can withstand intense explosive gunfire, housing extra buckshot rounds and a backup Beretta 92FS pistol.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
