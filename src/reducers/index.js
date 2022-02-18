import { combineReducers } from "redux";
import isLoggedReducer from './LoggedReducer'
const initialState = {
    sidebarShow: 'responsive'
  }
  
  const changeState = (state = initialState, { type, ...rest }) => {
    switch (type) {
      case 'set':
        return {...state, ...rest }
      default:
        return state
    }
  }

  const rootReducer = combineReducers({
      nav : changeState,
      isLogged : isLoggedReducer
  })

  export default rootReducer;