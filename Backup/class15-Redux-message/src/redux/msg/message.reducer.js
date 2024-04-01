import {GM,GA} from "./message.action"
let initialState={msg:"Hello! Welcome to Bangalore"}
let msgReducer=(state=initialState,action)=>{
switch(action.type){
    case GM:
        return {message:"Good Morning"}
    case GA:
        return {message:"Good Afternoon"}
     default:
        return state   

}
}
export {msgReducer}