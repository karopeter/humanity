import React from 'react';
import { BrowserRoutes as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Recommend from './components/Recommend';
import TestimonialPage from './components/Testimonials';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
   <>
    <Navbar />
    <Hero />
    <Services />
    <Recommend />
    <TestimonialPage />
    <Footer />
   </>
  );
};

export default App;
