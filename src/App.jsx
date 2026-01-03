// src/App.jsx
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import AboutSection from './components/AboutSection';
import QuoteSection from './components/QuoteSection';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Hero />
         <AboutSection />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Home />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          {/* Add other pages later: /about, /contact, etc. */}
        </Routes>
       
        <QuoteSection />
        <Footer />
      </div>
    </Router>
  );
}

export default App;