import { ActionTypes } from "../constants/action-types";

export const userRegistration=(response)=>{
console.log('response action', response);
if(response.status){
    localStorage.setItem('token',response.token);
}

    return{
        type:ActionTypes.REGISTER_USER,
        payload:response
    }
}