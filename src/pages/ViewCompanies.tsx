import React, { FC } from 'react'
import Protected from '../components/Protected'
import { ViewCompaniesSection } from '../components/ViewCompaniesSection'

export const ViewCompanies: FC = () => {
    return (
        <Protected>
            <div id="wrapper" style={{ paddingTop: "82px" }}>
                <ViewCompaniesSection />
            </div>
        </Protected>
    )
}
