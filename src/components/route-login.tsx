import * as React from 'react'
import { useIdentityContext } from 'react-netlify-identity'
import { navigate } from 'gatsby'

const RoutLogin = ({ showModal }: any) => {
  const identity = useIdentityContext()

  if (identity && identity.isLoggedIn) {
    navigate('dashboard/secret', { replace: true })
  }

  return (
    <>
      <h1>Log In or Sign Up</h1>
      <button onClick={showModal}>Log In</button>
    </>
  )
}

export default RoutLogin
