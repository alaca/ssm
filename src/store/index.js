import React from 'react'
import PropTypes from 'prop-types'

const Context = React.createContext(null)

const useCreateStore = data => {

  const getInitialState = () => {
    const state = {}
    // Combine reducers state
    for (let reducer in data) {
      state[reducer] = data[reducer].state
    }
    return state
  }

  const getReducers = () => {
    return (state, action) => {
      for (let reducer in data) {
        const newState = data[reducer].reducer(state[reducer], action)
        // Compare new state with old state
        if ( newState !== state[reducer]) {
          return {
            ...state,
            [reducer]: newState
          }
        }
      }
      return state
    }
  }

  const reducer = React.useMemo(() => getReducers(), [])
  const initialState = React.useMemo(() => getInitialState(), [])

  return React.useReducer(reducer, initialState)
}

const RenderComponent = React.memo( props => {
  const {component, ...rest} = props
  return component(rest)
})

export const createStore = useCreateStore
export const useStore = () => React.useContext(Context)
export const Provider = ({children, store}) => <Context.Provider value={store}>{children}</Context.Provider>
export const createReducer = (state, reducer) => ({state, reducer})

export const createAction = type => {
  const action = ( payload = null ) => ({ type, payload })
  action.getType = () => type
  return action
}

export const connect = map => Component => componentProps => {
  const [state, dispatch] = useStore()
  const props = {...componentProps, ...map(state), dispatch}
  return <RenderComponent component={Component} {...props} />
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
  store: PropTypes.array
}