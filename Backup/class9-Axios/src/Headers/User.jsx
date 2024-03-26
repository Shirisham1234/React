import React from "react"
import Axios from "axios"
class User extends React.Component{
state={
    users:[]
}
componentDidMount(){
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then((resp)=>{
        console.log(resp.data)
     this.setState({users:resp.data})
    })
    .catch((err)=>{
        console.log(err)
    })
}
    render(){
        return (<div>
           
                <h2>User Component</h2>
                <pre>{JSON.stringify(this.state.users)}</pre> 
   


         </div>    
        )
    }
}
export default User