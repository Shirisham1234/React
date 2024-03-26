import React from "react"
class ContactList extends React.Component{
    selectHandler=(user)=>{
    this.props.selectedContact(user)
    }
    render(){
        return <div>
            <h2>Contact List</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead className="bg-primary text-white">
                             <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Gender</th>
                             </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.contacts.map((user,index)=>{
                                return <tr key={index} onClick={this.selectHandler.bind(this,user)}>
                                    <td>{user.login.uuid.substr(32)}</td>
                                    <td>{user.name.last}</td>
                                    <td>{user.gender}</td>
                                </tr>
                                    })
                                    
                                }
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    }
}
export default ContactList