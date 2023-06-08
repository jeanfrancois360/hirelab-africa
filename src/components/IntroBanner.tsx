import React from 'react'
import Typed from 'react-typed';
import { SearchForm } from './SearchForm';

export const IntroBanner = ({ dataset }: { dataset: any }) => {


    //console.log('data: ', dataset.job_posts.length);
    return (
        <>
            {/* Intro Banner */}
            <div className="intro-banner" data-background-image="/assets/images/home-background-01.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="utf-banner-headline-text-part">
                                <h3>Find Nearby Jobs <span className="typed-words">
                                    <Typed
                                        typedRef={(typed: any) => typed}
                                        strings={[" Web Designer.", " Graphic Designer.", " Accountant.", " Sales Marketing."]}
                                        typeSpeed={50}
                                        backSpeed={50}
                                        smartBackspace
                                        backDelay={3000}
                                        startDelay={1000}
                                        showCursor={true}
                                        loop
                                    />
                                </span></h3>
                                <span>Use our search engine to find your dream job!</span>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <SearchForm page="primary" dataset={dataset.job_posts} />
                            <p className="utf-trending-silver-item"><span className="utf-trending-black-item">Trending Jobs Keywords:</span> <a href="/">Web Designer</a>  <a href="/">Web Developer</a>  <a href="/">Graphic Designer</a>  <a href="/">PHP Developer</a>  <a href="/">IOS Developer</a>  <a href="/">Android Developer</a></p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <ul className="intro-stats margin-top-45 hide-under-992px">
                                <li><i className="icon-material-outline-business-center"></i> <sub className="counter_item"><strong className="_counter">{dataset.job_posts && dataset.job_posts.length > 0 ? dataset.job_posts.length : 0}</strong> <span>Live Jobs Posted</span></sub> </li>
                                <li><i className="icon-material-outline-assignment"></i> <sub className="counter_item"><strong className="_counter">{dataset.job_applications && dataset.job_applications.length > 0 ? dataset.job_applications.length : 0}</strong> <span>Jobs Candidate</span></sub> </li>
                                <li><i className="icon-material-outline-library-books"></i> <sub className="counter_item"><strong className="_counter">{dataset.companies && dataset.companies.length > 0 ? dataset.companies.length : 0}</strong> <span>Companies Jobs</span></sub> </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* Intro Banner  / End */}
        </>
    )
}
