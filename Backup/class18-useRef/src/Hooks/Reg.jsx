import React,{useRef} from "react"
let Reg=()=>{
let btnRef=useRef()
let acceptTC=(event)=>{
console.log(event.target.checked)
if(event.target.checked===true){
    btnRef.current.disabled=false
}
else{
    btnRef.current.disabled=true
}
}
   return <div className="container">
    <div className="row">
    <div className="col-md-4">
    <h2>Reg Example</h2> 
    <form>
        <div className="form-group">
            <input className="form-control" type="text" placeholder="Username"/>
        </div>
        <div className="form-group">
            <input className="form-control" type="text" placeholder="MobileNumber"/>
        </div>
        <div className="form-check">
            <input type="checkbox" onChange={acceptTC}/>Accept Terms and Conditions
        </div>
        <div className="form-group">
            <input type="submit" value="Registration" className="btn btn-success" disabled ref={btnRef}/>
        </div>
    </form>  
    </div>
    </div>
    </div>
}
export default Reg