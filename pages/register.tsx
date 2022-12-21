import React from 'react'
import RegisterContainer from '../components/containers/RegisterContainer'
import Auth from '../layouts/Auth'
import Header from '../layouts/Header'

function login() {
  return (
    <div>
      <Header title='Register | Sayembara'/>
      <Auth>
        <RegisterContainer/>
      </Auth>
    </div>
  )
}

export default login