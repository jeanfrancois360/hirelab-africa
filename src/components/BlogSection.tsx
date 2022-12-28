import moment from 'moment';
import React, { FC } from 'react'
import { useQuery, UseQueryResult } from 'react-query';
import { Link } from 'react-router-dom'
import { GetBlogCategories } from '../api/blog-category';
import { GetBlogPosts } from '../api/blog-post';
import { ApiUrl } from '../constants';
import { IBlogCategory, IBlogPost } from '../interfaces';
import parse from 'html-react-parser';

export const BlogSection: FC = () => {

	// Fetch All Blog Posts
	const { data: blog_posts, isLoading: isFetchingPosts }: UseQueryResult<IBlogPost[], Error> = useQuery<IBlogPost[], Error>('blog-posts', GetBlogPosts);

	// Fetch All Blog Categories
	const { data: blog_categories, isLoading: isFetchingCategories }: UseQueryResult<IBlogCategory[], Error> = useQuery<IBlogCategory[], Error>('blog-categories', GetBlogCategories);
	return (
		<div className="section">
			<div className="container">
				<div className="row">
					<div className="col-xl-8 col-lg-8">
						{blog_posts && blog_posts.length > 0 ? (<><div className="margin-top-0 margin-bottom-0">
							{blog_posts && blog_posts.filter((p) => p.status === 'Publish').map((post: any, index: number) =>
							(
								<a key={index} href="/blog" className="blog-post">
									<div className="utf-blog-post-thumbnail">
										<div className="utf-blog-post-thumbnail-inner">
											<img src={`${ApiUrl}/file-upload/${post.image}`} alt="" />
										</div>
									</div>
									<div className="utf-blog-post-content">
										<h3>{post.title}</h3>
										<span className="blog-post-info">By, {post.user.profile.first_name}</span>
										<span className="blog-post-date">{moment(post.updated_at).format('MMM D, YYYY')}</span>
										{parse(post.description)}
									</div>
									<div className="entry-icon"></div>
								</a>
							))}
						</div>
							<div className="clearfix"></div>
							<div className="row">
								<div className="col-md-12">
									<div className="utf-pagination-container-aera margin-top-10 margin-bottom-50">
										<nav className="pagination">
											<ul>
												<li className="utf-pagination-arrow"><Link to="/blog" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-left"></i></Link></li>
												<li><Link to="/blog" className="current-page ripple-effect">1</Link></li>
												<li className="utf-pagination-arrow"><Link to="/blog" className="ripple-effect"><i className="icon-material-outline-keyboard-arrow-right"></i></Link></li>
											</ul>
										</nav>
									</div>
								</div>
							</div></>) : (
							<div className="no-data">
								<i className="icon-material-outline-info"></i><p> No Blog Posted Yet!</p>
							</div>
						)}
					</div>
					<div className="col-xl-4 col-lg-4">
						<div className="utf-sidebar-container-aera">
							<div className="utf-sidebar-widget-item">
								<div className="utf-quote-box">
									<div className="utf-quote-info">
										<h4>Make a Difference with Your Online Resume!</h4>
										<p>Your Resume in Minutes with Jobs Resume Assistant is Ready!</p>
										<a href="/register" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-10">Create an Account <i className="icon-feather-chevron-right"></i></a>
									</div>
								</div>
							</div>

							<div className="utf-sidebar-widget-item">
								<h3>Search Blog</h3>
								<div className="utf-input-with-icon">
									<input type="text" placeholder="Search Keywords..." />
									<i className="icon-material-outline-search"></i>
								</div>
							</div>

							<div className="utf-sidebar-widget-item">
								<h3>Latest Blogs Post</h3>
								<ul className="utf-featured-list">
									{blog_posts && blog_posts.filter((p) => p.status === 'Publish').slice(0, 3).map((post: any, index: number) =>
									(
										<li className="utf-sidebr-pro-widget">
											<div className="utf-blog-thumb-info">
												<div className="utf-blog-thumb-info-image">
													<img src={`${ApiUrl}/file-upload/${post.image}`} alt="" />
												</div>
												<div className="utf-blog-thumb-info-content">
													<h4><a href="/blog">{post.title}</a></h4>
													<p>{moment(post.updated_at).format('MMM D, YYYY')}</p>
												</div>
											</div>
										</li>
									))}
								</ul>
							</div>

							<div className="utf-sidebar-widget-item">
								<h3>Categories</h3>
								<div className="utf-sidebar-categorie">
									<ul>
										{blog_categories && blog_categories.filter((cat) => cat.status === 'Active' && cat.name !== 'Uncategorized').map((category: any, index: number) => (
											<li key={index}><Link to="/blog"><i className="icon-feather-chevron-right"></i> {category.name}</Link></li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div >
	)
}
