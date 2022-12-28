import React from 'react'
import { DashboardSection } from '../components/DashboardSection'
import Protected from '../components/Protected';

export default function Dashboard() {
  return (
    <Protected>
      <div id="wrapper" style={{ paddingTop: "82px" }}>
        <DashboardSection />
      </div>
    </Protected>
  )
}
