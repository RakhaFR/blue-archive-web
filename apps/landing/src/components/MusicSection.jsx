import { useEffect, useRef, useState } from 'react';

const TRACKS = [
  {
    title: 'Blue Archive Theme',
    artist: 'Takanashi Hoshino',
    src: '/sound/BlueArchive.mp3',
    art: '/img/hoshinoDefault.png',
    thumb: '/img/HoshinoPrime.jpg',
  },
  {
    title: 'Greeting Sensei',
    artist: 'Takanashi Hoshino',
    src: '/sound/greeting.mp3',
    art: '/img/Hoshino-subHero.jpg',
    thumb: '/img/Hoshino-subHero.jpg',
  },
  {
    title: "Let's Take It Slow",
    artist: 'Takanashi Hoshino',
    src: '/sound/Lets_take_it_slow_and_steady.mp3',
    art: '/img/HoshinoSwimsuit.jpg',
    thumb: '/img/HoshinoSwimsuit.jpg',
  },
  {
    title: 'Uheee~',
    artist: 'Takanashi Hoshino',
    src: '/sound/Uheee.mp3',
    art: '/img/hoshinoDefault.png',
    thumb: '/img/L2D-Hoshino.jpg',
  },
];

const fmtTime = (s) => {
  if (!s || isNaN(s)) return '0:00';
  const m = Math.floor(s / 60);
  const sc = Math.floor(s % 60);
  return `${m}:${sc < 10 ? '0' + sc : sc}`;
};

export default function MusicSection() {
  const [cur, setCur] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const barWrapRef = useRef(null);

  const activeTrack = TRACKS[cur];

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const handlePrev = () => {
    const nextIdx = (cur - 1 + TRACKS.length) % TRACKS.length;
    setCur(nextIdx);
  };

  const handleNext = () => {
    const nextIdx = (cur + 1) % TRACKS.length;
    setCur(nextIdx);
  };

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.src = activeTrack.src;
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    }
  }, [cur]);

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    if (!audioRef.current || !barWrapRef.current || !duration) return;
    const rect = barWrapRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    audioRef.current.currentTime = percentage * duration;
  };

  const progressPct = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section id="music" className="relative min-h-screen bg-[#2b0e1f] overflow-hidden flex flex-col justify-center py-16">
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleNext}
      />

      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="bg-grid opacity-15"></div>
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle,rgba(255,55,178,0.18) 0%,transparent 70%)',
            filter: 'blur(70px)',
          }}
        ></div>
      </div>

      <div className="relative z-10 flex flex-col xl:flex-row items-center justify-center gap-8 px-6 w-full max-w-7xl mx-auto">
        {/* LEFT COLLAGE GRID */}
        <div className="music-grid-left hidden lg:flex flex-shrink-0">
          <div className="mg-row">
            <div className="mg-card mg-lg"><img src="/img/Hoshino-subHero.jpg" alt="" /></div>
            <div className="mg-card mg-sm"><img src="/img/HoshinoPrime.jpg" alt="" /></div>
          </div>
          <div className="mg-row">
            <div className="mg-card mg-sm"><img src="/img/L2D-Hoshino.jpg" alt="" /></div>
            <div className="mg-card mg-md"><img src="/img/fighting.jpg" alt="" /></div>
          </div>
          <div className="mg-row">
            <div className="mg-card mg-md"><img src="/img/power_ability.jpg" alt="" /></div>
            <div className="mg-card mg-sm"><img src="/img/l2d_aquarium.webp" alt="" /></div>
          </div>
          <div className="mg-row">
            <div className="mg-card mg-sm"><img src="/img/HoshinoSwimsuit.jpg" alt="" /></div>
            <div className="mg-card mg-lg"><img src="/img/L2D-HoshinoPrime.jpg" alt="" /></div>
          </div>
        </div>

        {/* CENTER PLAYER */}
        <div className="music-center flex-shrink-0 flex flex-col items-center gap-6">
          <div className="music-circle-wrap">
            <div className="music-stripe-ring"></div>
            <div className="music-pink-ring"></div>
            <div className="music-inner-circle">
              <img src={activeTrack.art} alt={activeTrack.title} id="musicArt" />
            </div>
          </div>

          {/* AUDIO PLAYER BAR */}
          <div className="music-player-bar w-full max-w-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0 border border-pink-300/30">
                <img
                  src={activeTrack.thumb}
                  className="w-full h-full object-cover"
                  alt={activeTrack.title}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm font-semibold truncate">
                  {activeTrack.title}
                </p>
                <p className="text-pink-300/70 text-xs truncate">
                  {activeTrack.artist}
                </p>
              </div>
            </div>

            {/* PROGRESS BAR */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-pink-300/60 text-xs w-6 text-right">
                {fmtTime(currentTime)}
              </span>
              <div
                ref={barWrapRef}
                onClick={handleSeek}
                className="flex-1 h-1.5 bg-white/20 rounded-full cursor-pointer relative"
              >
                <div
                  className="h-full bg-pink-400 rounded-full transition-all"
                  style={{ width: `${progressPct}%` }}
                ></div>
              </div>
              <span className="text-pink-300/60 text-xs w-6">
                {fmtTime(duration)}
              </span>
            </div>

            {/* CONTROLS */}
            <div className="flex items-center justify-center gap-6">
              <button
                onClick={handlePrev}
                className="text-white/70 hover:text-white transition cursor-pointer"
              >
                <span className="material-symbols-outlined text-3xl">skip_previous</span>
              </button>
              <button
                onClick={handlePlayPause}
                className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-105 transition shadow-lg cursor-pointer"
              >
                <span className="material-symbols-outlined text-[#2b0e1f] text-2xl">
                  {isPlaying ? 'pause' : 'play_arrow'}
                </span>
              </button>
              <button
                onClick={handleNext}
                className="text-white/70 hover:text-white transition cursor-pointer"
              >
                <span className="material-symbols-outlined text-3xl">skip_next</span>
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLLAGE GRID */}
        <div className="music-grid-right hidden lg:flex flex-shrink-0">
          <div className="mg-row">
            <div className="mg-card mg-sm"><img src="/img/L2D-HoshinoSwimSuit.jpg" alt="" /></div>
            <div className="mg-card mg-lg"><img src="/img/Hoshino-subHero.jpg" alt="" /></div>
          </div>
          <div className="mg-row">
            <div className="mg-card mg-md"><img src="/img/HoshinoPrime.jpg" alt="" /></div>
            <div className="mg-card mg-sm"><img src="/img/fighting.jpg" alt="" /></div>
          </div>
          <div className="mg-row">
            <div className="mg-card mg-sm"><img src="/img/l2d_aquarium.webp" alt="" /></div>
            <div className="mg-card mg-md"><img src="/img/power_ability.jpg" alt="" /></div>
          </div>
          <div className="mg-row">
            <div className="mg-card mg-lg"><img src="/img/HoshinoSwimsuit.jpg" alt="" /></div>
            <div className="mg-card mg-sm"><img src="/img/L2D-Hoshino.jpg" alt="" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
