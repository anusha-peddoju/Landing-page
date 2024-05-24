import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/services';
import WorkSection from './components/WorkSection';
import Clients from './components/ClientsThinking';
import TimeLine from './components/Timeline';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Services/>
      <WorkSection/>
      <TimeLine/>
      <Clients/>
      <Footer/>
    </div>
  );
}

export default App;
