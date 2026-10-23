export default function Footer({ chatUrl = 'http://localhost:3000' }) {
  return (
    <footer className="relative bg-[#190812] text-white py-12 px-6 overflow-hidden border-t border-pink-900/40">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
        <div className="flex items-center gap-3">
          <img
            src="/img/ui/navHero.png"
            alt="Abydos Emblem"
            className="w-12 h-12 rounded-full border border-pink-400/40"
          />
          <div>
            <h3
              className="text-lg font-bold tracking-wider text-pink-300 uppercase"
              style={{ fontFamily: 'lovelo, cursive' }}
            >
              Abydos Student Council
            </h3>
            <p className="text-xs text-white/50">
              Foreclosure Task Force · Takanashi Hoshino Fan Project
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#hero"
            className="text-xs uppercase tracking-widest text-pink-300 hover:text-white transition"
          >
            Back to Top ↑
          </a>
          <span className="text-white/20">|</span>
          <a
            href={chatUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg transition"
            style={{ fontFamily: 'Chewy, cursive' }}
          >
            <span className="material-symbols-outlined text-sm">smart_toy</span>
            Launch AI Waifu Chat
          </a>
        </div>
      </div>
    </footer>
  );
}
