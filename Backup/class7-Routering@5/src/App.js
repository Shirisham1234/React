import React from "react"
import Navbar from "./Navbar/Navbar"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"
class App extends React.Component{
   render(){
    return <div>
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/home" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/services" component={Services}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
    </Router>
    
    </div>
   } 
}
export default App