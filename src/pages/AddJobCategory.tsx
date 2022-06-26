import React, { FC } from 'react'
import { AddJobCategorySection } from '../components/AddJobCategorySection'
import Protected from '../components/Protected'

export const AddJobCategory: FC = () => {
    return (
        <Protected>
            <div id="wrapper" style={{ paddingTop: "82px" }}>
                <AddJobCategorySection />
            </div>
        </Protected>
    )
}
