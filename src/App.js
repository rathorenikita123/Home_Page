import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Cards from './components/Cards/Card';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <Cards/>
      <Footer/>
      
    </div>
  );
}

export default App;
