
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ThemeSwitcher from './components/ThemeSwitcher';
import CursorGlow from './components/CursorGlow';
import LiveBackground from './components/LiveBackground';
import { useTheme } from './context/ThemeContext';

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <div className="relative min-h-screen bg-transparent" style={{ background: theme.bgGradient }}>
      {/* Live animated background */}
      <LiveBackground />

      <Navbar />
      <ThemeSwitcher />
      <CursorGlow />

      <main className="pt-20 lg:pt-0">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
