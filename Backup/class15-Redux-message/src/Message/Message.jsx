import React from "react"
import {gmAction,gaAction} from "../redux/msg/message.action"
import { useDispatch,useSelector} from "react-redux"
const Message=()=>{
let dispatch=useDispatch()
let msg_state=useSelector((state)=>{
return state
 })
let gmHandler=()=>{
dispatch(gmAction())
}
    return <div>
    <h2>message component</h2>
    <pre>{JSON.stringify(msg_state)}</pre>
     value:{msg_state.message} 
    <br></br>
    <button onClick={gmHandler}>Gm</button>
    <button onClick={()=>{dispatch(gaAction())}}>Ga</button>
    </div>
}
export default Message