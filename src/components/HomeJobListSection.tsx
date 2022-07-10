import moment from 'moment';
import React, { FC } from 'react'
import { useQuery, UseQueryResult } from 'react-query';
import { GetJobPosts } from '../api/job-post';
import { IJobPost } from '../interfaces';

export const HomeJobListSection: FC = () => {

	// Fetch All Job Posts
	const { data: job_posts, isLoading: isFetchingPosts }: UseQueryResult<IJobPost[], Error> = useQuery<IJobPost[], Error>('job-posts', GetJobPosts);
	if (isFetchingPosts) {
		console.log('Loading...');
	}
	return (
		<>
			{/* Latest Jobs */}
			<div className="section gray padding-top-60 padding-bottom-60">
				<div className="container">
					<div className="row">
						<div className="col-xl-12">
							<div className="utf-section-headline-item centered margin-top-0 margin-bottom-40">
								<span>Latest Jobs Post</span>
								<h3>Jobs You May Be Interested</h3>
								<div className="utf-headline-display-inner-item">Latest Jobs Post</div>
								<p className="utf-slogan-text">Lorem Ipsum is simply dummy text printing and type setting industry Lorem Ipsum been industry standard dummy text ever since when unknown printer took a galley.</p>
							</div>
							{job_posts && job_posts.length > 0 && job_posts.filter((p) => p.status === 'Publish').length > 0 ? (
								<>
									<div className="utf-listings-container-part compact-list-layout margin-top-35">
										{job_posts && job_posts.filter((p) => p.status === 'Publish').slice(0, 6).map((post: any, index: number) =>
										(
											<a key={index} href={`/job-details/${post.uuid}`} className="utf-job-listing utf-apply-button-item">
												<div className="utf-job-listing-details">
													<div className="utf-job-listing-company-logo"> <img src="assets/images/icons/new-job-2.png" alt="" /> </div>
													<div className="utf-job-listing-description">
														<span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center"></i> {post.type}</span>
														<h3 className="utf-job-listing-title">{post.title}</h3>
														<div className="utf-job-listing-footer">
															<ul>
																<li><i className="icon-feather-briefcase"></i>{post.job_category.name}</li>
																<li><i className="icon-material-outline-date-range"></i>{moment(post.created_at).format('MMM D, YYYY')}</li>
																<li><i className="icon-material-outline-account-balance-wallet"></i> {post.salary_range}</li>
																<li><i className="icon-material-outline-location-on"></i> {post.address}</li>
															</ul>
														</div>
													</div>
													<span className="list-apply-button ripple-effect">Browse Job <i className="icon-line-awesome-bullhorn"></i></span>
												</div>
											</a>))}
									</div>
									<div className="utf-centered-button margin-top-10">
										<a href="/jobs" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-20">Browse All Jobs <i className="icon-feather-chevron-right"></i></a>
									</div>
								</>) : (
								<div className="no-data">
									<i className="icon-material-outline-info"></i><p> No Jobs Posted Yet!</p>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
			{/* Latest Jobs / End */}
		</>
	)
}
