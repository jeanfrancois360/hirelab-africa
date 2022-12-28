/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { AddCompanySection } from '../components/AddCompanySection'
import Protected from '../components/Protected'

export default function AddCompany() {
    const navigate = useNavigate();
    useEffect(() => {
        // @ts-ignore
        let user = JSON.parse(localStorage.getItem('user'));
        let role_arr = ['Admin'];
        if (user && user.hasOwnProperty('role') && !role_arr.includes(user.role.name)) {
            navigate(-1)
        }
    }, [])
    return (
        <Protected>
            <div id="wrapper" style={{ paddingTop: "82px" }}>
                <AddCompanySection />
            </div>
        </Protected>
    )
}
