import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { About } from './pages/About';
import { BankCV } from './pages/BankCV';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Jobs } from './pages/Jobs';

function App() {
  return (
    <>
 
    {/* Preloader Start */}
    <div className="preloader">
        <div className="utf-preloader">
            <span></span>
            <span></span>
            <span></span>
            <span></span>		
        </div>
    </div>
    {/* Preloader End  */}
    <Router>
    <div id="wrapper">
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/jobs" element={<Jobs/>} />
       <Route path="/bank-cv" element={<BankCV/>} />
       <Route path="/blog" element={<Blog/>} />
       <Route path="/contact" element={<Contact/>} />
       <Route path="*" element={<Navigate replace to="/"/>} />
     </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
