import React from "react"
import {incrAction,decrAction} from "../redux/prod/product.action"
import {useDispatch,useSelector} from "react-redux"
let Product=()=>{
let dispatch=useDispatch()
let prod_obj=useSelector((state)=>{
       return state
})
    return <div>
    <h2>Product component</h2>
    <pre>{JSON.stringify(prod_obj)}</pre>
    {prod_obj.qty}
    <br></br>
    <button onClick={()=>{dispatch(decrAction())}}>-</button>
          1
    <button onClick={()=>{dispatch(incrAction())}}>+</button>     
    </div>
}
export default Product