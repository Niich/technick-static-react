import React from 'react';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="grid min-h-screen inset-x-4 overflow-hidden bg-gradient-to-b from-slate-900 to-black">
      <div id="main_container" className="relative grid grid-rows-6 inset-x-8 justify-items-center gap-2">
        <Header />
        <div className='row-span-4'>
          <About />

        </div>
        <Footer />
      </div>
    </main>
  );
}

export default App;
