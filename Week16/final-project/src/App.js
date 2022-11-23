import React from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Header />
      <Router>
        <Navbar />
      </Router>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
