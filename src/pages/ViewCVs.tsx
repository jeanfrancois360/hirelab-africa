import React from 'react'
import Protected from '../components/Protected'
import { ViewCVsSection } from '../components/ViewCVsSection'

export const ViewCVs = () => {
    return (
        <Protected>
            <div id="wrapper" style={{ paddingTop: "82px" }}>
                <ViewCVsSection />
            </div>
        </Protected>
    )
}
