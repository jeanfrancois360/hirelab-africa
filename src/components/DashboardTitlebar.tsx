import React from 'react'

export const DashboardTitlebar = ({ current, prev, url }: { current: string, prev: string, url: string }) => {
  return (
      <div id="dashboard-titlebar" className="utf-dashboard-headline-item">
          <div className="row">
              <div className="col-xl-12">
                  <h3>{current}</h3>
                  <nav id="breadcrumbs">
                      <ul>
                          <li><a href={url}>{prev}</a></li>
                          <li>{current}</li>
                      </ul>
                  </nav>
              </div>
          </div>
      </div>
  )
}
