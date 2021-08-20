import axios from "axios";
import {userSuccess , userError} from './Action'

 export const FetchData = ()=> {
  return dispatch => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => {
        dispatch(userSuccess(response.data));
       
      })
      .catch(error => {
        dispatch(userError(error));
      });
  };
}

