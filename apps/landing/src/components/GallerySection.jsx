import { useEffect, useRef } from 'react';

const SLIDER_IMAGES_1 = [
  '/img/Hoshino-subHero.jpg',
  '/img/HoshinoPrime.jpg',
  '/img/HoshinoSwimsuit.jpg',
  '/img/L2D-Hoshino.jpg',
  '/img/L2D-HoshinoPrime.jpg',
  '/img/L2D-HoshinoSwimSuit.jpg',
  '/img/l2d_aquarium.webp',
];

const SLIDER_IMAGES_2 = [
  '/img/fighting.jpg',
  '/img/power_ability.jpg',
  '/img/L2D-HoshinoSwimSuit.jpg',
  '/img/HoshinoSwimsuit.jpg',
  '/img/l2d_aquarium.webp',
  '/img/L2D-HoshinoPrime.jpg',
  '/img/Hoshino-subHero.jpg',
];

const PIE_SRCS = [
  '/img/Hoshino-subHero.jpg',
  '/img/HoshinoPrime.jpg',
  '/img/HoshinoSwimsuit.jpg',
  '/img/L2D-HoshinoPrime.jpg',
  '/img/L2D-HoshinoSwimSuit.jpg',
  '/img/L2D-Hoshino.jpg',
  '/img/l2d_aquarium.webp',
];

const FALLBACK_COLORS = [
  '#f472b6',
  '#c084fc',
  '#818cf8',
  '#60a5fa',
  '#34d399',
  '#fbbf24',
  '#fb923c',
];

export default function GallerySection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const W = canvas.width;
    const H = canvas.height;
    const cx = W / 2;
    const cy = H / 2;
    const R = 210;
    const GAP = 0.03;
    const N = PIE_SRCS.length;
    const SA = (Math.PI * 2) / N;

    let angle = 0;
    let paused = false;
    let animId;

    const imgs = PIE_SRCS.map((s) => {
      const im = new Image();
      im.crossOrigin = 'anonymous';
      im.src = s;
      return im;
    });

    function draw() {
      ctx.clearRect(0, 0, W, H);

      ctx.save();
      ctx.beginPath();
      ctx.arc(cx, cy, R, 0, Math.PI * 2);
      ctx.clip();

      for (let i = 0; i < N; i++) {
        const a0 = angle + i * SA + GAP;
        const a1 = angle + (i + 1) * SA - GAP;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, R, a0, a1);
        ctx.closePath();
        ctx.clip();

        if (imgs[i].complete && imgs[i].naturalWidth) {
          ctx.drawImage(imgs[i], cx - R, cy - R, R * 2, R * 2);
        } else {
          ctx.fillStyle = FALLBACK_COLORS[i];
          ctx.fill();
        }
        ctx.restore();

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.arc(cx, cy, R, a0, a1);
        ctx.closePath();
        ctx.strokeStyle = 'rgba(255,255,255,0.6)';
        ctx.lineWidth = 2.5;
        ctx.stroke();
        ctx.restore();
      }
      ctx.restore();
    }

    function animate() {
      if (!paused) angle += 0.004;
      draw();
      animId = requestAnimationFrame(animate);
    }

    const onEnter = () => {
      paused = true;
    };
    const onLeave = () => {
      paused = false;
    };

    canvas.addEventListener('mouseenter', onEnter);
    canvas.addEventListener('mouseleave', onLeave);
    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener('mouseenter', onEnter);
      canvas.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section id="gallery" className="relative bg-[#3d1a2e] overflow-hidden py-16">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="bg-grid opacity-20"></div>
      </div>
      <div className="bg-wrapper z-0">
        <div className="shape square s2 opacity-20"></div>
        <div className="shape donut d1 opacity-20"></div>
        <div className="shape line l2 opacity-20"></div>
      </div>

      {/* HEADER */}
      <div className="relative z-10 mb-8 pl-8">
        <div
          className="inline-block bg-pink-500 text-white text-2xl px-10 py-2 shadow-lg -rotate-2 scale-110"
          style={{
            clipPath: 'polygon(0 0, 96% 0, 100% 50%, 96% 100%, 0 100%)',
            fontFamily: 'Agbalumo, cursive',
          }}
        >
          GALLERY
        </div>
        <div className="flex gap-1 mt-6 ml-1 opacity-50">
          <div className="w-1.5 h-1.5 rounded-full bg-pink-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-pink-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-pink-300"></div>
          <div className="w-5 h-1.5 rounded-full bg-pink-300"></div>
          <div className="w-1.5 h-1.5 rounded-full bg-pink-300"></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col gap-6 w-full">
        {/* TOP SLIDER */}
        <div className="g-slider-wrap mx-auto" style={{ width: '92%' }}>
          <div className="g-track g-track--left">
            {[...SLIDER_IMAGES_1, ...SLIDER_IMAGES_1].map((src, i) => (
              <div key={i} className="g-thumb">
                <img src={src} alt="Gallery slide" />
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE ROW: 3D CAROUSEL + PIE CANVAS */}
        <div className="flex flex-col lg:flex-row items-center justify-around w-full px-6 gap-10 my-6">
          <div className="relative flex-shrink-0 flex items-center justify-center flex-col gap-4">
            <div className="card-3d-gallery">
              <div style={{ backgroundImage: "url('/img/Hoshino-subHero.jpg')" }}></div>
              <div style={{ backgroundImage: "url('/img/HoshinoPrime.jpg')" }}></div>
              <div style={{ backgroundImage: "url('/img/HoshinoSwimsuit.jpg')" }}></div>
              <div style={{ backgroundImage: "url('/img/L2D-Hoshino.jpg')" }}></div>
              <div style={{ backgroundImage: "url('/img/L2D-HoshinoPrime.jpg')" }}></div>
              <div style={{ backgroundImage: "url('/img/L2D-HoshinoSwimSuit.jpg')" }}></div>
              <div style={{ backgroundImage: "url('/img/l2d_aquarium.webp')" }}></div>
              <div style={{ backgroundImage: "url('/img/fighting.jpg')" }}></div>
              <div style={{ backgroundImage: "url('/img/power_ability.jpg')" }}></div>
              <div style={{ backgroundImage: "url('/img/HoshinoTalking.png')" }}></div>
            </div>
            <div className="relative z-20 select-none text-center">
              <p
                className="text-white tracking-[0.2em] uppercase text-xl font-bold opacity-80"
                style={{
                  fontFamily: "'Courier New', monospace",
                  textShadow: '0 0 10px rgba(255,105,180,0.8)',
                }}
              >
                TAKANASHI<span className="text-pink-300"> HOSHINO</span>
              </p>
              <p className="text-pink-400/50 text-xl tracking-widest mt-0.5">· · · · · · · · · · · ·</p>
            </div>
          </div>

          <div className="flex-shrink-0">
            <div className="pie-wrap">
              <canvas ref={canvasRef} id="pieCanvas" width="460" height="460"></canvas>
              <div className="pie-ring"></div>
            </div>
          </div>
        </div>

        {/* BOTTOM SLIDER */}
        <div className="g-slider-wrap mx-auto" style={{ width: '92%' }}>
          <div className="g-track g-track--right">
            {[...SLIDER_IMAGES_2, ...SLIDER_IMAGES_2].map((src, i) => (
              <div key={i} className="g-thumb">
                <img src={src} alt="Gallery slide bottom" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
