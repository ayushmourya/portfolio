import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import About from './About'
import Project from './Projects'
import Resume from './Resume'
import Navbar from './Navbar';
import Contact from './Contact';

function App() {
  return (

<Router>
  <Navbar />
  <Routes>
    <Route path='/about' element={<About />}/>
    <Route path='/resume' element={<Resume />}/>
    <Route path='/projects' element={<Project />}/>
    <Route path='/contact' element={<Contact />}/>

    </Routes>
  </Router>
 
  );
}

export default App;
