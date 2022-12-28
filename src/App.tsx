import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import FloatingWhatsApp from 'react-floating-whatsapp';
import { HelmetProvider } from 'react-helmet-async';
import { Bars } from 'react-loader-spinner';
const About = React.lazy(() => import("./pages/About"));
const AddJobPost = React.lazy(() => import('./pages/AddJobPost'));
const BankCV = React.lazy(() => import('./pages/BankCV'));
const Blog = React.lazy(() => import('./pages/Blog'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Home = React.lazy(() => import('./pages/Home'));
const Jobs = React.lazy(() => import('./pages/Jobs'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const Services = React.lazy(() => import('./pages/Services'));
const ViewJobPosts = React.lazy(() => import('./pages/ViewJobPosts'));
const ViewCVs = React.lazy(() => import('./pages/ViewCVs'));
const ViewApplication = React.lazy(() => import('./pages/ViewApplication'));
const AddCompany = React.lazy(() => import('./pages/AddCompany'));
const AddJobCategory = React.lazy(() => import('./pages/AddJobCategory'));
const ViewJobCategories = React.lazy(() => import('./pages/ViewJobCategories'));
const Categories = React.lazy(() => import('./pages/Categories'));
const Job = React.lazy(() => import('./pages/Job'));
const ApplicationForm = React.lazy(() => import('./pages/ApplicationForm'));
const AddCv = React.lazy(() => import('./pages/AddCv'));
const ViewCompanies = React.lazy(() => import('./pages/ViewCompanies'));
const Companies = React.lazy(() => import('./pages/Companies'));
const AddBlogPost = React.lazy(() => import('./pages/AddBlogPost'));
const ViewBlogPosts = React.lazy(() => import('./pages/ViewBlogPosts'));
const ViewBlogCategories = React.lazy(() => import('./pages/ViewBlogCategories'));
const AddBlogCategory = React.lazy(() => import('./pages/AddBlogCategory'));


export const App: FC = () => {
  const helmetContext = {};

  return (

    <HelmetProvider context={helmetContext}>
      <FloatingWhatsApp phoneNumber="0788406153"
        accountName="Support"
        avatar="/assets/images/user-avatar-placeholder.png"
        allowClickAway
        notification
        styles={{ 'zIndex': '1000', 'marginBottom': '40px' }}
        notificationDelay={60000} // 1 minute
        notificationSound />
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
