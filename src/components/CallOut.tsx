import React from 'react'

export const CallOut = () => {
  return (
    <>
{/* Start Section Callout */}
  <div className="jbm-section-callout">
	<div className="container-fluid">
		<div className="row">
			<div className="col-xl-6 col-md-6 col-xs-12 callout-bg-1 callout-section-left pos-relative">
				<div className="callout-bg"></div>
				<div className="jbm-callout-in jbm-callout-in-padding pull-right">
					<div className="jbm-section-title margin-top-80 margin-bottom-80">
						<h2>Find Your Browse Companies</h2>
						<span className="section-tit-line"></span>
						<p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
						<a href="/jobs" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-10">Browse Companies <i className="icon-feather-chevrons-right"></i></a>
					</div>
				</div>
			</div>
			<div className="col-xl-6 col-md-6 col-xs-12 callout-bg-2 callout-section-right pos-relative">
				<div className="callout-bg"></div>
				<div className="jbm-callout-in jbm-callout-in-padding pull-left">
					<div className="jbm-section-title margin-bottom-80 margin-top-80">
						<h2>Find Your Browse Jobs</h2>
						<span className="section-tit-line"></span>
						<p>Lorem Ipsum is simply dummy text of printing and type setting industry. Lorem Ipsum been industry standard dummy text ever since, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
						<a href="/jobs" className="button utf-ripple-effect-dark utf-button-sliding-icon margin-top-10">Browse Jobs <i className="icon-feather-chevrons-right"></i></a>
					</div>
				</div>
			</div>
		</div>
	</div>
  </div>
  {/* End Section Callout */}
    </>
  )
}
