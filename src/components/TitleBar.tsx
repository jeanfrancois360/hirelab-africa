import React from 'react'

export const TitleBar = ({current , prev, url}: {current:string, prev:string, url:string}) => {
  return (
    <>
{/* Titlebar */}
  <div id="titlebar" className="gradient">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h2>{current}</h2>
          <nav id="breadcrumbs">
            <ul>
              <li><a href={url}>{prev}</a></li>
              <li>{current}</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  {/* Titlebar  / end */}
    </>
  )
}
