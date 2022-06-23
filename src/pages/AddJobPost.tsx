import React from 'react'
import { AddJobPostSection } from '../components/AddJobPostSection'
import Protected from '../components/Protected'

export const AddJobPost = () => {
    return (
        <Protected>
            <div id="wrapper" style={{ paddingTop: "82px" }}>
                <AddJobPostSection />
            </div>
        </Protected>
    )
}
