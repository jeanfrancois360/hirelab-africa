/* eslint-disable react-hooks/exhaustive-deps */
import moment from 'moment';
import React, { FC, useState, useRef, useEffect } from 'react'
import { useQuery, UseQueryResult } from 'react-query';
import { Link } from 'react-router-dom'
import { GetJobCategories } from '../api/job-category';
import { GetJobPosts } from '../api/job-post';
import { IJobCategory, IJobPost } from '../interfaces';
import { SearchForm } from './SearchForm';

export const AllJobsListSection: FC = () => {
	const [jobsData, setJobsData] = useState<IJobPost[]>([]);
	const [filterByType, setFilterByType] = useState('All');
	const [filterByCategory, setFilterByCategory] = useState('All');
	const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop)
	const jobsRef = useRef(null)
	const executeScroll = () => scrollToRef(jobsRef)

	useEffect(() => {
		const cat_of_focus = localStorage.getItem('cat_of_focus')
		if (cat_of_focus) {
			setFilterByCategory(cat_of_focus);
		}
	}, [])

	useEffect(() => {
		if (filterByCategory) {
			localStorage.removeItem('cat_of_focus');
		}
	}, [filterByCategory])

	// Fetch All Job Categories
	const { data: job_categories }: UseQueryResult<IJobCategory[], Error> = useQuery<IJobCategory[], Error>('job-categories', GetJobCategories);
	// Fetch All Job Posts
	const { data: job_posts, isLoading: isFetchingPosts }: UseQueryResult<IJobPost[], Error> = useQuery<IJobPost[], Error>('job-posts', GetJobPosts);

	const handleTypeChange = (e: any) => {
		setFilterByType(e.target.name)
		executeScroll()
	}
	const handleCategoryChange = (e: any) => {
		setFilterByCategory(e.target.value)
		executeScroll()
	}

	useEffect(() => {
		// @ts-ignore
		let filtered_jobs = JSON.parse(localStorage.getItem('filteredJobs'));
		if (job_posts && !filtered_jobs) {
			let _job_posts = job_posts.filter((p: IJobPost) => p.status === 'Publish')
			_job_posts && setJobsData(_job_posts)
		}
		else {
			if (job_posts && filtered_jobs) {
				let _filtered_jobs = filtered_jobs.filter((p: IJobPost) => p.status === 'Publish')
				setJobsData(_filtered_jobs)
				localStorage.removeItem('filteredJobs')

			}
		}
	}, [job_posts])

	useEffect(() => {
		if (filterByType && filterByType !== 'All' && job_posts) {
			let data = job_posts.filter((p) => p.type === filterByType)
			setJobsData(data)
		}
		else {
			if (filterByType && filterByType === 'All' && job_posts) {
				let _job_posts = job_posts.filter((p: IJobPost) => p.status === 'Publish')
				_job_posts && setJobsData(_job_posts)
			}
		}
	}, [filterByType])

	useEffect(() => {
		if (filterByCategory && filterByCategory !== 'All' && job_posts) {
			let data = job_posts.filter((p) => p.job_category.hasOwnProperty('id') && p.job_category.id === Number(filterByCategory))
			setJobsData(data)
		}
		else {
			if (filterByCategory && filterByCategory === 'All' && job_posts) {
				let _job_posts = job_posts.filter((p: IJobPost) => p.status === 'Publish')
				_job_posts && setJobsData(_job_posts)
			}
		}
	}, [filterByCategory])

	if (isFetchingPosts) {
		console.log("Loading...")
	}
	return (
		<>
			<div ref={jobsRef} className="inner_search_block_section padding-top-0 padding-bottom-40">
				<div className="container">
					<div className="col-md-12">
						<SearchForm page="secondary" dataset={job_posts} />
						<p className="utf-trending-silver-item"><span className="utf-trending-black-item">Trending Jobs Keywords:</span> Web Designer,  Web Developer,  Graphic Designer,  PHP Developer,  IOS Developer,  Android Developer</p>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-xl-3 col-lg-4">
						<div className="utf-sidebar-container-aera">
							<div className="utf-sidebar-widget-item">
								<div className="utf-quote-box utf-jobs-listing-utf-quote-box">
									<div className="utf-quote-info">
										<h4>Make a Difference with Online Resume!</h4>
										<p>Your Resume in Minutes with Jobs Resume Assistant is Ready!</p>
										<a href="/register" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-0">Create Account <i className="icon-feather-chevron-right"></i></a>
									</div>
								</div>
							</div>

							<div className="utf-sidebar-widget-item">
								<h3>Category</h3>
								<select onChange={handleCategoryChange} className="simple-select" data-live-search="true" data-size="7" title="All Categories">
									<option value="All">All</option>
									{job_categories && job_categories.map((category: any, index: number) =>
										(<option key={index} value={category.id}>{category.name}</option>))}
								</select>
							</div>

							<div className="utf-sidebar-widget-item">
								<h3>Job Type</h3>
								<div className="utf-radio-btn-list">
									<div className="checkbox">
										<input type="checkbox" onChange={handleTypeChange} checked={filterByType === "All" ? true : false} name={'All'} id="checkbox1" />
										<label htmlFor="checkbox1"><span className="checkbox-icon"></span> All</label>
									</div>
									<div className="checkbox">
										<input type="checkbox" onChange={handleTypeChange} checked={filterByType === "Full-time" ? true : false} name={'Full-time'} id="checkbox2" />
										<label htmlFor="checkbox2"><span className="checkbox-icon"></span> Full-time Jobs</label>
									</div>
									<div className="checkbox">
										<input type="checkbox" onChange={handleTypeChange} checked={filterByType === "Part-time" ? true : false} name={'Part-time'} id="checkbox3" />
										<label htmlFor="checkbox3"><span className="checkbox-icon"></span> Part-time Jobs</label>
									</div>
									<div className="checkbox">
										<input type="checkbox" onChange={handleTypeChange} checked={filterByType === "Contract" ? true : false} name={'Contract'} id="checkbox4" />
										<label htmlFor="checkbox4"><span className="checkbox-icon"></span> Contract Jobs</label>
									</div>
									<div className="checkbox">
										<input type="checkbox" onChange={handleTypeChange} checked={filterByType === "Temporary" ? true : false} name={'Temporary'} id="checkbox5" />
										<label htmlFor="checkbox5"><span className="checkbox-icon"></span> Temporary Jobs</label>
									</div>
									<div className="checkbox">
										<input type="checkbox" onChange={handleTypeChange} checked={filterByType === "Volunteer" ? true : false} name={'Volunteer'} id="checkbox6" />
										<label htmlFor="checkbox6"><span className="checkbox-icon"></span> Volunteer Jobs</label>
									</div>
									<div className="checkbox">
										<input type="checkbox" onChange={handleTypeChange} checked={filterByType === "Internship" ? true : false} name={'Internship'} id="checkbox7" />
										<label htmlFor="checkbox7"><span className="checkbox-icon"></span> Internships</label>
									</div>
								</div>
							</div>

							<div className="clearfix"></div>

							<div className="utf-sidebar-widget-item">
								<div className="utf-detail-banner-add-section">
									<Link to="/"><img src="/assets/images/banner-add-2.jpg" alt="banner-add-2" /></Link>
								</div>
							</div>
						</div>
					</div>

					<div className="col-xl-9 col-lg-8">
						<div className="utf-inner-search-section-title">
							<h4><i className="icon-material-outline-search"></i> Search Jobs Listing Results</h4>
						</div>
						{/* <div className="utf-notify-box-aera margin-top-15">
							<div className="utf-switch-container-item">
								<span>Showing 1–10 of 50 Jobs Results :</span>
							</div>
							<div className="sort-by">
								<span>Sort By:</span>
								<select className="simple-select hide-tick">
									<option>Newest</option>
									<option>Oldest</option>
									<option>Random</option>
								</select>
							</div>
						</div> */}

						{jobsData && jobsData.length > 0 ? (<><div className="utf-listings-container-part compact-list-layout margin-top-35">

							{jobsData && jobsData.length > 0 && jobsData.map((post: any, index: number) =>
							(
								<a key={index} href={`/job-details/${post.uuid}`} className="utf-job-listing">
									<div className="utf-job-listing-details">
										<div className="utf-job-listing-company-logo"> <img src="/assets/images/icons/new-job-2.png" alt="" /> </div>
										<div className="utf-job-listing-description">
											<span className="dashboard-status-button utf-job-status-item green"><i className="icon-material-outline-business-center"></i>{post.type}</span>
											<h3 className="utf-job-listing-title">{post.title} <span className="utf-verified-badge" title="Verified Employer" data-tippy-placement="top"></span></h3>
											<div className="utf-job-listing-footer">
												<ul>
													<li><i className="icon-feather-briefcase"></i>{post.job_category.name}</li>
													<li><i className="icon-material-outline-date-range"></i>{moment(post.updated_at).format('MMM D, YYYY')}</li>
													<li><i className="icon-material-outline-account-balance-wallet"></i> {post.salary_range}</li>
													<li><i className="icon-material-outline-location-on"></i> {post.address}</li>
												</ul>
											</div>
										</div>
										<span className="bookmark-icon"></span>
									</div>
								</a>
							))}
						</div>
							{/* <!-- Pagination --> */}
							<div className="clearfix"></div>
							<div className="row">
								<div className="col-md-12">
									<div className="utf-pagination-container-aera margin-top-30 margin-bottom-60">
										<nav className="pagination">
											<ul>
												<li className="utf-pagination-arrow"><Link to="/jobs"><i className="icon-material-outline-keyboard-arrow-left"></i></Link></li>
												<li><Link to="/jobs" className="current-page">1</Link></li>
												<li className="utf-pagination-arrow"><Link to="/jobs"><i className="icon-material-outline-keyboard-arrow-right"></i></Link></li>
											</ul>
										</nav>
									</div>
								</div>
							</div>
						</>
						) : (
							<div className="no-data">
								<i className="icon-material-outline-info"></i><p> No Data Found!</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
