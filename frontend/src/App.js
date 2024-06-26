import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import SearchPage from './pages/SearchPage/SearchPage';
import SearchBar from './components/SearchBar';
import ContactPage from "./pages/ContactPage/ContactPage";
import AboutUs from './pages/AboutusPage/AboutUs';
import PricingPage from './pages/PricingPage/PricingPage';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/price" element={<PricingPage />} />
        </Routes>
    </Router>
  );
}

export default App;
