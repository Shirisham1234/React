import React from "react"
import {Link} from "react-router-dom"
class Navbar extends React.Component{
    render(){
        return <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
            <Link to="#" className="navbar-brand">React-ContactApp</Link>
            <div className="ml-auto">
            <ul className="navbar-nav">
            <li><Link to="/home" className="nav-link">Home</Link></li>
                <li><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
            </div>
        </nav>
        
    }
}
export default Navbar