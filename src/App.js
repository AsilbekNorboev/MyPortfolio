import React from 'react';
import Navbar from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path = '/About' element = {<About/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
