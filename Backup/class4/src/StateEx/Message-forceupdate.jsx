import React from "react"
class Message extends React.Component{
    message="Hello"
    gmHandler=()=>{
        console.log("Test case 123")
        this.message="Hello,Gm"
        console.log(this.message)
        this.forceUpdate()

    }
    gnHandler=()=>{
        this.message="Hello,Gn"
        this.forceUpdate()
    }
    render(){
        return <>
        <h2>Message Component</h2>
        <h3>Message:{this.message}</h3>
        <button onClick={this.gmHandler}>Gm</button>
        <button onClick={this.gnHandler}>Gn</button>
        </>
    }
}
export default Message