import { createReducer } from '../store'
import { setAuthStatus } from '../actions'

const initialState = {
  loggedin: false
}

export const authReducer = createReducer( initialState, (state, action) => {

  switch (action.type) {
    case setAuthStatus.getType():
      return {
        ...state,
        loggedin: action.payload
      };

    default:
      return state
  }

})