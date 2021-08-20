import React ,{useEffect} from 'react'
import {Table} from 'react-bootstrap'
import {useDispatch , useSelector} from 'react-redux'
import {FetchData} from '../redux/actions/FetchData'

function Users() {
 const dispatch = useDispatch()
 const userList = useSelector(state => state.counter)
 const {loading , post , error} = userList

useEffect(() => {
    dispatch(FetchData())
}, [dispatch])

    return (
        <div>
    <Table striped bordered hover>
        <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
         {loading ? "Loading..." : error ? error.message : post.map((elem, index) => 
          <tbody>
            <tr>
              <td>{index +1}</td>
              <td>{elem.title}</td>
              <td>{elem.body}</td>
               </tr>           
             </tbody>            
            )}
        </Table>
        </div>
    )
}

export default Users
