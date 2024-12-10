import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import GroupTour from './pages/GroupTour';
import Package from './pages/Package';
import Wedding from './pages/Wedding';
import HoneyMoon from './pages/HoneyMoon';
import Company from './pages/Company';
import Contacts from './pages/Contacts';


const App = () => {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/group-tour' element={<GroupTour/>}/>
          <Route path='/package' element={<Package/>}/>
          <Route path='/wedding' element={<Wedding/>}/>
          <Route path='/honeymoon' element={<HoneyMoon/>}/>
          <Route path='/company' element={<Company/>}/>
          <Route path='/contact' element={<Contacts/>}/>
        </Routes>
      </Router>
      <Footer />
    </>
  )
}

export default App