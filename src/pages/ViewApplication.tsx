import React, { FC } from 'react'
import Protected from '../components/Protected'
import { ViewApplicationsSection } from '../components/ViewApplicationsSection'

export const ViewApplication: FC = () => {
    return (
        <Protected>
            <div id="wrapper" style={{ paddingTop: "82px" }}>
                <ViewApplicationsSection />
            </div>
        </Protected>
    )
}
