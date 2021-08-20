import * as Type from './Type'

export function userSuccess(data){
     return{
         type : Type.USER_SUCCESS,
         payload: data
        }
}

export function userError(){
    return{
        type : Type.USER_ERROR,
    }
}