import React, { FC } from 'react'
import Protected from '../components/Protected'
import { ViewCVsSection } from '../components/ViewCVsSection'

export const ViewCVs: FC = () => {
    return (
        <Protected>
            <div id="wrapper" style={{ paddingTop: "82px" }}>
                <ViewCVsSection />
            </div>
        </Protected>
    )
}
