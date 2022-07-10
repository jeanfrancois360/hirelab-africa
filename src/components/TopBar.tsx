import React, { FC } from 'react'

export const TopBar: FC = () => {
    return (

        <div className="top-bar">
            <div className='container'>
                <div className="header-top-container">
                    <div className='header-top-left'>
                        <div><span>Share with on:</span></div>
                        <div className="social-icons">
                            <ul>
                                <li><a href="https://facebook.com" target="_blank" rel="noreferrer noopener"><i className="top-right-icon icon-feather-facebook"></i></a></li>
                                <li><a href="https://twitter.com" target="_blank" rel="noreferrer noopener"><i className="top-right-icon icon-feather-twitter"></i></a></li>
                                <li><a href="https://instagram.com" target="_blank" rel="noreferrer noopener"><i className="top-right-icon icon-feather-instagram"></i></a></li>
                                <li><a href="https://linkedin.com" target="_blank" rel="noreferrer noopener"><i className="top-right-icon icon-feather-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='header-top-right'>
                        <div className="top-email">
                            <span><i className="top-left-icon icon-material-outline-email"></i> info@hirelabafrica.com</span>
                        </div>
                        <div className="top-phone">
                            <span><i className="top-left-icon icon-feather-phone"></i> <span>Call us: (+250) 788 309 811</span></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
