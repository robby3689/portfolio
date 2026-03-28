import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Hero />
      <About />
      <Projects />
      <footer className="bg-hospital text-white py-6 text-center text-sm">
        © 2026 Sachin Singh | Brampton, ON | sachin.ca73@gmail.com
      </footer>
    </div>
  );
}

export default App;