import { setAuthStatus, setAppSpamMessageVisibility } from '../actions'

/*
Trigger some side effects if the input value is equal to "John Doe"
And show spam message... yeah, that makes perfect sense
*/
export const authStatusMiddleware = store => next => action => {

  if ( action.type === setAuthStatus.getType() ) {

    const { app } = store.getState()

    if ( app.name === 'John Doe' ) {
      store.dispatch( setAppSpamMessageVisibility(true) )
    }

  }

  next(action)
}