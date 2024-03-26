import React from "react"
let ContactDetails=(props)=>{
return <div>
    <h2>Contact Details</h2>
    <pre>{JSON.stringify(props)}</pre>
    <div className="card">
        <div className="card-header">
        <h2>{props.selcont.name.first}</h2>
        </div>
        <div className="card-body">
        <img src={props.selcont.picture.large} alt=""/>
        </div>
    </div>
    </div>

    
}
export default ContactDetails