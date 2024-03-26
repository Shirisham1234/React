import React from "react"
import Axios from "axios"
class User1 extends React.Component{
    state={
        users:[]
    }
    getHandler=()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>{
         console.log(resp.data)
        })
        .catch((err)=>{
         console.log(err)
        })

    }
    render(){
        return <div>
        <h2>User1 Component</h2>
        <button onClick={this.getHandler}>Test</button>
        </div>
    }
}
export default User1