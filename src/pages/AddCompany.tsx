import React from 'react'
import { AddCompanySection } from '../components/AddCompanySection'
import Protected from '../components/Protected'

export const AddCompany = () => {
    return (
        <Protected>
            <div id="wrapper" style={{ paddingTop: "82px" }}>
                <AddCompanySection />
            </div>
        </Protected>
    )
}
