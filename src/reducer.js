import {LOGIN, ADD} from './constant';
const initialState = {items:[]};
const appReducer = function (state = initialState, action) {
    switch (action.type) {
      case LOGIN:
        return {...state,login:true};
      case ADD:
        return {...state,items:action.payload}
      default:
        return state;
    }
  };

  export default appReducer;