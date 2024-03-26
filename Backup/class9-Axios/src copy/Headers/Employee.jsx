import React from "react"
import Axios from "axios"
class Employee extends React.Component{
    constructor(props){
        super(props)
        this.state={
            empData:{}
        }
    }
    componentDidMount(){
        Axios.get("https://dummyjson.com/users")
        .then((resp)=>{
            console.log(resp.data)
        this.setState({empData:resp.data})
        })
        .catch((err)=>{
console.log(err.data)
        })
    }
    render(){
        // let {users}=this.state.empData
        return <div>
            <div className="container">
                <div className="row">
                <pre>{JSON.stringify(this.state.empData)}</pre>
                {
                    Object.keys(this.state.empData).length>0 ? 
                    <React.Fragment>
                   <div className="col-md-3">
                   <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>First Name</td>
                            <td>Age</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            // users.map((user)=>{
                                this.state.empData.users.map((user)=>{
                                return <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.age}</td>
                                </tr>
                            })
                        }
                    </tbody>
                   </table>
                   </div>
                    </React.Fragment> :
                    <>No data</>
                }
                </div>
            </div>
        
        </div>
    }
}
export default Employee