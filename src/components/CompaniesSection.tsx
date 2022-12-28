import React from 'react'
import { useQuery, UseQueryResult } from 'react-query';
import { GetCompanies } from '../api/company';
import { ApiUrl } from '../constants';
import { ICompany } from '../interfaces';

export const CompaniesSection = () => {
    // Fetch All Application
    const { data: companies, isLoading: isFetchingJobApplications }: UseQueryResult<ICompany[], Error> = useQuery<ICompany[], Error>('companies', GetCompanies);

    if (isFetchingJobApplications) {
        console.log('Loading...')
    }
    return (
        <>
            {/* <!-- Page Content--> */}
            <div className="container">
                <div className="row">
                    <div className="utf-companies-list-aera">
                        <div className="col-xl-12">
                            <div className="row">
                                {companies && companies.map((company: any, index: number) =>
                                (
                                    <div key={index} className="col-xl-4 col-md-6 col-sm-12">
                                        <div className="utf-company-inner-alignment">
                                            <a href="/companies" className="company">
                                                <span className="company-logo"><img src={company.profile && company.profile.avatar ? `${ApiUrl}/file-upload/${company.profile && company.profile.avatar}` : 'assets/images/company_logo_1.png'} alt="" /></span>
                                                <h4>{company.profile && company.profile.company_name}</h4>
                                                <h5 className="utf-job-listing-company"><span><i className="icon-feather-briefcase"></i> {company.profile && company.profile.email}</span></h5>
                                                <p className="text-muted"><i className="icon-material-outline-location-on"></i> {company.profile && company.profile.address}</p>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* <!-- Pagination --> */}
                        <div className="clearfix"></div>
                        <div className="utf-pagination-container-aera margin-top-20 margin-bottom-40">
                            <nav className="pagination">
                                <ul>
                                    <li className="utf-pagination-arrow"><a href="/companies" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left"></i></a></li>
                                    <li><a href="/companies" className="ripple-effect current-page">1</a></li>
                                    <li className="utf-pagination-arrow"><a href="/companies" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></a></li>
                                </ul>
                            </nav>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
            </div>
        </>
    )
}
