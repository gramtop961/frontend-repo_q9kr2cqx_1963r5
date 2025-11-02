import Hero from './components/Hero';
import About from './components/About';
import Categories from './components/Categories';
import Chronicle from './components/Chronicle';

function App() {
  return (
    <div className="min-h-screen bg-[#0a1a2a] text-amber-100">
      {/* Top nav with subtle parchment tag */}
      <header className="sticky top-0 z-50 border-b border-amber-300/10 bg-[#0a1a2a]/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <a href="#" className="font-serif text-xl tracking-wide text-amber-300">AVICENIA</a>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#about" className="hover:text-amber-300">About</a>
            <a href="#realms" className="hover:text-amber-300">Realms</a>
            <a href="#chronicle" className="hover:text-amber-300">Chronicle</a>
            <a href="#contact" className="hover:text-amber-300">Scribes</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Categories />
        <Chronicle />
      </main>

      <footer className="border-t border-amber-300/10 bg-[#0b1f32] py-8">
        <div className="mx-auto max-w-6xl px-6 text-sm text-amber-200/80">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p>© {new Date().getFullYear()} AVICENIA — A Celebration of Knowledge</p>
            <p className="text-amber-200/60">Crafted in the spirit of the House of Wisdom</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
