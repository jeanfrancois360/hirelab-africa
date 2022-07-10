/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from 'react'
import { useNavigate } from 'react-router';
import Protected from '../components/Protected'
import { ViewJobCategoriesSection } from '../components/ViewJobCategoriesSection'

export const ViewJobCategories: FC = () => {
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
                <ViewJobCategoriesSection />
            </div>
        </Protected>
    )
}
