import React from "react"
import Axios from "axios"
class User extends React.Component{
    constructor(props){
        super(props);
        this.state={
            users:[]
        }
    }
    componentDidMount(){
     Axios.get("https://jsonplaceholder.typicode.com/users")  
     .then((resp)=>{
     this.setState({users:resp.data})
     }) 
     .catch((err)=>{

     })
    }
    render(){
        return <div>
            <div className="container">
                <div className="row">
                <pre>{JSON.stringify(this.state.users)}</pre>
                {
                     this.state.users.length>0 ?
                     <React.Fragment>
                <div className="col-md-3">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <td>Id</td>
                                <td>Name</td>
                                <td>Email</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map((user)=>{
                                    return <tr>
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>

                </div>
                        </React.Fragment>:
                        <>No data</>
                }
                </div>
            </div>
      
        </div>
    }
}
export default User