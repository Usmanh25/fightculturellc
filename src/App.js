import React from 'react';
import Navbar from './components/navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/home'
import Classes from './components/pages/classes'
import Instructors from './components/pages/instructors'
import Schedule from './components/pages/schedule'
import Gallery from './components/pages/gallery'
import Contact from './components/pages/contact'
import Footer from './components/footer'
import ScrollToTop from './components/scrollToTop';


function App() {
  return (
    <>
    
      <Router>
        <ScrollToTop/>
        <Navbar/>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/classes' exact element={<Classes />} />
            <Route path='/instructors' exact element={<Instructors />} />
            <Route path='/schedule' exact element={<Schedule />} />
            <Route path='/gallery' exact element={<Gallery />} />
            <Route path='/contact' exact element={<Contact />} />
          </Routes>
        <Footer/>
      </Router>
      
    </>
  );
}

export default App;