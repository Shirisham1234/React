import Axios from "axios"
let REQ="REQ"
let SUCCESS="SUCCESS"
let FAILURE="FAILURE"
let user_Req=()=>{
    return {type:REQ,msg:"loading"}
}
let user_Success=(users)=>{
    return {type:SUCCESS,payload:users}
}
let user_Failure=()=>{
    return {type:FAILURE,msg:"error"}
}
let user_Action=()=>{
    return async(dispatch)=>{
    dispatch(user_Req())
    Axios.get("https://jsonplaceholder.typicode.com/users")
    .then((resp)=>{dispatch(user_Success(resp.data))})
    .catch((err)=>{dispatch(user_Failure())})
    }
}
export {user_Action,REQ,SUCCESS,FAILURE}