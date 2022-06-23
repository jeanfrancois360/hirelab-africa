import React from 'react'
import Protected from '../components/Protected'
import { ViewJobPostsSection } from '../components/ViewJobPostsSection'

export const ViewJobPosts = () => {
    return (
        <Protected>
            <div id="wrapper" style={{ paddingTop: "82px" }}>
                <ViewJobPostsSection />
            </div>
        </Protected>
    )
}
