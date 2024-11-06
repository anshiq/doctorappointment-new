'use client'
import React, { useEffect } from 'react'
function page(props: any) {
    const appointmentId = props.params.id;
    useEffect(()=>{


        
    },[appointmentId])
  return (
    <div>{appointmentId}</div>
  )
}

export default page