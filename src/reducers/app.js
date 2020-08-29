import { createReducer } from '../store'
import { appReset, setAppName, setAppSpamMessageVisibility } from '../actions'

const initialState = {
  name: '',
  showSpamMessage: false
};


export const appReducer = createReducer( initialState, ( state, action ) => {

  switch (action.type) {

    case setAppName.getType():
      return {
        ...state,
        name: action.payload
      };

    case setAppSpamMessageVisibility.getType():
      return {
        ...state,
        showSpamMessage: action.payload
      };

    case appReset.getType():
      return initialState

    default:
      return state
  }

})