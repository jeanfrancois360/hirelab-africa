import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { About } from './pages/About';
import { BankCV } from './pages/BankCV';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Jobs } from './pages/Jobs';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Services } from './pages/Services';

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
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/services" element={<Services/>} />
       <Route path="/jobs" element={<Jobs/>} />
       <Route path="/bank-cv" element={<BankCV/>} />
       <Route path="/blog" element={<Blog/>} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/login" element={<Login />} />
       <Route path="/register" element={<Register />} />  
       <Route path="/dashboard" element={<Dashboard />} />   
       <Route path="*" element={<Navigate replace to="/"/>} />
     </Routes>
    </Router>
    </>
  );
}

export default App;
