import React from 'react'
import Protected from '../components/Protected'
import { ViewCategoriesSection } from '../components/ViewCategoriesSection'

export const ViewCategories = () => {
    return (
        <Protected>
            <div id="wrapper" style={{ paddingTop: "82px" }}>
                <ViewCategoriesSection />
            </div>
        </Protected>
    )
}
