/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect, useState } from 'react'
import { useMutation, useQuery, UseQueryResult } from 'react-query'
import { toast } from 'react-toastify'
import { DeleteCv, GetCandidateCvs, GetCvs } from '../api/cv'
import { ApiUrl } from '../constants'
import { ICv } from '../interfaces'
import { DashboardFooter } from './DashboardFooter'
import { DashboardHeader } from './DashboardHeader'
import { DashboardTitlebar } from './DashboardTitlebar'
import { SidebarSection } from './SidebarSection'

export const ViewCVsSection: FC = () => {
  // @ts-ignore
  let user = JSON.parse(localStorage.getItem('user'));
  let role_arr = ['Employer'];
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const notify = (msg_type: string) => {
    if (msg_type === 'success')
      toast.success(successMsg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      });
    if (msg_type === 'error')
      toast.error(errorMsg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light'
      });

    setErrorMsg("")
    setSuccessMsg("")
  }

  useEffect(() => {
    if (successMsg !== "") {
      notify('success')
    }
  }, [successMsg])

  useEffect(() => {
    if (errorMsg !== "") {
      notify('error');
    }

  }, [errorMsg])



  // Fetch All CV
  const { data: cvs, isLoading: isFetchingCvs, refetch: RefetchCvs }: UseQueryResult<ICv[], Error> = useQuery<ICv[], Error>('cvs', user && user.hasOwnProperty('role') && role_arr.includes(user.role.name) ? GetCandidateCvs : GetCvs);

  // Mutation For Deleting a CV
  const deleteMutation = useMutation(DeleteCv);

  const handleDelete = async (id: number) => {
    const deletedCv = await deleteMutation.mutateAsync(id)
    if (deletedCv.hasOwnProperty('uuid')) {
      setSuccessMsg("Deleted Successfully!");
      RefetchCvs();
    }
    if (deleteMutation.isError) {
      setErrorMsg("Something went wrong!");
    }
  }
  if (isFetchingCvs)
    console.log('Loading...')
  return (
    <>
      {/* < !--Header Container-- > */}
      <DashboardHeader current={'Manage CVs'} />
      {/* <!--Header Container / End-- >  */}

      {/* < !--Dashboard Container-- > */}
      <div className="utf-dashboard-container-aera">
        {/* <!-- Dashboard Sidebar --> */}
        <SidebarSection current={'manage_cvs'} />
        {/* <!-- Dashboard Sidebar / End --> */}

        {/* <!-- Dashboard Content --> */}
        <div className="utf-dashboard-content-container-aera" data-simplebar>
          <DashboardTitlebar current={'Manage CVs'} prev={'Home'} url={'/dashboard'} />
          <div className="utf-dashboard-content-inner-aera">
            <div className="row">
              <div className="col-xl-12">
                <div className="dashboard-box margin-top-0">
                  <div className="headline">
                    <h3>All CVs</h3>
                  </div>
                  <div className="content">
                    {cvs && cvs.length > 0 ? (<><ul className="utf-dashboard-box-list">
                      {cvs && cvs.map((cv: any, index: number) =>
                      (
                        <li key={index}>
                          <div className="utf-manage-resume-overview-aera utf-manage-candidate">
                            <div className="utf-manage-resume-overview-aera-inner">
                              <div className="utf-manage-resume-avatar">
                                <a href="/dashboard"><img src="assets/images/icons/new-cv.png" alt="" /></a>
                              </div>
                              <div className="utf-manage-resume-item">
                                <h4><a href="/dashboard">{`${cv.user.profile.first_name} ${cv.user.profile.last_name}`}</a><span className="dashboard-status-button file"><i className="icon-line-awesome-file-pdf-o"></i> PDF File</span></h4>
                                <span className="utf-manage-resume-detail-item"><a href="/dashboard"><i className="icon-feather-mail"></i>{cv.user.profile.email}</a></span>
                                {cv.user.profile.phone && (<span className="utf-manage-resume-detail-item"><i className="icon-feather-phone"></i> {cv.user.profile.phone}</span>)}
                                {cv.user.profile.address && (<span className="utf-manage-resume-detail-item"><a href="/dashboard"><i className="icon-material-outline-location-on"></i> {cv.user.profile.address}</a></span>)}
                                <div className="utf-buttons-to-right">
                                  {/* <a href="#small-dialog" className="popup-with-zoom-anim button ripple-effect" title="Send Message" data-tippy-placement="top"><i className="icon-feather-mail"></i> Send</a> */}
                                  <a href={`${ApiUrl}/api/file-upload/${cv.file}`} download target={'_blank'} className="button green ripple-effect ico" title="Download CV" data-tippy-placement="top" rel="noreferrer"><i className="icon-feather-download"></i></a>
                                  <a href="/dashboard" onClick={(e) => { e.preventDefault(); handleDelete(cv.id); }} className="button red ripple-effect ico" title="Remove" data-tippy-placement="top"><i className="icon-feather-trash-2"></i></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                      {/* <!-- Pagination --> */}
                      <div className="clearfix"></div>
                      <div className="utf-pagination-container-aera margin-top-20 margin-bottom-20">
                        <nav className="pagination">
                          <ul>
                            <li className="utf-pagination-arrow"><a href="/view-cvs" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left"></i></a></li>
                            <li><a href="/view-cvs" className="ripple-effect current-page">1</a></li>
                            <li className="utf-pagination-arrow"><a href="/view-cvs" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></a></li>
                          </ul>
                        </nav>
                      </div>
                      <div className="clearfix"></div>
                    </>) : (
                      <div className="no-data">
                        <i className="icon-material-outline-info"></i><p> No Data Found!</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Row / End --> */}

            {/* Footer Start */}
            <DashboardFooter />
            {/* Footer End */}
          </div>
        </div>

        {/* <!-- Dashboard Content End --> */}
      </div>
    </>
  )
}
