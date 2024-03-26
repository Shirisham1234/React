import React,{useState} from "react"
let Emp=()=>{
let [msg,setMsg]=useState({mesg:"Hello World"})
let gmHandler=()=>{
    setMsg("good morning")
}
//let gnHandler=()=>{
  //  setMsg("Good night")
// }
    return <div>
        <h3>Emp Component</h3>
        <h2>message:{msg.mesg}</h2>
        <pre>{JSON.stringify(msg)}</pre>
        <button onClick={gmHandler}>Gm</button>
        <button onClick={()=>{setMsg("good afternoon")}}>Ga</button>

    </div>
}
export default Emp