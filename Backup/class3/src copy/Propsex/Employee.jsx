/* import React,{Component} from "react"
class Employee extends Component{
    render(){
         return <div>
         <hr/>
            <h3>Employee Component</h3>
            <pre>{JSON.stringify(this.props)}</pre>
            
            <h3>User Id:{this.props.user.uid}</h3> 
            <h3>User Name:{this.props.user.uname}</h3>
            <h4>User Loc:{this.props.loc[0]}</h4>
            <h4>User Loc:{this.props.loc[1]}</h4>
            <h4>User Loc:{this.props.loc[2]}</h4>
        </div>
            
    
    }
}
export default Employee*/

import React from "react"
class Employee extends React.Component{
    
    render(){
        return <div>
            <hr/>
            <h2>Employee Component</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <h2>Emp Id:{this.props.prop1}</h2>
            <h2>Emp Name:{this.props.prop2}</h2>
            
        </div>
    }
}
export default Employee;

