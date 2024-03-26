import React from "react"

let ContactList=(props)=>{
    console.log(props)
    let selectedContactHandler=(user)=>{
    console.log(user)
    props.selectedContact(user)
    }
    return <div>
      <h2>ContactList Component</h2>
      <div className="container">
        <div className="row">
        <pre>{JSON.stringify(props.contact)}</pre>
            <div className="col">
                <table className="table">
                 <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                 </thead>
                 <tbody>
                    {
                       props.contact.map((user)=>{
                    return <tr key={user.id} onClick={selectedContactHandler.bind(null,user)}>
                        <td>{user.id}</td>
                        <td>{user.firstName}</td>
                        <td>{user.email}</td>

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
export default ContactList