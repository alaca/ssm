import React from 'react'
import { createStore, Provider } from './store'
import { appReducer, authReducer } from './reducers'
import { authStatusMiddleware } from './middlewares'

import AppLayout from './screens/App'

import './App.css'

const App = () => {

  const store = createStore({
    app: appReducer,
    auth: authReducer
  }, [ authStatusMiddleware ])

  return (
    <Provider store={store}>
      <AppLayout />
    </Provider>
  );
}

export default App
