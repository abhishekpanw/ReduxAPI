import { combineReducers } from "redux";
import reducer from './Reducer';

 const rootreducer = combineReducers({
    counter : reducer
})

export default rootreducer