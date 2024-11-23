import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="bg-zinc-900 text-white">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <footer className="bg-black py-12">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-2xl font-bold mb-6">
              Gracias por ver <span className="text-black hover:text-red-800 transition-colors" >Putos..</span>
            </h3>
         
            <div className="mt-8 text-red-800">
             Dot Dager powered by Dogek
            </div>
          </div>
        </footer>

        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;