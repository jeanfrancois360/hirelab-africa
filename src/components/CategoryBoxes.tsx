import React, { FC } from 'react'
import { useQuery, UseQueryResult } from 'react-query';
import { GetJobCategories } from '../api/job-category';
import { IJobCategory } from '../interfaces';

export const CategoryBoxes: FC = () => {

	const handleCategoryFocus = (category_id: number) => {
		localStorage.setItem('cat_of_focus', JSON.stringify(category_id))
	}

	// Fetch All Job Categories
	const { data: job_categories }: UseQueryResult<IJobCategory[], Error> = useQuery<IJobCategory[], Error>('job-categories', GetJobCategories);
	return (
		<>
			{/* Jobs Category Boxes */}
			<div className="section margin-top-60 margin-bottom-60">
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
								<span>Jobs Categories</span>
								<h3>Top Trending Categories</h3>
								<div className="utf-headline-display-inner-item">Jobs Categories</div>
								<p className="utf-slogan-text">Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
							</div>
							{job_categories && job_categories.length > 0 ? (<><div className="utf-categories-container-block">
								{job_categories && job_categories.filter((cat) => cat.name !== 'Other' && cat.status === 'Active').slice(0, 8).map((category: any, index: number) =>
								(<a key={index} href="/jobs" onClick={() => handleCategoryFocus(category.id)} className="utf-category-box">
									<div className="utf-opening-position-counter-item">0 Openings</div>
									<div className="utf-category-box-icon-item"> <i className="icon-line-awesome-bullhorn"></i> </div>
									<div className="utf-category-box-content">
										<h3>{category.name}</h3>
									</div>
									<div className="utf-category-box-counter-item">{category.job_post.length} Jobs</div>
								</a>))}
							</div>
								<div className="utf-centered-button margin-top-10">
									<a href="/categories" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-20">View All Categories <i className="icon-feather-chevron-right"></i></a>
								</div>
							</>) : (
								<div className="no-data">
									<i className="icon-material-outline-info"></i><p> No Trending Categories Found!</p>
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
