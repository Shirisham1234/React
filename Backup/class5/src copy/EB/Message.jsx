/*import React from "react"
class Message extends React.Component{
    state={
        msg:"Hello"
    }
    messageHandler=()=>{
        this.setState({msg:"Hello Goodmorning" })
    }
    render(){
        return <div>
        <h1>Wish Message:{this.state.msg}</h1>
        <button onClick={this.messageHandler}>GM</button>
        <button onClick={this.messageHandler}>GA</button>
        <button onClick={this.messageHandler}>GN</button>
        </div>
    }
}
export default Message*/

import React from "react"
class Message extends React.Component{
    state={
        msg:"Hello"
    }
    messageHandler=(value)=>{
        this.setState({msg:value })
    }
    render(){
        return <div>
        <h1>Wish Message:{this.state.msg}</h1>
        <button onClick={this.messageHandler.bind(this,"Gm")}>GM</button>
        <button onClick={this.messageHandler.bind(this,"Ga")}>GA</button>
        <button onClick={this.messageHandler.bind(this,"gn")}>GN</button>
        </div>
    }
}
export default Message