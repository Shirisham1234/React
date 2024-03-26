/*import React,{Component} from "react"
import Employee from "./Employee"
class User extends Component{
    user={
        uid:101,
        uname:"Rahul"
 }
 ploc=["wayanad","New Delhi","Bangalore"]
    render(){
       return <div>
            <h3>User Component</h3>
            <Employee user={this.user} loc={this.ploc}/>
        </div>
    }
}
export default User*/

import React from "react"
import Employee from "./Employee"
class User extends React.Component{
    eid=101;
    ename="Siri"
    render(){
        return <div>
            <h1>User Component</h1>
            <h2>{this.eid},{this.ename}</h2>
            
            <Employee prop1={this.eid} prop2={this.ename} />
        </div>
    }
}
export default User