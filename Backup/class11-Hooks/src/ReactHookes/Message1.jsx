import React,{useState} from "react"
let Message1=()=>{
let [msg,setMsg]=useState("Hello")
    return <div>
   <h2>Messge Component</h2>
   <h3>Message:{msg}</h3>
   <button onClick={()=>{setMsg("Gm")}}>GM</button>
   <button onClick={()=>{setMsg("GN")}}>GN</button>
    </div>
}
export default Message1