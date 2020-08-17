import { createReducer } from '../store'
import { appReset, setAppName } from '../actions'

const initialState = {
  name: ''
};


export const appReducer = createReducer( initialState, ( state, action ) => {

  switch (action.type) {

    case setAppName.getType():
      return {
        ...state,
        name: action.payload
      };

    case appReset.getType():
      return initialState

    default:
      return state
  }

})