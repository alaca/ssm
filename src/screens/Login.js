import React from 'react'
import { connect } from '../store'
import { setAppName, setAuthStatus } from '../actions'

const Login = ({ app, dispatch }) => {

  const handleChange = e => {
    const value = e.target.value
    dispatch( setAppName(value) )
  }

  const handleLogin = () => dispatch( setAuthStatus(true) )

  const isSubmitDisabled = () => !app.name.trim().length

  return (
    <>
      <p>
        <label>
          Enter name <br />
          <input type="text" onChange={ handleChange } value={ app.name } />
        </label>
      </p>
      <p>
        <button onClick={ handleLogin } disabled={ isSubmitDisabled() }>
          Log in
        </button>
      </p>
    </>
  )
}


export default connect( state => {
  return {
    app: state.app
  }
})( Login )