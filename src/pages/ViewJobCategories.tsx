import React, { FC } from 'react'
import Protected from '../components/Protected'
import { ViewJobCategoriesSection } from '../components/ViewJobCategoriesSection'

export const ViewJobCategories: FC = () => {
    return (
        <Protected>
            <div id="wrapper" style={{ paddingTop: "82px" }}>
                <ViewJobCategoriesSection />
            </div>
        </Protected>
    )
}
