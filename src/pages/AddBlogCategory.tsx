/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';
import { AddBlogCategorySection } from '../components/AddBlogCategorySection';
import Protected from '../components/Protected'

export default function AddBlogCategory() {
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
                <AddBlogCategorySection />
            </div>
        </Protected>
    )
}
