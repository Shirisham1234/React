import React from "react"
import Navbar from "./Navbar/Navbar"
import ContactApp from "./ContactApp/ContactApp"
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
class App extends React.Component{
    render(){
        return <div>
       <Router>
       <Navbar/>
       <Routes>
        <Route path="/contact" element={<ContactApp/>}/>
       </Routes>
       </Router>
        </div>
    }
}
export default App