import * as Type from '../actions/Type'

const initialState = {
    post : [],
    loading : true,
    error: ''
}

const reducer = (state = initialState, action)=>{
    switch(action.type){
       case Type.USER_SUCCESS:
           return{
               ...state,
             post : action.payload,
             loading :false,
         }
         case Type.USER_ERROR:
            return{
                ...state,
              loading :false,
              error : action.payload
          }
          default : return state
    }
}

export default reducer;