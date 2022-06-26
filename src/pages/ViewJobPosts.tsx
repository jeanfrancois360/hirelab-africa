import React, { FC } from 'react'
import Protected from '../components/Protected'
import { ViewJobPostsSection } from '../components/ViewJobPostsSection'

export const ViewJobPosts: FC = () => {
    return (
        <Protected>
            <div id="wrapper" style={{ paddingTop: "82px" }}>
                <ViewJobPostsSection />
            </div>
        </Protected>
    )
}
