export default function AboutSection() {
  return (
    <section id="about" className="about relative min-h-screen overflow-hidden bg-pink-100">
      {/* TOP WAVE */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20 pointer-events-none">
        <svg
          className="block w-full h-36 md:h-48"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path fill="#b1e3fa" fillOpacity="0.6">
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,160 C120,120 240,200 360,160 C480,120 600,200 720,160 C840,120 960,200 1080,160 C1200,120 1320,200 1440,160 L1440,0 L0,0 Z;
                M0,150 C140,110 260,210 380,150 C500,110 620,210 740,150 C860,110 980,210 1100,150 C1220,110 1340,210 1440,150 L1440,0 L0,0 Z;
                M0,170 C100,130 220,190 340,170 C460,130 580,190 700,170 C820,130 940,190 1060,170 C1180,130 1300,190 1440,170 L1440,0 L0,0 Z;
                M0,160 C120,120 240,200 360,160 C480,120 600,200 720,160 C840,120 960,200 1080,160 C1200,120 1320,200 1440,160 L1440,0 L0,0 Z
              "
            />
          </path>
          <path fill="#4ec9f5" fillOpacity="0.7">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0,120 C150,80 300,160 450,120 C600,80 750,160 900,120 C1050,80 1200,160 1440,120 L1440,0 L0,0 Z;
                M0,110 C160,70 320,170 480,110 C640,70 800,170 960,110 C1120,70 1280,170 1440,110 L1440,0 L0,0 Z;
                M0,130 C140,90 280,150 420,130 C560,90 700,150 840,130 C980,90 1120,150 1440,130 L1440,0 L0,0 Z;
                M0,120 C150,80 300,160 450,120 C600,80 750,160 900,120 C1050,80 1200,160 1440,120 L1440,0 L0,0 Z
              "
            />
          </path>
          <path fill="#00b8f1">
            <animate
              attributeName="d"
              dur="4s"
              repeatCount="indefinite"
              values="
                M0,80 C180,40 360,120 540,80 C720,40 900,120 1080,80 C1260,40 1380,120 1440,80 L1440,0 L0,0 Z;
                M0,70 C200,30 380,130 560,70 C740,30 920,130 1100,70 C1280,30 1400,130 1440,70 L1440,0 L0,0 Z;
                M0,90 C160,50 340,110 520,90 C700,50 880,110 1060,90 C1240,50 1360,110 1440,90 L1440,0 L0,0 Z;
                M0,80 C180,40 360,120 540,80 C720,40 900,120 1080,80 C1260,40 1380,120 1440,80 L1440,0 L0,0 Z
              "
            />
          </path>
        </svg>
      </div>

      <div className="donutAbout absolute -left-[22rem] top-15">
        <div className="ringAbout ringAbout-1"></div>
        <div className="ringAbout ringAbout-2"></div>
        <div className="ringAbout ringAbout-3"></div>
      </div>

      <div className="donutAbout absolute right-[-20rem] top-72">
        <div className="ringAbout ringAbout-1"></div>
        <div className="ringAbout ringAbout-2"></div>
        <div className="ringAbout ringAbout-3"></div>
      </div>

      <div className="bg-wrapper">
        <div className="bg-grid -z-10"></div>
        <div className="bg-striped absolute top-1/3"></div>
      </div>

      <div className="about-content relative z-10 max-w-6xl mx-auto min-h-screen flex flex-col items-center justify-center pt-28 pb-20 px-6">
        <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center shadow-lg border-4 border-blue-400 hover:bg-blue-500 cursor-pointer">
          <span className="material-symbols-outlined text-white text-xl">favorite</span>
        </div>

        <img src="/img/ui/subHero.png" alt="Abydos Icon" className="w-max h-[180px] md:h-[200px]" />
        <h2
          className="text-4xl md:text-6xl font-normal text-white mt-4 mb-10"
          style={{
            fontFamily: 'Chewy, cursive',
            WebkitTextStroke: '1px #fda5d0',
            textShadow: '3px 3px 0 #fda5d0, -1px -1px 0 #fda5d0, 1px -1px 0 #fda5d0, -1px 1px 0 #fda5d0',
          }}
        >
          About Her
        </h2>

        {/* STORY & PORTRAIT */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full max-w-5xl relative">
          <div className="relative max-w-lg">
            <p className="absolute -top-6 -left-6 text-7xl text-pink-300 font-bold select-none leading-none">
              “
            </p>
            <div
              className="p-8 md:p-10 rounded-3xl bg-white/70 backdrop-blur-lg shadow-xl leading-relaxed text-base md:text-lg text-pink-500 relative z-10"
              style={{ fontFamily: 'Chewy, cursive' }}
            >
              A young, lazy girl from Abydos High School. She's currently the vice president
              of the Abydos Student Council, and is also the president of the Foreclosure Task Force.
              Speaking like an old man, she enjoys playing around more than work.
              Because of this, she's often the subject of anger from the rest of the council,
              but once the mission starts she protects the other members by fighting valiantly on the front lines.
            </div>
            <div className="hidden sm:block absolute -bottom-5 w-[110%] -left-6 h-12 bg-pink-400 rounded-3xl -z-0"></div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute -bottom-6 w-[200px] h-[80px] bg-[#ff37b2] rounded-[50%] opacity-60 blur-sm"></div>
            <div className="absolute -bottom-10 w-[300px] h-[120px] bg-[#fda5d0] rounded-[50%] opacity-60 blur-md"></div>
            <img
              src="/img/HoshinoTalking.png"
              alt="Hoshino Talking"
              className="relative h-[450px] md:h-[600px] z-10 drop-shadow-[0_30px_40px_rgba(255,105,180,0.75)] transition duration-300 hover:-translate-y-3"
            />
          </div>
        </div>

        {/* 3 STATS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 w-full">
          <div className="card-about">
            <img src="/img/power_ability.jpg" alt="Power & Ability" />
            <div className="card-about__content">
              <p className="card-about__title">Power & Ability</p>
              <p className="card-about__description">
                Status Effect Inducement (Can apply stun with Tactical Suppression), Reactive Power Level and Statistics Amplification (Aquatic Support invokes a stream of water empowering allies). Hardened Defensive Posture increases Attack and damage resistance. Emergency Field Aid+ heals when HP is low.
              </p>
            </div>
          </div>

          <div className="card-about">
            <img src="/img/L2D-Hoshino.jpg" alt="Intelligence" />
            <div className="card-about__content">
              <p className="card-about__title">Intelligence</p>
              <p className="card-about__description">
                Suppression Tactic ignores 85% of enemy defense while increasing attack by 14%. When using EX Skill or Normal Skill, she reloads instantly and deals 150% damage to enemies in a cone area.
              </p>
            </div>
          </div>

          <div className="card-about">
            <img src="/img/fighting.jpg" alt="Attack Potency" className="h-full w-full object-cover" />
            <div className="card-about__content">
              <p className="card-about__title">Attack Potency</p>
              <p className="card-about__description">
                Country level. Defeated Problem Solver 68 and Kata-Kata Helmet Gang. Defeated Sunaookami Shiroko, Okusora Ayane, and Kuromi Serika single-handedly. Her source of immense power stems from her inner Terror and fierce devotion to Abydos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
