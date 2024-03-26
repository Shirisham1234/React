import React from "react"
class Message extends React.Component{
   state={
    message:"Hello"
   }
    gmHandler=()=>{
    this.setState({message:"Good Morning"})
    }
    gnHandler=()=>{
        this.setState({message:"Good Night"})
    }
    render(){
        return <>
        <h2>value:{this.state.message}</h2>
        <button onClick={this.gmHandler}>Gm</button>
        <button onClick={this.gnHandler}>Gn</button>
        </>
    }
}
export default Message