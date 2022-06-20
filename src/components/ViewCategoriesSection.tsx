import React from 'react'
import { DashboardFooter } from './DashboardFooter'
import { DashboardHeader } from './DashboardHeader'
import { DashboardTitlebar } from './DashboardTitlebar'
import { SidebarSection } from './SidebarSection'

export const ViewCategoriesSection = () => {
    return (
        <>
            {/* < !--Header Container-- > */}
            <DashboardHeader current={'Manage Categories'} />
            {/* <!--Header Container / End-- >  */}

            {/* < !--Dashboard Container-- > */}
            <div className="utf-dashboard-container-aera">
                {/* <!-- Dashboard Sidebar --> */}
                <SidebarSection />
                {/* <!-- Dashboard Sidebar / End --> */}

                {/* <!-- Dashboard Content --> */}
                <div className="utf-dashboard-content-container-aera" data-simplebar>
                    <DashboardTitlebar current={'Manage Categories'} prev={'Dashboard'} url={'/dashboard'} />
                    <div className="utf-dashboard-content-inner-aera">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="utf_dashboard_list_box table-responsive recent_booking dashboard-box">
                                    <div className="headline">
                                        <h3>All Categories</h3>
                                        <div className="sort-by">
                                            <select className="selectpicker hide-tick">
                                                <option>This Week</option>
                                                <option>This Month</option>
                                                <option>Last 6 Months</option>
                                                <option>This Year</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="dashboard-list-box table-responsive invoices with-icons">
                                        <table className="table table-hover">
                                            <thead>
                                                <tr>
                                                    <th>Order ID</th>
                                                    <th>Profile</th>
                                                    <th>Plan Package</th>
                                                    <th>Expiry Plan</th>
                                                    <th>Payment Type</th>
                                                    <th>Status</th>
                                                    <th>View Booking</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>0431261</td>
                                                    <td><img alt="" className="img-fluid rounded-circle shadow-lg" src="assets/images/thumb-1.jpg" width="50" height="50" data-tippy-placement="top" title="John Williams" data-tippy="" /></td>
                                                    <td>Standard Plan</td>
                                                    <td>12 Dec 2021</td>
                                                    <td>Paypal</td>
                                                    <td><span className="badge badge-pill badge-primary text-uppercase">Approved</span></td>
                                                    <td><a href="/" className="button gray"><i className="icon-feather-eye"></i> View Detail</a></td>
                                                </tr>
                                                <tr>
                                                    <td>0431262</td>
                                                    <td><img alt="" className="img-fluid rounded-circle shadow-lg" src="assets/images/thumb-1.jpg" width="50" height="50" data-tippy-placement="top" title="John Williams" data-tippy="" /></td>
                                                    <td>Extended Plan</td>
                                                    <td>12 Dec 2021</td>
                                                    <td>Credit Card</td>
                                                    <td><span className="badge badge-pill badge-primary text-uppercase">Approved</span></td>
                                                    <td><a href="/" className="button gray"><i className="icon-feather-eye"></i> View Detail</a></td>
                                                </tr>
                                                <tr>
                                                    <td>0431263</td>
                                                    <td><img alt="" className="img-fluid rounded-circle shadow-lg" src="assets/images/thumb-1.jpg" width="50" height="50" data-tippy-placement="top" title="John Williams" data-tippy="" /></td>
                                                    <td>Standard Plan</td>
                                                    <td>12 Dec 2021</td>
                                                    <td>Paypal</td>
                                                    <td><span className="badge badge-pill badge-danger text-uppercase">Pending</span></td>
                                                    <td><a href="/" className="button gray"><i className="icon-feather-eye"></i> View Detail</a></td>
                                                </tr>
                                                <tr>
                                                    <td>0431264</td>
                                                    <td><img alt="" className="img-fluid rounded-circle shadow-lg" src="assets/images/thumb-1.jpg" width="50" height="50" data-tippy-placement="top" title="John Williams" data-tippy="" /></td>
                                                    <td>Basic Plan</td>
                                                    <td>12 Dec 2021</td>
                                                    <td>Paypal</td>
                                                    <td><span className="badge badge-pill badge-danger text-uppercase">Pending</span></td>
                                                    <td><a href="/" className="button gray"><i className="icon-feather-eye"></i> View Detail</a></td>
                                                </tr>
                                                <tr>
                                                    <td>0431265</td>
                                                    <td><img alt="" className="img-fluid rounded-circle shadow-lg" src="assets/images/thumb-1.jpg" width="50" height="50" data-tippy-placement="top" title="John Williams" data-tippy="" /></td>
                                                    <td>Extended Plan</td>
                                                    <td>12 Dec 2021</td>
                                                    <td>Paywith Stripe</td>
                                                    <td><span className="badge badge-pill badge-danger text-uppercase">Pending</span></td>
                                                    <td><a href="/" className="button gray"><i className="icon-feather-eye"></i> View Detail</a></td>
                                                </tr>
                                                <tr>
                                                    <td>0431266</td>
                                                    <td><img alt="" className="img-fluid rounded-circle shadow-lg" src="assets/images/thumb-1.jpg" width="50" height="50" data-tippy-placement="top" title="John Williams" data-tippy="" /></td>
                                                    <td>Basic Plan</td>
                                                    <td>12 Dec 2021</td>
                                                    <td>Paypal</td>
                                                    <td><span className="badge badge-pill badge-canceled text-uppercase">Canceled</span></td>
                                                    <td><a href="/" className="button gray"><i className="icon-feather-eye"></i> View Detail</a></td>
                                                </tr>
                                            </tbody>
                                        </table>
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
