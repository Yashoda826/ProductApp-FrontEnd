import {ActionTypes} from '../constants/action-types';

const initialState = {
    isUserLoggedIn: false
  };

export const userReducer=(state=initialState, {type,payload})=>{

    switch(type){
        case ActionTypes.REGISTER_USER:
            if(payload.token){
 return { ...state, isUserLoggedIn: true };
            }
            else
            return state;
        
       default:
         return state;
    }
}