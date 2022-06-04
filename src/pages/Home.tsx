import React from 'react'
import Home_AllUsers from './Home_AllUsers'
import Home_UpdateForm from './Home_UpdateForm'

export default function Home() {
  return (
    <div style={{ width: '100%' }}>
      <Home_AllUsers></Home_AllUsers>
      <Home_UpdateForm></Home_UpdateForm>
    </div>
  )
}
