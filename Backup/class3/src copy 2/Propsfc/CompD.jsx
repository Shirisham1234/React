import React from "react"
class CompD extends React.Component{
    render(){
        return <div>
            <h3>Component D</h3>
            <pre>{JSON.stringify(this.props)}</pre>
            <h2>Wish Message:{this.props.one}</h2>
            <h3>Employee Name:{this.props.emp_name}</h3>
        </div>
    }
}
export default CompD;