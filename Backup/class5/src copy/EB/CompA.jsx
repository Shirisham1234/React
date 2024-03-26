import React from "react"
class CompA extends React.Component{
    state;
    constructor(props){
        super(props)
        this.state={
            msg:"Hello"
        }
    }
    updateHandler=(value)=>{
this.setState({msg:value})
    }
    render(){
        return <div>
        <h3>Wish Message:{this.state.msg}</h3>
        <button onClick={this.updateHandler.bind(this,"Gm")}>GM</button>
        <button onClick={this.updateHandler.bind(this,"Ga")}>GA</button>
        <button onClick={this.updateHandler.bind(this,"Gn")}>GN</button>
        </div>
    }
}
export default CompA