import React from 'react'
import { AddCategorySection } from '../components/AddCategorySection'
import Protected from '../components/Protected'

export const AddCategory = () => {
    return (
        <Protected>
            <div id="wrapper" style={{ paddingTop: "82px" }}>
                <AddCategorySection />
            </div>
        </Protected>
    )
}
