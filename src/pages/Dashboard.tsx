import React, { FC } from 'react'
import { DashboardSection } from '../components/DashboardSection'
import Protected from '../components/Protected';

export const Dashboard: FC = () => {
  return (
    <Protected>
      <div id="wrapper" style={{ paddingTop: "82px" }}>
        <DashboardSection />
      </div>
    </Protected>
  )
}
