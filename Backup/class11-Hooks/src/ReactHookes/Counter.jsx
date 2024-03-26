import React,{useState} from "react"

let Counter=()=>{
    let [counter,setCounter]=useState(0)
    return <div>
     <h4>Counter Component</h4>
     <h3>counter value:{counter}</h3>
     <button onClick={()=>{setCounter(counter +1)}}>+</button>
     <button onClick={()=>{setCounter(counter -1)}}>-</button>
    </div>
}
export default Counter