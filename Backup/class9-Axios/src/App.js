import React from "react"
import Navbar from "./Navbar/Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom"
//import User from "./HttpEx/User"
import User1 from "./HttpEx/User1"
import Home from "./Headers/Home"
import About from "./Headers/About"
import Services from "./Headers/Services"
import Contact from "./Headers/Contact"


class App extends React.Component{
   render(){
    return <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/contact" element={<Contact/>}/>
      {/* <Route path="/users" element={<User/>}/> */}
      <Route path="/users" element={<User1/>}/>
    </Routes>
     
     
   
    </BrowserRouter>
    </div>
    
   } 
}
export default App