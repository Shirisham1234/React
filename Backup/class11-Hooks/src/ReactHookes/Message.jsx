import React,{useState} from "react"
let Message=()=>{
//let msg="hello"
      let[msg,setMsg]=useState("Hello Good Morning")
     let gmHandler=()=>{
    setMsg("hello gm")
      }
      let gnHandler=()=>{
        setMsg("hello gn")
      }
    return <div>
    <h2>Message component</h2>
    <h2>Message:{msg}</h2>
    <button onClick={gmHandler}>Gm</button>
    <button onClick={gnHandler}>Gn</button>
    </div>
}
export default Message



