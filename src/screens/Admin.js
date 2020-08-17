import React from 'react'
import {connect} from '../store'
import { setAuthStatus, appReset } from '../actions'

const Admin = ({ app, dispatch }) => {

  const handleLogout = () => {
    dispatch( setAuthStatus(false) )
    dispatch( appReset() )
  }

  return (
    <>
      <p>
        Hi { app.name }
      </p>
      <p>
        <button onClick={ handleLogout }>
          Log out
        </button>
      </p>
    </>
  )
}

export default connect( state => ({
  app: state.app
}) )( Admin )