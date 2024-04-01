import {INCR,DECR} from "./product.action"
let initialState={ProductName:"Iphone pro 16",
                  price:18000,
                  color:"blue",
                  qty:1 }
let productReducer=(state=initialState,action)=>{
switch(action.type){
    case INCR:
    return {...state,qty:state.qty + 1}
    case DECR:
    return {...state,qty:state.qty - 1}
    default:
        return state;
}
}
export {productReducer}