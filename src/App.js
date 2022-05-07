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
// import Footer from './components/footer'


function App() {
  return (
    <>
      <Router>
        <Navbar/>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/classes' element={<Classes />} />
            <Route path='/instructors' element={<Instructors />} />
            <Route path='/schedule' element={<Schedule />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
          {/* <Footer/> */}
      </Router>
      
    </>
  );
}

export default App;