import React from "react"
import {BrowserRouter as Router,Route,Routes } from "react-router-dom"
import Navbar from "./Navbar/Navbar"
import ContactApp from "./ContactApp/ContactApp"
let App=()=>{
return <div>
    <Router>
    <Navbar/>
    <Routes>
    <Route path="/contactapp" element={<ContactApp/>}/> 
    </Routes>
   </Router>
</div>
}
export default App