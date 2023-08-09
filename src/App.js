import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products';
import Contact from './components/Contact';
import 'antd/dist/antd.css';
import './index.css';

function App() {
  return (
    <div className="layout">
      <Header />
      <div className="content p-12">
        <Home />
        <About />
        <Products />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
