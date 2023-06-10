import React, { ReactNode } from 'react';
import { checkAuthenticationStatus } from '../api/auth';


export default function Protected(props: { children: ReactNode }) {
  // @ts-ignore
  let token = JSON.parse(localStorage.getItem('access_token'));
  if (!token) {
    window.location.replace("/login");
    return null;
  }
  else {
    checkAuthenticationStatus()
  }
  return (
    <>{props.children}</>
  )
}