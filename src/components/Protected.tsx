import React, {ReactNode } from 'react';


export default function Protected(props: { children: ReactNode }) {
  // @ts-ignore
  let token = JSON.parse(localStorage.getItem('access_token'));
  if(!token){
    window.location.replace("/login");
  };
  return (
    <>{props.children}</>
  )
}