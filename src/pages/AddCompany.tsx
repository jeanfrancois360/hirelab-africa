import React, { FC } from 'react'
import { AddCompanySection } from '../components/AddCompanySection'
import Protected from '../components/Protected'

export const AddCompany: FC = () => {
    return (
        <Protected>
            <div id="wrapper" style={{ paddingTop: "82px" }}>
                <AddCompanySection />
            </div>
        </Protected>
    )
}
