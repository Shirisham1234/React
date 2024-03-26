import React,{useState,useEffect} from "react"
import Axios from "axios"
import ContactList from "./ContactList"
import ContactDetails from "./ContactDetails" 
let ContactApp=()=>{
let [contact,setContact]=useState({})
let [selcontact,setSelcontact]=useState({})
useEffect(()=>{
    Axios.get("https://dummyjson.com/users")
    .then((resp)=>{
    setContact(resp.data)
    })
    .catch()
},[])
let selectedContact=(user)=>{
 setSelcontact(user)
}
console.log(contact);

return <div className="container">
       <div className="row">
        <h2>Contact App</h2>
       <pre>{JSON.stringify(contact)}</pre>
    <div className="col-md-8">
     {
        Object.keys(contact).length>0 ? <><ContactList contact={contact.users} selectedContact={selectedContact}/></> :null  
    }
    
    </div>
    <div className="col-md-4">
        {
            Object.keys(selcontact).length>0 ? <><ContactDetails selcontact={selcontact}/></>:null
        }
    
    </div>
</div>
</div>
}
export default ContactApp