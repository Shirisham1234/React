import React from "react"
class ContactDetails extends React.Component{
    render(){
        return <div>
            <h2>contact Details</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <div className="card">
                <div className="card-header">
                <img src={this.props.Contacts.picture.medium} alt=""/>
                </div>
                <div className="card-body">
                <h2>{this.props.Contacts.name.last}</h2>
                </div>
             </div> 
        </div>
    }
}
export default ContactDetails