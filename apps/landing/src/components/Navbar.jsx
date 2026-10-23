export default function Navbar({ chatUrl = 'http://localhost:3000' }) {
  return (
    <nav className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-4 bg-white/70 backdrop-blur-md shadow-pink-300/40 px-6 py-1.5 rounded-full shadow-xl border border-white/60">
        <a
          href="#hero"
          className="text-pink-600 text-sm md:text-base font-normal hover:text-pink-800 transition"
          style={{ fontFamily: 'Agbalumo, cursive' }}
        >
          Home
        </a>
        <a
          href="#about"
          className="text-pink-600 text-sm md:text-base font-normal hover:text-pink-800 transition"
          style={{ fontFamily: 'Agbalumo, cursive' }}
        >
          About
        </a>
        <a
          href="#gallery"
          className="text-pink-600 text-sm md:text-base font-normal hover:text-pink-800 transition"
          style={{ fontFamily: 'Agbalumo, cursive' }}
        >
          Gallery
        </a>
        <a
          href="#music"
          className="text-pink-600 text-sm md:text-base font-normal hover:text-pink-800 transition"
          style={{ fontFamily: 'Agbalumo, cursive' }}
        >
          Music
        </a>

        <a
          href={chatUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 bg-gradient-to-r from-blue-400 to-sky-500 text-white text-xs md:text-sm font-bold px-3 py-1.5 rounded-full shadow-md hover:scale-105 transition"
          style={{ fontFamily: 'Chewy, cursive' }}
        >
          <span className="material-symbols-outlined text-sm">chat</span>
          AI Waifu Chat
        </a>

        <a href="#hero">
          <img
            src="/img/ui/navHero.png"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full hover:scale-110 transition duration-200 border-2 border-pink-300"
            alt="hero"
          />
        </a>
      </div>
    </nav>
  );
}
