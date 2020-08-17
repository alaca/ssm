import React from 'react'
import Admin from './Admin'
import Login from './Login'
import { useStore } from '../store';

const AppLayout = () => {

  const [ {auth} ] = useStore()

  return (
    <div className="App">
      { auth.loggedin ? <Admin /> : <Login /> }
    </div>
  )
}

export default AppLayout;