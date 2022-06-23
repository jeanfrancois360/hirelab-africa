import React from 'react'
import Protected from '../components/Protected'
import { ViewApplicationsSection } from '../components/ViewApplicationsSection'

export const ViewApplication = () => {
    return (
        <Protected>
            <div id="wrapper" style={{ paddingTop: "82px" }}>
                <ViewApplicationsSection />
            </div>
        </Protected>
    )
}
