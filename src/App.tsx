import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { About } from './pages/About';
import { AddJobPost } from './pages/AddJobPost';
import { BankCV } from './pages/BankCV';
import { Blog } from './pages/Blog';
import { Contact } from './pages/Contact';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Jobs } from './pages/Jobs';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Services } from './pages/Services';
import { ViewJobPosts } from './pages/ViewJobPosts';
import { HelmetProvider } from 'react-helmet-async';
import { ViewCVs } from './pages/ViewCVs';
import { ViewApplication } from './pages/ViewApplication';
import { AddCompany } from './pages/AddCompany';
import { AddJobCategory } from './pages/AddJobCategory';
import { ViewJobCategories } from './pages/ViewJobCategories';
import { FC } from 'react';
import { Categories } from './pages/Categories';
import { Job } from './pages/Job';
import { ApplicationForm } from './pages/ApplicationForm';
import { Bars } from 'react-loader-spinner';
import { AddCv } from './pages/AddCv';
import { ViewCompanies } from './pages/ViewCompanies';
import { Companies } from './pages/Companies';
import { AddBlogPost } from './pages/AddBlogPost';
import { ViewBlogPosts } from './pages/ViewBlogPosts';
import { ViewBlogCategories } from './pages/ViewBlogCategories';
import { AddBlogCategory } from './pages/AddBlogCategory';


export const App: FC = () => {
  const helmetContext = {};

  return (

    <HelmetProvider context={helmetContext}>
      {/* Preloader Start */}
      <div className="preloader">
        <div className="utf-preloader">
          <Bars
            height="60"
            width="60"
            color='#1e63cf'
            ariaLabel='loading'
          />
        </div>
      </div>
      {/* Preloader End  */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/bank-cv" element={<BankCV />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/add-job-post" element={<AddJobPost />} />
          <Route path="/view-job-posts" element={<ViewJobPosts />} />
          <Route path="/add-blog-post" element={<AddBlogPost />} />
          <Route path="/view-blog-posts" element={<ViewBlogPosts />} />
          <Route path="/add-cv" element={<AddCv />} />
          <Route path="/view-cvs" element={<ViewCVs />} />
          <Route path="/view-applications" element={<ViewApplication />} />
          <Route path="/add-company" element={<AddCompany />} />
          <Route path="/view-companies" element={<ViewCompanies />} />
          <Route path="/add-job-category" element={<AddJobCategory />} />
          <Route path="/view-blog-categories" element={<ViewBlogCategories />} />
          <Route path="/add-blog-category" element={<AddBlogCategory />} />
          <Route path="/view-job-categories" element={<ViewJobCategories />} />
          <Route path="/application-form/:uuid" element={<ApplicationForm />} />
          <Route path="/job-details/:uuid" element={<Job />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
