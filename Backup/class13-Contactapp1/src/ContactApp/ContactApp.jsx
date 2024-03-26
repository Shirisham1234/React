import React,{useEffect,useState} from "react"
import Axios from "axios"
import ContactList from "./ContactList"
import ContactDetails from "./ContactDetails"
let ContactApp=()=>{
let [contacts,setContacts]=useState([])
let [selcontact,setSelcontact]=useState({})
useEffect(()=>{
Axios.get("https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist")
.then((resp)=>{
setContacts(resp.data)
})
.catch()
},[])
let selectedContact=(user)=>{
setSelcontact(user)
}
    return <div>
    <h2>Contact App</h2>
    <pre>{JSON.stringify(contacts)}</pre>
    <pre>{JSON.stringify(selcontact)}</pre>
    <div className="container">
        <div className="row">
            <div className="col-md-8">
                {
                contacts.length>0 ? <>
                <ContactList contacts={contacts} selectedContact={selectedContact}/>
                </> :null
                }
         
            </div>
            <div className="col-md-4">
                {
                    Object.keys(selcontact).length>0 ? <>
                    <ContactDetails selcont={selcontact}/>
                    </>:null
                }
                
            </div>
        </div>
    </div>
    </div>
}
export default ContactApp