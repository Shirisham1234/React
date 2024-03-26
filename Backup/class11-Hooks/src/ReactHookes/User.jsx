import React,{useState,useEffect} from "react"
import Axios from "axios"
let User=()=>{
let[users,setUsers]=useState([])
useEffect(()=>{
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then((resp)=>{
     setUsers(resp.data)
    })
    .catch(()=>{})
},[])
    return <div>
        <h2>User Component</h2>
        <pre>{JSON.stringify(users)}</pre>
        {
         users.length>0 ? 
         <>
         <table border="1">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {
           users.map((user)=>{
            return <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>

            </tr>
           }) 
                }
            </tbody>
         </table>
         </> : <h3>No data</h3>       
        }
    </div>
}
export default User