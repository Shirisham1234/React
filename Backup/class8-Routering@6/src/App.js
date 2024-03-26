import React from "react"
import Navbar from "./Navbar/Navbar"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./Headers/Home"
import About from "./Headers/About"
import Services from "./Headers/Services"
import Contact from "./Headers/Contact"

class App extends React.Component{
   render(){
    return <div>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
     
     
   
    </Router>
    </div>
    
   } 
}
export default App