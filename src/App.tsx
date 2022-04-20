import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Home } from './pages/Home';

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
       <Route path="*" element={<Navigate replace to="/"/>} />
     </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
