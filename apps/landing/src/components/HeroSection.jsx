import { useRef, useState } from 'react';

const SOUNDS = [
  { label: 'Blue Archive', file: '/sound/BlueArchive.mp3' },
  { label: 'Greeting', file: '/sound/greeting.mp3' },
  { label: 'Lets Take it..', file: '/sound/Lets_take_it_slow_and_steady.mp3' },
  { label: 'Uheee..', file: '/sound/Uheee.mp3' },
];

export default function HeroSection() {
  const audioRef = useRef(null);
  const [activeSound, setActiveSound] = useState(null);

  const handlePlaySound = (file) => {
    if (!audioRef.current) return;

    if (activeSound === file && !audioRef.current.paused) {
      audioRef.current.pause();
      setActiveSound(null);
      return;
    }

    audioRef.current.src = file;
    audioRef.current.play().catch(() => {});
    setActiveSound(file);
  };

  return (
    <section id="hero" className="hero relative min-h-screen overflow-hidden bg-[#ffecf9]">
      <audio
        ref={audioRef}
        onEnded={() => setActiveSound(null)}
      />

      {/* BACKGROUND DECORATIONS */}
      <div className="bg-wrapper">
        <div className="bg-grid"></div>
        <div className="bg-glow-center"></div>
        <div className="bg-glow-left"></div>
        <div className="bg-glow-right"></div>
        <div className="bg-striped"></div>

        <div className="shape square s1"></div>
        <div className="shape square s2"></div>
        <div className="shape square s3"></div>

        <div className="shape donut d1"></div>
        <div className="shape donut d2"></div>
        <div className="shape donut d3"></div>

        <div className="shape line l1 rotate-[-35deg]"></div>
        <div className="shape line l2 rotate-[65deg] bottom-[7rem]"></div>
        <div className="shape line l3 rotate-[-35deg]"></div>
      </div>

      {/* BACKGROUND HERO IMAGE */}
      <div className="hero-bg absolute inset-0 z-0">
        <img
          src="/img/bg/background--hero.jpg"
          alt="Hero Background"
          className="hero-bg-img w-full h-[933px] object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="hero-content relative z-10 min-h-screen flex items-center justify-center">
        {/* SOUND BUTTON GROUP */}
        <div className="absolute left-6 md:left-10 top-1/2 -translate-y-1/2 flex flex-col gap-3 md:gap-4 z-20">
          {SOUNDS.map((sound) => {
            const isPlaying = activeSound === sound.file;
            return (
              <button
                key={sound.file}
                onClick={() => handlePlaySound(sound.file)}
                className={`sound-btn hover:translate-x-1.5 duration-200 text-white px-4 py-2.5 md:py-3 rounded-full shadow-lg flex items-center gap-2 cursor-pointer transition ${
                  isPlaying ? 'bg-pink-500 scale-105' : 'bg-blue-400 hover:bg-blue-500'
                }`}
                style={{ fontFamily: 'Chewy, cursive' }}
              >
                <span className="material-symbols-outlined text-lg md:text-xl">
                  {isPlaying ? 'volume_up' : 'graphic_eq'}
                </span>
                <span className="text-sm md:text-base">{sound.label}</span>
              </button>
            );
          })}
        </div>

        {/* HERO IMAGE */}
        <img
          src="/img/hoshinoDefault.png"
          alt="Takanashi Hoshino"
          className="w-[450px] md:w-[600px] relative top-[4rem] drop-shadow-2xl animate-[sway_4s_ease-in-out_infinite]"
        />

        {/* HERO NAME */}
        <h1
          className="absolute right-8 md:right-1/7 top-56 md:top-72 hover:scale-105 duration-75 select-none
                     text-3xl md:text-5xl font-bold text-white tracking-widest -rotate-6"
          style={{
            fontFamily: 'lovelo, cursive',
            textShadow: '0 4px 15px rgba(255, 105, 180, 0.65)',
          }}
        >
          TAKANASHI
          <br />
          <span
            className="text-4xl md:text-5xl font-bold text-white tracking-widest"
            style={{ fontFamily: 'lovelo, cursive' }}
          >
            HOSHINO
          </span>
        </h1>

        {/* INFO CARD */}
        <div className="hidden lg:block absolute left-[20%] top-[30%] z-20">
          <div className="relative w-48">
            <div className="bg-pink-300 rounded-2xl shadow-xl relative text-center ring-4 ring-white/40 h-[270px] flex flex-col justify-center align-middle overflow-hidden hover:-translate-y-3 duration-500">
              <img
                src="/img/Hoshino-subHero.jpg"
                alt="Hoshino Sub"
                className="w-max -mt-10"
              />
              <div className="absolute top-26 left-18 w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center shadow-lg border-4 border-blue-400 hover:bg-blue-500 cursor-pointer">
                <span className="material-symbols-outlined text-white text-xl">
                  favorite
                </span>
              </div>
              <h3
                className="text-white text-lg font-bold tracking-wide mt-10"
                style={{ fontFamily: 'Chewy, cursive' }}
              >
                Takanashi Hoshino
              </h3>
              <a
                href="#about"
                className="mt-3 bg-white text-pink-500 w-[60%] text-xs font-bold px-4 py-2 rounded-full shadow hover:scale-105 transition ml-9 inline-block"
                style={{ fontFamily: 'Chewy, cursive' }}
              >
                Who Is She?
              </a>
            </div>
          </div>
        </div>

        {/* MINI CARDS */}
        <div className="hidden md:flex absolute right-10 lg:right-20 top-[65%] gap-4 z-20">
          <div className="card">
            <img
              src="/img/HoshinoSwimsuit.jpg"
              className="hover:scale-105 duration-200"
              alt="Hoshino Swimsuit"
            />
            <div className="card__content">
              <p className="card__title" style={{ fontFamily: 'Chewy, cursive' }}>
                Hoshino Swimsuit
              </p>
              <a
                href="#gallery"
                className="mt-4 bg-white text-pink-500 px-4 py-2 rounded-lg font-extrabold text-xs inline-block"
                style={{ fontFamily: 'lovelo, cursive' }}
              >
                View to?
              </a>
            </div>
          </div>

          <div className="card">
            <img
              src="/img/HoshinoPrime.jpg"
              className="hover:scale-105 duration-200"
              alt="Hoshino Prime"
            />
            <div className="card__content">
              <p className="card__title" style={{ fontFamily: 'Chewy, cursive' }}>
                Hoshino Prime
              </p>
              <a
                href="#about"
                className="mt-4 bg-white text-pink-500 px-4 py-2 rounded-lg font-extrabold text-xs inline-block"
                style={{ fontFamily: 'lovelo, cursive' }}
              >
                View to?
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* WAVE */}
      <div className="relative w-full h-30 overflow-hidden z-30 -top-40 pointer-events-none">
        <svg
          className="absolute bottom-0 w-full h-48"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path fill="#b1e3fa" fillOpacity="0.6">
            <animate
              attributeName="d"
              dur="8s"
              repeatCount="indefinite"
              values="
                M0,160 C120,200 240,120 360,160 C480,200 600,120 720,160 C840,200 960,120 1080,160 C1200,200 1320,120 1440,160 L1440,320 L0,320 Z;
                M0,170 C140,210 260,110 380,170 C500,210 620,110 740,170 C860,210 980,110 1100,170 C1220,210 1340,110 1440,170 L1440,320 L0,320 Z;
                M0,150 C100,190 220,130 340,150 C460,190 580,130 700,150 C820,190 940,130 1060,150 C1180,190 1300,130 1440,150 L1440,320 L0,320 Z;
                M0,160 C120,200 240,120 360,160 C480,200 600,120 720,160 C840,200 960,120 1080,160 C1200,200 1320,120 1440,160 L1440,320 L0,320 Z
              "
            />
          </path>
          <path fill="#4ec9f5" fillOpacity="0.7">
            <animate
              attributeName="d"
              dur="6s"
              repeatCount="indefinite"
              values="
                M0,200 C150,240 300,160 450,200 C600,240 750,160 900,200 C1050,240 1200,160 1440,200 L1440,320 L0,320 Z;
                M0,210 C160,250 320,150 480,210 C640,250 800,150 960,210 C1120,250 1280,150 1440,210 L1440,320 L0,320 Z;
                M0,190 C140,230 280,170 420,190 C560,230 700,170 840,190 C980,230 1120,170 1440,190 L1440,320 L0,320 Z;
                M0,200 C150,240 300,160 450,200 C600,240 750,160 900,200 C1050,240 1200,160 1440,200 L1440,320 L0,320 Z
              "
            />
          </path>
          <path fill="#00b8f1" fillOpacity="1">
            <animate
              attributeName="d"
              dur="4s"
              repeatCount="indefinite"
              values="
                M0,240 C180,280 360,200 540,240 C720,280 900,200 1080,240 C1260,280 1380,200 1440,240 L1440,320 L0,320 Z;
                M0,250 C200,290 380,190 560,250 C740,290 920,190 1100,250 C1280,290 1400,190 1440,250 L1440,320 L0,320 Z;
                M0,230 C160,270 340,210 520,230 C700,270 880,210 1060,230 C1240,270 1360,210 1440,230 L1440,320 L0,320 Z;
                M0,240 C180,280 360,200 540,240 C720,280 900,200 1080,240 C1260,280 1380,200 1440,240 L1440,320 L0,320 Z
              "
            />
          </path>
        </svg>
      </div>
    </section>
  );
}
