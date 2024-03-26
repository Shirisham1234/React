import React from "react"
let ContactList=(data)=>{
let showContactHandler=(user)=>{
data.selectedContact(user)
}
    return <div>
       <h2>Contact List</h2> 
       <pre>{JSON.stringify(data)}</pre>
       <div className="container">
        <div className="row">
            <div className="col">
                <table className="table">
                    <thead className="bg-primary text-white">
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>gender</th>
                    </tr>
                    </thead>
                    <tbody>
                      {
                        data.contacts.map((user,index)=>{
                         return <tr key={index} onClick={showContactHandler.bind(null,user)}>
                            <td>{user.login.uuid.substr(32)}</td>
                            <td>{user.name.first}</td>
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
export default ContactList