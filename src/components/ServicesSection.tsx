import { FC, useState } from 'react'
import { Link } from 'react-router-dom'

export const ServicesSection: FC = () => {
  const [tab, setTab] = useState('adverts')
  return (
    <div className="container">
      <div className="row">
        <div className="col-xl-4 col-lg-5">
          <div className="utf-sidebar-container-aera">
            <div className="utf-sidebar-widget-item">
              <h3>All services</h3>
              <div className="utf-tags-container-item service-menu">
                <a href="/" onClick={(e) => { e.preventDefault(); setTab('adverts') }} className={`${tab === "adverts" && 'tab_active'} button dark ripple-effect utf-button-sliding-icon`}>Adverts <i className="icon-feather-arrow-right"></i></a>
                <a href="/" onClick={(e) => { e.preventDefault(); setTab('employee_outsourcing') }} className={`${tab === "employee_outsourcing" && 'tab_active'} button dark ripple-effect utf-button-sliding-icon`}>Employee Outsourcing <i className="icon-feather-arrow-right"></i></a>
                <a href="/" onClick={(e) => { e.preventDefault(); setTab('cvs_on_request') }} className={`${tab === "cvs_on_request" && 'tab_active'} button dark ripple-effect utf-button-sliding-icon`}>CVs On Request <i className="icon-feather-arrow-right"></i></a>
                <a href="/" onClick={(e) => { e.preventDefault(); setTab('interns_on_request') }} className={`${tab === "interns_on_request" && 'tab_active'} button dark ripple-effect utf-button-sliding-icon`}>Interns On Request <i className="icon-feather-arrow-right"></i></a>
                <a href="/" onClick={(e) => { e.preventDefault(); setTab('interview_trainings') }} className={`${tab === "interview_trainings" && 'tab_active'} button dark ripple-effect utf-button-sliding-icon`}>Interview Trainings <i className="icon-feather-arrow-right"></i></a>
                <a href="/" onClick={(e) => { e.preventDefault(); setTab('hr_advisory') }} className={`${tab === "hr_advisory" && 'tab_active'} button dark ripple-effect utf-button-sliding-icon`}>Human Resources Advisory <i className="icon-feather-arrow-right"></i></a>
                <a href="/" onClick={(e) => { e.preventDefault(); setTab('legal_advisor') }} className={`${tab === "legal_advisor" && 'tab_active'} button dark ripple-effect utf-button-sliding-icon`}>Legal Advisory On HR Matters <i className="icon-feather-arrow-right"></i></a>
                <a href="/" onClick={(e) => { e.preventDefault(); setTab('maintenance') }} className={`${tab === "maintenance" && 'tab_active'} button dark ripple-effect utf-button-sliding-icon`}>Maintenance Of Personnel Files <i className="icon-feather-arrow-right"></i></a>

              </div>
              <div className="clearfix"></div>
            </div>

            <div className="utf-sidebar-widget-item">
              <div className="utf-detail-banner-add-section">
                <Link to="/"><img src="assets/images/banner-add-2.jpg" alt="banner-add-2" /></Link>
              </div>
            </div>
          </div>
        </div>

        {tab === "adverts" && (<div className="col-xl-8 col-lg-7">
          <div className="col-xl-12">
            <div className="utf-section-headline-item margin-top-0 margin-bottom-40">
              <h3>Adverts</h3>
              <div className="utf-headline-display-inner-item">Service</div>
            </div>
          </div>
          <div className='col-xl-12 mt-70'>
            <ul className="list-2">
              <li>We only post and charge per the advert </li>
              <li>Appears on the Featured list</li>
              <li>Your <strong>advert</strong> appears on the featured list</li>
              <li>Receive applications by email on request</li>
              <li>Publication period: depends on your deadline for receiving applications put on the advert.</li>
            </ul>
          </div>
        </div>)}
        {tab === "employee_outsourcing" && (<div className="col-xl-8 col-lg-7">
          <div className="col-xl-12">
            <div className="utf-section-headline-item margin-top-0 margin-bottom-40">
              <h3>Employee Outsourcing</h3>
              <div className="utf-headline-display-inner-item">Service</div>
            </div>
          </div>
          <div className='col-xl-12 mt-70'>
            <p>Employee Outsourcing effectively relieves the management of the client’s organizations from day-to-day HR operations management issues, saving their time and enabling them to focus more on strategic and value-adding initiatives.
              Not only employee outsourcing reduces cost but It also allows you to focus on your core business goals while we take care of the team.
              We hire and fully manage Company employees. We offer them with a modern, professional and efficient service with a salary package agreed with organisation and in respect to all the employer contributions obligations, we conduct staff recruitment and Contract Management, performance management, staff training and development, leave Management, properly manage legal issues, Compensation and benefits, Systematic way of filing along with contents of staff files.
            </p>
          </div>
        </div>)}
        {tab === "cvs_on_request" && (<div className="col-xl-8 col-lg-7">
          <div className="col-xl-12">
            <div className="utf-section-headline-item margin-top-0 margin-bottom-40">
              <h3>CVs On Request</h3>
              <div className="utf-headline-display-inner-item">Service</div>
            </div>
          </div>
          <div className='col-xl-12 mt-70'>
            <p>On behalf of the employer, we screen all the applications and identify candidates who best meet the required and desired criteria, and send the shortlist matrix report within 3 days after the expiration of the job advert.</p>
          </div>
        </div>)}
        {tab === "interns_on_request" && (<div className="col-xl-8 col-lg-7">
          <div className="col-xl-12">
            <div className="utf-section-headline-item margin-top-0 margin-bottom-40">
              <h3>Interns On Request</h3>
              <div className="utf-headline-display-inner-item">Service</div>
            </div>
          </div>
          <div className='col-xl-12 mt-70'>
            <p>Are you Urgently looking for professional interns with no time to advertise? This is service is for You. We select the best interns from our database with different Profiles according to your criteria, we assure you to have the best interns you are looking for.</p>
            <h4>FULL RECRUITMENT PACKAGE</h4>
            <p>On behalf of the company, we handle the whole recruitment process</p>
            <ul className="list-2">
              <li>Job advert </li>
              <li>CV Screening/Shortlisting</li>
              <li>Invitation for the Interviews</li>
              <li>Conduct Interviews</li>
              <li>Interview Reports</li>
              <li>Background Checks</li>
              <li>Feedback to the unsuccessful Candidates</li>
              <li>Salary Negotiations depend on the position's budget</li>
              <li>Placements</li>
            </ul>
            <p>We also offer a guarantee for replacement should the selected candidate leave within 3 months.</p>
          </div>
        </div>)}
        {tab === "interview_trainings" && (<div className="col-xl-8 col-lg-7">
          <div className="col-xl-12">
            <div className="utf-section-headline-item margin-top-0 margin-bottom-40">
              <h3>Interview Trainings</h3>
              <div className="utf-headline-display-inner-item">Service</div>
            </div>
          </div>
          <div className='col-xl-12 mt-70'>
            <p>Are you looking for Jobs? Hirelab Africa Offers you adequate preparations for the interview 2 days before you meet the panel.</p>
            <p>We customize our HRM system as per the clients’ needs to send out encrypted payslips to your employees, monitor their timesheets, their leaves, their individual development plans, etc.
              Having a system reduces the time and effort it takes the HR department to complete tasks and frees up their time for more strategic functions.</p>
          </div>
        </div>)}
        {tab === "hr_advisory" && (<div className="col-xl-8 col-lg-7">
          <div className="col-xl-12">
            <div className="utf-section-headline-item margin-top-0 margin-bottom-40">
              <h3>Human Resources Advisory</h3>
              <div className="utf-headline-display-inner-item">Service</div>
            </div>
          </div>
          <div className='col-xl-12 mt-70'>
            <p>We provide sound advice to HR management personnel and ensure the development of effective HR policies and processes, compliance with local labor law, and deliver solutions that foster an organization's ability to attract, retain and motivate talent.</p>
          </div>
        </div>)}
        {tab === "legal_advisor" && (<div className="col-xl-8 col-lg-7">
          <div className="col-xl-12">
            <div className="utf-section-headline-item margin-top-0 margin-bottom-40">
              <h3>Legal Advisory On HR Matters</h3>
              <div className="utf-headline-display-inner-item">Service</div>
            </div>
          </div>
          <div className='col-xl-12 mt-70'>
            <img src="assets/images/infographics/infographic-1.svg" alt="About us" />
          </div>
        </div>)}
        {tab === "maintenance" && (<div className="col-xl-8 col-lg-7">
          <div className="col-xl-12">
            <div className="utf-section-headline-item margin-top-0 margin-bottom-40">
              <h3>Maintenance Of Personnel Files</h3>
              <div className="utf-headline-display-inner-item">Service</div>
            </div>
          </div>
          <div className='col-xl-12 mt-70'>
            <p>We properly arrange as per contents of personnel file the Company Employee files in a very systematic way for easy retrieval of any employee documents.</p>
          </div>
        </div>)}
      </div>
    </div>
  )
}
