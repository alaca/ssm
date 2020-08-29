import React from 'react'
import { connect } from '../store'
import { setAuthStatus, appReset } from '../actions'

import styles from './Admin.module.css'

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

      { app.showSpamMessage && (
        <p className={ styles.blink }>
          !!!You won $1000000!!!
        </p>
      )}

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