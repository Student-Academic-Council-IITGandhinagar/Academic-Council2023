import './App.css';
import React, { useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Council from './components/Council';
import Events, { EventsKnownMore } from './components/Events';
import { eventsDict } from './utilities/eventsData';
import Experiences, { Preview } from './components/Experiences';
import PassFailCalculator from './components/PassFail';
import GradeTracker from './components/GradeTracker';
import SRCs, { SRCsKnownMore } from './components/SRCs';
import Internship from './components/Internships';
import Updated from './components/Updated';
import Footer from './components/Footer';

function App() {
  const [activeLink, setActiveLink] = useState(0);

  const handleLinkClick = (value) => {
    setActiveLink(value);
  };

  return (

    <HashRouter>
      <Navbar onLinkClick={handleLinkClick} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/council' element={<Council />} />
        <Route path='/events' element={<Events />} />
        {Object.keys(eventsDict).map(key => (
          <Route path={`/events/${key}/:index`} element={<EventsKnownMore />} />
        ))}
        <Route path='/experiences' element={<Experiences activeLink={activeLink} />} />
        {["alumni", "quill", "QnA"].map((path, index) => (
          <Route path={`/experiences/${path}/:index`} element={<Preview isActive={index} />} />
        ))}
        <Route path='/calculator' element={<PassFailCalculator />} />
        <Route path='/grade-req-tracker' element={<GradeTracker />} />
        <Route path='/SRCs' element={<SRCs />} />
        <Route path='/SRCs/:index' element={<SRCsKnownMore />} />
        <Route path='/internships' element={<Internship />} />
        <Route path='*' element={<Updated />} />
      </Routes>
      <Footer />

    </HashRouter>
  );
}

export default App;
