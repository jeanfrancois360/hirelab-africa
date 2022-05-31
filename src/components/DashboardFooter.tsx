import React from 'react'

export const DashboardFooter = () => {
  return (
      <>
          <div className="utf-dashboard-footer-spacer-aera"></div>
          <div className="utf-small-footer margin-top-15">
              <div className="utf-small-footer-copyrights">Copyright &copy; {`${new Date().getFullYear()} Hirelab Africa All Rights Reserved.`}</div>
          </div>   
      </>
  )
}
