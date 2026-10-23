import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SpecialSection from './components/SpecialSection';
import GallerySection from './components/GallerySection';
import MusicSection from './components/MusicSection';
import Footer from './components/Footer';

export default function App() {
  const chatUrl = typeof window !== 'undefined' && window.location.port === '5173'
    ? 'http://localhost:3000'
    : '/chat';

  return (
    <div className="min-h-screen bg-[#ffecf9] text-[#2b0e1f] selection:bg-pink-400 selection:text-white">
      <LoadingScreen />
      <Navbar chatUrl={chatUrl} />
      <main>
        <HeroSection />
        <AboutSection />
        <SpecialSection />
        <GallerySection />
        <MusicSection />
      </main>
      <Footer chatUrl={chatUrl} />
    </div>
  );
}
