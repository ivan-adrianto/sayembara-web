import React from 'react'
import LoginContainer from '../components/containers/LoginContainer'
import Auth from '../layouts/Auth'
import Header from '../layouts/Header'

function login() {
  return (
    <div>
      <Header title='Login | Sayembara'/>
      <Auth>
        <LoginContainer/>
      </Auth>
    </div>
  )
}

export default login