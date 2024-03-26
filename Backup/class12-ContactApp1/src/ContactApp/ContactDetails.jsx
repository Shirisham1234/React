import React from "react"
const ContactDetails=(props)=>{
return <div>
    <h2>Contact Details</h2>
    <pre>{JSON.stringify(props)}</pre>
    <div className="card">
        <div className="card-header">
        <img src={props.selcontact.image} alt=""/>
        </div>
        <div className="card-body">
        <h2>{props.selcontact.firstName}</h2>
        </div>
    </div>
</div>

}
export default ContactDetails