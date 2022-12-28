import React from 'react'
import { useQuery, UseQueryResult } from 'react-query';
import { GetJobCategories } from '../api/job-category';
import { IJobCategory } from '../interfaces';

export const AllCategoriesSection = () => {
    // Fetch All Job Categories
    const { data: job_categories }: UseQueryResult<IJobCategory[], Error> = useQuery<IJobCategory[], Error>('job-categories', GetJobCategories);
    return (
        <>
            {/* Jobs Category Boxes */}
            <div className="section margin-top-65 margin-bottom-55">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            {job_categories && job_categories.length > 0 ? (<div className="utf-categories-container-block">
                                {job_categories && job_categories.filter((cat) => cat.name !== 'Other' && cat.status === 'Active').map((category: any, index: number) =>
                                (<a key={index} href="/jobs" className="utf-category-box">
                                    <div className="utf-opening-position-counter-item">0 Openings</div>
                                    <div className="utf-category-box-icon-item"> <i className="icon-line-awesome-bullhorn"></i> </div>
                                    <div className="utf-category-box-content">
                                        <h3>{category.name}</h3>
                                    </div>
                                    <div className="utf-category-box-counter-item">{category.job_post.length} Jobs</div>
                                </a>))}
                            </div>

                            ) : (
                                <div className="no-data">
                                    <i className="icon-material-outline-info"></i><p> No Categories Found!</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {/* Jobs Category Boxes / End */}
        </>
    )
}
