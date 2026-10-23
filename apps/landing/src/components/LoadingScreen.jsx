import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setProgress(100);
    }, 100);

    const timer2 = setTimeout(() => {
      setFading(true);
    }, 900);

    const timer3 = setTimeout(() => {
      setHidden(true);
    }, 1500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0b1120] transition-opacity duration-700 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="loader-container mb-10">
        <div className="sphere-core"></div>
        <div className="ring ring-1"></div>
        <div className="ring ring-2"></div>
        <div className="ring ring-3"></div>
      </div>

      <div className="w-64 h-3 bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-pink-400 shadow-[0_0_20px_rgba(255,234,255,0.7)] transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
