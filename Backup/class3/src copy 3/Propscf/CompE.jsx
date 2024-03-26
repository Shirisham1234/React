import React from "react"
import CompF from "./CompF"
class CompE extends React.Component{
    user={
        uid:101,
        uname:"Siri"
}
ploc=["wayanad","Bangalore","New Delhi"]
    render(){
        return <div>
            <h2>Component E</h2>
            {/* <h3>{this.user}</h3> */}
            <hr/>
            <CompF prop1={this.user} prop2={this.ploc}/>
        
        </div>
    }
}
export default CompE